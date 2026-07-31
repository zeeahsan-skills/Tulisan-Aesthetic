import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Penafian (Disclaimer) - Tulisan Aesthetic',
  description:
    'Penafian resmi situs Tulisan Aesthetic. Klarifikasi independensi platform dari Meta, ByteDance, WhatsApp, dan pengembang game.',
  alternates: {
    canonical: 'https://tulisanaesthetic.id/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-pink-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-purple-900/30 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
                Penafian (Disclaimer)
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Terakhir diperbarui: 30 Juli 2026
              </p>
            </div>
          </div>

          <section className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              1. Independensi Platform
            </h2>
            <p>
              <strong>Tulisan Aesthetic</strong> adalah alat bantu independen berbasis perambanweb untuk mengonversi teks latin menjadi standar karakter Unicode. Platform kami <strong>TIDAK BERAFILIASI</strong>, tidak disponsori, dan tidak secara resmi dihubungkan dengan WhatsApp LLC, Instagram Inc, Meta Platforms, TikTok (ByteDance Ltd), Discord Inc, Garena Free Fire, Mobile Legends (Moonton), atau Riot Games.
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins pt-4">
              2. Kompatibilitas Perangkat & Aplikasi
            </h2>
            <p>
              Meskipun font Unicode yang dihasilkan dirancang agar kompatibel di mayoritas ponsel cerdas (iOS, Android, Windows, Mac), tampilan fisik font tergantung pada font sistem peramban dan versi aplikasi di perangkat penerima.
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins pt-4">
              3. Tanpa Jaminan Hasil
            </h2>
            <p>
              Seluruh layanan disajikan &quot;apa adanya&quot; (as is) tanpa jaminan bentuk apapun. Tulisan Aesthetic tidak bertanggung jawab atas segala kerugian yang timbul akibat kesalahan penyalinan teks atau kebijakan aplikasi pihak ketiga yang mengubah aturan pemformatan bio.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
