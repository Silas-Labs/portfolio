# Portfolio Website — Agent Instructions

## 1. Project

This is a personal portfolio website for a full-stack developer.

The website should communicate:

- technical ability
- practical problem solving
- software engineering experience
- selected projects
- continuous learning
- personality without becoming informal or gimmicky

The portfolio should feel like a real developer's personal site, not a generated template.

---

## 2. Tech Stack

Use:

- React
- Vite
- JavaScript
- Tailwind CSS
- Git
- GitHub
- Vercel for deployment

Do NOT introduce TypeScript unless explicitly requested.

Prefer simple React patterns over unnecessary abstractions.

---

## 3. Design Philosophy

The visual identity is:

> Editorial + Engineering

The site should feel intentional, restrained, technical, and human.

Avoid anything that makes the website look like an AI-generated SaaS landing page.

### Do NOT use

- purple-to-blue gradients
- neon gradients
- glowing text
- glassmorphism
- excessive shadows
- excessive rounded cards
- giant gradient headings
- animated blobs
- floating 3D objects
- generic AI imagery
- stock developer illustrations
- excessive icons
- excessive pills/badges
- "AI-powered" visual language
- unnecessary animations
- generic dashboard aesthetics

Avoid the visual pattern:

"Big gradient heading + three cards + glowing button + abstract blobs."

---

# 4. Color System

Use these colors consistently.

### Light theme

```text
Background:       #F7F6F2
Primary text:     #171717
Secondary text:   #62615D
Border:           #D9D7D0
Accent:           #C65D3A
Dark sections
Background:       #1B1C1A
Text:             #F2F0E9
Muted text:       #A8A69F
Border:           #3A3A36
Accent:           #C65D3A

The accent color is burnt orange.

Use it deliberately for:

links
small highlights
active navigation states
important UI details
selected project metadata
occasional buttons

Do not use the accent color everywhere.

5. Typography

Use:

Headings
Space Grotesk
Body
IBM Plex Sans
Code / technical metadata
IBM Plex Mono

Typography hierarchy should come primarily from:

font size
weight
spacing
line height

Do not rely on color alone to create hierarchy.

Avoid making every heading extremely large.

6. Layout

Use generous whitespace.

Prefer:

max-width: 1200px

with responsive horizontal padding.

The website should breathe.

Use asymmetrical layouts where appropriate instead of putting every element into a centered column.

Sections may alternate between:

full-width editorial layouts
two-column layouts
project-focused layouts
dense technical sections

Not every section needs to look like a card.

7. Navigation

Navigation should be simple.

Suggested structure:

Silas L.                         Work  About  Contact

Do not use a hamburger menu on desktop.

Navigation should remain visually quiet.

8. Hero

The hero should immediately answer:

Who is this?
What do they do?
What should I look at?

Example direction:

SILAS L.

FULL-STACK DEVELOPER

I build practical software that turns ideas
and real-world problems into working products.

[View work]    [Contact]

Do not use:

"Crafting digital experiences for the future."

Avoid vague marketing language.

The copy should sound like a developer talking about their work.

9. Projects

Projects are the most important section.

Do NOT represent projects only as generic cards.

Each significant project should communicate:

Project
Problem
What was built
Technical approach
Interesting engineering decisions
Result / current state
Technology

Example:

GUIDELY
Knowledge Assistant

An internal knowledge assistant that allows users
to upload documents and ask questions in plain language.

React · FastAPI · Pinecone · LLM

[Read case study →]

Projects should feel like engineering case studies.

10. Project Priority

Prioritize projects that demonstrate actual engineering.

Potential projects include:

Guidely

RAG-based internal knowledge assistant.

Highlight:

document ingestion
chunking
embeddings
vector search
retrieval
LLM generation
source attribution
performance considerations
Human Detection System

Computer vision project.

Highlight:

image/video input
object detection
person classification
bounding boxes
counting
detection pipeline
DebtFlow

Android debt-management application.

Highlight the actual engineering decisions and architecture used.

Additional projects may be added later.

11. Experience

Experience should be factual and concise.

Do not inflate titles or responsibilities.

Use:

ROLE
Organization
DATE

Short explanation

Selected work:
- ...
- ...
- ...

The portfolio should demonstrate capability through evidence rather than exaggerated claims.

12. Animations

Animations should be subtle.

Good:

small opacity transitions
understated hover states
slight movement
navigation transitions
reveal-on-scroll when useful

Avoid:

bouncing elements
excessive parallax
spinning objects
infinite animations
dramatic text animations
animation on every element

If an animation does not improve usability or storytelling, remove it.

13. Components

Use reusable React components when repetition exists.

Example:

src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SectionHeading.jsx
│   ├── ProjectCard.jsx
│   └── Footer.jsx
│
├── sections/
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
│
├── data/
│   └── projects.js
│
├── App.jsx
├── main.jsx
└── index.css

Do not create a component for every <div>.

Abstraction should follow repetition.

14. Content

Never invent:

employment history
clients
achievements
metrics
users
revenue
performance numbers
certifications
technologies
responsibilities

If information is missing, leave a clear placeholder or ask for it.

Do not fabricate portfolio content.

15. Code Quality

Prefer readable code over clever code.

Use:

semantic HTML
accessible buttons and links
meaningful component names
meaningful variable names
responsive layouts
proper alt text
keyboard accessibility

Avoid unnecessary dependencies.

Before adding a package, determine whether the functionality can reasonably be implemented with the existing stack.

16. Responsive Design

The portfolio must work on:

mobile
tablet
laptop
large desktop

Do not design desktop first and "fix mobile later."

Check:

375px
768px
1024px
1440px

Important content must remain accessible at every size.

17. Accessibility

Use semantic elements:

<header>
<nav>
<main>
<section>
<article>
<footer>

Use proper heading hierarchy.

Interactive elements must be keyboard accessible.

Maintain readable contrast.

Do not communicate meaning through color alone.

18. SEO

The site should have:

meaningful <title>
meta description
semantic headings
descriptive links
Open Graph metadata
favicon
appropriate canonical URL once the domain is known

Do not keyword-stuff.

The portfolio should read naturally.

19. Performance

Keep the site lightweight.

Avoid unnecessary:

JavaScript libraries
animation libraries
huge images
web fonts loaded unnecessarily
client-side data fetching for static content

Prefer static content where possible.

Optimize images before adding them.

20. Git

Use small, meaningful commits.

Examples:

feat: add portfolio hero
feat: add projects section
feat: add experience section
style: refine typography
style: improve mobile layout
fix: correct navigation spacing

Do not make giant commits containing unrelated changes.

21. Development Process

Build incrementally.

Order:

Project setup
Global styles
Typography
Navigation
Hero
About
Projects
Experience
Skills
Contact
Responsive refinement
Accessibility
SEO
Performance
Deployment

Do not build the entire application in one pass.

After each major section:

Run the application.
Inspect the result.
Fix layout issues.
Check mobile.
Commit the change.
22. Design Test

Before considering a section complete, ask:

Would this look like it was generated from a generic AI portfolio template?

If yes, simplify it.

The site should have:

restraint
personality
strong typography
useful information
real project evidence
intentional spacing
minimal decoration

The goal is not to impress through visual effects.

The goal is to make someone think:

"This person actually builds things."
