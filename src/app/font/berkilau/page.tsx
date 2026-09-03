import type { Metadata } from 'next';
import BerkilauClientPage from './BerkilauClientPage';

export const metadata: Metadata = {
  title: 'Font Berkilau Bintang Generator — Tulisan Simbol Cahaya & Stardust Unicode',
  description:
    'Generator Font Berkilau Bintang gratis terbaik di Indonesia. Hiasi teks biasa dengan kilau bintang ✨, stardust ✧･ﾟ:*, dan ornamen cahaya Unicode estetik untuk Bio Instagram, TikTok, WA, dan nama profil.',
  keywords: [
    'font berkilau',
    'font bintang aesthetic',
    'tulisan berkilau',
    'simbol bintang berkilau',
    'stardust text',
    'font cahaya unicode',
    'hiasan teks bintang',
    'tulisan bintang copy paste',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/berkilau',
  },
  openGraph: {
    title: 'Font Berkilau Bintang Generator — Tulisan Simbol Cahaya & Stardust Unicode',
    description:
      'Konversi teks biasa menjadi font Berkilau Bintang dan ornamen stardust cahaya estetik secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/berkilau',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Berkilau Bintang Generator — Tulisan Simbol Cahaya & Stardust',
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
        name: 'Font Berkilau Bintang Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/berkilau',
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
