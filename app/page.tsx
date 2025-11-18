// app/page.tsx
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import PracticeAreas from '@/components/PracticeAreas'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import QuoteSection from '@/components/QuoteSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import PageSEO from '@/components/PageSEO'

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Holland Law - Criminal Defense & Family Law Attorney',
  description: 'Expert legal counsel from Anna Holland. Criminal Defense, Family Law, Divorce Mediation. Serving Central Arkansas.',
  url: 'https://thehollandlaw.com',
  mainEntity: {
    '@type': 'LegalService',
    name: 'Holland Law Firm',
    areaServed: 'Central Arkansas'
  }
}

export default function Home() {
  return (
    <>
      <PageSEO
        title="Criminal Defense & Family Law Attorney in Sherwood, AR"
        description="Anna Holland provides expert criminal defense and family law representation in Sherwood, Arkansas. Free consultations available. Serving Pulaski, White, Lonoke, Faulkner, and Saline Counties."
        canonicalUrl="https://thehollandlaw.com"
        structuredData={homeStructuredData}
      />
      <Header />
      <main>
        <HeroSection />
        <QuoteSection />
        <PracticeAreas />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}