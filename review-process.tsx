import { Archive, CheckCircle2, Microscope, Recycle, Wind } from 'lucide-react'
import { SectionHeading } from './section-heading'

const principles = [
  'We have qualified faculty and academic teams ready to work with partners to adapt courses for our facilities and bring new STEM learning opportunities to life.',
  'When an institution is interested in offering a new STEM course, we review the curriculum, laboratory activities, equipment requirements, and safety considerations as part of our planning process.',
  'We encourage institutions to share syllabi, laboratory schedules, or even preliminary course concepts. Our team will work collaboratively to evaluate feasibility and identify opportunities.',
  'This process helps ensure that academic innovation can occur without compromising safety standards.',
]

const areas = [
  {
    icon: Wind,
    title: 'Ventilation & Fume Hood Considerations',
    body: 'Courses with extensive or continuous fume hood use, such as intensive synthetic chemistry, large-scale chemical synthesis, advanced organic chemistry, or labs involving significant solvent or concentrated reagent use, may require additional review.',
  },
  {
    icon: Archive,
    title: 'Chemical Storage & Laboratory Materials',
    body: 'Planning considerations include chemical quantities and types, storage needs, laboratory setup, and handling and disposal requirements.',
  },
  {
    icon: Recycle,
    title: 'Waste Management & Local Compliance',
    body: 'When laboratory activities generate regulated waste streams, planning may include waste disposal requirements, local regulations, chemical handling procedures, and safety protocols to ensure compliance with local standards.',
  },
  {
    icon: Microscope,
    title: 'Specialized Equipment',
    body: 'We review the equipment and materials needed for each course, including items such as microscopes, analytical instruments, models, and other teaching resources, to ensure laboratory and classroom needs can be appropriately supported.',
  },
]

export function ReviewProcess() {
  return (
    <section id="course-review" aria-labelledby="course-review-title" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="course-review-title"
          eyebrow="Course Review Process"
          title="Safety, infrastructure & course review"
          description="Every new course receives a thoughtful review process. We work collaboratively with faculty and institutional partners to determine whether and how a course can be supported."
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <li key={p} className="flex gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-foreground">{p}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-14 text-sm font-semibold tracking-wide text-brand-deep uppercase">
          Areas typically reviewed
        </h3>
        <ol className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, i) => (
            <li key={area.title} className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-brand">
                  <area.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-2xl font-semibold text-border" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h4 className="text-lg leading-snug font-semibold text-foreground">{area.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{area.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
