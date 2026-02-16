import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { services } from '@/lib/data';

interface PricingSectionProps {
  serviceIds: string[];
  showAllFeatures?: boolean;
  showImages?: boolean;
}

export function PricingSection({ serviceIds, showAllFeatures = false, showImages = false }: PricingSectionProps) {
  const displayServices = services.filter((s) => serviceIds.includes(s.id));

  if (displayServices.length === 0) return null;

  return (
    <Section id="tarifs">
      <SectionHeader
        eyebrow="Tarifs"
        title="Nos Formules"
        description="Des tarifs clairs et transparents, avec des packages avantageux pour un suivi régulier."
      />

      <div className={cn(
        'grid gap-6',
        displayServices.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-2',
      )}>
        {displayServices.map((service) => (
          <article
            key={service.id}
            className="glass-card group flex flex-col overflow-hidden rounded-2xl"
          >
            {/* Image */}
            {showImages && (
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} - MP Training Nice`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mp-black via-mp-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mp-black/60 backdrop-blur-sm">
                    <NeonIcon name={service.icon} size={28} />
                  </div>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              {!showImages && (
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mp-neon/10">
                    <NeonIcon name={service.icon} size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg uppercase tracking-wider text-mp-white">
                      {service.name}
                    </h3>
                    <p className="font-body text-xs text-mp-white/50">{service.duration}</p>
                  </div>
                </div>
              )}

              {showImages && (
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="font-heading text-xl uppercase tracking-wider text-mp-white">
                    {service.name}
                  </h3>
                  {service.pricing && service.pricing.length > 0 && (
                    <span className="font-heading text-lg text-mp-neon">
                      dès {service.pricing[0].price}
                    </span>
                  )}
                </div>
              )}

              {showImages && (
                <p className="mb-4 font-body text-xs text-mp-white/50">{service.duration}</p>
              )}

              {service.pricing && service.pricing.length > 0 && (
                <div className="mb-4 space-y-2">
                  {service.pricing.map((tier) => (
                    <div
                      key={tier.label}
                      className={cn(
                        'flex items-center justify-between rounded-lg px-3 py-2',
                        tier.highlighted
                          ? 'border border-mp-neon/30 bg-mp-neon/10'
                          : 'bg-mp-white/5',
                      )}
                    >
                      <div className="flex flex-col">
                        <span className="font-body text-sm text-mp-white/80">{tier.label}</span>
                        {tier.unitPrice && (
                          <span className="font-body text-xs text-mp-neon">{tier.unitPrice}</span>
                        )}
                      </div>
                      <span
                        className={cn(
                          'font-heading text-lg',
                          tier.highlighted ? 'text-mp-neon' : 'text-mp-white',
                        )}
                      >
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <ul className="space-y-2">
                {(showAllFeatures ? service.features : service.features.slice(0, 3)).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 font-body text-sm text-mp-white/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-mp-neon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button href="/#contact" variant="secondary" size="md">
          Réserver une séance
        </Button>
      </div>
    </Section>
  );
}
