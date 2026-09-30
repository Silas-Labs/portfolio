import SectionHeading from "../components/SectionHeading"
import { socials, email } from "../data/social"

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:gap-24">
          {/* Left — copy */}
          <div>
            <SectionHeading id="contact-heading">Get in touch</SectionHeading>
            <p className="max-w-md leading-relaxed text-muted">
              I'm currently available for freelance work and interesting
              projects. If you have something worth building, I'd like to hear
              about it.
            </p>
          </div>

          {/* Right — links */}
          <div className="space-y-0">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-between border-t border-border py-5 text-sm transition-colors hover:text-accent"
              >
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  Email
                </span>
                <span className="font-medium">{email}</span>
              </a>
            )}
            {socials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between border-t border-border py-5 text-sm transition-colors hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  {link.label}
                </span>
                <span className="font-medium">{link.display}</span>
              </a>
            ))}
            {/* Bottom border to close the last item */}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact