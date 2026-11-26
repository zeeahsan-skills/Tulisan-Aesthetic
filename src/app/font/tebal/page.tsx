import type { Metadata } from 'next';
import FontTebalClientPage from './FontTebalClientPage';

export const metadata: Metadata = {
  title: 'Font Tebal Aesthetic - Generator Tulisan Tebal Bold',
  description:
    'Generator tulisan tebal aesthetic (bold Unicode) untuk bio Instagram, WhatsApp & TikTok. Ubah teks biasa jadi huruf tebal keren copy paste gratis.',
  keywords: [
    'tulisan tebal aesthetic',
    'font tebal aesthetic',
    'font aesthetic tebal',
    'font tebal',
    'tulisan tebal',
    'huruf tebal',
    'bold unicode',
    'bold font generator',
    'teks tebal copy paste',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/tebal',
  },
  openGraph: {
    title: 'Font Tebal Aesthetic - Generator Tulisan Tebal Bold',
    description:
      'Generator tulisan tebal aesthetic (bold Unicode) untuk bio Instagram, WhatsApp & TikTok. Ubah teks biasa jadi huruf tebal keren copy paste gratis.',
    url: 'https://tulisan-aesthetic.vercel.app/font/tebal',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Tebal Aesthetic - Generator Tulisan Tebal Bold',
    description:
      'Generator tulisan tebal aesthetic (bold Unicode) untuk bio Instagram, WhatsApp & TikTok. Ubah teks biasa jadi huruf tebal keren copy paste gratis.',
  },
  robots: 'index, follow',
};

export default function FontTebalPage() {
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
        name: 'Font Tebal Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/tebal',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FontTebalClientPage />
    </>
  );
}
