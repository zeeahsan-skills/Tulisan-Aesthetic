'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Gamepad2, Shield, Flame } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export function FreeFireRelatedPages() {
  const relatedLinks = [
    {
      title: 'Huruf Keren Aesthetic',
      path: '/font/berkilau',
      desc: 'Konversi teks huruf kecil superscript paling estetik.',
      icon: Sparkles,
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Nama Game Keren',
      path: '/font/nama-keren',
      desc: 'Simbol mahkota & sayap untuk FF, PUBG, dan MLBB.',
      icon: Gamepad2,
      color: 'from-amber-500 to-red-600',
    },
    {
      title: 'Simbol & Kaomoji',
      path: '/font/garis',
      desc: 'Katalog ribuan simbol Jepang, emoticon & estetika.',
      icon: Shield,
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Instagram Font Generator',
      path: '/platform/instagram',
      desc: 'Optimasi teks khusus Bio & Story Instagram.',
      icon: InstagramIcon,
      color: 'from-amber-500 to-purple-600',
    },
    {
      title: 'PUBG Mobile Name Generator',
      path: '/font/nama-keren',
      desc: 'Nickname estetik untuk player PUBG Mobile.',
      icon: Flame,
      color: 'from-orange-500 to-amber-600',
    },
    {
      title: 'Mobile Legends Name Generator',
      path: '/font/nama-keren',
      desc: 'Generator nama akun MLBB berwibawa.',
      icon: Gamepad2,
      color: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Jelajahi Alat Lainnya
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Halaman & Generator Terkait
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan generator gaya font Unicode dan game Nickname Generator populer lainnya.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.path}
                className="group rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-amber-900/20 hover:border-amber-500/50 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} text-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                  <span>Buka Generator</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
