import type { Metadata } from 'next';
import PubgClientPage from './PubgClientPage';

export const metadata: Metadata = {
  title: 'PUBG Mobile Stylish Name Generator - Generator Nama PUBG Keren',
  description:
    'Generator nama PUBG Mobile keren & estetik terbaik di Indonesia. Buat nickname Conqueror dengan simbol Jepang (乂, 帝, 乡), mahkota & font Unicode 100% gratis.',
  keywords: [
    'pubg mobile name generator',
    'nama pubg keren',
    'nickname pubg aesthetic',
    'simbol nama pubg',
    'nama clan pubg',
    'nama pubg conqueror',
    'generator nama pubg',
    'spasi transparan pubg',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/game/pubg-mobile',
  },
  openGraph: {
    title: 'PUBG Mobile Stylish Name Generator - Nama PUBG Keren Aesthetic',
    description:
      'Konversi teks biasa menjadi nickname PUBG Mobile keren bergaya Conqueror & Clan Esports secara instan.',
    url: 'https://tulisan-aesthetic.vercel.app/game/pubg-mobile',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUBG Mobile Stylish Name Generator - Nama PUBG Keren & Estetik',
    description: 'Generator nickname PUBG Mobile Unicode terlengkap dan tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function PubgPage() {
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
        name: 'PUBG Mobile Stylish Name Generator',
        item: 'https://tulisan-aesthetic.vercel.app/game/pubg-mobile',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PubgClientPage />
    </>
  );
}
