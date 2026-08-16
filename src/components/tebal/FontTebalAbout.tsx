'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bold, CheckCircle2, Code2, ShieldCheck } from 'lucide-react';

export function FontTebalAbout() {
  return (
    <section id="apa-itu-font-tebal" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Apa Itu Font Tebal? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
              Penjelasan Utama
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
              Apa Itu Font Tebal?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Font Tebal</strong> (atau <em>tulisan tebal</em>, <em>huruf tebal</em>, dan <em>bold text Unicode</em>) adalah bentuk tampilan karakter alfabet yang dipetakan ke titik kode <strong>Mathematical Alphanumeric Symbols</strong> di dalam standar Unicode. Teks tebal ini secara khusus dirancang dengan garis strokes berbobot tinggi (heavy weight) sehingga tampak menonjol dan tegas.
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Di platform seperti Instagram, TikTok, WhatsApp, dan Facebook, opsi format tebal bawaan sering kali terbatas atau bahkan tidak ada. Dengan menggunakan <strong>Font Tebal Generator</strong>, karakter biasa diubah secara instan menjadi simbol bold Unicode yang siap disalin dan ditempel di aplikasi mana pun.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'Memberikan efek penekanan (emphasis) pada judul, poin penting, atau kata kunci.',
                'Tetap terlihat tebal di Bio IG, WhatsApp, TikTok, Discord, dan Facebook.',
                '100% karakter Unicode resmi yang dapat disalin-tempel tanpa aplikasi.',
                'Mendukung nama nickname game online agar terlihat tangguh dan menonjol.',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/40 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                <Bold className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Variasi Kategori Font Tebal
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Gaya bold Unicode yang paling sering digunakan
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50 flex justify-between items-center">
                <span className="font-bold text-slate-800 dark:text-slate-200">Bold Sans (Modern)</span>
                <span className="font-mono text-purple-600 dark:text-pink-400 font-bold">𝗛𝘂𝗿𝘂𝗳 𝗧𝗲𝗯𝗮𝗹</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50 flex justify-between items-center">
                <span className="font-bold text-slate-800 dark:text-slate-200">Bold Serif (Formal)</span>
                <span className="font-mono text-purple-600 dark:text-pink-400 font-bold">𝐇𝐮𝐫𝐮𝐟 𝐓𝐞𝐛𝐚𝐥</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50 flex justify-between items-center">
                <span className="font-bold text-slate-800 dark:text-slate-200">Bold Italic (Miring Tebal)</span>
                <span className="font-mono text-purple-600 dark:text-pink-400 font-bold">𝑯𝒖𝒓𝒖𝒇 𝑻𝒆𝒃𝒂𝒍</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50 flex justify-between items-center">
                <span className="font-bold text-slate-800 dark:text-slate-200">Bold Fraktur (Gothic)</span>
                <span className="font-mono text-purple-600 dark:text-pink-400 font-bold">𝕳𝖚𝖗𝖚𝖋 𝕿𝖊𝖇𝖆𝖑</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 10: Unicode Bold vs CSS Bold */}
        <div id="unicode-bold-vs-css-bold" className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
              Analisis Teknis
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Unicode Bold vs CSS Bold
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Mengapa teks yang ditebalkan dengan tombol Bold biasa sering kali hilang saat di-copy-paste?
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/30 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  CSS / HTML Bold Formatting (&lt;b&gt; &amp; font-weight)
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Penebalan dengan tag HTML (seperti <code>&lt;b&gt;</code>, <code>&lt;strong&gt;</code>) atau CSS (<code>font-weight: 700</code>) hanyalah instruksi tampilan visual bagi web browser. 
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Saat teks tersebut disalin ke dalam aplikasi polos seperti Bio Instagram, nama akun TikTok, atau form chat game, semua kode penataan gaya CSS tersebut langsung terbuang, sehingga teks berubah kembali menjadi teks biasa tanpa ketebalan.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-purple-500/30 dark:border-purple-500/40 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Unicode Bold Symbols (Mathematical Alphanumerics)
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Sebaliknya, <strong>Font Tebal Unicode</strong> tidak bergantung pada styling CSS. Karakter seperti <strong>𝗛</strong>, <strong>𝘂</strong>, <strong>𝗿</strong>, <strong>𝘂</strong>, <strong>𝗳</strong> adalah simbol Unicode independen (misalnya U+1D5E5).
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Karena karakter bold ini merupakan titik kode data mentah di tabel Unicode internasional, bentuk tebalnya akan tersimpan secara permanen saat disalin dan ditempel di mana pun.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
