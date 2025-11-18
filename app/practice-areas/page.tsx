// app/practice-areas/page.tsx
import Header from '@/components/Header'
import PracticeAreas from '@/components/PracticeAreas'
import Footer from '@/components/Footer'
import HeroSec from '@/components/HeroSec'
import FAQSection from '@/components/FAQSection'
import PageSEO from '@/components/PageSEO'

const practiceAreasStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Legal Practice Areas - Holland Law',
  description: 'Criminal Defense and Family Law services offered by Holland Law in Central Arkansas.',
  url: 'https://thehollandlaw.com/practice-areas',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Criminal Defense',
        description: 'Felony and misdemeanor defense, DUI, probation matters, and criminal appeals.'
      }
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Family Law',
        description: 'Divorce, child custody, child support, adoption, and family mediation services.'
      }
    }
  ]
}

export default function PracticeAreasPage() {
  return (
    <>
      <PageSEO
        title="Legal Practice Areas - Criminal Defense & Family Law"
        description="Comprehensive legal services including criminal defense, family law, divorce, child custody, DUI defense, and probation matters in Central Arkansas."
        canonicalUrl="https://thehollandlaw.com/practice-areas"
        structuredData={practiceAreasStructuredData}
      />
      <Header />
      <main>
        <HeroSec
          title="Practice Areas"
          subtitle="Expert Legal Services"
          description="Comprehensive legal representation in criminal defense and family law matters throughout Arkansas."
        />
        <PracticeAreas />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}