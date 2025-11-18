// app/about/page.tsx
import Header from '@/components/Header'
import AboutSection from '@/components/AboutSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'
import HeroSec from '@/components/HeroSec'
import FAQSection from '@/components/FAQSection'
import PageSEO from '@/components/PageSEO'

const aboutStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Anna Holland - Holland Law Firm',
  description: 'Learn about Anna Holland\'s journey to justice and her commitment to compassionate legal representation in Central Arkansas.',
  url: 'https://thehollandlaw.com/about',
  mainEntity: {
    '@type': 'Person',
    name: 'Anna Holland',
    jobTitle: 'Attorney at Law',
    description: 'Criminal Defense and Family Law Attorney serving Central Arkansas since 2014.',
    alumniOf: 'UALR Bowen School of Law',
    knowsAbout: ['Criminal Law', 'Family Law', 'Divorce', 'Child Custody', 'DUI Defense']
  }
}

export default function AboutPage() {
  return (
    <>
      <PageSEO
        title="About Anna Holland - Experienced Arkansas Attorney"
        description="Meet Anna Holland, experienced criminal defense and family law attorney serving Central Arkansas since 2014. Learn about her journey and commitment to justice."
        canonicalUrl="https://thehollandlaw.com/about"
        structuredData={aboutStructuredData}
      />
      <Header />
      <main>
        <HeroSec
          title="About Holland Law"
          subtitle="Our Journey to Justice"
          description="Discover the story behind our commitment to compassionate legal representation and client-focused service."
        />
        <AboutSection />
        <WhyChooseUs />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}