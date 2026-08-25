import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, MessageSquare, Send, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hubungi Kami (Contact Us) - Tulisan Aesthetic',
  description:
    'Punya pertanyaan, masukan, atau saran fitur baru? Hubungi kami melalui email infoahsan665@gmail.com.',
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
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-pink-400 hover:underline mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
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
                Contact Us
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Punya pertanyaan, masukan, atau saran fitur baru? Hubungi kami melalui email.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                Kontak Informasi
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Punya pertanyaan, masukan, atau saran fitur baru? Hubungi kami melalui email.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                  <Mail className="w-5 h-5 text-purple-600 dark:text-pink-400 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Email Resmi</p>
                    <a
                      href="mailto:infoahsan665@gmail.com"
                      className="text-sm font-semibold text-purple-600 dark:text-pink-400 hover:text-purple-700 dark:hover:text-pink-300 underline decoration-purple-500/30 hover:decoration-purple-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                    >
                      infoahsan665@gmail.com
                    </a>
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

            <div className="flex flex-col justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                Kirim Email Langsung
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Klik tombol di bawah ini untuk membuka aplikasi surel/email Anda dan mengirimkan pesan secara langsung.
              </p>
              <a
                href="mailto:infoahsan665@gmail.com"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <Send className="w-4 h-4" />
                <span>Email Kami (infoahsan665@gmail.com)</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
