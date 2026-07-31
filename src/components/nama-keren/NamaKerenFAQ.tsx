'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function NamaKerenFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const namaKerenFaqs = [
    {
      q: 'Apa itu Generator Nama Keren (Stylish Name Generator)?',
      a: 'Generator Nama Keren adalah alat pembuat nama online gratis yang mengonversi kata atau nama biasa menjadi puluhan kombinasi nama aesthetic, nickname game, dan tulisan gaya Unicode secara instan.',
    },
    {
      q: 'Bagaimana cara menyalin nama keren ke Free Fire & Mobile Legends?',
      a: 'Ketik nama akun Anda di kolom generator di atas, pilih variasi nama bertema sayap (꧁༺ ༻꧂) atau mahkota (👑), lalu klik tombol "Salin Nama". Tempelkan langsung di kolom Ubah Nama pada game Free Fire atau MLBB.',
    },
    {
      q: 'Apakah nama buatan generator ini bisa dipakai di Bio Instagram & TikTok Username?',
      a: 'Sangat bisa! Kombinasi huruf Small Caps dan simbol bintang sangat disukai untuk membuat tampilan profil Instagram dan TikTok lebih profesional.',
    },
    {
      q: 'Mengapa simbol dan font aesthetic pada nama tidak berubah menjadi kotak-kotak?',
      a: 'Karena generator kami memanfaatkan standar karakter internasional resmi dari Konsorsium Unicode yang tersimpan di memori bawaan semua perangkat HP dan komputer.',
    },
    {
      q: 'Apakah penggunaan generator nama keren ini 100% gratis?',
      a: 'Ya, 100% gratis selamanya tanpa batasan jumlah pembuatan nama dan tanpa registrasi akun.',
    },
    {
      q: 'Bisakah nama keren dipakai untuk nama tampilan Discord & Role Server?',
      a: 'Sangat cocok. Nama keren memberikan identitas khusus bagi anggota guild Discord dan ketua server komunitas.',
    },
    {
      q: 'Bagaimana cara menambahkan hiasan sayap malaikat pada nama (꧁༺ 𝕬𝖍𝖘𝖆𝖓 ༻꧂)?',
      a: 'Pilih preset "Gothic Wings ꧁༺ ༻꧂" pada generator kami untuk mendapatkan teks bergaya Gothic yang dibingkai sayap indah dalam satu klik.',
    },
    {
      q: 'Apakah nama keren aman digunakan dan tidak menyebabkan akun game dibanned?',
      a: 'Sangat aman. Nama ini terbuat dari teks murni Unicode yang didukung resmi oleh sistem pengembang game Free Fire, Mobile Legends, dan PUBG.',
    },
    {
      q: 'Apakah alat generator ini dapat diakses langsung dari HP Android & iPhone tanpa aplikasi?',
      a: 'Tentu saja. Situs ini responsif dan dapat diakses cepat dari browser Safari di iPhone maupun Chrome di Android.',
    },
    {
      q: 'Berapa banyak kombinasi gaya nama yang bisa saya buat di generator ini?',
      a: 'Sistem generator kami menyediakan puluhan gaya kombinasi font yang selalu diperbarui secara real-time.',
    },
  ];

  const namaKerenFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: namaKerenFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(namaKerenFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            Stylish Name FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan Generator Nama Keren Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {namaKerenFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="rounded-2xl border border-slate-200/80 dark:border-purple-900/30 overflow-hidden bg-white dark:bg-slate-900 transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-pink-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-violet-600 dark:text-violet-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-violet-600 dark:text-violet-400' : ''
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
                      className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/40 dark:border-slate-800/40 pt-4"
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
