import SectionHeading from "../components/SectionHeading"
import photo from "../assets/photo-800.jpg"

function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-charcoal py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeading id="about-heading" className="text-warm-white">
          About
        </SectionHeading>

        <div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:gap-24">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-warm-white/90">
              I'm a full-stack developer focused on building practical software
              — systems that are reliable, maintainable, and actually useful to
              the people who use them.
            </p>
            <p className="leading-relaxed text-warm-white/60">
              My work spans web interfaces, backend APIs, and applied machine
              learning pipelines. I care about understanding a problem before
              writing code, and I prefer working solutions over impressive
              complexity.
            </p>
            <p className="leading-relaxed text-warm-white/60">
              Currently available for freelance work and interesting projects.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center border border-warm-white/30 px-5 py-2.5 text-sm font-medium text-warm-white transition-colors hover:border-warm-white hover:bg-warm-white hover:text-charcoal"
              >
                Get in touch →
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div className="overflow-hidden rounded-sm">
              <img
                src={photo}
                alt="Silas Lelei"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                Focus
              </p>
              <ul className="space-y-1.5 text-sm text-warm-white/70">
                <li>Full-stack web development</li>
                <li>Backend APIs & system design</li>
                <li>Applied machine learning</li>
                <li>RAG systems & LLM integrations</li>
              </ul>
            </div>

            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                Stack
              </p>
              <ul className="space-y-1.5 text-sm text-warm-white/70">
                <li>React · Vite · Tailwind CSS</li>
                <li>Python · FastAPI · Node.js</li>
                <li>Pinecone · OpenAI APIs</li>
                <li>Git · Vercel · Linux</li>
              </ul>
            </div>

            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                Location
              </p>
              <p className="text-sm text-warm-white/70">
                {/* Replace with your actual location */}
                [Location]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
