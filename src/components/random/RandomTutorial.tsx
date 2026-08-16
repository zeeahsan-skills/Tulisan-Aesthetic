'use client';

import React from 'react';
import { Type, Shuffle, Copy, CheckCircle } from 'lucide-react';

export function RandomTutorial() {
  const steps = [
    {
      num: '01',
      title: 'Ketik Teks Utama Anda',
      desc: 'Masukkan nama, kata kunci, atau frasa yang ingin diacak pada generator di bagian atas.',
      icon: Type,
    },
    {
      num: '02',
      title: 'Klik Tombol "Acak Teks"',
      desc: 'Tekan tombol "Acak Teks" untuk mengganti sampel kata secara acak atau gunakan tab pencarian.',
      icon: Shuffle,
    },
    {
      num: '03',
      title: 'Salin Gaya Terfavorit',
      desc: 'Jelajahi 50 hasil acak yang dihasilkan lalu klik "Salin" pada kartu gaya paling menarik.',
      icon: Copy,
    },
    {
      num: '04',
      title: 'Tempelkan di Media Sosial / Game',
      desc: 'Buka game atau aplikasi tujuan lalu tekan dan tahan lalu pilih "Tempel".',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="cara-mengacak-font" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Panduan Penggunaan
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Cara Mengacak & Copy Paste Font Random
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Empat langkah mudah mengeksplorasi kombinasi font acak tanpa batas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-purple-900/30 shadow-md relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-mono">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
