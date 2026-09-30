import SectionHeading from "../components/SectionHeading"

/*
 * Experience — factual entries only. Do not fabricate roles, organizations,
 * dates, or responsibilities. Format per entry:
 *   role, org, dates, description, highlights[]
 */
const experience = [
  {
    id: "zone01",
    role: "Software Developer",
    org: "Zone01 Kisumu",
    dates: "January 12, 2026 – Present",
    description: "",
    highlights: [
      "Spoke at a conference about building fault-tolerant systems",
      "Gave a talk on the TCP and OSI models, focusing on the physical and datalink layers",
    ],
  },
]

function ExperienceEntry({ entry }) {
  return (
    <article
      className="border-t border-border py-10 sm:grid sm:grid-cols-[200px_1fr] sm:gap-10"
      aria-labelledby={`exp-${entry.id}`}
    >
      {/* Dates + org */}
      <div className="mb-4 sm:mb-0">
        <p className="font-mono text-sm text-muted">{entry.dates}</p>
      </div>

      {/* Content */}
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-1">
          {entry.role}
        </p>
        <h3
          id={`exp-${entry.id}`}
          className="font-display text-lg font-medium"
        >
          {entry.org}
        </h3>
        {entry.description && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            {entry.description}
          </p>
        )}
        {entry.highlights && entry.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {entry.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeading id="experience-heading">Experience</SectionHeading>

        {experience.length > 0 ? (
          <div>
            {experience.map((entry) => (
              <ExperienceEntry key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <div className="border-t border-border py-10">
            <p className="font-mono text-sm text-muted">
              {/* Replace this placeholder once actual experience is added above */}
              Experience entries coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience
