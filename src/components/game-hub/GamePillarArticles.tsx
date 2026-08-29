'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export function GamePillarArticles() {
  const gamingArticles = [
    {
      title: 'Panduan Bikin Nama Game Keren Ala Pro Player Esports',
      desc: 'Trik lengkap membuat nickname intimidatif dengan simbol mahkota, payung, dan spasi kosong transparan.',
      href: '/blog/cara-membuat-nama-keren',
      readTime: '4 Menit Baca',
    },
    {
      title: 'Rahasia Kode Simbol Unicode Untuk Game Nickname',
      desc: 'Penjelasan ilmiah mengapa karakter Unicode dapat berjalan di server game Free Fire, PUBG, dan Mobile Legends.',
      href: '/blog/apa-itu-unicode',
      readTime: '5 Menit Baca',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Artikel & Panduan Gaming
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Panduan Nickname Esports Terpopuler
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Pelajari teknik penyusunan nama clan dan nickname game dari artikel panduan terbaik kami.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {gamingArticles.map((art, idx) => (
            <Link
              key={idx}
              href={art.href}
              className="group p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 hover:border-amber-500/50 transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Artikel Gaming
                  </span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins group-hover:text-amber-500 transition">
                  {art.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {art.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
