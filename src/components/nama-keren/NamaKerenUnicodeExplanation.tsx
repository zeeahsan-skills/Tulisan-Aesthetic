'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Info, Cpu } from 'lucide-react';

export function NamaKerenUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Nama Keren & Aesthetic Unicode
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui rahasia mengapa nama buatan generator ini dapat menyala dan terbaca indah di mana saja.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: What are stylish Unicode names? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Nama Keren (Stylish Unicode Name)?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Nama Keren Unicode</strong> adalah susunan nama pribadi atau nickname game yang dirangkai menggunakan simbol-simbol estetis dari standar sistem konsorsium Unicode internasional. Mengombinasikan alfabet unik (Small Caps, Script, Fraktur, Circled) dengan ornamen dekoratif seperti sayap malaikat (꧁༺ ༻꧂), bintang (✨ ✧), dan mahkota (👑).
            </p>
          </motion.div>

          {/* Card 2: Why they work on social media and games */}
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
                Mengapa Nama Keren Bekerja di Sosial Media & Game Online?
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Sebagian besar aplikasi game dan sosmed tidak mengizinkan pengubahan file font (.ttf). Namun karena generator kami menggunakan <strong>simbol teks murni Unicode</strong>, sistem game menganggapnya sebagai karakter huruf biasa yang sah!
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Tidak Dianggap Gambar/Emoji</strong>: Tidak akan diblokir oleh filter sistem game.
                </li>
                <li>
                  <strong>Tersimpan Permanen</strong>: Bentuk nama estetik Anda akan tetap bertahan walaupun dibuka dari HP teman Anda.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Platform Compatibility */}
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
                Kompatibilitas Lintas Perangkat
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Generator Nama Keren didukung penuh oleh HP Android, iPhone (iOS), iPad, Windows PC, Mac, serta platform populer seperti Free Fire, Mobile Legends, PUBG Mobile, Roblox, Instagram, TikTok, WhatsApp, Discord, dan Facebook.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
