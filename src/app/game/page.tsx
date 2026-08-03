import type { Metadata } from 'next';
import GameClientPage from './GameClientPage';

export const metadata: Metadata = {
  title: 'Gaming Nickname Aesthetic Generator - FF, PUBG, MLBB, Valorant & Roblox',
  description:
    'Buat nama akun game aesthetic pro player untuk Free Fire, PUBG Mobile, Mobile Legends (MLBB), Valorant & Roblox. Simbol payung, mahkota, sayap, & font unik.',
  keywords: [
    'nickname ff aesthetic',
    'nama pubg keren',
    'nickname mlbb pro',
    'valorant name generator',
    'roblox username aesthetic',
    'simbol nama game',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/game',
  },
  openGraph: {
    title: 'Gaming Nickname Aesthetic Generator - FF, PUBG, MLBB & Valorant',
    description:
      'Koleksi nickname game pro player dan generator nama akun game aesthetic gratis.',
    url: 'https://tulisanaesthetic.id/game',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaming Nickname Aesthetic Generator',
    description: 'Buat nama akun game keren ala pro player esports dalam hitungan detik.',
  },
  robots: 'index, follow',
};

export default function GamePage() {
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
        name: 'Gaming Nickname Generator',
        item: 'https://tulisanaesthetic.id/game',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GameClientPage />
    </>
  );
}
