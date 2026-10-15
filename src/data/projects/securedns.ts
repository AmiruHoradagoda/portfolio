import type { Project } from "../../types/project";

export const secureDns: Project = {
  slug: "securedns",
  stackGroups: [
    {
      title: "Backend",
      items: ["Python"],
    },
    {
      title: "Networking & Security",
      items: ["DNS", "AES-GCM", "RSA"],
    },
    {
      title: "Infrastructure",
      items: ["Docker", "Ubuntu"],
    },
  ],
  title: "SecureDNS — Demonstrating DNS Attacks and Defenses",
  year: "2026",
  type: "Network Security / Applied Cryptography",
  status: "Completed (local educational demo)",
  role: "Network Security Developer",
  summary:
    "A real-browser DNS security demonstration that compares vulnerable plaintext lookups with encrypted and authenticated communication under sniffing, DNS-response tampering, and flooding attacks.",
  description:
    "A local DNS security lab connecting a real DNS client and browser flow to a gateway, attacker proxy, and resolving server. Insecure and protected modes make sniffing, response tampering, and optional request limiting observable.",
  stack: ["Python", "DNS", "AES-GCM", "RSA", "Docker", "Ubuntu"],
  features: [
    "Real DNS A-record lookups and a browser-visible bank.test demo",
    "Plaintext and protected gateway-to-server communication",
    "AES-GCM payload encryption, RSA key wrapping, and signed responses",
    "Nonce and timestamp validation for freshness checks",
    "Optional request rate limiting and dashboard-driven experiments",
  ],
  challenges: [
    "Preserving real DNS client behavior while demonstrating a controlled on-path attacker",
    "Verifying protected responses before returning a DNS answer",
    "Reproducing attacks and restoring the Ubuntu resolver after experiments",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/AmiruHoradagoda/SecureDNS",
    },
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
      "Ordinary DNS messages do not inherently hide the requested domain or authenticate the answer. An on-path attacker can observe a lookup or substitute an IP address, directing a browser to an attacker-controlled destination.\n\nSecureDNS makes this problem observable in a local lab. A real lookup for bank.test travels through a DNS gateway (Alice), attacker-controlled proxy (Trudy), and resolving server (Bob). Real and fake bank sites make the consequences visible in a browser; a dashboard runs the comparisons and resolver-restoration workflow.\n\nProtected mode combines AES-GCM payload encryption, RSA-wrapped session keys, signed server responses, freshness checks, and optional rate limiting. The protected boundary is the gateway-to-server exchange through Trudy. This is a controlled educational demonstration, not a production replacement for DNSSEC, DoT, or DoH.",
    overviewSections: [
      {
        id: "dns-request",
        heading: "DNS Request Path",
        diagrams: [
          {
            title: "DNS Request Flow",
            src: "projects/securedns/archi&design/dns-request-flow.png",
            alt: "A DNS lookup travels from the browser or operating system through the gateway and attacker proxy to the SecureDNS server.",
          },
        ],
      },
      {
        id: "trust-boundary",
        heading: "Trust Boundary & Attack Position",
        diagrams: [
          {
            title: "Alice, Bob & Trudy Communication",
            src: "projects/securedns/archi&design/full-communication.png",
            alt: "Alice wraps an AES session key for Bob and exchanges encrypted requests and signed, encrypted responses through Trudy.",
          },
        ],
      },
    ],
    functionalRequirements: [
      {
        id: "DNS-FR-01",
        area: "DNS Resolution",
        requirement:
          "Resolve bank.test through the gateway, attacker proxy, and server using actual DNS A-record lookups and the local browser flow.",
        priority: "Implemented",
      },
      {
        id: "DNS-FR-02",
        area: "Insecure Comparison",
        requirement:
          "Provide a plaintext mode in which the proxy can log queried domains and substitute the IP address in a response.",
        priority: "Implemented",
      },
      {
        id: "DNS-FR-03",
        area: "Confidentiality",
        requirement:
          "Encrypt gateway-to-server request and response payloads with AES-GCM, using a fresh AES key per query wrapped with the server's RSA public key.",
        priority: "Implemented",
      },
      {
        id: "DNS-FR-04",
        area: "Integrity & Authenticity",
        requirement:
          "Authenticate the encrypted response and verify the server signature before returning its answer. Return SERVFAIL when security verification fails.",
        priority: "Implemented",
      },
      {
        id: "DNS-FR-05",
        area: "Replay & Freshness Checks",
        requirement:
          "Reject stale timestamps and previously seen request nonces at the server; check the response nonce against the current query and validate its timestamp at the gateway.",
        priority: "Implemented",
      },
      {
        id: "DNS-FR-06",
        area: "Flood Mitigation",
        requirement:
          "When enabled in secure mode, limit repeated queries by domain and query type within a configured time window; return SERVFAIL for excess requests.",
        priority: "Implemented",
      },
      {
        id: "DNS-FR-07",
        area: "Demo Operations",
        requirement:
          "Provide dashboard actions for insecure/secure sniffing and tampering, a flood-limiting scenario, log inspection, and an explicit Ubuntu DNS restoration action.",
        priority: "Implemented",
      },
    ],
    systemDesigns: [
      {
        title: "Components & Trust Boundaries",
        content:
          "**Design:** Alice accepts normal DNS queries, translates supported A-record lookups into JSON messages, and returns a DNS answer. Trudy forwards those messages and can observe traffic, replace plaintext answers, or flip protected ciphertext bytes. Bob resolves local demo records and can forward other A-record lookups to upstream resolvers.\n\n**Why:** Keeping the attacker on the same path in both modes makes the security comparison reproducible. The five Compose services include Alice, Trudy, Bob, and the real/fake bank sites; the dashboard runs separately on the host.\n\n**Trade-off:** This is a deliberately controlled intermediary. The local client-to-gateway leg and Bob's ordinary upstream lookups are outside the encrypted boundary.",
      },
      {
        title: "Hybrid Encryption & Server Authentication",
        content:
          "**Design:** Alice generates a random 256-bit AES key for each query and uses AES-GCM with a random 96-bit IV. RSA-OAEP with SHA-256 wraps the session key for Bob. Bob signs the response payload with RSA-PSS/SHA-256, then encrypts the signed body using AES-GCM.\n\n**Why:** Symmetric encryption protects the payload; RSA key wrapping lets Alice send the session key to Bob. The response signature binds the answer to the server key that Alice trusts.\n\n**Trade-off:** Per-query RSA operations add overhead, without a published performance benchmark. Keys are distributed locally rather than through a managed certificate or rotation system; the custom protocol is not a standard encrypted DNS transport.",
      },
      {
        title: "Verify Before Answering & Check Freshness",
        content:
          "**Design:** Alice decrypts and authenticates the response, matches its nonce to the current query, checks timestamp freshness, and verifies Bob's signature before using the answer. Verification errors produce SERVFAIL. Bob checks request freshness and tracks previously used request nonces. The timestamp tolerance in the source is 60 seconds.\n\n**Why:** Checks happen at the message boundary, before an untrusted answer becomes a browser-visible IP address. A security failure prevents redirection while making the failed lookup observable.\n\n**Trade-off:** The browser receives a DNS failure rather than an automatically repaired answer. Freshness depends on clocks; the server's nonce set is in memory, has no expiry cleanup, and resets on restart. These checks do not establish comprehensive replay resistance.",
      },
      {
        title: "Repeatable Experiments & Local DNS Restoration",
        content:
          "**Design:** Dashboard actions run predefined scripts that select the communication and attack modes, start Docker services, issue dig lookups, and expose script/container logs. The availability script enables a gateway sliding-window limiter keyed by domain and query type. An explicit restore action stops containers and restores Ubuntu's systemd-resolved configuration.\n\n**Why:** A real DNS/browser path demonstrates the effect of a forged answer, while fixed scripts make insecure-versus-secure outcomes easier to compare. The restoration workflow addresses the operational challenge of changing host DNS settings.\n\n**Trade-off:** Rate limiting is off by default and protects repeated keys only, not all traffic or distributed floods. Restoration is an explicit Ubuntu-oriented action, not a guarantee of restoring every custom resolver configuration.",
      },
    ],
    evidence: [
      {
        title: "Confidentiality: DNS Sniffing",
        introduction:
          "**Threat:** Trudy captures the messages between Alice and Bob and tries to read the requested domain. Both runs perform a bank.test lookup; only the message protection changes.",
        diagrams: [
          {
            title: "Insecure Mode: Domain Visible",
            src: "projects/securedns/archi&design/sniffing-insecure.png",
            alt: "Insecure sniffing logs show bank.test in plaintext and a successful lookup of the real-bank address.",
          },
          {
            title: "Secure Mode: Encrypted Payload",
            src: "projects/securedns/archi&design/sniffing-secure.png",
            alt: "Secure sniffing logs show encrypted fields while the gateway verifies the real-bank response.",
          },
        ],
        result:
          "**Observed result:** The captured proxy messages expose the domain in plaintext mode and encrypted fields in protected mode. This demonstrates payload confidentiality at the simulated attack position; endpoints still see the domain and traffic metadata remains visible.",
      },
      {
        title: "Integrity: DNS Response Tampering",
        introduction:
          "**Threat:** Trudy substitutes the fake-bank address in plaintext mode, then attempts ciphertext modification in protected mode. The configured real-bank address is 172.28.0.40; the fake-bank destination is 172.28.0.50.",
        diagrams: [
          {
            title: "Insecure Mode: Answer Replaced",
            src: "projects/securedns/archi&design/tampering-insecure.png",
            alt: "Attacker logs show the original bank.test answer and substitution of the fake-bank IP address.",
          },
          {
            title: "Secure Mode: Tampering Rejected",
            src: "projects/securedns/archi&design/tampering-secure.png",
            alt: "Secure-mode logs show ciphertext modification followed by gateway verification failure and SERVFAIL.",
          },
        ],
        result:
          "**Observed result:** Plaintext response substitution is accepted in the lab flow; protected ciphertext modification results in DNS failure. This experiment exercises AES-GCM authentication rejection. Signature verification is also implemented, but this screenshot does not isolate a separate signature-failure test.",
      },
      {
        title: "Availability: Controlled Flood Limiting",
        introduction:
          "**Threat:** Rapid repeated A-record lookups create avoidable processing load. The demo explicitly enables a limit of five requests per two-second window for the same domain/query-type key.",
        diagrams: [
          {
            title: "Secure Mode: Excess Requests Limited",
            src: "projects/securedns/archi&design/flood-protection.png",
            alt: "Flood demonstration output shows allowed queries followed by requests rejected with SERVFAIL.",
          },
        ],
        result:
          "**Observed result:** The recorded burst contains SERVFAIL responses after the repeated-query limit is reached. The source checks this limit before opening the protected exchange. This demonstrates a local mitigation, not Internet-scale denial-of-service resistance.",
      },
    ],
    limitations:
      "**Outcome:** The evidence shows visible plaintext queries, observable answer substitution, rejection of altered ciphertext, and optional limiting of repeated queries. Replay and signature checks are supported by source inspection; no dedicated replay or isolated signature-failure evidence is presented here.\n\n**Scope:** This is a local educational prototype with A-record support. It does not implement DNSSEC, DoT, or DoH, authenticate upstream DNS answers, or encrypt the client-to-gateway leg. It provides no published latency/throughput benchmark or production availability guarantee.\n\n**Operational limits:** The lab relies on a trusted local server public key, ephemeral replay state, configured clocks, and explicit DNS restoration. Rate-limit buckets are keyed by domain/query type rather than requester identity. The attacker can still drop traffic, and rejecting tampering deliberately sacrifices that lookup's availability.",
  },
};
