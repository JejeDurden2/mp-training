import { MetadataRoute } from 'next';
import { allCoachingPages } from '@/lib/data/index';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mptraining.fr';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/coaching`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...allCoachingPages.map((page) => ({
      url: `${baseUrl}/coaching/${page.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: page.pageType === 'service' ? 0.8 : 0.7,
    })),
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
