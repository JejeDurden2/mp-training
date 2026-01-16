import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';

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
  metadataBase: new URL('https://www.mptraining.fr'),
  title: {
    template: '%s | MP Training Nice',
    default: "MP Training Nice | Coaching Privé & Personal Training d'Excellence",
  },
  description:
    'Coaching privé à Nice avec Léo & Yann, coachs diplômés STAPS. Personal training, petits groupes (max 4), préparation athlétique. 20 Rue Théodore de Banville. ⭐ 5/5 - 25 avis. ☎ 06 27 68 33 43',
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
    url: 'https://www.mptraining.fr',
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
    canonical: 'https://www.mptraining.fr',
  },

  category: 'health & fitness',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
