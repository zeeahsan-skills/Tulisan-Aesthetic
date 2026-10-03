import type { Metadata } from 'next';
import RandomClientPage from './RandomClientPage';

export const metadata: Metadata = {
  title: 'Font Random - Mix Styles & Symbols',
  description:
    'Random font mixer: campur gaya font & simbol acak untuk nama unik. Klik sampai dapat yang pas.',
  keywords: [
    'font random',
    'generator font acak',
    'tulisan random aesthetic',
    'random text generator',
    'mix font generator',
    'font acak copy paste',
    'generator tulisan unik',
    'font random free fire',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/random',
  },
  openGraph: {
    title: 'Font Random - Mix Styles & Symbols',
    description:
      'Random font mixer: campur gaya font & simbol acak untuk nama unik. Klik sampai dapat yang pas.',
    url: 'https://tulisan-aesthetic.vercel.app/font/random',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Random - Mix Styles & Symbols',
    description:
      'Random font mixer: campur gaya font & simbol acak untuk nama unik. Klik sampai dapat yang pas.',
  },
  robots: 'index, follow',
};

export default function RandomPage() {
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
        name: 'Font Random & Acak Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/random',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RandomClientPage />
    </>
  );
}
