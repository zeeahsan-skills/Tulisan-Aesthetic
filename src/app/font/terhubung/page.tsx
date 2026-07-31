import type { Metadata } from 'next';
import TerhubungClientPage from './TerhubungClientPage';

export const metadata: Metadata = {
  title: 'Font Terhubung Generator - Converter Tulisan Sambung Cursive 2026',
  description:
    'Generator tulisan Terhubung (Sambung / Connected Script / Handwriting) Unicode terbaik di Indonesia. Ubah teks biasa menjadi font tulisan tangan indah untuk IG Bio, Undangan, WA & Caption 100% gratis.',
  keywords: [
    'font terhubung generator',
    'tulisan sambung unicode',
    'connected script font',
    'font tulisan tangan bio instagram',
    'cursive font tiktok',
    'font undangan nikah online',
    'handwriting generator',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/terhubung',
  },
  openGraph: {
    title: 'Font Terhubung Generator - Converter Tulisan Sambung Cursive Unicode',
    description:
      'Konversi teks biasa menjadi font Terhubung Sambung (Connected Script / Handwriting) estetik secara instan tanpa aplikasi.',
    url: 'https://tulisanaesthetic.id/font/terhubung',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Terhubung Generator - Converter Tulisan Sambung Cursive',
    description: 'Generator font Terhubung Sambung Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function TerhubungPage() {
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
        name: 'Font Terhubung Generator',
        item: 'https://tulisanaesthetic.id/font/terhubung',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TerhubungClientPage />
    </>
  );
}
