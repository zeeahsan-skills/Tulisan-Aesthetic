import type { Metadata } from 'next';
import MemutarClientPage from './MemutarClientPage';

export const metadata: Metadata = {
  title: 'Font Terbalik - Tulisan Upside Down',
  description:
    'Balik tulisan jadi terbalik (upside down). Bikin teks unik untuk bio & komentar.',
  keywords: [
    'font memutar generator',
    'tulisan terbalik unicode',
    'upside down text generator',
    'font terbalik bio instagram',
    'flipped text tiktok',
    'tulisan terbalik whatsapp',
    'mirror text generator',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/memutar',
  },
  openGraph: {
    title: 'Font Terbalik - Tulisan Upside Down',
    description:
      'Balik tulisan jadi terbalik (upside down). Bikin teks unik untuk bio & komentar.',
    url: 'https://tulisan-aesthetic.vercel.app/font/memutar',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Terbalik - Tulisan Upside Down',
    description:
      'Balik tulisan jadi terbalik (upside down). Bikin teks unik untuk bio & komentar.',
  },
  robots: 'index, follow',
};

export default function MemutarPage() {
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
        name: 'Font Memutar Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/memutar',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MemutarClientPage />
    </>
  );
}
