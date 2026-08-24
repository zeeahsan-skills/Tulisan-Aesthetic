import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tulisan-aesthetic.vercel.app';

  const fontRoutes = [
    'huruf-keren',
    'tebal',
    'miring-kursif',
    'gelembung',
    'gothic-fraktur',
    'tiny',
    'angka',
    'berkilau',
    'garis',
    'glitch',
    'kotak',
    'memutar',
    'menakutkan',
    'nama-keren',
    'terhubung',
  ];

  const platformRoutes = [
    'instagram',
    'tiktok',
    'whatsapp',
    'facebook',
    'discord',
    'twitter-x',
  ];

  const gameRoutes = [
    'valorant',
  ];

  const standaloneGameRoutes = [
    'free-fire',
    'pubg-mobile',
    'mobile-legends',
    'roblox',
    'cod-mobile',
    'nama-game-keren',
  ];

  const symbolRoutes = [
    '',
    '/bintang',
    '/hati',
    '/bunga',
    '/panah',
    '/emoji',
    '/mahkota',
    '/kaomoji',
  ];

  const blogArticleRoutes = [
    'apa-itu-unicode',
    'cara-membuat-nama-keren',
    'font-instagram',
    'font-tiktok',
    'font-whatsapp',
  ];

  const mainHubRoutes = [
    'platform',
    'game',
    'blog',
    'privacy',
    'terms',
    'disclaimer',
    'contact',
  ];

  const fontEntries: MetadataRoute.Sitemap = fontRoutes.map((route) => ({
    url: `${baseUrl}/font/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const platformEntries: MetadataRoute.Sitemap = platformRoutes.map((route) => ({
    url: `${baseUrl}/platform/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const gameEntries: MetadataRoute.Sitemap = gameRoutes.map((route) => ({
    url: `${baseUrl}/game/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const standaloneGameEntries: MetadataRoute.Sitemap = standaloneGameRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const symbolEntries: MetadataRoute.Sitemap = symbolRoutes.map((route) => ({
    url: `${baseUrl}/simbol${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const blogArticleEntries: MetadataRoute.Sitemap = blogArticleRoutes.map((route) => ({
    url: `${baseUrl}/blog/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const mainHubEntries: MetadataRoute.Sitemap = mainHubRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: route === 'blog' ? 'daily' : 'monthly',
    priority: route === 'blog' ? 0.9 : 0.5,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...fontEntries,
    ...platformEntries,
    ...gameEntries,
    ...standaloneGameEntries,
    ...symbolEntries,
    ...blogArticleEntries,
    ...mainHubEntries,
  ];
}
