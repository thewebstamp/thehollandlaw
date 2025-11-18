// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Poppins, Poetsen_One } from 'next/font/google'
import './globals.css'

// Load fonts from Google Fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})

const poetsen = Poetsen_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poetsen',
  weight: ['400'],
})

const baseUrl = 'https://thehollandlaw.com'

export const metadata: Metadata = {
  title: {
    default: 'Holland Law | Criminal Defense & Family Law Attorney in Sherwood, AR',
    template: '%s | Holland Law | Sherwood Arkansas Attorney'
  },
  description: 'Expert legal counsel from Anna Holland. Criminal Defense, Family Law, Divorce Mediation. Serving Pulaski, White, Lonoke, Faulkner, and Saline Counties. Free consultations available.',
  keywords: [
    'criminal defense attorney',
    'family law attorney',
    'divorce lawyer',
    'Sherwood Arkansas lawyer',
    'DUI defense',
    'child custody attorney',
    'Arkansas criminal lawyer',
    'Pulaski County attorney',
    'White County lawyer',
    'Lonoke County legal services',
    'Faulkner County attorney',
    'Saline County lawyer',
    'divorce mediation',
    'probation revocation',
    'child support',
    'domestic violence defense',
    'drug charges defense',
    'theft defense attorney'
  ].join(', '),
  authors: [{ name: 'Anna Holland' }],
  creator: 'Anna Holland',
  publisher: 'Holland Law Firm',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Holland Law Firm',
    title: 'Holland Law | Criminal Defense & Family Law Attorney in Sherwood, AR',
    description: 'Expert legal counsel from Anna Holland. Criminal Defense, Family Law, Divorce Mediation. Serving Central Arkansas with compassionate representation.',
    images: [
      {
        url: '/justice.jpg',
        width: 1200,
        height: 630,
        alt: 'Holland Law - Justice and Legal Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holland Law | Criminal Defense & Family Law Attorney',
    description: 'Expert legal counsel from Anna Holland. Serving Central Arkansas with compassionate representation.',
    creator: '@HollandLawAR',
    images: ['/justice.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-verification-code',
  },
  category: 'legal services',
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Holland Law Firm',
  description: 'Criminal Defense and Family Law Attorney serving Central Arkansas',
  url: baseUrl,
  telephone: '+1-501-690-5500',
  email: 'anna@thehollandlaw.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2120 East Kiehl Ave',
    addressLocality: 'Sherwood',
    addressRegion: 'AR',
    postalCode: '72120',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '34.8346',
    longitude: '-92.2246'
  },
  areaServed: ['Pulaski County AR', 'White County AR', 'Lonoke County AR', 'Faulkner County AR', 'Saline County AR', 'Cleburne County AR'],
  serviceType: [
    'Criminal Defense',
    'Family Law',
    'Divorce',
    'Child Custody',
    'DUI Defense',
    'Probation Matters'
  ],
  openingHours: 'Mo,Tu,We,Th,Fr 09:00-17:00',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00'
    }
  ],
  priceRange: '$$',
  sameAs: [
    'https://web.facebook.com/thehollandlaw'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${poetsen.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}