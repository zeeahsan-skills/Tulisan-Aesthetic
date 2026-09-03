'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Gamepad2, Flame } from 'lucide-react';

const DiscordIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.127c-.598.348-1.22.648-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export function PubgRelatedPages() {
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
      title: 'Discord Font Generator',
      path: '/platform/discord',
      desc: 'Font khusus nama server, channel & role Discord.',
      icon: DiscordIcon,
      color: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Free Fire Name Generator',
      path: '/free-fire',
      desc: 'Generator nickname FF estetik bergaya pro player.',
      icon: Flame,
      color: 'from-amber-500 to-red-600',
    },
    {
      title: 'Mobile Legends Name Generator',
      path: '/mobile-legends',
      desc: 'Generator nama akun MLBB berwibawa.',
      icon: Gamepad2,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Roblox Display Name Generator',
      path: '/roblox',
      desc: 'Nama akun Roblox keren & aesthetic.',
      icon: Gamepad2,
      color: 'from-red-600 to-pink-600',
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
            Temukan generator gaya font Unicode dan platform gaming populer lainnya.
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
