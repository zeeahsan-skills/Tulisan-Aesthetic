'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function MemutarFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const memutarFaqs = [
    {
      q: 'Apa itu Font Memutar (Upside Down Text) Generator?',
      a: 'Font Memutar Generator adalah alat pembuat teks online gratis yang memutar balik teks latin biasa 180 derajat dan membalikkan urutan karakternya menggunakan simbol fonetik IPA dan karakter Unicode terbalik.',
    },
    {
      q: 'Bagaimana cara menyalin teks terbalik 180 derajat ke Bio Instagram?',
      a: 'Ketik teks Anda di kolom generator di atas, pilih variasi "Upside Down", lalu klik tombol "Salin Teks". Buka Instagram > Edit Profil > Bio, lalu tempelkan (paste) teks terbalik tersebut.',
    },
    {
      q: 'Apakah teks terbalik bisa digunakan di postingan dan komentar TikTok?',
      a: 'Sangat bisa! Tulisan terbalik sangat populer digunakan oleh creator TikTok untuk membuat caption video dan balasan komentar yang unik serta menarik rasa ingin tahu penonton.',
    },
    {
      q: 'Mengapa tulisan terbalik bisa dibaca walaupun posisinya jungkir balik?',
      a: 'Karena mata manusia memiliki kemampuan otomatis mengenali pola bentuk huruf IPA terbalik (turned letters) seperti ɐ (a terbalik), ǝ (e terbalik), dan ɥ (h terbalik).',
    },
    {
      q: 'Apa perbedaan antara Upside Down (ɐɥsɐu) dan Reverse Mirror (nusalihsA)?',
      a: 'Upside Down memutar bentuk fisik setiap huruf 180 derajat sekaligus membalik urutan string, sedangkan Reverse Mirror hanya membalik urutan huruf dari belakang ke depan tanpa memutar bentuk huruf.',
    },
    {
      q: 'Apakah penggunaan generator font memutar ini 100% gratis?',
      a: 'Ya, 100% gratis selamanya tanpa batasan jumlah teks dan tanpa registrasi akun.',
    },
    {
      q: 'Apakah teks memutar terbalik bisa dipakai untuk nickname game seperti Free Fire & Roblox?',
      a: 'Bisa! Karakter fonetik terbalik didukung secara resmi oleh mesin game Free Fire, PUBG Mobile, Mobile Legends, dan Roblox.',
    },
    {
      q: 'Apakah pesan terbalik aman dikirimkan di WhatsApp & Discord?',
      a: 'Sangat aman. Teks memutar memanfaatkan karakter Unicode standar yang dapat dikirimkan di obrolan pribadi maupun grup WhatsApp dan Discord.',
    },
    {
      q: 'Apakah alat ini dapat diakses langsung dari smartphone iPhone & Android?',
      a: 'Tentu saja. Situs ini sepenuhnya responsif dan dapat diakses cepat melalui browser Safari di iPhone maupun Chrome di Android.',
    },
    {
      q: 'Bagaimana cara membuat nama aesthetic terbalik dengan hiasan sayap (꧁༺ ɐɥsɐu ༻꧂)?',
      a: 'Pilih preset "Flipped Wings ꧁༺ ༻꧂" pada generator kami untuk mendapatkan kombinasi tulisan terbalik dengan border sayap malaikat estetik.',
    },
  ];

  const memutarFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: memutarFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(memutarFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Flipped FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan font Memutar (Upside Down) Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {memutarFaqs.map((item, idx) => {
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-pink-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : ''
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
