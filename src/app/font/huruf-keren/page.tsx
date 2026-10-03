import type { Metadata } from 'next';
import HurufKerenClientPage from './HurufKerenClientPage';

export const metadata: Metadata = {
  title: 'Huruf Keren Generator - Font Aesthetic',
  description:
    'Generator huruf keren aesthetic: ubah teks biasa jadi font unik untuk bio IG, TikTok & nickname game. Gratis, instan.',
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
    title: 'Huruf Keren Generator - Font Aesthetic',
    description:
      'Generator huruf keren aesthetic: ubah teks biasa jadi font unik untuk bio IG, TikTok & nickname game. Gratis, instan.',
    url: 'https://tulisan-aesthetic.vercel.app/font/huruf-keren',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huruf Keren Generator - Font Aesthetic',
    description:
      'Generator huruf keren aesthetic: ubah teks biasa jadi font unik untuk bio IG, TikTok & nickname game. Gratis, instan.',
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
