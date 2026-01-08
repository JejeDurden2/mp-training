import Image from "next/image";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 bg-brand-dark"
      aria-labelledby="services-title"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2
            id="services-title"
            className="font-audiowide text-2xl lg:text-[2.5rem] tracking-wider text-white mb-6"
          >
            NOS PRESTATIONS DE COACHING
          </h2>
          <div
            className="w-16 h-px bg-brand-accent shadow-[0_0_8px_var(--color-brand-accent),0_0_16px_var(--color-brand-accent),0_0_32px_rgba(0,128,255,0.5)]"
            aria-hidden="true"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <article key={i} className="text-center group">
              {/* Image */}
              <div className="relative overflow-hidden mb-6 h-72">
                <Image
                  src={service.img}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3 className="font-audiowide text-xl tracking-wider text-white mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-sm font-light text-brand-gray-light leading-relaxed">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
