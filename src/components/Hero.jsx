import { socials } from "../data/social"
import photo from "../assets/photo-1200.jpg"

function Hero() {
  return (
    <section
      className="mx-auto flex min-h-[calc(100vh-65px)] max-w-[1200px] items-center px-6 py-20 lg:px-10"
      aria-label="Introduction"
    >
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/* Left — copy */}
        <div className="max-w-2xl">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            Full-Stack Developer
          </p>

          <h1 className="font-display text-6xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[96px]">
            Silas
            <br />
            <span className="text-muted">Lelei</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build practical software — from interfaces people use to the
            backend systems and AI pipelines that make them work.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#work"
              className="inline-flex w-fit items-center border border-ink px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-warm-white"
            >
              View my work →
            </a>
            <a
              href="#contact"
              className="inline-flex w-fit items-center px-6 py-3 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — avatar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="h-72 w-72 overflow-hidden rounded-sm bg-charcoal sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <img
                src={photo}
                alt="Silas Lelei"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border border-border bg-paper" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero