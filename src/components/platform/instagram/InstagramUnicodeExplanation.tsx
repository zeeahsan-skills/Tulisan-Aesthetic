'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Info } from 'lucide-react';

export function InstagramUnicodeExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Mengapa Instagram Mengizinkan{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Font Unicode Aesthetic?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Penjelasan teknis tentang perbedaan karakter Unicode asli dengan berkas font (.ttf / .otf).
          </p>
        </div>

        {/* Explanation Cards Grid */}
        <div className="mt-14 space-y-8">
          
          {/* Card 1: Why Instagram supports Unicode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-purple-900/20 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Mengapa Teks Aesthetic Bisa Terbaca di Instagram?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Aplikasi Instagram tidak mengizinkan pengguna untuk mengunggah berkas font kustom seperti <code className="font-mono bg-purple-500/10 px-2 py-0.5 rounded text-purple-600 dark:text-purple-300">.ttf</code> atau <code className="font-mono bg-purple-500/10 px-2 py-0.5 rounded text-purple-600 dark:text-purple-300">.otf</code>. Namun, Instagram mendukung penuh <strong>Konsorsium Unicode Internasional</strong>. Generator kami tidak mengganti jenis font bawaan HP Anda, melainkan mengodekan ulang huruf biasa menjadi karakter glif Unicode yang unik (seperti Mathematical Alphanumeric Symbols), sehingga sistem Instagram mengenalinya sebagai teks standar yang sah.
            </p>
          </motion.div>

          {/* Card 2: Difference between Unicode and Custom Fonts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-purple-900/20 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Perbedaan Karakter Unicode vs File Font Kustom
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Jika Anda menginstal font di komputer, font tersebut hanya terlihat oleh Anda. Sedangkan teks Unicode yang dihasilkan oleh <strong>Tulisan Aesthetic Generator</strong> berbentuk kode universal. Teks ini dapat dibuka, dibaca, dan disalin oleh siapapun di Instagram—baik menggunakan Android, iPhone, Windows, maupun macOS—tanpa memerlukan aplikasi tambahan.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
