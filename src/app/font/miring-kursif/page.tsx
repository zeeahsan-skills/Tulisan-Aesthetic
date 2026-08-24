import type { Metadata } from 'next';
import FontMiringKursifClientPage from './FontMiringKursifClientPage';

export const metadata: Metadata = {
  title: 'Font Miring & Kursif Generator - Converter Tulisan Sambung & Italic 2026',
  description:
    'Generator Font Miring & Tulisan Kursif Unicode gratis terbaik di Indonesia. Ubah teks biasa menjadi tulisan tangan sambung & italic aesthetic untuk Bio Instagram, WA, TikTok & Nickname 100% instan.',
  keywords: [
    'miring kursif',
    'font miring',
    'tulisan miring',
    'font kursif',
    'tulisan kursif',
    'tulisan sambung',
    'cursive text',
    'cursive font generator',
    'italic text',
    'font bio instagram miring',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/miring-kursif',
  },
  openGraph: {
    title: 'Font Miring & Kursif Generator - Converter Tulisan Sambung & Italic',
    description:
      'Konversi teks biasa menjadi tulisan sambung (Cursive Script) & font miring (Italic) secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/miring-kursif',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Miring & Kursif Generator - Converter Tulisan Sambung',
    description: 'Generator Font Miring & Kursif Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function FontMiringKursifPage() {
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
        name: 'Font Styles',
        item: 'https://tulisan-aesthetic.vercel.app/#popular-fonts',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Font Miring & Kursif Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/miring-kursif',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FontMiringKursifClientPage />
    </>
  );
}
