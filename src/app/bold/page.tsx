import type { Metadata } from 'next';
import KotakClientPage from '../font/kotak/KotakClientPage';

export const metadata: Metadata = {
  title: 'Font Bold Generator - Converter Tulisan Bold & Tebal Unicode 2026',
  description:
    'Generator tulisan Bold (Teks Tebal / Bold Sans / Boxed) Unicode terbaik di Indonesia. Ubah teks biasa menjadi font tebal aesthetic untuk Game Nickname, IG Bio, WA & Discord 100% gratis.',
  keywords: [
    'font bold generator',
    'tulisan bold unicode',
    'teks tebal generator',
    'bold font discord',
    'gaya tulisan bold',
    'font bold free fire',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/bold',
  },
  openGraph: {
    title: 'Font Bold Generator - Converter Tulisan Bold & Tebal Unicode',
    description:
      'Konversi teks biasa menjadi font Bold estetik secara instan tanpa aplikasi.',
    url: 'https://tulisanaesthetic.id/bold',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Bold Generator - Converter Tulisan Bold & Tebal',
    description: 'Generator font Bold Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function BoldPage() {
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
        name: 'Font Bold Generator',
        item: 'https://tulisanaesthetic.id/bold',
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
