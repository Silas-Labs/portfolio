function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center lg:px-10">
        <p className="font-display text-sm font-semibold tracking-tight text-warm-white/60">
          Silas L.
        </p>

        <p className="font-mono text-xs text-warm-white/30">
          © {year}. Built with React &amp; Vite.
        </p>

        <nav aria-label="Footer navigation">
          <div className="flex items-center gap-6 text-xs text-warm-white/40">
            <a href="#work" className="transition-colors hover:text-warm-white">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-warm-white">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-warm-white">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
