'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame, Target, Swords, Gamepad2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export function GameFeaturedGrid() {
  const gamesList = [
    {
      id: 'free-fire',
      name: 'Free Fire (FF)',
      icon: Flame,
      badge: 'Most Popular',
      color: 'from-amber-500 to-red-600',
      href: '/free-fire',
      limit: 'Max 12 Karakter',
      popularSymbols: ['Simbol Payung ☂️', 'Mahkota 亗 / 👑', 'Border Sayap ꧁༺ ༻꧂', 'Spasi Kosong FF ㅤ'],
      ctaText: 'Generator Nick Free Fire',
    },
    {
      id: 'pubg-mobile',
      name: 'PUBG Mobile',
      icon: Target,
      badge: 'Tactical',
      color: 'from-yellow-500 to-amber-700',
      href: '/pubg-mobile',
      limit: 'Max 14 Karakter',
      popularSymbols: ['Kanji Jepang 帝 / 父 / 乡', 'Blackletter 𝕲𝖔𝖉', 'Clan Tag ⦇ ⦈', 'Cross Swords ⚔️'],
      ctaText: 'Generator Nick PUBG Mobile',
    },
    {
      id: 'mobile-legends',
      name: 'Mobile Legends (MLBB)',
      icon: Swords,
      badge: 'Esports',
      color: 'from-blue-600 to-indigo-700',
      href: '/mobile-legends',
      limit: 'Max 20 Karakter',
      popularSymbols: ['Crown Royal ♛', 'Lightning ⚡', 'Small Caps ᴛᴜʟɪsᴀɴ', 'Sparkle Stars ✧'],
      ctaText: 'Generator Nick Mobile Legends',
    },
    {
      id: 'roblox',
      name: 'Roblox',
      icon: Gamepad2,
      badge: 'Cute & Aesthetic',
      color: 'from-emerald-500 to-teal-700',
      href: '/roblox',
      limit: 'Max 20 Karakter',
      popularSymbols: ['Heart Deco ♡', 'Kaomoji (⁠✿⁠ ⁠♡⁠)', 'Flower Blossom 🌸', 'Teddy Bear 🧸'],
      ctaText: 'Generator Username Roblox',
    },
    {
      id: 'cod-mobile',
      name: 'COD Mobile (CODM)',
      icon: Zap,
      badge: 'Aggressive',
      color: 'from-orange-500 to-amber-600',
      href: '/cod-mobile',
      limit: 'Max 14 Karakter',
      popularSymbols: ['Operator Skull 💀', 'Fire Team 🔥', 'Military Monospace', 'Crosshair Target 🎯'],
      ctaText: 'Generator Nick COD Mobile',
    },
  ];

  return (
    <section id="featured-games" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Katalog Game Utama
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pilihan Game Esports Paling Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih game favorit Anda untuk mengakses koleksi font, preset nama pro player, dan generator khusus yang sudah terverifikasi valid di dalam game.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamesList.map((game, idx) => {
            const Icon = game.icon;

            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="group rounded-3xl p-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-amber-500/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${game.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {game.limit}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                    {game.name}
                  </h3>

                  {/* Popular Symbols */}
                  <div className="mt-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-1">
                      Simbol & Tren Populer:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {game.popularSymbols.map((sym, sIdx) => (
                        <span key={sIdx} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">
                          {sym}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={game.href}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-white text-xs font-bold transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 group-hover:translate-x-0.5"
                  >
                    <span>{game.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
