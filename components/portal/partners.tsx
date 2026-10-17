import { BookOpen, CalendarDays, Compass, FlaskConical, Lightbulb, MapPin, Palette, Quote } from 'lucide-react'
import { SectionHeading } from './section-heading'

const partners = ['Pace University', 'Wake Forest University', 'Cal Poly', 'Michigan State University']

const quotes = [
  "We've already been working with institutions including Pace University, Wake Forest University, Cal Poly, Michigan State University, and others to explore and develop STEM programming within these centers.",
  'Some conversations focus on adapting existing coursework. Others explore entirely new opportunities made possible by the laboratory infrastructure.',
  'We see these facilities less as a finished product and more as a platform for collaboration.',
]

const quickExamples = [
  { partner: 'Cal Poly', location: 'Barcelona', detail: 'Biology taught in Barcelona' },
  { partner: 'Purdue', location: 'Rome & Florence', detail: 'Engineering-focused programs' },
  { partner: 'Northeastern', location: 'Budapest', detail: 'Could be the "M" (mathematics) in STEM' },
]

export function Partners() {
  return (
    <section id="partners" aria-labelledby="partners-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="partners-title"
          eyebrow="Existing Partner Collaboration"
          title="This is not a future concept. Collaboration is already happening."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <ul className="grid grid-cols-2 gap-4 lg:col-span-5" aria-label="Institutions we are working with">
            {partners.map((name) => (
              <li
                key={name}
                className="flex min-h-24 items-center rounded-2xl border border-border bg-white p-5 font-semibold text-foreground shadow-sm"
              >
                {name}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-4 lg:col-span-7">
            {quotes.map((q) => (
              <li key={q} className="flex gap-3 rounded-2xl border-l-4 border-brand bg-accent p-5">
                <Quote className="mt-0.5 size-4 shrink-0 text-brand-deep" aria-hidden="true" />
                <p className="leading-relaxed text-accent-foreground">{`"${q}"`}</p>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mt-16 text-sm font-semibold tracking-wide text-brand-deep uppercase">
          Examples of STEM in action with our partners
        </h3>

        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {quickExamples.map((e) => (
            <li key={e.partner} className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-5 shadow-sm">
              <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                <MapPin className="size-3.5 text-brand" aria-hidden="true" />
                {e.location}
              </p>
              <p className="text-lg font-semibold text-foreground">{e.partner}</p>
              <p className="text-sm text-muted-foreground">{e.detail}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
            <div className="flex flex-col gap-3 bg-brand p-8 text-white">
              <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                Wake Forest University
              </span>
              <h4 className="font-serif text-2xl leading-tight font-semibold text-balance">
                Summer 2027 Chemistry Program
              </h4>
            </div>
            <div className="flex flex-1 flex-col gap-5 p-8">
              <p className="leading-relaxed text-muted-foreground">
                Students will work with dyes customized to the university&apos;s black-and-gold colors as they learn
                the science behind pigmentation and chemical processes. The activity combines hands-on STEM learning
                with school spirit, making it especially relevant for First-Year Experience programs focused on
                building connections, fostering belonging, and creating memorable campus experiences.
              </p>
              <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-border pt-5">
                {[
                  { icon: CalendarDays, label: 'Term', value: 'Summer 2027' },
                  { icon: FlaskConical, label: 'Discipline', value: 'Chemistry' },
                  { icon: Palette, label: 'Highlight', value: 'Black & gold dyes' },
                ].map((d) => (
                  <div key={d.label} className="flex flex-col gap-1">
                    <d.icon className="size-4 text-brand" aria-hidden="true" />
                    <dt className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                      {d.label}
                    </dt>
                    <dd className="text-sm font-semibold text-foreground">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
            <div className="flex flex-col gap-3 bg-brand-deep p-8 text-white">
              <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                Madrid, Spain
              </span>
              <h4 className="font-serif text-2xl leading-tight font-semibold text-balance">STEM Semester Program</h4>
            </div>
            <div className="flex flex-1 flex-col gap-5 p-8">
              <p className="leading-relaxed text-muted-foreground">
                Madrid offers a dynamic setting for STEM majors to complete degree requirements while engaging with
                the city&apos;s culture, history, and innovation through academically integrated experiences.
              </p>
              <div className="flex gap-3">
                <BookOpen className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Academic model: CEA CAPA-Taught Academics.</strong> Students
                  enroll in a full courseload of STEM classes—including calculus, biology, chemistry, and
                  physics—with lab space provided to meet program needs. All coursework is closed and taught
                  exclusively to the student group.
                </p>
              </div>
              <div className="flex gap-3">
                <Compass className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Active learning.</strong> Students complement their STEM
                  studies with a required course on Madrid that situates science and innovation within the broader
                  context of Spanish society. A day trip to Toledo deepens understanding of Spain&apos;s historical
                  contributions to science and philosophy, while visits to local museums and guest lectures help
                  students explore the intersection of culture, technology, and education. Throughout the semester,
                  community-building activities support peer connection and cultural immersion, reinforcing the
                  global dimensions of scientific study.
                </p>
              </div>
            </div>
          </article>
        </div>

        <aside className="mt-6 flex flex-col gap-4 rounded-3xl border border-brand/30 bg-accent p-8 md:flex-row md:items-center md:gap-6">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
            <Lightbulb className="size-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-brand">We want ideas</h3>
            <p className="mt-1 leading-relaxed text-accent-foreground">
              We built these facilities to support innovative STEM experiences abroad and welcome partner ideas. If
              there&apos;s a course, lab experience, or new opportunity you&apos;d like to explore, let&apos;s start
              the conversation.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
