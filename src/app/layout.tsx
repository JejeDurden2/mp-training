import type { Metadata } from "next";
import { Audiowide, Inter } from "next/font/google";
import "./globals.css";
import SchemaOrg from "./schema";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MP Training Nice | Coaching Sportif Privé & Personal Training",
  description:
    "Studio de coaching privé à Nice. Personal training, small group et préparation physique avec des coachs diplômés. 20 Rue Théodore de Banville, 06100 Nice.",
  keywords:
    "coach sportif Nice, personal training Nice, coaching privé Nice, préparateur physique Nice, salle de sport privée Nice, coach personnel Nice 06",
  metadataBase: new URL("https://mptraining.fr"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MP Training Nice | Coaching Sportif Privé",
    description:
      "Studio de coaching privé à Nice avec Léo et Yann, coachs diplômés. Personal training, small group et préparation physique.",
    url: "https://mptraining.fr",
    siteName: "MP Training Nice",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "MP Training Nice - Coaching Sportif Privé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP Training Nice | Coaching Sportif Privé",
    description: "Studio de coaching privé à Nice avec Léo et Yann, coachs diplômés.",
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${audiowide.variable} ${inter.variable}`}>
      <body className="font-inter bg-brand-black text-brand-white antialiased">
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
