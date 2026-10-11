# Event Ticket Booking Platform — Portfolio Update Guide for Codex

## Purpose

Update the portfolio page for the **Event Ticket Booking Platform** so a recruiter can understand the engineering value in about **30–60 seconds**.

Do **not** turn the page into long documentation.

The page should answer:

1. What problem did this project solve?
2. Why was it technically difficult?
3. What engineering decisions were made?
4. What happens when failures occur?
5. What can a recruiter ask about in an interview?

Repository:

```text
C:\Users\94717\Desktop\Potfolio
```

Current project page:

```text
/projects/event-ticket-booking-platform/
```

Main project data:

```text
src\data\profile.ts
```

Page renderer:

```text
src\pages\projects\[slug].astro
```

Diagram asset directory:

```text
C:\Users\94717\Desktop\Potfolio\public\projects\event-booking
```

---

# 1. Core Portfolio Story

The project should no longer be presented mainly as:

```text
Spring Boot + RabbitMQ + Kubernetes + Microservices
```

Instead, present it as:

> **A distributed ticket-booking platform designed to prevent overselling, duplicate bookings, inconsistent inventory, and lost async work when requests are concurrent or services fail.**

The recruiter should immediately understand that this is a **reliability / distributed-systems project**, not only a CRUD event-booking application.

---

# 2. Hero Section

## Type

Use:

```text
Distributed Systems / Cloud Engineering
```

## Role

Use:

```text
Backend, Reliability & DevOps Engineer
```

## Status

If final local E2E, Testcontainers execution, k6 execution, Sonar, and latest GKE deployment are still pending, use:

```text
Final Validation
```

Do not show `Completed` until those final validations are actually finished.

## Summary

Use a short summary:

```text
A distributed ticket-booking platform designed to prevent overselling, duplicate
bookings, and inconsistent state when requests are concurrent or services fail.
```

## Subtitle

Use:

```text
Built around concurrency safety, idempotent booking, failure recovery,
reliable messaging, and backend ownership authorization.
```

---

# 3. Keep the Existing Page Format

Do not redesign the whole portfolio.

Keep the same structure used by the other projects:

```text
Hero
↓
Case Study Details
  - Overview
  - Requirements
  - Quality
  - Patterns
↓
Architecture Gallery
↓
Demo / GitHub
```

Optional:

Add a very small project-specific highlight strip between the hero and Case Study:

```text
Concurrency
No overselling

Reliability
Failure recovery

Idempotency
Safe retries
```

Only add this if it fits the current design cleanly.

Do not change other project pages.

---

# 4. Overview Tab

Keep this section short.

Use content equivalent to:

```text
Event booking becomes difficult when multiple customers compete for limited
tickets and one booking action crosses several independently failing services.

I evolved the original microservice platform to handle these failure cases using
concurrency-safe inventory reservation, idempotent booking, compensation,
transactional outbox messaging, retry/dead-letter handling, consumer
deduplication, and ownership-based authorization.
```

Suggested heading:

```text
Keeping bookings correct under concurrency and failure
```

Do not add more than about two short paragraphs.

---

# 5. Requirements Tab

Replace the long general feature list with only the most important engineering requirements.

Use these five:

## Inventory Consistency

```text
Prevent overselling when multiple customers attempt to reserve the same limited
ticket inventory at the same time.
```

## Idempotent Booking

```text
Retrying the same logical booking request must not create another booking or
deduct inventory twice.
```

## Failure Recovery

```text
If payment or inventory compensation fails, the system must preserve enough
state to recover the reservation safely.
```

## Reliable Messaging

```text
A committed booking must not silently lose notification work when RabbitMQ,
a publisher, or a worker fails.
```

## Authorization

```text
ADMIN can manage the platform, while HOST users can manage only resources they
actually own and CUSTOMER users remain limited to public events and their own
bookings.
```

Do not fill this tab with normal features such as login, browse events, upload banner, etc.

Those can remain implied by the project.

---

# 6. Quality Tab

This should be the strongest recruiter-facing section.

Use only four clear rows.

## Consistency

Problem:

```text
Two customers try to buy the last ticket at the same time.
```

Response:

```text
Concurrency-safe inventory reservation prevents successful reservations from
driving available quantity below zero.
```

## Idempotency

Problem:

```text
A client retries a booking request after a timeout.
```

Response:

