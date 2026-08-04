import type { Metadata } from 'next';
import BerkilauClientPage from '../berkilau/BerkilauClientPage';

export const metadata: Metadata = {
  title: 'Font Kecil / Tiny Text Generator - Small Caps Unicode 2026',
  description:
    'Generator font kecil (Tiny Text / Small Caps / Superscript / Subscript) Unicode terbaik di Indonesia. Ubah teks biasa menjadi font mini aesthetic 100% gratis.',
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/tiny',
  },
  robots: 'index, follow',
};

export default function TinyFontPage() {
  return <BerkilauClientPage />;
}
