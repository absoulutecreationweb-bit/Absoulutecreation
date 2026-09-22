import { CtaBanner } from '@/components/site/cta-banner'
import { Faq } from '@/components/site/faq'
import { PageFrame } from '@/components/site/page-frame'
import { Process } from '@/components/site/process'

export default function ProcessPage() {
  return (
    <PageFrame>
      <Process />
      <Faq />
      <CtaBanner />
    </PageFrame>
  )
}
