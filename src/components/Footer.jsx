import { socials } from "../data/social"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center lg:px-10">
        <div className="flex flex-col gap-3">
          <p className="font-display text-sm font-semibold tracking-tight text-warm-white">
            Silas Lelei
          </p>
          <nav aria-label="Footer social links">
            <div className="flex items-center gap-5 text-xs text-warm-white/40">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-warm-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <p className="font-mono text-xs text-warm-white/30">
          © {year}. Built with React &amp; Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer