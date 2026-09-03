import type { Metadata } from 'next';
import NamaKerenClientPage from './NamaKerenClientPage';

export const metadata: Metadata = {
  title: 'Generator Nama Keren & Stylish Name — Nama Profil Aesthetic IG, TikTok & WA',
  description:
    'Generator Nama Keren & Stylish Display Name online terbaik di Indonesia. Ubah nama biasa menjadi kombinasi font aesthetic, simbol sayap ꧁༺ ༻꧂, dan ornamen elegan untuk profil Instagram, akun TikTok, dan WhatsApp.',
  keywords: [
    'generator nama keren',
    'stylish name generator',
    'nama aesthetic ig',
    'nama profil tiktok keren',
    'username aesthetic',
    'display name keren',
    'stylish username',
    'nama bio aesthetic',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/nama-keren',
  },
  openGraph: {
    title: 'Generator Nama Keren & Stylish Name — Nama Profil Aesthetic IG, TikTok & WA',
    description:
      'Buat nama display & profil keren aesthetic untuk bio Instagram, akun TikTok, WhatsApp, dan media sosial secara instan.',
    url: 'https://tulisan-aesthetic.vercel.app/font/nama-keren',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Nama Keren & Stylish Name — Profil Aesthetic',
    description: 'Generator Nama Keren dan Stylish Display Name Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function NamaKerenPage() {
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
        name: 'Font Styles',
        item: 'https://tulisan-aesthetic.vercel.app/#popular-fonts',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Generator Nama Keren & Stylish Name',
        item: 'https://tulisan-aesthetic.vercel.app/font/nama-keren',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <NamaKerenClientPage />
    </>
  );
}
