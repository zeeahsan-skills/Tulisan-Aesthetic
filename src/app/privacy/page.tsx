import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi (Privacy Policy) - Tulisan Aesthetic',
  description:
    'Kebijakan privasi platform Tulisan Aesthetic. Kami berkomitmen melindungi kerahasiaan dan keamanan pengguna saat menggunakan generator font Unicode.',
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/privacy',
  },
};

export default function PrivacyPage() {
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
            <div className="p-3.5 rounded-2xl bg-purple-600/10 text-purple-600 dark:text-pink-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
                Kebijakan Privasi
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Terakhir diperbarui: 30 Juli
              </p>
            </div>
          </div>

          <section className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              1. Pengantar
            </h2>
            <p>
              Selamat datang di <strong>Tulisan Aesthetic</strong> (tulisan-aesthetic.vercel.app). Kami menghargai privasi Anda dan berkomitmen penuh untuk melindungi data pribadi pengguna. Kebijakan Privasi ini menjelaskan bagaimana kami mengelola informasi saat Anda menggunakan generator font Unicode gratis kami.
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins pt-4">
              2. Pengolahan Teks & Data Lokal
            </h2>
            <p>
              Semua konversi teks dan pengolahan font Unicode dilakukan secara 100% langsung di peramban (browser) perangkat Anda secara client-side. Teks yang Anda masukkan <strong>TIDAK PERNAH</strong> dikirim, disimpan, atau diproses di server backend kami.
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins pt-4">
              3. Cookies dan Analytics
            </h2>
            <p>
              Kami dapat menggunakan cookies standar peramban dan analitik anonim (seperti Google Analytics) untuk memahami statistik pengunjung, seperti preferensi bahasa dan halaman yang paling sering dikunjungi. Informasi ini digunakan semata-mata untuk meningkatkan kinerja platform.
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins pt-4">
              4. Keamanan
            </h2>
            <p>
              Karena situs kami menggunakan protokol HTTPS standar terenkripsi dan tidak meminta pendaftaran akun atau kata sandi, pengalaman Anda di platform kami dijamin aman dan bebas dari pelacakan invasif.
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins pt-4">
              5. Hubungi Kami
            </h2>
            <p>
              Jika Anda memiliki pertanyaan seputar Kebijakan Privasi ini, silakan hubungi tim kami melalui halaman{' '}
              <Link href="/contact" className="text-purple-600 dark:text-pink-400 font-semibold underline">
                Hubungi Kami
              </Link>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
