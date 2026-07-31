import type { Metadata } from 'next';
import BerkilauClientPage from './BerkilauClientPage';

export const metadata: Metadata = {
  title: 'Font Berkilau Generator - Converter Tulisan Sparkly & Bintang 2026',
  description:
    'Generator tulisan Berkilau (Sparkly / Decorative / Star Text) Unicode terbaik di Indonesia. Ubah teks biasa menjadi font berkilau bintang & glitter untuk IG Bio, TikTok, WA & Game Nickname 100% gratis.',
  keywords: [
    'font berkilau generator',
    'tulisan sparkly unicode',
    'star text generator',
    'font bintang bio instagram',
    'decorative font tiktok',
    'glitter text generator',
    'fancy font nickname',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/berkilau',
  },
  openGraph: {
    title: 'Font Berkilau Generator - Converter Tulisan Sparkly & Bintang Unicode',
    description:
      'Konversi teks biasa menjadi font Berkilau (Sparkly / Star / Decorative) estetik secara instan tanpa aplikasi.',
    url: 'https://tulisanaesthetic.id/font/berkilau',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Berkilau Generator - Converter Tulisan Sparkly & Bintang',
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
        name: 'Font Berkilau Generator',
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
