'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { MagneticButton } from './magnetic-button'
import { Reveal } from './reveal'

export function CtaBanner() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <img
          src="/images/cta.png"
          alt="Dramatic luxury interior by Absolute Creation"
          className="size-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center text-primary-foreground md:py-36 lg:px-10">
        <Reveal>
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Let&apos;s Begin
            <span className="h-px w-8 bg-gold" />
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Let&apos;s build something extraordinary.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-primary-foreground/75 md:text-lg">
            Whether it&apos;s a private residence or a landmark commercial space, our team is ready
            to bring your most ambitious ideas to life.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10">
            <MagneticButton href="#contact" variant="gold">
              Start Your Project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
