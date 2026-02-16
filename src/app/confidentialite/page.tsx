import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { businessInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: `Politique de confidentialité de ${businessInfo.name}. Informations sur la collecte et le traitement de vos données personnelles.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://mptraining.fr/confidentialite',
  },
};

export default function Confidentialite() {
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
          Politique de Confidentialité
        </h1>

        <div className="max-w-3xl space-y-10 font-body text-mp-white/80">
          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données est :
              <br />
              <strong className="text-mp-white">{businessInfo.name}</strong>
              <br />
              {businessInfo.address.street}, {businessInfo.address.postalCode}{' '}
              {businessInfo.address.city}
              <br />
              Email : {businessInfo.email}
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Données collectées
            </h2>
            <p>
              Ce site ne collecte aucune donnée personnelle directement via des formulaires. Les
              seules données potentiellement collectées sont :
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-mp-white">Données de navigation :</strong> via Google Tag
                Manager et Google Analytics (adresse IP anonymisée, pages visitées, durée de visite)
              </li>
              <li>
                <strong className="text-mp-white">Données de contact :</strong> lorsque vous nous
                appelez ou nous contactez via Instagram, vous nous transmettez volontairement vos
                coordonnées
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Finalité du traitement
            </h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Mesurer l&apos;audience du site et améliorer son contenu</li>
              <li>Répondre à vos demandes de contact et de renseignements</li>
              <li>Vous proposer nos services de coaching sportif</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Cookies
            </h2>
            <p>
              Ce site utilise Google Tag Manager qui peut déposer des cookies à des fins
              d&apos;analyse d&apos;audience. Ces cookies permettent de mesurer le nombre de visites
              et de comprendre comment les visiteurs utilisent le site.
            </p>
            <p className="mt-3">
              Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lors de
              leur dépôt. Toutefois, certaines fonctionnalités du site pourraient ne plus être
              disponibles.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Durée de conservation
            </h2>
            <p>
              Les données de navigation (analytics) sont conservées pour une durée maximale de 14
              mois. Les données de contact sont conservées pendant la durée de la relation
              commerciale et 3 ans après le dernier contact.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Vos droits
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
              des droits suivants :
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l&apos;effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à{' '}
              <a href={`mailto:${businessInfo.email}`} className="text-mp-neon hover:underline">
                {businessInfo.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wider text-mp-white">
              Contact
            </h2>
            <p>
              Pour toute question relative à cette politique de confidentialité, vous pouvez nous
              contacter :
              <br />
              Email :{' '}
              <a href={`mailto:${businessInfo.email}`} className="text-mp-neon hover:underline">
                {businessInfo.email}
              </a>
              <br />
              Téléphone : {businessInfo.phone}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
