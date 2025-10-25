// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All search engines
        userAgent: '*',
        allow: ['/'], // Allow all main pages
        disallow: ['/private/'], // Block any private/internal pages if you have them
      },
    ],
    // Sitemap location
    sitemap: 'https://www.techjork.com/sitemap.xml',
  };
}
