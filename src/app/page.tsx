"use client";
import { useState } from 'react';

// ============================================
// DATA
// ============================================
const coaches = [
  {
    name: "LÉO PAULET-VOLPINI",
    role: "COACH SPORTIF • BASKETTEUR",
    desc: "Coach sportif diplômé de l'UFR STAPS Nice et préparateur physique passionné, Léo vous accompagne dans votre transformation avec expertise et bienveillance. Fort de plusieurs années d'expérience en coaching privé à Nice, il propose un suivi personnalisé adapté à vos objectifs.",
    img: "/images/Leo.jpeg",
    position: "center 10%"
  },
  {
    name: "YANN MASSYN",
    role: "COACH SPORTIF • TRIATHLÈTE",
    desc: "Vice-Champion du Monde IRONMAN 25-29 ans et triathlète longue distance, Yann met son expertise d'athlète de haut niveau au service de votre progression. Diplômé de l'UFR STAPS Nice, il vous accompagne avec rigueur et passion vers vos objectifs sportifs.",
    img: "/images/Yann.jpeg",
    position: "center center"
  }
];

const services = [
  {
    title: "PERSONAL TRAINING",
    desc: "Séance individuelle de 60 minutes avec votre coach dédié. Programme personnalisé, suivi de progression et conseils nutritionnels pour des résultats optimaux.",
    img: "/images/room4.jpeg",
    alt: "Personal training coach sportif Nice"
  },
  {
    title: "SMALL GROUP",
    desc: "Entraînement en petit groupe (4 personnes max) combinant renforcement musculaire et cardio. L'énergie du collectif avec l'attention d'un coaching personnalisé.",
    img: "/images/room5.jpeg",
    alt: "Cours collectif small group training Nice"
  },
  {
    title: "PRÉPARATION PHYSIQUE",
    desc: "Programme sur mesure pour sportifs amateurs ou confirmés. Optimisez vos performances et prévenez les blessures avec un suivi professionnel.",
    img: "/images/room3.jpeg",
    alt: "Préparation physique sportif Nice"
  }
];

