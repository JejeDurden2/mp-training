"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

import {
  ButtonLink,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  Avatar,
  AvatarImage,
  AvatarBorder,
  Section,
  SectionHeader,
  SectionTitle,
  NeonLine,
  Container,
  Navbar,
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarLink,
  NavbarToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
  Hero,
  HeroBackground,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroLogo,
  HeroScrollIndicator,
  NeonIcon,
  NeonSvg,
  NeonArrow,
  Footer,
  FooterContent,
  FooterNav,
  FooterLink,
  SocialIcon,
  MapContainer,
} from "@/components/ui";

// ============================================
// DATA
// ============================================
const coaches = [
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
];

const services = [
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
];

const contactInfo = [
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

const navLinks = [
  { href: "#studio", label: "LE STUDIO" },
  { href: "#services", label: "SERVICES" },
  { href: "#coachs", label: "COACHS" },
  { href: "#contact", label: "CONTACT" },
];

// ============================================
// COMPONENT
// ============================================
export default function MPTrainingLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-inter overflow-x-hidden bg-black text-white">
      {/* ==================== NAVIGATION ==================== */}
      <Navbar>
        <NavbarContainer>
          <NavbarBrand href="#">
            <img
              src="/images/logo.svg"
              alt="MP Training Nice - Coaching Sportif Privé"
              className="h-10 block"
            />
          </NavbarBrand>

          <NavbarMenu>
            {navLinks.map((link) => (
              <NavbarLink key={link.href} href={link.href}>
                {link.label}
              </NavbarLink>
            ))}
            <ButtonLink
              href="tel:0627683343"
              size="sm"
              aria-label="Appeler MP Training Nice"
            >
              APPELER
            </ButtonLink>
          </NavbarMenu>

          <NavbarToggle
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </NavbarContainer>

        <NavbarMobileMenu isOpen={menuOpen}>
          {navLinks.map((link) => (
            <NavbarMobileLink
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavbarMobileLink>
          ))}
          <ButtonLink
            href="tel:0627683343"
            size="sm"
            className="block text-center mt-4"
            aria-label="Appeler MP Training Nice"
          >
            APPELER
          </ButtonLink>
        </NavbarMobileMenu>
      </Navbar>

      {/* ==================== HERO ==================== */}
      <Hero>
        <HeroOverlay />
        <HeroBackground
          src="/images/room1.jpeg"
          alt="Studio de coaching sportif privé MP Training à Nice - Salle équipée pour personal training"
        />

        <HeroContent>
          <HeroTitle>MP Training - Coaching Sportif Privé à Nice</HeroTitle>
          <HeroLogo
            src="/images/logo.svg"
            alt="Logo MP Training Nice - Coaching sportif privé"
          />
          <HeroSubtitle>COACHING SPORTIF PRIVÉ À NICE</HeroSubtitle>
          <NeonLine className="w-24 my-8" />
          <HeroDescription>
            Votre studio de personal training au cœur de Nice. Atteignez vos
            objectifs avec un accompagnement 100% personnalisé.
          </HeroDescription>
          <ButtonLink
            href="tel:0627683343"
            className="mt-10"
            aria-label="Réserver une séance de coaching sportif - Appeler MP Training Nice"
          >
            RÉSERVER MA SÉANCE
          </ButtonLink>
        </HeroContent>

        <HeroScrollIndicator>
          <NeonArrow />
        </HeroScrollIndicator>
      </Hero>

      {/* ==================== STUDIO ==================== */}
      <Section id="studio" variant="black">
        <Container>
          <SectionHeader>
            <SectionTitle>VOTRE STUDIO DE COACHING PRIVÉ À NICE</SectionTitle>
            <NeonLine />
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 font-light text-brand-gray-light leading-relaxed">
              <p>
                Bienvenue chez MP Training, votre espace dédié au coaching
                sportif personnalisé à Nice. Dans un cadre intimiste et
                professionnel, nos coachs diplômés vous accompagnent vers
                l&apos;atteinte de vos objectifs.
              </p>
              <p>
                Que vous souhaitiez perdre du poids, gagner en masse musculaire,
                améliorer votre condition physique ou préparer une compétition,
                nous construisons ensemble un programme sur mesure.
              </p>
              <p>
                Situés au 20 Rue Théodore de Banville dans le quartier
                Libération, nous vous accueillons du lundi au samedi pour des
                séances individuelles ou en petit groupe.
              </p>
            </div>
            <div>
              <img
                src="/images/room2.jpeg"
                alt="Salle de musculation privée MP Training Nice - Équipement professionnel pour coaching personnalisé"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ==================== SERVICES ==================== */}
      <Section id="services" variant="dark">
        <Container>
          <SectionHeader>
            <SectionTitle>NOS PRESTATIONS DE COACHING</SectionTitle>
            <NeonLine />
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <Card key={i}>
                <CardImage className="mb-6">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </CardImage>
                <CardTitle className="mb-3">{service.title}</CardTitle>
                <CardDescription>{service.desc}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ==================== COACHES ==================== */}
      <Section id="coachs" variant="black">
        <Container className="max-w-5xl">
          <SectionHeader>
            <SectionTitle>VOS COACHS SPORTIFS À NICE</SectionTitle>
            <NeonLine variant="white" />
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coaches.map((coach, i) => (
              <article key={i} className="flex flex-col items-center text-center">
                <Avatar className="mb-6">
                  <AvatarImage
                    src={coach.img}
                    alt={coach.alt}
                    style={{ objectPosition: coach.position }}
                  />
                  <AvatarBorder />
                </Avatar>
                <CardTitle className="mb-2">{coach.name}</CardTitle>
                <p className="text-brand-gray-dark text-xs tracking-widest mb-4">
                  {coach.role}
                </p>
                <CardDescription className="text-center">
                  {coach.desc}
                </CardDescription>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ==================== CONTACT ==================== */}
      <Section id="contact" variant="dark">
        <Container>
          <SectionHeader>
            <SectionTitle>CONTACTEZ-NOUS</SectionTitle>
            <NeonLine variant="white" />
          </SectionHeader>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {contactInfo.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <NeonIcon>
                    <NeonSvg>
                      <IconComponent className="w-6 h-6" />
                    </NeonSvg>
                  </NeonIcon>
                  <p className="font-audiowide text-sm mb-2 text-white">
                    {item.label}
                  </p>
                  {item.lines.map((line, j) =>
                    item.href && j === 0 ? (
                      <a
                        key={j}
                        href={item.href}
                        className="text-sm font-light text-brand-gray-light hover:opacity-70 transition-opacity"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={j} className="text-sm font-light text-brand-gray-light">
                        {line}
                      </p>
                    )
                  )}
                  {item.muted?.map((line, j) => (
                    <p key={`muted-${j}`} className="text-sm text-brand-gray-dark">
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Map */}
          <MapContainer className="mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.5!2d7.2615!3d43.7055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0f5e9c1f9a1%3A0x0!2s20%20Rue%20Th%C3%A9odore%20de%20Banville%2C%2006100%20Nice!5e0!3m2!1sfr!2sfr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MP Training Nice"
            />
          </MapContainer>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ButtonLink
              href="tel:0627683343"
              aria-label="Appeler MP Training Nice - 06 27 68 33 43"
            >
              APPELEZ-NOUS
            </ButtonLink>
            <SocialIcon
              href="https://www.instagram.com/mptraining_nice/"
              aria-label="Suivez MP Training Nice sur Instagram"
            >
              <Instagram className="w-4 h-4" />
            </SocialIcon>
          </div>
        </Container>
      </Section>

      {/* ==================== FOOTER ==================== */}
      <Footer>
        <FooterContent>
          <p>© 2026 MP Training Nice - Studio de coaching sportif privé à Nice</p>
          <FooterNav>
            <FooterLink href="#">Mentions légales</FooterLink>
            <FooterLink href="#">Politique de confidentialité</FooterLink>
          </FooterNav>
        </FooterContent>
      </Footer>
    </div>
  );
}
