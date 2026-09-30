import SectionHeading from "../components/SectionHeading"

/*
 * PLACEHOLDER — Replace with your actual resume.
 * - resumePdf: URL to a hosted resume PDF (or "" to hide the button)
 * - summary: brief professional summary shown inline
 */
const resumePdf = "" // "https://yourdomain.com/resume.pdf"

const summary =
  "/* Add a brief professional summary here — a few sentences about your background, focus, and what you're looking for. */"

function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-border py-24"
      aria-labelledby="resume-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeading id="resume-heading">Resume</SectionHeading>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-relaxed text-muted">
            {summary}
          </p>

          {resumePdf && (
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center border border-ink px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-warm-white"
            >
              Download PDF →
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Resume