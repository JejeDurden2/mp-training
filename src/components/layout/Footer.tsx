import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Phone, MapPin, Star } from 'lucide-react';
import { businessInfo, coaches } from '@/lib/data';
import { servicePages } from '@/lib/data/service-pages';
import { personaPages } from '@/lib/data/personas';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-mp-white/10 bg-mp-black">
      <div className="container-custom py-12">
        <div className="grid gap-8 pt-4 md:gap-10 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <Image
              src="/images/logo.svg"
              alt="MP Training Nice"
              width={80}
              height={80}
              className="mb-4 h-16 w-auto"
            />
            <p className="font-body text-sm text-mp-white/60">
              {businessInfo.tagline}
              <br />
              Coaching sportif privé à Nice
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 mt-2 font-heading text-lg uppercase tracking-wider text-mp-white md:mt-0">
              Contact
            </h3>
            <ul className="space-y-3 font-body text-sm text-mp-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-mp-neon" />
                <span>
                  {businessInfo.address.street}
                  <br />
                  {businessInfo.address.postalCode} {businessInfo.address.city}
                </span>
              </li>
              {coaches.map((coach) => (
                <li key={coach.id}>
                  <a
                    href={`tel:${coach.phoneFormatted}`}
                    aria-label={`Appeler ${coach.name}`}
                    className="flex items-center gap-2 transition-colors hover:text-mp-neon"
                  >
                    <Phone size={16} className="text-mp-neon" />
                    {coach.name} — {coach.phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-mp-neon"
                >
                  <Instagram size={16} className="text-mp-neon" />
                  {businessInfo.social.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={businessInfo.social.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-mp-neon"
                >
                  <Star size={16} className="text-mp-neon" />
                  Avis Google — {businessInfo.seo.rating}/5
                </a>
              </li>
            </ul>
          </div>

          {/* Coaching */}
          <div>
            <h3 className="mb-4 mt-2 font-heading text-lg uppercase tracking-wider text-mp-white md:mt-0">
              Coaching
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 font-body text-sm text-mp-white/70">
              <Link href="/coaching" className="col-span-2 transition-colors hover:text-mp-neon">
                Tous nos programmes
              </Link>
              {servicePages.map((sp) => (
                <Link
                  key={sp.slug}
                  href={`/coaching/${sp.slug}`}
                  className="transition-colors hover:text-mp-neon"
                >
                  {sp.seo.h1.replace(' à Nice', '')}
                </Link>
              ))}
              {personaPages.map((pp) => (
                <Link
                  key={pp.slug}
                  href={`/coaching/${pp.slug}`}
                  className="transition-colors hover:text-mp-neon"
                >
                  {pp.seo.h1.replace(' à Nice', '')}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-mp-white/10 pt-8 md:flex-row">
          <p className="font-body text-xs text-mp-white/50">
            &copy; {currentYear} {businessInfo.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="font-body text-xs text-mp-white/50 transition-colors hover:text-mp-neon"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="font-body text-xs text-mp-white/50 transition-colors hover:text-mp-neon"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
