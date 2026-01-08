import { Instagram } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 bg-brand-dark"
      aria-labelledby="contact-title"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2
            id="contact-title"
            className="font-audiowide text-2xl lg:text-[2.5rem] tracking-wider text-white mb-6"
          >
            CONTACTEZ-NOUS
          </h2>
          <div className="w-16 h-px bg-white" aria-hidden="true" />
        </div>

        {/* Contact Info */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          role="list"
          aria-label="Informations de contact"
        >
          {contactInfo.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center"
                role="listitem"
              >
                {/* Neon Icon */}
                <div
                  className="w-14 h-14 mb-4 rounded-full flex items-center justify-center border border-brand-accent shadow-[0_0_10px_rgba(0,128,255,0.5),0_0_20px_rgba(0,128,255,0.25)]"
                  aria-hidden="true"
                >
                  <IconComponent className="w-6 h-6 stroke-brand-accent [filter:drop-shadow(0_0_4px_var(--color-brand-accent))]" />
                </div>

                <p className="font-audiowide text-sm mb-2 text-white">
                  {item.label}
                </p>

                {item.lines.map((line, j) =>
                  item.href && j === 0 ? (
                    <a
                      key={j}
                      href={item.href}
                      className="font-inter text-sm font-light text-brand-gray-light hover:opacity-70 transition-opacity"
                    >
                      {line}
                    </a>
                  ) : (
                    <p
                      key={j}
                      className="font-inter text-sm font-light text-brand-gray-light"
                    >
                      {line}
                    </p>
                  )
                )}

                {item.muted?.map((line, j) => (
                  <p key={`muted-${j}`} className="text-sm text-brand-gray-dark">
                    {line}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        {/* Map */}
        <div
          className="relative w-full h-80 mb-12 [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0 [&_iframe]:grayscale [&_iframe]:invert-[0.92] [&_iframe]:contrast-[0.83] after:absolute after:inset-0 after:pointer-events-none after:border after:border-brand-gray-dark/20"
          aria-label="Localisation de MP Training Nice"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.5!2d7.2615!3d43.7055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0f5e9c1f9a1%3A0x0!2s20%20Rue%20Th%C3%A9odore%20de%20Banville%2C%2006100%20Nice!5e0!3m2!1sfr!2sfr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MP Training Nice - 20 Rue Théodore de Banville, 06100 Nice"
          />
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <ButtonLink
            href="tel:0627683343"
            aria-label="Appeler MP Training Nice - 06 27 68 33 43"
          >
            APPELEZ-NOUS
          </ButtonLink>

          <a
            href="https://www.instagram.com/mptraining_nice/"
            className="w-11 h-11 flex items-center justify-center border border-brand-gray-dark/50 text-white transition-all hover:bg-brand-accent hover:border-brand-accent"
            aria-label="Suivez MP Training Nice sur Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
