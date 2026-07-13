'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Reveal } from './reveal'
import { Eyebrow } from './section-heading'

const pillars = [
  {
    title: 'Our Mission',
    body: 'To transform ambitious visions into extraordinary spaces through uncompromising craftsmanship and detail.',
  },
  {
    title: 'Our Vision',
    body: 'To be the most trusted name in luxury design and construction across residential and commercial landscapes.',
  },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['12%', '-6%'])

  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Images */}
        <div ref={ref} className="relative order-2 h-[460px] md:h-[600px] lg:order-1">
          <motion.div
            style={{ y: y1 }}
            className="absolute left-0 top-0 h-[70%] w-[68%] overflow-hidden rounded-sm"
          >
            <img
              src="/images/about.png"
              alt="Signature Absolute Creation lounge interior"
              className="size-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-0 right-0 h-[62%] w-[52%] overflow-hidden rounded-sm border-8 border-background shadow-2xl shadow-black/10"
          >
            <img
              src="/images/about-2.png"
              alt="Architectural staircase detail with brass railing"
              className="size-full object-cover"
            />
          </motion.div>
          <div className="absolute -left-4 bottom-8 z-10 flex flex-col items-center justify-center rounded-sm bg-gold px-7 py-6 text-gold-foreground shadow-xl">
            <span className="font-serif text-4xl font-medium leading-none">15+</span>
            <span className="mt-1 text-center text-[0.65rem] font-semibold uppercase tracking-[0.15em]">
              Years of
              <br /> Excellence
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>About Absolute Creation</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.08] tracking-tight md:text-5xl">
              A studio built on precision, passion and permanence.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Absolute Creation is an international design and construction house crafting refined
              environments for those who expect the exceptional. From concept sketches to the final
              handover, every project is guided by a singular obsession with quality and a deep
              respect for the way people live and work.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.1}>
                <div className="border-l border-gold/50 pl-5">
                  <h3 className="font-serif text-xl font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-8 text-sm text-muted-foreground">
              {['Award-winning design team', 'Turnkey delivery', 'Global material sourcing'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-gold" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
