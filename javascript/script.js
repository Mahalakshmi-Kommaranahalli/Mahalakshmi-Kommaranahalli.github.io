document.addEventListener("DOMContentLoaded", function () {
  initializeMenu();
  injectData(window.data);
  initializeAnimations();
  loadRandomQuote();
  makeparticle();
});

function makeparticle() {
  const canvas = document.querySelector(".particles-js");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Set canvas dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Particle class
  class Particle {
    constructor(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
      this.opacity = 0.5;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }

    update(particles) {
      this.draw();

      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.velocity.x = -this.velocity.x;
      }
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.velocity.y = -this.velocity.y;
      }

      particles.forEach((particle) => {
        const distance = Math.hypot(this.x - particle.x, this.y - particle.y);
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(particle.x, particle.y);
          ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / 150})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.closePath();
        }
      });
    }
  }

  const particles = [];
  const numberOfParticles = 60;
  const color = "#000000";

  function init() {
    particles.length = 0;
    for (let i = 0; i < numberOfParticles; i++) {
      const radius = Math.random() * 3 + 1;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const velocity = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      };
      particles.push(new Particle(x, y, radius, color, velocity));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update(particles);
    });
  }

  init();
  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });

  canvas.addEventListener("click", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    for (let i = 0; i < 4; i++) {
      const radius = Math.random() * 3 + 1;
      const velocity = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      };
      particles.push(new Particle(mouseX, mouseY, radius, color, velocity));
    }
  });
}

// Menu item click event
function initializeMenu() {
  const menuItems = document.querySelectorAll(".menuBar ul li a");
  const menuBar = document.querySelector(".menuBar");
  const menuIcon = document.querySelector(".sec1__menuIcon");

  if (menuIcon && menuBar) {
    menuIcon.addEventListener("click", function () {
      menuIcon.classList.toggle("active");
      menuBar.classList.toggle("active");
    });
  }

  if (menuBar) {
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", function () {
        menuBar.classList.remove("active");
        if (menuIcon) menuIcon.classList.remove("active");
      });
    });
  }
}

// Inject all dynamic content
function injectData(data) {
  injectAbout(data.about);
  injectSocialLinks(data.about.socialLinks);
  injectSocialLinksAboutSection(data.about.socialLinks);
  injectEducation(data.education);
  injectWorkExperience(data.work);
  injectSkills(data.skills);
  injectProjects(data.projects);
  injectCertifications(data.certifications);
  injectContact(data.about.contact);
}

// Inject About section
function injectAbout(aboutData) {
  const profileImg = document.getElementById("profileImageElement");
  if (profileImg) profileImg.src = aboutData.profileImage;

  document
    .querySelectorAll(".firstNameElement")
    .forEach((el) => (el.textContent = aboutData.firstName));
  document.querySelectorAll(".fullNameElement").forEach((el) => {
    typeText(el, aboutData.fullName, 50);
  });

  document.querySelectorAll(".roleElement").forEach((el) => {
    typeText(el, aboutData.role, 50);
  });

  document
    .querySelectorAll(".nicknameElement")
    .forEach((el) => (el.textContent = aboutData.nickname));
  document
    .querySelectorAll(".titleElement")
    .forEach((el) => (el.textContent = aboutData.title));

  typeWriterWithTags("aboutSummary", aboutData.summary, 1);
  typeWriterWithTags("footerTextElement", aboutData.footerText, 15);

  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
    yearElement.style.fontFamily = "'Agustina', sans-serif";
    yearElement.style.fontSize = "20px";
    yearElement.style.fontWeight = "normal";
  }
}

