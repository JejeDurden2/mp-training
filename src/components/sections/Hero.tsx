import Image from 'next/image';
import { ChevronDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { businessInfo } from '@/lib/data';

const RATING_STARS = 5;

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/room2.jpeg"
          alt="Studio MP Training Nice - Salle de coaching privé"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-mp-black/70 via-mp-black/60 to-mp-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="mx-auto max-w-4xl">
          {/* Logo */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <Image
              src="/images/logo.svg"
              alt="MP Training Nice"
              width={120}
              height={120}
              className="h-24 w-auto md:h-32 animate-pulse-neon"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 font-heading text-h1-mobile md:text-h1 uppercase text-mp-white animate-slide-up">
            Coaching Privé
            <br />
            <span className="neon-glow">d&apos;Excellence</span>
            <br />à Nice
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-2xl font-body text-base md:text-body-lg text-mp-white/80 animate-fade-in">
            Transformez-vous avec Léo & Yann, coachs diplômés STAPS.
            <br className="hidden md:block" />
            Personal training, petits groupes et préparation athlétique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in">
            <Button href={`tel:${businessInfo.phoneFormatted}`} size="lg">
              Réserver ma séance
            </Button>
            <Button href="#studio" variant="secondary" size="lg">
              Découvrir le studio
            </Button>
          </div>

          {/* Rating Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 animate-fade-in">
            <div className="flex">
              {Array.from({ length: RATING_STARS }, (_, i) => (
                <Star key={i} className="h-5 w-5 fill-mp-neon text-mp-neon" />
              ))}
            </div>
            <span className="font-body text-sm text-mp-white/70">
              {businessInfo.seo.rating}/5 - {businessInfo.seo.reviewCount} avis
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#studio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={40} className="text-mp-neon neon-icon" />
      </a>
    </section>
  );
}
