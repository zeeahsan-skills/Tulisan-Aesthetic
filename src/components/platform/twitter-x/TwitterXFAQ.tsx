'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function TwitterXFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apakah font aesthetic bisa digunakan pada Display Name Twitter / X?',
      a: 'Bisa! Display Name Twitter / X mendukung sebagian besar karakter Unicode estetik seperti Bold Sans, Small Caps, dan Cursive Script.',
    },
    {
      q: 'Apakah generator font ini bisa mengubah username handle (@username)?',
      a: 'Tidak. Username handle (@handle) Twitter / X dibatasi oleh aturan sistem platform yang hanya menerima huruf latin standar tanpa aksen dan angka.',
    },
    {
      q: 'Berapa batas karakter untuk Bio Twitter / X?',
      a: 'Batas maksimal Bio Twitter / X adalah 160 karakter. Font generator kami dapat digunakan untuk membuat kalimat bio singkat yang menarik.',
    },
    {
      q: 'Mengapa karakter kadang muncul sebagai kotak [?] pada HP tertentu?',
      a: 'Simbol muncul sebagai kotak jika sistem operasi perangkat penerima (biasanya HP Android versi lama) belum mendukung standar Unicode terbaru.',
    },
    {
      q: 'Apakah penggunaan generator font Twitter / X gratis?',
      a: 'Ya, 100% gratis selamanya tanpa perlu registrasi akun, pendaftaran, atau install aplikasi tambahan.',
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
            Pertanyaan Umum (FAQ) Font Twitter / X
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Jawaban seputar penggunaan teks bergaya Unicode di akun Twitter (X).
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="rounded-2xl border border-slate-200/80 dark:border-purple-900/30 overflow-hidden bg-slate-50/50 dark:bg-slate-950/50">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 font-semibold text-slate-900 dark:text-white text-sm sm:text-base font-poppins"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-purple-600 dark:text-pink-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-purple-600' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200/40 dark:border-slate-800/40 pt-3 leading-relaxed"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
