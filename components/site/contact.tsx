'use client'

import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from './reveal'
import { Eyebrow } from './section-heading'

const details = [
  { icon: Phone, label: 'Phone', value: '+971 4 000 0000', href: 'tel:+97140000000' },
  { icon: Mail, label: 'Email', value: 'hello@absolutecreation.com', href: 'mailto:hello@absolutecreation.com' },
  { icon: MapPin, label: 'Office', value: 'Level 18, One Central Tower, Dubai, UAE' },
  { icon: Clock, label: 'Hours', value: 'Sun – Thu · 9:00 AM – 6:00 PM' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: info */}
          <div>
            <Reveal>
              <Eyebrow>Get In Touch</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.08] tracking-tight md:text-5xl">
                Let&apos;s discuss your next space.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Share a few details and our team will be in touch within one business day to explore
                how we can bring your vision to life.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={0.15 + i * 0.06}>
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-gold">
                      <d.icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {d.label}
                      </div>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="mt-1 block font-medium text-foreground transition-colors hover:text-gold"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <div className="mt-1 font-medium text-foreground">{d.value}</div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-10 h-56 overflow-hidden rounded-sm border border-border grayscale">
                <iframe
                  title="Absolute Creation office location"
                  src="https://www.google.com/maps?q=Dubai%20One%20Central&output=embed"
                  className="size-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-sm border border-border bg-secondary p-8 md:p-10">
              {submitted ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-gold text-gold-foreground">
                    <Check className="size-7" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-medium">Thank you</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Your enquiry has been received. Our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" placeholder="Your name" />
                    <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone" name="phone" placeholder="+971 ..." required={false} />
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-sm font-medium text-foreground">
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="h-12 rounded-sm border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-gold"
                      >
                        <option>Interior Design</option>
                        <option>Fit-Out Solutions</option>
                        <option>Architecture</option>
                        <option>Construction</option>
                        <option>Renovation</option>
                        <option>Turnkey Solutions</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project..."
                      className="resize-none rounded-sm border border-border bg-background p-4 text-sm outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-sm border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-gold"
      />
    </div>
  )
}
