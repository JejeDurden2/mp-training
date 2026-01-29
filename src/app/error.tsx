'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-mp-black px-4">
      <div className="text-center">
        <h1 className="font-heading text-4xl uppercase tracking-wider text-mp-white md:text-6xl">
          Oops !
        </h1>
        <p className="mt-4 font-body text-mp-white/70">
          Une erreur est survenue. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="mt-8 rounded-full bg-mp-neon px-8 py-3 font-heading uppercase tracking-wider text-mp-black transition-all hover:shadow-[0_0_20px_rgba(0,255,178,0.5)]"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
