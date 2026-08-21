'use client';

import React from 'react';
import { Zap } from 'lucide-react';

export function TwitterXHowItWorks() {
  const steps = [
    { step: '1', title: 'Ketik Teks Anda', desc: 'Ketik nama profil, kata-kata bio, atau teks Tweet yang ingin Anda ubah di generator top.' },
    { step: '2', title: 'Pilih Style Font', desc: 'Pilih salah satu dari 50 variasi gaya font Unicode yang tersedia (Bold, Cursive, Small Caps, Monospace, Gothic).' },
    { step: '3', title: 'Salin Teks', desc: 'Tekan tombol "Salin Style". Teks bergaya Unicode otomatis tersimpan di clipboard perangkat Anda.' },
    { step: '4', title: 'Paste ke Twitter (X)', desc: 'Buka Twitter (X) > Edit Profil > Tempel (Paste) pada kolom Display Name atau Bio, lalu simpan perubahan.' },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
            <Zap className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
            Cara Menggunakan Generator Font Twitter / X
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.step} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <span className="w-7 h-7 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center mb-2">
                {s.step}
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm font-poppins">{s.title}</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
