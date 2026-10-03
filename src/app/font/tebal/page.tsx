import type { Metadata } from 'next';
import FontTebalClientPage from './FontTebalClientPage';

export const metadata: Metadata = {
  title: 'Font Tebal Generator - Converter Tulisan Tebal Bold Unicode',
  description:
    'Ubah teks biasa menjadi tulisan tebal (bold) Unicode untuk bio Instagram, WA & TikTok. Copy paste instan, gratis.',
  keywords: [
    'font tebal',
    'tulisan tebal',
    'huruf tebal',
    'bold text',
    'bold unicode',
    'bold font generator',
    'tulisan bold',
    'teks tebal copy paste',
    'font bio instagram tebal',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/tebal',
  },
  openGraph: {
    title: 'Font Tebal Generator - Converter Tulisan Tebal Bold Unicode',
    description:
      'Ubah teks biasa menjadi tulisan tebal (bold) Unicode untuk bio Instagram, WA & TikTok. Copy paste instan, gratis.',
    url: 'https://tulisan-aesthetic.vercel.app/font/tebal',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Tebal Generator - Converter Tulisan Tebal Bold Unicode',
    description:
      'Ubah teks biasa menjadi tulisan tebal (bold) Unicode untuk bio Instagram, WA & TikTok. Copy paste instan, gratis.',
  },
  robots: 'index, follow',
};

export default function FontTebalPage() {
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
        name: 'Font Tebal Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/tebal',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FontTebalClientPage />
    </>
  );
}
