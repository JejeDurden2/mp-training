'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import Image from 'next/image';
import { Phone, X } from 'lucide-react';
import { coaches } from '@/lib/data';
import { cn } from '@/lib/utils';

// --- Context ---

interface PhoneModalContextValue {
  openPhoneModal: () => void;
}

const PhoneModalContext = createContext<PhoneModalContextValue | null>(null);

export function usePhoneModal(): PhoneModalContextValue {
  const ctx = useContext(PhoneModalContext);
  if (!ctx) {
    throw new Error('usePhoneModal must be used within PhoneModalProvider');
  }
  return ctx;
}

// --- Provider + Modal ---

export function PhoneModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPhoneModal = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, close]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <PhoneModalContext.Provider value={{ openPhoneModal }}>
      {children}

      {/* Modal Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Choisir un coach à appeler"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-mp-black/90 backdrop-blur-md"
          onClick={close}
          aria-hidden="true"
        />

        {/* Modal Content */}
        <div
          className={cn(
            'relative w-full max-w-lg rounded-2xl border border-mp-white/10 bg-mp-black/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl transition-all duration-300',
            isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4',
          )}
        >
          {/* Close Button */}
          <button
            onClick={close}
            className="absolute right-4 top-4 p-2 text-mp-white/60 transition-colors hover:text-mp-white"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>

          {/* Title */}
          <h2 className="mb-6 text-center font-heading text-2xl uppercase tracking-wider text-mp-white sm:text-3xl">
            Qui souhaitez-vous appeler ?
          </h2>

          {/* Coach Cards */}
          <div className="space-y-4">
            {coaches.map((coach) => (
              <a
                key={coach.id}
                href={`tel:${coach.phoneFormatted}`}
                className="glass-card flex items-center gap-4 rounded-xl p-4 transition-all hover:border-mp-neon/50 hover:shadow-[0_0_20px_rgba(0,128,255,0.2)]"
              >
                {/* Coach Photo */}
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-mp-neon/30">
                  <Image
                    src={coach.image}
                    alt={coach.fullName}
                    fill
                    className="object-cover"
                    style={{ objectPosition: coach.imageFocus }}
                  />
                </div>

                {/* Coach Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-lg uppercase tracking-wider text-mp-white">
                    {coach.name}
                  </p>
                  <p className="font-body text-sm text-mp-white/60 truncate">
                    {coach.title}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden font-body text-sm text-mp-neon sm:block">
                    {coach.phone}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mp-neon/20">
                    <Phone size={18} className="text-mp-neon neon-icon" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PhoneModalContext.Provider>
  );
}
