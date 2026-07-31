'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function MenakutkanFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const menakutkanFaqs = [
    {
      q: 'Apa itu Font Menakutkan / Zalgo Text Generator?',
      a: 'Font Menakutkan Generator adalah alat pembuat font seram online gratis yang mengubah teks biasa menjadi karakter Zalgo, Glitch, Gothic Horror, dan Creepy Blackletter bertema horor secara instan.',
    },
    {
      q: 'Bagaimana cara menyalin teks glitch seram ke nickname game Free Fire & Mobile Legends?',
      a: 'Ketik nama akun Anda di kolom generator di atas, pilih variasi "Glitch Text" atau "Zalgo Heavy", lalu klik tombol "Salin Teks". Masuk ke dalam game Free Fire atau Mobile Legends, lalu tempelkan (paste) ke kolom Ubah Nama.',
    },
    {
      q: 'Apakah teks Zalgo seram bisa digunakan di profil Discord & About Me?',
      a: 'Sangat bisa! Efek glitch Zalgo sangat populer di kalangan gamer Discord untuk menghiasi About Me, nama channel server, dan role guild.',
    },
    {
      q: 'Mengapa teks Zalgo memiliki garis bercabang di atas dan bawah huruf?',
      a: 'Karena teks Zalgo memanfaatkan fitur "Combining Diacritical Marks" Unicode yang menumpukkan karakter aksen khusus di atas, tengah, dan bawah huruf dasar.',
    },
    {
      q: 'Apakah teks glitch Zalgo aman dikirimkan di WhatsApp & TikTok?',
      a: 'Sangat aman. Teks glitch dibuat menggunakan standar Unicode resmi sehingga dapat dikirim di obrolan WhatsApp dan caption postingan TikTok tanpa kendala.',
    },
    {
      q: 'Apakah penggunaan font menakutkan ini 100% gratis?',
      a: 'Ya, 100% gratis selamanya tanpa batasan jumlah teks dan tanpa registrasi akun.',
    },
    {
      q: 'Apakah teks glitch dapat dibaca dengan jelas oleh pemain game lain?',
      a: 'Ya! Intensitas penumpukan Zalgo pada generator kami telah diatur secara optimal agar memberikan efek seram tanpa menghilangkan keterbacaan nama Anda.',
    },
    {
      q: 'Bagaimana cara membuat nama clan horor dengan hiasan tengkorak (💀 H̴̐͝e̸̽̽l̶̈́̽l̴̛̚o̸̎̍ 💀)?',
      a: 'Pilih preset "Demon Skull 💀" pada generator kami untuk mendapatkan teks glitch bertema tengkorak seram dalam satu klik.',
    },
    {
      q: 'Apakah alat generator Zalgo ini dapat diakses langsung dari HP Android & iPhone?',
      a: 'Tentu saja. Situs ini responsif dan dapat diakses cepat dari browser Chrome Android maupun Safari di iPhone tanpa aplikasi tambahan.',
    },
    {
      q: 'Mengapa font Gothic Horror (𝕲𝖍𝖔𝖘𝖙) sangat populer untuk cerita fantasi?',
      a: 'Karena gaya huruf gothic abad pertengahan memberikan atmosfer klasik yang magis, misterius, dan penuh kesan mistis pada judul cerita horor dan roleplay RPG.',
    },
  ];

  const menakutkanFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: menakutkanFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menakutkanFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Scary FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan font Menakutkan & Zalgo Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {menakutkanFaqs.map((item, idx) => {
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-rose-600 dark:hover:text-pink-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-rose-600 dark:text-rose-400' : ''
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
