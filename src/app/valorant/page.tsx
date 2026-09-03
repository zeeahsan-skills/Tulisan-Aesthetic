import type { Metadata } from 'next';
import ValorantClientPage from '../game/valorant/ValorantClientPage';

export const metadata: Metadata = {
  title: 'Valorant Nickname Generator - Riot ID & Nama Valorant Keren',
  description:
    'Generator Nickname Valorant & Riot ID keren aesthetic ala pro player VCT dan rank Radiant. Buat nama game clean, spasi unik, simbol crosshair ╳, petir ⚡, dan huruf katakana gratis.',
  keywords: [
    'valorant nickname',
    'valorant nickname generator',
    'nama valorant keren',
    'nickname valorant keren',
    'nickname valorant aesthetic',
    'nama valorant unik',
    'riot id valorant',
    'valorant username',
    'valorant gaming name',
    'valorant copy paste nickname',
    'vct nickname style',
    'radiant ign valorant',
  ],
  authors: [{ name: 'Tulisan Aesthetic Gaming Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/valorant',
  },
  openGraph: {
    title: 'Valorant Nickname Generator - Riot ID & Nama Valorant Keren',
    description:
      'Generator nama in-game Valorant pro player dan Riot ID aesthetic. Ubah nama akun Valorant menjadi puluhan gaya font Unicode unik dan simbol gaming.',
    url: 'https://tulisan-aesthetic.vercel.app/valorant',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valorant Nickname Generator - Riot ID & Nama Valorant Keren',
    description: 'Buat nama akun Valorant dan Riot ID aesthetic keren tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function ValorantPage() {
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
        name: 'Game Nickname Generator',
        item: 'https://tulisan-aesthetic.vercel.app/game',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Valorant Nickname Generator',
        item: 'https://tulisan-aesthetic.vercel.app/valorant',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ValorantClientPage />
    </>
  );
}
