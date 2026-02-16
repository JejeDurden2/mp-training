import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { allCoachingPages } from '@/lib/data/index';
import { services } from '@/lib/data';
import { ChevronRight } from 'lucide-react';

interface RelatedPagesProps {
  pageSlugs: string[];
}

export function RelatedPages({ pageSlugs }: RelatedPagesProps) {
  const related = pageSlugs
    .map((slug) => allCoachingPages.find((p) => p.slug === slug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));

  if (related.length === 0) return null;

  return (
    <Section>
      <SectionHeader
        eyebrow="À Découvrir"
        title="Coaching Associé"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((page) => {
          const service =
            page.pageType === 'service'
              ? services.find((s) => s.id === page.serviceId)
              : undefined;
          const icon = service?.icon ?? 'activity';

          return (
            <Link key={page.slug} href={`/coaching/${page.slug}`}>
              <GlassCard padding="md" className="group h-full">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mp-neon/10">
                    <NeonIcon name={icon} size={20} />
                  </div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-mp-white transition-colors group-hover:text-mp-neon">
                    {page.seo.h1.replace(' à Nice', '')}
                  </h3>
                </div>
                <p className="mb-3 line-clamp-2 font-body text-sm text-mp-white/60">
                  {page.content.intro.slice(0, 120)}...
                </p>
                <span className="inline-flex items-center gap-1 font-body text-xs text-mp-neon">
                  En savoir plus
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </GlassCard>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
