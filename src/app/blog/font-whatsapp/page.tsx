import type { Metadata } from 'next';
import WhatsAppArticleClientPage from './WhatsAppArticleClientPage';
import { WHATSAPP_ARTICLE_FAQS } from '@/lib/whatsapp-article';

export const metadata: Metadata = {
  title: 'Font WhatsApp Aesthetic - Teks Tebal & Miring',
  description:
    'Pelajari cara menggunakan Unicode untuk membuat tulisan keren di WhatsApp, mulai dari nama profil, bio, status, hingga pesan.',
  keywords: [
    'font whatsapp',
    'tulisan aesthetic whatsapp',
    'cara buat font whatsapp',
    'font bio whatsapp',
    'font miring whatsapp',
    'font tebal whatsapp',
    'generator font whatsapp',
    'tulisan keren wa',
  ],
  authors: [{ name: 'Tulisan Aesthetic Editorial Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/blog/font-whatsapp',
  },
  openGraph: {
    title: 'Font WhatsApp Aesthetic - Teks Tebal & Miring',
    description:
      'Pelajari cara menggunakan Unicode untuk membuat tulisan keren di WhatsApp, mulai dari nama profil, bio, status, hingga pesan.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/font-whatsapp',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'article',
    authors: ['Tulisan Aesthetic Editorial Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font WhatsApp Aesthetic - Teks Tebal & Miring',
    description:
      'Pelajari cara menggunakan Unicode untuk membuat tulisan keren di WhatsApp, mulai dari nama profil, bio, status, hingga pesan.',
  },
  robots: 'index, follow',
};

export default function WhatsAppArticlePage() {
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
        name: 'Font WhatsApp Guide',
        item: 'https://tulisan-aesthetic.vercel.app/blog/font-whatsapp',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Font WhatsApp Aesthetic - Teks Tebal & Miring',
    description:
      'Pelajari cara menggunakan Unicode untuk membuat tulisan keren di WhatsApp, mulai dari nama profil, bio, status, hingga pesan.',
    url: 'https://tulisan-aesthetic.vercel.app/blog/font-whatsapp',
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
      '@id': 'https://tulisan-aesthetic.vercel.app/blog/font-whatsapp',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: WHATSAPP_ARTICLE_FAQS.map((item) => ({
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
      <WhatsAppArticleClientPage />
    </>
  );
}
