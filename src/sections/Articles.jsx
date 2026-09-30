import SectionHeading from "../components/SectionHeading"

/*
 * Articles published on Dev.to (https://dev.to/silaslelei).
 * Sorted newest first. Only real articles are listed here.
 */
const articles = [
  {
    title: "Rendering Lists and Handling Events",
    date: "Jul 13, 2026",
    url: "https://dev.to/silaslelei/rendering-lists-and-handling-events-fp8",
  },
  {
    title: "Understanding Components and Props",
    date: "Jun 3, 2026",
    url: "https://dev.to/silaslelei/understanding-components-and-props-94o",
  },
  {
    title: "Getting Started with ReactJS",
    date: "May 18, 2026",
    url: "https://dev.to/silaslelei/getting-started-with-reactjs-3ag2",
  },
  {
    title: "Rocks vs Hard Places",
    date: "Apr 20, 2026",
    url: "https://dev.to/silaslelei/rocks-vs-hard-places-4c7i",
  },
  {
    title: "Bash, Coffee, and Me: Learning Shell without losing your Mind",
    date: "Mar 2, 2026",
    url: "https://dev.to/silaslelei/bash-coffee-and-me-learning-shell-without-losing-your-mind-50fj",
  },
  {
    title: "How to Write Git Commit Messages Like a Pro",
    date: "Feb 11, 2026",
    url: "https://dev.to/silaslelei/how-to-write-git-commit-messages-like-a-pro-3ep4",
  },
  {
    title: "Survival Mode: Week 1 at Zone01 Kisumu ✅",
    date: "Jan 20, 2026",
    url: "https://dev.to/silaslelei/survival-mode-week-1-at-zone01-kisumu-3pd8",
  },
  {
    title: "Sabbatical... 😂",
    date: "Jan 17, 2026",
    url: "https://dev.to/silaslelei/sabbatical-2h4b",
  },
]

function ArticleEntry({ article, index }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-baseline justify-between border-t border-border py-5 transition-colors hover:text-accent"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-medium">{article.title}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-muted">{article.date}</span>
        <span className="text-muted transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </a>
  )
}

function Articles() {
  return (
    <section
      id="articles"
      className="border-t border-border py-24"
      aria-labelledby="articles-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeading id="articles-heading">Articles</SectionHeading>
        <p className="mb-8 max-w-xl leading-relaxed text-muted">
          Writing about engineering, learning, and the problems worth solving.
          Published on Dev.to.
        </p>
        <div>
          {articles.map((article, index) => (
            <ArticleEntry key={article.url} article={article} index={index} />
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}

export default Articles