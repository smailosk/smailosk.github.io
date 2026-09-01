export default function StructuredData() {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ismail Amor',
    jobTitle: 'Flutter Software Engineer',
    description: 'Flutter engineer building secure, maintainable mobile products for iOS and Android',
    url: 'https://ismailamor.com',
    image: 'https://ismailamor.com/profile.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dortmund',
      addressCountry: 'DE',
    },
    areaServed: {
      '@type': 'Continent',
      name: 'Europe',
    },
    availableLanguage: ['English', 'German', 'French', 'Arabic'],
    sameAs: [
      'https://github.com/smailosk',
      'https://linkedin.com/in/ismail-amor',
    ],
    knowsAbout: [
      'Flutter',
      'Dart',
      'Cross-platform mobile applications',
      'Clean Architecture',
      'BLoC',
      'Matrix protocol',
      'Healthcare software',
      'UI/UX design',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Famedly GmbH',
      url: 'https://famedly.com',
    },
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ismail Amor — Flutter Engineer',
    url: 'https://ismailamor.com',
    description: 'Selected mobile product work, professional experience, and contact details for Flutter engineer Ismail Amor.',
    publisher: {
      '@type': 'Person',
      name: 'Ismail Amor',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )
}
