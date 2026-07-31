'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function BubbleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const bubbleFaqs = [
    {
      q: 'Apa itu Bubble Font Generator?',
      a: 'Bubble Font Generator adalah alat pembuat font online gratis yang mengubah teks alfabet biasa menjadi karakter font lingkaran melingkar dan gelembung Unicode (Enclosed Alphanumerics) secara instan.',
    },
    {
      q: 'Bagaimana cara menyalin teks gelembung ke Bio Instagram?',
      a: 'Ketik teks Anda pada kolom input generator di atas, pilih variasi gaya Bubble yang Anda inginkan (seperti Circle Outline atau Filled Circle), lalu klik tombol "Salin Teks". Buka Instagram > Edit Profil > Bio, lalu tempelkan (Paste).',
    },
    {
      q: 'Apakah font Bubble ini bisa digunakan di postingan & caption TikTok?',
      a: 'Sangat bisa! Huruf gelembung sangat populer digunakan oleh creator TikTok untuk membuat caption video dan komentar terlihat imut, unik, dan menarik perhatian penonton.',
    },
    {
      q: 'Apakah teks lingkaran hitam (Filled Circle) mendukung huruf kapital & angka?',
      a: 'Ya, karakter Filled Circle (🅐, 🅑, 🅒) mendukung penuh alfabet huruf kapital serta angka lingkaran hitam (❶, ❷, ❸).',
    },
    {
      q: 'Mengapa font gelembung kadang berubah menjadi kotak-kotak (☒)?',
      a: 'Karakter kotak atau tanda tanya muncul jika smartphone penerima pesan menggunakan sistem operasi Android versi lama yang belum mendukung pustaka Unicode terbaru.',
    },
    {
      q: 'Apa perbedaan antara Circle Outline (ⓐ) dan Dark Circle (🅐)?',
      a: 'Circle Outline memiliki garis lingkaran tipis berlatar transparan yang cocok untuk kesan minimalis, sedangkan Dark Circle memiliki latar lingkaran hitam pekat dengan huruf putih di dalamnya.',
    },
    {
      q: 'Apakah penggunaan font Bubble di WhatsApp aman dan gratis?',
      a: 'Sangat aman dan 100% gratis selamanya. Teks gelembung memanfaatkan karakter Unicode standar yang dapat dikirimkan di obrolan pribadi maupun grup WhatsApp tanpa biaya.',
    },
    {
      q: 'Apakah font gelembung bisa dipakai untuk nickname game seperti Roblox & MLBB?',
      a: 'Bisa! Karakter lingkaran Unicode didukung secara resmi oleh mesin game Roblox, Free Fire, PUBG Mobile, dan Mobile Legends.',
    },
    {
      q: 'Apakah alat ini dapat diakses langsung dari HP Android & iOS?',
      a: 'Tentu saja. Situs ini dirancang secara mobile-first yang sangat responsif, cepat, dan nyaman diakses langsung dari browser Safari iPhone maupun Chrome Android.',
    },
    {
      q: 'Bagaimana cara membuat nama aesthetic dengan gelembung & simbol hati (♡ ⓐⓑⓒ ♡)?',
      a: 'Pilih preset "Bubble Hearts ♡ ♡" pada generator kami, atau padukan font lingkaran dengan simbol hati dari katalog simbol kami.',
    },
  ];

  const bubbleFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: bubbleFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bubbleFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
            Bubble FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan font Bubble & Lingkaran Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {bubbleFaqs.map((item, idx) => {
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-pink-500 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-pink-500' : ''
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
