import type { Metadata } from "next";
import "./globals.css";
import SchemaOrg from "./schema";
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({ 
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "MP Training Nice | Coaching Sportif Privé & Personal Training",
  description: "Studio de coaching privé à Nice. Personal training, small group et préparation physique avec des coachs diplômés. 20 Rue Théodore de Banville, 06100 Nice.",
  metadataBase: new URL('https://mptraining.fr'),
  keywords: "coach sportif Nice, personal training Nice, coaching privé Nice, préparateur physique Nice",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
openGraph: {
    title: "MP Training Nice | Coaching Sportif Privé",
    description: "Studio de coaching privé à Nice avec Léo et Yann, coachs diplômés.",
    url: 'https://mptraining.fr',
    siteName: 'MP Training Nice',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <SchemaOrg />
      <body className={audiowide.className}>{children}</body>
    </html>
  );
}
