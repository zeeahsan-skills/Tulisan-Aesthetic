import type { Metadata } from 'next';
import HurufKerenClientPage from './HurufKerenClientPage';

export const metadata: Metadata = {
  title: 'Huruf Keren Generator - Converter Tulisan & Font Keren Aesthetic',
  description:
    'Generator Huruf Keren & Tulisan Aesthetic Unicode gratis terbaik di Indonesia. Ubah teks biasa menjadi font keren stylish untuk Bio Instagram, WA, TikTok & Nickname Game 100% instan.',
  keywords: [
    'huruf keren generator',
    'tulisan keren',
    'font keren',
    'tulisan aesthetic',
    'stylish unicode text',
    'cool text generator',
    'font bio instagram',
    'font wa keren',
    'nickname game keren',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/huruf-keren',
  },
  openGraph: {
    title: 'Huruf Keren Generator - Converter Tulisan & Font Keren Aesthetic',
    description:
      'Konversi teks biasa menjadi karakter Unicode stylish & huruf keren aesthetic secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/huruf-keren',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huruf Keren Generator - Converter Tulisan & Font Keren Aesthetic',
    description: 'Generator Huruf Keren & Tulisan Aesthetic Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function HurufKerenPage() {
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
        name: 'Direktori Font',
        item: 'https://tulisan-aesthetic.vercel.app/font',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Huruf Keren Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/huruf-keren',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HurufKerenClientPage />
    </>
  );
}
