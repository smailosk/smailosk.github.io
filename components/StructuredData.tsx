export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ismail Amor",
    "jobTitle": "Flutter Developer",
    "description": "Expert Flutter developer specializing in cross-platform mobile app development with 3+ years of experience",
    "url": "https://ismailamor.com",
    "image": "https://ismailamor.com/profile.png",
    "email": "contact@ismailamor.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dortmund",
      "addressRegion": "North Rhine-Westphalia",
      "addressCountry": "DE",
      "postalCode": "44135"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "Netherlands"
      },
      {
        "@type": "Country",
        "name": "Belgium"
      },
      {
        "@type": "Country",
        "name": "France"
      },
      {
        "@type": "Country",
        "name": "Switzerland"
      },
      {
        "@type": "Country",
        "name": "Austria"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Continent",
        "name": "Europe"
      }
    ],
    "availableLanguage": [
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "German",
        "alternateName": "de"
      },
      {
        "@type": "Language",
        "name": "French",
        "alternateName": "fr"
      },
      {
        "@type": "Language",
        "name": "Arabic",
        "alternateName": "ar"
      }
    ],
    "sameAs": [
      "https://github.com/smailosk",
      "https://linkedin.com/in/ismail-amor"
    ],
    "knowsAbout": [
      "Flutter Development",
      "Cross-Platform Mobile Apps",
      "iOS Development",
      "Android Development",
      "Dart Programming",
      "React.js",
      "Firebase",
      "Healthcare Apps",
      "Enterprise Mobile Solutions",
      "UI/UX Design",
      "Clean Architecture",
      "BLoC Pattern",
      "REST APIs",
      "Agile Development"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Technical University"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Famedly GmbH",
      "url": "https://famedly.com"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Flutter Software Engineer",
      "occupationLocation": {
        "@type": "City",
        "name": "Remote"
      },
      "estimatedSalary": {
        "@type": "MonetaryAmountDistribution",
        "currency": "EUR",
        "duration": "P1Y",
        "percentile10": "50000",
        "percentile50": "70000",
        "percentile90": "90000"
      }
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Flutter App Development Services",
        "description": "Professional Flutter development services for cross-platform mobile applications",
        "provider": {
          "@type": "Person",
          "name": "Ismail Amor"
        },
        "areaServed": [
          {
            "@type": "GeoShape",
            "name": "European Union",
            "address": "EU"
          },
          {
            "@type": "Country",
            "name": "Germany"
          },
          {
            "@type": "Country",
            "name": "Switzerland"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          }
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceLocation": {
            "@type": "Place",
            "name": "Remote & On-site in Germany"
          },
          "serviceUrl": "https://ismailamor.com",
          "availableLanguage": ["English", "German", "French"]
        },
        "priceRange": "€€ - €€€ (Competitive European rates)",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mobile Development Services",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Flutter App Development",
              "description": "Cross-platform mobile app development using Flutter"
            },
            {
              "@type": "Service",
              "name": "Mobile UI/UX Design",
              "description": "User interface and experience design for mobile applications"
            },
            {
              "@type": "Service",
              "name": "App Migration to Flutter",
              "description": "Migrate existing native apps to Flutter framework"
            },
            {
              "@type": "Service",
              "name": "Flutter Consultation",
              "description": "Expert consultation for Flutter projects and architecture"
            },
            {
              "@type": "Service",
              "name": "Healthcare App Development",
              "description": "Specialized healthcare and medical app development"
            }
          ]
        }
      }
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ismailamor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://ismailamor.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": "https://ismailamor.com/#projects"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://ismailamor.com/#contact"
      }
    ]
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ismail Amor - Flutter Developer Portfolio",
    "url": "https://ismailamor.com",
    "description": "Professional Flutter developer portfolio showcasing mobile app development projects and expertise",
    "publisher": {
      "@type": "Person",
      "name": "Ismail Amor"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ismailamor.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )
}