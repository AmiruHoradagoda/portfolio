export type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt?: string;
    }
  | {
      type: "video";
      src: string;
    };

export type Project = {
  slug: string;
  title: string;
  year: string;
  type: string;
  status: string;
  role: string;
  summary: string;
  description: string;
  stack: string[];
  features: string[];
  challenges: string[];
  links: {
    label: string;
    href: string;
  }[];
  accent?: string;
  media: ProjectMedia[];
};

export const profile = {
  name: "Amiru Horadagoda",
  role: "Computer Engineer",
  headline: "Full Stack Developer | DevOps Engineer | AI Enthusiast",
  location: "Badulla, Sri Lanka",
  email: "amirumithsara1234@gmail.com",
  phone: "+94 71 724 4872",
  summary:
    "Computer Engineering undergraduate focused on building practical full-stack products, reliable DevOps workflows, and AI-assisted software systems. I like taking an idea from architecture and implementation through deployment, automation, and iteration.",
  about:
    "I work across frontend interfaces, backend services, cloud and CI/CD workflows, and applied AI. My project experience includes web platforms, mobile applications, computer vision, and backend-heavy systems using Spring Boot, React, Angular, Docker, Jenkins, AWS, MySQL, MongoDB, Firebase, Python, and OpenCV.",
  cvPath: "AmiruHoradagoda.pdf",
  imagePath: "myself.png",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/AmiruHoradagoda",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amiru-mithsara-42642614b/",
    },
    {
      label: "Email",
      href: "mailto:amirumithsara1234@gmail.com",
    },
  ],
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of Ruhuna",
    period: "Feb 2022 - Present",
    year: "2022 - Present",
    location: "Sri Lanka",
    coursework: [
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
      "Algorithms and Data Structures",
      "Embedded Systems",
      "Operating Systems",
    ],
    description:
      "Undergraduate computer engineering program with practical work across software engineering, database systems, networking, embedded systems, algorithms, and applied computing.",
  },
  {
    degree: "GCE Advanced Level",
    institution: "Badulla Central College",
    period: "2012 - 2020",
    year: "2012 - 2020",
    location: "Badulla, Sri Lanka",
    result: "Z-Score: 1.7367",
    coursework: ["Mathematics", "Chemistry", "Physics"],
    description: "Completed coursework in Mathematics, Chemistry, and Physics.",
  },
];

export const certifications = [
  {
    title: "IEEE Xtreme 17.0",
    issuer: "IEEE",
    year: "2023",
    category: "Competition & Award Certifications",
    credentialHref: "certifications/ieee-xtreme-17.pdf",
    description:
      "Secured 115th place in Sri Lanka while solving competitive programming challenges.",
  },
  {
    title: "HaXtreme 2.0",
    issuer: "Cybersecurity and coding competition",
    year: "2023",
    category: "Competition & Award Certifications",
    credentialHref: "",
    description: "Participated in timed problem-solving and cybersecurity-focused challenges.",
  },
  {
    title: "RED CYPHER 1.0",
    issuer: "Cybersecurity competition",
    year: "2023",
    category: "Competition & Award Certifications",
    credentialHref: "",
    description: "Participated in cybersecurity and technical problem-solving tasks.",
  },
];

export const skillTabs = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces, stateful web apps, styling systems, and responsive UI delivery.",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "React",
      "Angular",
      "JavaScript",
      "TypeScript",
      "Flutter",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs, business logic, authentication flows, databases, and service integration.",
    items: ["Java", "PHP", "Spring Boot", "Node.js", "Express.js", "Python", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    id: "devops",
    label: "DevOps",
    description: "Delivery pipelines, containerized environments, cloud deployment, and automation.",
    items: ["Docker", "Jenkins", "GitHub Actions", "AWS", "Linux", "Nginx", "CI/CD", "Git"],
  },
  {
    id: "ai",
    label: "AI",
    description: "Applied machine learning, computer vision, data processing, and AI integration.",
    items: ["Python", "OpenCV", "Scikit-learn", "NumPy", "Jupyter Notebook", "Machine Learning"],
  },
  {
    id: "other",
    label: "Other",
    description: "Engineering practices and tools that support collaboration and reliable delivery.",
    items: ["GitHub", "Firebase", "Postman", "Figma", "Adobe Photoshop", "Agile", "OOP", "Design Patterns", "Testing", "QA"],
  },
];

