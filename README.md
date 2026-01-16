# SPA / Landing Page Boilerplate

Production-ready single-page application and landing page boilerplate built with Next.js 16, TypeScript, and Tailwind CSS. Optimized for performance, SEO, and Vercel deployment.

## 🚀 Features

- **⚡ Next.js 16**: Latest App Router with React Server Components
- **📘 TypeScript**: Full type safety with strict mode
- **🎨 Tailwind CSS**: Utility-first styling with custom design system
- **🔍 SEO-Ready**: Comprehensive metadata, Open Graph, structured data
- **📱 Responsive**: Mobile-first design approach
- **♿ Accessible**: WCAG 2.1 AA compliant with proper semantics
- **⚡ Performance**: Optimized for Core Web Vitals
- **🧪 Testing**: Vitest + Testing Library setup
- **✅ Code Quality**: ESLint + Prettier + Husky + lint-staged
- **🚢 Deploy-Ready**: Optimized for Vercel deployment
- **🤖 AI-Ready**: Comprehensive Claude Code skills and documentation

## 📋 Prerequisites

- Node.js >= 20
- npm, yarn, or pnpm

## 🛠️ Quick Start

### 1. Clone or Use This Template

```bash
# Use as-is or clone
cd spa-boilerplate

# Install dependencies
npm install
# or
pnpm install
```

### 2. Environment Setup

```bash
# Copy example env file
cp .env.local.example .env.local

# Edit with your values
# NEXT_PUBLIC_APP_URL="http://localhost:3000"
# NEXT_PUBLIC_APP_NAME="Your App Name"
```

### 3. Run Development Server

```bash
npm run dev
# or
pnpm dev

# Open http://localhost:3000
```

### 4. Customize Your App

See [Customization Guide](#-customization-guide) below.

## 📁 Project Structure

```
spa-boilerplate/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── layout.tsx          # Root layout + metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable components (create as needed)
│   ├── lib/                    # Utilities (create as needed)
│   └── types/                  # TypeScript types (create as needed)
├── public/                     # Static assets
│   └── robots.txt
├── .claude/
│   └── skills/                 # Claude Code skills
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── .eslintrc.js                # ESLint rules
├── .prettierrc                 # Prettier rules
├── CLAUDE.md                   # AI assistant instructions
└── README.md
```

## 🧰 Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Lint code
npm run type-check       # TypeScript type checking
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm test                 # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage
```

## 🎨 Customization Guide

### 1. Update App Metadata

**File**: `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your compelling description',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your App Name',
    description: 'Your description',
    url: 'https://yourapp.com',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your App Name',
    description: 'Your description',
    images: ['/og-image.png'],
  },
};
```

### 2. Customize Colors & Theme

**File**: `tailwind.config.ts`

```ts
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... add your color scale
        900: '#1e3a8a',
      },
      secondary: {
        // Your secondary colors
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    },
  },
},
```

**File**: `src/app/globals.css`

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
}
```

### 3. Add Your Branding

1. **Logo**: Add logo files to `public/`
2. **Favicon**: Replace `public/favicon.ico`
3. **OG Image**: Add `public/og-image.png` (1200x630px)
4. **App Icons**: Add PWA icons to `public/icons/`

### 4. Update Robots & Sitemap

**File**: `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://yourapp.com/sitemap.xml
```

**Generate Sitemap**: Create `src/app/sitemap.ts`

```ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourapp.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more URLs
  ];
}
```

### 5. Configure Environment Variables

**File**: `.env.local`

```env
NEXT_PUBLIC_APP_URL="https://yourapp.com"
NEXT_PUBLIC_APP_NAME="Your App"
NEXT_PUBLIC_GA_TRACKING_ID="G-XXXXXXXXXX"  # Optional
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

#### Via Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure:
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Set environment variables
7. Deploy!

### Environment Variables (Production)

Set in Vercel dashboard or via CLI:

```bash
vercel env add NEXT_PUBLIC_APP_URL production
vercel env add NEXT_PUBLIC_APP_NAME production
```

### Custom Domain

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. SSL certificate auto-generated

## 📊 SEO Optimization

### Included

- ✅ Metadata API (title, description, keywords)
- ✅ Open Graph tags (social media previews)
- ✅ Twitter Card tags
- ✅ robots.txt
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast loading (Next.js optimization)

### Add Later

- [ ] Sitemap generation (`src/app/sitemap.ts`)
- [ ] Structured data / JSON-LD (`src/app/layout.tsx`)
- [ ] Analytics (Google Analytics, Plausible)
- [ ] Performance monitoring (Vercel Analytics)
- [ ] A/B testing (Vercel Edge Config)

## ⚡ Performance Tips

1. **Images**: Use Next.js `<Image>` component
   ```tsx
   import Image from 'next/image';
   <Image src="/hero.jpg" alt="Hero" width={1200} height={600} priority />
   ```

2. **Fonts**: Use `next/font` for optimal loading
   ```tsx
   import { Inter } from 'next/font/google';
   const inter = Inter({ subsets: ['latin'] });
   ```

3. **Dynamic Imports**: Lazy load heavy components
   ```tsx
   const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
     loading: () => <p>Loading...</p>,
   });
   ```

4. **Server Components**: Use by default (no 'use client')

5. **Prefetching**: Automatic with `<Link>`

## 🧪 Testing

```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

**Example Test** (`src/app/page.test.tsx`):

```tsx
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders welcome message', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to Your App/i)).toBeInTheDocument();
  });
});
```

## 🤖 Working with Claude Code

This boilerplate is optimized for Claude Code CLI:

- Comprehensive documentation in `CLAUDE.md`
- Detailed skills in `.claude/skills/`
- Architecture guidelines and best practices

**Start a conversation:**

```bash
claude
# Or use the VSCode extension
```

**Example prompts:**
- "Add a hero section with CTA buttons"
- "Create a features section with cards"
- "Add a contact form with validation"
- "Implement dark mode toggle"
- "Create a pricing table"

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Complete AI-assisted development guide
- **[.claude/skills/](./.claude/skills/)** - Detailed documentation
  - Frontend architecture (React, Server Components)
  - SEO best practices
  - Testing strategies
  - Code quality guidelines
  - Design system patterns
  - React performance rules (45 rules from Vercel)
  - Web design guidelines

## 🎯 Use Cases

This boilerplate is perfect for:

- 🌐 Landing pages
- 📱 Marketing sites
- 🎨 Portfolio sites
- 📰 Blogs
- 🏢 Company websites
- 🚀 Product launch pages
- 📊 SaaS landing pages

## 🔒 Security Checklist

- [ ] Remove example environment variables
- [ ] Configure Content Security Policy
- [ ] Set up rate limiting (if needed)
- [ ] Validate all user inputs
- [ ] Sanitize content from CMS (if used)
- [ ] Configure CORS properly
- [ ] Keep dependencies updated

## 📝 License

MIT - Feel free to use this boilerplate for any project

## 🙏 Credits

Built with best practices from:
- Next.js documentation
- Vercel performance guidelines
- React best practices
- Web.dev Core Web Vitals

---

**Happy building! 🚀**

Need help? Check [CLAUDE.md](./CLAUDE.md) for detailed guidance or use Claude Code CLI.
