export type {
  CoachingPageData,
  ServicePageData,
  PersonaPageData,
  ContentSection,
  PageSeo,
  PageCta,
  PainPoint,
  Solution,
} from './types';
export { servicePages } from './service-pages';
export { personaPages } from './personas';

import { servicePages } from './service-pages';
import { personaPages } from './personas';
import type { CoachingPageData } from './types';

export const allCoachingPages: CoachingPageData[] = [...servicePages, ...personaPages];

export function getCoachingPage(slug: string): CoachingPageData | undefined {
  return allCoachingPages.find((page) => page.slug === slug);
}
