'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { Lightbox } from '@/components/ui/Lightbox';
import { studioFeatures, studioImages } from '@/lib/data';

export function Studio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredImage = studioImages.find((img) => img.featured) || studioImages[0];
  const otherImages = studioImages.filter((img) => !img.featured).slice(0, 2);
  const openLightbox = (imageSrc: string) => {
    const index = studioImages.findIndex((img) => img.src === imageSrc);
    setCurrentIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? studioImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === studioImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <Section id="studio" className="bg-mp-black">
      <SectionHeader
        eyebrow="Le Studio"
        title="Un Espace d'Exception"
        description="Découvrez notre studio de coaching privé au cœur de Nice. 80m² équipés du meilleur matériel pour atteindre vos objectifs."
      />

      {/* Image Gallery */}
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {/* Featured Image */}
        <button
          type="button"
          onClick={() => openLightbox(featuredImage.src)}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 md:aspect-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-mp-neon"
        >
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            loading="lazy"
            className="object-cover image-hover-zoom"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </button>

        {/* Secondary Images */}
        {otherImages.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => openLightbox(image.src)}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-mp-neon"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              className="object-cover image-hover-zoom"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Features Grid */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {studioFeatures.map((feature) => (
          <div
            key={feature.title}
            className="glass-card rounded-xl p-6 text-center transition-all hover:scale-[1.02]"
          >
            <div className="mb-4 flex justify-center">
              <NeonIcon name={feature.icon} size={40} />
            </div>
            <h3 className="mb-2 font-heading text-lg uppercase tracking-wider text-mp-white">
              {feature.title}
            </h3>
            <p className="font-body text-sm text-mp-white/60">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={studioImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </Section>
  );
}
