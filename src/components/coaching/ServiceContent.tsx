import { Section, SectionHeader } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { services } from '@/lib/data';
import type { ServicePageData } from '@/lib/data/types';

interface ServiceContentProps {
  page: ServicePageData;
}

export function ServiceContent({ page }: ServiceContentProps) {
  const service = services.find((s) => s.id === page.serviceId);

  return (
    <>
      {/* Content Sections */}
      {page.content.sections.map((section, index) => (
        <Section key={index}>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              {section.icon && (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mp-neon/10">
                  <NeonIcon name={section.icon} size={24} />
                </div>
              )}
              <h2 className="font-heading text-h3-mobile md:text-h3 uppercase text-mp-white">
                {section.heading}
              </h2>
            </div>

            <p className="mb-6 font-body text-base leading-relaxed text-mp-white/70">
              {section.body}
            </p>

            {section.listItems && section.listItems.length > 0 && (
              <ul className="space-y-3">
                {section.listItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-sm text-mp-white/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mp-neon" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Section>
      ))}

      {/* Features Grid */}
      {service && (
        <Section>
          <SectionHeader
            eyebrow="Inclus"
            title="Ce Que Comprend Votre Séance"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <GlassCard key={feature} padding="md">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-mp-neon" />
                  <span className="font-body text-sm text-mp-white/80">{feature}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
