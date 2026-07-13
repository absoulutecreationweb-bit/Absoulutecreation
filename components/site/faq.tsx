'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: 'What types of projects do you take on?',
    a: 'We work across high-end residential and commercial spaces — from private villas and penthouses to hotels, offices and retail environments. If it demands exceptional design and build quality, it is right for us.',
  },
  {
    q: 'Do you offer turnkey solutions?',
    a: 'Yes. We manage the entire journey under one roof — design, architecture, fit-out and construction — so you receive a fully finished, ready-to-occupy space with a single point of accountability.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary with scope, but we provide a detailed schedule during the planning phase and manage the project rigorously to honour every milestone we commit to.',
  },
  {
    q: 'Can you work with an existing architect or designer?',
    a: 'Absolutely. We frequently collaborate with external consultants and are happy to integrate into your existing team while bringing our execution expertise to the table.',
  },
  {
    q: 'Which regions do you operate in?',
    a: 'We are headquartered in Dubai and deliver projects across the GCC and internationally, sourcing premium materials and specialist trades from around the world.',
  },
]

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-serif text-lg font-medium text-foreground md:text-xl">{faq.q}</span>
        <span
          className={
            'flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 ' +
            (isOpen ? 'rotate-45 bg-gold text-gold-foreground' : 'text-foreground')
          }
        >
          <Plus className="size-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pr-12 text-pretty leading-relaxed text-muted-foreground">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          description="Everything you need to know before starting your project with Absolute Creation."
        />
        <div>
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
