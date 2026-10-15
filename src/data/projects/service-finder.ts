import type { Project } from "../../types/project";

export const serviceFinder: Project = {
  slug: "service-finder-mobile",
  title: "Service Finder Mobile",
  subtitle:
    "A local services marketplace connecting customers with service providers, making it easier to discover nearby services, share service requests, explore provider listings, and communicate directly.",
  year: "2024",
  type: "Team Project · Mobile Application",
  status: "Completed",
  role: "Mobile Developer",
  summary:
    "A Flutter mobile application that connects local service providers with people requesting services through searchable listings, user profiles, and real-time direct messaging.",
  description:
    "Service Finder brings service discovery and communication into a single mobile experience. Providers can publish service listings with contact information and images, while customers can browse and filter listings or post requests for services. Firebase Authentication manages user sessions, Cloud Firestore stores profiles, posts, and chat messages, and Firebase Storage handles uploaded images.",
  stack: [
    "Flutter",
    "Dart",
    "Firebase Authentication",
    "Cloud Firestore",
    "Firebase Storage",
  ],
  stackGroups: [
    {
      title: "Mobile",
      items: ["Flutter", "Dart"],
    },
    {
      title: "Identity",
      items: ["Firebase Authentication"],
    },
    {
      title: "Database",
      items: ["Cloud Firestore"],
    },
    {
      title: "Media",
      items: ["Firebase Storage"],
    },
  ],
  features: [
    "Customer and provider registration with email/password authentication",
    "Separate service-offer and customer-request feeds",
    "Text search and location filtering of loaded posts",
    "Profiles, service-post image uploads, and post management",
    "Direct messaging with chronological Firestore streams",
  ],
  challenges: [
    "Keeping session navigation consistent while registration waits for profile persistence",
    "Sharing one post model across service offers and customer requests",
    "Coordinating image uploads and Firestore writes without a cross-service transaction",
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
      alt: "Service Finder Mobile application preview; project visual rather than test evidence",
    },
  ],
  details: {
    background:
      "Local service discovery is often fragmented across informal contacts and individual posts. Providers need a way to present their services, while customers need to describe requests, find relevant offers, and communicate directly.\n\nService Finder Mobile is a Flutter application developed as a team project. Providers publish service listings with descriptions, contact details, and images; customers browse offers or publish service requests. Editable profiles and direct messaging bring discovery and communication into one mobile experience.\n\nThe engineering focus is keeping identity, profiles, posts, media, and conversations consistent across both workflows. Feature-oriented screens use dedicated application services, while Firestore streams deliver remote data changes to the UI.",
    architectureHeadings: {
      dataModel: "Data Model / Firestore Documents",
      systemDesigns: "Main System Designs",
      oopDesignPatterns: "Design Patterns & Flutter Idioms",
    },
    overviewSections: [
      {
        id: "context",
        heading: "System Context",
        diagrams: [
          {
            title: "C4 System Context Diagram",
            src: "projects/service-finder/c4/context_diagram_c1.png",
            alt: "Customers and providers use Service Finder, which connects to Firebase Authentication, Cloud Firestore, and Firebase Storage",
          },
        ],
      },
      ,
      {
        id: "container",
        heading: "Container / Service View",
        diagrams: [
          {
            title: "C4 Container Diagram",
            src: "projects/service-finder/c4/container_diagram_c2.png",
            alt: "Service Finder Flutter app connects through Firebase SDK services to authentication, Firestore documents, and image storage",
          },
        ],
      },
    ],
    functionalRequirements: [
      {
        id: "SFM-FR-01",
        area: "Authentication",
        requirement:
          "Register a customer or service-provider account using email/password, sign in, sign out, and react to authentication-state changes.",
        priority: "Implemented in reviewed code",
      },
      {
        id: "SFM-FR-02",
        area: "Profile Management",
        requirement:
          "Create and retrieve application profiles, edit profile information, and upload a profile picture.",
        priority: "Implemented in reviewed code",
      },
      {
        id: "SFM-FR-03",
        area: "Service Listings & Requests",
        requirement:
          "Authenticated users create service-offer or service-request posts with descriptions, text locations, contact details, optional links, and images.",
        priority: "Implemented in reviewed code",
      },
      {
        id: "SFM-FR-04",
        area: "Discovery & Filtering",
        requirement:
          "Show offers and requests in separate feeds. Filter loaded posts by a case-insensitive search of the post message or username and an exact selected text location.",
        priority: "Implemented in reviewed code",
      },
      {
        id: "SFM-FR-05",
        area: "Post Management",
        requirement:
          "Open post details, retrieve the current account's posts, and delete posts through PostService. Server-enforced ownership is not established by these client methods.",
        priority: "Implemented in reviewed code",
      },
      {
        id: "SFM-FR-06",
        area: "Direct Messaging",
        requirement:
          "Send messages to another user and subscribe to chronological message updates from their shared Firestore conversation path.",
        priority: "Implemented in reviewed code",
      },
      {
        id: "SFM-FR-07",
        area: "Media Uploads",
        requirement:
          "Upload post and profile images to Firebase Storage and save their download URLs in the corresponding Firestore documents.",
        priority: "Implemented in reviewed code",
      },
    ],
    dataModelDescription:
      "**User profiles:** `Users/{email}` stores `user_ID` (the authentication UID), username, email, the provider flag, and optional profile-image and profile fields. Profiles are separate from Firebase Authentication identities.\n\n**Service posts:** `Posts/{postId}` contains owner identifiers, `PostMessage`, `Description`, contact fields, text `Location`, `ImageUrls`, and `TimeStamp`. The stored `ask` flag maps to `ServicePost.isAsk`: true for requests and false for offers. Missing legacy flags are excluded from both feeds.\n\n**Conversations:** `chat_rooms/{sortedUidA_sortedUidB}/messages` stores sender/receiver IDs, sender email, message text, and a timestamp. Sorting participant IDs gives both users the same conversation path; reads order messages by ascending timestamp.",
    dataModelDiagrams: [
      {
        title: "Firestore Document Model",
        src: "projects/service-finder/archi&design/document_model.png",
        alt: "Service Finder document model showing user profiles, service posts, deterministic chat-room IDs, and message subcollections",
      },
    ],
    systemDesigns: [
      {
        title: "Firebase Services & Application Boundaries",
        content:
          "**Decision:** Use Firebase Authentication for identity, Cloud Firestore for structured documents and live reads, and Firebase Storage for media. Screens call feature-focused services instead of implementing a custom REST backend.\n\n**Engineering challenge:** Registration creates an authentication account before writing its application profile. `AuthService.register` waits for that write; `AuthNavigation` coordinates session changes and clears the navigation stack on sign-out.\n\n**Trade-off:** Managed services reduce custom infrastructure but introduce dependence on Firebase rules, indexes, cost, and connectivity behavior. Account creation and the profile write are not atomic; a failed profile write can leave an authenticated account without a complete profile.",
      },
      {
        title: "One Post Model, Two Discovery Workflows",
        content:
          "**Decision:** `ServicePost` represents both an offer and a request. `HomeService` composes `PostService` reads and selects each feed using `isAsk` and `PostFilter`.\n\n**Why:** Providers and customers share post details, contact fields, and image handling while retaining distinct feed views. Search matches the message or username without case sensitivity; location filtering compares a selected text value.\n\n**Trade-off:** The live query loads posts ordered by `TimeStamp`, and filtering happens in application code. Pagination, indexed search, and geographic distance ranking would require further design; the current location value is not GPS matching.",
      },
      {
        title: "Deterministic Direct Conversations",
        content:
          "**Decision:** `ChatService` sorts the two participant UIDs and joins them with an underscore for both message writes and reads. Messages are appended to the room's `messages` subcollection; `getMessages` subscribes in ascending timestamp order.\n\n**Why:** Either participant derives the same path without creating duplicate conversations or operating a custom chat server. `MessageList` renders the stream with loading, empty, and error states.\n\n**Trade-off:** This supports one-to-one conversations. Group membership, richer conversation metadata, read receipts, and server-authoritative message ordering would need additional work; the current timestamp comes from `Timestamp.now()` on the client.",
      },
      {
        title: "Separate Media Storage & Document Writes",
        content:
          "**Decision:** Upload post images under `post_images/` and profile images under `profile_images/{uid}` in Firebase Storage, obtain download URLs, then save URLs with the application data.\n\n**Why:** Firestore records stay focused on structured data instead of containing image bytes. `PostService` accepts native image files and byte uploads, then propagates document-write failures to the form.\n\n**Trade-off:** Uploading media and writing a document can partially succeed. The reviewed delete method removes only the post document; orphan-image cleanup and compensating actions remain improvements. Profile edits update the existing email-keyed document; changing its email field does not change the Firebase Authentication email or migrate the document key.",
      },
    ],
    oopDesignPatterns: [
      {
        pattern: "Observer / Reactive Streams",
        where:
          "`AuthService.sessionChanges`, `PostService.getPostsStream`, `ProfileService.getProfilesStream`, and `ChatService.getMessages`.",
        howImplemented:
          "Firebase authentication events and Firestore snapshots are exposed as Dart streams. Feed widgets and MessageList consume these with StreamBuilder; AuthNavigation listens to session changes.",
        why: "Remote changes update visible state without repeated manual polling. Loading/error handling and subscription lifecycle still need explicit care.",
      },
      {
        pattern: "Facade-like Service Layer",
        where:
          "`AuthService`, `PostService`, `ProfileService`, `HomeService`, and `ChatService`.",
        howImplemented:
          "App-focused methods group Firebase operations and map documents into typed models. Optional constructor dependencies support test doubles; default SDK clients use FirebaseAuth.instance, FirebaseFirestore.instance, and FirebaseStorage.instance.",
        why: "Screens depend on application operations rather than duplicating collection access. Shared SDK instances are reused without presenting Firebase options as an app-defined Singleton pattern.",
      },
      {
        pattern: "ChangeNotifier for Session Navigation",
        where:
          "`AuthNavigation` with ChangeNotifierProvider and Consumer in `RootApp`.",
        howImplemented:
          "AuthNavigation subscribes to session events, updates loading/session state, calls notifyListeners, and cancels its subscription on disposal. RootApp rebuilds its navigation configuration from this observable state.",
        why: "Session changes can reset protected navigation and coordinate in-flight authentication. ChatService also extends ChangeNotifier, but does not call notifyListeners; its live messages arrive through streams.",
      },
    ],
  },
};
