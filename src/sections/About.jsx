import SectionHeading from "../components/SectionHeading"

function About() {
  return (
    <section id="about" className="mx-auto px-6 py-12 lg:px-10">
      <SectionHeading>About</SectionHeading>

      <div className="max-w-3xl space-y-8">
        <p className="text-muted leading-relaxed">
          Full-Stack Developer who builds practical web and software systems,
          from interfaces people use to the backend systems that make them work.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-[0.1em] text-accent mb-2">Role</p>
            <p className="text-muted">Full-Stack Developer</p>
          </div>
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-[0.1em] text-accent mb-2">Location</p>
            <p className="text-muted">Remote</p>
          </div>
        </div>

        <h3 className="font-display font-medium text-lg mt-6">Selected Work</h3>

        <ul className="mt-4 space-y-3 text-muted">
          <li className="flex items-start">
            <svg
              className="h-4 w-4 flex-shrink-0 bg-accent rounded-md mt-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span>Guidely — RAG-based internal knowledge assistant with document ingestion, chunking, embeddings, vector search, and LLM generation</span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 flex-shrink-0 bg-accent rounded-md mt-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span>Computer vision project — Object detection, person classification, bounding boxes, and counting pipeline</span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 flex-shrink-0 bg-accent rounded-md mt-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span>Android debt-management application — DebtFlow with image/video input and object detection pipeline</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About