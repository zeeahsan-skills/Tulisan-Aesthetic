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
  title: 'Tulisan Aesthetic — Generator Teks & Font Unik Unicode',
  description:
    'Generator teks estetik & font keren Unicode di Indonesia. Ubah teks biasa menjadi gaya tulisan unik secara instan untuk Bio Instagram, TikTok, WhatsApp & Game Nickname.',
  keywords: [
    'tulisan aesthetic',
    'teks estetik',
    'font unik',
    'gaya tulisan unicode',
    'karakter estetik',
    'tulisan keren',
    'font generator instagram',
    'nickname ff aesthetic',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app',
  },
  openGraph: {
    title: 'Tulisan Aesthetic — Generator Teks & Font Unik Unicode',
    description:
      'Konversi teks biasa menjadi gaya tulisan Unicode estetik untuk Instagram, TikTok, WhatsApp & Game Nickname secara instan.',
    url: 'https://tulisan-aesthetic.vercel.app',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulisan Aesthetic — Generator Teks & Font Unik Unicode',
    description: 'Generator font Unicode praktis untuk Bio, Caption & Game Nickname.',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite Schema JSON-LD
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tulisan Aesthetic',
    url: 'https://tulisan-aesthetic.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://tulisan-aesthetic.vercel.app/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
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
