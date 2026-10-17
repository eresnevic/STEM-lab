import { Atom, Beaker, Blocks, ChartLine, Dna, HeartPulse, Leaf, Microscope, ShieldCheck, Users } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SectionHeading } from './section-heading'

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PurposeBuiltAnswer() {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-xl border border-border bg-muted/60 p-4">
        <p className="text-xs font-semibold tracking-wide text-brand-deep uppercase">Partners may ask</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {['Is the facility purpose-built?', 'Is it safe?', 'Can it support rigorous coursework?'].map((q) => (
            <li key={q} className="rounded-full border border-border bg-white px-3 py-1 text-sm text-foreground">
              {q}
            </li>
          ))}
        </ul>
      </div>
      <p className="rounded-lg border-l-4 border-brand bg-accent px-4 py-3 leading-relaxed text-accent-foreground">
        <strong>Yes!</strong> These facilities were intentionally designed for teaching and learning through a
        deliberate planning and consultation process, rather than adapted from general classroom space.
      </p>
      <BulletList
        items={[
          'The labs were designed with input from Program Development, Academic Leadership, and the University of New Haven to support diverse STEM coursework and academic requirements.',
          'Architects, lab planners, and local safety experts informed the design process to ensure the facilities are safe, effective, and practical for teaching and learning.',
          'These facilities are well suited for introductory and intermediate STEM labs, helping students stay on track academically while studying abroad.',
        ]}
      />
    </div>
  )
}

function FlexibleAnswer() {
  return (
    <div className="flex flex-col gap-5">
      <p className="leading-relaxed text-foreground">
        The facilities were created to support multiple STEM disciplines rather than a single academic use.
      </p>
      <BulletList
        items={[
          'These are modular laboratory environments designed to accommodate a broad range of STEM applications.',
          'The spaces include laboratory sinks, electrical infrastructure, movable workstations, demonstration areas, and flexible layouts that can be adapted to different teaching needs.',
          'As partner interests evolve, the facilities are designed to support new academic opportunities.',
        ]}
      />
    </div>
  )
}

function CohortAnswer() {
  return (
    <div className="flex flex-col gap-5">
      <p className="leading-relaxed text-foreground">
        The laboratories were designed to support meaningful engagement between students, faculty, and laboratory
        activities through small-cohort learning environments.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-4 text-center">
          <p className="font-serif text-3xl font-semibold text-brand-deep">16 + 1</p>
          <p className="text-xs text-muted-foreground">Students + instructor (typical section)</p>
        </div>
        <div className="rounded-xl border border-brand/40 bg-accent p-4 text-center">
          <p className="font-serif text-3xl font-semibold text-brand-deep">24 + 1</p>
          <p className="text-xs text-accent-foreground">Students + instructor (maximum)</p>
        </div>
      </div>
      <BulletList
        items={[
          'Unlike large lecture-based science instruction, these laboratories were designed for hands-on participation. The spaces are optimized for small cohorts, enabling students to actively engage with experiments, equipment, and collaborative learning.',
          '"Most laboratory sections are designed to accommodate approximately 16 students and one instructor, with capacity to support up to 24 students and one instructor depending on course needs and room configuration."',
          '"The facilities were intentionally planned to provide ample workspace per student, creating an environment that supports experimentation, instruction, and safe laboratory operations."',
        ]}
      />
    </div>
  )
}

const activityGroups = [
  {
    icon: Dna,
    label: 'Life Sciences & Biotechnology',
    activities: [
      'DNA extraction and analysis',
      'Cellular biology investigations',
      'Molecular biology applications',
      'Genetics experiments',
      'Microscopy and specimen observation',
      'Microbiology and microorganism culturing',
    ],
  },
  {
    icon: HeartPulse,
    label: 'Health & Biomedical Sciences',
    activities: [
      'Blood typing and blood analysis',
      'Immunology investigations',
      'Antigen-antibody studies',
      'Clinical biochemistry techniques',
    ],
  },
  {
    icon: Leaf,
    label: 'Environmental Sciences',
    activities: [
      'Environmental sample analysis',
      'Food decomposition studies',
      'Biological observation and data collection',
    ],
  },
  {
    icon: Atom,
    label: 'Physics & Engineering',
    activities: ['Mechanics experiments', 'Circuit construction and testing', 'Electromagnetism investigations'],
  },
  {
    icon: ChartLine,
    label: 'Research Methods & Data Analysis',
    activities: [
      'Experimental design',
      'Hypothesis development and testing',
      'Statistical analysis',
      'Scientific reporting',
      'Data visualization',
    ],
  },
  {
    icon: Beaker,
    label: 'Chemistry',
    activities: [
      'Chemical reaction and stoichiometry experiments',
      'Acid-base titrations and pH analysis',
      'Solution preparation and concentration determination',
      'Thermochemistry and calorimetry investigations',
    ],
  },
]

function CourseworkAnswer() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-semibold tracking-wide text-brand-deep uppercase">
        Examples of laboratory activities
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {activityGroups.map((g) => (
          <li key={g.label} className="flex flex-col gap-3 rounded-xl border border-border bg-muted/40 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="flex size-7 items-center justify-center rounded-md bg-brand-deep text-white">
                <g.icon className="size-4" aria-hidden="true" />
              </span>
              {g.label}
            </p>
            <ul className="flex flex-col gap-1.5">
              {g.activities.map((a) => (
                <li key={a} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

const items = [
  { value: 'purpose', icon: ShieldCheck, q: 'Purposefully Designed for STEM Education', content: <PurposeBuiltAnswer /> },
  { value: 'flexible', icon: Blocks, q: 'Flexible by Design', content: <FlexibleAnswer /> },
  { value: 'cohort', icon: Users, q: 'Small-Cohort Learning', content: <CohortAnswer /> },
  { value: 'coursework', icon: Microscope, q: 'Real STEM Coursework, Not Simulations', content: <CourseworkAnswer /> },
]

export function TalkingPoints() {
  return (
    <section id="talking-points" aria-labelledby="talking-points-title" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="talking-points-title"
              eyebrow="Key Messages"
              title="Key messages & talking points"
              description="Approved answers to the questions partners ask most often. Use them in calls, emails, and site visits."
            />
          </div>
        </div>
        <div className="lg:col-span-8">
          <Accordion defaultValue={['purpose']} className="flex flex-col gap-4">
            {items.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="rounded-2xl border border-border bg-white px-6 shadow-sm not-last:border-b"
              >
                <AccordionTrigger className="items-center gap-4 py-5 text-base font-semibold text-foreground hover:no-underline md:text-lg">
                  <span className="flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-brand">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
