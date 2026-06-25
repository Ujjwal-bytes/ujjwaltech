import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.ujjwaltech.site';
  
  return {
    rules: [
      // ===== MAIN RULE FOR ALL CRAWLERS =====
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/static/',
          '/404',
          '/500',
          '/_vercel/',
          '/*.json$',
          '/*.xml$',
        ],
      },
      // ===== GOOGLE BOT SPECIFIC =====
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
        crawlDelay: 1,
      },
      // ===== GOOGLE IMAGE BOT =====
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/*.jpg$',
          '/*.png$',
          '/*.webp$',
          '/*.jpeg$',
        ],
        disallow: [],
      },
      // ===== BING BOT =====
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
        crawlDelay: 2,
      },
      // ===== YANDEX BOT =====
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
        crawlDelay: 3,
      },
      // ===== BRAVE BOT =====
      {
        userAgent: 'BraveBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
      },
      // ===== DUCKDUCKGO BOT =====
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
      },
      // ===== BAIDU BOT =====
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
        crawlDelay: 5,
      },
      // ===== SEARCH ENGINE FOR MOBILE =====
      {
        userAgent: 'Googlebot-Mobile',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
      },
      // ===== SEARCH ENGINE FOR DESKTOP =====
      {
        userAgent: 'Googlebot-Desktop',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
      },
      // ===== AI CRAWLERS (Block if needed) =====
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        disallow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        disallow: '/',
      },
    ],
    // ===== SITEMAPS =====
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-news.xml`,
    ],
    // ===== HOST =====
    host: baseUrl,
  };
}