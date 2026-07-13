const brands = [
  'MERIDIAN',
  'ATELIER NOIR',
  'AURELIA',
  'VERTEX GROUP',
  'STONEHOUSE',
  'LUMEN & CO',
  'THE ARIA',
  'MONARCH',
]

export function Brands() {
  return (
    <section className="border-y border-border bg-background py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by leading brands & developers
        </p>
        <div className="marquee-pause relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
            aria-hidden="true"
          />
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="shrink-0 font-serif text-2xl font-medium tracking-wide text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
