'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function BerkilauFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const berkilauFaqs = [
    {
      q: 'Apa itu Font Berkilau (Sparkly Text Generator)?',
      a: 'Font Berkilau Generator adalah alat pembuat teks online gratis yang mengombinasikan teks biasa dengan simbol kilau bintang (✨), kristal (✧), dan hiasan aesthetic Unicode secara instan.',
    },
    {
      q: 'Bagaimana cara menyalin teks berkilau bintang ke Bio Instagram?',
      a: 'Ketik nama atau kalimat di kolom generator di atas, pilih gaya "Sparkle Sparkle" atau "Luxury Style", lalu klik tombol "Salin Teks". Buka aplikasi Instagram > Edit Profil > Bio, lalu tempelkan (paste).',
    },
    {
      q: 'Apakah teks berkilau bisa digunakan di username TikTok dan WhatsApp Status?',
      a: 'Sangat bisa! Simbol berkilau didukung secara resmi di nama profil TikTok, bio TikTok, pesan chat WhatsApp, dan pembaruan Status WA.',
    },
    {
      q: 'Mengapa simbol bintang berkilau Unicode tidak berubah menjadi serba kotak?',
      a: 'Karena generator kami hanya menggunakan simbol Unicode standar resmi yang tersimpan di memori bawaan semua sistem operasi Android, iOS, Windows, dan macOS.',
    },
    {
      q: 'Apa perbedaan antara simbol dekoratif Unicode dan emoji gambar?',
      a: 'Simbol dekoratif Unicode diproses sebagai teks murni yang diterima 100% di kolom nama game dan sosmed tanpa diblokir, sedangkan emoji gambar kadang dilarang di sistem nama akun.',
    },
    {
      q: 'Apakah penggunaan font berkilau ini 100% gratis?',
      a: 'Ya, 100% gratis selamanya tanpa batasan jumlah teks dan tanpa registrasi akun.',
    },
    {
      q: 'Bisakah teks berkilau digunakan untuk nickname game Free Fire & Roblox?',
      a: 'Sangat bisa. Simbol bintang empat sudut dan kilauan kristal sangat populer untuk nama clan dan nickname akun player Free Fire, PUBG, dan Roblox.',
    },
    {
      q: 'Apakah teks berkilau aman untuk dipakai di nama halaman bisnis Facebook?',
      a: 'Aman. Teks berkilau menambahkan kesan mewah dan menonjolkan nama brand Halaman Facebook jualan Anda.',
    },
    {
      q: 'Apakah alat ini dapat diakses langsung dari HP Android & iPhone tanpa aplikasi?',
      a: 'Tentu saja. Situs ini responsif dan dapat diakses dari browser Safari iPhone maupun Chrome Android secara instan.',
    },
    {
      q: 'Bagaimana cara membuat nama aesthetic berkilau dengan hiasan sayap (꧁༺ ✨ Ahsan ✨ ༻꧂)?',
      a: 'Pilih preset "Sparkle Wings ꧁༺ ✨ ༻꧂" pada generator kami untuk mendapatkan teks berkilau bertema sayap malaikat dalam satu klik.',
    },
  ];

  const berkilauFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: berkilauFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(berkilauFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Sparkly FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan font Berkilau & Bintang Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {berkilauFaqs.map((item, idx) => {
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-pink-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-500 dark:text-amber-400' : ''
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
