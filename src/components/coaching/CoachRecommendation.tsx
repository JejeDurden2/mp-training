import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { PhoneCallButton } from '@/components/ui/PhoneCallButton';
import { coaches } from '@/lib/data';
import { Phone } from 'lucide-react';

interface CoachRecommendationProps {
  coachId: string;
  context?: string;
}

export function CoachRecommendation({ coachId, context }: CoachRecommendationProps) {
  const coach = coaches.find((c) => c.id === coachId);

  if (!coach) return null;

  return (
    <Section>
      <SectionHeader
        eyebrow="Votre Coach"
        title={`Pourquoi ${coach.name}`}
        description={context}
      />

      <div className="mx-auto max-w-3xl">
        <GlassCard padding="none" className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative aspect-[3/4] w-full md:aspect-auto md:w-1/3">
              <Image
                src={coach.image}
                alt={`${coach.fullName} - Coach sportif diplômé STAPS Nice`}
                fill
                className="object-cover"
                style={{ objectPosition: coach.imageFocus }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h3 className="mb-1 font-heading text-xl uppercase tracking-wider text-mp-white">
                {coach.fullName}
              </h3>
              <p className="mb-4 font-body text-sm text-mp-neon">{coach.title}</p>

              <p className="mb-4 font-body text-sm text-mp-white/70">{coach.longBio}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {coach.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full border border-mp-neon/30 px-3 py-1 font-body text-xs text-mp-neon"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {coach.certifications.length > 0 && (
                <ul className="mb-6 space-y-1">
                  {coach.certifications.map((cert) => (
                    <li
                      key={cert}
                      className="flex items-center gap-2 font-body text-xs text-mp-white/50"
                    >
                      <span className="h-1 w-1 rounded-full bg-mp-neon" />
                      {cert}
                    </li>
                  ))}
                </ul>
              )}

              <PhoneCallButton variant="primary" size="md" className="mt-auto self-start">
                <Phone size={16} className="mr-2" />
                Appeler {coach.name}
              </PhoneCallButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
