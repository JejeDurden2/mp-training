/**
 * Types for programmatic SEO coaching pages
 */

export interface ContentSection {
  heading: string;
  body: string;
  listItems?: string[];
  icon?: string;
}

export interface PageSeo {
  title: string;
  description: string;
  h1: string;
  canonical: string;
  keywords: string[];
}

export interface PageCta {
  headline: string;
  description: string;
}

interface CoachingPageBase {
  slug: string;
  pageType: 'service' | 'persona';
  seo: PageSeo;
  heroImage: string;
  content: {
    eyebrow: string;
    intro: string;
    sections: ContentSection[];
  };
  recommendedCoachId: string;
  recommendedServiceIds: string[];
  relatedPageSlugs: string[];
  relevantFaqIndices: number[];
  testimonialId?: string;
  cta: PageCta;
}

export interface ServicePageData extends CoachingPageBase {
  pageType: 'service';
  serviceId: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface Solution {
  icon: string;
  title: string;
  description: string;
}

export interface PersonaPageData extends CoachingPageBase {
  pageType: 'persona';
  persona: {
    name: string;
    targetKeyword: string;
    painPoints: PainPoint[];
    solutions: Solution[];
  };
  pricingServiceIds: string[];
}

export type CoachingPageData = ServicePageData | PersonaPageData;