```text
The booking API uses an Idempotency-Key and request fingerprint so the same
logical request returns the existing booking instead of creating a duplicate.
```

## Recoverability

Problem:

```text
Payment fails after inventory was reserved, or a worker crashes after claiming
asynchronous work.
```

Response:

```text
Compensation, reservation-expiry recovery, transactional outbox processing,
stale PROCESSING recovery, and optimistic version protection define recovery paths.
```

## Security / Ownership

Problem:

```text
HOST A tries to manage HOST B's event or bookings.
```

Response:

```text
Backend JWT role and ownership checks reject cross-host access even if the client
manually calls the API.
```

---

# 7. Patterns Tab

Do not list every possible pattern.

Use only these five.

## Idempotency Key Pattern

Where:

```text
Booking creation stores a user-scoped idempotency key and request fingerprint.
```

Why:

```text
Makes retries safe and prevents duplicate bookings / repeated stock deduction.
```

## Transactional Outbox

Where:

```text
Booking/payment state and an outgoing event are persisted before asynchronous
RabbitMQ publication.
```

Why:

```text
Avoids relying on one atomic transaction across MySQL and RabbitMQ.
```

## Compensating Transaction

Where:

```text
Failed payment triggers inventory release; failed immediate release can be retried
later through recovery logic.
```

Why:

```text
Booking and inventory are owned by separate services, so explicit compensation
is used instead of distributed two-phase commit.
```

## Retry + Consumer Idempotency

Where:

```text
Notification processing retries transient failures, uses dead-letter handling,
and deduplicates stable event IDs.
```

Why:

```text
The system uses at-least-once messaging and must tolerate redelivery.
```

## Database per Service

Where:

```text
Auth, Event, Booking, and Notification services own their own persistence.
```

Why:

```text
Keeps service ownership explicit and avoids cross-service database coupling.
```

---

# 8. Feature List

Replace generic feature text with concise engineering-focused points.

Use:

```text
Concurrency-safe ticket inventory reservation prevents overselling.

Booking creation uses idempotency keys and request fingerprints to make retries safe.

Payment-failure compensation and reservation-expiry recovery restore inventory
after partial failures.

Transactional outbox processing protects committed booking work before RabbitMQ publication.

Stale outbox claim recovery and optimistic version checks protect asynchronous workers.

RabbitMQ notification processing includes publisher confirmation, retry/dead-letter
handling, and consumer-side processed-event deduplication.

Backend authorization enforces ADMIN scope, HOST ownership boundaries, and CUSTOMER access.

Customer-to-HOST onboarding uses ADMIN approval and Keycloak role assignment.

Kustomize base/local/GKE overlays separate environment-specific deployment concerns.
```

Keep the feature list visually short.

---

# 9. Challenges

Replace the current generic challenges with real engineering challenges.

Use:

```text
Preventing ticket overselling under concurrent booking requests.

Making client retries safe without creating duplicate bookings.

Recovering inventory after payment or compensation failure.

Preventing committed async work from being lost when RabbitMQ publication is separate
from the booking database transaction.

Recovering work abandoned by crashed workers without stale workers overwriting newer state.

Handling message redelivery without claiming exactly-once processing.

Restricting HOST users to their own events and booking scope.
```

---

# 10. Demo Video

Keep the existing demo video.

Do not require a new video.

Change the visible title to:

```text
Original Product Demo
```

or:

```text
Original Product Demo — UI & Core Booking Flow
```

Add a short note near the demo:

```text
Recorded before the later reliability and system-design improvements.
The current architecture and failure-handling design are documented below.
```

Do not imply that the old video demonstrates the newer reliability work.

---

# 11. Architecture Gallery

Replace the current single Context Diagram with four recruiter-focused diagrams.

Create them in:

```text
C:\Users\94717\Desktop\Potfolio\public\projects\event-booking
```

Use these exact filenames:

```text
system_architecture.svg
reliable_booking_sequence.svg
outbox_failure_recovery.svg
host_onboarding_authorization.svg
```

Do not create more diagrams unless clearly necessary.

Prefer SVG.

The diagrams should use a consistent dark/blue/cyan style compatible with the portfolio.

Keep labels concise and readable.

---

# 12. Diagram 1 — System Architecture

File:

```text
system_architecture.svg
```

Title:

```text
System Architecture
```

Show:

