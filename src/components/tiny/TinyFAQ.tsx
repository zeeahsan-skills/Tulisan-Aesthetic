'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function TinyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const tinyFaqs = [
    {
      q: 'Apa itu Font Kecil (Tiny Font) Generator?',
      a: 'Font Kecil Generator adalah alat pembuat font online gratis yang mengonversi teks latin standar menjadi karakter huruf mini Unicode terangkat (superscript), gantung (subscript), dan kapital mini (Small Caps) secara otomatis.',
    },
    {
      q: 'Bagaimana cara mengonversi teks biasa menjadi huruf kecil terangkat (superscript)?',
      a: 'Ketik teks Anda pada kolom input generator di atas, pilih variasi gaya "Superscript (Tiny Raised)", lalu klik tombol "Salin Teks". Teks kecil siap ditempelkan di mana saja.',
    },
    {
      q: 'Apakah font kecil (Small Caps / Superscript) bisa dipakai di Bio Instagram?',
      a: 'Tentu saja! Huruf kecil Unicode sangat populer digunakan untuk merapikan Bio Instagram, caption postingan, dan judul Story Highlight agar terlihat estetis dan profesional.',
    },
    {
      q: 'Apakah nama profil TikTok dan komentar mendukung huruf kecil Unicode?',
      a: 'Ya, TikTok mendukung penuh karakter superscript dan Small Caps baik untuk nama tampilan profil, nama pengguna, maupun balasan komentar video.',
    },
    {
      q: 'Apakah font kecil aman untuk nickname game Free Fire, PUBG Mobile & Roblox?',
      a: 'Sangat aman! Semua karakter yang dihasilkan menggunakan standar karakter Unicode internasional resmi yang didukung secara langsung oleh game Free Fire, PUBG Mobile, MLBB, dan Roblox.',
    },
    {
      q: 'Mengapa huruf kecil Unicode kadang tidak memiliki versi superscript untuk beberapa huruf tertentu?',
      a: 'Dalam standar Unicode asli, karakter superscript awalnya dirancang untuk notasi matematika dan fonetik, sehingga beberapa abjad khusus direpresentasikan dengan simbol fonetik serupa.',
    },
    {
      q: 'Apa perbedaan antara font superscript (ᵃʰˢᵃⁿ) dan Small Caps (ᴀʜsᴀɴ)?',
      a: 'Font superscript mengganti karakter huruf kecil biasa menjadi bentuk mini terangkat di bagian atas baris, sedangkan Small Caps menggunakan bentuk kapital berskala mini dengan ukuran seragam.',
    },
    {
      q: 'Apakah generator font kecil ini 100% gratis tanpa pendaftaran?',
      a: 'Ya, generator ini 100% gratis tanpa perlu registrasi akun, tanpa batasan jumlah teks, dan dapat diakses dari smartphone iOS maupun Android.',
    },
    {
      q: 'Apakah teks kecil yang disalin dari generator ini bisa dipakai di obrolan WhatsApp?',
      a: 'Bisa! Teks kecil superscript dan Small Caps dapat dikirimkan di status WhatsApp, obrolan pribadi, dan pesan grup tanpa merusak format.',
    },
    {
      q: 'Bagaimana cara membuat nama aesthetic dengan huruf kecil dan hiasan sayap (꧁༺ ᵃʰˢᵃⁿ ༻꧂)?',
      a: 'Pilih preset "Tiny Wings ꧁༺ ༻꧂" atau "Small Caps Wings" pada generator kami untuk mendapatkan kombinasi huruf kecil dengan border sayap malaikat estetik.',
    },
  ];

  const tinyFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tinyFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tinyFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Tiny FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan font Kecil (Tiny Font) Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {tinyFaqs.map((item, idx) => {
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
