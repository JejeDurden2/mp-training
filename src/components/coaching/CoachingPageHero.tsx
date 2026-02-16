import Image from 'next/image';
import { Star } from 'lucide-react';
import { PhoneCallButton } from '@/components/ui/PhoneCallButton';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from './Breadcrumbs';
import { businessInfo } from '@/lib/data';
import type { CoachingPageData } from '@/lib/data/types';

const RATING_STARS = 5;

interface CoachingPageHeroProps {
  page: CoachingPageData;
}

export function CoachingPageHero({ page }: CoachingPageHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16 pt-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={page.heroImage}
          alt={page.seo.h1}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mp-black/80 via-mp-black/70 to-mp-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <Breadcrumbs pageName={page.seo.h1.replace(' à Nice', '')} />

        <span className="mb-4 block font-body text-sm uppercase tracking-widest text-mp-neon">
          {page.content.eyebrow}
        </span>

        <h1 className="mb-6 max-w-3xl font-heading text-h1-mobile md:text-h1 uppercase text-mp-white">
          {page.seo.h1}
        </h1>

        <p className="mb-8 max-w-2xl font-body text-base md:text-body-lg text-mp-white/80">
          {page.content.intro}
        </p>

        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <PhoneCallButton size="lg">
            Réserver ma séance
          </PhoneCallButton>
          <Button href="#tarifs" variant="secondary" size="lg">
            Voir les tarifs
          </Button>
        </div>

        {/* Rating Badge */}
        <a
          href={businessInfo.social.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex">
            {Array.from({ length: RATING_STARS }, (_, i) => (
              <Star key={i} className="h-4 w-4 fill-mp-neon text-mp-neon" />
            ))}
          </div>
          <span className="font-body text-sm text-mp-white/60">
            {businessInfo.seo.rating}/5 - {businessInfo.seo.reviewCount} avis Google
          </span>
        </a>
      </div>
    </section>
  );
}
