'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function GarisFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const garisFaqs = [
    {
      q: 'Apa itu Font Garis Generator (Strikethrough)?',
      a: 'Font Garis Generator adalah alat online gratis untuk mengonversi teks biasa menjadi karakter bertanda garis coret lurus (strikethrough), miring (slash), ganda, dan gelombang Unicode secara instan.',
    },
    {
      q: 'Bagaimana cara menyalin teks garis coret ke WhatsApp?',
      a: 'Ketik kata Anda pada kolom input di atas, pilih variasi gaya garis coret yang diinginkan, lalu klik tombol "Salin Teks". Buka WhatsApp dan tempelkan (paste) langsung ke chat atau status.',
    },
    {
      q: 'Apakah teks garis coret ini bisa digunakan di Bio Instagram & TikTok?',
      a: 'Sangat bisa! Karena mengunakan standar karakter penggabung Unicode resmi, teks garis coret yang disalin akan tampil sempurna di Bio Instagram, caption postingan, dan komentar TikTok.',
    },
    {
      q: 'Mengapa teks garis coret Unicode tidak hilang saat disalin-tempel?',
      a: 'Karena garis coret ini memanfaatkan karakter penggabung Unicode (Combining Long Stroke Overlay U+0336), bukan styling CSS visual browser. Efek garis menempel langsung pada karakter huruf.',
    },
    {
      q: 'Apakah ada perbedaan antara garis coret single (A̶) dan garis ganda (A̶̶)?',
      a: 'Garis coret single menempelkan satu stroke horizontal di tengah huruf, sedangkan garis coret ganda menumpukkan dua stroke sejajar untuk efek coret tebal yang lebih tegas.',
    },
    {
      q: 'Apakah penggunaan font garis coret ini 100% gratis?',
      a: 'Ya, 100% gratis selamanya tanpa registrasi akun dan tanpa batasan jumlah penggunaan teks.',
    },
    {
      q: 'Mengapa garis coret miring (slash /) terlihat unik di nama profil?',
      a: 'Garis miring (Combining Long Solidus Overlay) memotong huruf secara diagonal, memberikan kesan cyber aesthetic dan futuristik pada nickname sosial media.',
    },
    {
      q: 'Apakah teks strikethrough aman digunakan untuk nickname game Free Fire & Roblox?',
      a: 'Sangat aman. Karakter strikethrough didukung oleh mesin game populer seperti Free Fire, PUBG Mobile, Mobile Legends, dan Roblox.',
    },
    {
      q: 'Apakah alat ini dapat diakses langsung dari HP Android & iOS tanpa instalasi?',
      a: 'Tentu saja. Situs ini sepenuhnya responsif dan dapat diakses dari browser Chrome Android maupun Safari iPhone tanpa mengunduh aplikasi tambahan.',
    },
    {
      q: 'Bagaimana cara membuat nama aesthetic dengan garis coret dan hiasan sayap (꧁༺ A̶h̶s̶a̶n̶ ༻꧂)?',
      a: 'Pilih preset "Strike Wings ꧁༺ ༻꧂" pada generator kami untuk mendapatkan teks coret bertema malaikat estetik dalam satu klik.',
    },
  ];

  const garisFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: garisFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(garisFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Strikethrough FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan font Garis Coret Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {garisFaqs.map((item, idx) => {
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-pink-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : ''
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
