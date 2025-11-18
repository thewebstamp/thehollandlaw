// app/contact/page.tsx
import Header from '@/components/Header'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import HeroSec from '@/components/HeroSec'
import FAQSection from '@/components/FAQSection'
import PageSEO from '@/components/PageSEO'

const contactStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Holland Law - Sherwood Arkansas Attorney',
  description: 'Contact Anna Holland for expert legal representation in criminal defense and family law matters. Free consultations available.',
  url: 'https://thehollandlaw.com/contact'
}

export default function ContactPage() {
  return (
    <>
      <PageSEO
        title="Contact Holland Law - Free Consultation Available"
        description="Contact Anna Holland for compassionate legal representation. Available 24/7 for emergencies. Serving Pulaski, White, Lonoke, Faulkner, and Saline Counties."
        canonicalUrl="https://thehollandlaw.com/contact"
        structuredData={contactStructuredData}
      />
      <Header />
      <main>
        <HeroSec
          title="Contact Us"
          subtitle="Ready to Help"
          description="Get in touch with our legal team for compassionate guidance and expert representation."
        />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}