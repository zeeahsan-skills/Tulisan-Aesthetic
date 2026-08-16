'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function GlitchFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const glitchFaqs = [
    {
      q: 'Apa itu Font Glitch & Zalgo Generator?',
      a: 'Font Glitch Generator adalah alat pengubah teks online yang menumpuk simbol diakritik Unicode di atas dan bawah huruf standar untuk menghasilkan efek teks distorted / terinfeksi virus.',
    },
    {
      q: 'Bagaimana cara membuat tulisan glitch untuk Nickname FF?',
      a: 'Ketik nama Anda di generator atas, pilih gaya Glitch Zalgo Ringan atau Cyber Wings, lalu klik "Salin" dan tempel di menu pengubahan nickname Free Fire.',
    },
    {
      q: 'Apakah teks Zalgo aman digunakan di Discord?',
      a: 'Sangat aman. Discord secara native mendukung karakter penggabung Unicode untuk username, server nickname, dan channel name.',
    },
    {
      q: 'Apa perbedaan antara Zalgo Ringan dan Zalgo Heavy?',
      a: 'Zalgo Ringan hanya menambahkan 1-2 diakritik sehingga teks tetap mudah dibaca. Zalgo Heavy menumpuk hingga 6-8 diakritik untuk efek distorsi ekstrem.',
    },
    {
      q: 'Mengapa sebagian teks glitch terpotong di HP Android?',
      a: 'Sebagian aplikasi membatasi tinggi baris (line-height) teks. Jika terpotong, disarankan menggunakan Zalgo Ringan agar muat di bidang input.',
    },
    {
      q: 'Apakah generator Font Glitch ini gratis?',
      a: 'Ya, 100% gratis digunakan tanpa registrasi akun.',
    },
    {
      q: 'Apakah teks glitch bisa dipakai di Bio Instagram & TikTok?',
      a: 'Bisa. Bio Instagram dan TikTok mendukung simbol Zalgo Unicode selama panjang karakter tidak melebihi batas batas kuota bio.',
    },
    {
      q: 'Apakah font glitch memerlukan download file font khusus?',
      a: 'Tidak perlu. Semua karakter yang dihasilkan berbasis standar Unicode internasional sehingga bisa di-copy paste langsung.',
    },
    {
      q: 'Apakah aman memakai tulisan Zalgo di game online?',
      a: 'Aman karena tidak meretas atau mengubah file game. Namun disarankan menguji di profil tes terlebih dahulu.',
    },
    {
      q: 'Bagaimana cara salin teks glitch ke HP?',
      a: 'Klik tombol "Salin" pada kartu font, lalu di aplikasi tujuan tekan dan tahan kolom teks dan pilih "Tempel".',
    },
    {
      q: 'Apakah ada batasan jumlah kata?',
      a: 'Generator kami tidak membatasi jumlah kata, namun disarankan secukupnya agar tampilan di HP tetap rapi.',
    },
    {
      q: 'Bisakah mengombinasikan font glitch dengan huruf gothic?',
      a: 'Bisa! Generator kami menyediakan variasi Dark Glitch Fraktur Gothic yang memadukan huruf Old English dengan efek zalgo.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: glitchFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq-font-glitch" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      
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
            FAQ Font Glitch & Zalgo
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Jawaban lengkap atas pertanyaan seputar penggunaan teks Zalgo dan Glitch Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {glitchFaqs.map((item, idx) => {
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
