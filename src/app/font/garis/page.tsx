import type { Metadata } from 'next';
import GarisClientPage from './GarisClientPage';

export const metadata: Metadata = {
  title: 'Font Garis Generator - Converter Tulisan Coret Strikethrough',
  description:
    'Generator tulisan Garis Coret (Strikethrough / Crossed Out) Unicode terbaik di Indonesia. Ubah teks biasa menjadi font garis coret untuk WhatsApp, Instagram Bio, Discord & TikTok 100% gratis.',
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
    title: 'Font Garis Generator - Converter Tulisan Coret Strikethrough Unicode',
    description:
      'Konversi teks biasa menjadi font Garis Coret (Strikethrough / Slash) estetik secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/garis',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Garis Generator - Converter Tulisan Coret Strikethrough',
    description: 'Generator font Garis Coret Unicode terlengkap di Indonesia.',
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
