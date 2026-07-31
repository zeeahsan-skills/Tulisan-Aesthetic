import type { Metadata } from 'next';
import SymbolsClientPage from './SymbolsClientPage';

export const metadata: Metadata = {
  title: 'Simbol Keren & Aesthetic Unicode - Copy Paste Symbols Hub 2026',
  description:
    'Direktori Simbol Keren & Aesthetic Unicode terlengkap di Indonesia. Copy paste ribuan simbol bintang (★), hati (♡), mahkota (👑), bunga (✿), panah (➜), kaomoji & border gratis untuk IG, TikTok, WA, Discord & Game.',
  keywords: [
    'simbol keren',
    'simbol aesthetic',
    'unicode symbols copy paste',
    'simbol bintang',
    'simbol hati',
    'simbol mahkota',
    'simbol bunga',
    'kaomoji aesthetic',
    'border aesthetic',
    'simbol nama game',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/simbol',
  },
  openGraph: {
    title: 'Simbol Keren & Aesthetic Unicode - Copy Paste Symbols Hub 2026',
    description:
      'Browse thousands of Unicode symbols for Instagram, TikTok, WhatsApp, Discord, Facebook, gaming names, and creative text.',
    url: 'https://tulisanaesthetic.id/simbol',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simbol Keren & Aesthetic Unicode - Copy Paste Symbols Hub',
    description: 'Direktori simbol Unicode estetik & kaomoji 1-klik copy terlengkap dan tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function SimbolPage() {
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SymbolsClientPage />
    </>
  );
}
