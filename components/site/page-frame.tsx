import { Footer } from './footer'
import { Navbar } from './navbar'
import { FloatingButtons, Preloader, ScrollProgress } from './site-chrome'

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
