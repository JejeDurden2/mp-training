import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { NeonLine } from "@/components/ui/section";
import { NeonArrow } from "@/components/ui/icon";

export function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background */}
      <Image
        src="/images/room1.jpeg"
        alt="Studio de coaching sportif privé MP Training à Nice - Salle équipée pour personal training"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 py-12 max-w-4xl mx-auto">
        <h1 className="sr-only">MP Training - Coaching Sportif Privé à Nice</h1>

        <Image
          src="/images/logo.svg"
          alt="Logo MP Training Nice - Coaching sportif privé"
          width={192}
          height={192}
          priority
          className="h-40 lg:h-48 w-auto mx-auto mb-6"
        />

        <p className="font-audiowide text-2xl tracking-wider text-white mb-4">
          COACHING SPORTIF PRIVÉ À NICE
        </p>

        <NeonLine className="w-24 my-8" />

        <p className="font-inter font-light text-lg text-brand-gray-light max-w-2xl mx-auto">
          Votre studio de personal training au cœur de Nice. Atteignez vos
          objectifs avec un accompagnement 100% personnalisé.
        </p>

        <ButtonLink
          href="tel:0627683343"
          className="mt-10"
          aria-label="Réserver une séance de coaching sportif - Appeler MP Training Nice"
        >
          RÉSERVER MA SÉANCE
        </ButtonLink>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block"
        aria-hidden="true"
      >
        <NeonArrow />
      </div>
    </header>
  );
}
