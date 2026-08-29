import type { Metadata } from 'next';
import IGArticleClientPage from './IGArticleClientPage';

export const metadata: Metadata = {
  title: 'Font Instagram: Panduan Lengkap Menggunakan Tulisan Aesthetic',
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
    canonical: 'https://tulisan-aesthetic.vercel.app/blog/font-instagram',
  },
  openGraph: {
    title: 'Font Instagram: Panduan Lengkap Menggunakan Tulisan Aesthetic',
    description:
      'Pelajari cara membuat tulisan Instagram yang keren untuk bio, username, caption, komentar, dan Story menggunakan Unicode.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/font-instagram',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'article',
    authors: ['Tulisan Aesthetic Editorial Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Instagram: Cara Membuat Tulisan Aesthetic Bio, Status & Caption',
    description:
      'Pelajari cara membuat tulisan Instagram yang keren untuk bio, username, caption, komentar, dan Story menggunakan Unicode.',
  },
  robots: 'index, follow',
};

export default function InstagramArticlePage() {
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
        name: 'Font Instagram Guide',
        item: 'https://tulisan-aesthetic.vercel.app/blog/font-instagram',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Font Instagram: Cara Membuat Tulisan Aesthetic Bio, Status & Caption',
    description:
      'Pelajari cara membuat tulisan Instagram yang keren untuk bio, username, caption, komentar, dan Story menggunakan Unicode.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/font-instagram',
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
      '@id': 'https://tulisan-aesthetic.vercel.app/blog/font-instagram',
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
