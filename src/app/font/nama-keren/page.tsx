import type { Metadata } from 'next';
import NamaKerenClientPage from './NamaKerenClientPage';

export const metadata: Metadata = {
  title: 'Generator Nama Keren - Converter Stylish Name IG, FF & TikTok 2026',
  description:
    'Generator Nama Keren (Stylish Name Generator) Unicode terbaik di Indonesia. Buat nama aesthetic untuk Nickname Free Fire, MLBB, PUBG, Bio IG, TikTok & Discord 100% gratis.',
  keywords: [
    'generator nama keren',
    'stylish name generator',
    'nama ff aesthetic',
    'nickname game keren',
    'nama bio instagram aesthetic',
    'tiktok username generator',
    'gaya nama gothic wings',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/nama-keren',
  },
  openGraph: {
    title: 'Generator Nama Keren - Converter Stylish Name IG, FF & TikTok',
    description:
      'Buat nama keren & aesthetic untuk Free Fire, MLBB, PUBG, Bio IG, dan TikTok secara instan tanpa aplikasi.',
    url: 'https://tulisanaesthetic.id/font/nama-keren',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Nama Keren - Converter Stylish Name',
    description: 'Generator Nama Keren Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function NamaKerenPage() {
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
        name: 'Font Styles',
        item: 'https://tulisanaesthetic.id/#popular-fonts',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Generator Nama Keren',
        item: 'https://tulisanaesthetic.id/font/nama-keren',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <NamaKerenClientPage />
    </>
  );
}
