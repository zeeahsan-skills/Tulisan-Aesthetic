import type { Metadata } from 'next';
import CodClientPage from '../game/cod-mobile/CodClientPage';

export const metadata: Metadata = {
  title: 'COD Mobile Name Generator - Generator Nickname CODM Keren 2026',
  description:
    'Buat nickname Call of Duty Mobile (CODM) keren dengan tag clan, operator, tengkorak, dan font military 100% gratis.',
  keywords: [
    'cod mobile name generator',
    'nama codm keren',
    'nickname codm aesthetic',
    'simbol clan codm',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/cod-mobile',
  },
  openGraph: {
    title: 'COD Mobile Name Generator - Generator Nickname CODM Keren',
    description: 'Buat nickname CODM keren bergaya militer & pro player.',
    url: 'https://tulisanaesthetic.id/cod-mobile',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COD Mobile Name Generator',
    description: 'Generator nickname COD Mobile Unicode terlengkap.',
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
        item: 'https://tulisanaesthetic.id/game',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'COD Mobile Name Generator',
        item: 'https://tulisanaesthetic.id/cod-mobile',
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
