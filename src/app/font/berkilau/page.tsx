import type { Metadata } from 'next';
import BerkilauClientPage from './BerkilauClientPage';

export const metadata: Metadata = {
  title: 'Font Berkilau / Sparkly Generator - Converter Tulisan Glitter Bintang 2026',
  description:
    'Generator Font Berkilau & Tulisan Sparkly Unicode gratis terbaik di Indonesia. Hiasi teks biasa dengan bintang ✨, glitter, & ornamen aesthetic untuk Bio Instagram, TikTok, WA, Discord & Nickname Game.',
  keywords: [
    'font berkilau',
    'sparkly font',
    'sparkling text',
    'glitter text',
    'tulisan berkilau',
    'tulisan glitter',
    'star text',
    'decorative sparkle text',
    'aesthetic sparkle text',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/berkilau',
  },
  openGraph: {
    title: 'Font Berkilau / Sparkly Generator - Converter Tulisan Glitter Bintang',
    description:
      'Konversi teks biasa menjadi font Berkilau (Sparkly / Star / Decorative) estetik secara instan tanpa aplikasi.',
    url: 'https://tulisanaesthetic.id/font/berkilau',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Berkilau / Sparkly Generator - Converter Tulisan Glitter',
    description: 'Generator font Berkilau Bintang Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function BerkilauPage() {
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
        name: 'Font Berkilau / Sparkly Generator',
        item: 'https://tulisanaesthetic.id/font/berkilau',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BerkilauClientPage />
    </>
  );
}
