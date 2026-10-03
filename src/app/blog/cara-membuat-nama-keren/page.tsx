import type { Metadata } from 'next';
import CoolNamesArticleClientPage from './CoolNamesArticleClientPage';
import { COOL_NAMES_ARTICLE_FAQS } from '@/lib/cool-names-article';

export const metadata: Metadata = {
  title: 'Cara Membuat Nama Keren Aesthetic untuk Game & Sosmed',
  description:
    'Cara membuat nama keren aesthetic untuk IG, TikTok, WA & game. Tips memilih font Unicode dan simbol yang cocok.',
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
    title: 'Cara Membuat Nama Keren Aesthetic untuk Game & Sosmed',
    description:
      'Cara membuat nama keren aesthetic untuk IG, TikTok, WA & game. Tips memilih font Unicode dan simbol yang cocok.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/cara-membuat-nama-keren',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'article',
    authors: ['Tulisan Aesthetic Editorial Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cara Membuat Nama Keren Aesthetic untuk Game & Sosmed',
    description:
      'Cara membuat nama keren aesthetic untuk IG, TikTok, WA & game. Tips memilih font Unicode dan simbol yang cocok.',
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
    headline: 'Cara Membuat Nama Keren Aesthetic untuk Game & Sosmed',
    description:
      'Cara membuat nama keren aesthetic untuk IG, TikTok, WA & game. Tips memilih font Unicode dan simbol yang cocok.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/cara-membuat-nama-keren',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: COOL_NAMES_ARTICLE_FAQS.map((item) => ({
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
      <CoolNamesArticleClientPage />
    </>
  );
}
