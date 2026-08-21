'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function UnicodeExplanation() {
  const unicodeBlocks = [
    {
      name: 'Mathematical Alphanumeric Symbols',
      range: 'U+1D400 - U+1D7FF',
      example: '𝗧𝘂𝗹𝗶𝘀𝗮𝗻 (Bold) | 𝒯𝓊𝓁𝒾𝓈𝒶𝓃 (Cursive) | 𝕿𝖚𝖑𝖎𝖘𝖆𝖓 (Gothic)',
      description:
        'Kumpulan karakter matematika khusus yang dipetakan ulang menjadi variasi huruf tebal, miring, serif, dan sans-serif.',
    },
    {
      name: 'Enclosed Alphanumerics',
      range: 'U+2460 - U+24FF',
      example: 'Ⓣⓤⓛⓘⓢⓐⓝ (Bubble) | 🅃🅄🄻🄸🅂🄰🄽 (Kotak)',
      description:
        'Karakter alfabet yang dilingkari bundar atau dibingkai kotak secara native dalam spesifikasi Unicode.',
    },
    {
      name: 'Superscript & Subscript',
      range: 'U+2070 - U+209F',
      example: 'ᵀᵁᴸᴵˢᴬᴺ (Tiny Upper) | ₜᵤₗᵢₛₐₙ (Tiny Lower)',
      description:
        'Vektor karakter berukuran mini yang awalnya dirancang untuk rumus kimia dan notasi matematika.',
    },
    {
      name: 'Combining Diacritical Marks (Zalgo)',
      range: 'U+0300 - U+036F',
      example: 'T̷u̷l̷i̷s̷a̷n̷ (Glitch / Zalgo Noise)',
      description:
        'Simbol yang menempel secara vertikal atau horizontal pada karakter dasar untuk menciptakan efek glitch cyber.',
    },
  ];

  return (
    <section id="unicode-guide" className="py-12 sm:py-16 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400 inline-flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            Edukasi Standar Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Cara Kerja Generator Tulisan Aesthetic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Tahukah Anda bahwa generator ini tidak mengubah file font sistem Anda? Kami memanfaatkan pemetaan karakter dari konsorsium <strong className="text-purple-600 dark:text-pink-400">Unicode 15.1</strong> untuk menghasilkan teks bergaya secara instan.
          </p>
        </div>

        {/* Info Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {unicodeBlocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-pink-300 border border-purple-500/20">
                    {block.range}
                  </span>
                  <Code className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                  {block.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {block.description}
                </p>
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 font-mono text-base font-medium text-purple-700 dark:text-pink-300 break-all">
                <span className="text-xs text-slate-400 block mb-1 font-sans">Contoh Output:</span>
                {block.example}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Feature Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-indigo-900/10 border border-purple-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-purple-600 text-white shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                Kenapa Lebih Aman Dibandingkan File Font Custom (.TTF / .OTF)?
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Karena menggunakan standar Unicode universal, teks aesthetic hasil copy-paste dari situs ini dapat langsung dibaca oleh aplikasi sosial media tanpa perlu menginstal aplikasi tambahan di smartphone Anda.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" /> 100% Bebas Aplikasi
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
