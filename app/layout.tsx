import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://absoulutecreation.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Absolute Creation | Luxury Interiors, Exhibitions & Brand Experiences',
    template: '%s | Absolute Creation',
  },
  description:
    'Absolute Creation creates premium interiors, exhibitions and experiential environments with thoughtful design, precise delivery and lasting impact.',
  keywords: [
    'interior design',
    'exhibition design',
    'fit-out solutions',
    'brand experience',
    'events activation',
    'luxury design',
    'project management',
  ],
  authors: [{ name: 'Absolute Creation' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Absolute Creation | Luxury Interiors & Exhibitions',
    description:
      'Premium interior, exhibition and brand experience design delivered with refined craftsmanship and precision.',
    siteName: 'Absolute Creation',
    images: [{ url: '/new/1.jpeg', width: 1200, height: 630, alt: 'Absolute Creation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Absolute Creation | Luxury Interiors & Exhibitions',
    description:
      'Premium interior, exhibition and brand experience design delivered with refined craftsmanship and precision.',
    images: ['/new/1.jpeg'],
  },
  generator: 'next.js',
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
    telephone: '+971581750224',
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
    <html lang="en" className={`bg-background ${inter.className}`}>
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
