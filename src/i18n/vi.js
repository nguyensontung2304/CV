export const vi = {
  nav: {
    about: "Giới thiệu",
    skills: "Kỹ năng",
    projects: "Dự án",
    education: "Học vấn",
    contact: "Liên hệ",
    download: "Tải CV",
  },
  hero: {
    kicker: "Thực tập sinh Full-Stack Developer",
    name: "Nguyễn Sơn Tùng",
    location: "Đà Nẵng, Việt Nam",
    intro:
      "Tốt nghiệp Phát triển phần mềm, xây dựng sản phẩm web sẵn sàng vận hành với React, Node.js và PostgreSQL.",
    viewProjects: "Xem dự án",
    download: "Tải CV",
  },
  about: {
    eyebrow: "Giới thiệu",
    title: "Tóm tắt chuyên môn",
    body: "Tốt nghiệp Phát triển phần mềm (FPT Polytechnic), đã xây dựng và triển khai hệ thống thương mại điện tử nội thất kiêm quản lý sản xuất full-stack với React.js, Node.js, Express.js và PostgreSQL, bao gồm REST API, xác thực JWT với RBAC và chat thời gian thực. Đang tìm vị trí Thực tập sinh Full-Stack Developer để đóng góp vào sản phẩm thực tế.",
  },
  skills: {
    eyebrow: "Năng lực",
    title: "Kỹ năng kỹ thuật",
    groups: [
      {
        id: "languages",
        title: "Ngôn ngữ lập trình",
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
        title: "Cơ sở dữ liệu & lưu trữ",
        items: [
          "PostgreSQL (Neon)",
          "Sequelize ORM",
          "Relational Database Design",
          "Supabase Storage",
        ],
      },
      {
        id: "tools",
        title: "Công cụ & triển khai",
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
    eyebrow: "Sản phẩm",
    title: "Dự án nổi bật",
    live: "Live demo",
    source: "GitHub",
    roleLabel: "Vai trò",
    items: [
      {
        title: "Nội Thất Việt — Thương mại điện tử nội thất & quản lý sản xuất",
        period: "09/2026 – 11/2026",
        role: "Full-Stack Developer (Dự án cá nhân)",
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
          "Xây dựng nền tảng thương mại điện tử nội thất full-stack với trải nghiệm khách hàng và hệ thống quản trị nội bộ cho vận hành kinh doanh và sản xuất.",
        bullets: [
          "Xây dựng giao diện responsive với React.js, React Hooks, Redux Toolkit, React Router và SCSS.",
          "Phát triển 74 endpoint REST (24 GET, 21 POST, 16 PUT, 3 PATCH và 10 DELETE) cho xác thực, sản phẩm, giỏ hàng, đơn hàng và vận hành sản xuất.",
          "Triển khai xác thực JWT và phân quyền RBAC với 2 vai trò (user, admin) cùng 9 thành phần quản trị.",
          "Thiết kế và quản lý 21 mô hình quan hệ bằng PostgreSQL và Sequelize ORM, database chính trên Neon.",
          "Tích hợp Socket.IO cho chat thời gian thực giữa khách hàng và quản trị viên.",
          "Xây dựng luồng nghiệp vụ: xử lý đơn hàng, mua hàng, sản xuất, kho và giao hàng.",
          "Tích hợp Supabase Storage để tải và lưu ảnh sản phẩm cùng avatar, dùng middleware Multer và URL công khai.",
        ],
      },
      {
        title: "Trang landing khóa học AI — Responsive Web Design",
        period: "04/2026 – 06/2026",
        role: "Frontend Developer (Dự án cá nhân)",
        stack: ["HTML5", "CSS3", "JavaScript"],
        deployment: "",
        live: "https://ai-landing-page-gamma-sage.vercel.app",
        github: "https://github.com/nguyensontung2304/ai-landing-page",
        summary:
          "Xây dựng landing page khóa học AI hiện đại, responsive bằng HTML5, CSS3 và JavaScript.",
        bullets: [
          "Tạo thành phần giao diện tương tác và layout responsive với Flexbox, CSS Grid và thao tác DOM.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Nền tảng",
    title: "Học vấn",
    items: [
      {
        school: "Cao đẳng FPT Polytechnic",
        program: "Cao đẳng Công nghệ thông tin — Phần mềm",
        period: "09/2023 – 04/2026",
      },
      {
        school: "Trung tâm đào tạo chuyên nghiệp iViettech",
        program: "Chương trình Full-Stack Web Development chuyên nghiệp",
        period: "06/2026 – 11/2026",
      },
    ],
  },
  contact: {
    eyebrow: "Kết nối",
    title: "Cùng làm việc",
    body: "Sẵn sàng cho vị trí Thực tập sinh Full-Stack Developer. Liên hệ qua email, điện thoại hoặc GitHub.",
    phone: "Điện thoại",
    email: "Email",
    github: "GitHub",
    location: "Địa điểm",
    formName: "Họ tên",
    formSubject: "Tiêu đề",
    formMessage: "Nội dung",
    formCta: "Mở email",
    formHint:
      "Mở ứng dụng thư với nội dung đã điền. Không lưu dữ liệu trên máy chủ.",
  },
  footer: {
    name: "Nguyễn Sơn Tùng",
  },
};
