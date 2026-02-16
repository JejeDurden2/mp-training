import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, Footer } from '@/components/layout';
import { Section, SectionHeader } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { PhoneCallButton } from '@/components/ui/PhoneCallButton';
import { Breadcrumbs } from '@/components/coaching/Breadcrumbs';
import { services } from '@/lib/data';
import { servicePages } from '@/lib/data/service-pages';
import { personaPages } from '@/lib/data/personas';
import { ChevronRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coaching Sportif à Nice | Services & Programmes | MP Training',
  description:
    'Découvrez tous nos services de coaching sportif à Nice : personal training, duo training, small groups, préparation athlétique. Programmes par objectif avec coachs diplômés STAPS.',
  keywords: [
    'coaching sportif nice',
    'coach sportif nice',
    'programme coaching nice',
    'personal training nice',
  ],
  openGraph: {
    title: 'Coaching Sportif à Nice | Services & Programmes | MP Training',
    description:
      'Tous nos services de coaching sportif à Nice avec coachs diplômés STAPS. Personal training, duo, small groups, préparation athlétique.',
    url: 'https://mptraining.fr/coaching',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://mptraining.fr/coaching',
  },
};

const personaIcons: Record<string, string> = {
  'perte-de-poids': 'trending-down',
  'prise-de-masse': 'dumbbell',
  debutant: 'book-open',
  'preparation-ironman': 'trophy',
  'remise-en-forme': 'zap',
  'coaching-femme': 'heart',
  senior: 'shield',
  'sportif-amateur': 'activity',
};

const breadcrumbJsonLd = {
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
  ],
};

export default function CoachingHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pb-16 pt-32">
          <div className="container-custom">
            <Breadcrumbs pageName="Tous nos programmes" />

            <h1 className="mb-6 max-w-3xl font-heading text-h1-mobile md:text-h1 uppercase text-mp-white">
              Coaching Sportif à Nice
            </h1>
            <p className="max-w-2xl font-body text-base md:text-body-lg text-mp-white/80">
              Découvrez tous nos services de coaching et programmes par objectif. Quel que soit votre
              niveau ou votre ambition, nos coachs diplômés STAPS vous accompagnent dans notre studio
              privé de Nice.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <Section>
          <SectionHeader
            eyebrow="Nos Services"
            title="Formules de Coaching"
            description="Choisissez la formule qui correspond à vos besoins et votre budget."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {servicePages.map((sp) => {
              const service = services.find((s) => s.id === sp.serviceId);
              if (!service) return null;

              return (
                <Link key={sp.slug} href={`/coaching/${sp.slug}`}>
                  <GlassCard padding="md" className="group h-full">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mp-neon/10">
                        <NeonIcon name={service.icon} size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg uppercase tracking-wider text-mp-white transition-colors group-hover:text-mp-neon">
                          {service.name}
                        </h3>
                        {service.pricing && service.pricing.length > 0 && (
                          <span className="font-body text-sm text-mp-neon">
                            dès {service.pricing[0].price}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="mb-4 font-body text-sm text-mp-white/60">{service.description}</p>
                    <span className="inline-flex items-center gap-1 font-body text-sm text-mp-neon">
                      Découvrir
                      <ChevronRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </Section>

        {/* Persona Grid */}
        <Section className="bg-gradient-to-b from-mp-black via-mp-black/95 to-mp-black">
          <SectionHeader
            eyebrow="Par Objectif"
            title="Coaching Sur-Mesure"
            description="Trouvez le programme adapté à votre objectif spécifique."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {personaPages.map((pp) => (
              <Link key={pp.slug} href={`/coaching/${pp.slug}`}>
                <GlassCard padding="md" className="group h-full text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-mp-neon/10">
                    <NeonIcon name={personaIcons[pp.slug] ?? 'activity'} size={24} />
                  </div>
                  <h3 className="mb-2 font-heading text-sm uppercase tracking-wider text-mp-white transition-colors group-hover:text-mp-neon">
                    {pp.seo.h1.replace(' à Nice', '')}
                  </h3>
                  <p className="line-clamp-2 font-body text-xs text-mp-white/50">
                    {pp.content.intro.slice(0, 100)}...
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-h2-mobile md:text-h2 uppercase text-mp-white">
              Pas Sûr de Votre Choix ?
            </h2>
            <div className="mx-auto mb-6 w-24 neon-line" />
            <p className="mb-8 font-body text-base text-mp-white/70">
              Appelez-nous pour un premier échange gratuit. Nous vous orienterons vers le service
              et le coach les plus adaptés à vos objectifs.
            </p>
            <PhoneCallButton size="lg">
              <Phone size={20} className="mr-2" />
              Nous Appeler
            </PhoneCallButton>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
