'use client'

import { ArrowRight } from 'lucide-react'
import { useState, type SVGProps } from 'react'

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-9h4v1.5" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Interior Design', href: '#services' },
      { label: 'Fit-Out Solutions', href: '#services' },
      { label: 'Architecture', href: '#services' },
      { label: 'Turnkey Solutions', href: '#services' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { label: 'Residential', href: '#projects' },
      { label: 'Commercial', href: '#projects' },
      { label: 'Hospitality', href: '#projects' },
      { label: 'Corporate', href: '#projects' },
    ],
  },
]

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <a href="#top" className="flex flex-col leading-none" aria-label="Absolute Creation">
              <span className="font-serif text-2xl font-medium tracking-tight">Absolute</span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-gold">
                Creation
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/60">
              A world-class design and construction house crafting extraordinary residential and
              commercial spaces across the globe.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubscribed(true)
              }}
              className="mt-8"
            >
              <label htmlFor="newsletter" className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                Newsletter
              </label>
              {subscribed ? (
                <p className="mt-3 text-sm text-gold">Thank you for subscribing.</p>
              ) : (
                <div className="mt-3 flex items-center border-b border-primary-foreground/25 focus-within:border-gold">
                  <input
                    id="newsletter"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-primary-foreground/40"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex size-9 items-center justify-center text-gold transition-transform hover:translate-x-1"
                  >
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              )}
            </form>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-primary-foreground/15 pt-8 sm:flex-row">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Absolute Creation. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
