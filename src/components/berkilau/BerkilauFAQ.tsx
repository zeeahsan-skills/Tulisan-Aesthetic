'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function BerkilauFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const berkilauFaqs = [
    {
      q: 'Apa itu Font Berkilau / Sparkly Generator?',
      a: 'Font Berkilau Generator adalah alat pengubah teks online gratis yang memetakan alfabet biasa menjadi kombinasi font Unicode estetik dihiasi ornamen bintang ✨, gliter, dan simbol kilauan.',
    },
    {
      q: 'Bagaimana cara menambahkan efek bintang pada tulisan?',
      a: 'Ketik kata Anda pada kotak generator di bagian atas halaman ini, pilih variasi teks berkilau bintang yang Anda sukai, lalu klik tombol "Salin" untuk menempelkannya di aplikasi tujuan.',
    },
    {
      q: 'Apakah semua platform mendukung teks berkilau?',
      a: 'Kompatibilitas bervariasi tergantung platform dan bidang input yang digunakan. Sebagian besar media sosial modern (Instagram, TikTok, WA) mendukung simbol Unicode berkilau dengan sempurna.',
    },
    {
      q: 'Apakah tulisan berkilau bisa dipakai untuk nickname game?',
      a: 'Banyak game mendukung ornamen bintang Unicode, namun tingkat kompatibilitas tergantung pada kebijakan penyaringan nama (name filtering rules) di masing-masing game.',
    },
    {
      q: 'Apa perbedaan antara simbol bintang Unicode dan emoji bintang?',
      a: 'Simbol Unicode (seperti ✧ atau ✦) berbentuk monokrom yang mengikuti warna font, sedangkan Emoji (seperti ✨) dirender berwarna penuh oleh sistem operasi HP Anda.',
    },
    {
      q: 'Apakah generator Font Berkilau ini 100% gratis?',
      a: 'Ya, 100% gratis digunakan tanpa perlu mendaftar akun atau mengunduh aplikasi.',
    },
    {
      q: 'Apakah tulisan berkilau bisa disalin ke Bio Instagram?',
      a: 'Sangat bisa. Bio Instagram mendukung berbagai ornamen bintang Unicode untuk mempercantik profil Anda.',
    },
    {
      q: 'Mengapa sebagian emoji berkilau terlihat berbeda di Android dan iPhone?',
      a: 'Setiap sistem operasi memiliki paket desain emoji (emoji font) tersendiri. Namun makna dan titik kode Unicode dari simbol berkilau tersebut tetap sama.',
    },
    {
      q: 'Apakah aman memakai simbol berkilau di media sosial?',
      a: 'Sangat aman karena karakter yang dihasilkan mematuhi standar internasional konsorsium Unicode.',
    },
    {
      q: 'Bagaimana cara copy paste tulisan berkilau di HP?',
      a: 'Tekan dan tahan pada kolom teks tujuan di HP Anda, lalu pilih menu "Tempel" atau "Paste".',
    },
    {
      q: 'Apakah ada batasan panjang teks yang bisa diubah?',
      a: 'Tidak ada batasan dari generator kami, namun platform tujuan (seperti Bio IG yang membatasi 150 karakter) memiliki kuota karakter tersendiri.',
    },
    {
      q: 'Bisakah saya mengombinasikan font miring dengan bintang berkilau?',
      a: 'Tentu saja! Generator kami secara otomatis menyediakan pilihan Cursive Script yang dipadukan dengan bintang kilauan.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: berkilauFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq-font-berkilau" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      
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
            FAQ Font Berkilau
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Jawaban lengkap atas pertanyaan seputar penggunaan teks dan simbol berkilau.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {berkilauFaqs.map((item, idx) => {
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
