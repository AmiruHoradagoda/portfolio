import { kafkaOrderPipeline } from "./kafkaOrderPipeline";

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

export type ProjectDemoVideo = {
  type: "youtube" | "google-drive";
  id: string;
  title: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  type: string;
  status: string;
  role: string;
  summary: string;
  subtitle?: string;
  categories?: string[];
  cardStack?: string[];
  description: string;
  stack: string[];
  stackGroups?: { title: string; items: string[] }[];
  features: string[];
  challenges: string[];
  links: {
    label: string;
    href: string;
  }[];
  accent?: string;
  media: ProjectMedia[];
  demoVideo?: ProjectDemoVideo;
  demoNote?: string;
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

export type ProjectDiagram = {
  title: string;
  src: string;
  alt: string;
  section?: "overview" | "challenges" | "architecture" | "decisions";
  caption?: string;
};

export type SystemDesign = {
  title: string;
  whereImplemented?: string;
  howImplemented?: string;
  content?: string;
  whyUsed?: string;
  diagram?: ProjectDiagram;
  diagramPlaceholder?: string;
};

export type OopDesignPattern = {
  pattern: string;
  where?: string;
  why?: string;
  howImplemented?: string;
  diagram?: ProjectDiagram;
  diagramPlaceholder?: string;
};

export type ChallengeSolution = {
  title?: string;
  problem: string;
  solution: string;
};

export type ProjectDetails = {
  background: string;
  overviewDiagrams?: ProjectDiagram[];
  dataModelDiagrams?: ProjectDiagram[];
  dataModelPlaceholders?: string[];
  systemDesigns?: SystemDesign[];
  oopDesignPatterns?: OopDesignPattern[];
  unclassifiedDiagrams?: ProjectDiagram[];
  overviewHeading?: string;
  qualityHeading?: string;
  challengeSolutions?: ChallengeSolution[];
  showSupportingRequirements?: boolean;
  engineeringRequirements?: string[];
  eventFlow?: string[];
  eventSchema?: { field: string; type: string; description: string }[];
  tradeOffs?: string[];
  functionalRequirements: TableRequirement[];
  qualityAttributes?: QualityAttribute[];
  designPatterns?: DesignPattern[];
  diagrams?: ProjectDiagram[];
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
      href: "https://www.linkedin.com/in/amiru-horadagoda-42642614b/",
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
    "id": "frontend",
    "label": "Frontend",
    "description": "Building responsive and interactive user interfaces.",
    "items": [
      {
        "name": "React",
        "confidence": "Proficient"
      },
      {
        "name": "HTML & CSS",
        "confidence": "Proficient"
      },
      {
        "name": "Angular",
        "confidence": "Intermediate"
      },
      {
        "name": "TypeScript",
        "confidence": "Intermediate"
      },
      {
        "name": "Three.js",
        "confidence": "Intermediate"
      },
      {
        "name": "Flutter",
        "confidence": "Familiar"
      }
    ]
  },
  {
    "id": "backend",
    "label": "Backend",
    "description": "Designing APIs, services, and application logic.",
    "items": [
      {
        "name": "Java",
        "confidence": "Proficient"
      },
      {
        "name": "Spring Boot",
        "confidence": "Proficient"
      },
      {
        "name": "Python",
        "confidence": "Proficient"
      },
      {
        "name": "REST APIs",
        "confidence": "Proficient"
      },
      {
        "name": "FastAPI",
        "confidence": "Intermediate"
      },
      {
        "name": "Node.js / Express.js",
        "confidence": "Intermediate"
      },
      {
        "name": "Microservices",
        "confidence": "Intermediate"
      },
      {
        "name": "NestJS",
        "confidence": "Familiar"
      },
      {
        "name": "GraphQL",
        "confidence": "Familiar"
      }
    ]
  },
  {
    "id": "database",
    "label": "Database",
    "description": "Working with relational and NoSQL data stores.",
    "items": [
      {
        "name": "MySQL",
        "confidence": "Proficient"
      },
      {
        "name": "MongoDB",
        "confidence": "Proficient"
      },
      {
        "name": "PostgreSQL",
        "confidence": "Intermediate"
      },
      {
        "name": "Redis",
        "confidence": "Familiar"
      }
    ]
  },
  {
    "id": "ai",
    "label": "AI / ML",
    "description": "Building and integrating machine learning solutions.",
    "items": [
      {
        "name": "PyTorch",
        "confidence": "Intermediate"
      },
      {
        "name": "Scikit-learn",
        "confidence": "Intermediate"
      },
      {
        "name": "Hugging Face Transformers",
        "confidence": "Intermediate"
      },
      {
        "name": "LLM / RAG",
        "confidence": "Familiar"
      }
    ]
  },
  {
    "id": "data",
    "label": "Data Engineering",
    "description": "Building pipelines and working with streaming and analytical data.",
    "items": [
      {
        "name": "Apache Kafka",
        "confidence": "Proficient"
      },
      {
        "name": "Apache Avro",
        "confidence": "Intermediate"
      },
      {
        "name": "ETL / ELT",
        "confidence": "Intermediate"
      },
      {
        "name": "Data Warehousing",
        "confidence": "Intermediate"
      },
      {
        "name": "Apache Spark",
        "confidence": "Familiar"
      },
      {
        "name": "Apache Airflow",
        "confidence": "Familiar"
      }
    ]
  }
];

