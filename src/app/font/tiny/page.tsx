import type { Metadata } from 'next';
import TinyTextClientPage from './TinyTextClientPage';

export const metadata: Metadata = {
  title: 'Tiny Text Generator - Font Huruf Kecil & Small Caps',
  description:
    'Tiny text generator: ubah teks jadi huruf kecil & small caps aesthetic untuk bio Instagram yang rapi.',
  keywords: [
    'tiny text',
    'small text',
    'small caps',
    'tulisan kecil',
    'huruf kecil aesthetic',
    'tiny font generator',
    'small text generator',
    'superscript text',
    'font bio instagram kecil',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/tiny',
  },
  openGraph: {
    title: 'Tiny Text Generator - Font Huruf Kecil & Small Caps',
    description:
      'Tiny text generator: ubah teks jadi huruf kecil & small caps aesthetic untuk bio Instagram yang rapi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/tiny',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiny Text Generator - Font Huruf Kecil & Small Caps',
    description:
      'Tiny text generator: ubah teks jadi huruf kecil & small caps aesthetic untuk bio Instagram yang rapi.',
  },
  robots: 'index, follow',
};

export default function TinyTextPage() {
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
        name: 'Tiny Text Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/tiny',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TinyTextClientPage />
    </>
  );
}
