'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FontTebalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const fontTebalFaqs = [
    {
      q: 'Apa itu Font Tebal Generator?',
      a: 'Font Tebal Generator adalah alat pengubah teks online gratis yang memetakan alfabet biasa menjadi variasi karakter Unicode bergaris tebal (Bold Sans, Bold Serif, Bold Italic, Fraktur Bold, Monospace Bold) yang bisa disalin dan ditempel di berbagai media sosial dan game.',
    },
    {
      q: 'Bagaimana cara membuat tulisan tebal tanpa aplikasi?',
      a: 'Ketik kata atau kalimat Anda pada kotak generator di bagian atas halaman ini, pilih gaya font tebal yang Anda sukai, lalu klik tombol "Salin". Teks tebal siap ditempelkan di Bio IG, chat WA, TikTok, FB, atau game.',
    },
    {
      q: 'Mengapa teks yang ditebalkan di Word/WA sering hilang ketebalannya saat ditempel di Bio Instagram?',
      a: 'Karena penebalan di Word atau WhatsApp menggunakan formatting CSS/markup khusus bawaan aplikasi. Bio Instagram tidak mendukung penataan gaya CSS tersebut. Dengan menggunakan Font Tebal Unicode dari generator kami, bentuk tebal teks melekat secara permanen sebagai karakter data mentah.',
    },
    {
      q: 'Apakah Font Tebal ini bisa dipakai untuk Bio Instagram & Caption TikTok?',
      a: 'Sangat bisa! Semua karakter Bold Sans dan Bold Serif didukung secara universal di Bio Instagram, caption TikTok, komentar, dan nama profil.',
    },
    {
      q: 'Apakah tulisan tebal ini mendukung WhatsApp dan Facebook?',
      a: 'Ya. Anda dapat menempelkan font tebal Unicode ini di Info Profil (About) WhatsApp, status WA, postingan Facebook, dan komentar FB tanpa perlu mengetik simbol asteris (*).',
    },
    {
      q: 'Apakah Font Tebal aman dipakai untuk Nickname Game (FF, MLBB, PUBG)?',
      a: 'Ya, 100% aman. Karakter tebal kami dipetakan dari standar Unicode internasional yang aman dan dikenali oleh engine game online.',
    },
    {
      q: 'Apa perbedaan antara Bold Sans dan Bold Serif?',
      a: 'Bold Sans (𝗛𝘂𝗿𝘂𝗳 𝗧𝗲𝗯𝗮𝗹) memiliki ketebalan garis modern tanpa kait di ujung huruf, sedangkan Bold Serif (𝐇𝐮𝐫𝐮𝐟 𝐓𝐞𝐛𝐚𝐥) memiliki ketebalan klasik berornamen kait di setiap ujung karakter.',
    },
    {
      q: 'Mengapa sebagian font tebal kadang tampil sebagai tanda kotak-kotak (☒)?',
      a: 'Tanda kotak hanya muncul pada smartphone versi sangat lama (Android di bawah 8.0) yang belum memiliki berkas font font bawaan Unicode terbaru. Di hampir seluruh perangkat keluaran terbaru, font tebal tampil sempurna.',
    },
    {
      q: 'Apakah saya perlu mendaftar atau membayar untuk menggunakan generator ini?',
      a: 'Tidak. Generator ini 100% gratis tanpa pendaftaran akun dan tanpa batasan jumlah konversi teks.',
    },
    {
      q: 'Apakah tulisan tebal ini dapat digunakan di Discord?',
      a: 'Ya. Anda bisa memakainya untuk nama role server Discord, nama channel obrolan, serta display name pengguna.',
    },
    {
      q: 'Bagaimana cara menempelkan font tebal di HP Android / iPhone?',
      a: 'Tekan dan tahan pada kolom masukan teks di aplikasi tujuan (misalnya Bio IG), lalu pilih menu "Tempel" atau "Paste".',
    },
    {
      q: 'Apakah generator ini menyediakan font tebal sambung / cursive bold?',
      a: 'Ya, kami menyediakan opsi Bold Script (𝓗𝓾𝓻𝓾𝓯 𝓣𝓮𝓫𝓪𝓵) yang memadukan keindahan tulisan tangan sambung dengan ketebalan bold.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: fontTebalFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq-font-tebal" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      
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
            FAQ Font Tebal
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Segala jawaban atas pertanyaan seputar tulisan tebal dan penempelan teks bold Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {fontTebalFaqs.map((item, idx) => {
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
