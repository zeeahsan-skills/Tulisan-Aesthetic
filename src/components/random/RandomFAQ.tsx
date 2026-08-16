'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function RandomFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const randomFaqs = [
    {
      q: 'Apa itu Font Random & Acak Generator?',
      a: 'Font Random Generator adalah fitur pengubah teks online yang memadukan 50+ gaya font Unicode (Small Caps, Script, Bubble, Gothic, Tebal) dan perhiasan simbol secara acak untuk menciptakan hasil yang unik.',
    },
    {
      q: 'Bagaimana cara menggunakan fitur "Acak Teks"?',
      a: 'Tekan tombol "Acak Teks" pada generator di atas untuk mengganti frasa sampel acak, atau filter kategori font berdasarkan inspirasi Anda.',
    },
    {
      q: 'Apakah teks font acak ini bisa disalin ke Free Fire & MLBB?',
      a: 'Sangat bisa. Hasil konversi generator berbasis standar Unicode universal yang didukung oleh game online populer seperti FF, Mobile Legends, dan PUBG.',
    },
    {
      q: 'Apakah generator Font Random ini 100% gratis?',
      a: 'Ya, 100% gratis tanpa perlu registrasi akun atau langganan.',
    },
    {
      q: 'Apakah bisa menyalin semua kombinasi acak sekaligus?',
      a: 'Bisa! Tekan tombol "Salin Semua" pada generator untuk menyalin seluruh 50 variasi teks acak ke clipboard Anda.',
    },
    {
      q: 'Apakah font acak aman dipakai di Bio Instagram & TikTok?',
      a: 'Sangat aman karena semua karakter yang dihasilkan mematuhi standar konsorsium Unicode.',
    },
    {
      q: 'Mengapa sebagian simbol acak terlihat kotak di HP lama?',
      a: 'Sistem operasi seluler yang sangat lama mungkin belum mendukung titik kode Unicode terbaru. Sebagian besar smartphone modern Android dan iPhone mendukungnya dengan sempurna.',
    },
    {
      q: 'Apakah ada batas penggunaan per hari?',
      a: 'Tidak ada batas. Anda dapat mengacak dan menyalin teks sebanyak yang Anda inginkan.',
    },
    {
      q: 'Bagaimana cara menyimpan gaya acak terfavorit?',
      a: 'Klik ikon Bintang pada kartu gaya font pilihan Anda untuk menyimpannya ke tab "Favorites".',
    },
    {
      q: 'Bagaimana cara copy paste font random di HP?',
      a: 'Tekan tombol "Salin" pada kartu font, lalu di aplikasi tujuan tekan dan tahan kolom teks dan pilih "Tempel".',
    },
    {
      q: 'Bisakah menyalin teks acak untuk status WhatsApp?',
      a: 'Tentu saja! Status WhatsApp mendukung berbagai simbol dan gaya font Unicode acak.',
    },
    {
      q: 'Apakah generator ini membutuhkan download aplikasi?',
      a: 'Tidak perlu. Aplikasi ini berbasis web Next.js 15 yang dapat diakses langsung dari browser HP Anda.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: randomFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq-font-random" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Pertanyaan Umum
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            FAQ Font Random & Acak
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Jawaban lengkap atas pertanyaan seputar pengacakan gaya font dan simbol Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {randomFaqs.map((item, idx) => {
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
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
