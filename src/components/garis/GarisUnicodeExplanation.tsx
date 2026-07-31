'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Strikethrough, Info, Cpu } from 'lucide-react';

export function GarisUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Font Garis Coret (Strikethrough) Unicode
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui teknologi karakter penggabung (Combining Diacritical Marks) di balik efek coret teks.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: What is Unicode Strikethrough text? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Strikethrough className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Teks Garis Coret (Strikethrough) Unicode?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Teks Garis Coret Unicode</strong> dihasilkan dengan menggabungkan setiap huruf latin biasa dengan karakter penggabung spesial Unicode bernama <em>Combining Long Stroke Overlay</em> (<code className="font-mono bg-indigo-500/10 px-2 py-0.5 rounded text-indigo-600 dark:text-pink-400">U+0336</code>). Karakter ini &quot;menempel&quot; langsung di atas huruf dan membuat efek garis horizontal tepat melintasi tubuh huruf.
            </p>
          </motion.div>

          {/* Card 2: Difference between Combining Characters vs CSS text-decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Perbedaan Unicode Combining Character vs CSS <code className="text-sm">text-decoration</code>
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Banyak pengguna tidak menyadari perbedaan mendasar antara styling web dengan karakter Unicode asli:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>CSS <code className="text-sm font-mono">text-decoration: line-through</code> / HTML &lt;s&gt;</strong>: Hanya styling visual sementara di browser web. Saat teks disalin ke bio WhatsApp atau caption TikTok, garis coret akan hilang total.
                </li>
                <li>
                  <strong>Unicode Combining Character (Generator Kami)</strong>: Karakter garis menyatu secara fisik dengan huruf itu sendiri. Sehingga teks coret yang Anda salin <strong>tetap memiliki garis coret di aplikasi apa pun</strong> tanpa tergantung CSS!
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Compatibility Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Kompatibilitas Lintas Platform
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Karakter penggabung strikethrough (<code className="font-mono bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400">U+0336</code>) telah menjadi standar resmi sistem operasi modern selama puluhan tahun. Teks garis coret ini terbaca sempurna 100% di iPhone/iPad, HP Android, Windows PC, Mac, WhatsApp, Telegram, Discord, TikTok, Instagram, Facebook, hingga nickname game Free Fire & Roblox.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
