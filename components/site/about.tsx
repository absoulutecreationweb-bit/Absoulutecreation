'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import { Reveal } from './reveal'
import { Eyebrow } from './section-heading'

const pillars = [
  {
    title: 'Crafted for Impact',
    body: 'Every project is shaped around story, atmosphere and the precise needs of the client.',
  },
  {
    title: 'Delivered with Precision',
    body: 'From concept through installation, our process remains thoughtful, transparent and rigorous.',
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
        <div ref={ref} className="relative order-2 h-[460px] md:h-[600px] lg:order-1">
          <motion.div
            style={{ y: y1 }}
            className="absolute left-0 top-0 h-[70%] w-[68%] overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/new/2.jpeg"
              alt="Refined interior and exhibition environment by Absolute Creation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-0 right-0 h-[62%] w-[52%] overflow-hidden rounded-[2rem] border-8 border-background shadow-2xl shadow-black/10"
          >
            <Image
              src="/new/4.jpeg"
              alt="Luxury exhibition detailing with elevated material finish"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>
          <div className="absolute -left-4 bottom-8 z-10 flex flex-col items-center justify-center rounded-[1.2rem] bg-gold px-7 py-6 text-gold-foreground shadow-xl">
            <span className="font-serif text-4xl font-medium leading-none">15+</span>
            <span className="mt-1 text-center text-[0.65rem] font-semibold uppercase tracking-[0.15em]">
              Years of
              <br /> Excellence
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>About Absolute Creation</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.08] tracking-tight md:text-5xl">
              Transforming bold ideas into enduring environments.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Absolute Creation is a premium design and production company creating immersive interiors,
              exhibition environments, retail experiences and brand-led spaces for international clients.
              We transform concepts into reality through thoughtful design, precision fabrication and
              professional execution.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.1}>
                <div className="rounded-[1.25rem] border border-border/70 bg-secondary/70 p-6">
                  <h3 className="font-serif text-xl font-medium text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-border/70 bg-secondary/70 p-4 shadow-[0_18px_45px_rgba(17,17,17,0.05)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                <Image
                  src="/new/7.jpeg"
                  alt="Featured project by Absolute Creation"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                  Featured Project
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
