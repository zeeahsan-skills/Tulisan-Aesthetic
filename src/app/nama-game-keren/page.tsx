import type { Metadata } from 'next';
import GameClientPage from '../game/GameClientPage';
import { GAME_PILLAR_FAQS } from '@/lib/game-pillar-faqs';

export const metadata: Metadata = {
  title: 'Nama Game Keren & Aesthetic Generator 2026 - FF, PUBG, MLBB & Roblox',
  description:
    'Generator nama game keren aesthetic terbaik di Indonesia. Buat nickname pro player untuk Free Fire, PUBG Mobile, Mobile Legends, Roblox & CODM dengan simbol payung, mahkota, sayap, & spasi kosong 100% gratis.',
  keywords: [
    'nama game keren',
    'generator nama game',
    'nickname game aesthetic',
    'nama ff keren',
    'nama pubg aesthetic',
    'nama mlbb pro player',
    'username roblox aesthetic',
    'spasi kosong ff',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/nama-game-keren',
  },
  openGraph: {
    title: 'Nama Game Keren & Aesthetic Generator 2026 - FF, PUBG & MLBB',
    description:
      'Konversi nama biasa menjadi nama game keren bergaya pro player esports secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/nama-game-keren',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nama Game Keren & Aesthetic Generator',
    description: 'Generator nickname game keren ala pro player esports terlengkap.',
  },
  robots: 'index, follow',
};

export default function NamaGameKerenPage() {
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
        name: 'Nama Game Keren Generator',
        item: 'https://tulisan-aesthetic.vercel.app/nama-game-keren',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: GAME_PILLAR_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Nama Game Keren Generator Hub',
    description: 'Central hub for Free Fire, PUBG Mobile, Mobile Legends, Roblox, and COD Mobile nickname generators.',
    url: 'https://tulisan-aesthetic.vercel.app/nama-game-keren',
    mainEntity: [
      {
        '@type': 'ItemPage',
        name: 'Free Fire Name Generator',
        url: 'https://tulisan-aesthetic.vercel.app/free-fire',
      },
      {
        '@type': 'ItemPage',
        name: 'PUBG Mobile Name Generator',
        url: 'https://tulisan-aesthetic.vercel.app/pubg-mobile',
      },
      {
        '@type': 'ItemPage',
        name: 'Mobile Legends Name Generator',
        url: 'https://tulisan-aesthetic.vercel.app/mobile-legends',
      },
      {
        '@type': 'ItemPage',
        name: 'Roblox Username Generator',
        url: 'https://tulisan-aesthetic.vercel.app/roblox',
      },
      {
        '@type': 'ItemPage',
        name: 'COD Mobile Name Generator',
        url: 'https://tulisan-aesthetic.vercel.app/cod-mobile',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <GameClientPage />
    </>
  );
}
