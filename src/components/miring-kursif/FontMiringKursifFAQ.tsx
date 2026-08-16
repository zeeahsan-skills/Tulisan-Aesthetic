'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FontMiringKursifFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const miringKursifFaqs = [
    {
      q: 'Apa itu Font Miring & Kursif Generator?',
      a: 'Font Miring & Kursif Generator adalah alat pembuat teks online gratis yang memetakan huruf standar menjadi karakter Unicode miring (Italic) dan tulisan tangan sambung (Cursive Script) yang siap disalin dan ditempel di media sosial.',
    },
    {
      q: 'Bagaimana cara membuat tulisan miring tanpa kode HTML?',
      a: 'Cukup ketik teks Anda pada kolom input generator di atas, pilih variasi Italic atau Script Cursive yang Anda suka, lalu klik tombol "Salin". Teks miring siap ditempelkan di mana saja.',
    },
    {
      q: 'Apakah font kursif tulisan sambung bisa dipakai di Bio Instagram?',
      a: 'Sangat bisa! Semua gaya Script Cursive Unicode didukung secara universal oleh Bio Instagram, caption, komentar, dan highlight stories.',
    },
    {
      q: 'Apa perbedaan antara Font Miring dan Font Kursif?',
      a: 'Font Miring (Italic) memiringkan bentuk cetak standar ke arah kanan, sedangkan Font Kursif (Cursive / Script) mengubah bentuk huruf menjadi kaligrafi tulisan tangan yang saling terhubung.',
    },
    {
      q: 'Apakah tulisan miring ini hilang saat ditempel di WhatsApp?',
      a: 'Tidak. Berbeda dari format _miring_ bawaan WA yang memerlukan tanda garis bawah, karakter Unicode miring hasil generator kami berbentuk murni yang akan tetap miring di aplikasi mana pun.',
    },
    {
      q: 'Apakah generator Font Miring ini gratis digunakan?',
      a: 'Ya, 100% gratis tanpa pendaftaran akun dan tanpa batasan jumlah konversi teks.',
    },
    {
      q: 'Apakah Font Kursif didukung di TikTok?',
      a: 'Ya. Anda dapat menggunakannya untuk username TikTok, nama tampilan profil, dan caption video agar konten lebih estetis.',
    },
    {
      q: 'Mengapa sebagian tulisan kursif tampil sebagai tanda kotak (☒)?',
      a: 'Tanda kotak hanya muncul pada smartphone versi sangat lama (Android di bawah 8.0) yang belum memiliki dukungan pustaka font Unicode terbaru. Di HP modern, tulisan kursif tampil sempurna.',
    },
    {
      q: 'Apakah tersedia variasi tulisan miring tebal (Bold Italic)?',
      a: 'Ya, kami menyediakan opsi Bold Sans Italic (𝑯𝒖𝒓𝒖𝒇 𝑴𝒊𝒓𝒊𝒏𝒈 𝑻𝒆𝒃𝒂𝒍) dan Bold Script (𝓗𝓾𝓻𝓾𝓯 𝓚𝓾𝓻𝓼𝓲𝓯) untuk penekanan teks yang lebih kuat.',
    },
    {
      q: 'Dapatkah saya memakai font miring untuk nama akun game online?',
      a: 'Tentu saja. Banyak gamer menggunakan Font Miring dan Bold Script untuk membuat nickname Free Fire, MLBB, dan PUBG terlihat lebih berkelas.',
    },
    {
      q: 'Bagaimana cara menempelkan tulisan miring di HP?',
      a: 'Tekan dan tahan pada kolom input teks aplikasi tujuan, lalu pilih menu "Tempel" atau "Paste".',
    },
    {
      q: 'Apakah penggunaan Unicode miring aman bagi akun media sosial?',
      a: 'Ya, 100% aman karena teks yang dihasilkan sepenuhnya mematuhi standar internasional konsorsium Unicode.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: miringKursifFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq-miring-kursif" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      
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
            FAQ Font Miring &amp; Kursif
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Jawaban lengkap atas pertanyaan mengenai penggunaan tulisan miring dan kursif Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {miringKursifFaqs.map((item, idx) => {
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
