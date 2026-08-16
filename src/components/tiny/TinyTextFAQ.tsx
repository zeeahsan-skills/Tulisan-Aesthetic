'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function TinyTextFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const tinyTextFaqs = [
    {
      q: 'Apa itu Tiny Text Generator?',
      a: 'Tiny Text Generator adalah alat pengubah teks online gratis yang memetakan alfabet biasa menjadi variasi karakter Unicode berukuran mini (seperti Small Caps, Superscript mini atas, dan Subscript mini bawah) yang bisa disalin dan ditempel di media sosial.',
    },
    {
      q: 'Bagaimana cara membuat tulisan kecil untuk Bio Instagram?',
      a: 'Ketik kata Anda pada kotak generator di bagian atas halaman ini, pilih gaya Small Caps (Kapital Mini) atau Superscript, lalu klik tombol "Salin". Tempelkan teks tersebut pada bidang Bio Instagram Anda.',
    },
    {
      q: 'Apa perbedaan antara Small Caps dan Superscript?',
      a: 'Small Caps mengubah huruf menjadi bentuk kapital dengan tinggi seukuran huruf kecil (x-height), sedangkan Superscript mengubah huruf menjadi karakter mini yang melayang di bagian atas garis teks.',
    },
    {
      q: 'Apakah tulisan kecil ini bisa digunakan untuk nickname game (FF, MLBB, PUBG)?',
      a: 'Sangat bisa! Banyak pemain menggunakan huruf Superscript mini untuk menambahkan tag klan melayang di samping nickname game mereka.',
    },
    {
      q: 'Mengapa sebagian huruf kecil superscript kadang tidak tersedia di Unicode?',
      a: 'Karena konsorsium Unicode menetapkan karakter superscript dari kebutuhan fonetik dan matematika. Huruf yang jarang dipakai dalam simbol ilmiah tidak memiliki padanan resmi dan digantikan oleh huruf mini yang paling mendekati.',
    },
    {
      q: 'Apakah generator Tiny Text ini 100% gratis?',
      a: 'Ya, generator ini gratis digunakan tanpa batasan jumlah konversi teks dan tanpa pendaftaran akun.',
    },
    {
      q: 'Apakah tulisan kecil bisa dibaca di semua HP?',
      a: 'Ya. Karakter Small Caps dan Superscript didukung penuh di hampir semua smartphone Android dan iOS modern.',
    },
    {
      q: 'Apakah saya perlu menginstal aplikasi untuk mengubah teks menjadi huruf kecil?',
      a: 'Tidak perlu. Semua proses konversi teks berjalan secara instan di dalam browser web Anda.',
    },
    {
      q: 'Dapatkah saya memakai tulisan kecil pada pesan WhatsApp?',
      a: 'Bisa. Teks kecil Unicode akan tetap tampil kecil saat dikirimkan dalam percakapan chat maupun status WhatsApp.',
    },
    {
      q: 'Bagaimana cara menempelkan tulisan kecil di HP?',
      a: 'Tekan dan tahan pada kolom teks tujuan di HP Anda, lalu ketuk opsi "Tempel" atau "Paste".',
    },
    {
      q: 'Apakah tulisan kecil aman bagi akun media sosial?',
      a: 'Ya, 100% aman karena teks yang dihasilkan sepenuhnya menggunakan standar karakter Unicode internasional resmi.',
    },
    {
      q: 'Apakah tersedia pilihan huruf kecil berbingkai kotak?',
      a: 'Ya, kami menyediakan preset Squared Small Caps (🄰ʜsᴀɴ) yang menggabungkan huruf kecil kapital dengan bingkai kotak.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tinyTextFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq-tiny-text" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      
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
            FAQ Tiny Text
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Segala hal yang perlu Anda ketahui mengenai penggunaan tulisan kecil dan Small Caps.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {tinyTextFaqs.map((item, idx) => {
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
