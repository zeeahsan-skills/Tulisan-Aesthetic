'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function HurufKerenFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const hurufKerenFaqs = [
    {
      q: 'Apa itu Huruf Keren Generator?',
      a: 'Huruf Keren Generator adalah alat pengubah teks online gratis yang memetakan alfabet biasa menjadi variasi simbol Unicode stylish (seperti Small Caps, Bold, Script, Gothic, dan Kotak) yang bisa disalin dan ditempel di berbagai media sosial serta game.',
    },
    {
      q: 'Bagaimana cara mengubah tulisan biasa menjadi huruf keren?',
      a: 'Cukup ketik atau tempelkan teks Anda pada kolom input generator di bagian atas halaman ini. Sistem akan secara otomatis menampilkan 50 variasi gaya huruf keren. Klik tombol "Salin" pada gaya yang Anda sukai.',
    },
    {
      q: 'Apakah huruf keren ini bisa dipakai di Bio Instagram dan TikTok?',
      a: 'Sangat bisa! Semua karakter yang dihasilkan menggunakan standar Unicode internasional yang didukung penuh oleh Bio Instagram, caption TikTok, komentar, serta nama tampilan profil.',
    },
    {
      q: 'Apakah huruf keren aman dipakai untuk Nickname Game (FF, MLBB, PUBG)?',
      a: 'Ya, 100% aman. Karena teks yang dihasilkan murni berbasis simbol Unicode standar (bukan cheat atau modifikasi file), penggunaan font keren tidak melanggar aturan game apa pun.',
    },
    {
      q: 'Mengapa sebagian huruf keren kadang muncul sebagai tanda kotak (☒) atau tanda tanya?',
      a: 'Tanda kotak muncul jika sistem HP penerima (biasanya Android versi lama di bawah 8.0) belum memiliki berkas font bawaan yang mendukung karakter Unicode tertentu. Di sebagian besar smartphone modern, semua karakter tampil sempurna.',
    },
    {
      q: 'Apa perbedaan antara Huruf Keren dan Font Berkilau?',
      a: 'Huruf Keren berfokus pada variasi tipografi stylish seperti Small Caps, Bold, Cursive, dan Monospace untuk penggunaan umum. Sementara Font Berkilau lebih mengutamakan ornamen bintang dan hiasan dekoratif sparkly.',
    },
    {
      q: 'Apakah saya perlu menginstal aplikasi untuk menggunakan Huruf Keren Generator?',
      a: 'Tidak perlu. Tool ini berjalan 100% di browser HP maupun komputer tanpa perlu download aplikasi atau pendaftaran akun.',
    },
    {
      q: 'Bagaimana cara menempelkan (paste) huruf keren di WhatsApp?',
      a: 'Setelah menekan tombol "Salin" di generator kami, buka aplikasi WhatsApp, tekan dan tahan pada kolom chat atau info profil, lalu pilih menu "Tempel" atau "Paste".',
    },
    {
      q: 'Gaya huruf keren apa saja yang paling populer untuk Bio IG?',
      a: 'Gaya terpopuler untuk Bio IG adalah Small Caps (Kapital Mini), Script Cursive (Tulisan Sambung), dan Bold Sans karena memberikan kesan estetis, bersih, dan mudah dibaca.',
    },
    {
      q: 'Apakah generator Huruf Keren ini gratis digunakan?',
      a: 'Ya, generator ini 100% gratis tanpa batasan jumlah penggunaan dan dapat diakses kapan saja secara instan.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hurufKerenFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq-huruf-keren" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
            Pertanyaan Umum
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            FAQ Huruf Keren
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Jawaban lengkap atas pertanyaan yang sering diajukan mengenai penggunaan font dan tulisan keren.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {hurufKerenFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="rounded-2xl border border-slate-200/80 dark:border-purple-900/30 overflow-hidden bg-slate-50 dark:bg-slate-800/60 transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-pink-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 dark:text-pink-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-purple-600 dark:text-pink-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/40 dark:border-slate-700/40 pt-4"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
