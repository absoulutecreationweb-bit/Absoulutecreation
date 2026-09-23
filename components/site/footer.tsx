'use client'

import { Mail, MapPin, Phone, Send } from 'lucide-react'
import Image from 'next/image'
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

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 16.1V7.9l6.5 4.1-6.5 4.1Z" />
    </svg>
  )
}

const socials = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="border-t border-border bg-secondary text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.75fr_1.45fr_1.2fr] lg:gap-10">
          <div className="max-w-sm">
            <a href="/" aria-label="Absolute Creation">
              <Image src="/new/Abouslute logo newpdf.png" alt="Absolute Creation" width={220} height={70} className="h-auto w-52 object-contain object-left" />
            </a>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium retail fit-outs and theming solutions for Dubai and beyond.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl">Links</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Services', '/services'],
                ['Interior Fit-Outs', '/services'],
                ['Theming Solutions', '/services'],
                ['Contact us', '/contact'],
              ].map(([label, href]) => (
                <li key={label}><a href={href} className="transition-colors hover:text-foreground">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl">Contact Us</h3>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <a href="tel:+971581750224" className="flex items-center gap-3 hover:text-foreground"><Phone className="size-4 shrink-0" />+971 58 175 0224</a>
              <a href="tel:+971581750224" className="flex items-center gap-3 hover:text-foreground"><Phone className="size-4 shrink-0" />+971 58 175 0224</a>
              <a href="mailto:info@naamcreations.com" className="flex items-center gap-3 hover:text-foreground"><Mail className="size-4 shrink-0" />accounts@theabsolutecreation.com</a>
              <p className="flex items-start gap-3 leading-relaxed"><MapPin className="mt-0.5 size-4 shrink-0" />Behind Times square - 4 B ST - Al Quoz Industrial Area 1 - Dubai, UAE</p>
            </div>
          </div>

          <div className="max-w-md">
            <h3 className="font-serif text-xl">Subscribe our Newsletter</h3>
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true) }} className="mt-6">
              {subscribed ? (
                <p className="text-sm text-gold">Thank you for subscribing.</p>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input id="newsletter" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="h-11 min-w-0 flex-1 border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground" />
                  <button type="submit" className="inline-flex h-11 items-center justify-center gap-2 bg-gold px-7 text-sm font-medium text-gold-foreground transition-colors hover:bg-primary hover:text-primary-foreground"><Send className="size-4" />Submit</button>
                </div>
              )}
            </form>
            <h3 className="mt-7 font-serif text-xl">Follow Us</h3>
            <div className="mt-5 flex items-center gap-5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="text-foreground transition-colors hover:text-gold"><s.icon className="size-5" /></a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Absolute Creation. All rights reserved.</p>
          <div className="flex gap-6"><a href="#" className="hover:text-foreground">Privacy Policy</a><a href="#" className="hover:text-foreground">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  )
}
