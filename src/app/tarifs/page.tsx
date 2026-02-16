import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, Footer } from '@/components/layout';
import { Section, SectionHeader } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { PhoneCallButton } from '@/components/ui/PhoneCallButton';
import { PricingSection } from '@/components/coaching';
import { FAQSection } from '@/components/coaching';
import { services, faqItems, businessInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Tarifs Coaching Sportif Nice | Prix & Formules | MP Training',
  description:
    'Découvrez nos tarifs de coaching sportif à Nice : personal training dès 45€/séance, duo training dès 30€/pers., small groups dès 20€/séance. Coachs diplômés STAPS, nutrition incluse.',
  keywords: [
    'tarif coach sportif Nice',
    'prix coaching sportif Nice',
    'tarif personal training Nice',
    'prix coach personnel Nice',
    'tarif salle de sport privée Nice',
    'coaching sportif prix',
    'personal training tarif',
    'duo training prix Nice',
    'small group training tarif Nice',
    'préparation physique prix Nice',
  ],
  openGraph: {
    title: 'Tarifs Coaching Sportif Nice | MP Training',
    description:
      'Personal training dès 45€/séance, duo training dès 30€/pers., small groups dès 20€/séance. Coachs diplômés STAPS à Nice.',
    url: 'https://mptraining.fr/tarifs',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://mptraining.fr/tarifs',
  },
};

const advantages = [
  {
    icon: 'apple',
    title: 'Nutrition incluse',
    description: 'Conseils nutritionnels personnalisés inclus dans chaque formule de personal training.',
  },
  {
    icon: 'graduation-cap',
    title: 'Coachs diplômés STAPS',
    description: 'Deux coachs certifiés avec plus de 8 ans d\'expérience chacun.',
  },
  {
    icon: 'lock',
    title: 'Studio 100% privé',
    description: 'Espace de 80m² entièrement dédié à votre séance. Pas d\'attente, pas de partage.',
  },
  {
    icon: 'trending-up',
    title: 'Suivi personnalisé',
    description: 'Programme adapté à vos objectifs avec suivi de progression régulier.',
  },
];

function TarifsJsonLd(): React.ReactElement {
  const serviceOffers = services.map((service) => {
    const prices = service.pricing?.map((p) => parseFloat(p.price.replace('€', ''))) ?? [];
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return {
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@id': 'https://mptraining.fr/#business',
      },
      areaServed: {
        '@type': 'City',
        name: 'Nice',
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: minPrice,
        highPrice: maxPrice,
        priceCurrency: 'EUR',
        offerCount: service.pricing?.length ?? 0,
      },
    };
  });

  const breadcrumbSchema = {
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
        name: 'Tarifs',
        item: 'https://mptraining.fr/tarifs',
      },
    ],
  };

  const pricingFaqs = [0, 3].map((i) => faqItems[i]).filter(Boolean);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@graph': serviceOffers,
    },
    breadcrumbSchema,
    faqSchema,
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

export default function TarifsPage(): React.ReactElement {
  return (
    <>
      <TarifsJsonLd />
      <Navigation />

      <main>
        {/* Hero */}
        <Section className="pt-32">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 font-body text-sm text-mp-white/50">
              <li>
                <Link href="/" className="transition-colors hover:text-mp-neon">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-mp-white/30">/</li>
              <li>
                <span className="text-mp-white/70">Tarifs</span>
              </li>
            </ol>
          </nav>

          <SectionHeader
            eyebrow="Tarifs"
            title="Nos Tarifs"
            description="Des tarifs clairs et transparents pour un coaching sportif d'excellence à Nice. Packages avantageux pour un suivi régulier."
            centered
          />
        </Section>

        {/* Pricing Grid */}
        <PricingSection
          serviceIds={services.map((s) => s.id)}
          showAllFeatures
        />

        {/* Advantages */}
        <Section>
          <SectionHeader
            eyebrow="Inclus"
            title="Ce qui est inclus"
            description="Chaque formule vous donne accès à un accompagnement complet pour maximiser vos résultats."
            centered
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <GlassCard key={advantage.title} padding="md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-mp-neon/10">
                  <NeonIcon name={advantage.icon} size={20} />
                </div>
                <h3 className="mb-2 font-heading text-base uppercase tracking-wider text-mp-white">
                  {advantage.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-mp-white/60">
                  {advantage.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <FAQSection faqIndices={[0, 3]} />

        {/* CTA */}
        <Section>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-3xl uppercase tracking-wider text-mp-white md:text-4xl">
              Prêt à commencer ?
            </h2>
            <p className="mb-8 font-body text-mp-white/60">
              Contactez-nous pour un premier échange gratuit et sans engagement. Nous définirons ensemble la formule la plus adaptée à vos objectifs.
            </p>
            <PhoneCallButton variant="primary" size="lg">
              Nous contacter
            </PhoneCallButton>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
