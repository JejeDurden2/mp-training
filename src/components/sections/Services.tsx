import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { services } from '@/lib/data';

export function Services() {
  return (
    <Section id="services" className="bg-gradient-to-b from-mp-black via-mp-black/95 to-mp-black">
      <SectionHeader
        eyebrow="Nos Formules"
        title="Services de Coaching"
        description="Des programmes adaptés à vos objectifs, encadrés par des coachs diplômés STAPS passionnés par votre réussite."
      />

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.id}
            className={cn(
              'group glass-card relative flex flex-col overflow-hidden rounded-2xl transition-all hover:scale-[1.02]',
              service.featured && 'ring-2 ring-mp-neon/50',
            )}
          >
            {/* Featured Badge */}
            {service.featured && (
              <div className="absolute right-4 top-4 z-10 rounded-full bg-mp-neon px-3 py-1 font-heading text-xs uppercase tracking-wider text-mp-white">
                Populaire
              </div>
            )}

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.name} - MP Training Nice`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mp-black via-mp-black/50 to-transparent" />

              {/* Icon Overlay */}
              <div className="absolute bottom-4 left-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mp-black/60 backdrop-blur-sm">
                  <NeonIcon name={service.icon} size={28} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
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

              <p className="mb-1 font-body text-xs text-mp-white/50">{service.duration}</p>

              <p className="mb-4 font-body text-sm text-mp-white/70">{service.description}</p>

              {/* Pricing Tiers */}
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

              {/* Features List */}
              <ul className="mb-6 space-y-2">
                {service.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 font-body text-sm text-mp-white/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-mp-neon" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href={`/coaching/${service.id === 'athletic-prep' ? 'preparation-athletique' : service.id}`}
                variant={service.featured ? 'primary' : 'secondary'}
                className="mt-auto w-full"
              >
                En savoir plus
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
