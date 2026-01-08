import { MapPin, Phone, Clock, type LucideIcon } from "lucide-react";

export const coaches = [
  {
    name: "LÉO PAULET-VOLPINI",
    role: "COACH SPORTIF • BASKETTEUR",
    desc: "Coach sportif diplômé de l'UFR STAPS Nice et préparateur physique passionné, Léo vous accompagne dans votre transformation avec expertise et bienveillance. Fort de plusieurs années d'expérience en coaching privé à Nice, il propose un suivi personnalisé adapté à vos objectifs.",
    img: "/images/Leo.jpeg",
    alt: "Léo Paulet-Volpini - Coach sportif diplômé STAPS à Nice spécialisé personal training",
    position: "center 10%",
  },
  {
    name: "YANN MASSYN",
    role: "COACH SPORTIF • TRIATHLÈTE",
    desc: "Vice-Champion du Monde IRONMAN 25-29 ans et triathlète longue distance, Yann met son expertise d'athlète de haut niveau au service de votre progression. Diplômé de l'UFR STAPS Nice, il vous accompagne avec rigueur et passion vers vos objectifs sportifs.",
    img: "/images/Yann.jpeg",
    alt: "Yann Massyn - Vice-Champion du Monde IRONMAN et coach sportif diplômé STAPS Nice",
    position: "center center",
  },
] as const;

export const services = [
  {
    title: "PERSONAL TRAINING",
    desc: "Séance individuelle de 60 minutes avec votre coach dédié. Programme personnalisé, suivi de progression et conseils nutritionnels pour des résultats optimaux.",
    img: "/images/room4.jpeg",
    alt: "Séance de personal training individuelle avec coach sportif diplômé à Nice - MP Training",
  },
  {
    title: "SMALL GROUP",
    desc: "Entraînement en petit groupe (4 personnes max) combinant renforcement musculaire et cardio. L'énergie du collectif avec l'attention d'un coaching personnalisé.",
    img: "/images/room5.jpeg",
    alt: "Cours small group training à Nice - Entraînement collectif 4 personnes max chez MP Training",
  },
  {
    title: "PRÉPARATION PHYSIQUE",
    desc: "Programme sur mesure pour sportifs amateurs ou confirmés. Optimisez vos performances et prévenez les blessures avec un suivi professionnel.",
    img: "/images/room3.jpeg",
    alt: "Programme de préparation physique sportive à Nice - Optimisation performance chez MP Training",
  },
] as const;

interface ContactItem {
  icon: LucideIcon;
  label: string;
  lines: string[];
  href?: string;
  muted?: string[];
}

export const contactInfo: ContactItem[] = [
  {
    icon: MapPin,
    label: "ADRESSE",
    lines: ["20 Rue Théodore de Banville", "06100 Nice"],
  },
  {
    icon: Phone,
    label: "TÉLÉPHONE",
    lines: ["06 27 68 33 43"],
    href: "tel:0627683343",
  },
  {
    icon: Clock,
    label: "HORAIRES",
    lines: ["Lun - Sam : 8h - 21h"],
    muted: ["Sur rendez-vous"],
  },
];

export const navLinks = [
  { href: "#studio", label: "LE STUDIO" },
  { href: "#services", label: "SERVICES" },
  { href: "#coachs", label: "COACHS" },
  { href: "#contact", label: "CONTACT" },
] as const;
