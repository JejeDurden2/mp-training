import { MetadataRoute } from 'next';
import { allCoachingPages } from '@/lib/data/index';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mptraining.fr';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-02-16'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/coaching`,
      lastModified: new Date('2026-02-16'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date('2026-02-16'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...allCoachingPages.map((page) => ({
      url: `${baseUrl}/coaching/${page.slug}`,
      lastModified: new Date('2026-02-16'),
      changeFrequency: 'monthly' as const,
      priority: page.pageType === 'service' ? 0.8 : 0.7,
    })),
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date('2026-01-16'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: new Date('2026-01-16'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
