import type { Metadata } from 'next';
import KotakClientPage from './KotakClientPage';

export const metadata: Metadata = {
  title: 'Font Kotak Generator - Converter Tulisan Square & Box Unicode',
  description:
    'Generator tulisan Kotak (Square / Boxed Letters / Enclosed Squared) Unicode terbaik di Indonesia. Ubah teks biasa menjadi font kotak persegi aesthetic untuk Game Nickname, IG Bio, WA & Discord 100% gratis.',
  keywords: [
    'font kotak generator',
    'tulisan square unicode',
    'boxed letters generator',
    'font kotak free fire',
    'square font discord',
    'enclosed squared font',
    'gaya tulisan kotak',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/kotak',
  },
  openGraph: {
    title: 'Font Kotak Generator - Converter Tulisan Square & Box Unicode',
    description:
      'Konversi teks biasa menjadi font Kotak (Square / Boxed Letters) estetik secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/kotak',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Kotak Generator - Converter Tulisan Square & Box',
    description: 'Generator font Kotak Persegi Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function KotakPage() {
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
        name: 'Font Kotak Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/kotak',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <KotakClientPage />
    </>
  );
}
