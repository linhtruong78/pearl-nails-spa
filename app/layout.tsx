import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pearl Nails & Spa | Nail Salon in Calgary, AB',
  description:
    "Calgary's premier nail salon. Expert manicures, pedicures, nail art & waxing in SW Calgary. Walk-ins welcome. Book your appointment today.",
  keywords: ['nail salon Calgary', 'manicure Calgary', 'pedicure Calgary', 'nail art Calgary', 'Pearl Nails Spa'],
  openGraph: {
    title: 'Pearl Nails & Spa | Nail Salon in Calgary, AB',
    description: 'Expert manicures, pedicures, nail art & waxing in SW Calgary. Walk-ins welcome.',
    url: 'https://pearlnailsspa.ca',
    siteName: 'Pearl Nails & Spa',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website',
  },
  metadataBase: new URL('https://pearlnailsspa.ca'),
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  name: 'Pearl Nails & Spa',
  url: 'https://pearlnailsspa.ca',
  telephone: '(403) 242-8402',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 Springborough Blvd SW #142',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    postalCode: 'T3H 0N9',
    addressCountry: 'CA',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/pearl_nailsspa/',
    'https://www.facebook.com/PearlNailsandSpaLtd',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
