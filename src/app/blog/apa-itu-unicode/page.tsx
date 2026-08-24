import type { Metadata } from 'next';
import UnicodeArticleClientPage from './UnicodeArticleClientPage';

export const metadata: Metadata = {
  title: 'Apa Itu Unicode? Panduan Lengkap Cara Kerja & Font Aesthetic',
  description:
    'Panduan lengkap mengenai Unicode, cara kerjanya, sejarahnya, perbedaan vs ASCII, dan mengapa Unicode digunakan untuk membuat tulisan aesthetic di Instagram, TikTok, WhatsApp, Discord & Game.',
  keywords: [
    'apa itu unicode',
    'unicode font',
    'cara kerja unicode font generator',
    'sejarah unicode',
    'unicode vs ascii',
    'font aesthetic instagram',
    'font aesthetic tiktok',
    'simbol unicode',
  ],
  authors: [{ name: 'Tulisan Aesthetic Editorial Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/blog/apa-itu-unicode',
  },
  openGraph: {
    title: 'Apa Itu Unicode? Panduan Lengkap Cara Kerja & Font Aesthetic',
    description:
      'Panduan lengkap mengenai Unicode, cara kerjanya, manfaatnya, dan mengapa Unicode digunakan untuk membuat tulisan aesthetic.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/apa-itu-unicode',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2026-07-30T00:00:00.000Z',
    authors: ['Tulisan Aesthetic Editorial Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apa Itu Unicode? Panduan Lengkap Cara Kerja & Font Aesthetic',
    description: 'Panduan lengkap cara kerja Unicode dan generator font aesthetic terlengkap.',
  },
  robots: 'index, follow',
};

export default function UnicodeArticlePage() {
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
        name: 'Apa Itu Unicode?',
        item: 'https://tulisan-aesthetic.vercel.app/blog/apa-itu-unicode',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Apa Itu Unicode? Panduan Lengkap Cara Kerja & Font Aesthetic',
    description:
      'Panduan lengkap mengenai Unicode, cara kerjanya, manfaatnya, dan mengapa Unicode digunakan untuk membuat tulisan aesthetic.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/apa-itu-unicode',
    datePublished: '2026-07-30T00:00:00.000Z',
    dateModified: '2026-07-30T00:00:00.000Z',
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
      '@id': 'https://tulisan-aesthetic.vercel.app/blog/apa-itu-unicode',
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
      <UnicodeArticleClientPage />
    </>
  );
}
