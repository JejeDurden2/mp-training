import { businessInfo, services, coaches } from '@/lib/data';

function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SportsActivityLocation', 'HealthAndBeautyBusiness'],
    '@id': 'https://www.mptraining.fr/#business',
    name: businessInfo.name,
    description:
      'Studio de coaching privé à Nice offrant personal training, petits groupes et préparation athlétique avec coachs diplômés STAPS.',
    url: 'https://www.mptraining.fr',
    telephone: businessInfo.phoneFormatted,
    email: businessInfo.email,
    image: 'https://www.mptraining.fr/images/A7401639.jpg',
    logo: 'https://www.mptraining.fr/images/logo.svg',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      postalCode: businessInfo.address.postalCode,
      addressRegion: businessInfo.address.region,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.address.coordinates.lat,
      longitude: businessInfo.address.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessInfo.seo.rating.toString(),
      reviewCount: businessInfo.seo.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [businessInfo.social.instagram].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de coaching sportif',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
        ...(service.pricing &&
          service.pricing.length > 0 && {
            price: service.pricing[0].price.replace('€', ''),
            priceCurrency: 'EUR',
          }),
      })),
    },
    employee: coaches.map((coach) => ({
      '@type': 'Person',
      '@id': `https://www.mptraining.fr/coachs/${coach.slug}`,
      name: coach.fullName,
      jobTitle: coach.title,
      description: coach.bio,
      image: `https://www.mptraining.fr${coach.image}`,
      worksFor: {
        '@id': 'https://www.mptraining.fr/#business',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'UFR STAPS Nice',
      },
      knowsAbout: coach.specialties,
    })),
  };
}

function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.mptraining.fr/#website',
    url: 'https://www.mptraining.fr',
    name: businessInfo.name,
    description:
      'Coaching privé à Nice avec Léo & Yann. Personal training, petits groupes, préparation athlétique.',
    publisher: {
      '@id': 'https://www.mptraining.fr/#business',
    },
    inLanguage: 'fr-FR',
  };
}

function generateBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.mptraining.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Le Studio',
        item: 'https://www.mptraining.fr/#studio',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Services',
        item: 'https://www.mptraining.fr/#services',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Coachs',
        item: 'https://www.mptraining.fr/#coachs',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: 'https://www.mptraining.fr/#contact',
      },
    ],
  };
}

export function JsonLd() {
  const schemas = [
    generateLocalBusinessSchema(),
    generateWebsiteSchema(),
    generateBreadcrumbSchema(),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
