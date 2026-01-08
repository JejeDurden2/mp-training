import Image from "next/image";
import { coaches } from "@/lib/data";

export function CoachesSection() {
  return (
    <section
      id="coachs"
      className="py-24 px-4 sm:px-6 bg-black"
      aria-labelledby="coaches-title"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2
            id="coaches-title"
            className="font-audiowide text-2xl lg:text-[2.5rem] tracking-wider text-white mb-6"
          >
            VOS COACHS SPORTIFS À NICE
          </h2>
          <div className="w-16 h-px bg-white" aria-hidden="true" />
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {coaches.map((coach, i) => (
            <article
              key={i}
              className="flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden">
                <Image
                  src={coach.img}
                  alt={coach.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: coach.position }}
                  sizes="192px"
                />
                <div
                  className="absolute inset-0 rounded-full border-2 border-brand-gray-dark/40 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Info */}
              <h3 className="font-audiowide text-xl tracking-wider text-white mb-2">
                {coach.name}
              </h3>
              <p className="text-brand-gray-dark text-xs tracking-widest mb-4">
                {coach.role}
              </p>
              <p className="font-inter text-sm font-light text-brand-gray-light leading-relaxed">
                {coach.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
