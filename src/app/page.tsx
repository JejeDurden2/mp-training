"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

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
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="nav-link">
            <img
              src="/images/logo.svg"
              alt="MP Training Nice - Coaching Sportif Privé"
              className="h-10 block"
            />
          </a>

          <div className="nav-menu hidden md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a
              href="tel:0627683343"
              className="btn btn-sm"
              aria-label="Appeler MP Training Nice"
            >
              APPELER
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-brand-gray-dark/30 px-4 py-6">
            <div className="flex flex-col gap-4 font-audiowide text-sm tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0627683343"
                className="btn btn-sm text-center mt-4"
                aria-label="Appeler MP Training Nice"
              >
                APPELER
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <header className="hero">
        <div className="hero-overlay" />
        <img
          src="/images/room1.jpeg"
          alt="Studio de coaching sportif privé MP Training à Nice - Salle équipée pour personal training"
          className="hero-bg"
        />

        <div className="hero-content">
          <h1 className="sr-only">MP Training - Coaching Sportif Privé à Nice</h1>
          <img
            src="/images/logo.svg"
            alt="Logo MP Training Nice - Coaching sportif privé"
            className="hero-logo"
          />
          <p className="font-audiowide text-2xl tracking-wider text-white mb-4">
            COACHING SPORTIF PRIVÉ À NICE
          </p>
          <div className="neon-line-hero" />
          <p className="font-inter font-light text-lg text-brand-gray-light max-w-2xl mx-auto">
            Votre studio de personal training au cœur de Nice. Atteignez vos
            objectifs avec un accompagnement 100% personnalisé.
          </p>
          <a
            href="tel:0627683343"
            className="btn mt-10 inline-block"
            aria-label="Réserver une séance de coaching sportif - Appeler MP Training Nice"
          >
            RÉSERVER MA SÉANCE
          </a>
        </div>

        <div className="hero-arrow">
          <svg className="neon-arrow animate-bounce" fill="none" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </header>

      {/* ==================== STUDIO ==================== */}
      <section id="studio" className="section py-24 px-4 sm:py-24 sm:px-6 bg-black">
        <div className="container">
          <div className="flex-center">
            <h2 className="section-title">VOTRE STUDIO DE COACHING PRIVÉ À NICE</h2>
            <div className="neon-line" />
          </div>

          <div className="grid-2">
            <div className="space-y-6 font-body">
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
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="section py-24 px-4 sm:py-24 sm:px-6 bg-brand-dark">
        <div className="container">
          <div className="flex-center">
            <h2 className="section-title">NOS PRESTATIONS DE COACHING</h2>
            <div className="neon-line" />
          </div>

          <div className="grid-auto">
            {services.map((service, i) => (
              <article key={i} className="text-center">
                <div className="card-image">
                  <img
                    src={service.img}
                    alt={service.alt}
                  />
                </div>
                <h3 className="font-title text-xl mb-3">{service.title}</h3>
                <p className="font-body text-sm">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== COACHES ==================== */}
      <section id="coachs" className="section py-24 px-4 sm:py-24 sm:px-6 bg-black">
        <div className="container-sm">
          <div className="flex-center">
            <h2 className="section-title">VOS COACHS SPORTIFS À NICE</h2>
            <div className="neon-line-white" />
          </div>

          <div className="grid-2">
            {coaches.map((coach, i) => (
              <article key={i} className="flex-center text-center">
                <div className="avatar">
                  <img
                    src={coach.img}
                    alt={coach.alt}
                    style={{ objectPosition: coach.position }}
                  />
                </div>
                <h3 className="font-title text-xl mb-2">{coach.name}</h3>
                <p className="text-muted text-xs tracking-widest mb-4">
                  {coach.role}
                </p>
                <p className="font-body text-sm">{coach.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="section py-24 px-4 sm:py-24 sm:px-6 bg-brand-dark">
        <div className="container">
          <div className="flex-center">
            <h2 className="section-title">CONTACTEZ-NOUS</h2>
            <div className="neon-line-white" />
          </div>

          {/* Contact Info */}
          <div className="grid-auto mb-16">
            {contactInfo.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="flex-center text-center">
                  <div className="neon-icon">
                    <IconComponent className="neon-svg" />
                  </div>
                  <p className="font-title text-sm mb-2">{item.label}</p>
                  {item.lines.map((line, j) =>
                    item.href && j === 0 ? (
                      <a
                        key={j}
                        href={item.href}
                        className="font-body text-sm hover:opacity-70 transition-opacity"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={j} className="font-body text-sm">
                        {line}
                      </p>
                    )
                  )}
                  {item.muted?.map((line, j) => (
                    <p key={`muted-${j}`} className="text-muted text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Map */}
          <div className="map-container mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.5!2d7.2615!3d43.7055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0f5e9c1f9a1%3A0x0!2s20%20Rue%20Th%C3%A9odore%20de%20Banville%2C%2006100%20Nice!5e0!3m2!1sfr!2sfr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MP Training Nice"
            />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:0627683343"
              className="btn"
              aria-label="Appeler MP Training Nice - 06 27 68 33 43"
            >
              APPELEZ-NOUS
            </a>
            <a
              href="https://www.instagram.com/mptraining_nice/"
              className="social-icon"
              aria-label="Suivez MP Training Nice sur Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 MP Training Nice - Studio de coaching sportif privé à Nice</p>
          <nav className="flex gap-6">
            <a href="#" rel="nofollow">Mentions légales</a>
            <a href="#" rel="nofollow">Politique de confidentialité</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
