import type { Metadata } from 'next';
import FontHubClientPage from './FontHubClientPage';

export const metadata: Metadata = {
  title: 'Ubah Font Aesthetic - Direktori 18+ Gaya Tulisan Keren',
  description:
    'Web font aesthetic untuk ubah font biasa jadi 18+ gaya tulisan unik: tebal, kursif, gothic, bubble & glitch. Salin instan gratis tanpa aplikasi.',
  keywords: [
    'ubah font aesthetic',
    'web font aesthetic',
    'ganti font aesthetic',
    'gaya font aesthetic',
    'font generator aesthetic',
    'direktori font aesthetic',
    'pengubah font aesthetic',
    'font unicode indonesia',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font',
  },
  openGraph: {
    title: 'Ubah Font Aesthetic - Direktori 18+ Gaya Tulisan Keren',
    description:
      'Web font aesthetic untuk ubah font biasa jadi 18+ gaya tulisan unik: tebal, kursif, gothic, bubble & glitch. Salin instan gratis tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ubah Font Aesthetic - Direktori 18+ Gaya Tulisan Keren',
    description:
      'Web font aesthetic untuk ubah font biasa jadi 18+ gaya tulisan unik: tebal, kursif, gothic, bubble & glitch. Salin instan gratis tanpa aplikasi.',
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
