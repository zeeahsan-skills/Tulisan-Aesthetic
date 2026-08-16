'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Cpu, Globe, CheckCircle2 } from 'lucide-react';

export function HurufKerenAbout() {
  return (
    <section id="apa-itu-huruf-keren" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Apa Itu Huruf Keren? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
              Panduan Lengkap
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
              Apa Itu Huruf Keren?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Huruf Keren</strong> (atau biasa disebut <em>tulisan keren</em>, <em>font keren</em>, dan <em>tulisan aesthetic</em>) adalah sebutan untuk kumpulan variasi teks unik berbasis karakter <strong>Unicode</strong> yang dirancang untuk mengubah tampilan alfabet standar menjadi bentuk visual yang stylish, dekoratif, dan menarik perhatian.
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Berbeda dari file font biasa (seperti format .TTF atau .OTF) yang harus diinstal terlebih dahulu di perangkat komputer atau smartphone, <strong>Huruf Keren</strong> memanfaatkan ribuan simbol matematika, alfabet khusus, serta karakter enclosed yang sudah tertanam secara universal di dalam sistem operasi modern.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'Dapat disalin (copy) & ditempel (paste) di mana saja secara instan.',
                'Kompatibel dengan Instagram, TikTok, WhatsApp, Facebook, dan Discord.',
                'Mendukung nama nickname game online seperti Free Fire, MLBB, & PUBG Mobile.',
                '100% Bebas biaya tanpa perlu menginstal aplikasi tambahan.',
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
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Perbandingan Font vs Huruf Keren Unicode
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Mengapa teks Unicode bisa langsung di-copy-paste?
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50">
                <span className="font-bold text-rose-500 dark:text-rose-400 block mb-1">
                  ❌ File Font Biasa (.TTF / .OTF)
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  Memerlukan instalasi di sistem HP/PC. Jika dikirim via chat atau bio sosial media, tampilan kembali ke huruf standar jika penerima tidak memiliki file font yang sama.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/20">
                <span className="font-bold text-purple-600 dark:text-pink-400 block mb-1">
                  ✅ Huruf Keren Generator (Unicode Symbols)
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  Setiap karakter dipetakan ke titik kode Unicode standar dunia (seperti Mathematical Alphanumeric Symbols). Tampilan tetap keren dan terbaca di semua platform pengirim & penerima.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 9: Unicode dan Huruf Keren */}
        <div id="unicode-dan-huruf-keren" className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
              Teknologi di Balik Teks
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Unicode dan Huruf Keren
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Memahami bagaimana Unicode Consortium memungkinkan ribuan gaya huruf stylish dapat berjalan di seluruh perangkat digital.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-purple-900/30 shadow-md">
              <div className="p-3 w-fit rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins mb-2">
                Standard Konsorsium Unicode
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Unicode adalah standar industri komputasi internasional yang menetapkan kode unik bagi setiap karakter, angka, dan simbol dari berbagai sistem tulisan di seluruh dunia.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-purple-900/30 shadow-md">
              <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins mb-2">
                Mathematical Alphanumeric
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Gaya seperti Bold, Italic, Script, dan Fraktur berasal dari blok kode Unicode khusus matematika yang dimanfaatkan untuk menghasilkan efek estetis.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-purple-900/30 shadow-md">
              <div className="p-3 w-fit rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins mb-2">
                Enclosed Alphanumerics
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Karakter lingkaran (ⓐⓑⓒ) dan kotak (🄰🄱🄲) dibuat menggunakan rentang kode Enclosed Alphanumerics dan Enclosed Ideographic Supplement dalam tabel Unicode.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
