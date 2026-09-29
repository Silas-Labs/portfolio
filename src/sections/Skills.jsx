import SectionHeading from "../components/SectionHeading"

const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "JavaScript (ES modules)", "HTML & CSS"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Node.js", "REST API design", "Database design"],
  },
  {
    label: "AI & RAG",
    items: [
      "Document ingestion & chunking",
      "Embeddings & vector search",
      "LLM generation",
      "Source attribution",
      "Pinecone",
    ],
  },
  {
    label: "Computer Vision",
    items: [
      "Object detection",
      "Person classification",
      "Bounding box pipelines",
      "Batch & real-time processing",
    ],
  },
  {
    label: "Mobile",
    items: ["Android development", "Java / Kotlin"],
  },
  {
    label: "Tools & Workflow",
    items: ["Git", "Vercel", "Linux", "Oxlint", "Vite"],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-charcoal py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeading id="skills-heading" className="text-warm-white">
          Skills
        </SectionHeading>

        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {group.label}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-warm-white/70">
                    <span className="h-px w-4 flex-shrink-0 bg-accent/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
