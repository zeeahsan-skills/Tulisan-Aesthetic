import type { Metadata } from 'next';
import NamaKerenClientPage from './NamaKerenClientPage';

export const metadata: Metadata = {
  title: 'Nama Keren Generator - Stylish Name',
  description:
    'Generator nama keren & stylish untuk profil IG, TikTok & WA. Kombinasi font aesthetic + simbol unik.',
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
    title: 'Nama Keren Generator - Stylish Name',
    description:
      'Generator nama keren & stylish untuk profil IG, TikTok & WA. Kombinasi font aesthetic + simbol unik.',
    url: 'https://tulisan-aesthetic.vercel.app/font/nama-keren',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nama Keren Generator - Stylish Name',
    description:
      'Generator nama keren & stylish untuk profil IG, TikTok & WA. Kombinasi font aesthetic + simbol unik.',
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
        name: 'Direktori Font',
        item: 'https://tulisan-aesthetic.vercel.app/font',
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
