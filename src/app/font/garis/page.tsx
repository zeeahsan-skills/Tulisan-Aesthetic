import type { Metadata } from 'next';
import GarisClientPage from './GarisClientPage';

export const metadata: Metadata = {
  title: 'Font Garis Generator - Converter Tulisan Coret Strikethrough',
  description:
    'Strikethrough generator: tambah garis coret pada teks untuk gaya unik di bio & chat.',
  keywords: [
    'font garis generator',
    'tulisan coret unicode',
    'strikethrough text generator',
    'font coret whatsapp',
    'tulisan garis instagram bio',
    'crossed out font tiktok',
    'slash text generator',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/garis',
  },
  openGraph: {
    title: 'Font Garis Generator - Converter Tulisan Coret Strikethrough',
    description:
      'Strikethrough generator: tambah garis coret pada teks untuk gaya unik di bio & chat.',
    url: 'https://tulisan-aesthetic.vercel.app/font/garis',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Garis Generator - Converter Tulisan Coret Strikethrough',
    description:
      'Strikethrough generator: tambah garis coret pada teks untuk gaya unik di bio & chat.',
  },
  robots: 'index, follow',
};

export default function GarisPage() {
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
        name: 'Direktori Font',
        item: 'https://tulisan-aesthetic.vercel.app/font',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Font Garis Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/garis',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GarisClientPage />
    </>
  );
}
