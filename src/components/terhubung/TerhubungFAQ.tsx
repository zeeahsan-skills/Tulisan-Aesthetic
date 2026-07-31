'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function TerhubungFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const terhubungFaqs = [
    {
      q: 'Apa itu Font Terhubung (Connected Script) Generator?',
      a: 'Font Terhubung Generator adalah alat pembuat teks online gratis yang mengonversi alfabet biasa menjadi tulisan tangan latin sambung, kaligrafi halus, dan gaya signature Unicode secara instan.',
    },
    {
      q: 'Bagaimana cara menyalin tulisan tangan sambung ke Bio Instagram?',
      a: 'Ketik nama atau kalimat Anda di kolom input di atas, pilih variasi "Script Regular" atau "Signature Style", lalu klik tombol "Salin Teks". Buka aplikasi Instagram > Edit Profil > Bio, lalu tempelkan (paste).',
    },
    {
      q: 'Apakah tulisan sambung bisa digunakan di kartu undangan pernikahan digital?',
      a: 'Sangat bisa! Gaya tulisan sambung halus sangat anggun untuk memformat nama pasangan pengantin dan pesan undangan di situs web maupun pesan chat.',
    },
    {
      q: 'Mengapa teks tulisan sambung Unicode tidak berubah fontnya saat disalin?',
      a: 'Karena teks ini memanfaatkan simbol karakter murni Mathematical Script Unicode yang tersimpan resmi di standar sistem operasi Android, iOS, dan Windows.',
    },
    {
      q: 'Apa perbedaan antara Script Regular dan Connected Bold Script?',
      a: 'Script Regular memiliki ketebalan garis tulisan tangan tipis yang halus, sedangkan Connected Bold Script memiliki bobot tebal yang lebih tegas dan mencolok.',
    },
    {
      q: 'Apakah penggunaan font terhubung ini 100% gratis?',
      a: 'Ya, 100% gratis selamanya tanpa batasan jumlah teks dan tanpa registrasi akun.',
    },
    {
      q: 'Apakah tulisan tangan sambung ini aman untuk caption TikTok & Status WhatsApp?',
      a: 'Sangat aman. Tulisan sambung terbaca lancar di caption TikTok, deskripsi video, dan pembaruan Status WA.',
    },
    {
      q: 'Bisakah teks terhubung dipakai untuk tanda tangan nama profil Discord?',
      a: 'Bisa! Sangat cocok untuk memberikan kesan eksklusif dan estetik pada About Me dan nama tampilan Discord Anda.',
    },
    {
      q: 'Apakah alat generator tulisan sambung ini dapat diakses dari HP Android & iPhone?',
      a: 'Tentu saja. Situs ini responsif dan dapat diakses cepat melalui browser Safari iPhone maupun Chrome Android.',
    },
    {
      q: 'Bagaimana cara membuat nama profil tulisan sambung dengan mahkota kerajaan (👑 𝓐𝒽𝓈𝒶𝓃 👑)?',
      a: 'Pilih preset "Connected Royal Crown 👑" pada generator kami untuk mendapatkan kombinasi tulisan sambung tebal bertema mahkota dalam satu klik.',
    },
  ];

  const terhubungFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: terhubungFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(terhubungFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-bold uppercase tracking-wider text-fuchsia-600 dark:text-fuchsia-400">
            Connected FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan font Terhubung & Tulisan Sambung Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {terhubungFaqs.map((item, idx) => {
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-fuchsia-600 dark:hover:text-pink-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-fuchsia-600 dark:text-fuchsia-400' : ''
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
