import SectionHeading from "../components/SectionHeading"

/*
 * PLACEHOLDER — Replace with your actual contact links.
 * Only include channels you actually check.
 */
const contactLinks = [
  {
    label: "Email",
    href: "mailto:your@email.com",
    display: "your@email.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    display: "github.com/yourusername",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    display: "linkedin.com/in/yourusername",
  },
]

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
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between border-t border-border py-5 text-sm transition-colors hover:text-accent"
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
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
