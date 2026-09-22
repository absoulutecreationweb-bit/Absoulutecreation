import { Brands } from '@/components/site/brands'
import { PageFrame } from '@/components/site/page-frame'
import { Projects } from '@/components/site/projects'
import { Testimonials } from '@/components/site/testimonials'

export default function ProjectsPage() {
  return (
    <PageFrame>
      <Projects />
      <Testimonials />
      <Brands />
    </PageFrame>
  )
}
