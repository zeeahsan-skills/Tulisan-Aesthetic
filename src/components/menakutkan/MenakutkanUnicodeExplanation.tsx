'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skull, Info, Eye } from 'lucide-react';

export function MenakutkanUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Font Menakutkan (Zalgo & Glitch) Unicode
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui teknologi penumpukan karakter diakritik di balik efek Zalgo distorted.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: What is Zalgo text? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
                <Skull className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Teks Zalgo & Glitch Unicode?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Teks Zalgo</strong> adalah bentuk manipulasi teks Unicode yang mengombinasikan satu huruf biasa dengan belasan karakter penanda aksen terpisah yang bernama <em>Combining Diacritical Marks</em> (rentang Unicode <code className="font-mono bg-rose-500/10 px-2 py-0.5 rounded text-rose-600 dark:text-rose-400">U+0300</code> hingga <code className="font-mono bg-rose-500/10 px-2 py-0.5 rounded text-rose-600 dark:text-rose-400">U+036F</code>). Karakter aksen ini menumpuk di atas, tengah, dan bawah huruf sehingga menghasilkan efek visual &quot;berantakan&quot; atau &quot;terinfeksi&quot; seperti gangguan sistem komputer (glitch).
            </p>
          </motion.div>

          {/* Card 2: How Combining Unicode Characters Create Glitch Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Bagaimana Karakter Diakritik Menghasilkan Efek Glitch?
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Awalnya, karakter diakritik dirancang Unicode untuk menandai aksen bahasa seperti aksen tilde (ã), umlaut (ä), atau grave (à). Namun karena Unicode mengizinkan penumpukan diakritik secara bertumpuk tanpa batas tegas, generator kami secara acak menumpukkan hingga 3 diakritik per huruf sehingga menciptakan tampilan horor digital.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Readability & Compatibility Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Pertimbangan Keterbacaan & Kompatibilitas
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Teks Zalgo terbaca sempurna di HP Android, iPhone, Windows PC, Discord, TikTok, WhatsApp, dan game online Free Fire. Untuk pengalaman pengguna terbaik, generator kami mengatur intensitas diakritik agar teks tetap dapat dibaca oleh teman atau lawan main game Anda tanpa menjadi terlalu berantakan.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
