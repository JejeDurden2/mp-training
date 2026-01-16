import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Phone, MapPin } from 'lucide-react';
import { businessInfo } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-mp-white/10 bg-mp-black">
      <div className="container-custom py-12">
        <div className="grid gap-10 pt-8 md:gap-8 md:pt-0 md:grid-cols-3">
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
            <h4 className="mb-4 mt-2 font-heading text-lg uppercase tracking-wider text-mp-white md:mt-0">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-mp-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-mp-neon" />
                <span>
                  {businessInfo.address.street}
                  <br />
                  {businessInfo.address.postalCode} {businessInfo.address.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${businessInfo.phoneFormatted}`}
                  className="flex items-center gap-2 transition-colors hover:text-mp-neon"
                >
                  <Phone size={16} className="text-mp-neon" />
                  {businessInfo.phone}
                </a>
              </li>
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
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 mt-2 font-heading text-lg uppercase tracking-wider text-mp-white md:mt-0">
              Horaires
            </h4>
            <p className="font-body text-sm text-mp-white/70">
              {businessInfo.hours.weekdays.days}
              <br />
              {businessInfo.hours.weekdays.hours}
              <br />
              <span className="text-mp-neon">{businessInfo.hours.note}</span>
            </p>
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
