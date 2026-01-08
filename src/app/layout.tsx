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
  title: {
    default: "MP Training Nice | Coaching Sportif Privé & Personal Training",
    template: "%s | MP Training Nice",
  },
  description:
    "Studio de coaching sportif privé à Nice. Personal training individuel, small group (4 pers. max) et préparation physique avec Léo et Yann, coachs diplômés STAPS. 20 Rue Théodore de Banville, 06100 Nice. Réservez votre séance !",
  keywords: [
    "coach sportif Nice",
    "personal training Nice",
    "coaching privé Nice",
    "préparateur physique Nice",
    "salle de sport privée Nice",
    "coach personnel Nice 06",
    "personal trainer Nice",
    "coach fitness Nice",
    "remise en forme Nice",
    "musculation Nice",
    "perte de poids Nice",
    "préparation physique sportif Nice",
    "small group training Nice",
    "coach STAPS Nice",
    "coaching sportif personnalisé Nice",
    "séance sport privée Nice",
    "Léo Paulet-Volpini coach",
    "Yann Massyn coach IRONMAN",
  ],
  metadataBase: new URL("https://mptraining.fr"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/images/logo.svg", color: "#00ff88" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "MP Training Nice | Coaching Sportif Privé avec Léo et Yann",
    description:
      "Studio de coaching sportif privé à Nice. Personal training, small group et préparation physique avec des coachs diplômés STAPS. Transformez-vous avec un accompagnement 100% personnalisé !",
    url: "https://mptraining.fr",
    siteName: "MP Training Nice",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "MP Training Nice - Studio de coaching sportif privé avec Léo et Yann",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP Training Nice | Coaching Sportif Privé",
    description:
      "Studio de coaching privé à Nice avec Léo et Yann, coachs diplômés STAPS. Personal training, small group et préparation physique.",
    images: ["/opengraph-image.jpg"],
    creator: "@mptraining_nice",
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
  verification: {
    google: "votre-code-google-search-console",
  },
  category: "sports",
  classification: "Coaching Sportif",
  other: {
    "geo.region": "FR-06",
    "geo.placename": "Nice",
    "geo.position": "43.7055;7.2615",
    "ICBM": "43.7055, 7.2615",
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
