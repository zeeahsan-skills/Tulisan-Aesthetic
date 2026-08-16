'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gamepad2, ArrowRight } from 'lucide-react';

export function FontTebalGaming() {
  const games = [
    {
      name: 'Free Fire (FF)',
      link: '/game/free-fire',
      desc: 'Nickname FF bergaris tebal hitam (Bold Sans) memberikan impresi pro player yang tangguh di papan skor.',
    },
    {
      name: 'Mobile Legends (MLBB)',
      link: '/game/mobile-legends',
      desc: 'Sangat cocok untuk nama Squad MLBB dan Nickname pemain agar mudah terbaca saat drafting & loading screen.',
    },
    {
      name: 'PUBG Mobile',
      link: '/game/pubg-mobile',
      desc: 'Gunakan Font Tebal Serif atau Monospace Bold untuk nama klan PUBG Mobile bergaya militer.',
    },
    {
      name: 'Roblox & Valorant',
      link: '/game/roblox',
      desc: 'Teks bold Unicode didukung secara penuh untuk Display Name Roblox serta akun ID Valorant.',
    },
  ];

  return (
    <section id="font-tebal-untuk-gaming" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
              Nick Game Tangguh
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
              Font Tebal untuk Gaming
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Memiliki <strong>Nickname Game Bergaris Tebal</strong> memberikan kesan kuat, percaya diri, dan berkarakter di dalam arena esport. Teks bold terlihat jelas bahkan dalam resolusi grafis game yang tinggi.
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Semua variasi bold Unicode yang dihasilkan generator kami 100% aman digunakan untuk mengganti nama akun game tanpa khawatir banned.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {games.map((g, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/70 rounded-2xl p-5 border border-slate-200/80 dark:border-purple-900/30 flex flex-col justify-between hover:border-purple-500/40 transition-colors"
              >
                <div>
                  <div className="p-2 w-fit rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 mb-3">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins">
                    {g.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {g.desc}
                  </p>
                </div>

                <Link
                  href={g.link}
                  className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-pink-400 hover:gap-2 transition-all"
                >
                  <span>Generator Game {g.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
