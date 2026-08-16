'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gamepad2, Shield, Crosshair, Crown, ArrowRight } from 'lucide-react';

export function HurufKerenGaming() {
  const games = [
    {
      name: 'Free Fire (FF)',
      link: '/game/free-fire',
      desc: 'Sangat cocok untuk nickname FF berornamen pedang, mahkota, dan gaya Gothic Fraktur.',
      badge: 'Nick FF',
    },
    {
      name: 'Mobile Legends (MLBB)',
      link: '/game/mobile-legends',
      desc: 'Buat nama squad & nickname MLBB aesthetic bergaris tebal atau Small Caps berkesan pro player.',
      badge: 'Squad ML',
    },
    {
      name: 'PUBG Mobile',
      link: '/game/pubg-mobile',
      desc: 'Gunakan font Monospace dan Japanese brackets 『 』 untuk nama klan PUBG Mobile bergaya cyber.',
      badge: 'Clan PUBG',
    },
    {
      name: 'Roblox',
      link: '/game/roblox',
      desc: 'Variasi tulisan keren imut & bubble box yang didukung penuh untuk Display Name Roblox.',
      badge: 'Display Name',
    },
  ];

  return (
    <section id="huruf-keren-untuk-game" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
              Gaming & Esports
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
              Huruf Keren untuk Game Online
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Bagi para gamer dan atlet esports, memiliki <strong>Nickname Game Keren</strong> adalah identitas utama di dalam arena pertandingan. Huruf Keren Unicode memungkinkan Anda membuat nama pemain dan nama squad/clan yang menonjol di papan peringkat (leaderboard).
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Semua karakter yang dihasilkan generator kami menggunakan standar simbol internasional yang aman dan didukung penuh oleh engine game populer tanpa risiko terdeteksi sebagai karakter ilegal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-purple-500" />
                100% Anti-Banned
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Crosshair className="w-4 h-4 text-pink-500" />
                Dukungan Cross-Platform
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-amber-500" />
                Simbol Mahkota & Sayap
              </span>
            </div>
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                      <Gamepad2 className="w-5 h-5" />
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-[11px] font-bold text-purple-700 dark:text-pink-300">
                      {g.badge}
                    </span>
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
                  <span>Generator Nickname {g.name}</span>
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
