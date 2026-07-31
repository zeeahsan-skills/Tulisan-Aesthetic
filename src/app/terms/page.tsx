import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan (Terms of Service) - Tulisan Aesthetic',
  description:
    'Syarat dan ketentuan penggunaan platform Tulisan Aesthetic. Ketahui ketentuan penggunaan font Unicode gratis untuk sosial media dan game.',
  alternates: {
    canonical: 'https://tulisanaesthetic.id/terms',
  },
};

export default function TermsPage() {
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
            <div className="p-3.5 rounded-2xl bg-pink-600/10 text-pink-600 dark:text-pink-400">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
                Syarat & Ketentuan
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Terakhir diperbarui: 30 Juli 2026
              </p>
            </div>
          </div>

          <section className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              1. Penerimaan Ketentuan
            </h2>
            <p>
              Dengan mengakses dan menggunakan situs <strong>Tulisan Aesthetic</strong>, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan penggunaan ini. Jika Anda tidak menyetujui ketentuan ini, mohon untuk tidak melanjutkan penggunaan platform.
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins pt-4">
              2. Penggunaan Layanan Free & Personal Use
            </h2>
            <p>
              Seluruh alat generator font Unicode, simbol, dan nickname di Tulisan Aesthetic disediakan secara <strong>100% gratis</strong> untuk penggunaan pribadi mau pun komersial di platform media sosial seperti Instagram, TikTok, WhatsApp, Discord, Free Fire, Mobile Legends, dan lainnya.
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins pt-4">
              3. Hak Kekayaan Intelektual
            </h2>
            <p>
              Karakter font yang dihasilkan berasal dari standar internasional <strong>Unicode Consortium</strong>. Tulisan Aesthetic tidak mengklaim hak cipta atas simbol Unicode publik tersebut. Namun, desain antarmuka, aset visual, dan kode sumber situs merupakan hak milik Tulisan Aesthetic.
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins pt-4">
              4. Perilaku Pengguna
            </h2>
            <p>
              Pengguna dilarang memanfaatkan font buatan situs kami untuk tindakan pelecehan, penipuan, spamming, ujaran kebencian, atau aktivitas ilegal yang melanggar hukum Republik Indonesia.
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins pt-4">
              5. Perubahan Layanan
            </h2>
            <p>
              Kami berhak menambah, mengubah, atau memperbarui fitur font dan tampilan situs sewaktu-waktu tanpa pemberitahuan sebelumnya demi kenyamanan pengguna.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
