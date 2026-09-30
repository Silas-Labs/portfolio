import SectionHeading from "../components/SectionHeading"
import projects from "../data/projects"

function TechTag({ children }) {
  return (
    <span className="font-mono text-xs text-muted">
      {children}
    </span>
  )
}

function ProjectEntry({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <article
      className={`border-t border-border py-16 ${!isEven ? "lg:flex lg:flex-row-reverse lg:gap-16" : "lg:flex lg:gap-16"}`}
      aria-labelledby={`project-${project.id}`}
    >
      {/* Number + metadata column */}
      <div className="mb-8 flex-shrink-0 lg:mb-0 lg:w-[200px]">
        <p className="font-mono text-5xl font-medium leading-none text-border">
          {String(index + 1).padStart(2, "0")}
        </p>
        <div className="mt-6 space-y-1">
          {project.tech.map((t) => (
            <p key={t}>
              <TechTag>{t}</TechTag>
            </p>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-accent">
          {project.type}
        </p>
        <h3
          id={`project-${project.id}`}
          className="font-display text-2xl font-medium tracking-tight sm:text-3xl"
        >
          {project.name}
        </h3>
        {project.role && (
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-accent">
            {project.role}
          </p>
        )}
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.1em] text-ink">
              Problem
            </p>
            <p className="text-sm leading-relaxed text-muted">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.1em] text-ink">
              What was built
            </p>
            <p className="text-sm leading-relaxed text-muted">
              {project.built}
            </p>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.1em] text-ink">
              Engineering decisions
            </p>
            <p className="text-sm leading-relaxed text-muted">
              {project.decisions}
            </p>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.1em] text-ink">
              Status
            </p>
            <p className="text-sm leading-relaxed text-muted">
              {project.status}
            </p>
          </div>
        </div>

        {project.link && (
          <div className="mt-8">
            <a
              href={project.link}
              className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project →
            </a>
          </div>
        )}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section
      id="work"
      className="border-t border-border py-24"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeading id="work-heading">Selected Work</SectionHeading>

        <div>
          {projects.map((project, index) => (
            <ProjectEntry key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
