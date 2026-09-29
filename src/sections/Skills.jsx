function Skills() {
  return (
    <section id="skills" className="mx-auto px-6 py-12 lg:px-10">
      <h2 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl mb-8 text-ink">
        Skills
      </h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        <div className="p-4 border border-ink/20 rounded-lg">
          <p className="font-display font-medium text-sm uppercase tracking-[0.1em] text-accent mb-2">Frontend</p>
          <ul className="text-muted text-sm space-y-1">
            <li>React & Vite</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES modules)</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

        <div className="p-4 border border-ink/20 rounded-lg">
          <p className="font-display font-medium text-sm uppercase tracking-[0.1em] text-accent mb-2">Backend</p>
          <ul className="text-muted text-sm space-y-1">
            <li>Node.js & FastAPI</li>
            <li>Python</li>
            <li>REST APIs</li>
            <li>Database design</li>
          </ul>
        </div>

        <div className="p-4 border border-ink/20 rounded-lg">
          <p className="font-display font-medium text-sm uppercase tracking-[0.1em] text-accent mb-2">AI & RAG</p>
          <ul className="text-muted text-sm space-y-1">
            <li>Document ingestion & chunking</li>
            <li>Embeddings & vector search</li>
            <li>LLM generation</li>
            <li>Source attribution</li>
          </ul>
        </div>

        <div className="p-4 border border-ink/20 rounded-lg">
          <p className="font-display font-medium text-sm uppercase tracking-[0.1em] text-accent mb-2">Tools</p>
          <ul className="text-muted text-sm space-y-1">
            <li>Vite</li>
            <li>Oxlint</li>
            <li>Git</li>
            <li>Vercel</li>
          </ul>
        </div>

        <div className="p-4 border border-ink/20 rounded-lg">
          <p className="font-display font-medium text-sm uppercase tracking-[0.1em] text-accent mb-2">Methodologies</p>
          <ul className="text-muted text-sm space-y-1">
            <li>Responsive design</li>
            <br />
            <li>Accessibility</li>
            <li>Performance optimization</li>
            <li>Static-first approach</li>
          </ul>
        </div>

        <div className="p-4 border border-ink/20 rounded-lg">
          <p className="font-display font-medium text-sm uppercase tracking-[0.1em] text-accent mb-2">Typography</p>
          <ul className="text-muted text-sm space-y-1">
            <li>Space Grotesk (headings)</li>
            <li>IBM Plex Sans (body)</li>
            <li>IBM Plex Mono (code)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills