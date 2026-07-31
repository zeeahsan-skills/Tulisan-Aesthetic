'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function GothicFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const gothicFaqs = [
    {
      q: 'Apa itu Font Gothic & Fraktur Generator?',
      a: 'Font Gothic & Fraktur Generator adalah alat pembuat font online gratis yang mengonversi teks alfabet standar menjadi karakter simbol Unicode bernuansa Gothic, Fraktur, Blackletter, dan Old English abad pertengahan secara instan.',
    },
    {
      q: 'Bagaimana cara mengonversi teks biasa menjadi tulisan Gothic Old English?',
      a: 'Ketik teks Anda pada kolom input generator di atas, pilih variasi gaya Gothic yang Anda inginkan (seperti Fraktur Bold atau Medieval Swords), lalu klik tombol "Salin Teks". Teks siap ditempelkan di mana saja.',
    },
    {
      q: 'Apakah font Gothic ini bisa dipakai untuk nickname Free Fire, PUBG & MLBB?',
      a: 'Sangat bisa! Semua karakter Gothic dan Fraktur yang dihasilkan menggunakan standar karakter Unicode internasional resmi yang didukung penuh oleh game Free Fire, PUBG Mobile, Mobile Legends, dan Valorant.',
    },
    {
      q: 'Apakah nama Discord dan role server mendukung font Fraktur?',
      a: 'Ya, Discord mendukung penuh karakter Unicode Fraktur dan Blackletter baik untuk display name pengguna, nama role server VIP, maupun nama channel obrolan.',
    },
    {
      q: 'Mengapa font Gothic kadang muncul sebagai kotak-kotak (☒)?',
      a: 'Tanda kotak atau tanda tanya muncul jika perangkat penerima pesan (terutama smartphone Android versi sangat lama di bawah Android 8.0) belum memiliki dukungan pustaka font Unicode versi terbaru.',
    },
    {
      q: 'Apa perbedaan antara Gothic Bold, Fraktur Normal, dan Blackletter Medieval?',
      a: 'Gothic Bold menggunakan bobot ketebalan garis tinggi untuk kesan tangguh, Fraktur Normal memiliki proporsi ramping otentik cetakan Jerman abad ke-16, sedangkan Blackletter Medieval dipercantik dengan hiasan ornamen pedang dan sayap.',
    },
    {
      q: 'Apakah penggunaan font Gothic di game bisa menyebabkan akun di-banned?',
      a: 'Tidak. Menggunakan font Gothic Unicode 100% aman karena Anda tidak mengubah file game atau menggunakan cheat/hack apa pun. Teks hanya memanfaatkan standar Unicode alfabet resmi.',
    },
    {
      q: 'Apakah generator font Gothic ini 100% gratis digunakan?',
      a: 'Ya, alat ini 100% gratis tanpa perlu registrasi akun, tanpa batasan jumlah konversi teks, dan dapat diakses langsung dari browser HP maupun komputer.',
    },
    {
      q: 'Apakah font Gothic dapat dipakai di Bio Instagram dan TikTok?',
      a: 'Tentu saja. Font Gothic dan Fraktur sangat populer dipakai oleh creator untuk membuat Bio Instagram, caption TikTok, dan story highlight terlihat lebih estetis dan profesional.',
    },
    {
      q: 'Bagaimana cara membuat nama clan Gothic dengan mahkota & pedang (⚔️ ♛)?',
      a: 'Pilih preset "Blackletter Swords ⚔️" atau "Royal Gothic Crown ♛" pada generator kami. Anda juga bisa mengombinasikannya dengan preset border yang ada di katalog simbol kami.',
    },
  ];

  // FAQ Schema JSON-LD
  const gothicFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: gothicFaqs.map((faq) => ({
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
      
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gothicFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
            Gothic FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan font Gothic & Fraktur Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {gothicFaqs.map((item, idx) => {
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
