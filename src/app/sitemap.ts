import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tulisanaesthetic.id';

  const fontRoutes = [
    'angka',
    'berkilau',
    'garis',
    'gelembung',
    'gothic-fraktur',
    'kecil',
    'kotak',
    'memutar',
    'menakutkan',
    'nama-keren',
    'terhubung',
  ];

  const platformRoutes = ['discord', 'facebook', 'instagram', 'tiktok', 'whatsapp'];

  const gameRoutes = ['free-fire', 'pubg-mobile', 'mobile-legends', 'roblox', 'cod-mobile'];

  const symbolRoutes = [
    '',
    '/bintang',
    '/mahkota',
    '/bunga',
    '/panah',
    '/emoji',
    '/kaomoji',
  ];

  const blogArticleRoutes = ['apa-itu-unicode', 'cara-membuat-nama-keren', 'font-instagram', 'font-tiktok', 'font-whatsapp'];

  const mainHubRoutes = ['blog', 'bold', 'privacy', 'terms', 'disclaimer', 'contact'];

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
    ...symbolEntries,
    ...blogArticleEntries,
    ...mainHubEntries,
  ];
}
