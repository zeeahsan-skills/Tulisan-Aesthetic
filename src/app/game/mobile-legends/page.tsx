import type { Metadata } from 'next';
import MlClientPage from './MlClientPage';

export const metadata: Metadata = {
  title: 'Mobile Legends Stylish Name Generator - Generator Nama MLBB Keren 2026',
  description:
    'Generator nama Mobile Legends (MLBB) keren & estetik terbaik di Indonesia. Ubah nama biasa menjadi nickname gaya pro player, squad VIP, mahkota, kanji Jepang & font Unicode 100% gratis.',
  keywords: [
    'mobile legends stylish name generator',
    'generator nama mlbb keren',
    'nama ml aesthetic',
    'nickname mobile legends aesthetic',
    'simbol nama mlbb',
    'nama squad mlbb',
    'nama ml vip pro player',
    'spasi transparan mlbb',
    'font mobile legends',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/game/mobile-legends',
  },
  openGraph: {
    title: 'Mobile Legends Stylish Name Generator - Generator Nama MLBB Keren 2026',
    description:
      'Generate stylish Mobile Legends names instantly using Unicode fonts, symbols, and decorative characters.',
    url: 'https://tulisan-aesthetic.vercel.app/game/mobile-legends',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Legends Stylish Name Generator - Nama MLBB Keren Aesthetic',
    description: 'Generator nickname Mobile Legends Unicode terlengkap dan tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function MobileLegendsPage() {
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
        name: 'Game Nicknames',
        item: 'https://tulisan-aesthetic.vercel.app/#gaming-nicknames',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Mobile Legends Stylish Name Generator',
        item: 'https://tulisan-aesthetic.vercel.app/game/mobile-legends',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MlClientPage />
    </>
  );
}
