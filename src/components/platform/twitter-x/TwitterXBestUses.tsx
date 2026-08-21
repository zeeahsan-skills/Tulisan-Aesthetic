'use client';

import React from 'react';
import { Smartphone, Sparkles, MessageSquare, AtSign } from 'lucide-react';

export function TwitterXBestUses() {
  const cases = [
    {
      title: 'Display Name Profil X (50 Karakter)',
      icon: AtSign,
      desc: 'Gunakan font Bold Sans atau Small Caps agar nama tampilan Twitter Anda terlihat unik dan profesional.',
    },
    {
      title: 'Bio Twitter / X (160 Karakter)',
      icon: Smartphone,
      desc: 'Kombinasikan gaya Cursive atau Monospace dengan emoji estetik untuk mendeskripsikan diri di Bio.',
    },
    {
      title: 'Tweet & Thread Postingan',
      icon: MessageSquare,
      desc: 'Beri penekanan kata kunci pada postingan Tweet menggunakan font Bold atau Bubble text.',
    },
    {
      title: 'Header & Tagline Kreator',
      icon: Sparkles,
      desc: 'Tampilkan identitas visual unik pada profil kreator Twitter / X untuk menarik lebih banyak followers.',
    },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
            Penggunaan Terbaik Font Aesthetic di Twitter / X
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Berikut tempat terbaik untuk menempelkan teks hasil generator pada akun X Anda.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm font-poppins">{item.title}</h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
