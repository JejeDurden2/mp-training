import { Section, SectionHeader } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { services } from '@/lib/data';

interface PricingSectionProps {
  serviceIds: string[];
  showAllFeatures?: boolean;
}

export function PricingSection({ serviceIds, showAllFeatures = false }: PricingSectionProps) {
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
          <GlassCard key={service.id} padding="md">
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
          </GlassCard>
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
