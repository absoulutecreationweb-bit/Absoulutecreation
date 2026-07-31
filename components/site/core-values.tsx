'use client'

import { Lightbulb, Palette, Rocket, ShieldCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const values = [
  {
    icon: Palette,
    title: 'Creativity',
    description: 'Concept-led thinking shaped by storytelling, materiality and visual impact.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Progressive ideas and intelligent fabrication that elevate every experience.',
  },
  {
    icon: Rocket,
    title: 'Impact',
    description: 'Spaces designed to leave a lasting impression across retail, hospitality and events.',
  },
  {
    icon: ShieldCheck,
    title: 'Accountability',
    description: 'Disciplined delivery, seamless coordination and dependable execution at every stage.',
  },
]

export function CoreValues() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Core Values"
          title="Built on creativity, precision and accountable delivery."
          description="Every project is shaped by the principles that define how Absolute Creation works with clients and delivers at scale."
          align="center"
        />

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group h-full rounded-[1.75rem] border border-border/70 bg-secondary/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_60px_rgba(17,17,17,0.08)]">
                <span className="flex size-14 items-center justify-center rounded-full border border-border bg-background text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground">
                  <value.icon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-xl font-medium text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
