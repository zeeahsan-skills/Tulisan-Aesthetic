import type { Metadata } from 'next';
import TinyClientPage from './TinyClientPage';

export const metadata: Metadata = {
  title: 'Font Kecil Generator - Converter Tulisan Superscript & Small Caps 2026',
  description:
    'Generator tulisan Kecil (Tiny Font / Superscript / Small Caps) Unicode terbaik di Indonesia. Ubah teks biasa menjadi font kecil imut untuk Bio IG, TikTok, WhatsApp & Game Nickname 100% gratis.',
  keywords: [
    'font kecil generator',
    'tulisan superscript unicode',
    'font kecil bio instagram',
    'small caps font generator',
    'tulisan kecil tiktok',
    'font whatsapp kecil',
    'tiny text generator',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/kecil',
  },
  openGraph: {
    title: 'Font Kecil Generator - Tulisan Superscript & Small Caps Unicode',
    description:
      'Konversi teks biasa menjadi font Kecil (Tiny Font / Small Caps) estetik secara instan tanpa aplikasi.',
    url: 'https://tulisanaesthetic.id/font/kecil',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Kecil Generator - Converter Tulisan Superscript & Small Caps',
    description: 'Generator font Kecil Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function TinyPage() {
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
        name: 'Font Kecil Generator',
        item: 'https://tulisanaesthetic.id/font/kecil',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TinyClientPage />
    </>
  );
}
