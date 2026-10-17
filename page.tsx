import { SiteHeader } from '@/components/portal/site-header'
import { Hero } from '@/components/portal/hero'
import { CoreNarrative } from '@/components/portal/core-narrative'
import { TalkingPoints } from '@/components/portal/talking-points'
import { ReviewProcess } from '@/components/portal/review-process'
import { Partners } from '@/components/portal/partners'
import { LabSpecs } from '@/components/portal/lab-specs'
import { SiteFooter } from '@/components/portal/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CoreNarrative />
        <TalkingPoints />
        <ReviewProcess />
        <Partners />
        <LabSpecs />
      </main>
      <SiteFooter />
    </>
  )
}
