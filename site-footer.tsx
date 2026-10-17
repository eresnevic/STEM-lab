import { FlaskConical, Mail, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-brand text-white">
              <FlaskConical className="size-5" aria-hidden="true" />
            </span>
            <span className="font-bold text-foreground">CEA CAPA</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Global STEM Labs: Internal Sales Enablement &amp; Program Toolkit.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Institutional Support</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-brand" aria-hidden="true" />
              <a href="mailto:pdi@ceacapa.com" className="hover:text-brand-deep">pdi@ceacapa.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-brand" aria-hidden="true" />
              <a href="tel:+18002664441" className="hover:text-brand-deep">800.266.4441</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Lab Hubs</h2>
          <p className="mt-3 text-sm text-muted-foreground">Dublin, Ireland · Madrid, Spain · Barcelona, Spain</p>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground md:px-6">
          © 2026 CEA CAPA Education Abroad. For internal use only.
        </p>
      </div>
    </footer>
  )
}
