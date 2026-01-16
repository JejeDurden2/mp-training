import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { studioFeatures, studioImages } from '@/lib/data';

export function Studio() {
  const featuredImage = studioImages.find((img) => img.featured) || studioImages[0];
  const otherImages = studioImages.filter((img) => !img.featured).slice(0, 4);

  return (
    <Section id="studio" className="bg-mp-black">
      <SectionHeader
        eyebrow="Le Studio"
        title="Un Espace d'Exception"
        description="Découvrez notre studio de coaching privé au cœur de Nice. 300m² équipés du meilleur matériel pour atteindre vos objectifs."
      />

      {/* Image Gallery */}
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {/* Featured Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 md:aspect-auto">
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            className="object-cover image-hover-zoom"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mp-black/60 to-transparent" />
        </div>

        {/* Secondary Images */}
        {otherImages.slice(0, 2).map((image) => (
          <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover image-hover-zoom"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mp-black/40 to-transparent" />
          </div>
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
    </Section>
  );
}
