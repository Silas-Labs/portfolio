function Experience() {
  return (
    <section id="about" className="mx-auto px-6 py-12 lg:px-10 bg-charcoal">
      <h2 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl mb-8 text-warm-white">
        Experience
      </h2>

      <div className="grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="p-6 border border-charcoal/50 rounded-lg">
          <p className="font-display font-medium text-sm uppercase tracking-[0.1em] text-accent mb-2">Full-Stack Developer</p>
          <p className="font-display font-semibold text-lg text-warm-white mb-1">Silas Labs</p>
          <p className="text-muted text-sm">2023 - 2026</p>
        </article>

        <article className="p-6 border border-charcoal/50 rounded-lg">
          <p className="font-display font-medium text-sm uppercase tracking-[0.1em] text-accent mb-2">Junior Developer</p>
          <p className="font-display font-semibold text-lg text-warm-white mb-1">Startup XYZ</p>
          <p className="text-muted text-sm">2021 - 2023</p>
        </article>

        <article className="p-6 border border-charcoal/50 rounded-lg">
          <p className="font-display font-medium text-sm uppercase tracking-[0.1em] text-accent mb-2">Freelance React</p>
          <p className="font-display font-semibold text-lg text-warm-white mb-1">Various Clients</p>
          <p className="text-muted text-sm">2020 - 2021</p>
        </article>
      </div>
    </section>
  )
}

export default Experience