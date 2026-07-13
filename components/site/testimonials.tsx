'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { SectionHeading } from './section-heading'

const testimonials = [
  {
    quote:
      'Absolute Creation transformed our penthouse beyond anything we imagined. The attention to detail, the materials, the finish — every element feels intentional and utterly luxurious.',
    name: 'James Whitmore',
    role: 'Private Client, Downtown Dubai',
    image: '/images/client-1.png',
  },
  {
    quote:
      'From the first concept meeting to handover, the process was seamless. They delivered a world-class hotel fit-out on time and elevated our entire brand experience.',
    name: 'Sophia Al-Rashid',
    role: 'Managing Director, Aria Hospitality',
    image: '/images/client-2.png',
  },
  {
    quote:
      'A rare partner that combines genuine creativity with flawless execution. Our headquarters now reflects exactly who we are. I would recommend them without hesitation.',
    name: 'Richard Devereux',
    role: 'CEO, Vertex Group',
    image: '/images/client-3.png',
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
                <img
                  src={active.image || '/placeholder.svg'}
                  alt={active.name}
                  className="size-14 rounded-full object-cover"
                  loading="lazy"
                />
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
