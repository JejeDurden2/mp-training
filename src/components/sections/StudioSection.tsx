import Image from "next/image";

export function StudioSection() {
  return (
    <section
      id="studio"
      className="py-24 px-4 sm:px-6 bg-black"
      aria-labelledby="studio-title"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2
            id="studio-title"
            className="font-audiowide text-2xl lg:text-[2.5rem] tracking-wider text-white mb-6"
          >
            VOTRE STUDIO DE COACHING PRIVÉ À NICE
          </h2>
          <div
            className="w-16 h-px bg-brand-accent shadow-[0_0_8px_var(--color-brand-accent),0_0_16px_var(--color-brand-accent),0_0_32px_rgba(0,128,255,0.5)]"
            aria-hidden="true"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 font-inter font-light text-brand-gray-light leading-relaxed">
            <p>
              Bienvenue chez MP Training, votre espace dédié au coaching sportif
              personnalisé à Nice. Dans un cadre intimiste et professionnel, nos
              coachs diplômés vous accompagnent vers l&apos;atteinte de vos
              objectifs.
            </p>
            <p>
              Que vous souhaitiez perdre du poids, gagner en masse musculaire,
              améliorer votre condition physique ou préparer une compétition,
              nous construisons ensemble un programme sur mesure.
            </p>
            <p>
              Situés au 20 Rue Théodore de Banville dans le quartier Libération,
              nous vous accueillons du lundi au samedi pour des séances
              individuelles ou en petit groupe.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/room2.jpeg"
              alt="Salle de musculation privée MP Training Nice - Équipement professionnel pour coaching personnalisé"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
