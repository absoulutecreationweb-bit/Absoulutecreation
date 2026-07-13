'use client'

import { Users, Gem, Clock, PenTool, Heart, Lightbulb } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const features = [
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Architects, designers and engineers with decades of combined mastery.',
  },
  {
    icon: Gem,
    title: 'Premium Quality',
    desc: 'Only the finest materials and finishes, sourced from across the globe.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Disciplined project management that respects every deadline and budget.',
  },
  {
    icon: PenTool,
    title: 'Modern Design',
    desc: 'Timeless aesthetics informed by the latest in global design thinking.',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    desc: 'A relationship-first approach that puts your vision at the centre.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    desc: 'Smart, sustainable and future-ready spaces built to perform.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The difference is in the detail."
          description="We combine international standards with a deeply personal approach — earning the trust of clients who accept nothing less than perfection."
          align="center"
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group h-full rounded-sm border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-black/5">
                <span className="flex size-14 items-center justify-center rounded-full border border-border text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground">
                  <f.icon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-xl font-medium">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
