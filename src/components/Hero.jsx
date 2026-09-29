function Hero() {
  return (
    <section
      className="mx-auto flex min-h-[calc(100vh-65px)] max-w-[1200px] items-center px-6 py-20 lg:px-10"
      aria-label="Introduction"
    >
      <div className="max-w-4xl">
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          Full-Stack Developer
        </p>

        <h1 className="font-display text-6xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[96px]">
          I build software
          <br />
          that solves
          <br />
          <span className="text-muted">real problems.</span>
        </h1>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start">
          <p className="max-w-md text-lg leading-relaxed text-muted">
            I build practical web and software systems — from interfaces
            people use to the backend systems that make them work.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
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
        </div>
      </div>
    </section>
  )
}

export default Hero
