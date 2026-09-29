function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 lg:px-10"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-accent"
          aria-label="Silas L. — home"
        >
          Silas L.
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#work" className="transition-colors hover:text-accent">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-accent">
            About
          </a>
          <a
            href="#contact"
            className="border border-ink px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-warm-white"
          >
            Contact
          </a>
        </div>

        {/* Mobile nav — minimal, no hamburger */}
        <div className="flex items-center gap-6 text-sm md:hidden">
          <a href="#work" className="transition-colors hover:text-accent">
            Work
          </a>
          <a href="#contact" className="transition-colors hover:text-accent">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
