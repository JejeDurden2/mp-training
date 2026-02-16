import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import Script from 'next/script';
import { Providers } from '@/components/Providers';
import './globals.css';

const GTM_ID = 'GTM-PXP79X5X';

// Font Configuration
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// MP Training Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://mptraining.fr'),
  title: {
    template: '%s | MP Training Nice',
    default: "MP Training Nice | Coaching Privé & Personal Training d'Excellence",
  },
  description:
    'Coaching privé à Nice avec Léo & Yann, coachs diplômés STAPS. Personal training, petits groupes (max 6), préparation athlétique. 20 Rue Théodore de Banville. ⭐ 5/5 - 25 avis. ☎ 06 27 68 33 43',
  keywords: [
    'coaching privé nice',
    'mp training nice',
    'personal training nice',
    'coach sportif nice',
    'préparation athlétique nice',
    'salle sport privée nice',
    'personal trainer nice',
    'coaching sportif nice libération',
    'small group training nice',
    'coach sportif diplômé staps nice',
  ],
  authors: [{ name: 'MP Training Nice' }],
  creator: 'MP Training Nice',
  publisher: 'MP Training Nice',

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://mptraining.fr',
    siteName: 'MP Training Nice',
    title: "MP Training Nice | Coaching Privé & Personal Training d'Excellence",
    description:
      'Studio de coaching privé à Nice. Personal training avec Léo & Yann, coachs diplômés STAPS. Petits groupes, préparation athlétique.',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MP Training Nice - Studio de coaching sportif privé',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "MP Training Nice | Coaching Privé d'Excellence",
    description:
      'Coaching privé à Nice avec Léo & Yann. Personal training, petits groupes, préparation athlétique.',
    images: ['/opengraph-image.jpg'],
    creator: '@mptraining_nice',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://mptraining.fr',
  },

  category: 'health & fitness',

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
