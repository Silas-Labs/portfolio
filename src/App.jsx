import About from "./sections/About"

function App() {
  return (
    <main className="min-h-screen bg-paper">
      <nav className="mx-auto flex max-w-300 items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          SL.
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#work" className="transition-colors hover:text-accent">
            Work
          </a>

          <a href="#about" className="transition-colors hover:text-accent">
            About
          </a>

          <a href="#contact" className="transition-colors hover:text-accent">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-300 items-center px-6 py-20 lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            Full-Stack Developer
          </p>

          <h1 className="font-display text-6xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-9xl">
            I build software
            <br />
            that solves
            <br />
            <span className="text-muted">real problems.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              I build practical web and software systems, from interfaces people
              use to the backend systems that make them work.
            </p>

            <a
              href="#work"
              className="inline-flex w-fit items-center border border-ink px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-warm-white"
            >
              View my work →
            </a>
          </div>
        </div>
      </section>

      <About />
    </main>
  )
}

export default App;
