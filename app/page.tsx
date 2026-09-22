import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { Projects } from '@/components/site/projects'
import { WhyChooseUs } from '@/components/site/why-choose-us'
import { CoreValues } from '@/components/site/core-values'
import { Stats } from '@/components/site/stats'
import { Testimonials } from '@/components/site/testimonials'
import { Process } from '@/components/site/process'
import { Brands } from '@/components/site/brands'
import { Faq } from '@/components/site/faq'
import { CtaBanner } from '@/components/site/cta-banner'
import { Contact } from '@/components/site/contact'
import { PageFrame } from '@/components/site/page-frame'

export default function Page() {
  return (
    <PageFrame>
      <Hero />
      <About />
      <Services />
      <CoreValues />
      <Projects />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Process />
      <Brands />
      <Faq />
      <CtaBanner />
      <Contact />
    </PageFrame>
  )
}
