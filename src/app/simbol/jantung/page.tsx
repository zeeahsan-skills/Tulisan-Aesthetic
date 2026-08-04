import type { Metadata } from 'next';
import SymbolsClientPage from '../SymbolsClientPage';

export const metadata: Metadata = {
  title: 'Simbol Jantung & Hati Aesthetic (Heart Symbols) 2026',
  description:
    'Koleksi simbol jantung & hati (♡, ♥, ❥, ❣) dipadu dengan 50 gaya font Unicode aesthetic siap salin.',
  alternates: {
    canonical: 'https://tulisanaesthetic.id/simbol/jantung',
  },
  robots: 'index, follow',
};

export default function SimbolJantungPage() {
  return <SymbolsClientPage />;
}
