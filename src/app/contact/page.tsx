import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, MessageSquare, Send, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hubungi Kami (Contact Us) - Tulisan Aesthetic',
  description:
    'Hubungi tim pengembang Tulisan Aesthetic untuk kritik, saran, pertanyaan, atau permohonan fitur gaya font Unicode terbaru.',
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/contact',
  },
};

export default function ContactPage() {
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
            <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-md">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
                Hubungi Kami
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Kirimkan pesan, saran font aesthetic, atau laporan masukan kepada tim kami.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                Kontak Informasi
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Kami selalu senang mendengar kabar dari para pembuat konten, gamer, dan pengguna setiamu! Punya ide untuk gaya font Unicode baru? Kirim pesan di bawah ini.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                  <Mail className="w-5 h-5 text-purple-600 dark:text-pink-400 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Email Resmi</p>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">support@tulisan-aesthetic.vercel.app</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                  <MessageSquare className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Jam Operasional</p>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Senin - Minggu (24/7 Response)</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Nama Anda
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Ahsan"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Alamat Email
                </label>
                <input
                  type="email"
                  placeholder="nama@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Pesan / Saran Font
                </label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan pesan atau usulan gaya font baru Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-slate-900 dark:text-white resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
