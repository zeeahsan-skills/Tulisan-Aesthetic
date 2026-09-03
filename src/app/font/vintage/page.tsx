import type { Metadata } from 'next';
import VintageClientPage from './VintageClientPage';

export const metadata: Metadata = {
  title: 'Font Vintage & Klasik Generator — Tulisan Retro, Typewriter & Serif Aesthetic',
  description:
    'Generator Font Vintage & Retro Klasik Unicode gratis. Ubah teks biasa menjadi font mesin tik antik, serif vintage elegan, dan estetika retro 70-an/80-an untuk bio media sosial, caption estetik & quotes.',
  keywords: [
    'font vintage',
    'tulisan vintage',
    'font klasik retro',
    'font mesin tik aesthetic',
    'typewriter text',
    'serif vintage',
    'retro font copy paste',
    'font nostalgia aesthetic',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/vintage',
  },
  openGraph: {
    title: 'Font Vintage & Klasik Generator — Tulisan Retro & Serif Aesthetic Unicode',
    description:
      'Konversi teks biasa menjadi font Vintage retro era 70-an/80-an, mesin tik klasik, dan serif nostalgia estetik secara instan.',
    url: 'https://tulisan-aesthetic.vercel.app/font/vintage',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Vintage & Klasik Generator — Tulisan Retro & Serif Aesthetic',
    description: 'Generator font Vintage dan Retro Klasik Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function VintagePage() {
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
        name: 'Font Styles',
        item: 'https://tulisan-aesthetic.vercel.app/#popular-fonts',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Font Vintage & Retro Klasik',
        item: 'https://tulisan-aesthetic.vercel.app/font/vintage',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <VintageClientPage />
    </>
  );
}
