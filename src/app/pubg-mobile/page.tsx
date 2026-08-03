import type { Metadata } from 'next';
import PubgClientPage from '../game/pubg-mobile/PubgClientPage';

export const metadata: Metadata = {
  title: 'PUBG Mobile Name Generator - Generator Nama PUBG Keren 2026',
  description:
    'Buat nickname PUBG Mobile keren, gaya militer, clan tag, dan simbol Jepang aesthetic secara instan dan gratis.',
  keywords: [
    'pubg name generator',
    'nama pubg keren',
    'nickname pubg mobile aesthetic',
    'simbol clan pubg',
    'nama pubg pro player',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/pubg-mobile',
  },
  openGraph: {
    title: 'PUBG Mobile Name Generator - Generator Nama PUBG Keren',
    description: 'Buat nickname PUBG Mobile keren ala pro player esports.',
    url: 'https://tulisanaesthetic.id/pubg-mobile',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUBG Mobile Name Generator',
    description: 'Generator nickname PUBG Mobile Unicode terlengkap.',
  },
  robots: 'index, follow',
};

export default function PubgMobilePage() {
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
        name: 'Game Nicknames',
        item: 'https://tulisanaesthetic.id/game',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'PUBG Mobile Name Generator',
        item: 'https://tulisanaesthetic.id/pubg-mobile',
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
