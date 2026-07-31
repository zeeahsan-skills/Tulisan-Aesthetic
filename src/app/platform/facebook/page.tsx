import type { Metadata } from 'next';
import FacebookClientPage from './FacebookClientPage';

export const metadata: Metadata = {
  title: 'Facebook Font Generator - Converter Tulisan Keren FB 2026',
  description:
    'Generator tulisan estetik Facebook (FB) Unicode terbaik di Indonesia. Buat teks tebal, miring, bubble & gothic untuk nama profil, bio, status beranda, komentar & Messenger 100% gratis.',
  keywords: [
    'facebook font generator',
    'tulisan keren facebook',
    'font bio facebook',
    'font nama akun fb',
    'font tebal facebook',
    'font miring fb',
    'fb status generator',
    'font messenger aesthetic',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/platform/facebook',
  },
  openGraph: {
    title: 'Facebook Font Generator - Convert Teks Nama, Status & Bio FB Aesthetic 2026',
    description:
      'Konversi teks biasa menjadi font Facebook estetik Unicode secara instan tanpa perlu aplikasi tambahan.',
    url: 'https://tulisanaesthetic.id/platform/facebook',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Font Generator - Ubah Huruf Bio & Status FB Aesthetic',
    description: 'Generator font Facebook Unicode tercepat dan terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function FacebookPage() {
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
        name: 'Platforms',
        item: 'https://tulisanaesthetic.id/#platforms',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Facebook Font Generator',
        item: 'https://tulisanaesthetic.id/platform/facebook',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FacebookClientPage />
    </>
  );
}
