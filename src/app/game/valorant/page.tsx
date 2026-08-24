import type { Metadata } from 'next';
import GameClientPage from '../GameClientPage';

export const metadata: Metadata = {
  title: 'Valorant Font Generator - Radiant Nickname & Tagline 2026',
  description:
    'Generator Nickname Valorant pro player dan Riot ID aesthetic. Ubah nama akun Valorant menjadi 50 gaya font Unicode unik dan simbol gaming.',
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/game/valorant',
  },
  robots: 'index, follow',
};

export default function ValorantPage() {
  return <GameClientPage />;
}
