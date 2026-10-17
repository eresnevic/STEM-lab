import { Blocks, Building2, GraduationCap, Handshake, Ruler } from 'lucide-react'
import { SectionHeading } from './section-heading'

const pillars = [
  {
    icon: GraduationCap,
    title: 'Addressing a longstanding barrier to STEM study abroad',
    body: 'STEM students have historically faced barriers to studying abroad. Laboratory-based courses often require dedicated facilities, specialized equipment, and rigorous safety standards, making it difficult for students to access international experiences without disrupting academic progress.',
  },
  {
    icon: Building2,
    title: 'Investing in infrastructure that supports hands-on STEM learning abroad',
    body: 'Recognizing this challenge, CEA CAPA invested in purpose-built laboratory facilities in Dublin, Madrid, and Barcelona that enable institutions to support hands-on STEM learning, expand access to global experiences, and explore new academic opportunities.',
  },
  {
    icon: Ruler,
    title: 'Designed intentionally for STEM education, not adapted from existing space',
    body: "Rather than retrofitting existing classrooms, these laboratories were intentionally designed as flexible STEM learning environments. Led by CEA CAPA's Vice President of Real Estate, Program Development Team, and Academic Leadership, the development process included consultation with architects, laboratory planners, local safety experts, and our School of Record, the University of New Haven, to ensure the facilities could support a broad range of STEM disciplines while meeting academic and operational standards.",
  },
  {
    icon: Blocks,
    title: 'Built for flexibility, scalability, and diverse academic needs',
    body: 'These spaces were not designed around a single course, department, or institution. They were purpose-built to support hands-on STEM education abroad, accommodate small-cohort laboratory learning, and evolve alongside partner needs. With modular workstations, laboratory sinks, electrical infrastructure, safety features, and flexible layouts, the facilities can support a variety of teaching models, disciplines, and learning outcomes.',
  },
  {
    icon: Handshake,
    title: 'A platform for collaboration and innovation',
    body: 'Whether the goal is supporting first- and second-year STEM coursework, developing faculty-led programs, creating research-focused experiences, or exploring new curricular opportunities, these facilities provide a platform for collaboration. We have already begun working with institutions such as Pace University, Wake Forest University, and Michigan State University to explore STEM programming opportunities, and we are eager to continue building new ideas with partners.',
  },
]

export function CoreNarrative() {
  return (
    <section id="core-narrative" aria-labelledby="core-narrative-title" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="core-narrative-title"
          eyebrow="Core Narrative"
          title="The story every partner conversation should tell"
          description="Five connected messages that explain why these labs exist, how they were built, and what they make possible."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              className={`flex flex-col gap-4 rounded-2xl border border-border bg-white p-7 shadow-sm ${
                i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-brand">
                  <p.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-serif text-4xl font-semibold text-border" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg leading-snug font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
