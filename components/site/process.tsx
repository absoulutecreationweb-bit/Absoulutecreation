'use client'

import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { ArrowUpRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'We listen closely to understand your vision, lifestyle and ambitions for the space.',
  },
  {
    number: '02',
    title: 'Planning',
    desc: 'Detailed scoping, budgeting and timelines built around your priorities.',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'Concepts, 3D visuals and material selections refined until every detail is right.',
  },
  {
    number: '04',
    title: 'Execution',
    desc: 'Expert craftsmen and rigorous management bring the design flawlessly to life.',
  },
  {
    number: '05',
    title: 'Delivery',
    desc: 'A meticulous final handover of a turnkey space, ready to be lived in and loved.',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Process"
          title="Five deliberate steps to extraordinary."
          description="A refined, transparent methodology that removes friction and delivers certainty at every stage."
        />

        <a
          href="/process"
          className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          See how we work
          <span className="flex size-9 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-black">
            <ArrowUpRight className="size-4" />
          </span>
        </a>

        <div className="relative mt-20">
          {/* Connecting line sits exactly through the centre of each
              64px (size-16) circle, so it reads as one continuous
              timeline instead of a line floating above the numbers. */}
          <div
            className="absolute left-[6.5%] right-[6.5%] top-8 hidden h-px bg-gradient-to-r from-border via-gold/40 to-border lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="group relative flex flex-col items-start text-left">
                  <div className="relative z-10 mb-6 flex size-16 shrink-0 items-center justify-center rounded-full border border-border bg-background font-serif text-lg font-medium text-gold shadow-[0_10px_24px_rgba(17,17,17,0.06)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-gold group-hover:shadow-[0_16px_32px_rgba(201,168,106,0.25)]">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[22ch] text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}