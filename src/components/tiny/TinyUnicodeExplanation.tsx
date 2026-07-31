'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hash, Info, Cpu } from 'lucide-react';

export function TinyUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Font Kecil (Tiny Font) Unicode
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pelajari teknologi di balik tulisan huruf kecil terangkat dan Small Caps.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: What are Unicode Small Fonts? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                <Hash className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Font Kecil (Tiny Font) Unicode?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Font Kecil Unicode</strong> adalah kumpulan karakter huruf mini yang memanfaatkan spesifikasi blok Unicode internasional seperti <em>Superscripts and Subscripts</em> (U+2070 - U+209F) dan <em>Phonetic Extensions</em>. Berbeda dari teks biasa, karakter ini secara fisik berukuran mini dan terangkat atau tergantung di garis dasar teks.
            </p>
          </motion.div>

          {/* Card 2: Difference between Small Unicode and CSS font-size */}
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
                Perbedaan Karakter Unicode Kecil vs CSS <code className="text-sm">font-size</code>
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Penting untuk membedakan antara pengubahan ukuran teks secara visual dengan pengubahan karakter teks:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>CSS font-size / HTML &lt;small&gt;</strong>: Hanya memperkecil tampilan visual teks pada halaman web. Ketika teks ini disalin ke Bio Instagram atau WhatsApp, ukurannya akan kembali normal karena kode CSS tidak ikut tersalin.
                </li>
                <li>
                  <strong>Font Kecil Unicode (Generator Kami)</strong>: Mengonversi huruf latin biasa menjadi simbol huruf kecil resmi Unicode (seperti <code className="font-mono bg-purple-500/10 px-2 py-0.5 rounded text-purple-600 dark:text-pink-400">ᵃ, ᵇ, ᶜ</code> atau <code className="font-mono bg-purple-500/10 px-2 py-0.5 rounded text-purple-600 dark:text-pink-400">ᴀ, ʙ, ᴄ</code>). Teks ini <strong>bisa disalin-tempel ke mana saja</strong> dan ukurannya tetap mini di semua aplikasi!
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
                Catatan Kompatibilitas Perangkat
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Hampir 100% perangkat pintar modern (iOS iPhone, Android 8+, Windows, Mac, Linux) dan aplikasi media sosial utama (Instagram, TikTok, WhatsApp, Discord, Free Fire, Roblox) mendukung penuh karakter superscript dan Small Caps.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
