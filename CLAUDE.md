# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MP Training is a single-page landing website for a private sports coaching studio in Nice, France. Built with Next.js 16 and Tailwind CSS v4.

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16.1.0 with App Router
- **Styling**: Tailwind CSS v4 with `@theme` directive for CSS variables
- **Components**: shadcn/ui pattern with class-variance-authority
- **Images**: next/image with priority loading for hero
- **Fonts**: Audiowide (titles) and Inter (body) via `next/font/google`
- **Icons**: Lucide React

### Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main entry - imports section components
│   ├── layout.tsx        # Root layout with SEO metadata
│   ├── globals.css       # Tailwind v4 theme variables
│   ├── schema.tsx        # Schema.org structured data
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt config
├── components/
│   ├── sections/         # Page sections (Navigation, Hero, Studio, etc.)
│   └── ui/               # Reusable UI components (Button, Card, etc.)
└── lib/
    ├── data.ts           # Static content data (coaches, services, etc.)
    └── utils.ts          # cn() utility for className merging
```

### Section Components

Each section is a self-contained component in `src/components/sections/`:
- `Navigation.tsx` - Fixed header with mobile menu
- `HeroSection.tsx` - Full-screen hero with logo and CTA
- `StudioSection.tsx` - About the studio
- `ServicesSection.tsx` - Service cards grid
- `CoachesSection.tsx` - Coach profiles
- `ContactSection.tsx` - Contact info, map, and social links
- `FooterSection.tsx` - Footer with legal links

### UI Components

Located in `src/components/ui/`, following shadcn/ui patterns:
- `button.tsx` - ButtonLink with variants (default, accent, ghost) and sizes
- `section.tsx` - Section, SectionHeader, SectionTitle, NeonLine, Container
- `card.tsx` - Card, CardImage, CardTitle, CardDescription
- `icon.tsx` - NeonIcon, NeonSvg, NeonArrow (neon glow effects)
- Other: avatar, navigation, hero, footer, social, map

### Theme Variables (Tailwind v4)

Defined in `globals.css` under `@theme`:
```css
--color-brand-black: #000000
--color-brand-dark: #0a0a0a
--color-brand-white: #ffffff
--color-brand-gray-light: #bcbcbc
--color-brand-gray-dark: #5b5a5a
--color-brand-accent: #0080ff  /* Blue neon accent */
```

### SEO

- Domain: `mptraining.fr`
- Schema.org: LocalBusiness, SportsActivityLocation, Person (coaches), WebSite, BreadcrumbList
- All images have descriptive alt tags
- Geo-targeting for Nice, France (06100)

### Assets

- Images: `public/images/` (logo.svg, room photos, coach photos)
- Favicons: `public/` and `src/app/` (multiple sizes)
- PWA manifest: `public/manifest.json`

### Accessibility

- ARIA labels on navigation, sections, and interactive elements
- Role attributes for semantic structure
- Focus-visible styles defined globally
- Skip link support (class `.skip-link`)
