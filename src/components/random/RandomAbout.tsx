'use client';

import React from 'react';
import { Dices, Sparkles, Wand2 } from 'lucide-react';

export function RandomAbout() {
  return (
    <section id="apa-itu-font-random" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Font Mix & Match Engine
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
              Apa Itu Font Random & Acak Generator?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Font Random Generator</strong> adalah fitur khusus yang menggabungkan dan mengacak 50+ variasi Unicode Font serta perhiasan simbol secara dinamis.
            </p>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Fitur ini diciptakan bagi pengguna yang menginginkan tampilan nama akun game atau bio yang tidak pasaran (Anti-Mainstream) melalui satu kali klik tombol "Acak Teks".
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 mt-1">
                  <Dices className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Algoritma Randomizing</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Setiap kali tombol acak ditekan, generator memilih kombinasi kata kunci dan gaya tipografi secara acak dari database Unicode.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 shrink-0 mt-1">
                  <Wand2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Unique Identity</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Menjamin Nickname Game (FF, MLBB, PUBG) dan Bio IG Anda tampil beda dari pengguna lain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 text-white shadow-2xl relative">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <h3 className="font-bold text-lg font-poppins text-blue-400">Kombinasi Multi-Style</h3>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-blue-400 font-bold block mb-1">1. Mix Symbols + Small Caps:</span>
                <span className="text-base text-slate-200">★彡 ᴀᴇsᴛʜᴇᴛɪᴄ 彡★</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-purple-400 font-bold block mb-1">2. Mix Wings + Script:</span>
                <span className="text-base text-slate-200">꧁༺ 𝒫𝓇𝑜 𝒢𝒶𝓂𝑒𝓇 ༻꧂</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-pink-400 font-bold block mb-1">3. Mix Crown + Bold Sans:</span>
                <span className="text-base text-slate-200">👑 𝗡𝗶𝗻𝗷𝗮 𝗦𝗹𝗮𝘆𝗲𝗿 👑</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
