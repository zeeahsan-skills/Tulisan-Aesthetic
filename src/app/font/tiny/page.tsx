import type { Metadata } from 'next';
import TinyTextClientPage from './TinyTextClientPage';

export const metadata: Metadata = {
  title: 'Tiny Text Generator - Converter Tulisan Kecil & Small Caps',
  description:
    'Generator Tiny Text & Tulisan Kecil Unicode gratis terbaik di Indonesia. Ubah teks biasa menjadi Small Caps, Superscript mini & huruf kecil aesthetic untuk Bio Instagram, WA, TikTok & Game 100% instan.',
  keywords: [
    'tiny text',
    'small text',
    'small caps',
    'tulisan kecil',
    'huruf kecil aesthetic',
    'tiny font generator',
    'small text generator',
    'superscript text',
    'font bio instagram kecil',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/tiny',
  },
  openGraph: {
    title: 'Tiny Text Generator - Converter Tulisan Kecil & Small Caps',
    description:
      'Konversi teks biasa menjadi tulisan kecil (Small Caps, Superscript, Subscript) secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/tiny',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiny Text Generator - Converter Tulisan Kecil & Small Caps',
    description: 'Generator Tiny Text & Small Caps Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function TinyTextPage() {
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
        name: 'Tiny Text Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/tiny',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TinyTextClientPage />
    </>
  );
}
