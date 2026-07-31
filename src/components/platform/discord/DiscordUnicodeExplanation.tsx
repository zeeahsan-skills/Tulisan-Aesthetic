'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Globe } from 'lucide-react';

export function DiscordUnicodeExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Penjelasan Teknis
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Mengapa Font Unicode Kompatibel di Discord?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui bagaimana sistem standar karakter internasional bekerja di Discord tanpa memerlukan aplikasi tambahan.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-indigo-900/20 space-y-4"
          >
            <div className="p-3.5 w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Dukungan Standar Unicode Discord
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Discord dibangun di atas arsitektur peramban modern yang mengenali pustaka karakter Unicode universal. Setiap bentuk huruf estetik (seperti 𝕲𝖔𝖙𝖍𝖎𝖈 atau ᴛᴇʙᴀʟ) disimpan sebagai kode simbol Unicode standar yang didukung penuh oleh Discord.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-indigo-900/20 space-y-4"
          >
            <div className="p-3.5 w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Perbedaan Teks Unicode vs Berkas Font
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Berkas font biasa (.ttf atau .otf) memerlukan instalasi lokal di komputer pengunduh. Sementara itu, alat kami memanfaatkan simbol publik Unicode yang siap ditempel di mana saja tanpa mengunduh berkas font apapun.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-indigo-900/20 space-y-4"
          >
            <div className="p-3.5 w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Kompatibilitas Lintas Perangkat
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Karena karakter ini standar internasional, teman atau anggota server Anda yang mengakses Discord dari ponsel Android, iPhone, Windows PC, Mac, maupun Linux akan melihat teks tersebut dengan persis sama.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
