'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Globe } from 'lucide-react';

export function FreeFireUnicodeExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Penjelasan Teknis
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Mengapa Unicode Berhasil di Free Fire?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui bagaimana mesin game Garena membaca simbol dan font estetik tanpa risiko akun terbanned.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-amber-900/20 space-y-4"
          >
            <div className="p-3.5 w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Dukungan Unicode di Engine Game FF
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Garena Free Fire mengadopsi standar huruf dan karakter Unicode global. Setiap simbol seperti mahkota 👑 atau sayap ꧁༺ ༻꧂ memiliki titik kode unik yang diizinkan dalam nama pemain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-amber-900/20 space-y-4"
          >
            <div className="p-3.5 w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Gaya Font FF yang Didukung
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Semua variasi font yang disediakan—termasuk Small Caps, Gothic Fraktur, Monospace, Bold Sans-Serif, dan Spasi Transparan—dapat terbaca sempurna di papan peringkat (leaderboard) dan tampilan Kill Feed game.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-amber-900/20 space-y-4"
          >
            <div className="p-3.5 w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Catatan Kompatibilitas HP & Emulator
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Hasil nama yang disalin kompatibel 100% baik saat Anda memainkan Free Fire di HP Android, iPhone, iPad, maupun PC/Laptop melalui emulator resmi seperti BlueStacks dan LDPlayer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
