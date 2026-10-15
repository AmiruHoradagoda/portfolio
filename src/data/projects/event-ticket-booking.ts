import type { Project } from "../../types/project";

export const eventTicketBooking: Project = {
  slug: "event-ticket-booking-platform",
  stackGroups: [
    {
      title: "Backend",
      items: ["Java 17", "Spring Boot", "Spring Cloud Gateway"],
    },
    { title: "Frontend", items: ["Next.js", "Angular", "TypeScript"] },
    { title: "Data & Messaging", items: ["MySQL", "MongoDB", "RabbitMQ"] },
    { title: "Security", items: ["Keycloak"] },
    {
      title: "Infrastructure",
      items: [
        "Docker",
        "Kubernetes",
        "Kustomize",
        "Google Cloud / GKE",
        "AWS S3",
      ],
    },
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
        title: "Microservice Architecture & Database per Service",
        content:
          "The platform is divided into independent **Auth, Event, Booking, and Notification services**, with an API Gateway providing the main entry point for client applications.\n\nEach service owns its persistence and exposes functionality through APIs or asynchronous messaging rather than directly accessing another service's database. This keeps domain boundaries clear and reduces coupling between services.\n\nThe overall service structure is shown in the C4 Container Diagram in the Overview section.",
      },
      {
        title: "Concurrency-Safe Ticket Inventory",
        content:
          "Ticket inventory is limited, so multiple customers may attempt to reserve the same remaining tickets at the same time.\n\nThe Event Service performs inventory changes at the database level using atomic update operations and locking where necessary instead of relying on an unsafe read-then-update flow.\n\nA reservation succeeds only when sufficient inventory is still available, preventing **overselling under concurrent booking requests**.",
        diagram: {
          title: "Concurrent Ticket Reservation Flow",
          src: "projects/event-booking/archi&design/concurrent-ticket-reservation-flow.png",
          alt: "Concurrent booking requests use an atomic inventory update in Event Service, accepting reservations only when sufficient tickets remain.",
        },
      },
      {
        title: "Idempotent Booking",
        content:
          "A client may retry a booking request after a timeout without knowing whether the original request already succeeded.\n\nThe Booking Service requires an **Idempotency-Key** and stores an `IdempotencyRecord` containing the key and a fingerprint of the request.\n\n- Same key + same request → return the existing booking.\n- Same key + different request → reject the request as a conflict.\n\nThis makes client retries safe and prevents duplicate bookings or repeated inventory reservation.",
        diagram: {
          title: "Idempotent Booking Flow",
          src: "projects/event-booking/archi&design/idempotent-booking-flow.png",
          alt: "Booking Service checks the idempotency key and request fingerprint to return an existing booking, reject a conflict, or process a new booking.",
        },
      },
      {
        title: "Compensation & Reservation Recovery",
        content:
          "Booking Service and Event Service use separate local transactions, so inventory may already be reserved when a later booking step, such as payment, fails.\n\nWhen this happens, Booking Service requests Event Service to release the reserved inventory. A stable `releaseId` makes the compensation operation idempotent, so repeated release requests do not restore the same inventory multiple times.\n\nIf immediate compensation fails, the booking retains reservation-expiry information and a recovery process retries the release later.\n\nThis allows the platform to recover from **partial distributed failures without using a distributed two-phase commit**.",
        diagram: {
          title: "Compensation & Reservation Recovery Flow",
          src: "projects/event-booking/archi&design/booking-vompensation&reservation-recovery-flow.png",
          alt: "Failed payment triggers idempotent inventory release using a releaseId; unsuccessful releases are retried by reservation recovery.",
        },
      },
      {
        title: "Transactional Outbox",
        content:
          "Saving a booking and publishing a RabbitMQ message are two separate operations. If the booking commits successfully but message publication fails, the notification event could otherwise be lost.\n\nThe Booking Service therefore stores the booking state and an `OutboxEvent` in the database transaction. A separate outbox worker later claims pending events and publishes them to RabbitMQ.\n\nOutbox records move through processing states, and stale `PROCESSING` records can be recovered when a worker fails before completing publication.\n\nThis ensures asynchronous work remains recoverable after the main booking transaction has committed.",
        diagram: {
          title: "Transactional Outbox & Failure Recovery Flow",
          src: "projects/event-booking/archi&design/outbox_failure_recovery.png",
          alt: "Booking and OutboxEvent are committed together; an asynchronous worker publishes pending events to RabbitMQ and recovery retries stale processing records.",
        },
      },
      {
        title: "At-Least-Once Messaging, Retry & Deduplication",
        content:
          "RabbitMQ messages may be delivered more than once, and notification processing can fail temporarily.\n\nThe notification workflow uses retry handling and dead-letter processing for failed messages. Stable event IDs are used to detect events that have already been processed, allowing duplicate deliveries to be safely ignored.\n\nThe system therefore follows an **at-least-once delivery model** rather than claiming exactly-once messaging.",
        diagram: {
          title: "Notification Retry & Deduplication Flow",
          src: "projects/event-booking/archi&design/notification-retry&deduplication-flow.png",
          alt: "Notification processing flow showing retry handling, event deduplication, and dead-letter processing.",
        },
      },
      {
        title: "Role & Resource Ownership Authorization",
        content:
          "Authentication alone is not sufficient because users with the same role may still own different resources.\n\nKeycloak provides authenticated identities and roles such as **CUSTOMER, HOST, and ADMIN**. Backend services then apply resource-level ownership checks in addition to role checks.\n\nFor example, a HOST can manage only the events and related resources owned by that HOST, while an ADMIN has platform-level management access.\n\nThe host onboarding workflow follows:\n\n`Registered User → Submit Host Application → ADMIN Review → HOST Role`\n\nIf the application is approved, the existing user account receives the HOST role. If it is rejected, the user remains a normal registered user.\n\nAuthorization is enforced by backend services rather than relying only on frontend visibility.",
      },
    ],
    oopDesignPatterns: [
      {
        pattern: "Repository Pattern",
        where:
          "Across the Spring Boot services using repositories such as:\n\n- `BookingRepository`\n- `PaymentRepository`\n- `IdempotencyRecordRepository`\n- `OutboxEventRepository`\n- `EventRepository`\n- `TicketTypeRepository`\n- `HostApplicationRepo`",
        howImplemented:
          "Repository interfaces extend Spring Data JPA repositories and expose database operations required by the service layer. More specialized queries are used where locking or domain-specific persistence behavior is required.",
        why: "It separates persistence logic from business logic and keeps services focused on application workflows rather than direct database access.",
      },
      {
        pattern: "Builder Pattern",
        where:
          "Used extensively in entities and DTOs such as:\n\n- `Booking`\n- `BookingItem`\n- `Payment`\n- `IdempotencyRecord`\n- `OutboxEvent`\n- request and response DTOs",
        howImplemented:
          "Lombok `@Builder` provides builder-style object construction instead of relying on large constructors with many parameters.\n\nExample conceptually:\n\n```\nBooking.builder()\n    .userId(...)\n    .eventId(...)\n    .status(...)\n    .totalAmount(...)\n    .build();\n```",
        why: "It improves readability when constructing objects with many fields and reduces errors caused by long constructor argument lists.",
      },
      {
        pattern: "Adapter Pattern",
        where: "`JwtAuthConverter` in the Auth and Event services.",
        howImplemented:
          "`JwtAuthConverter` implements Spring's:\n\n```\nConverter<Jwt, AbstractAuthenticationToken>\n```\n\nIt takes the JWT issued through Keycloak, extracts realm roles, converts them into Spring Security `GrantedAuthority` objects, and returns a `JwtAuthenticationToken`.\n\nSo conceptually:\n\n```\nKeycloak JWT\n      ↓\nJwtAuthConverter\n      ↓\nSpring Security AuthenticationToken\n```",
        why: "Keycloak's JWT representation and Spring Security's authorization model are different. The converter adapts one representation into the form expected by Spring Security without spreading JWT parsing logic throughout controllers and services.",
        diagram: {
          title: "JWT Authentication Adapter",
          src: "projects/event-booking/archi&design/oop-dp/jwt-authentication-adapter.png",
          alt: "JWT authentication adapter diagram showing conversion from Keycloak JWT to Spring Security authentication.",
        },
      },
      {
        pattern: "Facade Pattern",
        where: "`FileService` / `FileServiceImpl` in the Event Service.",
        howImplemented:
          "Application code does not directly deal with all AWS S3 operations.\n\nInstead, it calls simple methods such as:\n\n```\ncreateResource(...)\ndeleteResource(...)\n```\n\n`FileServiceImpl` internally handles:\n\n- filename generation\n- S3 metadata\n- object upload\n- S3 resource URL generation\n- deletion\n- error handling",
        why: "It hides AWS S3-specific complexity behind a small application-level interface, allowing event-management code to work with a simpler abstraction.",
        diagram: {
          title: "File Storage Facade",
          src: "projects/event-booking/archi&design/oop-dp/file-storage-facade.png",
          alt: "File storage facade diagram showing FileService simplifying access to AWS S3 storage operations.",
        },
      },
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
        scenario:
          "Two customers try to reserve the last available ticket at the same time.",
        response:
          "Inventory reservation is performed atomically so successful concurrent requests cannot reduce available stock below zero.",
      },
      {
        attribute: "Idempotency",
        scenario: "A client times out and retries the same booking request.",
        response:
          "Each booking uses an Idempotency-Key and request fingerprint. The same request returns the existing booking, while a changed request using the same key is rejected.",
      },
      {
        attribute: "Recoverability",
        scenario:
          "Payment can fail after inventory has already been reserved, and recovery work can also fail or be interrupted.",
        response:
          "Failed payment triggers inventory compensation. If immediate release fails, reservation-expiry recovery retries the release using persisted booking state.",
      },
      {
        attribute: "Security & Ownership",
        scenario:
          "A HOST must not be able to manage another HOST's events or booking information.",
        response:
          "Authorization is enforced in the backend using JWT roles and resource ownership checks rather than relying only on frontend visibility.",
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
        where:
          "Booking requests are identified by a user-scoped idempotency key and request fingerprint.",
        why: "Makes retries safe and prevents duplicate bookings or repeated inventory deduction.",
      },
      {
        pattern: "Transactional Outbox",
        where:
          "Booking state and an outgoing event are stored before asynchronous RabbitMQ publication.",
        why: "The database and message broker cannot participate in one normal local transaction, so the outbox preserves publication work after the booking commit.",
      },
      {
        pattern: "Compensating Transaction",
        where:
          "When payment fails after inventory reservation, the Booking Service releases the reserved inventory.",
        why: "Event and Booking services own separate transactions, so compensation is used instead of a distributed two-phase commit.",
      },
      {
        pattern: "Retry + Consumer Idempotency",
        where:
          "Notification processing retries transient failures and uses stable event IDs to identify previously processed events.",
        why: "The messaging model is at-least-once, so redelivery must be handled safely rather than assuming every event arrives once.",
      },
      {
        pattern: "Database per Service",
        where:
          "Auth, Event, Booking, and Notification services own their own persistence.",
        why: "This keeps service boundaries explicit and avoids cross-service database coupling.",
      },
    ],
  },
};
