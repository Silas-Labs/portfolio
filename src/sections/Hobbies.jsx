import SectionHeading from "../components/SectionHeading"

/*
 * PLACEHOLDER — Replace with your actual hobbies and interests.
 * Do not fabricate. Each entry: name, description.
 */
const hobbies = [
  // {
  //   name: "Hobby name",
  //   description: "Brief description of what you enjoy about it.",
  // },
]

function Hobbies() {
  return (
    <section
      id="hobbies"
      className="border-t border-border bg-charcoal py-24"
      aria-labelledby="hobbies-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SectionHeading id="hobbies-heading" className="text-warm-white">
          Hobbies
        </SectionHeading>

        {hobbies.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hobbies.map((hobby) => (
              <div key={hobby.name}>
                <p className="font-display text-lg font-medium text-warm-white">
                  {hobby.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-warm-white/60">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-t border-border py-10">
            <p className="font-mono text-sm text-warm-white/40">
              {/* Replace this placeholder once actual hobbies are added above */}
              Hobbies coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hobbies