'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 480, suffix: '+', label: 'Projects Completed' },
  { value: 320, suffix: '+', label: 'Happy Clients' },
  { value: 65, suffix: '', label: 'Team Members' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={
                'flex flex-col items-center text-center lg:items-start lg:text-left ' +
                (i !== 0 ? 'lg:border-l lg:border-primary-foreground/15 lg:pl-10' : '')
              }
            >
              <span className="font-serif text-5xl font-light tracking-tight text-gold md:text-6xl lg:text-7xl">
                <Counter target={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground/70">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
