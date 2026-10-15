import type { Project } from "../../types/project";

export const bikePartsHub: Project = {
  slug: "spare-part-sales-service-platform",
  title: "BikePartsHub — Motorcycle Parts Sales & Service Platform",
  year: "2024",
  type: "Full-Stack E-commerce / Service Management",
  status: "Ongoing",
  role: "Full Stack Engineer",
  summary:
    "A full-stack motorcycle parts commerce and service-booking platform combining product discovery, checkout, appointment scheduling, role-based administration, and third-party payment and storage integrations.",
  description:
    "BikePartsHub is a full-stack web application for a motorcycle spare-parts business. It combines two main business workflows in one platform: spare-parts sales and motorcycle service appointment booking.\n\nCustomers can browse and filter products, manage a cart, place orders, pay using PayPal or Cash on Delivery, and book service appointments using available time slots. Administrators manage products, customers, orders, services, appointments, product images, and loyal-customer discounts.\n\nThe system is implemented as an Angular frontend, a Spring Boot REST API, and a MySQL database, with PayPal used for online payments and AWS S3 used for product-image storage.",
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
    "Jasmine / Karma",
  ],
  stackGroups: [
    {
      title: "Backend",
      items: [
        "Java 17",
        "Spring Boot 3.3",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
      ],
    },
    {
      title: "Frontend",
      items: ["Angular 17", "TypeScript", "RxJS", "Tailwind CSS", "PrimeNG"],
    },
    {
      title: "Data",
      items: ["MySQL"],
    },
    {
      title: "Security",
      items: [
        "JWT Access Tokens",
        "JWT Refresh Tokens",
        "BCrypt Password Hashing",
      ],
    },
    {
      title: "Integrations",
      items: ["PayPal REST SDK", "AWS S3"],
    },
    {
      title: "API & Documentation",
      items: ["REST APIs", "OpenAPI / Swagger"],
    },
    {
      title: "Testing",
      items: ["JUnit / Spring Boot Test", "Jasmine / Karma"],
    },
  ],
  features: [
    "Users can register, log in, refresh authentication tokens, log out, and manage their account information.",
    "Customers can browse the motorcycle spare-parts catalog.",
    "Logged-in customers can add products to a shopping cart and adjust quantities.",
    "Customers can view their order history and order information.",
    "Customers can browse available motorcycle services.",
    "Administrators can create, update, and remove products.",
    "The platform supports a LOYAL_CUSTOMER role in addition to regular customers.",
  ],
  challenges: [],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/AmiruHoradagoda/BikePartsHubApplication/tree/main",
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
      "BikePartsHub is a full-stack web application for a motorcycle spare-parts business. It combines two main business workflows in one platform: **spare-parts sales** and **motorcycle service appointment booking**.\n\nCustomers can browse and filter products, manage a cart, place orders, pay using PayPal or Cash on Delivery, and book service appointments using available time slots. Administrators manage products, customers, orders, services, appointments, product images, and loyal-customer discounts.\n\nThe system is implemented as an **Angular frontend**, a **Spring Boot REST API**, and a **MySQL database**, with PayPal used for online payments and AWS S3 used for product-image storage.",
    overviewDiagrams: [
      {
        title: "C4 Context Diagram",
        src: "projects/bike-parts-hub/c4/context_diagram_c1.svg",
        alt: "BikePartsHub C4 system context diagram",
      },
      {
        title: "C4 Container Diagram",
        src: "projects/bike-parts-hub/c4/container-diagram_c2.svg",
        alt: "BikePartsHub C4 container diagram",
      },
    ],
    functionalRequirements: [
      {
        id: "BPH-FR-01",
        area: "Authentication & Account Management",
        requirement:
          "- Users can register, log in, refresh authentication tokens, log out, and manage their account information.\n- The backend uses JWT access and refresh tokens.\n- The system supports roles such as **CUSTOMER**, **LOYAL_CUSTOMER**, and **ADMIN**.\n- Backend endpoints use Spring Security and method-level authorization for protected operations.",
        priority: "High",
      },
      {
        id: "BPH-FR-02",
        area: "Product Discovery & Compatibility Filtering",
        requirement:
          "- Customers can browse the motorcycle spare-parts catalog.\n- Products can be filtered using attributes such as category, product type, manufacturer, color, bike type, bike model, and bike manufacturer.\n- Product results support pagination.\n- Customers can open product details before adding products to the cart.",
        priority: "High",
      },
      {
        id: "BPH-FR-03",
        area: "Cart, Checkout & Payment",
        requirement:
          "- Logged-in customers can add products to a shopping cart and adjust quantities.\n- Customers provide shipping information during checkout.\n- The platform supports **PayPal** and **Cash on Delivery** payment methods.\n- Successful checkout creates the order, order items, shipping information, and payment record.",
        priority: "High",
      },
      {
        id: "BPH-FR-04",
        area: "Order Management",
        requirement:
          "- Customers can view their order history and order information.\n- Administrators can view and manage customer orders.\n- Orders use explicit statuses to represent their lifecycle.\n- Order-related information is stored together with shipping and payment data.",
        priority: "High",
      },
      {
        id: "BPH-FR-05",
        area: "Service Appointment Scheduling",
        requirement:
          "- Customers can browse available motorcycle services.\n- Customers can choose a service, date, and available time slot.\n- Slot availability is calculated using the selected service duration, business hours, and existing appointments.\n- Customers can view their appointment history.\n- Administrators can manage appointments and appointment statuses.",
        priority: "High",
      },
      {
        id: "BPH-FR-06",
        area: "Administration",
        requirement:
          "- Administrators can create, update, and remove products.\n- Product images can be uploaded to AWS S3.\n- Administrators can manage services, customers, orders, and appointments.\n- Administrative operations are exposed through dedicated backend endpoints.",
        priority: "High",
      },
      {
        id: "BPH-FR-07",
        area: "Loyal Customer Management",
        requirement:
          "- The platform supports a **LOYAL_CUSTOMER** role in addition to regular customers.\n- Administrators can identify and manage loyal customers.\n- Product discounts can be applied for loyal customers.\n- The frontend displays discounted prices when the logged-in user has the loyal-customer role.",
        priority: "High",
      },
    ],
    dataModelDescription:
      "BikePartsHub uses a relational MySQL data model for both sales and service-booking workflows.\n\nThe main domain entities include:\n\n- `User`\n- `Token`\n- `Product`\n- `ProductAttribute`\n- `Bike`\n- `Order`\n- `OrderDetails`\n- `ShippingAddress`\n- `Payment`\n- `ServiceType`\n- `Appointment`\n\nThe model connects customers with their orders and appointments while keeping product, payment, shipping, bike-compatibility, and service information represented as separate domain entities.",
    dataModelDiagrams: [
      {
        title: "BikePartsHub ER Diagram",
        src: "projects/bike-parts-hub/archi&design/er_diagram.png",
        alt: "Bike Parts Hub ER diagram showing users, products, orders, services, appointments, and related entities",
      },
    ],
    systemDesigns: [
      {
        title: "Layered Full-Stack Architecture",
        content:
          "The application separates frontend, API, business logic, and persistence responsibilities.\n\nThe Angular application handles customer and administrator interfaces. Spring REST controllers expose backend endpoints, service classes contain business logic, repositories handle database access, and JPA/Hibernate maps domain entities to MySQL.\n\nConceptually:\n\n```text\nAngular Web Application\n        ↓\nREST Controllers\n        ↓\nService Layer\n        ↓\nRepositories\n        ↓\nMySQL\n```\n\nThis separation keeps UI logic, business rules, and persistence concerns from being mixed together.",
      },
      {
        title: "JWT Authentication & Token Lifecycle",
        content:
          "The authentication workflow uses JWT access and refresh tokens.\n\nAfter successful authentication, the backend generates an access token and refresh token. Access tokens are stored with token state so previously issued tokens can be marked revoked or expired.\n\nFor authenticated requests, `JwtAuthenticationFilter` extracts the bearer token, validates the JWT, checks its stored token state, loads the user, and places the resulting authentication into Spring Security's `SecurityContext`.\n\nThe refresh-token flow can issue a new access token when a valid refresh token is supplied.",
        diagram: {
          title: "JWT Authentication & Token Lifecycle",
          src: "projects/bike-parts-hub/archi&design/JWT Authentication & Token Lifecycle.png",
          alt: "BikePartsHub JWT authentication and token lifecycle diagram",
        },
      },
      {
        title: "Dynamic Product Filtering",
        content:
          "The product catalog supports multiple filters without creating a separate repository method for every filter combination.\n\n`ProductSpecification` builds Spring Data JPA `Specification<Product>` objects dynamically using filters such as:\n\n- category\n- product type\n- product manufacturer\n- color\n- bike type\n- bike model\n- bike manufacturer\n\n`ProductRepo` implements `JpaSpecificationExecutor<Product>`, allowing these specifications to be combined and executed with pagination.\n\nThis keeps filtering logic composable and easier to extend when additional product attributes are introduced.",
      },
      {
        title: "Checkout & Payment Processing",
        content:
          "Checkout coordinates several related persistence operations through `CheckoutFacade`.\n\nThe checkout workflow:\n\n```text\nFind Customer\n      ↓\nSave Shipping Address\n      ↓\nCreate Order\n      ↓\nCreate Order Details\n      ↓\nSelect Payment Strategy\n      ↓\nSave Payment\n```\n\n`CheckoutFacadeImpl.placeOrder(...)` is transactional, so the database-side checkout operations are handled as one local transaction.\n\nPayment behavior is selected through `PaymentStrategyFactory`, which chooses the appropriate implementation based on the requested `PaymentMethod`.",
      },
      {
        title: "Appointment Scheduling",
        content:
          "Appointment scheduling checks whether the requested service can fit within the available schedule before creating an appointment.\n\nThe backend considers:\n\n- selected date\n- requested start time\n- service duration\n- business hours\n- existing appointments\n- configured concurrent appointment capacity\n\nAvailable time slots are generated in 30-minute increments between business opening and closing times.\n\nThis keeps appointment availability logic in the backend instead of depending only on frontend validation.",
      },
    ],
    oopDesignPatterns: [
      {
        pattern: "Strategy Pattern",
        where:
          "Payment processing through:\n\n- `PaymentStrategy`\n- `PaypalPaymentStrategy`\n- `CashOnDeliveryPaymentStrategy`",
        howImplemented:
          "`PaymentStrategy` defines the common payment-record creation contract.\n\nEach implementation handles the behavior required for a specific payment method. PayPal payments are stored as paid when a transaction reference is available, while Cash on Delivery payments begin in a pending state.",
        why: "It keeps payment-specific behavior out of the checkout workflow and allows additional payment methods to be added without rewriting `CheckoutFacadeImpl`.",
        diagram: {
          title: "Payment Strategy & Factory UML",
          src: "projects/bike-parts-hub/archi&design/oop-dp/Payment Strategy & Factory UML.png",
          alt: "BikePartsHub payment strategy and factory UML diagram",
        },
      },
      {
        pattern: "Factory / Registry Pattern",
        where: "`PaymentStrategyFactory`",
        howImplemented:
          "Spring injects the available `PaymentStrategy` implementations into the factory.\n\nThe factory stores them in a map indexed by `PaymentMethod` and returns the correct strategy at runtime.\n\nConceptually:\n\n```text\nPaymentMethod\n     ↓\nPaymentStrategyFactory\n     ↓\nPayPalPaymentStrategy\n        or\nCashOnDeliveryPaymentStrategy\n```",
        why: "It centralizes strategy selection and prevents checkout code from containing repeated `if` / `switch` logic for payment-method selection.",
      },
      {
        pattern: "Facade Pattern",
        where: "`CheckoutFacade` / `CheckoutFacadeImpl`",
        howImplemented:
          "The order controller calls a single operation:\n\n```text\nplaceOrder(...)\n```\n\n`CheckoutFacadeImpl` internally coordinates:\n\n- customer lookup\n- shipping-address persistence\n- order creation\n- order-item creation\n- payment-strategy selection\n- payment persistence",
        why: "It hides the multi-step checkout process behind one application-level operation and keeps controllers from coordinating repositories and payment behavior directly.",
        diagram: {
          title: "Checkout Facade UML",
          src: "projects/bike-parts-hub/archi&design/oop-dp/Checkout Facade UML.png",
          alt: "BikePartsHub checkout facade UML diagram",
        },
      },
      {
        pattern: "Adapter Pattern — PayPal",
        where: "- `PaymentGateway`\n- `PaypalPaymentGatewayAdapter`",
        howImplemented:
          "Application code depends on the `PaymentGateway` interface.\n\n`PaypalPaymentGatewayAdapter` translates the application's payment requests into PayPal SDK objects, creates or executes PayPal payments, and converts PayPal responses back into application DTOs.",
        why: "It keeps PayPal SDK-specific classes and behavior behind an application-owned interface, reducing coupling between the rest of the application and the external payment provider.",
        diagram: {
          title: "PayPal Payment Gateway Adapter UML",
          src: "projects/bike-parts-hub/archi&design/oop-dp/PayPal Adapter UML.png",
          alt: "BikePartsHub PayPal payment gateway adapter UML diagram",
        },
      },
      {
        pattern: "Adapter Pattern — AWS S3",
        where: "- `FileStorageService`\n- `S3FileStorageAdapter`",
        howImplemented:
          "The application depends on the `FileStorageService` interface for product-image uploads.\n\n`S3FileStorageAdapter` handles:\n\n- image validation\n- file-name sanitization\n- unique object-key generation\n- S3 metadata creation\n- object upload\n- S3 URL generation",
        why: "It isolates AWS S3-specific behavior behind an application-level storage interface, making product-management code independent of direct AWS SDK operations.",
        diagram: {
          title: "S3 File Storage Adapter UML",
          src: "projects/bike-parts-hub/archi&design/oop-dp/S3 Adapter UML.png",
          alt: "BikePartsHub AWS S3 file storage adapter UML diagram",
        },
      },
    ],
  },
};
