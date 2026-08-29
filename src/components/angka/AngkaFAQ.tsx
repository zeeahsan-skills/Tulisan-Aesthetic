'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function AngkaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const angkaFaqs = [
    {
      q: 'Apa itu Generator Angka Keren (Stylish Number Generator)?',
      a: 'Generator Angka Keren adalah alat konverter nomor online gratis yang mengubah digit angka biasa (0-9) menjadi karakter angka lingkaran, angka tebal, monospace, dan simbol nomor Unicode estetik.',
    },
    {
      q: 'Bagaimana cara menyalin angka lingkaran ke Game ID Free Fire & Mobile Legends?',
      a: 'Masukkan deretan angka Anda di kolom generator di atas, pilih variasi "Circled Numbers" atau "Dark Circled Numbers", lalu klik tombol "Salin Angka". Tempelkan langsung ke dalam game.',
    },
    {
      q: 'Apakah angka tebal dan monospace bisa digunakan di Bio Instagram & WhatsApp?',
      a: 'Sangat bisa! Angka tebal matematika (𝟭𝟮𝟯𝟰𝟱) dan monospace (𝟷𝟸𝟹𝟺𝟻) didukung penuh di profil Bio Instagram, pesan obrolan WA, dan deskripsi grup.',
    },
    {
      q: 'Mengapa simbol angka lingkaran Unicode tidak berubah menjadi angka biasa saat disalin?',
      a: 'Karena angka lingkaran menggunakan kode karakter independen standar Unicode Enclosed Alphanumerics yang tersimpan di memori bawaan semua perangkat HP dan komputer.',
    },
    {
      q: 'Apa perbedaan antara Circled Numbers (①) dan Dark Circled (❶)?',
      a: 'Circled Numbers memiliki bingkai garis lingkaran outline transparan, sedangkan Dark Circled mengombinasikan latar belakang lingkaran hitam solid dengan angka berwarna putih.',
    },
    {
      q: 'Apakah penggunaan generator angka keren ini 100% gratis?',
      a: 'Ya, 100% gratis selamanya tanpa batasan jumlah angka dan tanpa registrasi akun.',
    },
    {
      q: 'Bisakah angka keren digunakan untuk penomoran daftar poin di caption TikTok?',
      a: 'Sangat cocok! Penomoran poin 1, 2, 3 menggunakan angka lingkaran membuat caption TikTok terlihat sangat rapi dan profesional.',
    },
    {
      q: 'Apakah angka keren aman untuk nomor HP bisnis di halaman Facebook?',
      a: 'Aman. Angka tebal dan monospace membuat nomor kontak WhatsApp bisnis Anda pada halaman Facebook terlihat mencolok perhatian calon pelanggan.',
    },
    {
      q: 'Apakah alat generator angka ini dapat diakses langsung dari HP Android & iPhone?',
      a: 'Tentu saja. Situs ini responsif dan dapat diakses cepat dari browser Safari di iPhone maupun Chrome di Android.',
    },
    {
      q: 'Bagaimana cara membuat nomor tahun estetik (contoh: 𝟮𝟬𝟮𝟲 / ❷⓪❷❻)?',
      a: 'Ketik angka pada kolom input di atas, lalu pilih gaya "Mathematical Bold" atau "Dark Circled" untuk mendapatkan format angka estetik secara instan.',
    },
  ];

  const angkaFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: angkaFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(angkaFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Number FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Segala hal yang perlu Anda ketahui tentang penggunaan Generator Angka Keren Unicode.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {angkaFaqs.map((item, idx) => {
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-teal-400 transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-500 dark:text-emerald-400' : ''
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
