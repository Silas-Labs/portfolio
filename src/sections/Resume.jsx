import SectionHeading from "../components/SectionHeading"

/*
 * Resume — factual entries only.
 * - resumePdf: path to a hosted resume PDF, or "" to hide the button
 * - summary: brief professional summary shown inline
 */
const resumePdf = "/resume.pdf"

const summary =
  "Full-stack developer building practical software — from user interfaces to backend APIs and applied machine learning pipelines. Currently a Software Developer at Zone01 Kisumu."

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