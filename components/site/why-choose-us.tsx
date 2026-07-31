'use client'

import { Layers3, Users, BadgeCheck, Clock3 } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const features = [
  {
    icon: Layers3,
    title: 'End-to-End Solutions',
    desc: 'A single point of accountability from concept strategy to final installation.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'A multidisciplinary team with deep expertise in interiors, exhibitions and complex delivery.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Craftsmanship',
    desc: 'Material selection, detailing and finishing are approached with uncompromising care.',
  },
  {
    icon: Clock3,
    title: 'Reliable Project Management',
    desc: 'Clarity, coordination and accountability keep each milestone on track.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A trusted partner for refined execution."
          description="We combine international standards, large-scale capability and disciplined delivery to create environments that feel premium, enduring and unmistakably crafted."
          align="center"
        />

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group h-full rounded-[1.75rem] border border-border/70 bg-gradient-to-br from-white to-secondary/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_60px_rgba(17,17,17,0.08)]">
                <span className="flex size-14 items-center justify-center rounded-full border border-border text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground">
                  <f.icon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-xl font-medium text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
