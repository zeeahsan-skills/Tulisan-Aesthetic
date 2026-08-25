import type { Metadata } from 'next';
import CoolNamesArticleClientPage from './CoolNamesArticleClientPage';

export const metadata: Metadata = {
  title: 'Cara Membuat Nama Keren & Aesthetic untuk Game & Sosmed 2026',
  description:
    'Panduan lengkap membuat nama keren untuk Instagram, TikTok, WhatsApp, Discord, Free Fire, PUBG Mobile, Mobile Legends, Roblox, dan platform lainnya dengan font Unicode & simbol.',
  keywords: [
    'cara membuat nama keren',
    'nama keren aesthetic',
    'nickname ff keren',
    'nama pubg aesthetic',
    'squad mlbb aesthetic',
    'username tiktok keren',
    'bio instagram aesthetic',
    'generator nama keren',
  ],
  authors: [{ name: 'Tulisan Aesthetic Editorial Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/blog/cara-membuat-nama-keren',
  },
  openGraph: {
    title: 'Cara Membuat Nama Keren & Aesthetic untuk Game & Sosmed 2026',
    description:
      'Panduan lengkap membuat nama keren untuk Instagram, TikTok, WhatsApp, Discord, Free Fire, PUBG Mobile, Mobile Legends, Roblox, dan platform lainnya.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/cara-membuat-nama-keren',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2026-08-25T00:00:00.000Z',
    authors: ['Tulisan Aesthetic Editorial Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cara Membuat Nama Keren & Aesthetic untuk Game & Sosmed',
    description: 'Panduan lengkap membuat nama keren aesthetic untuk seluruh game & media sosial.',
  },
  robots: 'index, follow',
};

export default function CoolNamesArticlePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tulisan-aesthetic.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog Hub',
        item: 'https://tulisan-aesthetic.vercel.app/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Cara Membuat Nama Keren',
        item: 'https://tulisan-aesthetic.vercel.app/blog/cara-membuat-nama-keren',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cara Membuat Nama Keren & Aesthetic untuk Game & Sosmed',
    description:
      'Panduan lengkap membuat nama keren untuk Instagram, TikTok, WhatsApp, Discord, Free Fire, PUBG Mobile, Mobile Legends, Roblox, dan platform lainnya.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/cara-membuat-nama-keren',
    datePublished: '2026-08-25T00:00:00.000Z',
    dateModified: '2026-08-25T00:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: 'Tulisan Aesthetic Editorial Team',
      url: 'https://tulisan-aesthetic.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tulisan Aesthetic',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tulisan-aesthetic.vercel.app/favicon.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://tulisan-aesthetic.vercel.app/blog/cara-membuat-nama-keren',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CoolNamesArticleClientPage />
    </>
  );
}
