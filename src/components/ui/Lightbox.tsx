'use client';

import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 p-2 text-cream transition-all duration-200 ease-out hover:bg-gold-heritage/20 hover:border-gold-heritage/30 hover:text-gold-soft"
        aria-label="Fermer"
      >
        <X size={24} />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-10 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 p-3 text-cream transition-all duration-200 ease-out hover:bg-gold-heritage/20 hover:border-gold-heritage/30 hover:text-gold-soft shadow-soft"
        aria-label="Image précédente"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Image */}
      <div
        className="relative h-[80vh] w-[90vw] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-10 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 p-3 text-cream transition-all duration-200 ease-out hover:bg-gold-heritage/20 hover:border-gold-heritage/30 hover:text-gold-soft shadow-soft"
        aria-label="Image suivante"
      >
        <ChevronRight size={32} />
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 px-4 py-2 text-sm text-cream font-medium shadow-soft">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
