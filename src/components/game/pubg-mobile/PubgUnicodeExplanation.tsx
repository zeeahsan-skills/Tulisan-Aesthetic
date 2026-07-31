'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Globe } from 'lucide-react';

export function PubgUnicodeExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Penjelasan Teknis
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Mengapa Unicode Berhasil di PUBG Mobile?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui bagaimana arsitektur game PUBG Mobile mengenali simbol dan gaya huruf estetik tanpa risiko akun ter-banned.
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
              Dukungan Mesin Unreal Engine 4
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              PUBG Mobile dikembangkan menggunakan Unreal Engine 4 yang memiliki pustaka render teks Unicode internasional. Karakter pembatas seperti 乂 dan 帝 disimpan sebagai kode simbol resmi yang dapat dirender dengan mulus di dalam game.
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
              Gaya Font Didukung Luas
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Semua variasi font yang kami sediakan—termasuk Small Caps, Gothic, Monospace, dan Spasi Transparan—dapat tampil bersih saat Anda mendapatkan eliminasi di Kill Feed, statistik profil klan, maupun hasil akhir Chicken Dinner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-amber-900/20 space-y-4"
          >
            <div className="p-3.5 w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Kompatibilitas Lintas Platform
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Karena menggunakan standar karakter universal, teman satu squad Anda yang bermain dari perangkat Android, iPhone, iPad, maupun emulator PC Gameloop akan melihat nickname Anda persis sama.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
