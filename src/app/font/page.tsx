import type { Metadata } from 'next';
import FontHubClientPage from './FontHubClientPage';

export const metadata: Metadata = {
  title: 'Direktori Font Generator Aesthetic — 18+ Gaya Tulisan Keren Unicode',
  description:
    'Pusat direktori font generator aesthetic terlengkap di Indonesia. Temukan 18+ variasi gaya tulisan keren, font tebal, miring kursif, gelembung, gothic, tiny, dan berkilau 100% gratis.',
  keywords: [
    'font generator aesthetic',
    'direktori font aesthetic',
    'tulisan keren',
    'generator tulisan estetik',
    'font unicode indonesia',
    'font tebal copy paste',
    'font miring kursif',
    'font gelembung',
    'font gothic fraktur',
    'font bio instagram',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font',
  },
  openGraph: {
    title: 'Direktori Font Generator Aesthetic — 18+ Gaya Tulisan Keren Unicode',
    description:
      'Pusat konversi font Unicode aesthetic terlengkap di Indonesia. 18+ koleksi gaya huruf siap copy-paste ke Instagram, TikTok, WhatsApp & Game.',
    url: 'https://tulisan-aesthetic.vercel.app/font',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Direktori Font Generator Aesthetic — 18+ Gaya Tulisan Keren',
    description: 'Pusat konversi font Unicode aesthetic terlengkap dan tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function FontHubPage() {
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
        name: 'Direktori Font Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font',
      },
    ],
  };

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Direktori Font Generator Aesthetic',
    description:
      'Katalog lengkap 18+ gaya tulisan aesthetic berbasis standar karakter Unicode resmi.',
    url: 'https://tulisan-aesthetic.vercel.app/font',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Apa itu Generator Font Aesthetic di Tulisan Aesthetic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generator Font Aesthetic adalah alat online gratis yang mengubah teks ketikan biasa menjadi puluhan variasi gaya tulisan keren berbasis standar karakter Unicode resmi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah gaya tulisan di direktori ini bisa dibaca di semua HP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, lebih dari 99% perangkat modern (Android, iPhone iOS, iPad, PC Windows, dan Mac) mendukung karakter Unicode yang kami gunakan secara bawaan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bagaimana cara menggunakan font ini untuk Bio Instagram dan WhatsApp?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pilih kategori font yang diinginkan, ketik teks, tekan tombol Salin, lalu tempelkan (paste) langsung ke profil bio Instagram atau WhatsApp Anda.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah semua font di katalog ini 100% gratis digunakan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, seluruh alat generator font di Tulisan Aesthetic disediakan secara 100% gratis tanpa perlu registrasi akun atau mengunduh aplikasi.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FontHubClientPage />
    </>
  );
}