// ============================================
// ICONS
// ============================================
const icons = {
  menu: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />,
  close: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />,
  arrow: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />,
  location: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
  phone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
  clock: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
};

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
          <a href="#">
            <img src="/images/logo.svg" alt="MP Training Nice" className="h-10 block" />
          </a>
          
          <div className="nav-menu hidden lg:flex">
            <a href="#studio" className="nav-link">LE STUDIO</a>
            <a href="#services" className="nav-link">SERVICES</a>
            <a href="#coachs" className="nav-link">COACHS</a>
            <a href="#contact" className="nav-link">CONTACT</a>
            <a href="tel:0627683343" className="btn btn-sm">APPELER</a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? icons.close : icons.menu}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden p-4 bg-black border-t border-white/10 font-title text-sm tracking-widest">
            {['studio', 'services', 'coachs', 'contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block py-2 nav-link">
                {id.toUpperCase()}
              </a>
            ))}
            <a href="tel:0627683343" className="btn btn-sm block text-center mt-4">APPELER</a>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <header className="hero">
        <div className="hero-overlay" />
        <img src="/images/room1.jpeg" alt="Salle MP Training Nice" className="hero-bg" />
        
        <div className="hero-content">
          <h1 className="sr-only">MP Training - Coaching Sportif Privé à Nice</h1>
          <img src="/images/logo.svg" alt="MP Training" className="hero-logo" />
          <p className="font-title text-2xl mb-4">COACHING SPORTIF PRIVÉ À NICE</p>
          <div className="neon-line-hero" />
          <p className="font-body text-lg max-w-2xl mx-auto">
            Votre studio de personal training au cœur de Nice. Atteignez vos objectifs avec un accompagnement 100% personnalisé.
          </p>
          <a href="tel:0627683343" className="btn mt-10 inline-block">RÉSERVER MA SÉANCE</a>
        </div>

        <div className="hero-arrow animate-bounce hidden sm:block">
          <svg className="neon-arrow" fill="none" viewBox="0 0 24 24">{icons.arrow}</svg>
        </div>
      </header>

      {/* ==================== STUDIO ==================== */}
      <section id="studio" className="section bg-black">
        <div className="container">
          <h2 className="section-title">VOTRE STUDIO DE COACHING PRIVÉ À NICE</h2>
          <div className="neon-line" />
          
          <div className="grid-2">
            <div className="font-body">
              <p className="mb-6">Bienvenue chez MP Training, votre espace dédié au coaching sportif personnalisé à Nice. Dans un cadre intimiste et professionnel, nos coachs diplômés vous accompagnent vers l'atteinte de vos objectifs.</p>
              <p className="mb-6">Que vous souhaitiez perdre du poids, gagner en masse musculaire, améliorer votre condition physique ou préparer une compétition, nous construisons ensemble un programme sur mesure.</p>
              <p>Situés au 20 Rue Théodore de Banville dans le quartier des Musiciens, nous vous accueillons du lundi au samedi pour des séances individuelles ou en petit groupe.</p>
            </div>
            <div className="relative">
              <img src="/images/room2.jpeg" alt="Personal training Nice" className="w-full h-96 object-cover block" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="section bg-dark">
        <div className="container">
          <h2 className="section-title">NOS PRESTATIONS DE COACHING</h2>
          <div className="neon-line" />
          
          <div className="grid-auto">
            {services.map((service, i) => (
              <article key={i}>
                <div className="card-image">
                  <img src={service.img} alt={service.alt} />
                </div>
                <h3 className="font-title text-xl mb-3">{service.title}</h3>
                <p className="font-body text-sm">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== COACHES ==================== */}
      <section id="coachs" className="section bg-black">
        <div className="container-sm">
          <h2 className="section-title">VOS COACHS SPORTIFS À NICE</h2>
          <div className="neon-line-white" />
          
          <div className="grid-auto">
            {coaches.map((coach, i) => (
              <article key={i} className="flex-center">
                <div className="avatar">
                  <img 
                    src={coach.img} 
                    alt={`${coach.name} - Coach Nice`}
                    style={{ objectPosition: coach.position }}
                  />
                </div>
                <h3 className="font-title text-xl mb-2">{coach.name}</h3>
                <p className="text-muted text-xs tracking-widest mb-4">{coach.role}</p>
                <p className="font-body text-sm text-center">{coach.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="section bg-dark">
        <div className="container">
          <h2 className="section-title">CONTACTEZ-NOUS</h2>
          <div className="neon-line-white" />
          
          {/* Contact Info */}
          <div className="grid-auto mb-16">
            {[
              { icon: icons.location, label: 'ADRESSE', lines: ['20 Rue Théodore de Banville', '06100 Nice'] },
              { icon: icons.phone, label: 'TÉLÉPHONE', lines: ['06 27 68 33 43'], href: 'tel:0627683343' },
              { icon: icons.clock, label: 'HORAIRES', lines: ['Lun - Sam : 8h - 21h'], muted: ['Sur rendez-vous'] }
            ].map((item, i) => (
              <div key={i} className="flex-center">
                <div className="neon-icon">
                  <svg className="neon-svg" fill="none" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <p className="font-title text-sm mb-2">{item.label}</p>
                {item.lines.map((line, j) => (
                  item.href && j === 0 ? (
                    <a key={j} href={item.href} className="font-body text-sm nav-link">{line}</a>
                  ) : (
                    <p key={j} className="font-body text-sm">{line}</p>
                  )
                ))}
                {item.muted?.map((line, j) => (
                  <p key={`muted-${j}`} className="text-sm text-muted">{line}</p>
                ))}
              </div>
            ))}
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
          <div className="flex-center gap-6">
            <a href="tel:0627683343" className="btn">APPELEZ-NOUS</a>
            <a href="https://www.instagram.com/mptraining_nice/" aria-label="Instagram" className="social-icon">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{icons.instagram}</svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 MP Training Nice - Coach sportif privé</p>
          <div className="flex gap-6">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
