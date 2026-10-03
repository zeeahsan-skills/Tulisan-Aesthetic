import type { Metadata } from 'next';
import FontMiringKursifClientPage from './FontMiringKursifClientPage';

export const metadata: Metadata = {
  title: 'Font Miring & Kursif - Tulisan Sambung',
  description:
    'Converter tulisan miring & kursif aesthetic. Buat teks sambung elegan untuk caption dan bio dalam sekali klik.',
  keywords: [
    'miring kursif',
    'font miring',
    'tulisan miring',
    'font kursif',
    'tulisan kursif',
    'tulisan sambung',
    'cursive text',
    'cursive font generator',
    'italic text',
    'font bio instagram miring',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/miring-kursif',
  },
  openGraph: {
    title: 'Font Miring & Kursif - Tulisan Sambung',
    description:
      'Converter tulisan miring & kursif aesthetic. Buat teks sambung elegan untuk caption dan bio dalam sekali klik.',
    url: 'https://tulisan-aesthetic.vercel.app/font/miring-kursif',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Miring & Kursif - Tulisan Sambung',
    description:
      'Converter tulisan miring & kursif aesthetic. Buat teks sambung elegan untuk caption dan bio dalam sekali klik.',
  },
  robots: 'index, follow',
};

export default function FontMiringKursifPage() {
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
        name: 'Font Miring & Kursif Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/miring-kursif',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FontMiringKursifClientPage />
    </>
  );
}
