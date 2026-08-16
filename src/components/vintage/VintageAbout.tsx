'use client';

import React from 'react';
import { BookOpen, Scroll, Award } from 'lucide-react';

export function VintageAbout() {
  return (
    <section id="apa-itu-font-vintage" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Sejarah Tipografi Klasik
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
              Apa Itu Font Vintage & Blackletter Unicode?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Font Vintage</strong> merepresentasikan gaya tipografi abad pertengahan dan era retro klasik seperti <em>Blackletter</em>, <em>Fraktur</em>, <em>Old English</em>, serta <em>Mathematical Serif</em>.
            </p>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Karakter ini memberikan nuansa mewah, bersejarah, dan berkelas pada teks digital tanpa perlu menginstal aplikasi pengedit foto atau font khusus.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0 mt-1">
                  <Scroll className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Fraktur & Old English Script</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Gaya tulisan tangan cetak klasik Eropa abad ke-12 yang kini dipetakan ke dalam blok Unicode Math Alphanumeric.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 shrink-0 mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Estetika Mewah & Premium</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Cocok untuk header undangan pernikahan digital, caption promosi brand, logo vintage, dan Bio IG premium.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 text-white shadow-2xl relative">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
              <BookOpen className="w-6 h-6 text-amber-400" />
              <h3 className="font-bold text-lg font-poppins text-amber-400">Blok Unicode Vintage</h3>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1">1. Fraktur Regular:</span>
                <span className="text-base text-slate-200">𝔄 𝔅 ℭ 𝔇 𝔈 𝔉 𝔊 ℌ ℑ 𝔍</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-purple-400 font-bold block mb-1">2. Fraktur Bold:</span>
                <span className="text-base text-slate-200">𝕬 𝕭 𝕮 𝕯 𝕰 𝕱 𝕲 𝕳 𝕴 𝕵</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-pink-400 font-bold block mb-1">3. Bold Serif Klasik:</span>
                <span className="text-base text-slate-200">𝐀 𝐁 𝐂 𝐃 𝐄 𝐅 𝐆 𝐇 𝐈 𝐉</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
