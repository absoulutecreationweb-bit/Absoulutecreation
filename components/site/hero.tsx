'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { MagneticButton } from './magnetic-button'
import { ArrowRight, ArrowDown } from 'lucide-react'

const easeOut = [0.22, 1, 0.36, 1] as const
const heroSlides = ['/new/1.jpeg', '/new/2.jpeg', '/new/3.jpeg', '/new/4.jpeg', '/new/5.jpeg', '/new/6.jpeg']
const heroHighlights = ['Luxury Interiors', 'Exhibition Systems', 'Brand Environments']

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  // Pushed darker on both ends — busy exhibition photos need a heavier,
  // more consistent wash so the text always reads cleanly on top.
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.75, 0.92])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-black">
      <div className="absolute inset-0">
        {heroSlides.map((src, index) => (
          <motion.div
            key={src}
            initial={false}
            animate={{
              opacity: index === activeIndex ? 1 : 0,
              scale: index === activeIndex ? 1.06 : 1,
            }}
            transition={{ opacity: { duration: 1.4, ease: easeOut }, scale: { duration: 6, ease: 'linear' } }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt="Luxury exhibition and interior experience by Absolute Creation"
              fill
              priority={index === 0}
              sizes="100vw"
              loading={index === 0 ? 'eager' : 'lazy'}
              // Muting brightness/saturation/contrast tones down busy booth
              // photography (logos, screens, signage) so it reads as a
              // backdrop, not competing visual noise.
              className="object-cover [filter:brightness(0.62)_saturate(0.75)_contrast(1.02)]"
            />
          </motion.div>
        ))}
      </div>

      {/* Primary dark wash — heavier and more even than before */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,4,0.78)_0%,rgba(4,4,4,0.55)_38%,rgba(4,4,4,0.72)_70%,rgba(4,4,4,0.92)_100%)]"
        aria-hidden="true"
      />

      {/* Center focus vignette — darkens edges, keeps a clean pocket for text */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(65% 55% at 50% 42%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,168,106,0.14),transparent_35%)]"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: easeOut }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-center backdrop-blur-md"
        >
          <span className="h-px w-8 bg-gold" />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-zinc-100">
            Interior · Exhibition · Brand Experience
          </span>
        </motion.div>

        <div className="max-w-5xl text-center">
          <h1 className="font-serif text-5xl font-light leading-[0.96] tracking-[-0.02em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            <span className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 1.4, duration: 0.9, ease: easeOut }}
              >
                Crafting timeless
              </motion.span>
            </span>
            <span className="mt-2 block overflow-hidden text-gold sm:mt-3">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 1.55, duration: 0.9, ease: easeOut }}
              >
                spaces with intention.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: easeOut }}
            className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-zinc-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] md:text-lg"
          >
            We transform ideas into exceptional interiors, exhibitions and brand environments with
            precise design, refined craftsmanship and intelligent delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          >
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/25 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-zinc-200/90 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease: easeOut }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#projects" variant="gold">
            Discover Our Work
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton
            href="#contact"
            variant="outline"
            className="border-white/25 text-white hover:border-gold hover:text-gold"
          >
            Start a Project
          </MagneticButton>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((_, index) => (
          <span
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activeIndex ? 'w-8 bg-gold' : 'w-1.5 bg-white/50'
            }`}
          />
        ))}
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-background/70"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}