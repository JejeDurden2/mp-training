import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navigation, Footer } from '@/components/layout';
import { Section } from '@/components/ui/Section';
import { PhoneCallButton } from '@/components/ui/PhoneCallButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { Star, Phone } from 'lucide-react';
import {
  CoachingPageHero,
  CoachingJsonLd,
  ServiceContent,
  PersonaContent,
  PricingSection,
  CoachRecommendation,
  FAQSection,
  RelatedPages,
} from '@/components/coaching';
import { allCoachingPages, getCoachingPage } from '@/lib/data/index';
import { testimonials } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): Array<{ slug: string }> {
  return allCoachingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCoachingPage(slug);

  if (!page) return {};

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: `https://mptraining.fr/coaching/${page.slug}`,
      type: 'website',
      locale: 'fr_FR',
      images: [{ url: page.heroImage, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://mptraining.fr/coaching/${page.slug}`,
    },
  };
}

export default async function CoachingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getCoachingPage(slug);

  if (!page) notFound();

  const testimonial = page.testimonialId
    ? testimonials.find((t) => t.id === page.testimonialId)
    : undefined;

  const pricingServiceIds =
    page.pageType === 'persona'
      ? page.pricingServiceIds
      : [page.serviceId];

  return (
    <>
      <CoachingJsonLd page={page} />
      <Navigation />
      <main>
        <CoachingPageHero page={page} />

        {page.pageType === 'service' ? (
          <ServiceContent page={page} />
        ) : (
          <PersonaContent page={page} />
        )}

        <PricingSection serviceIds={pricingServiceIds} />

        <CoachRecommendation coachId={page.recommendedCoachId} />

        {testimonial && (
          <Section>
            <div className="mx-auto max-w-2xl">
              <GlassCard padding="lg" className="text-center">
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="h-5 w-5 fill-mp-neon text-mp-neon" />
                  ))}
                </div>
                <blockquote className="mb-4 font-body text-base italic leading-relaxed text-mp-white/80">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <p className="font-heading text-sm uppercase tracking-wider text-mp-neon">
                  {testimonial.name}
                </p>
                <p className="font-body text-xs text-mp-white/50">
                  {testimonial.service} avec {testimonial.coach}
                </p>
              </GlassCard>
            </div>
          </Section>
        )}

        <FAQSection faqIndices={page.relevantFaqIndices} />

        <RelatedPages pageSlugs={page.relatedPageSlugs} />

        {/* Final CTA */}
        <Section className="bg-gradient-to-b from-mp-black to-mp-black/95">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-h2-mobile md:text-h2 uppercase text-mp-white">
              {page.cta.headline}
            </h2>
            <div className="mx-auto mb-6 w-24 neon-line" />
            <p className="mb-8 font-body text-base text-mp-white/70">{page.cta.description}</p>
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
