'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqData = [
    {
      q: 'Apa itu Tulisan Aesthetic Generator?',
      a: 'Tulisan Aesthetic Generator adalah alat pembuat font online berbasis AI yang mengubah teks biasa menjadi karakter font Unicode estetik (seperti Small Caps, Gothic, Bubble, Cursive) secara otomatis untuk Bio Instagram, TikTok, WhatsApp, dan Nickname Game.',
    },
    {
      q: 'Bagaimana cara menyalin font aesthetic ke Bio Instagram atau TikTok?',
      a: 'Cukup ketik teks Anda pada kolom generator di bagian atas halaman, pilih gaya font yang Anda suka, lalu klik tombol "Salin Teks". Buka aplikasi Instagram atau TikTok, masuk ke Edit Profil > Bio, lalu tempel (Paste) teks tersebut.',
    },
    {
      q: 'Apakah font aesthetic aman untuk Nickname Free Fire, PUBG & Mobile Legends?',
      a: 'Sangat aman. Semua font yang kami sediakan menggunakan standar karakter Unicode internasional yang didukung secara resmi oleh mesin game modern tanpa melanggar ketentuan layanan (Terms of Service).',
    },
    {
      q: 'Mengapa font aesthetic kadang berubah menjadi kotak-kotak (☒)?',
      a: 'Karakter berubah menjadi kotak atau tanda tanya jika sistem operasi perangkat penerima (biasanya HP Android versi lama di bawah Android 8.0) belum mendukung standar simbol Unicode versi terbaru.',
    },
    {
      q: 'Apakah penggunaan generator font ini 100% gratis?',
      a: 'Ya, Tulisan Aesthetic dapat digunakan 100% gratis selamanya tanpa perlu mendaftar akun, tanpa batasan jumlah teks, dan tanpa perlu mengunduh aplikasi tambahan.',
    },
    {
      q: 'Berapa banyak gaya font dan simbol yang tersedia?',
      a: 'Kami menyediakan lebih dari 120+ variasi gaya font Unicode (Small Caps, Gothic, Bubble, Bold, Glitch Zalgo, Monospace) serta ribuan simbol estetik, kaomoji, dan emoticon teks.',
    },
    {
      q: 'Bagaimana cara membuat nickname dengan simbol mahkota & sayap (꧁༺ ༻꧂)?',
      a: 'Anda bisa masuk ke bagian "Gaming Nickname" atau "Katalog Simbol", lalu pilih preset border sayap ꧁༺ ༻꧂. Anda juga bisa mengombinasikannya dengan font tebal atau Small Caps pada kolom generator.',
    },
    {
      q: 'Apakah situs ini dapat diakses melalui HP (Mobile)?',
      a: 'Tentu saja! Situs Tulisan Aesthetic dirancang dengan prinsip Mobile-First yang sangat cepat, responsif, dan mudah digunakan di semua smartphone iOS dan Android.',
    },
  ];

  // FAQ Schema JSON-LD for Search Engines
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900 relative">
      
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
            {t.faq.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="rounded-2xl border border-slate-200/80 dark:border-purple-900/30 overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 transition-all duration-200"
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
