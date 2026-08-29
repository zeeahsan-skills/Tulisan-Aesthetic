import type { Metadata } from 'next';
import FreeFireClientPage from '../game/free-fire/FreeFireClientPage';

export const metadata: Metadata = {
  title: 'Free Fire Stylish Name Generator - Generator Nama FF Keren',
  description:
    'Generator nama Free Fire (FF) keren & estetik terbaik di Indonesia. Buat nickname pro player dengan simbol sayap, mahkota & font Unicode 100% gratis.',
  keywords: [
    'free fire name generator',
    'nama ff keren',
    'nickname free fire aesthetic',
    'simbol nama ff',
    'nama ff payung',
    'nama ff pro player',
    'generator nama ff',
    'spasi kosong ff',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/free-fire',
  },
  openGraph: {
    title: 'Free Fire Stylish Name Generator - Nama FF Keren Aesthetic',
    description:
      'Konversi teks biasa menjadi nickname Free Fire keren bergaya pro player esports secara instan.',
    url: 'https://tulisan-aesthetic.vercel.app/free-fire',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Fire Stylish Name Generator - Nama FF Keren & Estetik',
    description: 'Generator nickname Free Fire Unicode terlengkap dan tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function FreeFirePage() {
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
        name: 'Free Fire Name Generator',
        item: 'https://tulisan-aesthetic.vercel.app/free-fire',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FreeFireClientPage />
    </>
  );
}
