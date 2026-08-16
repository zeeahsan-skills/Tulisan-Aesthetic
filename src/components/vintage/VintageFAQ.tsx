'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function VintageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const vintageFaqs = [
    {
      q: 'Apa itu Font Vintage & Klasik Generator?',
      a: 'Font Vintage Generator adalah konverter teks online gratis yang memetakan alfabet standar menjadi karakter Unicode klasik seperti Blackletter, Fraktur, Old English, dan Bold Serif Klasik.',
    },
    {
      q: 'Apa perbedaan antara Font Vintage dan Font Gothic?',
      a: 'Font Vintage mencakup spektrum tipografi sejarah yang lebih luas (termasuk Serif Klasik, Kaligrafi, dan Blackletter), sementara Font Gothic berfokus pada estetika Fraktur Jerman kuno dan gaya kegelapan.',
    },
    {
      q: 'Apakah font vintage bisa disalin ke Bio Instagram & WA?',
      a: 'Sangat bisa. Karakter Unicode vintage dapat disalin dan ditempel langsung ke profil Instagram, status WhatsApp, TikTok, dan Bio Twitter.',
    },
    {
      q: 'Apakah generator Font Vintage ini 100% gratis?',
      a: 'Ya, 100% gratis tanpa perlu registrasi akun atau langganan.',
    },
    {
      q: 'Bagaimana cara menggunakan font vintage untuk Nickname Game?',
      a: 'Ketik nama akun Anda, pilih gaya Fraktur Bold atau Royal Vintage, klik "Salin", lalu tempel di menu ganti nama Free Fire atau MLBB.',
    },
    {
      q: 'Apakah font vintage dapat digunakan untuk desain undangan pernikahan?',
      a: 'Bisa. Banyak pembuat undangan digital menggunakan teks vintage Unicode untuk mempercantik nama pasangan di web undangan.',
    },
    {
      q: 'Mengapa gaya Blackletter terlihat seperti tulisan koran tua?',
      a: 'Karena gaya Fraktur Blackletter digunakan secara luas di Eropa sebagai standar cetak naskah dan surat kabar abad ke-12 hingga awal abad ke-20.',
    },
    {
      q: 'Apakah font vintage mendukung karakter angka?',
      a: 'Generator kami mendukung konversi angka menjadi Mathematical Bold dan Circled Digits bergaya vintage.',
    },
    {
      q: 'Apakah aman memakai simbol vintage di media sosial?',
      a: 'Sangat aman karena karakter yang digunakan mematuhi standar internasional Konsorsium Unicode.',
    },
    {
      q: 'Bagaimana cara copy paste font vintage di HP Android/iPhone?',
      a: 'Tekan tombol "Salin" pada preset pilihan Anda, lalu di aplikasi tujuan tekan dan tahan kolom teks lalu pilih "Tempel".',
    },
    {
      q: 'Apakah ada batas panjang kata yang bisa diubah?',
      a: 'Tidak ada batas dari generator kami, namun platform tujuan memiliki batas karakter tersendiri (seperti Bio IG max 150 karakter).',
    },
    {
      q: 'Bisakah saya mengombinasikan font vintage dengan mahkota kerajaan?',
      a: 'Bisa! Generator kami menyediakan variasi Vintage Royal Crown ♔ ♔ yang siap disalin.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: vintageFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq-font-vintage" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Pertanyaan Umum
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            FAQ Font Vintage & Klasik
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Jawaban lengkap atas pertanyaan seputar penggunaan teks Vintage, Blackletter, dan Fraktur.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {vintageFaqs.map((item, idx) => {
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-600 dark:text-amber-400' : ''
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
