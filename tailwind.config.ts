import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // MP Training Brand Colors
        'mp-black': '#000000',
        'mp-white': '#ffffff',
        'mp-neon': '#0080ff',
        'neon-glow': 'rgba(0, 128, 255, 0.5)',
        'neon-dim': 'rgba(0, 128, 255, 0.2)',

        // Glassmorphism Colors
        'glass-dark': 'rgba(0, 0, 0, 0.4)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'glass-hover': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        heading: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // Typography Scale
        h1: ['4.5rem', { lineHeight: '1', letterSpacing: '0.05em' }], // 72px
        'h1-mobile': ['3rem', { lineHeight: '1.1', letterSpacing: '0.05em' }], // 48px
        h2: ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.05em' }], // 56px
        'h2-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '0.05em' }], // 40px
        h3: ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.025em' }], // 40px
        'h3-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '0.025em' }], // 32px
        h4: ['2rem', { lineHeight: '1.3' }], // 32px
        h5: ['1.5rem', { lineHeight: '1.4' }], // 24px
        h6: ['1.25rem', { lineHeight: '1.4' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.75' }], // 18px
        'body-sm': ['0.875rem', { lineHeight: '1.6' }], // 14px
      },
      boxShadow: {
        // Custom Shadows for Glassmorphism & Neon
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        neon: '0 0 20px rgba(0, 128, 255, 0.6)',
        'neon-lg': '0 0 30px rgba(0, 128, 255, 0.8)',
        'neon-xl': '0 0 40px rgba(0, 128, 255, 0.9)',
        card: '0 4px 12px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.6)',
      },
      spacing: {
        section: '120px',
        'section-mobile': '80px',
      },
      maxWidth: {
        container: '1280px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
