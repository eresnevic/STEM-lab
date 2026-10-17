import {
  Blocks,
  Droplets,
  LayoutGrid,
  Presentation,
  ShieldPlus,
  Zap,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const facilities = [
  { icon: Droplets, label: 'Laboratory sinks and water access' },
  { icon: Zap, label: 'Laboratory-grade electrical infrastructure' },
  { icon: Blocks, label: 'Modular laboratory workstations' },
  { icon: LayoutGrid, label: 'Flexible room configurations' },
  { icon: ShieldPlus, label: 'Safety equipment and instructional infrastructure' },
  { icon: Presentation, label: 'Demonstration and teaching areas' },
]

const design = [
  { label: 'Target capacity', value: '16 students + 1 instructor' },
  { label: 'Maximum capacity', value: '24 students + 1 instructor' },
  { label: 'Learning model', value: 'Designed for small-cohort learning' },
  { label: 'Workspace', value: 'Flexible workspace configurations' },
  {
    label: 'Building systems',
    value: 'Ceiling and utility systems designed to support laboratory operations and instructional needs',
  },
]

export function LabSpecs() {
  return (
    <section id="lab-specs" aria-labelledby="lab-specs-title" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="lab-specs-title"
          eyebrow="Lab Specs"
          title="Facility highlights & specifications"
          description="Our laboratories are designed as electric-only laboratory environments with laboratory-grade power infrastructure."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold tracking-wide text-brand-deep uppercase">Facilities include</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {facilities.map((f) => (
                <li key={f.label} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold tracking-wide text-brand-deep uppercase">
              Laboratory design considerations
            </h3>
            <dl className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              {design.map((d) => (
                <div key={d.label} className="flex flex-col gap-1 px-6 py-4">
                  <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{d.label}</dt>
                  <dd className="text-sm font-medium text-foreground">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
