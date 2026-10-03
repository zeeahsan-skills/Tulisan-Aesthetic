import type { Metadata } from 'next';
import UnicodeArticleClientPage from './UnicodeArticleClientPage';
import { UNICODE_ARTICLE_FAQS } from '@/lib/unicode-guide-article';

export const metadata: Metadata = {
  title: 'Apa itu Unicode? Panduan Lengkap Font Aesthetic',
  description:
    'Panduan lengkap Unicode: cara kerja, sejarah, perbedaan dengan ASCII, dan mengapa dipakai untuk membuat tulisan aesthetic.',
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
    title: 'Apa itu Unicode? Panduan Lengkap Font Aesthetic',
    description:
      'Panduan lengkap Unicode: cara kerja, sejarah, perbedaan dengan ASCII, dan mengapa dipakai untuk membuat tulisan aesthetic.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/apa-itu-unicode',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'article',
    authors: ['Tulisan Aesthetic Editorial Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apa itu Unicode? Panduan Lengkap Font Aesthetic',
    description:
      'Panduan lengkap Unicode: cara kerja, sejarah, perbedaan dengan ASCII, dan mengapa dipakai untuk membuat tulisan aesthetic.',
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
        name: 'Unicode Guide',
        item: 'https://tulisan-aesthetic.vercel.app/blog/apa-itu-unicode',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Apa itu Unicode? Panduan Lengkap Font Aesthetic',
    description:
      'Panduan lengkap Unicode: cara kerja, sejarah, perbedaan dengan ASCII, dan mengapa dipakai untuk membuat tulisan aesthetic.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/apa-itu-unicode',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: UNICODE_ARTICLE_FAQS.map((item) => ({
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
      <UnicodeArticleClientPage />
    </>
  );
}
