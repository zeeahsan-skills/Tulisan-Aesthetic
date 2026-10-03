import type { Metadata } from 'next';
import IGArticleClientPage from './IGArticleClientPage';
import { INSTAGRAM_ARTICLE_FAQS } from '@/lib/instagram-article';

export const metadata: Metadata = {
  title: 'Font Instagram: Panduan Lengkap Tulisan Aesthetic',
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
    title: 'Font Instagram: Panduan Lengkap Tulisan Aesthetic',
    description:
      'Pelajari cara membuat tulisan Instagram yang keren untuk bio, username, caption, komentar, dan Story menggunakan Unicode font generator 100% gratis.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/font-instagram',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'article',
    authors: ['Tulisan Aesthetic Editorial Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Instagram: Panduan Lengkap Tulisan Aesthetic',
    description:
      'Pelajari cara membuat tulisan Instagram yang keren untuk bio, username, caption, komentar, dan Story menggunakan Unicode font generator 100% gratis.',
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
    headline: 'Font Instagram: Panduan Lengkap Tulisan Aesthetic',
    description:
      'Pelajari cara membuat tulisan Instagram yang keren untuk bio, username, caption, komentar, dan Story menggunakan Unicode font generator 100% gratis.',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: INSTAGRAM_ARTICLE_FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <IGArticleClientPage />
    </>
  );
}
