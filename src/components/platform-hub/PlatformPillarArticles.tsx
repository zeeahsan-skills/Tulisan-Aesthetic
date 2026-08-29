'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export function PlatformPillarArticles() {
  const articles = [
    {
      title: 'Panduan Bikin Bio Instagram Aesthetic & Unik',
      desc: 'Trik lengkap mengubah font bio IG tanpa aplikasi agar tampilan profil terlihat menarik dan profesional.',
      href: '/blog/font-instagram',
      readTime: '3 Menit Baca',
    },
    {
      title: 'Cara Membuat Caption TikTok FYP Bertekstur Unique',
      desc: 'Strategi pemanfaatan font cetak tebal dan simbol aesthetic untuk meningkatkan engagemet penonton TikTok.',
      href: '/blog/font-tiktok',
      readTime: '4 Menit Baca',
    },
    {
      title: 'Trik Format Teks WhatsApp: Tebal, Miring & Font Unik',
      desc: 'Kombinasi format bawaan WA dan generator Unicode untuk membuat info profil dan status terlihat menonjol.',
      href: '/blog/font-whatsapp',
      readTime: '3 Menit Baca',
    },
    {
      title: 'Rahasia Karakter Unicode: Mengapa Font Berjalan di Semua Medsos',
      desc: 'Edukasi teknis mengenai standar Unicode internasional dan dukungan lintas platform operating system.',
      href: '/blog/apa-itu-unicode',
      readTime: '5 Menit Baca',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Edukasi & Artikel Terkait
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Panduan Tipografi Platform Terbaru
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Pelajari tips dan strategi mendalam dari artikel edukasi tim Tulisan Aesthetic.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art, idx) => (
            <Link
              key={idx}
              href={art.href}
              className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/50 transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Artikel Pilihan
                  </span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                  {art.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {art.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-pink-400">
                <span>Baca Artikel Selengkapnya</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
