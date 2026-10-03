import type { Metadata } from 'next';
import BerkilauClientPage from './BerkilauClientPage';

export const metadata: Metadata = {
  title: 'Font Berkilau - Simbol Bintang & Cahaya',
  description:
    'Font berkilau dengan simbol bintang & cahaya ✨. Buat tulisan aesthetic bercahaya untuk caption & bio.',
  keywords: [
    'font berkilau',
    'font bintang aesthetic',
    'tulisan berkilau',
    'simbol bintang berkilau',
    'stardust text',
    'font cahaya unicode',
    'hiasan teks bintang',
    'tulisan bintang copy paste',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/berkilau',
  },
  openGraph: {
    title: 'Font Berkilau - Simbol Bintang & Cahaya',
    description:
      'Font berkilau dengan simbol bintang & cahaya ✨. Buat tulisan aesthetic bercahaya untuk caption & bio.',
    url: 'https://tulisan-aesthetic.vercel.app/font/berkilau',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Berkilau - Simbol Bintang & Cahaya',
    description:
      'Font berkilau dengan simbol bintang & cahaya ✨. Buat tulisan aesthetic bercahaya untuk caption & bio.',
  },
  robots: 'index, follow',
};

export default function BerkilauPage() {
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
        name: 'Font Berkilau Bintang Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/berkilau',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BerkilauClientPage />
    </>
  );
}
