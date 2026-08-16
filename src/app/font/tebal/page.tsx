import type { Metadata } from 'next';
import FontTebalClientPage from './FontTebalClientPage';

export const metadata: Metadata = {
  title: 'Font Tebal Generator - Converter Tulisan Tebal Bold Unicode 2026',
  description:
    'Generator Font Tebal & Tulisan Bold Unicode gratis terbaik di Indonesia. Ubah teks biasa menjadi huruf tebal hitam aesthetic untuk Bio Instagram, WA, TikTok, FB, Discord & Game 100% instan.',
  keywords: [
    'font tebal',
    'tulisan tebal',
    'huruf tebal',
    'bold text',
    'bold unicode',
    'bold font generator',
    'tulisan bold',
    'teks tebal copy paste',
    'font bio instagram tebal',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/tebal',
  },
  openGraph: {
    title: 'Font Tebal Generator - Converter Tulisan Tebal Bold Unicode',
    description:
      'Konversi teks biasa menjadi huruf tebal (Bold Sans, Serif, Script, Gothic) secara instan tanpa aplikasi.',
    url: 'https://tulisanaesthetic.id/font/tebal',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Tebal Generator - Converter Tulisan Tebal Bold',
    description: 'Generator Font Tebal Bold Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function FontTebalPage() {
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
        name: 'Font Tebal Generator',
        item: 'https://tulisanaesthetic.id/font/tebal',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FontTebalClientPage />
    </>
  );
}
