/*
 * projects.js — Portfolio project data
 *
 * Each project entry maps directly to the ProjectEntry component in Projects.jsx.
 * Only include information that is accurate. Leave fields empty ("") rather than
 * inventing details.
 *
 * Shape:
 *   id          — unique slug, used for aria IDs
 *   type        — short category label shown in accent mono above the title
 *   name        — project name
 *   role        — optional; your role on the project, shown as a mono label
 *   summary     — one to two sentence description
 *   problem     — what problem was being solved
 *   built       — what was actually constructed
 *   decisions   — interesting engineering choices made
 *   status      — current state of the project
 *   tech        — array of technology labels shown in the side column
 *   link        — optional URL; omit or set to "" if not applicable
 */

const projects = [
  {
    id: "guidely",
    type: "RAG System",
    name: "Guidely",
    summary:
      "An internal knowledge assistant that lets users upload documents and ask questions in plain language. Built to make scattered team knowledge searchable and retrievable.",
    problem:
      "Team knowledge was scattered across documents, wikis, and chat history, making it difficult to find and reuse information when needed.",
    built:
      "React (Vite) frontend with document upload and search; FastAPI backend split across routes (documents, search, health, metrics) and services (parser, chunker, embeddings, indexer, answer generator, llm, memory). OpenAI embeddings, Pinecone vector storage, and LLM-powered query responses with source attribution.",
    decisions:
      "Chunking strategy tuned to balance retrieval precision with context coverage. Retrieval threshold set to reduce hallucination. Source attribution added to every answer to make the system auditable.",
    status: "Inactive internal tool. Architecture documented for future revival.",
    tech: ["React", "Vite", "FastAPI", "Pinecone", "OpenAI", "Python"],
    link: "",
  },
  {
    id: "detecto",
    type: "Computer Vision",
    name: "detecto",
    summary:
      "A person detection and counting system. A React frontend drives an object-detection backend that finds people (and objects) in an image, video, or live camera feed, drawing bounding boxes with labels and confidence scores.",
    problem:
      "Automated counting and classification of people in captured images and video streams, suitable for operational metrics and monitoring.",
    built:
      "FastAPI backend running a YOLO detector over uploaded images or live camera frames, with run history, statistics, and an event log persisted to local JSON state. React 19 (Vite) frontend with React Router — a framed detection viewport that overlays detection boxes, plus History, Stats, and Settings pages. Model pick, confidence threshold, and live-stream URL are configurable. Monochrome UI by design (black, white, slate).",
    decisions:
      "YOLO model family (yolov8n/s/m) selectable at runtime, with a configurable confidence threshold applied server-side before boxes are emitted. Detection state kept in flat JSON files rather than a database — simple, portable, and sufficient for a prototype. Frontend resolves API calls against a mock dataset when the backend is unavailable, so the UI is fully navigable during development. CORS locked to the Vite dev server origins.",
    status:
      "Prototype pipeline complete. Frontend built and deployed; backend detection service implemented.",
    tech: ["Python", "FastAPI", "YOLO", "OpenCV", "React", "Vite", "Tailwind CSS"],
    link: "",
  },
  {
    id: "lendtrack",
    type: "Fintech / Loan Management",
    name: "LendTrack",
    summary:
      "A full-stack loan and debt management system — tracking lenders, borrowers, repayments, and payment schedules, with automated email notifications and server-side financial reporting.",
    problem:
      "Tracking multiple loans across different lenders and borrowers, keeping repayment schedules accurate, and reminding parties about upcoming or overdue payments is error-prone when done manually.",
    built:
      "React (Vite) SPA frontend with Tailwind CSS and Framer Motion; Express.js backend on Node.js with Resend email integration; Firebase Firestore as the real-time datastore with Firebase Auth (Google OAuth) for authentication. Server handles sensitive operations the client shouldn't: bulk updates, report generation, and administrative overrides. Zero-Trust security model enforced at the database level via firestore.rules. Containerized and deployed on Cloud Run.",
    decisions:
      "Split responsibilities deliberately: the frontend talks directly to Firestore via the Firebase Web SDK for low-latency real-time reads (onSnapshot listeners), while the Express server owns anything sensitive or aggregating — email dispatch, report generation, admin overrides — so the security surface stays small and auditable. Zero-Trust Firestore rules restrict reads/writes to data a user owns or belongs to an organization they're a member of, with admin roles governed by separate predicates. Server performs a Firestore health check on startup before accepting traffic, so the app fails fast rather than serving a broken state.",
    status:
      "In development. Backend and frontend live; full documentation set (architecture, frontend, backend, database & security, development guide) written.",
    tech: [
      "React",
      "Vite",
      "Express.js",
      "Node.js",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Resend",
      "Tailwind CSS",
      "TypeScript",
      "Cloud Run",
    ],
    link: "",
  },
  {
    id: "clinic-manager",
    type: "Healthcare Management",
    name: "Clinic Manager",
    summary:
      "A role-based clinic management system — patient registration and queues, doctor workflows (prescriptions, lab requests), laboratory and pharmacy operations, and administrative user management.",
    problem:
      "Clinics juggle patients, doctors, lab tests, prescriptions, and pharmacy stock across disjointed paper processes and manual queues, leading to lost records, delayed care, and poor inventory visibility.",
    built:
      "Two-service architecture: a React + TypeScript (Vite) client with role-scoped dashboards for admin, doctor, front desk, laboratory, and pharmacy, plus an Express.js server with Prisma ORM over PostgreSQL. Server organized by domain — auth, patients, doctors, lab, pharmacy, admin — each with its own controller, route, and middleware. Shared utilities (apiResponse, error handling, permission checks) keep the API contract consistent. Protected routes, JWT auth, and a centralized error-handling middleware chain.",
    decisions:
      "Modeled the server as a domain-separated Express app rather than a single fat controller — auth, patient, doctor, lab, pharmacy, and admin each own their routes and controllers, with shared permission and error middleware enforcing boundaries. Prisma centralizes the schema so every module reads one source of truth for the data model. Role-based access is enforced at the route layer via a permission middleware, so a doctor's controller never needs to re-check what it's allowed to see. Shared apiResponse and error utilities keep every endpoint's contract consistent, which matters when five different roles consume the same API.",
    status:
      "In development. Full client and server implemented; database schema managed via Prisma.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Tailwind CSS",
      "Lucide",
    ],
    link: "",
  },
  {
    id: "chama",
    type: "Platform Design",
    name: "Chama",
    summary:
      "A digital trust layer for Kenya's informal savings and investment groups (chamas) — digitizing merry-go-round rotations, table banking, welfare funds, and internal lending, with every shilling leaving a permanent audit trail.",
    problem:
      "Kenya's chamas record contributions, payouts, and loans in notebooks, WhatsApp messages, and a treasurer's memory. A treasurer falling ill, a lost phone, or a dispute over who paid can put months of group savings at risk — and members in low-connectivity areas can't always attend the meetings where cash physically changes hands.",
    built:
      "Six bounded modules with clear ownership boundaries: Identity, Access & Membership; Contributions, Cycles & Payouts (the rotation engine); Loans & an append-only Ledger; Governance (meetings, resolutions, maker-checker approvals); Notifications across push, SMS, and USSD channels; and Offline Sync, Reporting & Audit. Full documentation set: market research, requirements, domain model & ERD, architecture, tech stack, and CI/CD design.",
    decisions:
      "Domain split into six modules that communicate through an explicit event vocabulary (ContributionConfirmed, ResolutionApproved, ActionCapturedOffline) rather than reaching into each other's tables. Sensitive money movement gated behind a single maker-checker approval mechanism so no one can move group funds unilaterally. Offline-capture-then-sync pipeline with idempotent writes so a member on a flaky connection never double-counts a contribution. Designed to degrade gracefully: full app where there's connectivity, usable over SMS/USSD where there isn't.",
    status:
      "Planning / pre-architecture. Module boundaries and event vocabulary agreed; tech stack and deployment topology not yet finalized.",
    tech: ["React", "Vite", "Tailwind CSS", "Go", "Gin", "PostgreSQL", "GORM"],
    link: "",
  },
  {
    id: "micro-influencer",
    type: "Marketplace Platform",
    name: "Micro-Influencer Marketplace",
    summary:
      "A two-sided marketplace connecting brands with micro-influencers — campaign management, influencer verification, rate cards, contracts, and M-Pesa settlement.",
    problem:
      "Brands want to run targeted micro-influencer campaigns but have no reliable way to discover vetted creators, negotiate rates, enforce contract terms, or track payout — and influencers lack a trustworthy channel to monetize their audience.",
    built:
      "Modular monolith: Go/Fiber backend (auth, profiles, Instagram/Facebook connectors, rate cards, campaigns, contracts with a state machine, verification, monitoring, settlement with a Daraja M-Pesa adapter, authenticity scoring, analytics, and admin) on PostgreSQL via sqlc + golang-migrate; Next.js (App Router, shadcn/ui) frontend with role-scoped route trees for influencer, business, and admin. asynq Redis task queue handles social-API polling, token refresh, and payout retries. AES-GCM envelope encryption for OAuth tokens at rest. Sentry on both sides. Deployed as two separate Fly.io apps.",
    decisions:
      "Chose a modular monolith over microservices — solo-founder capacity means microservices multiply the ops surface with no benefit at this scale — but internal packages are organized by domain so services can be split out later. Social APIs are never called in a request/response cycle: everything external is a queued job with retry, backoff, and dead-letter support. OAuth tokens encrypted at rest with AES-GCM, key from a secrets manager — never raw tokens or keys in source. Monthly-partitioned metric_points table avoids running a second datastore. react-hook-form + zod on the client mirrors Go struct validation.",
    status:
      "In development. Backend migrations and API live; frontend built and deployed to Fly.io with a production Fly Managed Postgres cluster.",
    tech: [
      "Go",
      "Fiber",
      "PostgreSQL",
      "sqlc",
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Redis",
      "asynq",
      "Fly.io",
      "M-Pesa",
    ],
    link: "",
  },
  {
    id: "llf",
    type: "Web Platform",
    name: "Local Leaders Fund",
    summary:
      "An African-led philanthropy platform connecting donors with vetted African-led organisations through unrestricted, trust-based funding. I served as content and QA engineer, owning the site's SEO overhaul and CI/CD pipeline.",
    problem:
      "The organisation's homepage communicated its mission well to humans but poorly to search engines: a placeholder title, no meta description, robots set to noindex, staging-domain references, and a rotating carousel of H1s that diluted the page's topical focus.",
    built:
      "WordPress theme (llf_website) with custom PHP functions, FSE-compatible templates, and a scroll-driven background. I authored a full homepage SEO specification (Docs/SEO/Homepage.md) and implemented it: meta title and description targeting 'African-led philanthropy', a single static H1 ('Accelerating African-Led Impact') with the carousel demoted to supporting H2s, renamed section headings (Impact Snapshot → Our Impact Across Africa), keyword-rich CTA rewrites (Meet Our Leaders → Explore Our Partners), a new FAQ section with FAQPage, NonprofitOrganization, WebSite, Breadcrumb, and WebPage schema, image alt text and optimization, and technical SEO cleanup (remove noindex, replace staging URLs, submit sitemap, canonical, Google Search Console). CI/CD configured on GoDaddy.",
    decisions:
      "Kept the carousel but split its role: one static H1 defines the page topic for search engines and assistive tech, while carousel slides became supporting messages marked up as H2 — preserving storytelling without keyword dilution. Chose to keep all carousel content server-rendered rather than JS-dependent so it's indexable. Built the coming-soon lead capture as a WordPress CPT rather than wiring Mailchimp immediately, so the pipeline is ready to plug into MC4WP without frontend changes. Cache-busting uses file mtime rather than a static version string so each asset invalidates browser and CDN caches only when it actually changes.",
    role: "Content & QA Engineer",
    status:
      "Live. Site reached the top of Google for target searches (African-led philanthropy, trust-based philanthropy, unrestricted funding) from July.",
    tech: ["WordPress", "PHP", "MySQL", "SEO", "GoDaddy", "CI/CD"],
    link: "",
  },
]

export default projects