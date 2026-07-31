'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Globe } from 'lucide-react';

export function FacebookUnicodeExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Penjelasan Teknis
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Mengapa Font Unicode Berhasil di Facebook?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pahami rahasia di balik teknologi pemformatan teks estetik tanpa perlu mengunduh berkas font tambahan.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-blue-900/20 space-y-4"
          >
            <div className="p-3.5 w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Dukungan Standar Unicode Facebook
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Facebook menggunakan standar komputasi Unicode internasional yang berisi lebih dari 149.000 karakter dan simbol. Setiap karakter aesthetic (seperti 𝗧𝗲𝗯𝗮𝗹 atau Ⓢⓘⓜⓑⓞⓛ) memiliki kode unik yang dipahami oleh sistem Facebook secara bawaan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-blue-900/20 space-y-4"
          >
            <div className="p-3.5 w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Beda Teks Unicode & Berkas Font (TTF/OTF)
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Berkas font biasa (.ttf atau .otf) membutuhkan instalasi di perangkat. Sebaliknya, generator kami memetakan huruf biasa ke dalam simbol Unicode publik sehingga teks dapat langsung disalin dan ditempel di Facebook tanpa bantuan aplikasi luar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-blue-900/20 space-y-4"
          >
            <div className="p-3.5 w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Kompatibilitas Lintas Perangkat (Cross-Platform)
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Karena basis karakternya universal, teks Facebook yang Anda buat akan terlihat persis sama saat dilihat oleh teman Anda melalui HP Android, iPhone (iOS), tablet, maupun laptop via peramban web.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
