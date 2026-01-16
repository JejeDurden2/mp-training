import { Section, SectionHeader } from '@/components/ui/Section';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { Button } from '@/components/ui/Button';
import { businessInfo } from '@/lib/data';

export function Contact() {
  const addressQuery = encodeURIComponent(
    `${businessInfo.address.street}, ${businessInfo.address.postalCode} ${businessInfo.address.city}, France`,
  );
  const mapUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <Section id="contact" className="bg-mp-black" noPadding>
      <div className="section-spacing">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Contact"
            title="Passez à l'Action"
            description="Prenez rendez-vous pour votre première séance d'essai gratuite. Nous sommes à votre écoute pour répondre à toutes vos questions."
          />
        </div>
      </div>

      {/* Contact Content */}
      <div className="grid lg:grid-cols-2">
        {/* Map */}
        <div className="relative h-[400px] lg:h-auto lg:min-h-[600px]">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MP Training Nice - Localisation"
            className="absolute inset-0"
          />
          {/* Map Overlay for styling */}
          <div className="pointer-events-none absolute inset-0 bg-mp-neon/10" />
        </div>

        {/* Contact Info */}
        <div className="flex items-center bg-mp-black p-8 lg:p-16">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mp-neon/10">
                  <NeonIcon name="map-pin" size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-lg uppercase tracking-wider text-mp-white">
                    Adresse
                  </h4>
                  <p className="mt-1 font-body text-mp-white/70">
                    {businessInfo.address.street}
                    <br />
                    {businessInfo.address.postalCode} {businessInfo.address.city}
                  </p>
                  <p className="mt-1 font-body text-sm text-mp-neon">
                    Quartier {businessInfo.address.neighborhood}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mp-neon/10">
                  <NeonIcon name="phone" size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-lg uppercase tracking-wider text-mp-white">
                    Téléphone
                  </h4>
                  <a
                    href={`tel:${businessInfo.phoneFormatted}`}
                    className="mt-1 block font-body text-mp-white/70 transition-colors hover:text-mp-neon"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mp-neon/10">
                  <NeonIcon name="clock" size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-lg uppercase tracking-wider text-mp-white">
                    Horaires
                  </h4>
                  <p className="mt-1 font-body text-mp-white/70">
                    {businessInfo.hours.weekdays.days}: {businessInfo.hours.weekdays.hours}
                  </p>
                  <p className="font-body text-sm text-mp-neon">{businessInfo.hours.note}</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mp-neon/10">
                  <NeonIcon name="instagram" size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-lg uppercase tracking-wider text-mp-white">
                    Instagram
                  </h4>
                  <a
                    href={businessInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-body text-mp-white/70 transition-colors hover:text-mp-neon"
                  >
                    {businessInfo.social.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href={`tel:${businessInfo.phoneFormatted}`} size="lg" className="flex-1">
                Appelez-nous
              </Button>
              <Button
                href={businessInfo.social.instagram}
                variant="secondary"
                size="lg"
                className="flex-1"
              >
                <NeonIcon name="instagram" size={20} className="mr-2" glow={false} />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
