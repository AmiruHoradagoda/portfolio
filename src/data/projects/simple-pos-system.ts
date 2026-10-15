import type { Project } from "../../types/project";

export const simplePosSystem: Project = {
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
        why: "Object creation is centralized, so controllers can request a business object or DAO by type without directly constructing concrete classes.",
      },
      {
        pattern: "Singleton Pattern",
        where:
          "BoFactory.getInstance() and DaoFactory.getInstance() maintain a single factory instance.",
        why: "Factory objects are shared across the application instead of being recreated in each controller or business object.",
      },
      {
        pattern: "DAO Pattern",
        where:
          "CrudDao, SupperDao, CustomerDao, ProductDao, UserDao, and their implementation classes isolate database operations.",
        why: "Persistence code is separated from business logic and UI controllers, making the JavaFX application easier to maintain.",
      },
      {
        pattern: "Facade Pattern",
        where:
          "Business object interfaces such as CustomerBo, ProductBo, and UserBo expose higher-level operations to controllers.",
        why: "Controllers interact with a simpler business API instead of coordinating DAO calls and persistence details directly.",
      },
    ],
  },
};
