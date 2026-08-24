import type { Metadata } from 'next';
import BlogClientPage from './BlogClientPage';

export const metadata: Metadata = {
  title: 'Tulisan Aesthetic Blog - Educational Articles, Font Guides & Gaming Tips',
  description:
    'Pusat edukasi dan artikel blog Tulisan Aesthetic. Pelajari panduan font aesthetic Unicode, trik bio Instagram, caption TikTok, format teks WhatsApp & rekomendasi nama gaming keren.',
  keywords: [
    'tulisan aesthetic blog',
    'artikel font aesthetic',
    'panduan font unicode',
    'tips bio instagram',
    'cara buat font tiktok',
    'nama gaming keren',
    'tutorial kaomoji',
  ],
  authors: [{ name: 'Tulisan Aesthetic Editorial Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/blog',
  },
  openGraph: {
    title: 'Tulisan Aesthetic Blog - Educational Articles & Font Guides',
    description:
      'Learn everything about stylish fonts, Unicode, symbols, gaming names, and social media text.',
    url: 'https://tulisan-aesthetic.vercel.app/blog',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulisan Aesthetic Blog - Educational Articles & Font Guides',
    description: 'Pusat edukasi font Unicode, tips media sosial & panduan nama gaming terpercaya.',
  },
  robots: 'index, follow',
};

export default function BlogHubPage() {
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
        name: 'Blog Hub',
        item: 'https://tulisan-aesthetic.vercel.app/blog',
      },
    ],
  };

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Tulisan Aesthetic Blog',
    description:
      'Learn everything about stylish fonts, Unicode, symbols, gaming names, and social media text.',
    url: 'https://tulisan-aesthetic.vercel.app/blog',
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
      <BlogClientPage />
    </>
  );
}
