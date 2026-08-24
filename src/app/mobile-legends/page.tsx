import type { Metadata } from 'next';
import MlClientPage from '../game/mobile-legends/MlClientPage';

export const metadata: Metadata = {
  title: 'Mobile Legends Name Generator - Generator Nickname MLBB Aesthetic 2026',
  description:
    'Buat nama squad & akun Mobile Legends (MLBB) keren aesthetic dengan simbol mahkota, petir, bintang, dan font pro player.',
  keywords: [
    'mobile legends name generator',
    'nama mlbb keren',
    'nickname mlbb aesthetic',
    'nama squad mlbb',
    'simbol nickname mlbb',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/mobile-legends',
  },
  openGraph: {
    title: 'Mobile Legends Name Generator - Generator Nickname MLBB Aesthetic',
    description: 'Buat nickname MLBB pro player dengan font dan simbol unik.',
    url: 'https://tulisan-aesthetic.vercel.app/mobile-legends',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Legends Name Generator',
    description: 'Generator nickname Mobile Legends Unicode terlengkap.',
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
        item: 'https://tulisan-aesthetic.vercel.app/game',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Mobile Legends Name Generator',
        item: 'https://tulisan-aesthetic.vercel.app/mobile-legends',
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
