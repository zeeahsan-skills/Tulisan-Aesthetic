import type { Metadata } from 'next';
import FontClientPage from './FontClientPage';

export const metadata: Metadata = {
  title: 'Koleksi Gaya Font Aesthetic Unicode - Generator & Copypaste 2026',
  description:
    'Koleksi lengkap gaya font aesthetic Unicode: Small Caps, Cursive, Gothic, Bubble, Zalgo Glitch, Monospace & Tebal Bold. Ubah teks biasa jadi font keren untuk IG, TikTok, WA & Game.',
  keywords: [
    'gaya font aesthetic',
    'font unicode generator',
    'small caps generator',
    'gothic font copy paste',
    'bubble text generator',
    'font tebal instagram',
    'tulisan estetik',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font',
  },
  openGraph: {
    title: 'Koleksi Gaya Font Aesthetic Unicode - Generator & Copypaste 2026',
    description:
      'Pilih dan buat gaya font aesthetic Unicode impian Anda. Copy paste gratis untuk IG, TikTok, WhatsApp & Game Nickname.',
    url: 'https://tulisanaesthetic.id/font',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koleksi Gaya Font Aesthetic Unicode',
    description: '100+ gaya font Unicode estetik 1-klik copy paste gratis.',
  },
  robots: 'index, follow',
};

export default function FontPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tulisanaesthetic.id',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Gaya Font Aesthetic',
        item: 'https://tulisanaesthetic.id/font',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FontClientPage />
    </>
  );
}
