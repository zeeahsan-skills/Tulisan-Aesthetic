import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tulisan Aesthetic — Generator Teks & Edit Nama Keren',
  description:
    'Aesthetic text generator gratis Indonesia. Ubah ketikan biasa & edit nama aesthetic jadi tulisan keren Unicode untuk bio IG, TikTok, WA & nickname.',
  keywords: [
    'tulisan aesthetic',
    'tulisan estetik',
    'edit nama aesthetic',
    'aesthetic text generator',
    'teks aesthetic',
    'ketikan aesthetic',
    'buat nama estetik',
    'font unik unicode',
    'tulisan keren',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app',
  },
  openGraph: {
    title: 'Tulisan Aesthetic — Generator Teks & Edit Nama Keren',
    description:
      'Aesthetic text generator gratis Indonesia. Ubah ketikan biasa & edit nama aesthetic jadi tulisan keren Unicode untuk bio IG, TikTok, WA & nickname.',
    url: 'https://tulisan-aesthetic.vercel.app',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulisan Aesthetic — Generator Teks & Edit Nama Keren',
    description:
      'Aesthetic text generator gratis Indonesia. Ubah ketikan biasa & edit nama aesthetic jadi tulisan keren Unicode untuk bio IG, TikTok, WA & nickname.',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite Schema JSON-LD
  // NOTE: No search action here on purpose. The site has no search-results
  // endpoint (no /search page, nothing reads a query parameter — in-page
  // search is React state only), so advertising one made Google crawl a
  // template URL and report it in Search Console as an alternate page.
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tulisan Aesthetic',
    url: 'https://tulisan-aesthetic.vercel.app',
  };

  // Organization Schema JSON-LD
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tulisan Aesthetic',
    url: 'https://tulisan-aesthetic.vercel.app',
    logo: 'https://tulisan-aesthetic.vercel.app/favicon.ico',
    sameAs: [
      'https://facebook.com/tulisanaesthetic',
      'https://instagram.com/tulisanaesthetic',
    ],
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8256437900661368"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen selection:bg-purple-500 selection:text-white`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
