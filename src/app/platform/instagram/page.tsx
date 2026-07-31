import type { Metadata } from 'next';
import InstagramClientPage from './InstagramClientPage';
import { INSTAGRAM_FAQS } from '@/lib/instagram-faqs';

export const metadata: Metadata = {
  title: 'Instagram Font Generator - Convert Teks Bio & Caption Aesthetic 2026',
  description:
    'Generator Instagram Font terbaik di Indonesia. Ubah teks biasa menjadi font Unicode estetik untuk bio Instagram, username, caption, komentar & Story 100% gratis & tanpa aplikasi.',
  keywords: [
    'instagram font generator',
    'font bio instagram aesthetic',
    'tulisan keren instagram',
    'font caption ig',
    'font username instagram',
    'tulisan aesthetic bio ig',
    'font unicode instagram',
    'tulisan sambung bio ig',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/platform/instagram',
  },
  openGraph: {
    title: 'Instagram Font Generator - Tulisan Aesthetic Bio & Caption',
    description:
      'Generate stylish Instagram fonts instantly for bios, usernames, captions, comments, and Stories using Unicode text.',
    url: 'https://tulisanaesthetic.id/platform/instagram',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Font Generator - Teks Keren Bio & Caption IG',
    description: 'Generator font Instagram Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function InstagramPage() {
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
        name: 'Platforms',
        item: 'https://tulisanaesthetic.id/#platforms',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Instagram Font Generator',
        item: 'https://tulisanaesthetic.id/platform/instagram',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: INSTAGRAM_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <InstagramClientPage />
    </>
  );
}
