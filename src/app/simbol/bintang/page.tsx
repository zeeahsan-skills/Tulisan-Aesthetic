import type { Metadata } from 'next';
import StarClientPage from './StarClientPage';

export const metadata: Metadata = {
  title: 'Star Symbols (Simbol Bintang) Aesthetic ★ ✦ ✨ - Copy Paste 150+',
  description:
    'Salin 150+ Simbol Bintang (Star Symbols) Aesthetic Unicode ★ ☆ ✦ ✧ ✨ 🌟 ✪ 👑 1-klik copy gratis untuk bio Instagram, TikTok, WhatsApp, Discord & nickname game.',
  keywords: [
    'star symbols',
    'simbol bintang',
    'simbol bintang aesthetic',
    'simbol bintang hitam',
    'simbol bintang putih',
    'sparkle star symbols',
    'simbol rating 5 bintang',
    'simbol bintang unicode',
    'copy paste star symbol',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/simbol/bintang',
  },
  openGraph: {
    title: 'Star Symbols (Simbol Bintang) Aesthetic ★ ✦ ✨ - Copy Paste 150+',
    description:
      'Copy beautiful Unicode star symbols instantly for social media, gaming, and creative designs.',
    url: 'https://tulisanaesthetic.id/simbol/bintang',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Symbols (Simbol Bintang) Aesthetic ★ ✦ ✨ - Copy Paste 150+',
    description: 'Koleksi 150+ simbol bintang Unicode estetik 1-klik copy gratis tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function StarSymbolsPage() {
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
        name: 'Simbol Keren Hub',
        item: 'https://tulisanaesthetic.id/simbol',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Star Symbols (Simbol Bintang)',
        item: 'https://tulisanaesthetic.id/simbol/bintang',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StarClientPage />
    </>
  );
}
