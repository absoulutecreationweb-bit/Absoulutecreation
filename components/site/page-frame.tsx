import { Footer } from './footer'
import { Navbar } from './navbar'
import { FloatingButtons, Preloader, ScrollProgress } from './site-chrome'

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111111] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,106,0.18),transparent_38%)]" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="max-w-2xl text-center">
          <p className="mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.46em] text-[#C9A86A]">
            Website Under Construction
          </p>
          <h1 className="font-serif text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl">
            Something exceptional is coming soon.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            We are currently building a refined new experience for our clients. Please check back soon.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white/70">
            <span className="h-px w-10 bg-[#C9A86A]" />
            Absolute Creation
            <span className="h-px w-10 bg-[#C9A86A]" />
          </div>
        </div>
      </div>

      <div className="sr-only">
        {children}
      </div>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <Footer />
      <FloatingButtons />
    </div>
  )
}
