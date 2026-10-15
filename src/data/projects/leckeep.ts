import type { Project } from "../../types/project";

export const leckeep: Project = {
  slug: "leckeep",
  stackGroups: [
    {
      title: "Backend",
      items: ["Java 17", "Spring Boot 3.3"],
    },
    {
      title: "Frontend",
      items: ["React 19", "Vite", "Tailwind CSS"],
    },
    {
      title: "Data & Storage",
      items: ["MongoDB", "MinIO Object Storage"],
    },
    {
      title: "Security",
      items: ["Spring Security", "JWT Authentication"],
    },
    {
      title: "DevOps",
      items: ["Docker Compose", "Jenkins", "Ansible", "Terraform", "AWS EC2"],
    },
  ],
  title: "LecKeep — Academic Document Management & Collaboration Platform",
  year: "2024–2026",
  type: "Full-Stack / Document Management Platform",
  status: "Ongoing",
  role: "Full Stack Developer",
  summary:
    "A full-stack academic workspace designed to help students organize, securely access, search, preview, and share lecture materials across subjects, folders, and study groups. LecKeep combines permission-aware document management, object-storage abstraction, secure sharing, and containerized deployment workflows.",
  description:
    "Students often accumulate lecture PDFs, slides, images, and shared learning materials across different folders and communication channels, making them difficult to organize, retrieve, and share safely.\n\nLecKeep addresses this by providing one authenticated academic workspace where students can organize materials by subject and folder, upload and preview documents, create study groups, share folders with controlled access, and search only the resources they are authorized to view.\n\nThe application uses a React frontend and Spring Boot REST API, with MongoDB for application metadata and MinIO-compatible object storage for uploaded documents. Security is handled through JWT-based authentication and centralized folder/document permission checks.",
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
    "AWS EC2",
  ],
  features: [
    "Subject and folder organization",
    "Permission-aware document access and academic search",
    "Document upload, preview, and download through object storage",
    "Study groups and controlled folder sharing",
    "Containerized local environment and CI/deployment automation configuration",
  ],
  challenges: [],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/AmiruHoradagoda/LecKeep",
    },
  ],
  accent: "violet",
  media: [
    {
      type: "image",
      src: "projects/leckeep/card-image.png",
      alt: "LecKeep academic workspace screenshot",
    },
  ],
  details: {
    background:
      "Students often accumulate lecture PDFs, slides, images, and shared learning materials across different folders and communication channels, making them difficult to organize, retrieve, and share safely.\n\nLecKeep addresses this by providing one authenticated academic workspace where students can organize materials by subject and folder, upload and preview documents, create study groups, share folders with controlled access, and search only the resources they are authorized to view.\n\nThe application uses a React frontend and Spring Boot REST API, with MongoDB for application metadata and MinIO-compatible object storage for uploaded documents. Security is handled through JWT-based authentication and centralized folder/document permission checks.",
    architectureHeadings: {
      dataModel: "Data Model / Document Model",
      systemDesigns: "Main System Designs",
      oopDesignPatterns: "OOP Design Patterns",
    },
    functionalRequirements: [
      {
        id: "LK-FR-01",
        area: "Authentication & Account Management",
        requirement:
          "Users must be able to register and log in securely. Passwords are stored using BCrypt hashing, while authenticated API requests use JWT bearer tokens.",
        priority: "High",
      },
      {
        id: "LK-FR-02",
        area: "Subject & Folder Organization",
        requirement:
          "Students must be able to organize academic resources using subjects and folders, including creating, viewing, updating, and deleting their own organizational structures.\n\nFolders can represent different access contexts such as private, global, group-based, or explicitly shared resources.",
        priority: "High",
      },
      {
        id: "LK-FR-03",
        area: "Document Management",
        requirement:
          "Students must be able to upload academic documents into folders, list uploaded resources, preview supported documents through short-lived URLs, download files, and delete documents in folders they own.\n\nUploads are validated before object storage, including filename handling and a maximum file-size limit.",
        priority: "High",
      },
      {
        id: "LK-FR-04",
        area: "Permission-Aware Resource Access",
        requirement:
          "The platform must prevent users from accessing academic resources they are not authorized to view.\n\nFolder access is determined using ownership, visibility, study-group membership, and explicit share records. Document access inherits the permissions of its parent folder.",
        priority: "High",
      },
      {
        id: "LK-FR-05",
        area: "Academic Resource Search",
        requirement:
          "Students must be able to search their academic workspace for subjects, folders, and document metadata using case-insensitive partial matching.\n\nSearch results must respect the same access-control rules as direct resource access so private or unauthorized materials are not leaked through search.",
        priority: "High",
      },
      {
        id: "LK-FR-06",
        area: "Study Group Management",
        requirement:
          "Students must be able to create study groups, manage group membership, and use group membership as part of controlled academic-resource access.",
        priority: "High",
      },
      {
        id: "LK-FR-07",
        area: "Secure Folder Sharing",
        requirement:
          "Folder owners must be able to share resources with specific users, study groups, or authenticated users through controlled share permissions and revoke access when it is no longer required.",
        priority: "High",
      },
    ],
    overviewDiagrams: [
      {
        title: "C4 Context Diagram",
        src: "projects/leckeep/c4/context_diagram_c1.png",
        alt: "LecKeep C4 context diagram",
      },
      {
        title: "C4 Container Diagram",
        src: "projects/leckeep/c4/container_diagram_c2.png",
        alt: "LecKeep C4 container diagram",
      },
    ],
    dataModelDescription:
      "LecKeep stores application metadata in MongoDB while keeping uploaded file contents in object storage.\n\nCore domain models include:\n\n- User (implemented as `Users`)\n- Subject\n- NoteFolder\n- DocumentFile\n- StudyGroup\n- GroupMember\n- FolderShare\n\nThe `DocumentFile` model stores document metadata and references the parent folder, while the actual uploaded binary content is stored through the object-storage layer.",
    dataModelDiagrams: [
      {
        title: "LecKeep Document Model",
        src: "projects/leckeep/archi&design/document_model.png",
        alt: "LecKeep MongoDB document model showing users, subjects, folders, documents, study groups, memberships, and folder shares",
      },
    ],
    systemDesigns: [
      {
        title: "Layered Full-Stack Architecture",
        content:
          "**Problem / Why needed:** Browser interaction, HTTP processing, business rules, metadata persistence, and file storage need clear boundaries.\n\n**How implemented:** React calls Spring Boot REST controllers, which delegate to application services and MongoDB repositories or the object-storage abstraction. MongoDB stores metadata; MinIO stores uploaded files.\n\n**Result:** HTTP concerns, business rules, persistence logic, and file-storage implementation remain independent and easier to maintain.",
      },
      {
        title: "Centralized Permission-Aware Resource Access",
        content:
          "**Problem / Why needed:** Folder viewing, document preview/download, and search must apply consistent authorization rules.\n\n**How implemented:** `FolderPermissionService` checks folder ownership, GLOBAL visibility, GROUP visibility with verified study-group membership, and explicit USER, GROUP, or GLOBAL shares. Documents inherit read access from their parent folder. Upload, delete, and share management remain restricted to the folder owner.\n\n**Result:** One read-access policy prevents different permission rules from drifting across resource endpoints and search.",
        diagram: {
          title: "Permission-Aware Resource Access Flow",
          src: "projects/leckeep/archi&design/permission-aware-resource-access-flow.png",
          alt: "FolderPermissionService checks ownership, visibility, group membership, and explicit shares before granting resource access.",
        },
      },
      {
        title: "Permission-Aware Academic Search",
        content:
          "**Problem / Why needed:** Students need to retrieve academic materials without exposing private resources through search.\n\n**How implemented:** `SearchService` uses case-insensitive partial matching on subject names, folder titles/descriptions, and document names, content types, and extensions. Subjects are filtered by ownership; folders and documents are filtered through `FolderPermissionService` before results are returned.\n\n**Result:** Search returns only resources the authenticated user is authorized to access.",
        diagram: {
          title: "Permission-Aware Search Flow",
          src: "projects/leckeep/archi&design/permission-aware-search-flow.png",
          alt: "SearchService searches subjects, folders, and document metadata and returns authorized results.",
        },
      },
      {
        title: "Document Upload & Object Storage",
        content:
          "**Problem / Why needed:** Large uploaded binaries should remain separate from application metadata, and file handling should support different document types.\n\n**How implemented:** The upload workflow validates file size and filename, resolves a file-type handler, verifies folder ownership, and uploads through `ObjectStorageService` to MinIO. `DocumentFile` metadata and the stored object key are saved in MongoDB. Supported previews use short-lived URLs.\n\n**Result:** Binary storage stays separate from metadata, while file-type and storage-provider details remain isolated behind interfaces.",
        diagram: {
          title: "Document Upload & Storage Flow",
          src: "projects/leckeep/archi&design/document-upload&object-storage-flow.png",
          alt: "Document upload validates the file and folder ownership, stores the binary in MinIO, and saves metadata in MongoDB.",
        },
      },
      {
        title: "Secure Sharing & Study-Group Access",
        content:
          "**Problem / Why needed:** Students need controlled collaboration with specific users and study groups.\n\n**How implemented:** Folder owners create and revoke `FolderShare` records for USER, GROUP, or GLOBAL targets. Group sharing requires group-owner or admin access. `FolderPermissionService` checks valid shares and current membership when granting read access; group-based folder visibility uses the same membership check.\n\n**Result:** Revoking a share removes that access path unless another valid permission rule still grants access.",
        diagram: {
          title: "Folder Sharing & Group Access Flow",
          src: "projects/leckeep/archi&design/folder-sharing&group-access-flow.png",
          alt: "Folder access is granted through ownership, visibility, current group membership, or valid explicit shares.",
        },
      },
      {
        title: "Containerized Deployment Architecture",
        content:
          "**Problem / Why needed:** The frontend, API, database, and object store need a repeatable environment and a defined deployment workflow.\n\n**How implemented:** Separate frontend and backend containers run alongside MongoDB and MinIO. Docker Compose defines service healthchecks and persistent MongoDB/MinIO volumes. The Jenkins CI pipeline defines backend tests, application builds, and frontend/backend image publishing. Ansible provides automation to deploy the four-service Compose stack to EC2. Terraform contains security-group configuration and a lookup of an existing EC2 instance.\n\n**Result:** The repository provides a repeatable local stack, CI pipeline configuration, and separate deployment automation. End-to-end production deployment is not verified: Jenkins does not invoke Ansible, MinIO image publishing is separate, and public HTTPS/reverse-proxy setup remains a later step.",
        diagram: {
          title: "LecKeep Deployment Architecture",
          src: "projects/leckeep/archi&design/deployment-architecture.png",
          alt: "Jenkins CI, separate Ansible deployment automation, Terraform configuration, and the four-service Compose runtime.",
        },
      },
    ],
    oopDesignPatterns: [
      {
        pattern: "Strategy Pattern — File Type Handling",
        where:
          "`FileTypeHandler` with file-specific implementations such as PDF, image, and office-document handlers.",
        howImplemented:
          "Each handler determines whether it supports a file type and encapsulates file-specific validation and preview behavior.",
        why: "New document types can be introduced without adding large conditional blocks to the upload workflow.",
        diagram: {
          title: "File Type Strategy UML",
          src: "projects/leckeep/archi&design/oop-dp/file-type-strategy-uml.png",
          alt: "FileTypeHandler strategy interface and PDF, image, and office-document handlers.",
        },
      },
      {
        pattern: "Factory / Resolver Pattern — File Handler Selection",
        where: "`FileTypeHandlerResolver`",
        howImplemented:
          "The resolver receives the available `FileTypeHandler` implementations and selects the correct strategy for the uploaded file.",
        why: "The document service does not need to know about every concrete file-type implementation.",
        diagram: {
          title: "File Type Resolver UML",
          src: "projects/leckeep/archi&design/oop-dp/file-type-resolver-uml.png",
          alt: "FileTypeHandlerResolver selects a file handler from the injected handler implementations.",
        },
      },
      {
        pattern: "Adapter Pattern — Object Storage",
        where:
          "`ObjectStorageService` with the implemented `MinioObjectStorageAdapter`. MinIO provides S3-compatible object storage; the separate `S3ObjectStorageAdapter` remains an unimplemented extension point.",
        howImplemented:
          "Application services depend on the storage abstraction rather than directly calling a provider-specific SDK.",
        why: "Storage-provider-specific details remain isolated and the underlying provider can be replaced without redesigning document business logic.",
        diagram: {
          title: "Object Storage Adapter UML",
          src: "projects/leckeep/archi&design/oop-dp/object-storage-adapter-uml.png",
          alt: "ObjectStorageService isolates document services from MinIO, with an unimplemented S3 adapter extension point.",
        },
      },
      {
        pattern: "Template Method Pattern — JWT Request Filtering",
        where:
          "JWT filter implementation based on Spring Security's `OncePerRequestFilter`.",
        howImplemented:
          "Spring controls the request-filter lifecycle while LecKeep provides the JWT extraction, validation, and authentication-context logic.",
        why: "The project customizes authentication behavior while reusing Spring Security's standard filtering lifecycle.",
        diagram: {
          title: "JWT Filter UML",
          src: "projects/leckeep/archi&design/oop-dp/jwt-filter-uml.png",
          alt: "A JWT request filter customizes the OncePerRequestFilter lifecycle and continues the filter chain.",
        },
      },
    ],
  },
};
