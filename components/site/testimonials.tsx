'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { SectionHeading } from './section-heading'

const testimonials = [
  {
    quote:
      'Absolute Creation brought our vision to life with remarkable clarity and discipline. The finished environment feels elevated, memorable and unmistakably aligned with our brand.',
    name: 'James Whitmore',
    role: 'Private Client, Dubai',
    image: '/new/12.jpeg',
  },
  {
    quote:
      'From the earliest concepts through installation, the team delivered with precision and confidence. Their execution elevated the entire experience for our guests.',
    name: 'Sophia Al-Rashid',
    role: 'Managing Director, Aria Hospitality',
    image: '/new/13.jpeg',
  },
  {
    quote:
      'A rare studio that blends exceptional creativity with rigorous project management. Every detail was considered and the result speaks for itself.',
    name: 'Richard Devereux',
    role: 'CEO, Vertex Group',
    image: '/new/14.jpeg',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const paginate = useCallback((d: number) => {
    setDir(d)
    setIndex((prev) => (prev + d + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const t = setInterval(() => paginate(1), 7000)
    return () => clearInterval(t)
  }, [paginate])

  const active = testimonials[index]

  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by those who expect the best."
          align="center"
        />

        <div className="relative mt-16 min-h-[300px]">
          <Quote className="mx-auto mb-8 size-12 text-gold" strokeWidth={1} />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <p className="text-balance font-serif text-2xl font-light leading-snug text-foreground md:text-3xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="relative size-14 overflow-hidden rounded-full">
                  <Image src={active.image} alt={active.name} fill sizes="56px" className="object-cover" loading="lazy" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-foreground">{active.name}</div>
                  <div className="text-sm text-muted-foreground">{active.role}</div>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="size-4" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  setDir(i > index ? 1 : -1)
                  setIndex(i)
                }}
                className={
                  'h-1.5 rounded-full transition-all duration-300 ' +
                  (i === index ? 'w-8 bg-gold' : 'w-1.5 bg-border')
                }
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
