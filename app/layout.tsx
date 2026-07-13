import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Fraunces } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const siteUrl = 'https://absolutecreation.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Absolute Creation | Luxury Interior Design, Fit-Out & Construction',
    template: '%s | Absolute Creation',
  },
  description:
    'Absolute Creation is a premium design and construction company delivering world-class interior design, fit-out, architecture, renovation and turnkey solutions for high-end residential and commercial spaces.',
  keywords: [
    'interior design',
    'fit-out solutions',
    'architecture',
    'construction',
    'renovation',
    'project management',
    'turnkey solutions',
    'luxury design',
  ],
  authors: [{ name: 'Absolute Creation' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Absolute Creation | Luxury Design & Construction',
    description:
      'World-class interior design, fit-out, architecture and construction for high-end residential and commercial clients.',
    siteName: 'Absolute Creation',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Absolute Creation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Absolute Creation | Luxury Design & Construction',
    description:
      'World-class interior design, fit-out, architecture and construction for high-end residential and commercial clients.',
    images: ['/images/hero.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Absolute Creation',
  url: siteUrl,
  description:
    'Premium interior design, fit-out, architecture and construction company for high-end residential and commercial spaces.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Level 18, One Central Tower',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-4-000-0000',
    contactType: 'customer service',
    email: 'hello@absolutecreation.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${manrope.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
