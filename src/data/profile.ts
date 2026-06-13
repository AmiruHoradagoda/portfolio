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
  details?: Partial<ProjectDetails>;
};

export type TableRequirement = {
  id: string;
  area: string;
  requirement: string;
  priority: string;
};

export type QualityAttribute = {
  attribute: string;
  scenario: string;
  response: string;
};

export type DesignPattern = {
  pattern: string;
  where: string;
  why: string;
};

export type ProjectDetails = {
  background: string;
  functionalRequirements: TableRequirement[];
  qualityAttributes: QualityAttribute[];
  designPatterns: DesignPattern[];
  erDiagram?: {
    src: string;
    alt: string;
  };
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
    details: {
      designPatterns: [],
    },
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
    details: {
      background:
        "Bike Parts Hub is a mobile-responsive e-commerce and service-booking application for Chandima Enterprises, a motorcycle spare parts business. The system lets customers browse and filter products, place orders, schedule services, and view order or appointment history, while the owner manages inventory, customers, order status, schedules, services, and loyal-customer discounts from an admin side.",
      functionalRequirements: [
        {
          id: "BPH-FR-01",
          area: "User management",
          requirement:
            "Public users can browse home, product, and service pages, while ordering, service scheduling, cart access, and profile history require registration and login.",
          priority: "High",
        },
        {
          id: "BPH-FR-02",
          area: "Product discovery",
          requirement:
            "Customers can search and filter products by product attributes, bike manufacturer, model, type, color, and category, then open product details before purchase.",
          priority: "High",
        },
        {
          id: "BPH-FR-03",
          area: "Order management",
          requirement:
            "Logged-in users can add products to cart, adjust quantities, enter delivery details, complete payment, and create an order with pending status.",
          priority: "High",
        },
        {
          id: "BPH-FR-04",
          area: "Order status and history",
          requirement:
            "Admins can update order status through processing and dispatch, while customers can view order history, cancel before processing, and mark received orders as completed.",
          priority: "High",
        },
        {
          id: "BPH-FR-05",
          area: "Service scheduling",
          requirement:
            "Customers can select a service package, choose an available date and time slot, select oil type, add instructions, and cancel before the service begins.",
          priority: "High",
        },
        {
          id: "BPH-FR-06",
          area: "Admin operations",
          requirement:
            "Admins can add, update, or remove products and services, update schedule status, manage customers, remove accounts, and update customer roles.",
          priority: "High",
        },
        {
          id: "BPH-FR-07",
          area: "Loyal customer discounts",
          requirement:
            "Admins can mark selected customers as loyal/VIP customers, set product discount percentages, and restrict exclusive discount visibility to loyal customers.",
          priority: "High",
        },
      ],
      qualityAttributes: [
        {
          attribute: "Security",
          scenario:
            "Only authenticated users should access ordering, scheduling, cart, and history, and only the admin should manage users, inventory, services, orders, and schedules.",
          response:
            "The architecture uses Spring Security, JWT-based session management, BCrypt password hashing, and role-aware backend endpoints to separate customer and admin operations.",
        },
        {
          attribute: "Performance",
          scenario:
            "A customer searches or filters a large product catalog using bike and product attributes.",
          response:
            "The backend exposes paginated product endpoints and uses Spring Data JPA queries/specifications against MySQL so only matching result batches are returned to the UI.",
        },
        {
          attribute: "Correctness",
          scenario:
            "A customer places an order or books a service while inventory, schedule slots, and status history must remain accurate.",
          response:
            "Business workflows are handled in the service layer, persisted through repositories, and represented with explicit order and appointment statuses.",
        },
        {
          attribute: "Availability",
          scenario:
            "Customers need to browse products, place orders, and schedule services at any time.",
          response:
            "The system is designed as a web-based Angular client with a Spring Boot API and MySQL database suitable for cloud hosting and 24-hour access.",
        },
        {
          attribute: "Maintainability",
          scenario:
            "Product, order, service, customer, and schedule features need to evolve without mixing UI, API, business, and database responsibilities.",
          response:
            "The implementation follows a layered structure with Angular components/services, Spring REST controllers, service interfaces/implementations, DTOs, mappers, entities, and repositories.",
        },
        {
          attribute: "Usability",
          scenario:
            "Bike owners need to find compatible spare parts and book services with minimal effort.",
          response:
            "The UI organizes products into categories, supports filtering by bike-specific attributes, exposes service packages with time slots, and remains responsive for mobile users.",
        },
      ],
      designPatterns: [
        {
          pattern: "Builder Pattern",
          where:
            "Lombok builders on User, Token, and AuthenticationResponse; used in AuthenticationService when registering users, creating tokens, refreshing tokens, and initializing the admin user.",
          why:
            "Creates complex objects with many fields in a readable way and avoids long constructors during authentication and token workflows.",
        },
        {
          pattern: "Template Method Pattern",
          where:
            "JwtAuthenticationFilter extends OncePerRequestFilter and overrides doFilterInternal.",
          why:
            "Spring defines the fixed request-filtering lifecycle, while the project customizes only the JWT extraction, validation, and security-context update step.",
        },
        {
          pattern: "Chain of Responsibility Pattern",
          where:
            "JwtAuthenticationFilter receives a FilterChain and calls filterChain.doFilter before or after JWT processing; SecurityConfiguration inserts it before UsernamePasswordAuthenticationFilter.",
          why:
            "Each security filter gets a chance to handle part of the request and then passes control to the next filter in the chain.",
        },
        {
          pattern: "Strategy Pattern",
          where:
            "ApplicationConfig exposes PasswordEncoder as an interface and provides BCryptPasswordEncoder as the concrete strategy; AuthenticationService depends on PasswordEncoder.",
          why:
            "Password hashing can be changed by replacing the encoder implementation without changing authentication workflow code.",
        },
        {
          pattern: "Singleton Pattern",
          where:
            "Spring-managed @Service, @Component, @Configuration, controller, repository, mapper, and security-filter beans such as AuthenticationService, JwtAuthenticationFilter, ProductServiceImpl, and ProductController.",
          why:
            "A single shared bean instance is reused by default across the application, reducing repeated object creation and keeping dependency wiring consistent.",
        },
      ],
      erDiagram: {
        src: "projects/bike-parts-hub/er_diagram.png",
        alt: "Bike Parts Hub ER diagram showing users, products, orders, services, appointments, and related entities",
      },
    },
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
    details: {
      designPatterns: [
        {
          pattern: "Strategy Pattern",
          where:
            "FileTypeHandler interface with PdfFileTypeHandler, ImageFileTypeHandler, and OfficeFileTypeHandler implementations.",
          why:
            "Each file type owns its own support, validation, document-type, and preview-mode behavior, so new file types can be added without changing upload workflow logic.",
        },
        {
          pattern: "Adapter Pattern",
          where:
            "ObjectStorageService interface with MinioObjectStorageAdapter and S3ObjectStorageAdapter implementations.",
          why:
            "Storage-provider-specific APIs are hidden behind a common upload, download, delete, and preview-url contract.",
        },
        {
          pattern: "Factory / Resolver Pattern",
          where:
            "FileTypeHandlerResolver receives all FileTypeHandler implementations and selects the handler that supports the uploaded content type and extension.",
          why:
            "Centralizes object selection logic and keeps document services from knowing every concrete file handler.",
        },
        {
          pattern: "Template Method Pattern",
          where:
            "JwtFilter extends OncePerRequestFilter and overrides doFilterInternal.",
          why:
            "Spring defines the request filtering lifecycle while the project customizes only the JWT extraction and validation step.",
        },
        {
          pattern: "Builder Pattern",
          where:
            "StoredObject, DownloadedObject, pagination responses, and authentication/response DTO creation use Lombok or library builder APIs.",
          why:
            "Keeps construction of objects with multiple fields readable and less error-prone.",
        },
      ],
    },
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
    details: {
      designPatterns: [
        {
          pattern: "Factory Method Pattern",
          where:
            "BoFactory creates UserBoImpl, CustomerBoImpl, and ProductBoImpl from BoType; DaoFactory creates UserDaoImpl, CustomerDaoImpl, and ProductDaoImpl from DaoType.",
          why:
            "Object creation is centralized, so controllers can request a business object or DAO by type without directly constructing concrete classes.",
        },
        {
          pattern: "Singleton Pattern",
          where: "BoFactory.getInstance() and DaoFactory.getInstance() maintain a single factory instance.",
          why:
            "Factory objects are shared across the application instead of being recreated in each controller or business object.",
        },
        {
          pattern: "DAO Pattern",
          where:
            "CrudDao, SupperDao, CustomerDao, ProductDao, UserDao, and their implementation classes isolate database operations.",
          why:
            "Persistence code is separated from business logic and UI controllers, making the JavaFX application easier to maintain.",
        },
        {
          pattern: "Facade Pattern",
          where:
            "Business object interfaces such as CustomerBo, ProductBo, and UserBo expose higher-level operations to controllers.",
          why:
            "Controllers interact with a simpler business API instead of coordinating DAO calls and persistence details directly.",
        },
      ],
    },
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
    details: {
      designPatterns: [
        {
          pattern: "Observer Pattern",
          where:
            "AuthPage uses FirebaseAuth.instance.authStateChanges() with StreamBuilder, and FirestoreDatabase.getPostsStream() returns Firestore snapshots.",
          why:
            "The UI reacts automatically when authentication state, posts, or chat messages change in Firebase.",
        },
        {
          pattern: "Provider / Observable Pattern",
          where: "ChatService extends ChangeNotifier and exposes chat operations and message streams.",
          why:
            "Chat-related state and behavior can notify listening widgets when data changes.",
        },
        {
          pattern: "Facade Pattern",
          where:
            "FirestoreDatabase wraps Firestore collections and exposes methods such as addPost, getPostById, and getPostsStream.",
          why:
            "Screens use a simple application-specific API instead of repeating raw Firestore collection and document logic.",
        },
        {
          pattern: "Singleton Pattern",
          where:
            "FirebaseAuth.instance, FirebaseFirestore.instance, and DefaultFirebaseOptions.currentPlatform provide shared service instances/configuration.",
          why:
            "Firebase clients and platform configuration are reused across the app instead of being recreated per screen.",
        },
      ],
    },
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
    details: {
      designPatterns: [
        {
          pattern: "Builder Pattern",
          where:
            "OrderServiceIMPL builds response DTOs such as UserGetResponseDto, OrderGetResponseDto, ShippingAddressGetDto, OrderItemGetDto, and pagination responses.",
          why:
            "Builder calls keep nested response construction readable when order, customer, item, and shipping data are combined.",
        },
        {
          pattern: "Template Method Pattern",
          where:
            "JwtRequestFilter extends OncePerRequestFilter and overrides doFilterInternal; WebSecurityConfiguration extends WebSecurityConfigurerAdapter and overrides configure.",
          why:
            "Spring Security provides the authentication/filtering lifecycle while the project customizes JWT validation and route authorization behavior.",
        },
        {
          pattern: "Strategy Pattern",
          where:
            "WebSecurityConfiguration exposes PasswordEncoder as an interface and provides BCryptPasswordEncoder as the concrete implementation.",
          why:
            "The password-hashing algorithm can be swapped without rewriting login or registration logic.",
        },
        {
          pattern: "Interceptor Pattern",
          where:
            "The React frontend creates a shared Axios instance in apiConfig.js with request and response interceptors.",
          why:
            "JWT attachment, 401 cleanup, 403 handling, and common API behavior are applied consistently around every HTTP request.",
        },
        {
          pattern: "Context / Provider Pattern",
          where: "AuthContext.jsx defines AuthProvider and useAuth around React createContext.",
          why:
            "Authentication state and login/logout actions are shared across components without prop drilling.",
        },
      ],
    },
  },
];
