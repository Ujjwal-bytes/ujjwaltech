import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ujjwaltech.site';
  const currentDate = new Date();

  // ========== ONLY PAGES THAT EXIST ==========
  const pages = [
    // ===== HOME =====
    {
      url: '',
      priority: 1.0,
      changefreq: 'daily' as const,
    },
    // ===== SERVICE PAGES =====
    {
      url: '/web-development',
      priority: 0.9,
      changefreq: 'weekly' as const,
    },
    {
      url: '/website-design',
      priority: 0.9,
      changefreq: 'weekly' as const,
    },
    {
      url: '/ecommerce-development',
      priority: 0.9,
      changefreq: 'weekly' as const,
    },
    {
      url: '/seo-services',
      priority: 0.9,
      changefreq: 'weekly' as const,
    },
    // ===== OTHER PAGES =====
    {
      url: '/pricing',
      priority: 0.8,
      changefreq: 'weekly' as const,
    },
    {
      url: '/portfolio',
      priority: 0.8,
      changefreq: 'weekly' as const,
    },
    {
      url: '/about',
      priority: 0.7,
      changefreq: 'weekly' as const,
    },
    {
      url: '/contact',
      priority: 0.7,
      changefreq: 'weekly' as const,
    },
    // ===== LOCATION PAGES (If they exist) =====
    {
      url: '/locations/mumbai',
      priority: 0.8,
      changefreq: 'weekly' as const,
    },
    {
      url: '/locations/navi-mumbai',
      priority: 0.7,
      changefreq: 'weekly' as const,
    },
    {
      url: '/locations/thane',
      priority: 0.7,
      changefreq: 'weekly' as const,
    },
    {
      url: '/locations/pune',
      priority: 0.7,
      changefreq: 'weekly' as const,
    },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}