```text
Customer
Admin / Host

Next.js Customer UI
Angular Admin / Host UI

Spring Cloud Gateway

Auth Service
Event Service
Booking Service
Notification Service

Auth MySQL
Event MySQL
Booking MySQL
Notification MongoDB

RabbitMQ

Keycloak
AWS S3
Brevo

Config Server
Git Config Repository
Eureka
```

Important relationships:

```text
Frontends -> Gateway

Gateway -> Auth
Gateway -> Event
Gateway -> Booking

Auth -> Auth DB
Auth -> Keycloak
Auth -> RabbitMQ
Auth -> S3

Event -> Event DB
Event -> S3

Booking -> Booking DB
Booking -> Event Service
Booking -> Auth Service
Booking -> RabbitMQ through outbox publishing

RabbitMQ -> Notification Service
Notification -> MongoDB
Notification -> Brevo

Services -> Config Server
Services -> Eureka
Config Server -> Git Config Repository
```

Do not draw direct database links between services.

The purpose of this diagram is:

```text
"What did he build?"
```

---

# 13. Diagram 2 — Reliable Booking Flow

File:

```text
reliable_booking_sequence.svg
```

Title:

```text
Reliable Booking Flow
```

Main path:

```text
Customer
↓
POST /bookings
JWT + Idempotency-Key + Correlation ID
↓
Booking Service
↓
Check key + request fingerprint
↓
Validate event and ticket selections
↓
Event Service
↓
Concurrency-safe inventory reservation
↓
Payment
↓
Persist Booking + Payment + IdempotencyRecord + OutboxEvent
↓
Commit
↓
Outbox Worker
↓
RabbitMQ
↓
Notification Service
```

Show small retry branches:

```text
same key + same body
→ return existing booking
→ no second stock deduction
```

```text
same key + different body
→ 409 Conflict
```

Show payment failure:

```text
payment failure
→ release inventory

release failure
→ recovery state
→ reservation-expiry worker retries later
```

The purpose of this diagram is:

```text
"What engineering problem did he solve?"
```

---

# 14. Diagram 3 — Failure Recovery

File:

```text
outbox_failure_recovery.svg
```

Title:

```text
Outbox & Failure Recovery
```

Show:

```text
PENDING
  ↓
PROCESSING
 ↙       ↘
SENT     worker crash / stale timeout
             ↓
           recovery
             ↓
          PENDING
```

Also show:

```text
Optimistic version protection
RabbitMQ publisher confirmation
```

Then:

```text
RabbitMQ
↓
Notification Consumer
↓
ProcessedEvent check
├─ already processed → suppress duplicate processing
└─ new event
     ├─ success
     ├─ transient failure → retry
     └─ exhausted/permanent failure → DLQ
```

Add a small note:

```text
At-least-once, not exactly-once.
```

Do not claim duplicate emails are impossible.

The purpose of this diagram is:

```text
"What happens when things fail?"
```

---

# 15. Diagram 4 — Host Authorization

File:

```text
host_onboarding_authorization.svg
```

Title:

```text
Host Onboarding & Authorization
```

Show:

```text
CUSTOMER
↓
Apply as HOST
↓
PENDING
↓
ADMIN Review
├─ APPROVED
│    ↓
│  existing Keycloak user gets HOST role
│    ↓
│  refreshed/new JWT
│    ↓
│  HOST dashboard
│    ↓
│  manage owned events
│
└─ REJECTED
     ↓
   remains normal user
     ↓
   may reapply
```

Also show the authorization boundary:

```text
ADMIN
→ all platform management

HOST
→ own events and own event booking scope

CUSTOMER
→ public events + own bookings
```

Add:

```text
Authorization is enforced by backend role + ownership checks,
not only frontend visibility.
```

The purpose of this diagram is:

```text
"How is access controlled?"
```

---

# 16. Register the Diagrams

Update the Event Ticket Booking project's diagram list with:

