// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.techjork.com/',
      lastModified: new Date('2025-10-12'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.techjork.com/about_us',
      lastModified: new Date('2025-10-09'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://www.techjork.com/contact_us',
      lastModified: new Date('2025-10-09'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    /* {
      url: 'https://www.techjork.com/privacy_policy',
    lastModified: new Date('2025-10-01'), 
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.techjork.com/terms_and_conditions',
    lastModified: new Date('2025-10-01'), 
      changeFrequency: 'yearly',
      priority: 0.5,
    },*/
  ];
}
