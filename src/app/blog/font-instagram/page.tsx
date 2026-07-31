import type { Metadata } from 'next';
import IGArticleClientPage from './IGArticleClientPage';

export const metadata: Metadata = {
  title: 'Font Instagram: Panduan Lengkap Menggunakan Tulisan Aesthetic 2026',
  description:
    'Pelajari cara membuat tulisan Instagram yang keren untuk bio, username, caption, komentar, dan Story menggunakan Unicode font generator 100% gratis.',
  keywords: [
    'font instagram',
    'tulisan aesthetic bio instagram',
    'cara buat font instagram',
    'font instagram story',
    'font caption ig',
    'generator font ig',
    'font miring bio ig',
  ],
  authors: [{ name: 'Tulisan Aesthetic Editorial Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/blog/font-instagram',
  },
  openGraph: {
    title: 'Font Instagram: Panduan Lengkap Menggunakan Tulisan Aesthetic 2026',
    description:
      'Pelajari cara membuat tulisan Instagram yang keren untuk bio, username, caption, komentar, dan Story menggunakan Unicode.',
    url: 'https://tulisanaesthetic.id/blog/font-instagram',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2026-07-30T00:00:00.000Z',
    authors: ['Tulisan Aesthetic Editorial Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Instagram: Panduan Lengkap Menggunakan Tulisan Aesthetic 2026',
    description: 'Panduan lengkap tulisan aesthetic untuk bio, caption, dan Story Instagram.',
  },
  robots: 'index, follow',
};

export default function IGArticlePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tulisanaesthetic.id',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog Hub',
        item: 'https://tulisanaesthetic.id/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Font Instagram Guide',
        item: 'https://tulisanaesthetic.id/blog/font-instagram',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Font Instagram: Panduan Lengkap Menggunakan Tulisan Aesthetic 2026',
    description:
      'Pelajari cara membuat tulisan Instagram yang keren untuk bio, username, caption, komentar, dan Story menggunakan Unicode.',
    url: 'https://tulisanaesthetic.id/blog/font-instagram',
    datePublished: '2026-07-30T00:00:00.000Z',
    dateModified: '2026-07-30T00:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: 'Tulisan Aesthetic Editorial Team',
      url: 'https://tulisanaesthetic.id',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tulisan Aesthetic',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tulisanaesthetic.id/favicon.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://tulisanaesthetic.id/blog/font-instagram',
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
      <IGArticleClientPage />
    </>
  );
}
