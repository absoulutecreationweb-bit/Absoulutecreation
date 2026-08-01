'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
            <a
              href="#top"
              className="flex items-center"
              aria-label="Absolute Creation home"
            >
              <Image
                src="/new/Abouslute logo newpdf.png"
                alt="Absolute Creation"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'group relative text-sm font-medium tracking-wide transition-colors',
                    scrolled
                      ? 'text-muted-foreground hover:text-foreground'
                      : 'text-background/80 hover:text-background',
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className={cn(
              'hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 lg:inline-flex',
              scrolled
                ? 'bg-primary text-primary-foreground hover:bg-gold hover:text-gold-foreground'
                : 'bg-background text-foreground hover:bg-gold hover:text-gold-foreground',
            )}
          >
            Start a Project
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={cn(
              'inline-flex size-11 items-center justify-center rounded-full transition-colors lg:hidden',
              scrolled ? 'text-foreground' : 'text-background',
            )}
          >
            <Menu className="size-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-primary text-primary-foreground lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <span className="font-serif text-xl">Absolute Creation</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-11 items-center justify-center rounded-full"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="border-b border-primary-foreground/10 py-5 font-serif text-3xl font-light"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-medium text-gold-foreground"
              >
                Start a Project
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
