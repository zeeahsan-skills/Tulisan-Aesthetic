import type { Metadata } from 'next';
import HurufKerenClientPage from './HurufKerenClientPage';

export const metadata: Metadata = {
  title: 'Huruf Keren & Huruf Cantik - Generator Tulisan Font Keren',
  description:
    'Generator huruf keren & huruf cantik online. Ubah teks jadi tulisan font keren aesthetic untuk bio IG, status WA, TikTok & nama profil gratis.',
  keywords: [
    'huruf keren',
    'huruf cantik',
    'tulisan font keren',
    'tulisan cantik online',
    'huruf keren generator',
    'font cantik',
    'buat huruf keren',
    'font bio instagram',
    'font wa keren',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/huruf-keren',
  },
  openGraph: {
    title: 'Huruf Keren & Huruf Cantik - Generator Tulisan Font Keren',
    description:
      'Generator huruf keren & huruf cantik online. Ubah teks jadi tulisan font keren aesthetic untuk bio IG, status WA, TikTok & nama profil gratis.',
    url: 'https://tulisan-aesthetic.vercel.app/font/huruf-keren',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huruf Keren & Huruf Cantik - Generator Tulisan Font Keren',
    description:
      'Generator huruf keren & huruf cantik online. Ubah teks jadi tulisan font keren aesthetic untuk bio IG, status WA, TikTok & nama profil gratis.',
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
