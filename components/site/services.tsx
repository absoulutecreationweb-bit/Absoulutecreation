'use client'

import {
  Sofa,
  Hammer,
  Compass,
  Building2,
  Paintbrush,
  ClipboardList,
  KeyRound,
  ArrowUpRight,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, StaggerItem } from './reveal'

const services = [
  {
    icon: Sofa,
    title: 'Interior Design',
    desc: 'Bespoke interiors that balance beauty, function and atmosphere for every space.',
  },
  {
    icon: Hammer,
    title: 'Fit-Out Solutions',
    desc: 'Full-scope commercial and residential fit-outs delivered to exacting standards.',
  },
  {
    icon: Compass,
    title: 'Architecture',
    desc: 'Considered architectural design rooted in context, light and enduring form.',
  },
  {
    icon: Building2,
    title: 'Construction',
    desc: 'Precision-led construction management from foundation to finishing.',
  },
  {
    icon: Paintbrush,
    title: 'Renovation',
    desc: 'Reimagining existing spaces with sensitivity, craft and modern luxury.',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    desc: 'Seamless coordination that keeps every milestone on time and on budget.',
  },
  {
    icon: KeyRound,
    title: 'Turnkey Solutions',
    desc: 'One partner, complete delivery — ready to occupy and impeccably finished.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="A complete spectrum of design & build expertise."
          />
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Every discipline under one roof — so your vision moves from first concept to final
            handover without compromise.
          </p>
        </div>

        <StaggerGroup className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <article className="group relative flex h-full flex-col justify-between gap-10 bg-background p-8 transition-colors duration-500 hover:bg-primary md:p-10">
                <div className="flex items-start justify-between">
                  <span className="flex size-14 items-center justify-center rounded-sm bg-secondary text-foreground transition-colors duration-500 group-hover:bg-gold group-hover:text-gold-foreground">
                    <s.icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <ArrowUpRight className="size-6 text-muted-foreground opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-foreground transition-colors duration-500 group-hover:text-primary-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/70">
                    {s.desc}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
          <StaggerItem>
            <article className="flex h-full flex-col justify-between gap-10 bg-gold p-8 text-gold-foreground md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                Let&apos;s collaborate
              </span>
              <div>
                <h3 className="font-serif text-2xl font-medium">Have a project in mind?</h3>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
                >
                  Get in touch
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  )
}