export const experience = [
  {
    company: "Sri Lanka Ports Authority",
    department: "Information Systems Division",
    role: "Software Engineering Intern",
    period: "Jun 2025 - Dec 2025",
    duration: "6-month internship",
    project: "EDDS / Document Digitization System",
    summary:
      "Worked with the Information Systems Division on the EDDS project, contributing to document digitization workflows and feature development for the Discipline Department.",
    highlights: [
      "Implemented and improved backend features using Spring Boot with MySQL database integration.",
      "Contributed to frontend work using AngularJS, HTML, CSS, and TypeScript.",
      "Participated in testing and quality assurance to improve reliability during project rollout.",
    ],
    stack: ["Spring Boot", "MySQL", "AngularJS", "TypeScript", "HTML", "CSS", "Testing", "QA"],
  },
];

export const projects: Project[] = [
  {
    slug: "event-ticket-booking-platform",
    title: "Event Ticket Booking Platform",
    year: "2026",
    type: "Cloud Microservices Project",
    status: "Completed",
    role: "Backend and DevOps Engineer",
    summary:
      "A cloud-based event management and ticket booking platform built with independently deployable services, asynchronous messaging, and Kubernetes deployment workflows.",
    description:
      "This project applies microservices architecture to a complete event booking domain. Separate services handle authentication, event management, booking, notifications, gateway routing, service discovery, and configuration, while RabbitMQ supports asynchronous communication and Kubernetes on GKE provides scalable cloud deployment.",
    stack: [
      "Spring Boot",
      "Java",
      "TypeScript",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "GCP",
      "GitHub Actions",
      "Next.js",
      "MongoDB",
      "MySQL",
      "Express.js",
      "Angular",
      "Keycloak",
    ],
    features: [
      "User authentication, registration, avatar, and password recovery workflows",
      "Event creation, category management, and booking-oriented service boundaries",
      "RabbitMQ-based messaging between loosely coupled services",
      "Docker image build and deployment flow targeting Kubernetes on GKE",
      "GitHub Actions CI/CD pipeline with build, test, quality scan, image push, and rollout stages",
    ],
    challenges: [
      "Separating domain responsibilities across independently deployable microservices.",
      "Coordinating service communication, configuration, and rollout behavior in a Kubernetes environment.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/eventTicket-booking-platform",
      },
    ],
    accent: "emerald",
    media: [
      {
        type: "image",
        src: "projects/event-booking/card-image.png",
        alt: "Event Ticket Booking Platform microservices architecture card",
      },
    ],
  },
  {
    slug: "spare-part-sales-service-platform",
    title: "Spare Part Sales and Service Platform",
    year: "2024",
    type: "Team Project",
    status: "Ongoing",
    role: "Full Stack Engineer",
    summary:
      "A commerce and service-booking platform for customers to browse spare parts, purchase products, view services, and schedule appointments.",
    description:
      "This project combines customer-facing product discovery with service scheduling workflows. The platform is structured around a frontend application, a Spring Boot API layer, and a MySQL database so business features can grow without tightly coupling UI and backend logic.",
    stack: ["Angular", "Tailwind CSS", "Spring Boot", "MySQL"],
    features: [
      "Spare part browsing and product detail views",
      "Service information and appointment scheduling",
      "Backend API structure for product, service, and customer workflows",
      "Responsive UI built for desktop and mobile browsing",
    ],
    challenges: [
      "Keeping product, service, and booking flows easy to maintain across frontend and backend layers.",
      "Designing database relationships that support both sales and service workflows.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AmiruHoradagoda/BikePartsHubApplication/tree/develop",
      },
    ],
    accent: "cyan",
    media: [
      {
        type: "image",
        src: "projects/bike-parts-hub/card-image.png",
        alt: "BikePartsHub spare parts platform screenshot",
      },
    ],
  },
  {
    slug: "leckeep",
    title: "LecKeep",
    year: "2024",
    type: "Personal Project",
    status: "v1.0.0",
    role: "Full Stack Developer",
    summary:
      "A lecture note application for storing PDFs and short notes with CI/CD pipelines for Docker, Jenkins, and AWS deployment practice.",
    description:
      "LecKeep is a CRUD-based study tool built to manage lecture material while also practicing production delivery patterns. The application connects a React frontend with a Spring Boot backend and MongoDB storage, then uses DevOps workflows to package and deploy the project.",
    stack: ["React", "Tailwind CSS", "Spring Boot", "MongoDB", "Docker", "Jenkins", "AWS"],
    features: [
      "Create, read, update, and delete lecture notes",
      "Store PDF-oriented learning material",
      "Containerized deployment workflow",
      "CI/CD practice with Jenkins and AWS",
    ],
    challenges: [
      "Designing a clean flow for note data and file-oriented resources.",
      "Connecting local development with repeatable deployment automation.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AmiruHoradagoda/Note-taking-app",
      },
    ],
    accent: "violet",
    media: [
      {
        type: "image",
        src: "projects/leckeep/card-image.png",
        alt: "LecKeep lecture note app screenshot",
      },
    ],
  },
  {
    slug: "simple-pos-system",
    title: "Simple Point-of-Sale System",
    year: "2023",
    type: "Academic Project",
    status: "Completed",
    role: "Developer",
    summary:
      "A Java POS system built with layered architecture and OOP design patterns for maintainability.",
    description:
      "The POS system focuses on clean architecture practice in Java. It separates responsibilities into layers so the application is easier to maintain, test, and extend compared with a single tightly coupled codebase.",
    stack: ["Java", "JavaFX", "MySQL"],
    features: [
      "Customer, item, and order management flows",
      "Layered architecture",
      "Database-backed sales records",
      "OOP and design pattern practice",
    ],
    challenges: [
      "Separating UI, business logic, and database access cleanly.",
      "Applying architecture patterns in a small but complete academic system.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AmiruHoradagoda/simple-pos-system/tree/Apply_Layered_Architecture",
      },
    ],
    accent: "amber",
    media: [
      {
        type: "image",
        src: "projects/simple-pos-system/card-image.png",
        alt: "Simple POS system customer screen",
      },
    ],
  },
  {
    slug: "service-finder-mobile",
    title: "Service Finder Mobile",
    year: "2023",
    type: "Team Project",
    status: "Completed",
    role: "Mobile Developer",
    summary:
      "A Flutter mobile platform connecting local service providers with clients through provider and customer interfaces.",
    description:
      "Service Finder Mobile is designed to help clients discover and book local services while giving providers a way to present their offerings. Firebase supports backend storage and app infrastructure for the mobile experience.",
    stack: ["Flutter", "Firebase"],
    features: [
      "Client and service-provider user flows",
      "Service discovery and booking-oriented screens",
      "Firebase-backed application data",
      "Mobile-first UI structure",
    ],
    challenges: [
      "Building separate experiences for customers and providers.",
      "Coordinating team development across a shared mobile codebase.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AmiruHoradagoda/service_finder_application",
      },
    ],
    accent: "rose",
    media: [
      {
        type: "image",
        src: "projects/service-finder/card-image.png",
        alt: "Service Finder mobile app screen",
      },
    ],
  },
  {
    slug: "pharmacy-sales-inventory-system",
    title: "Pharmacy Sales and Inventory Management System",
    year: "2023",
    type: "Full-Stack Project",
    status: "Completed",
    role: "Developer",
    summary:
      "A full-stack pharmacy management application for online medicine purchases, inventory, authentication, and role-based access.",
    description:
      "This system supports pharmacy sales and inventory workflows with separate admin and customer access. It brings together frontend views, backend APIs, authentication, and MySQL persistence for a complete full-stack application.",
    stack: ["React", "Tailwind CSS", "Spring Boot", "MySQL"],
    features: [
      "Online medicine purchase flow",
      "Inventory management",
      "Authentication and role-based access",
      "Admin and customer workflows",
    ],
    challenges: [
      "Designing secure role-based behavior for different user types.",
      "Keeping inventory and purchase workflows consistent through backend APIs.",
    ],
    links: [
      {
        label: "Backend GitHub",
        href: "https://github.com/AmiruHoradagoda/pharmacy-backend",
      },
      {
        label: "Frontend GitHub",
        href: "https://github.com/AmiruHoradagoda/pharmacy-frontend",
      },
    ],
    accent: "blue",
    media: [
      {
        type: "image",
        src: "projects/pharmacy/card-image.png",
        alt: "Pharmacy sales and inventory system screenshot",
      },
    ],
  },
];
