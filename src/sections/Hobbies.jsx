import SectionHeading from "../components/SectionHeading"

/*
 * Hobbies and interests — factual entries only.
 * Each entry: name, description.
 */
const hobbies = [
  {
    name: "CCNA",
    description:
      "Cisco networking fundamentals — routing, switching, VLANs, ACLs, and the TCP/IP stack.",
  },
  {
    name: "Biometrics & Access Control",
    description:
      "Physical identity systems — fingerprint, facial, and card-based access control and how they integrate with network infrastructure.",
  },
  {
    name: "CCTV",
    description:
      "Video surveillance — camera placement, recording infrastructure, and networked monitoring systems.",
  },
  {
    name: "IP Telephony & Intercoms",
    description:
      "VoIP and intercom systems — SIP trunking, PBX setup, and building-wide communication infrastructure.",
  },
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