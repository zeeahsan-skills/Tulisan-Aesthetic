'use client';

import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';

export function GameNicknameTips() {
  const tipsList = [
    {
      title: 'Gunakan Kombinasi Maksimal 2 Simbol',
      desc: 'Simbol seperti Mahkota (亗) atau Sayap (꧁༺ ༻꧂) akan terlihat lebih berkelas jika diletakkan di awal atau akhir nama tanpa berlebihan.',
      type: 'Do',
    },
    {
      title: 'Hindari Menumpuk Terlalu Banyak Simbol Berbeda',
      desc: 'Menumpuk lebih dari 4 simbol berbeda dapat menyebabkan nickname terlihat berantakan dan sulit dibaca oleh rekan satu tim.',
      type: 'Don\'t',
    },
    {
      title: 'Gunakan Tag Clan yang Seragam',
      desc: 'Bagi tim esports atau guild, gunakan imbuhan seperti 『TAG』 atau 帝• di awal nama semua anggota agar terlihat kompak.',
      type: 'Do',
    },
    {
      title: 'Perhatikan Batas Karakter Per Game',
      desc: 'Free Fire membatasi 12 karakter, sedangkan PUBG Mobile 14 karakter. Pastikan panjang nama buatan Anda tidak terpotong saat disimpan.',
      type: 'Do',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Pro Player Tips & Tricks
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Trik Membuat Nickname Pro Esports
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Tips praktis menyusun nama akun game agar terkesan garang, mudah diingat, dan lolos verifikasi sistem game.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tipsList.map((tip, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex items-start gap-4"
            >
              <div
                className={`p-3 rounded-2xl flex-shrink-0 ${
                  tip.type === 'Do'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                }`}
              >
                {tip.type === 'Do' ? <Check className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
