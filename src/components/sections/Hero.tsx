import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { businessInfo } from '@/lib/data';

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
            <br />
            à Nice
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
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 fill-mp-neon"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
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
