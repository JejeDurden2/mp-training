import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { businessInfo, legalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: `Mentions légales du site ${businessInfo.name}. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://mptraining.fr/mentions-legales',
  },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-mp-black">
      <div className="container-custom section-spacing">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-body text-sm text-mp-white/60 transition-colors hover:text-mp-neon"
        >
          <ArrowLeft size={16} />
          Retour au site
        </Link>

        <h1 className="mb-12 font-heading text-h1-mobile md:text-h1 uppercase text-mp-white">
          Mentions Légales
        </h1>

        <div className="max-w-3xl space-y-10 font-body text-mp-white/80">
          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Éditeur du site
            </h2>
            <p>
              <strong className="text-mp-white">
                {legalInfo.nomCommercial}
              </strong>
              <br />
              Forme juridique : {legalInfo.formeJuridique}
              <br />
              SIRET : {legalInfo.siret}
              <br />
              SIREN : {legalInfo.siren}
              <br />
              N° TVA intracommunautaire : {legalInfo.tva}
              <br />
              Date de création : {legalInfo.dateCreation}
              <br />
              RCS : {legalInfo.rcs}
              <br />
              RNE : {legalInfo.rne}
            </p>
            <p className="mt-4">
              <strong className="text-mp-white">Siège social :</strong>
              <br />
              {legalInfo.siegeSocial.street}
              <br />
              {legalInfo.siegeSocial.postalCode} {legalInfo.siegeSocial.city},{' '}
              {legalInfo.siegeSocial.country}
            </p>
            <p className="mt-4">
              <strong className="text-mp-white">Établissement principal :</strong>
              <br />
              {businessInfo.address.street}
              <br />
              {businessInfo.address.postalCode} {businessInfo.address.city},{' '}
              {businessInfo.address.country}
            </p>
            <p className="mt-4">
              Téléphone : {businessInfo.phone}
              <br />
              Email : {businessInfo.email}
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Directeur de la publication
            </h2>
            <p>{legalInfo.directeurPublication}</p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par :
              <br />
              <strong className="text-mp-white">Vercel Inc.</strong>
              <br />
              440 N Barranca Avenue #4133
              <br />
              Covina, CA 91723, États-Unis
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes) est
              protégé par le droit d&apos;auteur et la propriété intellectuelle. Toute reproduction,
              représentation ou diffusion, totale ou partielle, du contenu de ce site sans
              autorisation expresse est interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Responsabilité
            </h2>
            <p>
              {businessInfo.name} s&apos;efforce de fournir des informations exactes et à jour sur
              ce site. Toutefois, des erreurs ou omissions peuvent survenir. L&apos;éditeur ne
              saurait être tenu responsable des dommages directs ou indirects résultant de
              l&apos;utilisation de ce site.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Liens externes
            </h2>
            <p>
              Ce site peut contenir des liens vers des sites externes. {businessInfo.name} ne
              saurait être tenu responsable du contenu de ces sites tiers.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
