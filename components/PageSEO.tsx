// components/PageSEO.tsx
import Head from 'next/head'

interface PageSEOProps {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
  structuredData?: any
}

export default function PageSEO({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage = '/justice.jpg',
  structuredData 
}: PageSEOProps) {
  const fullTitle = `${title} | Holland Law | Sherwood Arkansas Attorney`
  
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Anna Holland" />
        
        {/* Structured Data */}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}
      </Head>
    </>
  )
}