function typeText(element, text, speed = 50) {
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function typeWriterWithTags(elementId, text, speed) {
  const container = document.getElementById(elementId);
  if (!container) return;
  container.innerHTML = "";

  const tokens = text
    .split(/(<\/?[^>]+>)/g)
    .filter((token) => token.length > 0);

  const elementStack = [container];
  let tokenIndex = 0;
  let charIndex = 0;

  function typeNext() {
    if (tokenIndex >= tokens.length) return;

    const token = tokens[tokenIndex];
    const currentEl = elementStack[elementStack.length - 1];

    if (token.startsWith("<") && token.endsWith(">")) {
      if (token[1] !== "/") {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = token;
        const newEl = tempDiv.firstChild;
        currentEl.appendChild(newEl);

        if (!token.endsWith("/>")) {
          elementStack.push(newEl);
        }
      } else {
        elementStack.pop();
      }
      tokenIndex++;
      charIndex = 0;
      setTimeout(typeNext, speed);
    } else {
      if (charIndex < token.length) {
        const textNode = document.createTextNode(token[charIndex]);
        currentEl.appendChild(textNode);
        charIndex++;
        setTimeout(typeNext, speed);
      } else {
        tokenIndex++;
        charIndex = 0;
        setTimeout(typeNext, speed);
      }
    }
  }

  typeNext();
}

// Inject Social Links
function injectSocialLinks(socialLinks) {
  const socialBtns = document.querySelectorAll(".social-btn");

  socialBtns.forEach((link) => {
    link.classList.forEach((className) => {
      if (className.endsWith("LinkElement")) {
        const platform = className.replace("LinkElement", "").toLowerCase();
        if (socialLinks[platform]) {
          link.href = socialLinks[platform].url;
        }
      }
    });
  });
}

// Inject Social Links into About Section
function injectSocialLinksAboutSection(socialLinks) {
  const socialMediaTypes = [
    { name: "Github", key: "github", color: "#333333" },
    { name: "LinkedIn", key: "linkedin", color: "#0077b5" },
    { name: "Instagram", key: "instagram", color: "#e1306c" },
    { name: "Twitter", key: "twitter", color: "#111111" },
    { name: "Spotify", key: "spotify", color: "#1db954" },
  ];

  const container = document.querySelector(".example-2");
  if (!container) return;
  container.innerHTML = "";

  socialMediaTypes.forEach((media) => {
    const linkObj = socialLinks[media.key];
    if (!linkObj || !linkObj.url) return;
    const socialUrl = linkObj.url;
    const svgIcon = window.image[media.name] || window.image.Link || "";

    const listItem = document.createElement("li");
    listItem.classList.add("icon-content", "example-2", media.name);

    listItem.innerHTML = `
      <a aria-label="${media.name}" data-social="${media.name}" href="${socialUrl}" target="_blank">
        <div class="filled" style="background-color: ${media.color};"></div>
        <div id="${media.name}Image">${svgIcon}</div>
      </a>
      <div class="tooltip">${media.name === "Twitter" ? "X (Twitter)" : media.name}</div>
    `;

    container.appendChild(listItem);
  });
}

// Inject Education
function injectEducation(educationData) {
  const container = document.getElementById("educationInjector");
  if (!container || !educationData) return;

  container.innerHTML = educationData
    .map(
      (edu) => `
      <h2>${edu.studyType} in ${edu.area}, ${edu.endDate}</h2>
      <p><strong>Institution:</strong> ${edu.institution}</p>
      ${edu.gpa ? `<p><strong>GPA:</strong> ${edu.gpa}</p>` : ""}
      <p><strong>Duration:</strong> ${edu.startDate} - ${edu.endDate}</p>
      <br />
  `
    )
    .join("");
}

// Inject Work Experience
function injectWorkExperience(workData) {
  const container = document.getElementById("work-experience");
  if (!container || !workData) return;

  container.innerHTML = workData
    .map((job) => {
      const highlightsSection =
        job.highlights && job.highlights.length
          ? `<ul>${job.highlights
              .map((h) => `<li>${h}</li>`)
              .join("")}</ul><br />`
          : "";

      return `
        <h2>${job.name}</h2>
        <h3><strong>${job.position}</strong></h3>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Duration:</strong> ${job.startDate} - ${job.endDate}</p>
        ${highlightsSection}
        <br />
      `;
    })
    .join("");
}

// Inject Skills
function injectSkills(skillsData) {
  const container = document.getElementById("skills-container");
  if (!container || !skillsData) return;

  container.innerHTML = skillsData
    .map((skillCategory) => {
      let categoryName = Object.keys(skillCategory)[0];
      let skillList = skillCategory[categoryName];

      return `
          <div class="col-12 col-md-6 col-lg-4 skill-card">
              <div class="featurette-icon"><i class="fas fa-code"></i></div>
              <h3 class="skill-title">${categoryName}</h3>
              <hr color="#e66060" />
              <p class="skill-text">${skillList.join("<br />")}</p>
          </div>
      `;
    })
    .join("");
}

// Inject Projects
function injectProjects(projectsData) {
  const container = document.getElementById("projects-container");
  if (!container || !projectsData) return;

  container.innerHTML = projectsData
    .map(
      (project) =>
        `<div class="projectCard">
      <div class="projectCard__img">
        <img
          src="${project.img}"
          alt="${project.name}"
          class="projectCard__image"
          style="object-fit: cover; object-position: center 20%;"
        />
      </div>
      <div class="projectCard__descr-wrapper">
        <p class="projectCard__title">${project.name}</p>
        <p><strong>Initial Release:</strong> ${project.date}</p>
        <p>${project.description}</p>
        <p>
          <strong>Technologies:</strong> ${
            project.technologies ? project.technologies.join(", ") : "N/A"
          }
        </p>
        <ul class="project-functionality-list">
          ${
            project.functionality
              ? project.functionality.map((func) => `<li>${func}</li>`).join("")
              : ""
          }
        </ul>
        <div class="projectCard__links">
          ${
            project.previewLink
              ? `<div class="projectCard__left-link">
              <a class="link" href="${project.previewLink}" target="_blank">${window.image.Link} ${project.buttonText || "Preview"}</a>
            </div>`
              : ""
          }
          ${
            project.sourceLink
              ? `<div class="projectCard__right-link">
              <a class="link" href="${project.sourceLink}" target="_blank">${window.image.Github} Code</a>
            </div>`
              : ""
          }
        </div>
      </div>
    </div>`
    )
    .join("");
}

// Inject Certifications
function injectCertifications(certificationsData) {
  const container = document.getElementById("certifications-container");
  if (!container || !certificationsData) return;

  container.innerHTML = certificationsData
    .map(
      (cert) => `
      <div class="cert-card">
          <h2 class="cert-title">${cert.name}</h2>
          <p><strong>Issuer:</strong> ${cert.issuer}</p>
          <p><strong>Issued:</strong> ${cert.issued}</p>
          <p><strong>Credential ID:</strong> ${cert.credentialId}</p>
          ${
            cert.link
              ? `<a href="${cert.link}" target="_blank"><button class="cert-btn">Show Certificate</button></a>`
              : ""
          }
      </div>
  `
    )
    .join("");
}

// Inject Contact Info
function injectContact(contactData) {
  document.querySelectorAll(".emailElement").forEach((el) => {
    el.textContent = contactData.email || "mahalakshmik225@gmail.com";
    el.href = `mailto:${contactData.email || "mahalakshmik225@gmail.com"}`;
  });

  const phoneEl = document.querySelector(".phoneElement");
  if (phoneEl) {
    if (contactData.phone) {
      phoneEl.textContent = contactData.phone;
      phoneEl.href = `tel:${contactData.phone}`;
    } else {
      phoneEl.parentElement.parentElement.style.display = "none";
    }
  }

  const whatsappEl = document.querySelector(".whatsappElement");
  if (whatsappEl) {
    if (contactData.whatsapp) {
      whatsappEl.textContent = contactData.whatsapp;
      whatsappEl.href = `https://wa.me/${contactData.whatsapp}`;
    } else {
      whatsappEl.parentElement.parentElement.style.display = "none";
    }
  }
}

// Random quote loader
function loadRandomQuote() {
  const quotes = window.data.quotes;
  if (!quotes || !quotes.length) return;

  const quotePageElement = document.getElementById("quotePageElement");
  const quoteSource = document.getElementById("quoteSource");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  if (quotePageElement) quotePageElement.innerHTML = `"${selectedQuote.quote}"`;
  if (quoteSource) quoteSource.textContent = `— ${selectedQuote.source || "Anonymous"}`;
}

// Initialize animations
function initializeAnimations() {
  if (typeof gsap !== "undefined") {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.from(".navBar", { y: "-10rem", duration: 1 })
      .from(".navBar .navBar__menu ul li", {
        y: "-2rem",
        opacity: 0,
        duration: 1,
        stagger: 0.25,
      })
      .to(
        ".sec1__content .sec1__contentDetail h1",
        { y: "0rem", duration: 1, stagger: 0.25 },
        "=-1"
      )
      .from(".sec1__imgBx img", { opacity: 0, x: "50%", duration: 1.5 })
      .from(".sec1__content a", { opacity: 0, duration: 1.5 }, "=-3");
  }
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  // Scroll to Top Icon
  const scrollIcon = document.querySelector(".fa-arrow-up");
  window.addEventListener("scroll", function () {
    if (scrollIcon) {
      if (window.scrollY > 300) {
        scrollIcon.classList.add("active");
      } else {
        scrollIcon.classList.remove("active");
      }
    }
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
