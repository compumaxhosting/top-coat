import React from 'react'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Terrazzo Flooring Services in Wayne NJ | Complete Guide',
  description:
    'Explore terrazzo flooring services in Wayne & North Jersey. Learn costs, benefits, installation, and expert tips for long-lasting floors.',
  keywords: [
    'Terrazzo Flooring Services in Wayne NJ',
    'Terrazzo flooring North Jersey',
    'Terrazzo floor installation Wayne NJ',
    'Polished terrazzo floors NJ',
    'Commercial terrazzo flooring NJ',
    'Terrazzo repair and restoration NJ',
    'Epoxy terrazzo flooring services',
    'Cost of terrazzo flooring NJ',
    'Terrazzo contractors near Wayne NJ',
    'Custom terrazzo designs NJ',
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Top Coat LLC',
  url: 'https://www.topcoat-llc.com/',
  telephone: '+1-201-315-2633',
  email: 'Almahairi@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '108 Fairfield Rd',
    addressLocality: 'Wayne',
    addressRegion: 'NJ',
    postalCode: '07470',
    addressCountry: 'US',
  },
}

export default function TerrazzoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD injected for SEO; safe to render as a string
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main>
        {children}
      </main>
    </>
  )
}
