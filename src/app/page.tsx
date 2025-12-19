"use client";
import { useState } from 'react';

export default function MPTrainingLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  const coaches = [
    { name: "LÉO PAULET-VOLPINI", role: "FONDATEUR & COACH SPORTIF", desc: "Coach sportif diplômé et préparateur physique passionné, Léo vous accompagne dans votre transformation avec expertise et bienveillance. Fort de plusieurs années d'expérience en coaching privé à Nice, il propose un suivi personnalisé adapté à vos objectifs.", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80" },
    { name: "YANN MASSYN", role: "PRÉPARATEUR PHYSIQUE • TRIATHLÈTE", desc: "Vice-Champion du Monde IRONMAN 25-29 ans et triathlète longue distance, Yann met son expertise d'athlète de haut niveau au service de votre progression. Diplômé de l'UFR STAPS Nice, il vous accompagne avec rigueur et passion vers vos objectifs sportifs.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" }
  ];

  const services = [
    { title: "PERSONAL TRAINING", desc: "Séance individuelle de 60 minutes avec votre coach dédié. Programme personnalisé, suivi de progression et conseils nutritionnels pour des résultats optimaux.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", alt: "Personal training coach sportif Nice" },
    { title: "SMALL GROUP", desc: "Entraînement en petit groupe (4 personnes max) combinant renforcement musculaire et cardio. L'énergie du collectif avec l'attention d'un coaching personnalisé.", img: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&q=80", alt: "Cours collectif small group training Nice" },
    { title: "PRÉPARATION PHYSIQUE", desc: "Programme sur mesure pour sportifs amateurs ou confirmés. Optimisez vos performances et prévenez les blessures avec un suivi professionnel.", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80", alt: "Préparation physique sportif Nice" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <a href="#" className="text-xl sm:text-2xl font-bold tracking-wider">MP TRAINING</a>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm tracking-widest">
            <a href="#studio" className="hover:text-gray-400 transition">LE STUDIO</a>
            <a href="#services" className="hover:text-gray-400 transition">SERVICES</a>
            <a href="#coachs" className="hover:text-gray-400 transition">COACHS</a>
            <a href="#contact" className="hover:text-gray-400 transition">CONTACT</a>
            <a href="tel:0627683343" className="border border-white px-4 xl:px-6 py-2 hover:bg-white hover:text-black transition">APPELER</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-black border-t border-white/10 px-4 py-4 space-y-4 text-sm tracking-widest">
            <a href="#studio" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-gray-400">LE STUDIO</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-gray-400">SERVICES</a>
            <a href="#coachs" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-gray-400">COACHS</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-gray-400">CONTACT</a>
            <a href="tel:0627683343" className="block py-3 mt-2 text-center border border-white hover:bg-white hover:text-black transition">APPELER</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" alt="Salle de coaching privé MP Training Nice" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto py-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4 sm:mb-6">MP TRAINING</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-4">COACHING SPORTIF PRIVÉ À NICE</p>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto my-6 sm:my-8" />
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">Votre studio de personal training au cœur de Nice. Atteignez vos objectifs avec un accompagnement 100% personnalisé.</p>
          <a href="tel:0627683343" className="inline-block mt-8 sm:mt-10 border-2 border-white px-6 sm:px-10 py-3 sm:py-4 text-sm tracking-widest hover:bg-white hover:text-black transition duration-300">RÉSERVER MA SÉANCE</a>
        </div>
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </header>

      {/* Studio Section */}
      <section id="studio" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-center mb-4 sm:mb-6">VOTRE STUDIO DE COACHING PRIVÉ À NICE</h2>
          <div className="w-16 h-px bg-white mx-auto mb-8 sm:mb-12" />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">Bienvenue chez <strong>MP Training</strong>, votre espace dédié au coaching sportif personnalisé à Nice. Dans un cadre intimiste et professionnel, nos coachs diplômés vous accompagnent vers l'atteinte de vos objectifs.</p>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">Que vous souhaitiez perdre du poids, gagner en masse musculaire, améliorer votre condition physique ou préparer une compétition, nous construisons ensemble un programme sur mesure.</p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">Situés au <strong>20 Rue Théodore de Banville</strong> dans le quartier des Musiciens, nous vous accueillons du lundi au samedi pour des séances individuelles ou en petit groupe.</p>
            </div>
            <div className="relative order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" alt="Séance de personal training à Nice" className="w-full h-64 sm:h-80 lg:h-96 object-cover" />
              <div className="absolute inset-0 border border-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-center mb-4 sm:mb-6">NOS PRESTATIONS DE COACHING</h2>
          <div className="w-16 h-px bg-white mx-auto mb-10 sm:mb-16" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, i) => (
              <article key={i} className="group">
                <div className="relative overflow-hidden mb-4 sm:mb-6">
                  <img src={service.img} alt={service.alt} className="w-full h-56 sm:h-64 lg:h-72 object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-wider mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coachs" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-center mb-4 sm:mb-6">VOS COACHS SPORTIFS À NICE</h2>
          <div className="w-16 h-px bg-white mx-auto mb-10 sm:mb-16" />
          <div className="grid sm:grid-cols-2 gap-10 sm:gap-12">
            {coaches.map((coach, i) => (
              <article key={i} className="text-center">
                <div className="relative inline-block mb-4 sm:mb-6">
                  <img src={coach.img} alt={`${coach.name} - Coach sportif Nice`} className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 object-cover rounded-full mx-auto" />
                  <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-wider mb-2">{coach.name}</h3>
                <p className="text-gray-400 tracking-wider mb-3 sm:mb-4 text-xs sm:text-sm">{coach.role}</p>
                <p className="text-gray-300 leading-relaxed text-sm px-2">{coach.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-center mb-4 sm:mb-6">CONTACTEZ-NOUS</h2>
          <div className="w-16 h-px bg-white mx-auto mb-10 sm:mb-16" />
          
          {/* Contact Info - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 mb-12 sm:mb-16">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 border border-white/30 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <p className="font-semibold text-white tracking-wider text-sm mb-2">ADRESSE</p>
              <p className="text-gray-400 text-sm">20 Rue Théodore de Banville</p>
              <p className="text-gray-400 text-sm">06100 Nice</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 border border-white/30 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <p className="font-semibold text-white tracking-wider text-sm mb-2">TÉLÉPHONE</p>
              <a href="tel:0627683343" className="text-gray-400 text-sm hover:text-white transition">06 27 68 33 43</a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 border border-white/30 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="font-semibold text-white tracking-wider text-sm mb-2">HORAIRES</p>
              <p className="text-gray-400 text-sm">Lun - Sam : 8h - 21h</p>
              <p className="text-gray-500 text-sm">Sur rendez-vous</p>
            </div>
          </div>

          {/* Google Maps - Full width */}
          <div className="relative">
            <div className="w-full h-64 sm:h-72 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.5!2d7.2615!3d43.7055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0f5e9c1f9a1%3A0x0!2s20%20Rue%20Th%C3%A9odore%20de%20Banville%2C%2006100%20Nice!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MP Training Nice - 20 Rue Théodore de Banville"
              />
            </div>
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />
          </div>

          {/* CTA & Social */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 sm:mt-12">
            <a href="tel:0627683343" className="border-2 border-white px-8 sm:px-10 py-3 sm:py-4 text-sm tracking-widest hover:bg-white hover:text-black transition duration-300">APPELEZ-NOUS</a>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook MP Training" className="w-10 h-10 sm:w-11 sm:h-11 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" aria-label="Instagram MP Training" className="w-10 h-10 sm:w-11 sm:h-11 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
          <p className="text-center sm:text-left">© 2024 MP Training Nice - Coach sportif privé</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition">Mentions légales</a>
            <a href="#" className="hover:text-white transition">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
