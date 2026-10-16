window.data = {
  meta: {
    theme: "actual",
  },
  about: {
    firstName: "Mahalakshmi",
    fullName: "KOMMARANAHALLI MAHALAKSHMI",
    nickname: "Maha",
    title: "Computer Science & Engineering Student | IoT & Software Developer",
    role: "Computer Science Engineer & IoT Developer 😊",
    profileImage: "./assets/mahalakshmi_profile.jpg",
    summary: `
    Hello! I'm <b>KOMMARANAHALLI MAHALAKSHMI</b>, a Computer Science and Engineering student at <b>Jain Institute of Technology, Davanagere</b>. 💻
    <br /><br />
    I am passionate about <b>software development</b>, <b>Internet of Things (IoT)</b>, <b>embedded systems</b>, and <b>machine learning</b>. 🚀
    <br /><br />
    My journey encompasses developing practical, high-impact prototypes including a <b>LoRa-based Smart Irrigation System</b> with ESP32 and soil telemetry, training <b>Machine Learning Password Analyzers</b>, and building full-stack platforms like <b>CampusHub-ERP</b>, <b>MJ Hospital Portal</b>, and <b>Campus Volunteer Club</b>. 💡
    <br /><br />
    I love applying programming and creative problem-solving skills to build real-world solutions that make a meaningful difference.
    <br /><br />
    Let's connect and build something extraordinary together! ✨
    `,
    footerText: `
    “Motivated Computer Science student passionate about software development, IoT, embedded systems, and machine learning. Focused on practical projects and innovative technology solutions.”<br />
    — KOMMARANAHALLI MAHALAKSHMI
    `,
    contact: {
      phone: "+91 9148347604",
      whatsapp: "+91 9148347604",
      email: "mahalakshmikommaranahalli9@gmail.com",
    },

    socialLinks: {
      github: {
        url: "https://github.com/Mahalakshmi-Kommaranahalli",
        username: "Mahalakshmi-Kommaranahalli",
      },
      linkedin: {
        username: "mahalakshmi-kommaranahalli-06aba0341",
        url: "https://www.linkedin.com/in/mahalakshmi-kommaranahalli-06aba0341/",
      },
      instagram: {
        username: "its_me_mahaaaa__",
        url: "https://www.instagram.com/its_me_mahaaaa__/",
      },
      twitter: {
        username: "mahalakshmik225",
        url: "https://x.com/mahalakshmik225",
      },
      spotify: {
        username: "Mahalakshmi",
        url: "https://open.spotify.com/user/31lre6wtciiv2birvre7syscpm7q?si=bn1qjUHATvOvYAmUDQadAA&utm_source=copy-link",
      },
      digitalresume: {
        url: "./assets/Mahalakshmi_Kommaranahalli_Resume.pdf",
      },
      email: "mailto:mahalakshmikommaranahalli9@gmail.com",
    },
  },

  education: [
    {
      endDate: "2028 (Expected)",
      startDate: "2024",
      area: "Computer Science and Engineering",
      studyType: "Bachelor of Engineering (B.E.)",
      institution: "Jain Institute of Technology, Davangere",
      gpa: "8.6 CGPA",
    },
    {
      endDate: "2024",
      startDate: "2022",
      area: "Pre-University Education (12th / PUC)",
      studyType: "Science",
      institution: "Sir M V PU College",
      gpa: "Completed",
    },
    {
      endDate: "2022",
      startDate: "2021",
      area: "Secondary School Leaving Certificate (10th / SSLC)",
      studyType: "High School",
      institution: "Sri Gurudeva High School",
      gpa: "Completed",
    },
  ],

  work: [
    {
      name: "LoRa & IoT Smart Agriculture Development",
      location: "Davanagere, Karnataka",
      position: "IoT & Embedded Systems Developer",
      startDate: "2025",
      endDate: "Present",
      highlights: [
        "Engineered an IoT prototype using ESP32, LoRa communication protocols, and soil sensing telemetry.",
        "Integrated real-time OLED graphical display concepts to monitor field moisture and automated irrigation decisions.",
        "Focused on low-power long-range transmission for agricultural automation.",
      ],
    },
    {
      name: "CampusHub-ERP Platform",
      location: "Jain Institute of Technology / Remote",
      position: "Full-Stack Project Lead & Developer",
      startDate: "2025",
      endDate: "Present",
      highlights: [
        "Architected and deployed full-stack institutional ERP on Vercel utilizing Node.js, Express, and EJS.",
        "Built modular student and faculty administration systems, dynamic dashboard views, and role-oriented workflows.",
        "Engineered responsive user interfaces with clean client-server architecture and optimized assets.",
      ],
    },
    {
      name: "Machine Learning Security & Web Systems",
      location: "Davanagere, Karnataka",
      position: "ML & Software Developer",
      startDate: "2024",
      endDate: "Present",
      highlights: [
        "Formulated a machine-learning based password strength classification engine with text-based feature vectors and Naive Bayes/SVM.",
        "Built the Campus Volunteer Club web application for managing campus volunteer operations with frontend and backend integration.",
        "Developed responsive web applications including the MJ Hospital Portal and Foodie web platform.",
      ],
    },
  ],

  skills: [
    {
      "Programming Languages": ["C", "Python", "JavaScript"],
    },
    {
      "Web Technologies": [
        "HTML5",
        "CSS3",
        "Responsive Layouts",
        "Client-Server Architecture",
      ],
    },
    {
      "Databases & Backend": [
        "SQL",
        "DBMS",
        "Node.js",
        "Express.js",
      ],
    },
    {
      "Tools & IDEs": [
        "Git",
        "GitHub",
        "VS Code",
        "Arduino IDE",
      ],
    },
    {
      "IoT & Embedded Systems": [
        "ESP32",
        "LoRa Communication",
        "OLED Displays",
        "Sensors & Telemetry",
      ],
    },
    {
      "Focus Areas & Soft Skills": [
        "Machine Learning",
        "IoT Prototyping",
        "Problem Solving",
        "Teamwork",
        "Project Collaboration",
      ],
    },
  ],

  projects: [
    {
      name: "LoRa-Based Smart Irrigation System",
      date: "2025 - 2026",
      description:
        "Developed an IoT prototype using ESP32, LoRa communication, soil sensing and OLED display concepts to monitor field conditions and support smart irrigation decisions.",
      technologies: ["ESP32", "LoRa", "C++", "Arduino IDE", "Soil Sensors", "OLED"],
      functionality: [
        "Long-range wireless LoRa telemetry for soil moisture and environmental parameters",
        "OLED real-time status visualizer for quick field diagnostics",
        "Smart automated irrigation switching logic based on moisture thresholds",
      ],
      img: "./assets/projects/irrigation.svg",
      sourceLink: "https://github.com/Mahalakshmi-Kommaranahalli",
      previewLink: "",
      buttonText: "IoT Prototype",
    },
    {
      name: "Password Strength Analyzer",
      date: "2025 - 2026",
      description:
        "Worked on a machine-learning based password strength classification project using text-based features and classification approaches such as Naive Bayes/SVM.",
      technologies: ["Python", "Machine Learning", "Naive Bayes", "SVM", "Data Analytics"],
      functionality: [
        "Feature extraction analyzing character entropy, length, and lexical patterns",
        "Classification model predicting strength score and vulnerability level",
        "Actionable recommendations for improving password security",
      ],
      img: "./assets/projects/password.svg",
      sourceLink: "https://github.com/Mahalakshmi-Kommaranahalli",
      previewLink: "",
      buttonText: "ML Project",
    },
    {
      name: "CampusHub-ERP Platform",
      date: "2025 - 2026",
      description:
        "A full-stack institutional ERP built for managing student records, faculty workflows, attendance monitoring, and administrative operations.",
      technologies: ["Node.js", "Express.js", "EJS", "JavaScript", "Vercel"],
      functionality: [
        "Modular student and faculty administrative workflows",
        "Dynamic dashboard metrics and responsive views",
        "Live production deployment on Vercel",
      ],
      img: "./assets/projects/campushub.svg",
      sourceLink: "https://github.com/Mahalakshmi-Kommaranahalli/campushub_erp",
      previewLink: "https://campushub-erp.vercel.app",
      buttonText: "Live Demo",
    },
    {
      name: "MJ Hospital Website",
      date: "2025 - 2026",
      description:
        "Developed a responsive hospital website concept with hospital information, services, emergency contact, and user-friendly web pages.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
      functionality: [
        "Specialist doctor directory and outpatient appointment request flow",
        "Categorized medical department navigation and diagnostic guides",
        "24/7 emergency response hotline and quick contact links",
      ],
      img: "./assets/projects/hospital.svg",
      sourceLink: "https://github.com/Mahalakshmi-Kommaranahalli/MJ-Hospital",
      previewLink: "https://mj-hospital.vercel.app",
      buttonText: "Live Portal",
    },
    {
      name: "Campus Volunteer Club",
      date: "2025",
      description:
        "Worked on a web application project for managing campus volunteer activities with frontend and backend components.",
      technologies: ["JavaScript", "Node.js", "HTML5", "CSS3", "Express"],
      functionality: [
        "Volunteer event registration and participant coordination",
        "Activity tracking and community engagement metrics",
        "Intuitive member portal and administrative management",
      ],
      img: "./assets/projects/volunteer.svg",
      sourceLink: "https://github.com/Mahalakshmi-Kommaranahalli",
      previewLink: "",
      buttonText: "Club Platform",
    },
    {
      name: "Foodie Website",
      date: "2025",
      description:
        "Developed a food-related web project and managed the project source code using Git and GitHub.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
      functionality: [
        "Interactive culinary menu and recipe exploration",
        "Responsive, vibrant mobile-friendly layout",
        "Version-controlled repository following clean web standards",
      ],
      img: "./assets/projects/foodie.svg",
      sourceLink: "https://github.com/Mahalakshmi-Kommaranahalli",
      previewLink: "",
      buttonText: "Foodie Web",
    },
    {
      name: "Landslide Sentinel AI",
      date: "2025 - 2026",
      description:
        "An Artificial Intelligence hazard forecasting system that computes environmental and terrain parameters to predict landslide vulnerabilities and deliver early risk advisories.",
      technologies: ["Python", "Machine Learning", "Data Analytics", "HTML5", "CSS3"],
      functionality: [
        "Predictive risk scoring using rainfall and soil inclination variables",
        "Real-time hazard indicator gauge and warning levels",
        "Interactive analytics visualizer for public safety agencies",
      ],
      img: "./assets/projects/landslide.svg",
      sourceLink: "https://github.com/Mahalakshmi-Kommaranahalli/Landslide-Sentinel-AI",
      previewLink: "https://mahalakshmi-kommaranahalli.github.io/Landslide-Sentinel-AI/",
      buttonText: "Launch System",
    },
    {
      name: "VidyaPath — Scheme Engine",
      date: "2025 - 2026",
      description:
        "An automated educational scheme and scholarship matching engine that cross-references student qualifications, socioeconomic metrics, and reservation quotas to identify ideal funding schemes.",
      technologies: ["JavaScript", "Node.js", "Express", "Matching Algorithm", "CSS3"],
      functionality: [
        "Multi-criteria algorithm matching students to eligible schemes",
        "Instant scheme qualification analysis with score breakdowns",
        "Curated scheme database with direct application roadmaps",
      ],
      img: "./assets/projects/vidyapath.svg",
      sourceLink: "https://github.com/Mahalakshmi-Kommaranahalli/VidyaPath",
      previewLink: "",
      buttonText: "Repository",
    },
  ],

  certifications: [
    {
      name: "Computer Science & Engineering Student Member",
      issuer: "Jain Institute of Technology, Davangere",
      issued: "2023 - Present",
      credentialId: "JIT-CSE-2023",
      link: "https://github.com/Mahalakshmi-Kommaranahalli",
    },
    {
      name: "IoT & Embedded Systems Development",
      issuer: "Technical Project Showcase",
      issued: "2025",
      credentialId: "IOT-LORA-ESP32",
      link: "https://github.com/Mahalakshmi-Kommaranahalli",
    },
    {
      name: "Full-Stack Web Development & ERP Systems",
      issuer: "CampusHub Project Team",
      issued: "2025",
      credentialId: "CHUB-ERP-2025",
      link: "https://github.com/Mahalakshmi-Kommaranahalli/campushub_erp",
    },
  ],

  quotes: [
    {
      quote: "Success in engineering is the culmination of curiosity, persistent coding, and purposeful collaboration.",
      source: "KOMMARANAHALLI MAHALAKSHMI",
    },
    {
      quote: "The best way to predict the future is to invent it with clean code and innovative hardware.",
      source: "Technology Proverb",
    },
    {
      quote: "First, solve the problem. Then, write the code.",
      source: "John Johnson",
    },
    {
      quote: "Every line of code is an opportunity to make someone's life easier and smarter.",
      source: "Mahalakshmi K",
    },
  ],
};
