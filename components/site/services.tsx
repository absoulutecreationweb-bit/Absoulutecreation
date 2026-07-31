'use client'

import { Building2, PanelsTopLeft, Sparkles, PartyPopper, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const services = [
  {
    icon: PanelsTopLeft,
    title: 'Exhibition & Kiosks',
    desc: 'Immersive brand spaces and visitor experiences designed to captivate and convert.',
    image: '/new/8.jpeg',
  },
  {
    icon: Building2,
    title: 'Interior & Fit-Out',
    desc: 'Elegant interior environments and full fit-out delivery with lasting material impact.',
    image: '/new/9.jpeg',
  },
  {
    icon: Sparkles,
    title: 'Sculpture & Theming',
    desc: 'Detailed sculptural elements and thematic installations that bring character to life.',
    image: '/new/10.jpeg',
  },
  {
    icon: PartyPopper,
    title: 'Events & Activations',
    desc: 'Refined event environments and activations crafted for memorable, high-touch moments.',
    image: '/new/11.jpeg',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="What We Do" title="Premium environments crafted with precision and impact." />
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            From concept and design through fabrication, production and installation, we deliver
            distinctive environments for exhibitions, interiors and brand experiences.
          </p>
        </div>

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <article className="group relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-[1.75rem] border border-border/70 bg-background/85 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_60px_rgba(17,17,17,0.08)] md:p-10">
                <div className="absolute inset-0">
                  <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" className="object-cover opacity-0 transition duration-700 group-hover:opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/40" />
                </div>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="flex size-14 items-center justify-center rounded-[1rem] bg-secondary text-foreground transition-colors duration-500 group-hover:bg-gold group-hover:text-gold-foreground">
                    <s.icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <ArrowUpRight className="size-6 text-muted-foreground opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-medium text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
