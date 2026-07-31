'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function KotakFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const kotakFaqs = [
    {
      q: 'Apa itu Font Kotak (Square / Boxed Text Generator)?',
      a: 'Font Kotak Generator adalah alat pembuat font persegi online gratis yang mengubah teks biasa menjadi karakter bertema bingkai kotak transparan dan kotak hitam solid (Enclosed Alphanumeric) secara instan.',
    },
    {
      q: 'Bagaimana cara menyalin teks kotak ke game Free Fire & Mobile Legends?',
      a: 'Ketik nama akun game Anda di kolom generator di atas, pilih variasi "Square Outline" atau "Dark Box", lalu klik tombol "Salin Teks". Masuk ke dalam game Free Fire atau Mobile Legends, lalu tempelkan (paste) di kolom Ubah Nama.',
    },
    {
      q: 'Apakah teks kotak (Square Font) bisa digunakan di profil Discord & Role Server?',
      a: 'Sangat bisa! Huruf kotak persegi sangat populer di kalangan gamer Discord untuk membedakan tingkatan role server dan menghiasi nama tampilan profil.',
    },
    {
      q: 'Mengapa simbol kotak Unicode tidak berubah menjadi tanda tanya saat disalin?',
      a: 'Karena generator kami memanfaatkan standar resmi karakter Enclosed Alphanumeric Unicode yang tersimpan di memori bawaan semua HP Android, iPhone, Windows PC, dan Mac.',
    },
    {
      q: 'Apa perbedaan antara Square Outline (🄐) dan Dark Box (🅰)?',
      a: 'Square Outline memiliki bingkai garis persegi tipis transparan di sekeliling huruf, sedangkan Dark Box mengisi latar belakang bingkai dengan warna hitam solid.',
    },
    {
      q: 'Apakah penggunaan font kotak ini 100% gratis?',
      a: 'Ya, 100% gratis selamanya tanpa batasan jumlah teks dan tanpa registrasi akun.',
    },
    {
      q: 'Bisakah teks kotak dipakai di bio Instagram & caption TikTok?',
      a: 'Bisa! Teks kotak memberikan tampilan futuristik dan rapi di Bio Instagram, caption postingan TikTok, dan komentar sosial media.',
    },
    {
      q: 'Apakah teks kotak aman dipakai untuk nama halaman bisnis Facebook?',
      a: 'Aman. Teks kotak membuat nama brand Halaman Facebook jualan Anda terlihat menonjol dan lebih mudah ditemukan.',
    },
    {
      q: 'Apakah alat generator font kotak ini dapat diakses langsung dari HP Android & iPhone?',
      a: 'Tentu saja. Situs ini responsif dan dapat diakses cepat melalui browser Safari iPhone maupun Chrome Android.',
    },
    {
      q: 'Bagaimana cara membuat nama clan gamer dengan mahkota kotak (👑 🄰🄷🅂🄰🄽 👑)?',
      a: 'Pilih preset "Square Royal Crown 👑" pada generator kami untuk mendapatkan teks kotak bertema mahkota dalam satu klik.',
    },
  ];

  const kotakFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: kotakFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kotakFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Square FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan font Kotak & Boxed Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {kotakFaqs.map((item, idx) => {
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyan-500 dark:text-cyan-400' : ''
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
