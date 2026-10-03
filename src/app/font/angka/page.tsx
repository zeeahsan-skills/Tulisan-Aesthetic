import type { Metadata } from 'next';
import AngkaClientPage from './AngkaClientPage';

export const metadata: Metadata = {
  title: 'Generator Angka Keren - Converter Numbers Unicode Aesthetic',
  description:
    'Generator angka keren Unicode untuk nickname & bio. Ubah angka biasa jadi gaya aesthetic instan.',
  keywords: [
    'generator angka keren',
    'tulisan angka lingkaran',
    'circled numbers unicode',
    'angka tebal aesthetic',
    'monospace numbers',
    'nomor cantik bio instagram',
    'font angka free fire',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/angka',
  },
  openGraph: {
    title: 'Generator Angka Keren - Converter Numbers Unicode Aesthetic',
    description:
      'Generator angka keren Unicode untuk nickname & bio. Ubah angka biasa jadi gaya aesthetic instan.',
    url: 'https://tulisan-aesthetic.vercel.app/font/angka',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Angka Keren - Converter Numbers Unicode Aesthetic',
    description:
      'Generator angka keren Unicode untuk nickname & bio. Ubah angka biasa jadi gaya aesthetic instan.',
  },
  robots: 'index, follow',
};

export default function AngkaPage() {
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
        name: 'Generator Angka Keren',
        item: 'https://tulisan-aesthetic.vercel.app/font/angka',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AngkaClientPage />
    </>
  );
}
