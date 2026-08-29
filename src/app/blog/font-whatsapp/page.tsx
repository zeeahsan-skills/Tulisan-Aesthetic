import type { Metadata } from 'next';
import WhatsAppArticleClientPage from './WhatsAppArticleClientPage';

export const metadata: Metadata = {
  title: 'Font WhatsApp: Cara Membuat Tulisan Aesthetic untuk Nama, Bio & Status',
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
    title: 'Font WhatsApp: Cara Membuat Tulisan Aesthetic untuk Nama, Bio & Status',
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
    title: 'Font WhatsApp: Cara Membuat Tulisan Aesthetic untuk Nama, Bio & Status',
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
    headline: 'Font WhatsApp: Cara Membuat Tulisan Aesthetic untuk Nama, Bio & Status',
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
      <WhatsAppArticleClientPage />
    </>
  );
}
