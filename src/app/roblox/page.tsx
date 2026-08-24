import type { Metadata } from 'next';
import RobloxClientPage from '../game/roblox/RobloxClientPage';

export const metadata: Metadata = {
  title: 'Roblox Username Generator - Nama Roblox Aesthetic 2026',
  description:
    'Buat username Roblox aesthetic dengan simbol hati, bunga, kaomoji, dan karakter imut secara instan dan 100% gratis.',
  keywords: [
    'roblox username generator',
    'nama roblox aesthetic',
    'username roblox imut',
    'simbol nama roblox',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/roblox',
  },
  openGraph: {
    title: 'Roblox Username Generator - Nama Roblox Aesthetic 2026',
    description: 'Buat username Roblox estetik dan imut dengan simbol unik.',
    url: 'https://tulisan-aesthetic.vercel.app/roblox',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roblox Username Generator',
    description: 'Generator username Roblox aesthetic terlengkap.',
  },
  robots: 'index, follow',
};

export default function RobloxPage() {
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
        item: 'https://tulisan-aesthetic.vercel.app/game',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Roblox Username Generator',
        item: 'https://tulisan-aesthetic.vercel.app/roblox',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RobloxClientPage />
    </>
  );
}
