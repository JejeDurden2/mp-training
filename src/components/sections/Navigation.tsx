"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-brand-gray-dark/30"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="MP Training Nice - Retour à l'accueil">
          <Image
            src="/images/logo.svg"
            alt="MP Training Nice - Coaching Sportif Privé"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <div
          className="hidden lg:flex items-center gap-8 font-audiowide text-sm tracking-widest"
          role="menubar"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white transition-opacity hover:opacity-70"
              role="menuitem"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="tel:0627683343"
            size="sm"
            aria-label="Appeler MP Training Nice"
          >
            APPELER
          </ButtonLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden p-4 bg-black border-t border-white/10 font-audiowide text-sm tracking-widest"
          role="menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-white transition-opacity hover:opacity-70"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="tel:0627683343"
            size="sm"
            className="block text-center mt-4 w-full"
            aria-label="Appeler MP Training Nice"
          >
            APPELER
          </ButtonLink>
        </div>
      )}
    </nav>
  );
}
