import type { Metadata } from 'next';
import VintageClientPage from './VintageClientPage';

export const metadata: Metadata = {
  title: 'Font Vintage & Klasik Generator - Converter Blackletter & Retro',
  description:
    'Generator Font Vintage & Blackletter Unicode terbaik di Indonesia. Ubah teks biasa menjadi font klasik, Fraktur, Old English, & Serif Retro untuk Bio IG, Undangan, WA & Gaming 100% gratis.',
  keywords: [
    'font vintage',
    'tulisan vintage',
    'font klasik',
    'old english text',
    'blackletter font',
    'font kuno aesthetic',
    'vintage text generator',
    'retro font copy paste',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/vintage',
  },
  openGraph: {
    title: 'Font Vintage & Klasik Generator - Converter Blackletter & Retro Unicode',
    description:
      'Konversi teks biasa menjadi font Vintage, Fraktur Blackletter, dan Retro Klasik estetik secara instan.',
    url: 'https://tulisan-aesthetic.vercel.app/font/vintage',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Vintage & Klasik Generator - Converter Blackletter & Retro',
    description: 'Generator font Vintage Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function VintagePage() {
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
        name: 'Font Vintage & Klasik Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/vintage',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <VintageClientPage />
    </>
  );
}
