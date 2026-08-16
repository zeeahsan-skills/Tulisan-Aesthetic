'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Code2, Layers } from 'lucide-react';

export function BerkilauAbout() {
  return (
    <section id="apa-itu-font-berkilau" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Apa Itu Font Berkilau? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
              Konsep &amp; Klasifikasi
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
              Apa Itu Font Berkilau?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Font Berkilau (Sparkly Text)</strong> adalah sebutan populer untuk hasil teks aesthetic yang dihiasi dengan simbol kilauan bintang, sparkle, dan ornamen gliter berbasis karakter Unicode.
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Secara teknis, tampilan &quot;berkilau&quot; terbentuk dari perpaduan antara <strong>transformasi karakter Unicode</strong> (seperti Cursive Script <em>𝐹𝑜𝓃𝓉</em> atau Small Caps <em>ʜᴜʀᴜғ</em>) dengan <strong>simbol gliter &amp; bintang dekoratif</strong> (seperti ✨, ✧, ✦, dan ⋆).
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'Klasifikasi Jelas: Membedakan transformasi huruf murni vs simbol dekoratif.',
                'Siap disalin (copy) dan ditempel (paste) di Bio IG, WA, TikTok, & Discord.',
                'Memberikan nuansa ajaib, mewah, dan menawan pada profil media sosial.',
                'Berapapun jumlah konversi gratis digunakan tanpa pendaftaran.',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3 Pillars of Sparkly Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/40 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  3 Elemen Teks Berkilau
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Struktur pembentuk gaya Sparkly
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-purple-600 dark:text-pink-400">1. Transformasi Huruf Unicode</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-bold">𝐹𝑜𝓃𝓉 𝒦𝓊𝓇𝓈𝒾𝒻</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Mengubah bentuk fisik setiap huruf Latin standar menjadi bentuk Script, Bold, atau Small Caps.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-purple-600 dark:text-pink-400">2. Simbol Dekoratif Unicode</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-bold">✨ ✧ ✦ ⋆ 💎</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Karakter khusus berbentuk bintang, kilauan, atau permata yang berada pada tabel Unicode.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-pink-500/10 dark:bg-pink-950/40 border border-pink-500/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-pink-600 dark:text-pink-400">3. Kombinasi Simbol &amp; Teks</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-bold">✨ 𝐹𝑜𝓃𝓉 𝐵𝑒𝓇𝓀𝒾𝓁𝒶𝓊 ✨</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Penggabungan ornamen bingkai kilauan di sekitar teks untuk menghasilkan kesan estetik maksimal.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 9 & 10: Simbol Bintang Unicode & Unicode vs Emoji */}
        <div id="simbol-bintang-dan-sparkle-unicode" className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
              Spesifikasi Teknis
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Simbol Sparkle &amp; Unicode vs Emoji
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Memahami titik kode bintang dan perbedaannya dengan emoji berwarna.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/30 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Kode Simbol Sparkle Unicode
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-mono">
                <li><code>U+2728</code> : ✨ Sparkles (Simbol kilauan tiga bintang)</li>
                <li><code>U+2727</code> : ✧ White Four Point Star (Bintang empat sudut putih)</li>
                <li><code>U+2726</code> : ✦ Black Four Point Star (Bintang empat sudut hitam)</li>
                <li><code>U+22C6</code> : ⋆ Star Operator (Bintang mini matematika)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-purple-500/30 dark:border-purple-500/40 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Simbol Unicode vs Emoji Berwarna
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Simbol Unicode tradisional (seperti ✧ dan ✦) berbentuk glalif monokrom murni yang diwarnai sesuai warna font aplikasi. Sedangkan Emoji (seperti ✨) dirender berwarna penuh sesuai desain sistem operasi (iOS, Android, Windows).
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
