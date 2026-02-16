import { businessInfo, services, coaches, faqItems, testimonials } from '@/lib/data';

function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SportsActivityLocation', 'HealthAndBeautyBusiness'],
    '@id': 'https://mptraining.fr/#business',
    name: businessInfo.name,
    description:
      'Studio de coaching privé à Nice offrant personal training, petits groupes et préparation athlétique avec coachs diplômés STAPS.',
    url: 'https://mptraining.fr',
    telephone: businessInfo.phoneFormatted,
    email: businessInfo.email,
    image: 'https://mptraining.fr/images/A7401639.jpg',
    logo: 'https://mptraining.fr/images/logo.svg',
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
      '@id': `https://mptraining.fr/coachs/${coach.slug}`,
      name: coach.fullName,
      jobTitle: coach.title,
      description: coach.bio,
      image: `https://mptraining.fr${coach.image}`,
      worksFor: {
        '@id': 'https://mptraining.fr/#business',
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
    '@id': 'https://mptraining.fr/#website',
    url: 'https://mptraining.fr',
    name: businessInfo.name,
    description:
      'Coaching privé à Nice avec Léo & Yann. Personal training, petits groupes, préparation athlétique.',
    publisher: {
      '@id': 'https://mptraining.fr/#business',
    },
    inLanguage: 'fr-FR',
  };
}

function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

function generateReviewSchema() {
  return testimonials.map((testimonial) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@id': 'https://mptraining.fr/#business',
    },
    author: {
      '@type': 'Person',
      name: testimonial.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: testimonial.text,
    datePublished: testimonial.date,
  }));
}

export function JsonLd() {
  const schemas = [
    generateLocalBusinessSchema(),
    generateWebsiteSchema(),
    generateFAQSchema(),
    ...generateReviewSchema(),
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
