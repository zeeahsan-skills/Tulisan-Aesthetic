import type { Metadata } from 'next';
import FacebookClientPage from './FacebookClientPage';

export const metadata: Metadata = {
  title: 'Facebook Font Generator - Converter Tulisan Keren FB',
  description:
    'Generator font Facebook aesthetic: buat teks tebal, miring & gothic untuk nama profil, bio, status & postingan FB. 100% gratis copy paste.',
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
    canonical: 'https://tulisan-aesthetic.vercel.app/platform/facebook',
  },
  openGraph: {
    title: 'Facebook Font Generator - Converter Tulisan Keren FB',
    description:
      'Generator font Facebook aesthetic: buat teks tebal, miring & gothic untuk nama profil, bio, status & postingan FB. 100% gratis copy paste.',
    url: 'https://tulisan-aesthetic.vercel.app/platform/facebook',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Font Generator - Converter Tulisan Keren FB',
    description:
      'Generator font Facebook aesthetic: buat teks tebal, miring & gothic untuk nama profil, bio, status & postingan FB. 100% gratis copy paste.',
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
        item: 'https://tulisan-aesthetic.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Platform Media Sosial',
        item: 'https://tulisan-aesthetic.vercel.app/platform',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Facebook Font Generator',
        item: 'https://tulisan-aesthetic.vercel.app/platform/facebook',
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