export const experience = [
  {
    "company": "Sri Lanka Ports Authority",
    "department": "Information Systems Division",
    "role": "Software Engineering Intern",
    "period": "Jun 2025 - Dec 2025",
    "duration": "6-month internship",
    "project": "EDDS / Document & Workflow Management",
    "summary": "Contributed to EDDS, a digital document and workflow management system supporting employee records and disciplinary inquiries. Worked across backend and frontend development to translate operational requirements into working software features.",
    "highlights": [
      "Backend Engineering: Developed REST APIs with Java 17 and Spring Boot for inquiry creation, editing, status management, activity history, teams, file handling, and role-based permissions.",
      "Frontend Development: Built Angular components for inquiry workflows, activity history, uploads, file views, and management screens. Connected them to backend services and resolved API integration issues.",
      "Data & System Design: Worked with ER diagrams, entity relationships, DTO mappings, and layered architecture. Applied validation, exception handling, and audit logging to improve maintainability and reliability.",
      "Performance & Data Access: Implemented pagination, search, filtering, and sorting to make larger datasets easier to retrieve and navigate.",
      "Document Management: Contributed to bulk file uploads, dynamic metadata and file forms, document categorization, and document-viewing workflows.",
      "Testing & Debugging: Tested APIs and end-to-end workflows using Postman, logs, database verification, and frontend testing. Fixed validation, response-mapping, and UI consistency issues."
    ],
    "contributions": [
      {
        "title": "Backend Engineering",
        "description": "Developed REST APIs with Java 17 and Spring Boot for inquiry creation, editing, status management, activity history, teams, file handling, and role-based permissions."
      },
      {
        "title": "Frontend Development",
        "description": "Built Angular components for inquiry workflows, activity history, uploads, file views, and management screens. Connected them to backend services and resolved API integration issues."
      },
      {
        "title": "Data & System Design",
        "description": "Worked with ER diagrams, entity relationships, DTO mappings, and layered architecture. Applied validation, exception handling, and audit logging to improve maintainability and reliability."
      },
      {
        "title": "Performance & Data Access",
        "description": "Implemented pagination, search, filtering, and sorting to make larger datasets easier to retrieve and navigate."
      },
      {
        "title": "Document Management",
        "description": "Contributed to bulk file uploads, dynamic metadata and file forms, document categorization, and document-viewing workflows."
      },
      {
        "title": "Testing & Debugging",
        "description": "Tested APIs and end-to-end workflows using Postman, logs, database verification, and frontend testing. Fixed validation, response-mapping, and UI consistency issues."
      }
    ],
    "stack": [
      "Java 17",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "MySQL",
      "Postman"
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "event-ticket-booking-platform",
    stackGroups: [
      { title: "Backend", items: ["Java 17", "Spring Boot", "Spring Cloud Gateway"] },
      { title: "Frontend", items: ["Next.js", "Angular", "TypeScript"] },
      { title: "Data & Messaging", items: ["MySQL", "MongoDB", "RabbitMQ"] },
      { title: "Security", items: ["Keycloak"] },
      { title: "Infrastructure", items: ["Docker", "Kubernetes", "Kustomize", "Google Cloud / GKE", "AWS S3"] },
      { title: "CI/CD", items: ["GitHub Actions"] },
      { title: "Testing", items: ["Testcontainers", "k6"] },
    ],
    title: "Event Ticket Booking Platform",
    year: "2026",
    type: "Distributed Systems / Cloud Engineering",
    status: "Final Validation",
    role: "Backend, Reliability & DevOps Engineer",
    summary:
      "Preventing overselling, duplicate bookings, and inconsistent state across independently failing services.",
    subtitle:
      "Preventing overselling, duplicate bookings, and inconsistent state across independently failing services.",
    description:
      "A distributed booking workflow that protects limited inventory and makes retries safe. Compensation and transactional outbox processing support recovery after partial failures, while backend role and ownership checks control access.",
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Keycloak",
      "RabbitMQ",
      "MySQL",
      "MongoDB",
      "Next.js",
      "Angular",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "Kustomize",
      "GCP / GKE",
      "GitHub Actions",
      "AWS S3",
      "Testcontainers",
      "k6",
    ],
    features: [
      "Concurrency-safe inventory reservation prevents overselling.",
      "Idempotency keys and request fingerprints make booking retries safe.",
      "Payment-failure compensation and reservation-expiry recovery restore inventory.",
      "Transactional outbox processing protects committed work before RabbitMQ publication.",
      "Stale outbox claim recovery and optimistic version checks protect async workers.",
      "RabbitMQ publisher confirmation, retry/DLQ handling, and consumer event deduplication.",
      "Backend authorization enforces ADMIN scope, HOST ownership, and CUSTOMER access.",
      "CUSTOMER → host application → ADMIN approval → Keycloak HOST role assignment.",
      "Kustomize base/local/GKE overlays separate deployment environments.",
    ],
    challenges: [
      "Concurrent demand and ambiguous client timeouts at the inventory boundary.",
      "Partial payment failures across independently owned services.",
      "Abandoned async work, stale workers, and message redelivery.",
      "Ownership boundaries between hosts sharing the same platform.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/eventTicket-booking-platform",
      },
    ],
    demoVideo: {
      type: "youtube",
      id: "WyCTZabMX3A",
      title: "Original Product Demo — UI & Core Booking Flow",
    },
    demoNote: "Recorded before the later reliability and system-design improvements.",
    accent: "emerald",
    media: [
      {
        type: "image",
        src: "projects/event-booking/card-image.png",
        alt: "Event Ticket Booking Platform microservices architecture card",
      },
    ],
    details: {
      overviewHeading: "Keeping bookings correct under concurrency and failure",
      dataModelDiagrams: [
        {
          title: "Auth Service ER Diagram",
          src: "projects/event-booking/archi&design/datamodelerdesign/auth-service-er.png",
          alt: "Auth Service entity relationship diagram",
        },
        {
          title: "Event Service ER Diagram",
          src: "projects/event-booking/archi&design/datamodelerdesign/event-service-er.png",
          alt: "Event Service entity relationship diagram",
        },
        {
          title: "Booking Service ER Diagram",
          src: "projects/event-booking/archi&design/datamodelerdesign/booking-service-er.png",
          alt: "Booking Service entity relationship diagram",
        },
        {
          title: "Notification Service Document Model",
          src: "projects/event-booking/archi&design/datamodelerdesign/notification-service-dm.png",
          alt: "Notification Service document model diagram",
        },
      ],
      systemDesigns: [
        {
          "title": "Microservice Architecture & Database per Service",
          "content": "The platform is divided into independent **Auth, Event, Booking, and Notification services**, with an API Gateway providing the main entry point for client applications.\n\nEach service owns its persistence and exposes functionality through APIs or asynchronous messaging rather than directly accessing another service's database. This keeps domain boundaries clear and reduces coupling between services.\n\nThe overall service structure is shown in the C4 Container Diagram in the Overview section."
        },
        {
          "title": "Concurrency-Safe Ticket Inventory",
          "content": "Ticket inventory is limited, so multiple customers may attempt to reserve the same remaining tickets at the same time.\n\nThe Event Service performs inventory changes at the database level using atomic update operations and locking where necessary instead of relying on an unsafe read-then-update flow.\n\nA reservation succeeds only when sufficient inventory is still available, preventing **overselling under concurrent booking requests**.",
          "diagram": {
            "title": "Concurrent Ticket Reservation Flow",
            "src": "projects/event-booking/archi&design/concurrent-ticket-reservation-flow.png",
            "alt": "Concurrent booking requests use an atomic inventory update in Event Service, accepting reservations only when sufficient tickets remain."
          }
        },
        {
          "title": "Idempotent Booking",
          "content": "A client may retry a booking request after a timeout without knowing whether the original request already succeeded.\n\nThe Booking Service requires an **Idempotency-Key** and stores an `IdempotencyRecord` containing the key and a fingerprint of the request.\n\n- Same key + same request → return the existing booking.\n- Same key + different request → reject the request as a conflict.\n\nThis makes client retries safe and prevents duplicate bookings or repeated inventory reservation.",
          "diagram": {
            "title": "Idempotent Booking Flow",
            "src": "projects/event-booking/archi&design/idempotent-booking-flow.png",
            "alt": "Booking Service checks the idempotency key and request fingerprint to return an existing booking, reject a conflict, or process a new booking."
          }
        },
        {
          "title": "Compensation & Reservation Recovery",
          "content": "Booking Service and Event Service use separate local transactions, so inventory may already be reserved when a later booking step, such as payment, fails.\n\nWhen this happens, Booking Service requests Event Service to release the reserved inventory. A stable `releaseId` makes the compensation operation idempotent, so repeated release requests do not restore the same inventory multiple times.\n\nIf immediate compensation fails, the booking retains reservation-expiry information and a recovery process retries the release later.\n\nThis allows the platform to recover from **partial distributed failures without using a distributed two-phase commit**.",
          "diagram": {
            "title": "Compensation & Reservation Recovery Flow",
            "src": "projects/event-booking/archi&design/booking-vompensation&reservation-recovery-flow.png",
            "alt": "Failed payment triggers idempotent inventory release using a releaseId; unsuccessful releases are retried by reservation recovery."
          }
        },
        {
          "title": "Transactional Outbox",
          "content": "Saving a booking and publishing a RabbitMQ message are two separate operations. If the booking commits successfully but message publication fails, the notification event could otherwise be lost.\n\nThe Booking Service therefore stores the booking state and an `OutboxEvent` in the database transaction. A separate outbox worker later claims pending events and publishes them to RabbitMQ.\n\nOutbox records move through processing states, and stale `PROCESSING` records can be recovered when a worker fails before completing publication.\n\nThis ensures asynchronous work remains recoverable after the main booking transaction has committed.",
          "diagram": {
            "title": "Transactional Outbox & Failure Recovery Flow",
            "src": "projects/event-booking/archi&design/outbox_failure_recovery.png",
            "alt": "Booking and OutboxEvent are committed together; an asynchronous worker publishes pending events to RabbitMQ and recovery retries stale processing records."
          }
        },
        {
          "title": "At-Least-Once Messaging, Retry & Deduplication",
          "content": "RabbitMQ messages may be delivered more than once, and notification processing can fail temporarily.\n\nThe notification workflow uses retry handling and dead-letter processing for failed messages. Stable event IDs are used to detect events that have already been processed, allowing duplicate deliveries to be safely ignored.\n\nThe system therefore follows an **at-least-once delivery model** rather than claiming exactly-once messaging.",
          "diagram": {
            "title": "Notification Retry & Deduplication Flow",
            "src": "projects/event-booking/archi&design/notification-retry&deduplication-flow.png",
            "alt": "Notification processing flow showing retry handling, event deduplication, and dead-letter processing."
          }
        },
        {
          "title": "Role & Resource Ownership Authorization",
          "content": "Authentication alone is not sufficient because users with the same role may still own different resources.\n\nKeycloak provides authenticated identities and roles such as **CUSTOMER, HOST, and ADMIN**. Backend services then apply resource-level ownership checks in addition to role checks.\n\nFor example, a HOST can manage only the events and related resources owned by that HOST, while an ADMIN has platform-level management access.\n\nThe host onboarding workflow follows:\n\n`Registered User → Submit Host Application → ADMIN Review → HOST Role`\n\nIf the application is approved, the existing user account receives the HOST role. If it is rejected, the user remains a normal registered user.\n\nAuthorization is enforced by backend services rather than relying only on frontend visibility."
        }
      ],
      oopDesignPatterns: [
        {
          "pattern": "Repository Pattern",
          "where": "Across the Spring Boot services using repositories such as:\n\n- `BookingRepository`\n- `PaymentRepository`\n- `IdempotencyRecordRepository`\n- `OutboxEventRepository`\n- `EventRepository`\n- `TicketTypeRepository`\n- `HostApplicationRepo`",
          "howImplemented": "Repository interfaces extend Spring Data JPA repositories and expose database operations required by the service layer. More specialized queries are used where locking or domain-specific persistence behavior is required.",
          "why": "It separates persistence logic from business logic and keeps services focused on application workflows rather than direct database access."
        },
        {
          "pattern": "Builder Pattern",
          "where": "Used extensively in entities and DTOs such as:\n\n- `Booking`\n- `BookingItem`\n- `Payment`\n- `IdempotencyRecord`\n- `OutboxEvent`\n- request and response DTOs",
          "howImplemented": "Lombok `@Builder` provides builder-style object construction instead of relying on large constructors with many parameters.\n\nExample conceptually:\n\n```\nBooking.builder()\n    .userId(...)\n    .eventId(...)\n    .status(...)\n    .totalAmount(...)\n    .build();\n```",
          "why": "It improves readability when constructing objects with many fields and reduces errors caused by long constructor argument lists."
        },
        {
          "pattern": "Adapter Pattern",
          "where": "`JwtAuthConverter` in the Auth and Event services.",
          "howImplemented": "`JwtAuthConverter` implements Spring's:\n\n```\nConverter<Jwt, AbstractAuthenticationToken>\n```\n\nIt takes the JWT issued through Keycloak, extracts realm roles, converts them into Spring Security `GrantedAuthority` objects, and returns a `JwtAuthenticationToken`.\n\nSo conceptually:\n\n```\nKeycloak JWT\n      ↓\nJwtAuthConverter\n      ↓\nSpring Security AuthenticationToken\n```",
          "why": "Keycloak's JWT representation and Spring Security's authorization model are different. The converter adapts one representation into the form expected by Spring Security without spreading JWT parsing logic throughout controllers and services.",
          "diagram": {
            "title": "JWT Authentication Adapter",
            "src": "projects/event-booking/archi&design/oop-dp/jwt-authentication-adapter.png",
            "alt": "JWT authentication adapter diagram showing conversion from Keycloak JWT to Spring Security authentication."
          }
        },
        {
          "pattern": "Facade Pattern",
          "where": "`FileService` / `FileServiceImpl` in the Event Service.",
          "howImplemented": "Application code does not directly deal with all AWS S3 operations.\n\nInstead, it calls simple methods such as:\n\n```\ncreateResource(...)\ndeleteResource(...)\n```\n\n`FileServiceImpl` internally handles:\n\n- filename generation\n- S3 metadata\n- object upload\n- S3 resource URL generation\n- deletion\n- error handling",
          "why": "It hides AWS S3-specific complexity behind a small application-level interface, allowing event-management code to work with a simpler abstraction.",
          "diagram": {
            "title": "File Storage Facade",
            "src": "projects/event-booking/archi&design/oop-dp/file-storage-facade.png",
            "alt": "File storage facade diagram showing FileService simplifying access to AWS S3 storage operations."
          }
        }
      ],
      showSupportingRequirements: false,
      background:
        "The Event Ticket Booking Platform is a distributed event-management and ticket-booking system built using microservices. Customers can discover events and book tickets, while hosts manage their own events and administrators manage platform-level operations.\n\nThe main engineering focus was keeping the booking workflow reliable when multiple users compete for limited ticket inventory and when failures occur across independently running services. The system uses separate Auth, Event, Booking, and Notification services, with asynchronous messaging and cloud-oriented deployment.",
      functionalRequirements: [
        {
          id: "ETB-FR-01",
          area: "User Authentication & Account Management",
          requirement:
            "Users can register, verify their account, log in securely, and access features according to their assigned role.",
          priority: "High",
        },
        {
          id: "ETB-FR-02",
          area: "Event Discovery",
          requirement:
            "Customers can browse available events, view event details, ticket types, prices, and availability.",
          priority: "High",
        },
        {
          id: "ETB-FR-03",
          area: "Ticket Booking",
          requirement:
            "Customers can select tickets and create a booking for available inventory.",
          priority: "High",
        },
        {
          id: "ETB-FR-04",
          area: "Booking Management",
          requirement:
            "Customers can view and manage access to their own booking information.",
          priority: "High",
        },
        {
          id: "ETB-FR-05",
          area: "Host Event Management",
          requirement:
            "Approved hosts can create and manage events and related resources they own.",
          priority: "High",
        },
        {
          id: "ETB-FR-06",
          area: "Host Application & Approval",
          requirement:
            "Customers can apply to become hosts, while administrators approve or reject those applications.",
          priority: "High",
        },
        {
          id: "ETB-FR-07",
          area: "Administrator Management",
          requirement:
            "Administrators can perform platform-wide management operations.",
          priority: "High",
        },
        {
          id: "ETB-FR-08",
          area: "Notifications",
          requirement:
            "The platform sends notifications for important booking and account workflows.",
          priority: "High",
        },
      ],
      qualityAttributes: [
        {
          attribute: "Consistency",
          scenario: "Two customers try to reserve the last available ticket at the same time.",
          response: "Inventory reservation is performed atomically so successful concurrent requests cannot reduce available stock below zero.",
        },
        {
          attribute: "Idempotency",
          scenario: "A client times out and retries the same booking request.",
          response: "Each booking uses an Idempotency-Key and request fingerprint. The same request returns the existing booking, while a changed request using the same key is rejected.",
        },
        {
          attribute: "Recoverability",
          scenario: "Payment can fail after inventory has already been reserved, and recovery work can also fail or be interrupted.",
          response: "Failed payment triggers inventory compensation. If immediate release fails, reservation-expiry recovery retries the release using persisted booking state.",
        },
        {
          attribute: "Security & Ownership",
          scenario: "A HOST must not be able to manage another HOST's events or booking information.",
          response: "Authorization is enforced in the backend using JWT roles and resource ownership checks rather than relying only on frontend visibility.",
        },
      ],
      diagrams: [
        {
          title: "C4 Context Diagram",
          section: "overview",
          src: "projects/event-booking/c4/Context_diagram_c1.png",
          alt: "Event Ticket Booking Platform C4 system context diagram",
        },
        {
          title: "C4 Container Diagram",
          section: "overview",
          src: "projects/event-booking/c4/container-diagram_c2.svg",
          alt: "Event Ticket Booking Platform C4 container diagram",
        },
        {
          title: "Reliable Booking Flow",
          section: "challenges",
          src: "projects/event-booking/archi&design/reliable_booking_sequence.svg",
          alt: "Booking workflow showing idempotency checks, concurrency-safe inventory reservation, payment, booking transaction, transactional outbox publication and notification processing.",
        },
        {
          title: "Outbox & Failure Recovery",
          section: "architecture",
          src: "projects/event-booking/archi&design/outbox_failure_recovery.svg",
          alt: "Failure recovery flow showing outbox state recovery, optimistic version protection, RabbitMQ publication, retries, dead-letter handling and event deduplication.",
        },
        {
          title: "Host Onboarding & Authorization",
          section: "architecture",
          src: "projects/event-booking/archi&design/host_onboarding_authorization.svg",
          alt: "Host application approval flow and backend authorization boundaries for Admin, Host and Customer roles.",
        },
      ],
      tradeOffs: [
        "At-least-once messaging\nRabbitMQ can redeliver events. The system therefore uses stable event IDs and consumer-side deduplication instead of claiming exactly-once delivery.",
        "Compensation instead of 2PC\nBooking and inventory remain separate local transactions. This avoids distributed transaction coordination, but partial failures require explicit compensation and recovery logic.",
        "Consistency vs concurrency\nCritical inventory operations prioritize correctness under contention. This can serialize some highly contested updates, but prevents invalid ticket availability.",
        "Microservices complexity\nIndependent services improve domain ownership and failure isolation, but require additional configuration, discovery, messaging, deployment, and operational coordination.",
      ],
      designPatterns: [
        {
          pattern: "Idempotency Key",
          where: "Booking requests are identified by a user-scoped idempotency key and request fingerprint.",
          why: "Makes retries safe and prevents duplicate bookings or repeated inventory deduction.",
        },
        {
          pattern: "Transactional Outbox",
          where: "Booking state and an outgoing event are stored before asynchronous RabbitMQ publication.",
          why: "The database and message broker cannot participate in one normal local transaction, so the outbox preserves publication work after the booking commit.",
        },
        {
          pattern: "Compensating Transaction",
          where: "When payment fails after inventory reservation, the Booking Service releases the reserved inventory.",
          why: "Event and Booking services own separate transactions, so compensation is used instead of a distributed two-phase commit.",
        },
        {
          pattern: "Retry + Consumer Idempotency",
          where: "Notification processing retries transient failures and uses stable event IDs to identify previously processed events.",
          why: "The messaging model is at-least-once, so redelivery must be handled safely rather than assuming every event arrives once.",
        },
        {
          pattern: "Database per Service",
          where: "Auth, Event, Booking, and Notification services own their own persistence.",
          why: "This keeps service boundaries explicit and avoids cross-service database coupling.",
        },
      ],
    },
  },
  kafkaOrderPipeline,
  {
    slug: "securedns",
    stackGroups: [
      { title: "Backend", items: ["Python"] },
      { title: "Networking & Security", items: ["DNS", "AES-GCM", "RSA"] },
      { title: "Infrastructure", items: ["Docker", "Ubuntu"] },
    ],
    title: "SecureDNS",
    year: "2026",
    type: "Network Security Project",
    status: "Completed",
    role: "Network Security Developer",
    summary:
      "A browser-based DNS security demo comparing plaintext DNS with encrypted, signed requests and responses to demonstrate protection against sniffing, tampering, replay attacks, and flooding.",
    description:
      "SecureDNS follows a bank.test lookup from a local DNS gateway through an attacker proxy to a DNS server. In insecure mode, the proxy can observe queries and redirect the browser to a fake bank. Secure mode combines AES-GCM encryption, RSA-protected session keys, response signatures, nonce and timestamp checks, and rate limiting. A web dashboard runs the attack comparisons using Docker services and real DNS tools.",
    stack: ["Python", "Docker", "Ubuntu", "AES-GCM", "RSA", "DNS"],
    features: [
      "Real browser and dig lookups through a DNS gateway, attacker proxy, and DNS server",
      "Insecure and secure modes for comparing DNS attack outcomes",
      "AES-GCM encryption with RSA protection for the session key and signed responses",
      "Nonce and timestamp validation to detect replayed messages",
      "Rate limiting to reduce DNS flooding and a dashboard for running attack demos",
    ],
    challenges: [
      "Protecting DNS confidentiality and integrity while routing traffic through an attacker proxy.",
      "Demonstrating observable browser outcomes for insecure redirection and rejected secure responses.",
      "Coordinating Docker services, local DNS configuration, and restoration after tests.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/AmiruHoradagoda/SecureDNS" },
    ],
    accent: "cyan",
    media: [
      {
        type: "image",
        src: "projects/securedns/card-image.png",
        alt: "SecureDNS demo comparing insecure DNS attacks with encrypted and signed DNS communication",
      },
    ],
    details: {
      background:
        "**SecureDNS demonstrates how common DNS attacks can compromise user privacy and redirect traffic to malicious destinations, then shows how those risks can be mitigated through practical security controls.**\n\nThe system compares insecure DNS communication with a protected flow that uses **encryption, digital signatures, replay protection, and rate limiting**. It includes realistic attack demonstrations such as DNS sniffing, response tampering, fake-site redirection, replay attacks, and flooding, allowing the security improvements to be observed and evaluated directly.\n\nRather than only explaining DNS security theoretically, the project provides a **hands-on environment for understanding confidentiality, integrity, and availability in network communication** and how security mechanisms change system behaviour under attack.",
      functionalRequirements: [
        { id: "DNS-FR-01", area: "DNS Resolution", requirement: "Resolve bank.test through the local gateway, attacker proxy, and DNS server, returning a DNS answer to the browser or dig client.", priority: "Implemented" },
        { id: "DNS-FR-02", area: "Encryption", requirement: "Encrypt DNS payloads with AES-GCM and protect the session key with the server's public RSA key.", priority: "Implemented" },
        { id: "DNS-FR-03", area: "Verification", requirement: "Verify response signatures and authentication tags, and check nonces and timestamps to detect tampering and replay.", priority: "Implemented" },
        { id: "DNS-FR-04", area: "Availability", requirement: "Limit repeated rapid requests to reduce flooding, returning SERVFAIL for excess requests.", priority: "Implemented" },
        { id: "DNS-FR-05", area: "Demo Dashboard", requirement: "Run insecure and secure sniffing and tampering comparisons, demonstrate flood limiting, and restore DNS when the demo ends.", priority: "Implemented" },
      ],
      qualityAttributes: [
        { attribute: "Confidentiality", scenario: "The attacker observes DNS traffic between the gateway and server.", response: "AES-GCM encrypts the payload so the requested domain is hidden in secure mode." },
        { attribute: "Integrity", scenario: "The attacker changes a response to redirect the browser to a fake bank.", response: "Authentication-tag and signature verification detect modified data; the gateway rejects the response." },
        { attribute: "Replay Protection", scenario: "The attacker resends an old DNS message.", response: "Nonce and timestamp checks help detect replayed messages." },
        { attribute: "Availability", scenario: "Repeated fast requests flood the DNS service.", response: "Rate limiting restricts excess requests to reduce the impact of flooding." },
      ],
      designPatterns: [],
      diagrams: [
        { title: "DNS Request Flow", src: "projects/securedns/archi&design/dns-request-flow.png", alt: "DNS request flow from the browser through the gateway and attacker proxy to the DNS server" },
        { title: "Full Communication: Alice, Bob & Trudy", src: "projects/securedns/archi&design/full-communication.png", alt: "SecureDNS communication between Alice the gateway, Bob the server, and Trudy the attacker" },
        { title: "DNS Sniffing: Insecure", src: "projects/securedns/archi&design/sniffing-insecure.png", alt: "Insecure DNS sniffing demonstration exposing the requested domain" },
        { title: "DNS Sniffing: Secure", src: "projects/securedns/archi&design/sniffing-secure.png", alt: "SecureDNS sniffing demonstration with encrypted DNS traffic" },
        { title: "DNS Tampering: Insecure", src: "projects/securedns/archi&design/tampering-insecure.png", alt: "Insecure DNS tampering demonstration redirecting the browser to a fake bank" },
        { title: "DNS Tampering: Secure", src: "projects/securedns/archi&design/tampering-secure.png", alt: "SecureDNS tampering demonstration rejecting a modified response" },
        { title: "Flood Protection", src: "projects/securedns/archi&design/flood-protection.png", alt: "SecureDNS flood attack demonstration showing rate limiting" },
      ],
    },
  },
  {
    slug: "spare-part-sales-service-platform",
    stackGroups: [
      { title: "Backend", items: ["Spring Boot"] },
      { title: "Frontend", items: ["Angular", "Tailwind CSS"] },
      { title: "Data", items: ["MySQL"] },
    ],
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
    demoVideo: {
      type: "youtube",
      id: "PWVdUJgildE",
      title: "Spare Part Sales and Service Platform Demo",
    },
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
      diagrams: [
        {
          title: "ER Diagram",
          src: "projects/bike-parts-hub/archi&design/er_diagram.png",
          alt: "Bike Parts Hub ER diagram showing users, products, orders, services, appointments, and related entities",
        },
      ],
      erDiagram: {
        src: "projects/bike-parts-hub/archi&design/er_diagram.png",
        alt: "Bike Parts Hub ER diagram showing users, products, orders, services, appointments, and related entities",
      },
    },
  },
  {
    slug: "leckeep",
    stackGroups: [
      { title: "Backend", items: ["Spring Boot"] },
      { title: "Frontend", items: ["React", "Tailwind CSS"] },
      { title: "Data", items: ["MongoDB"] },
      { title: "Infrastructure", items: ["Docker", "AWS"] },
      { title: "CI/CD", items: ["Jenkins"] },
    ],
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
      functionalRequirements: [
        {
          id: "LK-FR-01",
          area: "User Authentication & Management",
          requirement:
            "Users must be able to register and log in using JWT-based authentication, passwords must be hashed with BCrypt before storage, all non-auth endpoints must require a valid bearer token, and the system must support CRUD operations on user accounts.",
          priority: "High",
        },
        {
          id: "LK-FR-02",
          area: "Subject Organization",
          requirement:
            "Users must be able to create, list, update, and delete subjects as top-level academic categories.",
          priority: "High",
        },
        {
          id: "LK-FR-03",
          area: "Folder Management",
          requirement:
            "Users must be able to create, list, update, and delete note folders, folders must support private, global, group, and shared scopes, and folder listing must support pagination.",
          priority: "High",
        },
        {
          id: "LK-FR-04",
          area: "Document Management",
          requirement:
            "Users must be able to upload documents into folders using multipart file upload, validate files with a 25 MB maximum size and filename sanitization, list folder documents with pagination, download documents, generate short-lived 15-minute preview URLs, delete documents, and route file handling by type such as image, PDF, or office document.",
          priority: "High",
        },
        {
          id: "LK-FR-05",
          area: "Study Groups",
          requirement:
            "Users must be able to create, list, view, update, and delete study groups, and add or remove group members.",
          priority: "High",
        },
        {
          id: "LK-FR-06",
          area: "Sharing",
          requirement: "Users must be able to share a folder with others and revoke a folder share.",
          priority: "High",
        },
        {
          id: "LK-FR-07",
          area: "Search",
          requirement:
            "Users must be able to search across their content through a placeholder endpoint that is not yet implemented.",
          priority: "Planned",
        },
      ],
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
      diagrams: [
        {
          title: "C4 Context Diagram",
          src: "projects/leckeep/c4/Context_diagram_c1.png",
          alt: "LecKeep C4 context diagram",
        },
        {
          title: "C4 Container Diagram",
          src: "projects/leckeep/c4/Container_diagram_c2.png",
          alt: "LecKeep C4 container diagram",
        },
        {
          title: "C4 Component Diagram",
          src: "projects/leckeep/c4/Components_diagram_c3.png",
          alt: "LecKeep C4 component diagram",
        },
        {
          title: "C4 Code Diagram",
          src: "projects/leckeep/c4/Code Diagram_c4.png",
          alt: "LecKeep C4 code diagram",
        },
        {
          title: "Document Model",
          src: "projects/leckeep/archi&design/document_model.png",
          alt: "LecKeep document model diagram",
        },
      ],
    },
  },
  {
    slug: "simple-pos-system",
    stackGroups: [
      { title: "Application", items: ["Java"] },
      { title: "Desktop UI", items: ["JavaFX"] },
      { title: "Data", items: ["MySQL"] },
    ],
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
      functionalRequirements: [
        {
          id: "POS-FR-01",
          area: "User Authentication",
          requirement:
            "Users must be able to register with an email and password, passwords must be hashed with BCrypt before storage, users must be able to log in with email and password, and the system must reject invalid email or incorrect password attempts with clear messages.",
          priority: "High",
        },
        {
          id: "POS-FR-02",
          area: "Navigation",
          requirement:
            "After login, users must land on a dashboard with buttons to reach Customer, Product, Place Order, Order Details, and Income Report sections.",
          priority: "High",
        },
        {
          id: "POS-FR-03",
          area: "Customer Management",
          requirement:
            "Users must be able to create customer records with email, name, contact number, and salary; view all customers in a table; search or filter customers by name or email as they type; select a customer to load details into the form; update an existing customer's name, contact, and salary while keeping email fixed; and delete a customer only after confirmation.",
          priority: "High",
        },
        {
          id: "POS-FR-04",
          area: "Product Management",
          requirement:
            "The system must auto-generate the next product code when opening the product screen, and users must be able to save a new product with code and description.",
          priority: "Partial",
        },
      ],
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
    stackGroups: [
      { title: "Mobile", items: ["Flutter"] },
      { title: "Backend & Data", items: ["Firebase"] },
    ],
    title: "Service Finder Mobile",
    year: "2024",
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
      diagrams: [
        {
          title: "Context Diagram",
          src: "projects/service-finder/c4/Context_diagram_c1.png",
          alt: "Service Finder context diagram",
        },
        {
          title: "Document Model",
          src: "projects/service-finder/archi&design/document_model.png",
          alt: "Service Finder document model diagram",
        },
      ],
    },
  },
  {
    slug: "pharmacy-sales-inventory-system",
    stackGroups: [
      { title: "Backend", items: ["Spring Boot"] },
      { title: "Frontend", items: ["React", "Tailwind CSS"] },
      { title: "Data", items: ["MySQL"] },
    ],
    title: "Pharmacy Sales and Inventory Management System",
    year: "2024",
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
      functionalRequirements: [
        {
          id: "PHR-FR-01",
          area: "User Authentication",
          requirement:
            "Users must be able to register with name, email, and password; log in and receive a JWT for authenticated requests; receive the default Customer role on registration while a separate Admin role is auto-seeded on startup through initCustomerRoleAndCustomer() and initAdminRoleAndAdmin(); and the frontend must persist the JWT and user object in localStorage while redirecting unauthenticated checkout users to login.",
          priority: "High",
        },
        {
          id: "PHR-FR-02",
          area: "Product Catalog",
          requirement:
            "Customers must be able to browse a paginated and sortable product list, search or filter products client-side by name, description, or category, view product details in a dialog or modal, and use an initial product set auto-seeded on startup through initialItems().",
          priority: "High",
        },
        {
          id: "PHR-FR-03",
          area: "Shopping Cart & Checkout",
          requirement:
            "Users must be able to add products to a cart, view cart contents with computed totals, proceed to checkout with address, city, and postal code, submit an order with cart line items, shipping address, and computed total, and clear the cart with a homepage redirect after successful order placement.",
          priority: "High",
        },
        {
          id: "PHR-FR-04",
          area: "Order Management",
          requirement:
            "Users must be able to place orders that persist Order, OrderItems, and ShippingAddress records; admins must be able to view all orders with pagination and sorting, view full order details, and move order status through PENDING, PROCESSING, and COMPLETED.",
          priority: "High",
        },
        {
          id: "PHR-FR-05",
          area: "Product Management",
          requirement:
            "Admins must be able to create, view, edit, and delete products, and the admin product listing must support pagination and sorting.",
          priority: "High",
        },
        {
          id: "PHR-FR-06",
          area: "User Management",
          requirement:
            "Admins must be able to view all registered users with pagination and sorting, and view a specific user's details.",
          priority: "High",
        },
        {
          id: "PHR-FR-07",
          area: "Admin Dashboard & Analytics",
          requirement:
            "The system must provide dashboard summary stats such as orders and revenue, show a configurable list of recent orders, show low-stock items against a configurable threshold, provide a sales overview over a configurable day range, and provide annual sales data for a selected year.",
          priority: "High",
        },
      ],
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
      diagrams: [
        {
          title: "Context Diagram",
          src: "projects/pharmacy/c4/Context_diagram_c1.png",
          alt: "Pharmacy sales and inventory system context diagram",
        },
        {
          title: "ER Diagram",
          src: "projects/pharmacy/archi&design/er_diagram.png",
          alt: "Pharmacy sales and inventory system ER diagram",
        },
      ],
    },
  },
];
