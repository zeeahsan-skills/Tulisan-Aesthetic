import type { Metadata } from 'next';
import VintageClientPage from './VintageClientPage';

export const metadata: Metadata = {
  title: 'Font Vintage - Retro & Typewriter',
  description:
    'Font vintage & retro: gaya mesin ketik typewriter klasik untuk kutipan puisi & bio aesthetic.',
  keywords: [
    'font vintage',
    'tulisan vintage',
    'font klasik retro',
    'font mesin tik aesthetic',
    'typewriter text',
    'serif vintage',
    'retro font copy paste',
    'font nostalgia aesthetic',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/vintage',
  },
  openGraph: {
    title: 'Font Vintage - Retro & Typewriter',
    description:
      'Font vintage & retro: gaya mesin ketik typewriter klasik untuk kutipan puisi & bio aesthetic.',
    url: 'https://tulisan-aesthetic.vercel.app/font/vintage',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Vintage - Retro & Typewriter',
    description:
      'Font vintage & retro: gaya mesin ketik typewriter klasik untuk kutipan puisi & bio aesthetic.',
  },
  robots: 'index, follow',
};

export default function VintagePage() {
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
        name: 'Font Vintage & Retro Klasik',
        item: 'https://tulisan-aesthetic.vercel.app/font/vintage',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <VintageClientPage />
    </>
  );
}
