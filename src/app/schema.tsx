import Script from 'next/script';

export default function SchemaOrg() {
  const baseUrl = "https://mptraining.fr";

  // Schema principal : LocalBusiness + SportsActivityLocation
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation", "HealthAndBeautyBusiness"],
    "@id": `${baseUrl}/#organization`,
    "name": "MP Training Nice",
    "alternateName": "MP Training",
    "description": "Studio de coaching sportif privé à Nice. Personal training individuel, cours small group et préparation physique avec des coachs diplômés STAPS.",
    "url": baseUrl,
    "telephone": "+33627683343",
    "email": "contact@mptraining.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20 Rue Théodore de Banville",
      "addressLocality": "Nice",
      "postalCode": "06100",
      "addressRegion": "Provence-Alpes-Côte d'Azur",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7055,
      "longitude": 7.2615
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "priceRange": "€€",
    "image": [
      `${baseUrl}/opengraph-image.jpg`,
      `${baseUrl}/images/room1.jpeg`,
      `${baseUrl}/images/room2.jpeg`
    ],
    "logo": `${baseUrl}/images/logo.svg`,
    "sameAs": [
      "https://www.instagram.com/mptraining_nice/"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Nice",
      "sameAs": "https://fr.wikipedia.org/wiki/Nice"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de coaching sportif",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${baseUrl}/#personal-training`,
            "name": "Personal Training",
            "description": "Séance individuelle de 60 minutes avec votre coach dédié. Programme personnalisé, suivi de progression et conseils nutritionnels pour des résultats optimaux.",
            "provider": { "@id": `${baseUrl}/#organization` },
            "areaServed": "Nice"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${baseUrl}/#small-group`,
            "name": "Small Group Training",
            "description": "Entraînement en petit groupe (4 personnes max) combinant renforcement musculaire et cardio. L'énergie du collectif avec l'attention d'un coaching personnalisé.",
            "provider": { "@id": `${baseUrl}/#organization` },
            "areaServed": "Nice"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${baseUrl}/#preparation-physique`,
            "name": "Préparation Physique",
            "description": "Programme sur mesure pour sportifs amateurs ou confirmés. Optimisez vos performances et prévenez les blessures avec un suivi professionnel.",
            "provider": { "@id": `${baseUrl}/#organization` },
            "areaServed": "Nice"
          }
        }
      ]
    },
    "employee": [
      { "@id": `${baseUrl}/#leo-paulet-volpini` },
      { "@id": `${baseUrl}/#yann-massyn` }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Schema pour les coachs
  const coachLeoSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#leo-paulet-volpini`,
    "name": "Léo Paulet-Volpini",
    "jobTitle": "Coach Sportif Diplômé",
    "description": "Coach sportif diplômé de l'UFR STAPS Nice et préparateur physique. Spécialisé en personal training et transformation physique.",
    "image": `${baseUrl}/images/Leo.jpeg`,
    "worksFor": { "@id": `${baseUrl}/#organization` },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "UFR STAPS Nice"
    },
    "knowsAbout": ["Personal Training", "Préparation Physique", "Basketball", "Renforcement Musculaire"]
  };

  const coachYannSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#yann-massyn`,
    "name": "Yann Massyn",
    "jobTitle": "Coach Sportif Diplômé",
    "description": "Vice-Champion du Monde IRONMAN 25-29 ans et triathlète longue distance. Diplômé de l'UFR STAPS Nice.",
    "image": `${baseUrl}/images/Yann.jpeg`,
    "worksFor": { "@id": `${baseUrl}/#organization` },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "UFR STAPS Nice"
    },
    "award": "Vice-Champion du Monde IRONMAN 25-29 ans",
    "knowsAbout": ["Triathlon", "Endurance", "Préparation Physique", "IRONMAN"]
  };

  // Schema WebSite pour le moteur de recherche
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "MP Training Nice",
    "description": "Studio de coaching sportif privé à Nice",
    "publisher": { "@id": `${baseUrl}/#organization` },
    "inLanguage": "fr-FR"
  };

  // Schema BreadcrumbList pour la navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Le Studio",
        "item": `${baseUrl}/#studio`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": `${baseUrl}/#services`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Coachs",
        "item": `${baseUrl}/#coachs`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": `${baseUrl}/#contact`
      }
    ]
  };

  // Combiner tous les schemas
  const schemas = [
    localBusinessSchema,
    coachLeoSchema,
    coachYannSchema,
    websiteSchema,
    breadcrumbSchema
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`schema-${index}`}
          id={`schema-org-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
