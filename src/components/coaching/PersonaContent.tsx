import { Section, SectionHeader } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeonIcon } from '@/components/ui/NeonIcon';
import type { PersonaPageData } from '@/lib/data/types';

interface PersonaContentProps {
  page: PersonaPageData;
}

export function PersonaContent({ page }: PersonaContentProps) {
  return (
    <>
      {/* Pain Points */}
      <Section>
        <SectionHeader
          eyebrow="Le Problème"
          title="Vous Vous Reconnaissez ?"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {page.persona.painPoints.map((point) => (
            <GlassCard key={point.title} padding="md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-mp-white/5">
                <NeonIcon name={point.icon} size={20} glow={false} className="text-mp-white/60" />
              </div>
              <h3 className="mb-2 font-heading text-sm uppercase tracking-wider text-mp-white">
                {point.title}
              </h3>
              <p className="font-body text-sm text-mp-white/60">{point.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Solutions */}
      <Section>
        <SectionHeader
          eyebrow="La Solution"
          title="Comment MP Training Vous Aide"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {page.persona.solutions.map((solution) => (
            <GlassCard key={solution.title} padding="md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-mp-neon/10">
                <NeonIcon name={solution.icon} size={20} />
              </div>
              <h3 className="mb-2 font-heading text-sm uppercase tracking-wider text-mp-white">
                {solution.title}
              </h3>
              <p className="font-body text-sm text-mp-white/60">{solution.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

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
    </>
  );
}
