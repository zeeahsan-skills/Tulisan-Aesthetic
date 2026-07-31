import type { Metadata } from 'next';
import MemutarClientPage from './MemutarClientPage';

export const metadata: Metadata = {
  title: 'Font Memutar Generator - Converter Tulisan Terbalik Upside Down 2026',
  description:
    'Generator tulisan Terbalik (Memutar / Upside Down / Flipped Text) Unicode terbaik di Indonesia. Ubah teks biasa menjadi font terbalik untuk Bio IG, TikTok, WhatsApp & Gaming Nickname 100% gratis.',
  keywords: [
    'font memutar generator',
    'tulisan terbalik unicode',
    'upside down text generator',
    'font terbalik bio instagram',
    'flipped text tiktok',
    'tulisan terbalik whatsapp',
    'mirror text generator',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/memutar',
  },
  openGraph: {
    title: 'Font Memutar Generator - Converter Tulisan Terbalik Upside Down Unicode',
    description:
      'Konversi teks biasa menjadi font Terbalik Memutar (Upside Down / Flipped Text) estetik secara instan tanpa aplikasi.',
    url: 'https://tulisanaesthetic.id/font/memutar',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Memutar Generator - Converter Tulisan Terbalik Upside Down',
    description: 'Generator font Terbalik Memutar Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function MemutarPage() {
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
        name: 'Font Styles',
        item: 'https://tulisanaesthetic.id/#popular-fonts',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Font Memutar Generator',
        item: 'https://tulisanaesthetic.id/font/memutar',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MemutarClientPage />
    </>
  );
}
