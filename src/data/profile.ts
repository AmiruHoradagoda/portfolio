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
  architectureHeadings?: { dataModel: string; systemDesigns: string; oopDesignPatterns: string };
  overviewDiagrams?: ProjectDiagram[];
  overviewSections?: { id: string; heading: string; diagrams: ProjectDiagram[]; placeholder?: string }[];
  evidence?: { title: string; introduction: string; diagrams: ProjectDiagram[]; result: string }[];
  limitations?: string;
  dataModelDiagrams?: ProjectDiagram[];
  dataModelDescription?: string;
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
      {
        title: "Backend",
        items: [
          "Python"
        ]
      },
      {
        title: "Networking & Security",
        items: [
          "DNS",
          "AES-GCM",
          "RSA"
        ]
      },
      {
        title: "Infrastructure",
        items: [
          "Docker",
          "Ubuntu"
        ]
      }
    ],
    title: "SecureDNS — Demonstrating DNS Attacks and Defenses",
    year: "2026",
    type: "Network Security / Applied Cryptography",
    status: "Completed (local educational demo)",
    role: "Network Security Developer",
    summary: "A real-browser DNS security demonstration that compares vulnerable plaintext lookups with encrypted and authenticated communication under sniffing, DNS-response tampering, and flooding attacks.",
    description: "A local DNS security lab connecting a real DNS client and browser flow to a gateway, attacker proxy, and resolving server. Insecure and protected modes make sniffing, response tampering, and optional request limiting observable.",
    stack: [
      "Python",
      "DNS",
      "AES-GCM",
      "RSA",
      "Docker",
      "Ubuntu"
    ],
    features: [
      "Real DNS A-record lookups and a browser-visible bank.test demo",
      "Plaintext and protected gateway-to-server communication",
      "AES-GCM payload encryption, RSA key wrapping, and signed responses",
      "Nonce and timestamp validation for freshness checks",
      "Optional request rate limiting and dashboard-driven experiments"
    ],
    challenges: [
      "Preserving real DNS client behavior while demonstrating a controlled on-path attacker",
      "Verifying protected responses before returning a DNS answer",
      "Reproducing attacks and restoring the Ubuntu resolver after experiments"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AmiruHoradagoda/SecureDNS"
      }
    ],
    accent: "cyan",
    media: [
      {
        type: "image",
        src: "projects/securedns/card-image.png",
        alt: "SecureDNS demo comparing insecure DNS attacks with encrypted and signed DNS communication"
      }
    ],
    details: {
      background: "Ordinary DNS messages do not inherently hide the requested domain or authenticate the answer. An on-path attacker can observe a lookup or substitute an IP address, directing a browser to an attacker-controlled destination.\n\nSecureDNS makes this problem observable in a local lab. A real lookup for bank.test travels through a DNS gateway (Alice), attacker-controlled proxy (Trudy), and resolving server (Bob). Real and fake bank sites make the consequences visible in a browser; a dashboard runs the comparisons and resolver-restoration workflow.\n\nProtected mode combines AES-GCM payload encryption, RSA-wrapped session keys, signed server responses, freshness checks, and optional rate limiting. The protected boundary is the gateway-to-server exchange through Trudy. This is a controlled educational demonstration, not a production replacement for DNSSEC, DoT, or DoH.",
      overviewSections: [
        {
          id: "dns-request",
          heading: "DNS Request Path",
          diagrams: [
            {
              title: "DNS Request Flow",
              src: "projects/securedns/archi&design/dns-request-flow.png",
              alt: "A DNS lookup travels from the browser or operating system through the gateway and attacker proxy to the SecureDNS server.",
              caption: "The client uses ordinary DNS to reach Alice. Alice exchanges JSON messages over TCP with Bob through Trudy; protected mode encrypts these payloads. The gateway supports UDP and TCP DNS; the diagram illustrates UDP."
            }
          ]
        },
        {
          id: "trust-boundary",
          heading: "Trust Boundary & Attack Position",
          diagrams: [
            {
              title: "Alice, Bob & Trudy Communication",
              src: "projects/securedns/archi&design/full-communication.png",
              alt: "Alice wraps an AES session key for Bob and exchanges encrypted requests and signed, encrypted responses through Trudy.",
              caption: "Alice is the gateway, Bob is the resolving server, and Trudy is the on-path proxy. Bob signs responses; both directions use authenticated encryption. The gateway trusts a locally supplied copy of Bob's public key."
            }
          ]
        }
      ],
      functionalRequirements: [
        {
          id: "DNS-FR-01",
          area: "DNS Resolution",
          requirement: "Resolve bank.test through the gateway, attacker proxy, and server using actual DNS A-record lookups and the local browser flow.",
          priority: "Implemented"
        },
        {
          id: "DNS-FR-02",
          area: "Insecure Comparison",
          requirement: "Provide a plaintext mode in which the proxy can log queried domains and substitute the IP address in a response.",
          priority: "Implemented"
        },
        {
          id: "DNS-FR-03",
          area: "Confidentiality",
          requirement: "Encrypt gateway-to-server request and response payloads with AES-GCM, using a fresh AES key per query wrapped with the server's RSA public key.",
          priority: "Implemented"
        },
        {
          id: "DNS-FR-04",
          area: "Integrity & Authenticity",
          requirement: "Authenticate the encrypted response and verify the server signature before returning its answer. Return SERVFAIL when security verification fails.",
          priority: "Implemented"
        },
        {
          id: "DNS-FR-05",
          area: "Replay & Freshness Checks",
          requirement: "Reject stale timestamps and previously seen request nonces at the server; check the response nonce against the current query and validate its timestamp at the gateway.",
          priority: "Implemented"
        },
        {
          id: "DNS-FR-06",
          area: "Flood Mitigation",
          requirement: "When enabled in secure mode, limit repeated queries by domain and query type within a configured time window; return SERVFAIL for excess requests.",
          priority: "Implemented"
        },
        {
          id: "DNS-FR-07",
          area: "Demo Operations",
          requirement: "Provide dashboard actions for insecure/secure sniffing and tampering, a flood-limiting scenario, log inspection, and an explicit Ubuntu DNS restoration action.",
          priority: "Implemented"
        }
      ],
      systemDesigns: [
        {
          title: "Components & Trust Boundaries",
          content: "**Design:** Alice accepts normal DNS queries, translates supported A-record lookups into JSON messages, and returns a DNS answer. Trudy forwards those messages and can observe traffic, replace plaintext answers, or flip protected ciphertext bytes. Bob resolves local demo records and can forward other A-record lookups to upstream resolvers.\n\n**Why:** Keeping the attacker on the same path in both modes makes the security comparison reproducible. The five Compose services include Alice, Trudy, Bob, and the real/fake bank sites; the dashboard runs separately on the host.\n\n**Trade-off:** This is a deliberately controlled intermediary. The local client-to-gateway leg and Bob's ordinary upstream lookups are outside the encrypted boundary."
        },
        {
          title: "Hybrid Encryption & Server Authentication",
          content: "**Design:** Alice generates a random 256-bit AES key for each query and uses AES-GCM with a random 96-bit IV. RSA-OAEP with SHA-256 wraps the session key for Bob. Bob signs the response payload with RSA-PSS/SHA-256, then encrypts the signed body using AES-GCM.\n\n**Why:** Symmetric encryption protects the payload; RSA key wrapping lets Alice send the session key to Bob. The response signature binds the answer to the server key that Alice trusts.\n\n**Trade-off:** Per-query RSA operations add overhead, without a published performance benchmark. Keys are distributed locally rather than through a managed certificate or rotation system; the custom protocol is not a standard encrypted DNS transport."
        },
        {
          title: "Verify Before Answering & Check Freshness",
          content: "**Design:** Alice decrypts and authenticates the response, matches its nonce to the current query, checks timestamp freshness, and verifies Bob's signature before using the answer. Verification errors produce SERVFAIL. Bob checks request freshness and tracks previously used request nonces. The timestamp tolerance in the source is 60 seconds.\n\n**Why:** Checks happen at the message boundary, before an untrusted answer becomes a browser-visible IP address. A security failure prevents redirection while making the failed lookup observable.\n\n**Trade-off:** The browser receives a DNS failure rather than an automatically repaired answer. Freshness depends on clocks; the server's nonce set is in memory, has no expiry cleanup, and resets on restart. These checks do not establish comprehensive replay resistance."
        },
        {
          title: "Repeatable Experiments & Local DNS Restoration",
          content: "**Design:** Dashboard actions run predefined scripts that select the communication and attack modes, start Docker services, issue dig lookups, and expose script/container logs. The availability script enables a gateway sliding-window limiter keyed by domain and query type. An explicit restore action stops containers and restores Ubuntu's systemd-resolved configuration.\n\n**Why:** A real DNS/browser path demonstrates the effect of a forged answer, while fixed scripts make insecure-versus-secure outcomes easier to compare. The restoration workflow addresses the operational challenge of changing host DNS settings.\n\n**Trade-off:** Rate limiting is off by default and protects repeated keys only, not all traffic or distributed floods. Restoration is an explicit Ubuntu-oriented action, not a guarantee of restoring every custom resolver configuration."
        }
      ],
      evidence: [
        {
          title: "Confidentiality: DNS Sniffing",
          introduction: "**Threat:** Trudy captures the messages between Alice and Bob and tries to read the requested domain. Both runs perform a bank.test lookup; only the message protection changes.",
          diagrams: [
            {
              title: "Insecure Mode: Domain Visible",
              src: "projects/securedns/archi&design/sniffing-insecure.png",
              alt: "Insecure sniffing logs show bank.test in plaintext and a successful lookup of the real-bank address.",
              caption: "The proxy log exposes bank.test and its answer, 172.28.0.40. The accompanying ping confirms that the name resolved to the real-bank destination."
            },
            {
              title: "Secure Mode: Encrypted Payload",
              src: "projects/securedns/archi&design/sniffing-secure.png",
              alt: "Secure sniffing logs show encrypted fields while the gateway verifies the real-bank response.",
              caption: "Trudy sees the wrapped key, IV, and ciphertext. Alice logs a verified bank.test answer, and the lookup still reaches 172.28.0.40."
            }
          ],
          result: "**Observed result:** The captured proxy messages expose the domain in plaintext mode and encrypted fields in protected mode. This demonstrates payload confidentiality at the simulated attack position; endpoints still see the domain and traffic metadata remains visible."
        },
        {
          title: "Integrity: DNS Response Tampering",
          introduction: "**Threat:** Trudy substitutes the fake-bank address in plaintext mode, then attempts ciphertext modification in protected mode. The configured real-bank address is 172.28.0.40; the fake-bank destination is 172.28.0.50.",
          diagrams: [
            {
              title: "Insecure Mode: Answer Replaced",
              src: "projects/securedns/archi&design/tampering-insecure.png",
              alt: "Attacker logs show the original bank.test answer and substitution of the fake-bank IP address.",
              caption: "The screenshot records Trudy changing responses to 172.28.0.50. The repository walkthrough demonstrates the resulting fake-bank browser flow; the visible panel here is the attack log."
            },
            {
              title: "Secure Mode: Tampering Rejected",
              src: "projects/securedns/archi&design/tampering-secure.png",
              alt: "Secure-mode logs show ciphertext modification followed by gateway verification failure and SERVFAIL.",
              caption: "Trudy flips ciphertext bytes; Alice reports security verification failure and returns SERVFAIL. The modified answer is not returned as a usable IP address."
            }
          ],
          result: "**Observed result:** Plaintext response substitution is accepted in the lab flow; protected ciphertext modification results in DNS failure. This experiment exercises AES-GCM authentication rejection. Signature verification is also implemented, but this screenshot does not isolate a separate signature-failure test."
        },
        {
          title: "Availability: Controlled Flood Limiting",
          introduction: "**Threat:** Rapid repeated A-record lookups create avoidable processing load. The demo explicitly enables a limit of five requests per two-second window for the same domain/query-type key.",
          diagrams: [
            {
              title: "Secure Mode: Excess Requests Limited",
              src: "projects/securedns/archi&design/flood-protection.png",
              alt: "Flood demonstration output shows allowed queries followed by requests rejected with SERVFAIL.",
              caption: "This captured run reports four allowed queries and sixteen limited queries from the twenty-query burst. These are observations from one run, not throughput or capacity measurements."
            }
          ],
          result: "**Observed result:** The recorded burst contains SERVFAIL responses after the repeated-query limit is reached. The source checks this limit before opening the protected exchange. This demonstrates a local mitigation, not Internet-scale denial-of-service resistance."
        }
      ],
      limitations: "**Outcome:** The evidence shows visible plaintext queries, observable answer substitution, rejection of altered ciphertext, and optional limiting of repeated queries. Replay and signature checks are supported by source inspection; no dedicated replay or isolated signature-failure evidence is presented here.\n\n**Scope:** This is a local educational prototype with A-record support. It does not implement DNSSEC, DoT, or DoH, authenticate upstream DNS answers, or encrypt the client-to-gateway leg. It provides no published latency/throughput benchmark or production availability guarantee.\n\n**Operational limits:** The lab relies on a trusted local server public key, ephemeral replay state, configured clocks, and explicit DNS restoration. Rate-limit buckets are keyed by domain/query type rather than requester identity. The attacker can still drop traffic, and rejecting tampering deliberately sacrifices that lookup's availability."
    }
  },
  {
    slug: "spare-part-sales-service-platform",
    title: "BikePartsHub — Motorcycle Parts Sales & Service Platform",
    year: "2024",
    type: "Full-Stack E-commerce / Service Management",
    status: "Ongoing",
    role: "Full Stack Engineer",
    summary: "A full-stack motorcycle parts commerce and service-booking platform combining product discovery, checkout, appointment scheduling, role-based administration, and third-party payment and storage integrations.",
    description: "BikePartsHub is a full-stack web application for a motorcycle spare-parts business. It combines two main business workflows in one platform: spare-parts sales and motorcycle service appointment booking.\n\nCustomers can browse and filter products, manage a cart, place orders, pay using PayPal or Cash on Delivery, and book service appointments using available time slots. Administrators manage products, customers, orders, services, appointments, product images, and loyal-customer discounts.\n\nThe system is implemented as an Angular frontend, a Spring Boot REST API, and a MySQL database, with PayPal used for online payments and AWS S3 used for product-image storage.",
    stack: [
      "Java 17",
      "Spring Boot 3.3",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Angular 17",
      "TypeScript",
      "RxJS",
      "Tailwind CSS",
      "PrimeNG",
      "MySQL",
      "JWT Access Tokens",
      "JWT Refresh Tokens",
      "BCrypt Password Hashing",
      "PayPal REST SDK",
      "AWS S3",
      "REST APIs",
      "OpenAPI / Swagger",
      "JUnit / Spring Boot Test",
      "Jasmine / Karma"
    ],
    stackGroups: [
      {
        title: "Backend",
        items: [
          "Java 17",
          "Spring Boot 3.3",
          "Spring Security",
          "Spring Data JPA",
          "Hibernate"
        ]
      },
      {
        title: "Frontend",
        items: [
          "Angular 17",
          "TypeScript",
          "RxJS",
          "Tailwind CSS",
          "PrimeNG"
        ]
      },
      {
        title: "Data",
        items: [
          "MySQL"
        ]
      },
      {
        title: "Security",
        items: [
          "JWT Access Tokens",
          "JWT Refresh Tokens",
          "BCrypt Password Hashing"
        ]
      },
      {
        title: "Integrations",
        items: [
          "PayPal REST SDK",
          "AWS S3"
        ]
      },
      {
        title: "API & Documentation",
        items: [
          "REST APIs",
          "OpenAPI / Swagger"
        ]
      },
      {
        title: "Testing",
        items: [
          "JUnit / Spring Boot Test",
          "Jasmine / Karma"
        ]
      }
    ],
    features: [
      "Users can register, log in, refresh authentication tokens, log out, and manage their account information.",
      "Customers can browse the motorcycle spare-parts catalog.",
      "Logged-in customers can add products to a shopping cart and adjust quantities.",
      "Customers can view their order history and order information.",
      "Customers can browse available motorcycle services.",
      "Administrators can create, update, and remove products.",
      "The platform supports a LOYAL_CUSTOMER role in addition to regular customers."
    ],
    challenges: [],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AmiruHoradagoda/BikePartsHubApplication/tree/main"
      }
    ],
    demoVideo: {
      type: "youtube",
      id: "PWVdUJgildE",
      title: "Spare Part Sales and Service Platform Demo"
    },
    accent: "cyan",
    media: [
      {
        type: "image",
        src: "projects/bike-parts-hub/card-image.png",
        alt: "BikePartsHub spare parts platform screenshot"
      }
    ],
    details: {
      background: "BikePartsHub is a full-stack web application for a motorcycle spare-parts business. It combines two main business workflows in one platform: **spare-parts sales** and **motorcycle service appointment booking**.\n\nCustomers can browse and filter products, manage a cart, place orders, pay using PayPal or Cash on Delivery, and book service appointments using available time slots. Administrators manage products, customers, orders, services, appointments, product images, and loyal-customer discounts.\n\nThe system is implemented as an **Angular frontend**, a **Spring Boot REST API**, and a **MySQL database**, with PayPal used for online payments and AWS S3 used for product-image storage.",
      overviewDiagrams: [
        {
          title: "C4 Context Diagram",
          src: "projects/bike-parts-hub/c4/context_diagram_c1.svg",
          alt: "BikePartsHub C4 system context diagram"
        },
        {
          title: "C4 Container Diagram",
          src: "projects/bike-parts-hub/c4/container-diagram_c2.svg",
          alt: "BikePartsHub C4 container diagram"
        }
      ],
      functionalRequirements: [
        {
          id: "BPH-FR-01",
          area: "Authentication & Account Management",
          requirement: "- Users can register, log in, refresh authentication tokens, log out, and manage their account information.\n- The backend uses JWT access and refresh tokens.\n- The system supports roles such as **CUSTOMER**, **LOYAL_CUSTOMER**, and **ADMIN**.\n- Backend endpoints use Spring Security and method-level authorization for protected operations.",
          priority: "High"
        },
        {
          id: "BPH-FR-02",
          area: "Product Discovery & Compatibility Filtering",
          requirement: "- Customers can browse the motorcycle spare-parts catalog.\n- Products can be filtered using attributes such as category, product type, manufacturer, color, bike type, bike model, and bike manufacturer.\n- Product results support pagination.\n- Customers can open product details before adding products to the cart.",
          priority: "High"
        },
        {
          id: "BPH-FR-03",
          area: "Cart, Checkout & Payment",
          requirement: "- Logged-in customers can add products to a shopping cart and adjust quantities.\n- Customers provide shipping information during checkout.\n- The platform supports **PayPal** and **Cash on Delivery** payment methods.\n- Successful checkout creates the order, order items, shipping information, and payment record.",
          priority: "High"
        },
        {
          id: "BPH-FR-04",
          area: "Order Management",
          requirement: "- Customers can view their order history and order information.\n- Administrators can view and manage customer orders.\n- Orders use explicit statuses to represent their lifecycle.\n- Order-related information is stored together with shipping and payment data.",
          priority: "High"
        },
        {
          id: "BPH-FR-05",
          area: "Service Appointment Scheduling",
          requirement: "- Customers can browse available motorcycle services.\n- Customers can choose a service, date, and available time slot.\n- Slot availability is calculated using the selected service duration, business hours, and existing appointments.\n- Customers can view their appointment history.\n- Administrators can manage appointments and appointment statuses.",
          priority: "High"
        },
        {
          id: "BPH-FR-06",
          area: "Administration",
          requirement: "- Administrators can create, update, and remove products.\n- Product images can be uploaded to AWS S3.\n- Administrators can manage services, customers, orders, and appointments.\n- Administrative operations are exposed through dedicated backend endpoints.",
          priority: "High"
        },
        {
          id: "BPH-FR-07",
          area: "Loyal Customer Management",
          requirement: "- The platform supports a **LOYAL_CUSTOMER** role in addition to regular customers.\n- Administrators can identify and manage loyal customers.\n- Product discounts can be applied for loyal customers.\n- The frontend displays discounted prices when the logged-in user has the loyal-customer role.",
          priority: "High"
        }
      ],
      dataModelDescription: "BikePartsHub uses a relational MySQL data model for both sales and service-booking workflows.\n\nThe main domain entities include:\n\n- `User`\n- `Token`\n- `Product`\n- `ProductAttribute`\n- `Bike`\n- `Order`\n- `OrderDetails`\n- `ShippingAddress`\n- `Payment`\n- `ServiceType`\n- `Appointment`\n\nThe model connects customers with their orders and appointments while keeping product, payment, shipping, bike-compatibility, and service information represented as separate domain entities.",
      dataModelDiagrams: [
        {
          title: "BikePartsHub ER Diagram",
          src: "projects/bike-parts-hub/archi&design/er_diagram.png",
          alt: "Bike Parts Hub ER diagram showing users, products, orders, services, appointments, and related entities"
        }
      ],
      systemDesigns: [
        {
          title: "Layered Full-Stack Architecture",
          content: "The application separates frontend, API, business logic, and persistence responsibilities.\n\nThe Angular application handles customer and administrator interfaces. Spring REST controllers expose backend endpoints, service classes contain business logic, repositories handle database access, and JPA/Hibernate maps domain entities to MySQL.\n\nConceptually:\n\n```text\nAngular Web Application\n        ↓\nREST Controllers\n        ↓\nService Layer\n        ↓\nRepositories\n        ↓\nMySQL\n```\n\nThis separation keeps UI logic, business rules, and persistence concerns from being mixed together."
        },
        {
          title: "JWT Authentication & Token Lifecycle",
          content: "The authentication workflow uses JWT access and refresh tokens.\n\nAfter successful authentication, the backend generates an access token and refresh token. Access tokens are stored with token state so previously issued tokens can be marked revoked or expired.\n\nFor authenticated requests, `JwtAuthenticationFilter` extracts the bearer token, validates the JWT, checks its stored token state, loads the user, and places the resulting authentication into Spring Security's `SecurityContext`.\n\nThe refresh-token flow can issue a new access token when a valid refresh token is supplied.",
          diagram: {
            title: "JWT Authentication & Token Lifecycle",
            src: "projects/bike-parts-hub/archi&design/JWT Authentication & Token Lifecycle.png",
            alt: "BikePartsHub JWT authentication and token lifecycle diagram"
          }
        },
        {
          title: "Dynamic Product Filtering",
          content: "The product catalog supports multiple filters without creating a separate repository method for every filter combination.\n\n`ProductSpecification` builds Spring Data JPA `Specification<Product>` objects dynamically using filters such as:\n\n- category\n- product type\n- product manufacturer\n- color\n- bike type\n- bike model\n- bike manufacturer\n\n`ProductRepo` implements `JpaSpecificationExecutor<Product>`, allowing these specifications to be combined and executed with pagination.\n\nThis keeps filtering logic composable and easier to extend when additional product attributes are introduced."
        },
        {
          title: "Checkout & Payment Processing",
          content: "Checkout coordinates several related persistence operations through `CheckoutFacade`.\n\nThe checkout workflow:\n\n```text\nFind Customer\n      ↓\nSave Shipping Address\n      ↓\nCreate Order\n      ↓\nCreate Order Details\n      ↓\nSelect Payment Strategy\n      ↓\nSave Payment\n```\n\n`CheckoutFacadeImpl.placeOrder(...)` is transactional, so the database-side checkout operations are handled as one local transaction.\n\nPayment behavior is selected through `PaymentStrategyFactory`, which chooses the appropriate implementation based on the requested `PaymentMethod`.",
        },
        {
          title: "Appointment Scheduling",
          content: "Appointment scheduling checks whether the requested service can fit within the available schedule before creating an appointment.\n\nThe backend considers:\n\n- selected date\n- requested start time\n- service duration\n- business hours\n- existing appointments\n- configured concurrent appointment capacity\n\nAvailable time slots are generated in 30-minute increments between business opening and closing times.\n\nThis keeps appointment availability logic in the backend instead of depending only on frontend validation.",
        }
      ],
      oopDesignPatterns: [
        {
          pattern: "Strategy Pattern",
          where: "Payment processing through:\n\n- `PaymentStrategy`\n- `PaypalPaymentStrategy`\n- `CashOnDeliveryPaymentStrategy`",
          howImplemented: "`PaymentStrategy` defines the common payment-record creation contract.\n\nEach implementation handles the behavior required for a specific payment method. PayPal payments are stored as paid when a transaction reference is available, while Cash on Delivery payments begin in a pending state.",
          why: "It keeps payment-specific behavior out of the checkout workflow and allows additional payment methods to be added without rewriting `CheckoutFacadeImpl`.",
          diagram: {
            title: "Payment Strategy & Factory UML",
            src: "projects/bike-parts-hub/archi&design/oop-dp/Payment Strategy & Factory UML.png",
            alt: "BikePartsHub payment strategy and factory UML diagram"
          }
        },
        {
          pattern: "Factory / Registry Pattern",
          where: "`PaymentStrategyFactory`",
          howImplemented: "Spring injects the available `PaymentStrategy` implementations into the factory.\n\nThe factory stores them in a map indexed by `PaymentMethod` and returns the correct strategy at runtime.\n\nConceptually:\n\n```text\nPaymentMethod\n     ↓\nPaymentStrategyFactory\n     ↓\nPayPalPaymentStrategy\n        or\nCashOnDeliveryPaymentStrategy\n```",
          why: "It centralizes strategy selection and prevents checkout code from containing repeated `if` / `switch` logic for payment-method selection."
        },
        {
          pattern: "Facade Pattern",
          where: "`CheckoutFacade` / `CheckoutFacadeImpl`",
          howImplemented: "The order controller calls a single operation:\n\n```text\nplaceOrder(...)\n```\n\n`CheckoutFacadeImpl` internally coordinates:\n\n- customer lookup\n- shipping-address persistence\n- order creation\n- order-item creation\n- payment-strategy selection\n- payment persistence",
          why: "It hides the multi-step checkout process behind one application-level operation and keeps controllers from coordinating repositories and payment behavior directly.",
          diagram: {
            title: "Checkout Facade UML",
            src: "projects/bike-parts-hub/archi&design/oop-dp/Checkout Facade UML.png",
            alt: "BikePartsHub checkout facade UML diagram"
          }
        },
        {
          pattern: "Adapter Pattern — PayPal",
          where: "- `PaymentGateway`\n- `PaypalPaymentGatewayAdapter`",
          howImplemented: "Application code depends on the `PaymentGateway` interface.\n\n`PaypalPaymentGatewayAdapter` translates the application's payment requests into PayPal SDK objects, creates or executes PayPal payments, and converts PayPal responses back into application DTOs.",
          why: "It keeps PayPal SDK-specific classes and behavior behind an application-owned interface, reducing coupling between the rest of the application and the external payment provider.",
          diagram: {
            title: "PayPal Payment Gateway Adapter UML",
            src: "projects/bike-parts-hub/archi&design/oop-dp/PayPal Adapter UML.png",
            alt: "BikePartsHub PayPal payment gateway adapter UML diagram"
          }
        },
        {
          pattern: "Adapter Pattern — AWS S3",
          where: "- `FileStorageService`\n- `S3FileStorageAdapter`",
          howImplemented: "The application depends on the `FileStorageService` interface for product-image uploads.\n\n`S3FileStorageAdapter` handles:\n\n- image validation\n- file-name sanitization\n- unique object-key generation\n- S3 metadata creation\n- object upload\n- S3 URL generation",
          why: "It isolates AWS S3-specific behavior behind an application-level storage interface, making product-management code independent of direct AWS SDK operations.",
          diagram: {
            title: "S3 File Storage Adapter UML",
            src: "projects/bike-parts-hub/archi&design/oop-dp/S3 Adapter UML.png",
            alt: "BikePartsHub AWS S3 file storage adapter UML diagram"
          }
        }
      ]
    }
  },
  {
    slug: "leckeep",
    stackGroups: [
      {
        title: "Backend",
        items: [
          "Java 17",
          "Spring Boot 3.3"
        ]
      },
      {
        title: "Frontend",
        items: [
          "React 19",
          "Vite",
          "Tailwind CSS"
        ]
      },
      {
        title: "Data & Storage",
        items: [
          "MongoDB",
          "MinIO Object Storage"
        ]
      },
      {
        title: "Security",
        items: [
          "Spring Security",
          "JWT Authentication"
        ]
      },
      {
        title: "DevOps",
        items: [
          "Docker Compose",
          "Jenkins",
          "Ansible",
          "Terraform",
          "AWS EC2"
        ]
      }
    ],
    title: "LecKeep — Academic Document Management & Collaboration Platform",
    year: "2024–2026",
    type: "Full-Stack / Document Management Platform",
    status: "Ongoing",
    role: "Full Stack Developer",
    summary: "A full-stack academic workspace designed to help students organize, securely access, search, preview, and share lecture materials across subjects, folders, and study groups. LecKeep combines permission-aware document management, object-storage abstraction, secure sharing, and containerized deployment workflows.",
    description: "Students often accumulate lecture PDFs, slides, images, and shared learning materials across different folders and communication channels, making them difficult to organize, retrieve, and share safely.\n\nLecKeep addresses this by providing one authenticated academic workspace where students can organize materials by subject and folder, upload and preview documents, create study groups, share folders with controlled access, and search only the resources they are authorized to view.\n\nThe application uses a React frontend and Spring Boot REST API, with MongoDB for application metadata and MinIO-compatible object storage for uploaded documents. Security is handled through JWT-based authentication and centralized folder/document permission checks.",
    stack: [
      "Java 17",
      "Spring Boot 3.3",
      "React 19",
      "Vite",
      "Tailwind CSS",
      "MongoDB",
      "MinIO Object Storage",
      "Docker",
      "Docker Compose",
      "Jenkins",
      "Ansible",
      "Terraform",
      "AWS EC2"
    ],
    features: [
      "Subject and folder organization",
      "Permission-aware document access and academic search",
      "Document upload, preview, and download through object storage",
      "Study groups and controlled folder sharing",
      "Containerized local environment and CI/deployment automation configuration"
    ],
    challenges: [],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AmiruHoradagoda/LecKeep"
      }
    ],
    accent: "violet",
    media: [
      {
        type: "image",
        src: "projects/leckeep/card-image.png",
        alt: "LecKeep academic workspace screenshot"
      }
    ],
    details: {
      background: "Students often accumulate lecture PDFs, slides, images, and shared learning materials across different folders and communication channels, making them difficult to organize, retrieve, and share safely.\n\nLecKeep addresses this by providing one authenticated academic workspace where students can organize materials by subject and folder, upload and preview documents, create study groups, share folders with controlled access, and search only the resources they are authorized to view.\n\nThe application uses a React frontend and Spring Boot REST API, with MongoDB for application metadata and MinIO-compatible object storage for uploaded documents. Security is handled through JWT-based authentication and centralized folder/document permission checks.",
      architectureHeadings: {
        dataModel: "Data Model / Document Model",
        systemDesigns: "Main System Designs",
        oopDesignPatterns: "OOP Design Patterns"
      },
      functionalRequirements: [
        {
          id: "LK-FR-01",
          area: "Authentication & Account Management",
          requirement: "Users must be able to register and log in securely. Passwords are stored using BCrypt hashing, while authenticated API requests use JWT bearer tokens.",
          priority: "High"
        },
        {
          id: "LK-FR-02",
          area: "Subject & Folder Organization",
          requirement: "Students must be able to organize academic resources using subjects and folders, including creating, viewing, updating, and deleting their own organizational structures.\n\nFolders can represent different access contexts such as private, global, group-based, or explicitly shared resources.",
          priority: "High"
        },
        {
          id: "LK-FR-03",
          area: "Document Management",
          requirement: "Students must be able to upload academic documents into folders, list uploaded resources, preview supported documents through short-lived URLs, download files, and delete documents in folders they own.\n\nUploads are validated before object storage, including filename handling and a maximum file-size limit.",
          priority: "High"
        },
        {
          id: "LK-FR-04",
          area: "Permission-Aware Resource Access",
          requirement: "The platform must prevent users from accessing academic resources they are not authorized to view.\n\nFolder access is determined using ownership, visibility, study-group membership, and explicit share records. Document access inherits the permissions of its parent folder.",
          priority: "High"
        },
        {
          id: "LK-FR-05",
          area: "Academic Resource Search",
          requirement: "Students must be able to search their academic workspace for subjects, folders, and document metadata using case-insensitive partial matching.\n\nSearch results must respect the same access-control rules as direct resource access so private or unauthorized materials are not leaked through search.",
          priority: "High"
        },
        {
          id: "LK-FR-06",
          area: "Study Group Management",
          requirement: "Students must be able to create study groups, manage group membership, and use group membership as part of controlled academic-resource access.",
          priority: "High"
        },
        {
          id: "LK-FR-07",
          area: "Secure Folder Sharing",
          requirement: "Folder owners must be able to share resources with specific users, study groups, or authenticated users through controlled share permissions and revoke access when it is no longer required.",
          priority: "High"
        }
      ],
      overviewDiagrams: [
        {
          title: "C4 Context Diagram",
          src: "projects/leckeep/c4/context_diagram_c1.png",
          alt: "LecKeep C4 context diagram",
          caption: "Logical system context. HTTPS is a deployment target; the current Compose and Ansible configurations provide HTTP access."
        },
        {
          title: "C4 Container Diagram",
          src: "projects/leckeep/c4/container_diagram_c2.png",
          alt: "LecKeep C4 container diagram",
          caption: "React frontend, Spring Boot API, MongoDB metadata, and MinIO file storage. The HTTPS label represents a deployment target; the current stack uses HTTP."
        }
      ],
      dataModelDescription: "LecKeep stores application metadata in MongoDB while keeping uploaded file contents in object storage.\n\nCore domain models include:\n\n- User (implemented as `Users`)\n- Subject\n- NoteFolder\n- DocumentFile\n- StudyGroup\n- GroupMember\n- FolderShare\n\nThe `DocumentFile` model stores document metadata and references the parent folder, while the actual uploaded binary content is stored through the object-storage layer.",
      dataModelDiagrams: [
        {
          title: "LecKeep Document Model",
          src: "projects/leckeep/archi&design/document_model.png",
          alt: "LecKeep MongoDB document model showing users, subjects, folders, documents, study groups, memberships, and folder shares"
        }
      ],
      systemDesigns: [
        {
          title: "Layered Full-Stack Architecture",
          content: "**Problem / Why needed:** Browser interaction, HTTP processing, business rules, metadata persistence, and file storage need clear boundaries.\n\n**How implemented:** React calls Spring Boot REST controllers, which delegate to application services and MongoDB repositories or the object-storage abstraction. MongoDB stores metadata; MinIO stores uploaded files.\n\n**Result:** HTTP concerns, business rules, persistence logic, and file-storage implementation remain independent and easier to maintain."
        },
        {
          title: "Centralized Permission-Aware Resource Access",
          content: "**Problem / Why needed:** Folder viewing, document preview/download, and search must apply consistent authorization rules.\n\n**How implemented:** `FolderPermissionService` checks folder ownership, GLOBAL visibility, GROUP visibility with verified study-group membership, and explicit USER, GROUP, or GLOBAL shares. Documents inherit read access from their parent folder. Upload, delete, and share management remain restricted to the folder owner.\n\n**Result:** One read-access policy prevents different permission rules from drifting across resource endpoints and search.",
          diagram: {
            title: "Permission-Aware Resource Access Flow",
            src: "projects/leckeep/archi&design/permission-aware-resource-access-flow.png",
            alt: "FolderPermissionService checks ownership, visibility, group membership, and explicit shares before granting resource access.",
            caption: "Read-access overview. Explicit GLOBAL shares are also supported, alongside the USER and GROUP shares shown."
          }
        },
        {
          title: "Permission-Aware Academic Search",
          content: "**Problem / Why needed:** Students need to retrieve academic materials without exposing private resources through search.\n\n**How implemented:** `SearchService` uses case-insensitive partial matching on subject names, folder titles/descriptions, and document names, content types, and extensions. Subjects are filtered by ownership; folders and documents are filtered through `FolderPermissionService` before results are returned.\n\n**Result:** Search returns only resources the authenticated user is authorized to access.",
          diagram: {
            title: "Permission-Aware Search Flow",
            src: "projects/leckeep/archi&design/permission-aware-search-flow.png",
            alt: "SearchService searches subjects, folders, and document metadata and returns authorized results."
          }
        },
        {
          title: "Document Upload & Object Storage",
          content: "**Problem / Why needed:** Large uploaded binaries should remain separate from application metadata, and file handling should support different document types.\n\n**How implemented:** The upload workflow validates file size and filename, resolves a file-type handler, verifies folder ownership, and uploads through `ObjectStorageService` to MinIO. `DocumentFile` metadata and the stored object key are saved in MongoDB. Supported previews use short-lived URLs.\n\n**Result:** Binary storage stays separate from metadata, while file-type and storage-provider details remain isolated behind interfaces.",
          diagram: {
            title: "Document Upload & Storage Flow",
            src: "projects/leckeep/archi&design/document-upload&object-storage-flow.png",
            alt: "Document upload validates the file and folder ownership, stores the binary in MinIO, and saves metadata in MongoDB.",
            caption: "The implemented handlers support PDF, images, and office documents. The video example shown is outside the current handler set."
          }
        },
        {
          title: "Secure Sharing & Study-Group Access",
          content: "**Problem / Why needed:** Students need controlled collaboration with specific users and study groups.\n\n**How implemented:** Folder owners create and revoke `FolderShare` records for USER, GROUP, or GLOBAL targets. Group sharing requires group-owner or admin access. `FolderPermissionService` checks valid shares and current membership when granting read access; group-based folder visibility uses the same membership check.\n\n**Result:** Revoking a share removes that access path unless another valid permission rule still grants access.",
          diagram: {
            title: "Folder Sharing & Group Access Flow",
            src: "projects/leckeep/archi&design/folder-sharing&group-access-flow.png",
            alt: "Folder access is granted through ownership, visibility, current group membership, or valid explicit shares."
          }
        },
        {
          title: "Containerized Deployment Architecture",
          content: "**Problem / Why needed:** The frontend, API, database, and object store need a repeatable environment and a defined deployment workflow.\n\n**How implemented:** Separate frontend and backend containers run alongside MongoDB and MinIO. Docker Compose defines service healthchecks and persistent MongoDB/MinIO volumes. The Jenkins CI pipeline defines backend tests, application builds, and frontend/backend image publishing. Ansible provides automation to deploy the four-service Compose stack to EC2. Terraform contains security-group configuration and a lookup of an existing EC2 instance.\n\n**Result:** The repository provides a repeatable local stack, CI pipeline configuration, and separate deployment automation. End-to-end production deployment is not verified: Jenkins does not invoke Ansible, MinIO image publishing is separate, and public HTTPS/reverse-proxy setup remains a later step.",
          diagram: {
            title: "LecKeep Deployment Architecture",
            src: "projects/leckeep/archi&design/deployment-architecture.png",
            alt: "Jenkins CI, separate Ansible deployment automation, Terraform configuration, and the four-service Compose runtime.",
            caption: "Deployment overview: the Jenkins-to-Ansible trigger is a target integration, not an implemented pipeline stage. Terraform configures a security group for an existing EC2 instance. Frontend container port is 80 (host port 3000); MongoDB data is mounted at /data/db. Production deployment remains unverified."
          }
        }
      ],
      oopDesignPatterns: [
        {
          pattern: "Strategy Pattern — File Type Handling",
          where: "`FileTypeHandler` with file-specific implementations such as PDF, image, and office-document handlers.",
          howImplemented: "Each handler determines whether it supports a file type and encapsulates file-specific validation and preview behavior.",
          why: "New document types can be introduced without adding large conditional blocks to the upload workflow.",
          diagram: {
            title: "File Type Strategy UML",
            src: "projects/leckeep/archi&design/oop-dp/file-type-strategy-uml.png",
            alt: "FileTypeHandler strategy interface and PDF, image, and office-document handlers.",
            caption: "Conceptual UML; method names are illustrative. The implementation uses supports(contentType, extension), validate(file, extension), getDocumentType, and getPreviewMode, with FileTypeHandlerResolver selecting the strategy."
          }
        },
        {
          pattern: "Factory / Resolver Pattern — File Handler Selection",
          where: "`FileTypeHandlerResolver`",
          howImplemented: "The resolver receives the available `FileTypeHandler` implementations and selects the correct strategy for the uploaded file.",
          why: "The document service does not need to know about every concrete file-type implementation.",
          diagram: {
            title: "File Type Resolver UML",
            src: "projects/leckeep/archi&design/oop-dp/file-type-resolver-uml.png",
            alt: "FileTypeHandlerResolver selects a file handler from the injected handler implementations.",
            caption: "Conceptual UML. The implemented resolver exposes resolve(contentType, extension); preview URLs are generated through ObjectStorageService."
          }
        },
        {
          pattern: "Adapter Pattern — Object Storage",
          where: "`ObjectStorageService` with the implemented `MinioObjectStorageAdapter`. MinIO provides S3-compatible object storage; the separate `S3ObjectStorageAdapter` remains an unimplemented extension point.",
          howImplemented: "Application services depend on the storage abstraction rather than directly calling a provider-specific SDK.",
          why: "Storage-provider-specific details remain isolated and the underlying provider can be replaced without redesigning document business logic.",
          diagram: {
            title: "Object Storage Adapter UML",
            src: "projects/leckeep/archi&design/oop-dp/object-storage-adapter-uml.png",
            alt: "ObjectStorageService isolates document services from MinIO, with an unimplemented S3 adapter extension point.",
            caption: "Conceptual UML; the implemented storage contract is upload, download, delete, and generatePreviewUrl. MinIO is implemented; the S3 adapter remains a stub."
          }
        },
        {
          pattern: "Template Method Pattern — JWT Request Filtering",
          where: "JWT filter implementation based on Spring Security's `OncePerRequestFilter`.",
          howImplemented: "Spring controls the request-filter lifecycle while LecKeep provides the JWT extraction, validation, and authentication-context logic.",
          why: "The project customizes authentication behavior while reusing Spring Security's standard filtering lifecycle.",
          diagram: {
            title: "JWT Filter UML",
            src: "projects/leckeep/archi&design/oop-dp/jwt-filter-uml.png",
            alt: "A JWT request filter customizes the OncePerRequestFilter lifecycle and continues the filter chain.",
            caption: "Conceptual UML. The implementation names are JwtFilter and JWTService; Spring provides the filtering lifecycle."
          }
        }
      ]
    }
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