```ts
[
  {
    title: "System Architecture",
    src: "projects/event-booking/system_architecture.svg",
    alt: "Event Ticket Booking Platform system architecture showing client applications, gateway, Auth, Event, Booking and Notification services, RabbitMQ, service-owned databases, Keycloak, S3, Brevo, Config Server and Eureka."
  },
  {
    title: "Reliable Booking Flow",
    src: "projects/event-booking/reliable_booking_sequence.svg",
    alt: "Booking workflow showing idempotency checks, concurrency-safe inventory reservation, payment, booking transaction, transactional outbox publication and notification processing."
  },
  {
    title: "Outbox & Failure Recovery",
    src: "projects/event-booking/outbox_failure_recovery.svg",
    alt: "Failure recovery flow showing outbox state recovery, optimistic version protection, RabbitMQ publication, retries, dead-letter handling and event deduplication."
  },
  {
    title: "Host Onboarding & Authorization",
    src: "projects/event-booking/host_onboarding_authorization.svg",
    alt: "Host application approval flow and backend authorization boundaries for Admin, Host and Customer roles."
  }
]
```

If the new System Architecture fully replaces the old Context Diagram, remove the old diagram from this project's active gallery.

Do not delete the old file if it may be used elsewhere.

---

# 17. Optional Highlight Cards

If the current design can support it cleanly without changing other projects, add three small project-specific cards:

```text
Concurrency
Atomic inventory prevents overselling
```

```text
Reliability
Outbox + recovery protects async work
```

```text
Idempotency
Retries do not create duplicate bookings
```

Do not add this if it makes the page look crowded.

---

# 18. Technology Stack

Keep it factual and concise.

Recommended visible stack:

```text
Java 17
Spring Boot
Spring Cloud Gateway
Keycloak
RabbitMQ
MySQL
MongoDB
Next.js
Angular
TypeScript
Docker
Kubernetes
Kustomize
GCP / GKE
GitHub Actions
AWS S3
Testcontainers
k6
```

Do not add technologies not actually used.

---

# 19. Claim Guardrails

Do not claim:

```text
exactly-once messaging
zero duplicate emails
production-ready
handles thousands of requests per second
successful k6 results if not actually executed
successful Testcontainers results if not actually executed
latest code deployed to GKE if not verified
no data loss under every possible failure
```

Use accurate wording such as:

```text
at-least-once messaging
consumer-side deduplication
recovery-oriented design
concurrency-safe inventory reservation
Testcontainers scenarios
k6 scripts / local checks
final execution evidence pending
```

---

# 20. Testing / Evidence

Do not create a giant testing section.

If a short evidence block is added, use only:

```text
Unit and contract tests cover backend and frontend behavior.

Event Service includes MySQL Testcontainers coverage for concurrent inventory reservation.

Booking Service includes MySQL/RabbitMQ Testcontainers coverage for idempotency,
outbox recovery, optimistic locking, and publisher-confirm behavior.

k6 scripts exist for inventory contention and booking idempotency checks.

Final Testcontainers/k6 execution results should only be shown after they are actually run.
```

Keep this compact.

---

# 21. Final Recruiter Reading Flow

The final page should feel like:

```text
Event Ticket Booking Platform

Distributed Systems / Cloud Engineering

Preventing overselling, duplicate bookings, and inconsistent state
in a distributed ticket workflow.

GitHub | Original Product Demo

[ optional: Concurrency | Reliability | Idempotency ]

Case Study Details
  Overview
  Requirements
  Quality
  Patterns

Architecture Gallery
  System Architecture
  Reliable Booking Flow
  Failure Recovery
  Host Authorization
```

A recruiter should not need to read every section to understand the project.

---

# 22. Implementation Rules for Codex

Before changing code:

- inspect the latest local project source
- inspect the current `Project` / `ProjectDetails` types
- preserve the current Astro/Tailwind design
- do not modify unrelated projects
- do not add a new UI framework
- do not add large new dependencies
- keep mobile responsiveness
- keep the existing demo
- keep content concise
- prefer problem → decision → outcome wording

If actual code contradicts any statement in this file, prefer the real implementation and report the discrepancy.

---

# 23. Validation

After implementation:

```powershell
cd C:\Users\94717\Desktop\Potfolio
npm run build
```

If useful:

```powershell
npm run dev
```

Check the Event Ticket Booking page manually.

Verify:

```text
No broken diagrams
No clipped SVG text
No broken demo
No empty tabs
No TypeScript/Astro errors
No unrelated project regressions
Mobile layout remains usable
```

---

# 24. Recommended Codex Phases

Do not complete everything in one uncontrolled pass.

Use three phases:

```text
Phase 1
Concise portfolio content + optional highlight cards

Phase 2
Generate and register four diagrams

Phase 3
Final polish, build, and accuracy audit
```

Codex should STOP after each phase and report what changed before continuing.
