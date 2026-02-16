import { businessInfo, faqItems, services } from '@/lib/data';
import type { CoachingPageData } from '@/lib/data/types';

interface CoachingJsonLdProps {
  page: CoachingPageData;
}

function generateServiceSchema(page: CoachingPageData) {
  const serviceData =
    page.pageType === 'service'
      ? services.find((s) => s.id === page.serviceId)
      : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.seo.h1,
    description: page.seo.description,
    url: `https://mptraining.fr/coaching/${page.slug}`,
    provider: {
      '@id': 'https://mptraining.fr/#business',
    },
    areaServed: {
      '@type': 'City',
      name: 'Nice',
      '@id': 'https://www.wikidata.org/wiki/Q33959',
    },
    ...(serviceData?.pricing &&
      serviceData.pricing.length > 0 && {
        offers: {
          '@type': 'Offer',
          price: serviceData.pricing[0].price.replace('€', ''),
          priceCurrency: 'EUR',
        },
      }),
    ...(page.pageType === 'persona' && {
      audience: {
        '@type': 'PeopleAudience',
        audienceType: page.persona.name,
      },
    }),
    serviceType: page.pageType === 'service'
      ? serviceData?.name ?? page.seo.h1
      : page.persona.name,
  };
}

function generateBreadcrumbSchema(page: CoachingPageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://mptraining.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Coaching',
        item: 'https://mptraining.fr/coaching',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.seo.h1,
        item: `https://mptraining.fr/coaching/${page.slug}`,
      },
    ],
  };
}

function generateFAQSchema(page: CoachingPageData) {
  const selectedFaqs = page.relevantFaqIndices.map((i) => faqItems[i]).filter(Boolean);

  if (selectedFaqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: selectedFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function CoachingJsonLd({ page }: CoachingJsonLdProps) {
  const schemas = [
    generateServiceSchema(page),
    generateBreadcrumbSchema(page),
    generateFAQSchema(page),
  ].filter(Boolean);

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
