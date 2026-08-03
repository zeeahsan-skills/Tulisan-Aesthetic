'use client';

import React from 'react';
import { Smartphone, Monitor, ShieldCheck, Cpu } from 'lucide-react';

export function GameUnicodeCompatibility() {
  const compatPoints = [
    {
      icon: Smartphone,
      title: 'Android & iOS Cross-Platform Support',
      desc: 'Seluruh simbol dan font generator kami menggunakan standar internasional Unicode 15.0 yang secara langsung didukung oleh keyboard sistem Android 8+ dan iOS 13+.',
    },
    {
      icon: Monitor,
      title: 'Dukungan Emulator PC & Laptop',
      desc: 'Bagi gamer yang bermain di emulator BlueStacks, LDPlayer, atau NoxPlayer, simbol yang dihasilkan dapat langsung ditempel tanpa risiko error perpustakaan font.',
    },
    {
      icon: Cpu,
      title: 'Verifikasi Filter Nama Game',
      desc: 'Setiap simbol (seperti payung ☂️, mahkota 亗, dan spasi kosong Hangul ㅤ) telah diuji kelolosannya dari sistem penyaringan kata terlarang di Free Fire, PUBG, dan MLBB.',
    },
    {
      icon: ShieldCheck,
      title: 'Aman Tanpa Manipulasi File (Non-Cheat)',
      desc: 'Memakai simbol Unicode 100% aman dan sah di sistem game karena merupakan fitur teks resmi perangkat seluler.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Panduan Teknis Kompatibilitas
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Unicode Compatibility & Sistem Game
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Penjelasan teknis bagaimana simbol dan font aesthetic kami bekerja lancar di berbagai sistem operasi dan perangkat gaming.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {compatPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-4"
              >
                <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
