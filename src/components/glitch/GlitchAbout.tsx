'use client';

import React from 'react';
import { Cpu, Terminal, ShieldAlert, Layers } from 'lucide-react';

export function GlitchAbout() {
  return (
    <section id="apa-itu-font-glitch" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
              Panduan Unicode Zalgo
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
              Apa Itu Font Glitch & Zalgo Text?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Font Glitch</strong> (sering disepadankan dengan <em>Zalgo Text</em> atau <em>Distorted Text</em>) adalah efek teks unik yang memanfaatkan ribuan karakter penggabung Unicode (<em>Combining Diacritical Marks</em>) untuk menumpuk tanda diakritik di atas, tengah, dan bawah huruf standar.
            </p>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Efek ini menciptakan visual teks acak yang tampak seperti "rusak", "terinfeksi virus", atau bergaya <em>Cyberpunk / Horror Gothic</em> tanpa menggunakan file font custom atau gambar.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Combining Diacritical Marks (U+0300 – U+036F)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Titik kode Unicode khusus yang menempel pada huruf dasar tanpa mengambil lebar spasi horizontal horizontal baru.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 shrink-0 mt-1">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Level Intensitas Glitch</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Efek glitch dapat disesuaikan dari Zalgo Ringan (mudah dibaca) hingga Zalgo Heavy (distorsi ekstrem).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 text-white shadow-2xl relative">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
              <ShieldAlert className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-lg font-mono text-emerald-400">Unicode Zalgo Breakdown</h3>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-purple-400 font-bold block mb-1">1. Huruf Dasar (Base Char):</span>
                <span>'G' (U+0047)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-pink-400 font-bold block mb-1">2. Diakritik Atas (Zalgo Up):</span>
                <span>U+030D (̍), U+030E (̎), U+0304 (̄)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-1">3. Hasil Gabungan (Combining):</span>
                <span className="text-lg text-emerald-300">G̸̡͐l̵̡̈i̵̧̓ţ̴͒ç̴̂h̵̡̀</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
