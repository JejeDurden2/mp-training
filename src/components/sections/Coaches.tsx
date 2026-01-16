import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { coaches } from '@/lib/data';

export function Coaches() {
  return (
    <Section id="coachs" className="bg-mp-black">
      <SectionHeader
        eyebrow="L'Équipe"
        title="Vos Coachs"
        description="Deux experts passionnés, diplômés STAPS, dédiés à votre transformation et votre réussite."
      />

      {/* Coaches Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {coaches.map((coach) => (
          <article key={coach.id} className="group relative overflow-hidden rounded-2xl">
            {/* Image Container */}
            <div className="relative aspect-[3/4] md:aspect-[4/5]">
              <Image
                src={coach.image}
                alt={`${coach.fullName} - ${coach.title} MP Training Nice`}
                fill
                className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                style={{ objectPosition: coach.imageFocus }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-mp-black via-mp-black/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="glass-card rounded-xl p-6">
                {/* Name & Title */}
                <div className="mb-4">
                  <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-mp-white">
                    {coach.name}
                  </h3>
                  <p className="mt-1 font-body text-sm uppercase tracking-widest text-mp-neon">
                    {coach.title}
                  </p>
                </div>

                {/* Bio */}
                <p className="mb-4 font-body text-sm text-mp-white/70">{coach.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {coach.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full border border-mp-neon/50 px-3 py-1 font-body text-xs text-mp-neon"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Certifications */}
                <div className="mt-4 border-t border-mp-white/10 pt-4">
                  <p className="font-body text-xs text-mp-white/50">
                    {coach.certifications.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
