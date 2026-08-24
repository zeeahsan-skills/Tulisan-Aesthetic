import type { Metadata } from 'next';
import TikTokArticleClientPage from './TikTokArticleClientPage';

export const metadata: Metadata = {
  title: 'Font TikTok: Cara Membuat Tulisan Aesthetic untuk Profil & Caption',
  description:
    'Pelajari cara menggunakan font TikTok dengan Unicode untuk membuat profil, username, bio, caption, dan komentar menjadi lebih menarik.',
  keywords: [
    'font tiktok',
    'tulisan aesthetic bio tiktok',
    'cara buat font tiktok',
    'font caption tiktok',
    'generator font tiktok',
    'font miring bio tiktok',
    'font username tiktok',
  ],
  authors: [{ name: 'Tulisan Aesthetic Editorial Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/blog/font-tiktok',
  },
  openGraph: {
    title: 'Font TikTok: Cara Membuat Tulisan Aesthetic untuk Profil & Caption',
    description:
      'Pelajari cara menggunakan font TikTok dengan Unicode untuk membuat profil, username, bio, caption, dan komentar menjadi lebih menarik.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/font-tiktok',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2026-07-31T00:00:00.000Z',
    authors: ['Tulisan Aesthetic Editorial Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font TikTok: Cara Membuat Tulisan Aesthetic untuk Profil & Caption',
    description:
      'Pelajari cara menggunakan font TikTok dengan Unicode untuk membuat profil, username, bio, caption, dan komentar menjadi lebih menarik.',
  },
  robots: 'index, follow',
};

export default function TikTokArticlePage() {
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
        name: 'Font TikTok Guide',
        item: 'https://tulisan-aesthetic.vercel.app/blog/font-tiktok',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Font TikTok: Cara Membuat Tulisan Aesthetic untuk Profil & Caption',
    description:
      'Pelajari cara menggunakan font TikTok dengan Unicode untuk membuat profil, username, bio, caption, dan komentar menjadi lebih menarik.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/font-tiktok',
    datePublished: '2026-07-31T00:00:00.000Z',
    dateModified: '2026-07-31T00:00:00.000Z',
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
      '@id': 'https://tulisan-aesthetic.vercel.app/blog/font-tiktok',
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
      <TikTokArticleClientPage />
    </>
  );
}
