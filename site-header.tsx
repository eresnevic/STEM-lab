'use client'

import { useState } from 'react'
import { Download, FlaskConical, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#elevator-pitch', label: 'Elevator Pitch' },
  { href: '#core-narrative', label: 'Core Narrative' },
  { href: '#talking-points', label: 'Talking Points' },
  { href: '#course-review', label: 'Course Review' },
  { href: '#partners', label: 'Partners' },
  { href: '#lab-specs', label: 'Lab Specs' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:px-6">
        <a href="#elevator-pitch" className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
            <FlaskConical className="size-5" aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-foreground">CEA CAPA</span>
            <span className="truncate text-xs text-muted-foreground">
              Global STEM Infrastructure Hub
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-brand-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/cea-capa-stem-lab-partner-kit.pdf"
            download="CEA-CAPA-STEM-Lab-Partner-Kit.pdf"
            className="hidden items-center gap-2 rounded-lg bg-brand-deep px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#005f72] sm:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Full Partner Kit
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a
                href="/cea-capa-stem-lab-partner-kit.pdf"
                download="CEA-CAPA-STEM-Lab-Partner-Kit.pdf"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-deep px-4 py-2.5 text-sm font-semibold text-white"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Full Partner Kit
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
