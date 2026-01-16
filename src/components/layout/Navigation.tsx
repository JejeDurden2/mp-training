'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { businessInfo } from '@/lib/data';

const navLinks = [
  { href: '#studio', label: 'Le Studio' },
  { href: '#services', label: 'Services' },
  { href: '#coachs', label: 'Coachs' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          isScrolled ? 'glass-nav py-3' : 'bg-transparent py-4',
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/images/logo.svg"
                alt="MP Training Nice - Logo"
                width={60}
                height={60}
                className="h-12 w-auto md:h-14"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative font-heading text-sm uppercase tracking-wider text-mp-white transition-colors hover:text-mp-neon"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-mp-neon transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href={`tel:${businessInfo.phoneFormatted}`}
                className="neon-button flex items-center gap-2 rounded-full px-5 py-2.5 font-heading text-sm uppercase tracking-wider text-mp-white transition-all hover:shadow-neon-lg"
              >
                <Phone size={16} />
                Appeler
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="relative z-10 p-2 text-mp-white md:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu size={28} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-mp-black/95 backdrop-blur-xl transition-all duration-300 md:hidden',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="container-custom flex h-full flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between py-4">
            <Image
              src="/images/logo.svg"
              alt="MP Training Nice - Logo"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-mp-white"
              aria-label="Fermer le menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-3xl uppercase tracking-wider text-mp-white transition-colors hover:text-mp-neon"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu CTA */}
          <div className="pb-12 text-center">
            <a
              href={`tel:${businessInfo.phoneFormatted}`}
              className="neon-button inline-flex items-center gap-3 rounded-full px-8 py-4 font-heading text-lg uppercase tracking-wider text-mp-white"
            >
              <Phone size={20} />
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
