import type { Project } from "../../types/project";

export const pharmacy: Project = {
  slug: "pharmacy-sales-inventory-system",
  title: "Pharmacy Sales and Inventory Management System",
  year: "2024",
  type: "Full-Stack Web Application",
  status: "Completed",
  role: "Developer",
  summary: "A web platform that helps customers browse and order pharmacy products while giving administrators tools to manage product inventory, customer orders, and sales activity.",
  description: "A React storefront and administration interface connected to a layered Spring Boot REST API and MySQL. The application supports product discovery, cart-based order submission, order-status administration, stock visibility, and operational reporting.",
  stack: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "React",
    "Vite",
    "Tailwind CSS",
    "MySQL",
    "JWT Authentication",
    "Firebase Storage"
  ],
  stackGroups: [
    {
      title: "Frontend",
      items: [
        "React",
        "Vite",
        "Tailwind CSS"
      ]
    },
    {
      title: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "Spring Security"
      ]
    },
    {
      title: "Database",
      items: [
        "MySQL"
      ]
    },
    {
      title: "Authentication",
      items: [
        "JWT Authentication"
      ]
    },
    {
      title: "Product Images",
      items: [
        "Firebase Storage"
      ]
    }
  ],
  features: [
    "Paginated product catalog and shopping cart",
    "Shipping details and persistent order submission",
    "Product, order-status, and customer administration",
    "Stored-stock monitoring and sales summaries",
    "Frontend product-image upload and cleanup integration"
  ],
  challenges: [
    "Preserving related order, line-item, and shipping records in one transaction",
    "Keeping browser authentication state and API access rules consistent",
    "Separating inventory visibility from unimplemented stock reservation and deduction"
  ],
  links: [
    {
      label: "Backend GitHub",
      href: "https://github.com/AmiruHoradagoda/pharmacy-backend"
    },
    {
      label: "Frontend GitHub",
      href: "https://github.com/AmiruHoradagoda/pharmacy-frontend"
    }
  ],
  accent: "blue",
  media: [
    {
      type: "image",
      src: "projects/pharmacy/card-image.png",
      alt: "Pharmacy storefront and administration project visual"
    }
  ],
  details: {
    background: "Pharmacy sales combine customer-facing product browsing and ordering with product maintenance, order tracking, and low-stock monitoring. This application brings those workflows together through a React storefront, an administration interface, and a Spring Boot REST API.\n\nCustomers browse products, build a cart, enter shipping details, and submit orders. Administrators manage products and stored stock quantities, inspect orders, update statuses, and view sales summaries. Layered backend services and MySQL persistence connect these workflows through a shared relational data model.",
    architectureHeadings: {
      dataModel: "Data Model / ER Design",
      systemDesigns: "Main System Designs",
      oopDesignPatterns: "Design Patterns"
    },
    overviewSections: [
      {
        id: "context",
        heading: "System Context",
        diagrams: [
          {
            title: "C4 System Context Diagram",
            src: "projects/pharmacy/c4/Context_diagram_c1.png",
            alt: "Conceptual pharmacy context showing customer and administrator workflows, Firebase image storage, and a PayPal integration outside the implemented scope"
          }
        ]
      },
      {
        id: "container",
        heading: "Container / Service View",
        diagrams: [
          {
            title: "C4 Container Diagram",
            src: "projects/pharmacy/c4/container-diagram_c2.png",
            alt: "Conceptual React, Spring Boot, and MySQL architecture with image storage and an unimplemented payment integration"
          }
        ]
      }
    ],
    functionalRequirements: [
      {
        id: "PHR-FR-01",
        area: "Account Access",
        requirement: "Register and sign in with JWT-backed requests and BCrypt password hashing. Provide customer/admin experiences, public catalog reads, and backend admin restrictions for product writes, user reads, dashboard routes, and order-status changes.",
        priority: "Implemented in reviewed code"
      },
      {
        id: "PHR-FR-02",
        area: "Product Discovery",
        requirement: "Browse a paginated, sortable product catalog, open product details, and search the currently loaded products by name.",
        priority: "Implemented in reviewed code"
      },
      {
        id: "PHR-FR-03",
        area: "Shopping Cart",
        requirement: "Add and remove products, adjust quantities, review calculated item/shipping totals, and proceed to checkout.",
        priority: "Implemented in reviewed code"
      },
      {
        id: "PHR-FR-04",
        area: "Checkout",
        requirement: "Collect shipping details and submit an order with line items and totals through the REST API. Clear the cart after a successful response; order submission does not process an online payment.",
        priority: "Implemented in reviewed code"
      },
      {
        id: "PHR-FR-05",
        area: "Order Administration",
        requirement: "List and inspect orders with pagination and sorting, and advance status from PENDING to PROCESSING to COMPLETED. Customer-specific order history is not established by the current dashboard UI.",
        priority: "Implemented in reviewed code"
      },
      {
        id: "PHR-FR-06",
        area: "Product & Inventory Administration",
        requirement: "Create, edit, list, and delete products; maintain their active state, price, stored stock quantity, and image URL. Stock reservation or deduction during checkout is not implemented.",
        priority: "Implemented in reviewed code"
      },
      {
        id: "PHR-FR-07",
        area: "Customer Administration",
        requirement: "Let administrators browse paginated and sortable user records and inspect an individual account.",
        priority: "Implemented in reviewed code"
      },
      {
        id: "PHR-FR-08",
        area: "Operational Dashboard",
        requirement: "Show order-value summaries, recent orders, low-stock products, date-range sales aggregates, and annual monthly totals from stored records.",
        priority: "Implemented in reviewed code"
      }
    ],
    dataModelDescription: "Users and Roles have a many-to-many relationship. Each Order belongs to a User and references a ShippingAddress, while its OrderItems link to the ordered Products/Items. MySQL stores these relationships alongside product prices and stock quantities, supporting order retrieval and administration.",
    dataModelDiagrams: [
      {
        title: "Pharmacy ER Diagram",
        src: "projects/pharmacy/archi&design/er_diagram.png",
        alt: "Pharmacy relational model showing users, roles, their join table, items, orders, order items, and shipping addresses"
      }
    ],
    systemDesigns: [
      {
        title: "Layered Application Architecture",
        content: "React provides the customer storefront and administration screens, communicating with a Spring Boot REST API. Controllers handle HTTP requests, the service layer coordinates application workflows, and Spring Data JPA repositories access MySQL. This separation keeps presentation, business operations, and persistence focused on distinct responsibilities while allowing both customer and admin interfaces to use the same backend."
      },
      {
        title: "Authentication & Role-Based Authorization",
        content: "Spring Security processes JWT bearer tokens through JwtRequestFilter, while BCrypt hashes account passwords. Customers can browse the public catalog and sign in to place orders. Admin checks protect product changes, user records, dashboard endpoints, and order-status updates. React authentication state supports customer/admin navigation, and API access rules enforce the configured permissions independently of the interface."
      },
      {
        title: "Order & Inventory Management",
        content: "Order creation saves the customer reference, shipping address, order, and linked OrderItems within a database transaction. Administrators inspect these records and advance orders from PENDING through PROCESSING to COMPLETED. Product records and low-stock queries provide stock visibility for administration. This connects customer ordering with operational monitoring without implementing stock reservation or automatic stock deduction."
      }
    ],
    oopDesignPatterns: [
      {
        pattern: "Template Method ? Spring Security Filter Lifecycle",
        where: "`JwtRequestFilter` extends `OncePerRequestFilter`.",
        howImplemented: "It supplies JWT validation and authentication-context setup within Spring's request-filter lifecycle.",
        why: "This integrates authentication with Spring Security's standard pipeline."
      },
      {
        pattern: "Interceptor ? Axios Request/Response Handling",
        where: "The shared Axios client in `src/api/apiConfig.js`.",
        howImplemented: "Interceptors attach bearer tokens and handle 401/403 responses.",
        why: "API services using this client share consistent authentication and error handling."
      },
      {
        pattern: "Context / Provider ? React Authentication State",
        where: "`AuthProvider` and `useAuth` in `AuthContext.jsx`.",
        howImplemented: "React Context shares login state and login/logout actions across components.",
        why: "Navigation and screens access authentication state without passing it through each component."
      }
    ]
  }
};
