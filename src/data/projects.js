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
      "React frontend with document upload, FastAPI backend, OpenAI embeddings, Pinecone vector storage, and LLM-powered query responses with source attribution.",
    decisions:
      "Chunking strategy tuned to balance retrieval precision with context coverage. Retrieval threshold set to reduce hallucination. Source attribution added to every answer to make the system auditable.",
    status: "Inactive internal tool. Architecture documented for future revival.",
    tech: ["React", "FastAPI", "Pinecone", "OpenAI", "Python"],
    link: "",
  },
  {
    id: "human-detection",
    type: "Computer Vision",
    name: "Human Detection System",
    summary:
      "A computer vision pipeline that takes image and video input, detects people, draws bounding boxes, and outputs frame-level counts.",
    problem:
      "Automated counting and classification of people in captured images and video streams, suitable for operational metrics and monitoring.",
    built:
      "Detection pipeline with image/video input, YOLO-based object detection, person classification, bounding box rendering, and count aggregation output.",
    decisions:
      "Model selected to balance accuracy against inference speed for the target hardware. Bounding box filtering tuned to reduce false positives. Counting logic handles occlusion and frame transitions. Pipeline designed to support both batch processing and real-time streaming.",
    status:
      "Prototype pipeline complete. Architecture and code documented for potential productization.",
    tech: ["Python", "YOLO", "OpenCV"],
    link: "",
  },
  {
    id: "debtflow",
    type: "Android Application",
    name: "DebtFlow",
    summary:
      "An Android application for personal debt management — tracking what you owe, to whom, and helping plan repayment.",
    problem:
      "Managing multiple debts across different people and timelines is difficult to track manually and easy to lose sight of.",
    built:
      "Android application with debt entry, creditor tracking, repayment scheduling, and summary views of outstanding balances.",
    decisions:
      /* PLACEHOLDER — add the actual engineering decisions made during DebtFlow development */
      "[Add engineering decisions — e.g., local persistence strategy, data model design, UI state management approach]",
    status:
      /* PLACEHOLDER — update with actual current state */
      "[Add current status — e.g., published on Play Store, internal use, archived]",
    tech: ["Android", "Java", "SQLite"],
    link: "",
  },
]

export default projects
