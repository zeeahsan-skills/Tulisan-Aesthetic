'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Type, CheckCircle2, Code2, AlertTriangle } from 'lucide-react';

export function TinyTextAbout() {
  return (
    <section id="apa-itu-tiny-text" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Apa Itu Tiny Text? */}
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
              Apa Itu Tiny Text?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Tiny Text</strong> (atau <em>small text</em>, <em>tulisan kecil</em>, dan <em>huruf kecil aesthetic</em>) adalah kumpulan karakter berukuran mini berbasis titik kode Unicode yang memungkinkan Anda menghasilkan teks berukuran kecil tanpa perlu mengubah ukuran font (<code>font-size</code>) melalui CSS.
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Karakter <strong>Tiny Text</strong> terdiri dari dua kategori utama: <strong>Small Caps</strong> (huruf kapital yang diperkecil skalanya) dan karakter <strong>Superscript/Subscript</strong> (huruf mini melayang di atas atau di bawah baris teks).
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'Teks tetap berukuran kecil di Bio IG, WhatsApp, TikTok, FB, & Discord.',
                '100% Karakter Unicode standar yang dapat disalin-tempel di mana saja.',
                'Cocok untuk membuat nama panggilan mini, tanggal lahir di bio, & tag game.',
                'Bebas biaya tanpa perlu download aplikasi atau font khusus.',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3: Small Caps vs Tiny Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/40 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                <Type className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Small Caps vs Superscript/Subscript
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Perbedaan jenis huruf kecil Unicode
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-purple-600 dark:text-pink-400">Small Caps (Kapital Mini)</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-bold">ʜᴜʀᴜғ ᴋᴇᴄɪʟ</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Semua alfabet diubah menjadi bentuk huruf kapital tetapi dengan tinggi proporsional sebesar huruf kecil (x-height). Sangat rapi dan mudah dibaca di bio.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-purple-600 dark:text-pink-400">Superscript (Kecil Atas)</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-bold">ᵀᵘˡⁱˢᵃⁿ ᴷᵉᶜⁱˡ</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Karakter huruf mini yang diposisikan melayang di atas garis dasar teks. Biasanya digunakan untuk eksponen matematika atau indikator trademark.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 10 & 11: Cara Kerja Unicode Small Text & Keterbatasan */}
        <div id="cara-kerja-unicode-small-text" className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
              Analisis Unicode &amp; Keterbatasan
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Cara Kerja &amp; Keterbatasan Tiny Unicode
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Fakta teknis di balik pembuatan teks kecil menggunakan standar internasional.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/30 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Cara Kerja Unicode Small Text
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Tabel Unicode menyediakan titik kode khusus seperti blok <em>Phonetic Extensions</em> (U+1D00-U+1D7F) dan <em>Superscripts and Subscripts</em> (U+2070-U+209F). Generator kami secara otomatis mencocokkan setiap huruf Latin dengan padanan karakter mininya di dalam tabel Unicode tersebut.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-amber-500/30 dark:border-amber-500/40 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Keterbatasan Tiny Unicode
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Konsorsium Unicode awalnya membuat karakter superscript dan subscript hanya untuk keperluan notasi matematika dan simbol fonetik (IPA), bukan alfabet lengkap A-Z. Oleh karena itu, beberapa huruf tertentu (seperti huruf &apos;q&apos; dalam superscript atau &apos;x&apos; dalam subscript) tidak memiliki karakter resmi di Unicode standar dan akan ditampilkan dengan huruf pengganti terdekat.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
