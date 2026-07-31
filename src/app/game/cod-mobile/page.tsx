import type { Metadata } from 'next';
import CodClientPage from './CodClientPage';

export const metadata: Metadata = {
  title: 'COD Mobile Stylish Name Generator - Generator Nama CODM Keren 2026',
  description:
    'Generator nama COD Mobile (CODM) keren & estetik terbaik di Indonesia. Ubah nama biasa menjadi nickname tactical, tag clan esports, tengkorak, & font Unicode 100% gratis.',
  keywords: [
    'cod mobile stylish name generator',
    'generator nama codm keren',
    'nickname cod mobile aesthetic',
    'tag clan codm',
    'simbol nama cod mobile',
    'nama codm ghost price',
    'font cod mobile',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/game/cod-mobile',
  },
  openGraph: {
    title: 'COD Mobile Stylish Name Generator - Generator Nama CODM Keren 2026',
    description:
      'Generate stylish Call of Duty: Mobile names, clan tags, and nicknames instantly using Unicode fonts and decorative symbols.',
    url: 'https://tulisanaesthetic.id/game/cod-mobile',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COD Mobile Stylish Name Generator - Nama CODM Keren Aesthetic',
    description: 'Generator nickname & tag clan Call of Duty: Mobile Unicode terlengkap dan tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function CodMobilePage() {
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
        item: 'https://tulisanaesthetic.id/#gaming-nicknames',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'COD Mobile Stylish Name Generator',
        item: 'https://tulisanaesthetic.id/game/cod-mobile',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CodClientPage />
    </>
  );
}
