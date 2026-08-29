import type { Metadata } from 'next';
import TwitterXClientPage from './TwitterXClientPage';

export const metadata: Metadata = {
  title: 'Twitter X Font Generator - Convert Teks Bio & Tweet Aesthetic',
  description:
    'Generator Font Twitter (X) di Indonesia. Ubah teks biasa menjadi font Unicode estetik untuk Bio X, Tweet, Username & Display Name 100% gratis secara instan.',
  keywords: [
    'twitter font generator',
    'x font generator',
    'font bio twitter aesthetic',
    'tulisan keren twitter',
    'font display name twitter',
    'unicode text twitter x',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/platform/twitter-x',
  },
  openGraph: {
    title: 'Twitter X Font Generator - Teks Bio & Tweet Aesthetic',
    description:
      'Konversi teks biasa menjadi font Unicode estetik untuk Bio Twitter / X, Tweet, dan Display Name 100% gratis.',
    url: 'https://tulisan-aesthetic.vercel.app/platform/twitter-x',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter X Font Generator - Bio & Post Aesthetic',
    description: 'Generator font Twitter Unicode gratis.',
  },
  robots: 'index, follow',
};

export default function TwitterXPage() {
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
        name: 'Platforms',
        item: 'https://tulisan-aesthetic.vercel.app/platform',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Twitter X Font Generator',
        item: 'https://tulisan-aesthetic.vercel.app/platform/twitter-x',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TwitterXClientPage />
    </>
  );
}
