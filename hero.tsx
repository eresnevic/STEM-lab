import Image from 'next/image'
import { ArrowRight, Download, MapPin, Quote } from 'lucide-react'

const hubs = [
  { city: 'Dublin', country: 'Ireland', image: '/images/lab-dublin.png' },
  { city: 'Madrid', country: 'Spain', image: '/images/lab-madrid.png' },
  { city: 'Barcelona', country: 'Spain', image: '/images/lab-barcelona.png' },
]

const stats = [
  { value: '3', label: 'Purpose-built lab locations' },
  { value: '16+1', label: 'Target capacity per lab' },
  { value: '24+1', label: 'Maximum capacity' },
  { value: '6', label: 'STEM discipline areas' },
]

export function Hero() {
  return (
    <section
      id="elevator-pitch"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/60 to-white"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-20 md:px-6 lg:grid-cols-12 lg:gap-10 lg:pt-24">
        <div className="flex flex-col gap-6 lg:col-span-6 lg:pt-2">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-deep px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
            Internal Sales Enablement Toolkit
          </span>
          <h1
            id="hero-title"
            className="font-serif text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-brand md:text-6xl"
          >
            Purpose-Built STEM Laboratories Abroad.
          </h1>

          <figure className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 shadow-sm">
            <figcaption className="flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-deep uppercase">
              <Quote className="size-4" aria-hidden="true" />
              30-Second Elevator Pitch
            </figcaption>
            <blockquote className="text-base leading-relaxed text-pretty text-foreground md:text-lg">
              {
                '"In our efforts to help institutions create access to education abroad for underserved STEM students, CEA CAPA has invested in purpose-built laboratory facilities in Dublin, Madrid, and Barcelona that were developed in consultation with architects, safety experts, and academic partners. Designed for small-cohort, hands-on learning, these modular spaces support a wide range of STEM disciplines and can be adapted to meet institution-specific curriculum needs and new program ideas."'
              }
            </blockquote>
          </figure>

          <div className="flex flex-wrap gap-3">
            <a
              href="#talking-points"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-deep px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#005f72]"
            >
              View Talking Points
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="/cea-capa-stem-lab-partner-kit.pdf"
              download="CEA-CAPA-STEM-Lab-Partner-Kit.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand-deep"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Full Partner Kit
            </a>
          </div>

          <dl className="mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 bg-white p-4">
                <dt className="order-2 text-xs leading-snug text-muted-foreground">{s.label}</dt>
                <dd className="order-1 font-serif text-2xl font-semibold text-brand-deep">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <ul className="grid h-full grid-cols-2 grid-rows-2 gap-4" aria-label="Lab locations">
            {hubs.map((hub, i) => (
              <li
                key={hub.city}
                className={
                  i === 0
                    ? 'group relative col-span-2 min-h-56 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm'
                    : 'group relative min-h-48 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm'
                }
              >
                <Image
                  src={hub.image}
                  alt={`CEA CAPA STEM laboratory in ${hub.city}`}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a33]/80 via-[#0f2a33]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="flex items-center gap-1.5 text-lg font-semibold text-white">
                    <MapPin className="size-4" aria-hidden="true" />
                    {hub.city}
                  </p>
                  <p className="text-xs text-white/80">{hub.country}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
