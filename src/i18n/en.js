export const en = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
    download: "Download CV",
  },
  hero: {
    kicker: "Full-Stack Developer Intern",
    name: "Nguyen Son Tung",
    location: "Da Nang, Vietnam",
    intro:
      "Software Development graduate building production-ready web products with React, Node.js, and PostgreSQL.",
    viewProjects: "View projects",
    download: "Download CV",
  },
  about: {
    eyebrow: "About",
    title: "Professional summary",
    body: "Software Development graduate (FPT Polytechnic) who built and deployed a full-stack furniture e-commerce and production management system with React.js, Node.js, Express.js and PostgreSQL, including REST APIs, JWT authentication with RBAC and real-time chat. Seeking a Full-Stack Developer Intern role to contribute to real-world products.",
  },
  skills: {
    eyebrow: "Capabilities",
    title: "Technical skills",
    groups: [
      {
        id: "languages",
        title: "Programming languages",
        items: ["JavaScript (ES6+)", "SQL"],
      },
      {
        id: "frontend",
        title: "Frontend",
        items: [
          "HTML5",
          "CSS3",
          "SCSS",
          "React.js",
          "React Hooks",
          "Redux Toolkit",
          "React Router",
          "Responsive Web Design",
          "Flexbox",
          "CSS Grid",
        ],
      },
      {
        id: "backend",
        title: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "RESTful API Development",
          "JWT Authentication",
          "Socket.IO",
        ],
      },
      {
        id: "database",
        title: "Databases & storage",
        items: [
          "PostgreSQL (Neon)",
          "Sequelize ORM",
          "Relational Database Design",
          "Supabase Storage",
        ],
      },
      {
        id: "tools",
        title: "Tools & deployment",
        items: [
          "Git",
          "GitHub",
          "Postman",
          "Axios",
          "Vite",
          "pnpm",
          "Vercel",
          "Render",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Featured projects",
    live: "Live demo",
    source: "GitHub",
    roleLabel: "Role",
    items: [
      {
        title: "Noi That Viet — Furniture E-Commerce & Production Management",
        period: "09/2026 – 11/2026",
        role: "Full-Stack Developer (Personal Project)",
        stack: [
          "React.js",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Sequelize ORM",
          "Redux Toolkit",
          "Socket.IO",
          "Supabase Storage",
        ],
        deployment:
          "Frontend — Vercel | Backend — Render | Database — Neon PostgreSQL",
        live: "https://noi-that-viet.vercel.app",
        github: "https://github.com/nguyensontung2304/noi-that-viet",
        summary:
          "Developed a full-stack furniture e-commerce platform with customer-facing features and an internal administration system for business and production management.",
        bullets: [
          "Built responsive user interfaces using React.js, React Hooks, Redux Toolkit, React Router, and SCSS.",
          "Developed 74 RESTful API endpoints (24 GET, 21 POST, 16 PUT, 3 PATCH, and 10 DELETE) covering authentication, product management, shopping carts, orders, and production operations.",
          "Implemented JWT-based authentication and role-based access control (RBAC) with 2 user roles (user and admin) and 9 administrative components.",
          "Designed and managed 21 relational database models using PostgreSQL and Sequelize ORM, with the main database hosted on Neon.",
          "Integrated Socket.IO for real-time communication between customers and administrators through a live chat system.",
          "Developed business workflows covering order processing, purchasing, manufacturing, warehouse management, and delivery operations.",
          "Integrated Supabase Storage to upload and store product images and user profile avatars, using Multer middleware and public URLs for image management.",
        ],
      },
      {
        title: "AI Course Landing Page — Responsive Web Design",
        period: "04/2026 – 06/2026",
        role: "Frontend Developer (Personal Project)",
        stack: ["HTML5", "CSS3", "JavaScript"],
        deployment: "",
        live: "https://ai-landing-page-gamma-sage.vercel.app",
        github: "https://github.com/nguyensontung2304/ai-landing-page",
        summary:
          "Developed a modern, responsive AI course landing page using HTML5, CSS3, and JavaScript.",
        bullets: [
          "Built interactive UI components and responsive layouts using Flexbox, CSS Grid, and DOM manipulation.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Background",
    title: "Education",
    items: [
      {
        school: "FPT Polytechnic College",
        program: "Associate Degree in Information Technology — Software",
        period: "09/2023 – 04/2026",
      },
      {
        school: "iViettech Professional Training Center",
        program: "Professional Full-Stack Web Development Program",
        period: "06/2026 – 11/2026",
      },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Let’s work together",
    body: "Open to Full-Stack Developer Intern opportunities. Reach out by email, phone, or GitHub.",
    phone: "Phone",
    email: "Email",
    github: "GitHub",
    location: "Location",
    formName: "Name",
    formSubject: "Subject",
    formMessage: "Message",
    formCta: "Open email",
    formHint:
      "Opens your mail app with the message filled in. Nothing is stored on a server.",
  },
  footer: {
    name: "Nguyen Son Tung",
  },
};
