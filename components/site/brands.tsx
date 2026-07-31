const brands = ['Ferrero Rocher', 'Nutella', 'BOH', 'Nongshim', 'ADIB', 'Snapchat']

export function Brands() {
  return (
    <section id="brands" className="border-y border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Selected client collaborations
        </p>
        <div className="marquee-pause relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-secondary/60 p-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-secondary/60 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-secondary/60 to-transparent" aria-hidden="true" />
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...brands, ...brands].map((brand, i) => (
              <span key={i} className="shrink-0 text-lg font-semibold uppercase tracking-[0.25em] text-muted-foreground/80 transition-colors hover:text-foreground">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
