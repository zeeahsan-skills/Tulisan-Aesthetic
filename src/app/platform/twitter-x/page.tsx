import type { Metadata } from 'next';
import PlatformClientPage from '../PlatformClientPage';

export const metadata: Metadata = {
  title: 'Twitter X Font Generator - Convert Text Bio & Post Aesthetic 2026',
  description:
    'Generator Font Twitter (X) terbaik di Indonesia. Ubah teks biasa menjadi font Unicode estetik untuk Bio X, Tweet, Username & Display Name 100% gratis.',
  alternates: {
    canonical: 'https://tulisanaesthetic.id/platform/twitter-x',
  },
  robots: 'index, follow',
};

export default function TwitterXPage() {
  return <PlatformClientPage />;
}
