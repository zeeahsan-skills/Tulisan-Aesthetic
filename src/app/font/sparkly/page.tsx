import type { Metadata } from 'next';
import SparklyClientPage from './SparklyClientPage';

export const metadata: Metadata = {
  title: 'Sparkly Font Generator - Tulisan Berkilau & Glitter Aesthetic',
  description:
    'Generator Sparkly Font & tulisan berkilau Unicode gratis terbaik. Hiasi teks biasa dengan stardust ✧･ﾟ:*, kilau kristal ੈ✩‧₊˚, dan 50 gaya font sparkly aesthetic untuk Bio Instagram, TikTok, WhatsApp & Game.',
  keywords: [
    'sparkly font',
    'font sparkly',
    'tulisan berkilau',
    'glitter text generator',
    'sparkling font aesthetic',
    'font glitter',
    'stardust text',
    'font bintang aesthetic',
    'tulisan glitter copy paste',
    'aesthetic sparkly text',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/sparkly',
  },
  openGraph: {
    title: 'Sparkly Font Generator - Tulisan Berkilau & Glitter Aesthetic',
    description:
      'Konversi teks biasa menjadi font sparkly glitter dan starlight aesthetic Unicode secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/sparkly',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparkly Font Generator - Tulisan Berkilau & Glitter Aesthetic',
    description: 'Generator font sparkly dan tulisan glitter stardust Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function SparklyPage() {
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
        name: 'Sparkly Font Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/sparkly',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SparklyClientPage />
    </>
  );
}
