'use client'

import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

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

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <div className="mb-6 flex items-center gap-4 lg:block">
                    <span className="relative z-10 flex size-16 items-center justify-center rounded-full border border-border bg-background font-serif text-lg font-medium text-gold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
