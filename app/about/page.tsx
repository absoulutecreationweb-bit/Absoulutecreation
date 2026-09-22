import { About } from '@/components/site/about'
import { CoreValues } from '@/components/site/core-values'
import { PageFrame } from '@/components/site/page-frame'
import { Stats } from '@/components/site/stats'
import { WhyChooseUs } from '@/components/site/why-choose-us'

export default function AboutPage() {
  return (
    <PageFrame>
      <About />
      <WhyChooseUs />
      <CoreValues />
      <Stats />
    </PageFrame>
  )
}
