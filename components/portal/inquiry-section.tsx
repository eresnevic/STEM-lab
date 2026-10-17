'use client'

import { useActionState } from 'react'
import { CheckCircle2, FileText, Loader2, Mail, Send } from 'lucide-react'
import { submitInquiry, type InquiryState } from '@/app/actions'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const initialState: InquiryState = { status: 'idle', message: '' }

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="text-xs text-destructive">
      {message}
    </p>
  )
}

export function InquirySection() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState)
  const errors = state.errors ?? {}

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid overflow-hidden rounded-3xl border border-border bg-white shadow-sm lg:grid-cols-5">
          <div className="flex flex-col gap-6 bg-[#0f2a33] p-8 text-white md:p-12 lg:col-span-2">
            <span className="w-fit rounded-full bg-brand-deep px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              Partner Inquiry
            </span>
            <h2 id="contact-title" className="font-serif text-3xl leading-tight font-semibold text-balance md:text-4xl">
              {"Let's Build Your Program"}
            </h2>
            <p className="leading-relaxed text-white/80">
              Share your course idea or syllabus with our academic team. We&apos;ll run it through our
              review process and send the full partner kit.
            </p>
            <ul className="mt-auto flex flex-col gap-4 border-t border-white/15 pt-6 text-sm">
              <li className="flex items-start gap-3">
                <FileText className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                <a
                  href="/cea-capa-stem-lab-partner-kit.pdf"
                  download="CEA-CAPA-STEM-Lab-Partner-Kit.pdf"
                  className="text-white/85 underline decoration-white/40 underline-offset-4 hover:text-white"
                >
                  Download the full partner kit (PDF)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-white/85">
                  Learn more:{' '}
                  <a href="mailto:pdi@ceacapa.com" className="underline decoration-white/40 underline-offset-4 hover:text-white">
                    pdi@ceacapa.com
                  </a>{' '}
                  or{' '}
                  <a href="tel:+18002664441" className="underline decoration-white/40 underline-offset-4 hover:text-white">
                    800.266.4441
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="p-8 md:p-12 lg:col-span-3">
            {state.status === 'success' ? (
              <div role="status" className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 className="size-12 text-brand" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-foreground">Inquiry received</h3>
                <p className="max-w-md text-muted-foreground">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-5" noValidate>
                <h3 className="text-lg font-semibold text-foreground">
                  Share Your Course Idea or Syllabus with Our Academic Team
                </h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby="name-error" className="h-11" />
                    <FieldError id="name-error" message={errors.name} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby="email-error" className="h-11" />
                    <FieldError id="email-error" message={errors.email} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="institution">Institution</Label>
                    <Input id="institution" name="institution" autoComplete="organization" required aria-invalid={!!errors.institution} aria-describedby="institution-error" className="h-11" />
                    <FieldError id="institution-error" message={errors.institution} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="discipline">Discipline</Label>
                    <select
                      id="discipline"
                      name="discipline"
                      defaultValue="Chemistry"
                      className="h-11 rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      {['Life Sciences', 'Health & Biomedical Sciences', 'Environmental Sciences', 'Physics & Engineering', 'Research Methods', 'Chemistry', 'Other'].map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Course idea or syllabus summary</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Course title, preferred term and location, cohort size, and key lab activities..."
                    aria-invalid={!!errors.message}
                    aria-describedby="message-error"
                  />
                  <FieldError id="message-error" message={errors.message} />
                </div>
                {state.status === 'error' ? (
                  <p role="alert" className="text-sm text-destructive">{state.message}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-deep px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#005f72] disabled:opacity-60 sm:w-fit"
                >
                  {pending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
                  {pending ? 'Sending...' : 'Send to Academic Team'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
