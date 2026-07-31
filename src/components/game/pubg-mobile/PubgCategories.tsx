'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, Target, Users, Shield, Award, Flame, Ghost, Sparkles, Zap } from 'lucide-react';

export function PubgCategories() {
  const categories = [
    {
      title: 'Pro',
      icon: Trophy,
      desc: 'Format nama bersih & rapi bergaya atlet esports PMPL PUBG Mobile.',
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      title: 'Conqueror',
      icon: Crown,
      desc: 'Perpaduan mahkota emas 👑 dan simbol kehormatan rank Conqueror tertinggi.',
      gradient: 'from-yellow-600 to-amber-700',
    },
    {
      title: 'Sniper',
      icon: Target,
      desc: 'Simbol sasaran 🎯 untuk penembak jitu spesialis AWM, Kar98k, dan M24.',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Squad',
      icon: Users,
      desc: 'Formasi nama tim squad 4-man dengan tag klan yang seragam dan kompak.',
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Clan',
      icon: Shield,
      desc: 'Format awalan tag clan resmi dengan pembatas simbol Jepang (父, 乡, 帝).',
      gradient: 'from-red-600 to-orange-600',
    },
    {
      title: 'VIP',
      icon: Award,
      desc: 'Gaya nama mewah bertabur simbol mahkota dan bintang berwibawa.',
      gradient: 'from-amber-600 to-orange-500',
    },
    {
      title: 'Mythic',
      icon: Flame,
      desc: 'Gaya huruf kuno abad pertengahan Blackletter untuk tampilan senjata Mythic.',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      title: 'Dark',
      icon: Ghost,
      desc: 'Simbol bayangan Zalgo Glitch dan predator malam yang bikin musuh ciut.',
      gradient: 'from-slate-700 to-slate-900',
    },
    {
      title: 'Anime',
      icon: Sparkles,
      desc: 'Nama terinspirasi karakter anime Jepang modern dengan simbol estetika.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Royal',
      icon: Zap,
      desc: 'Kombinasi simbol pembatas 乂 乂 dan pedang kesatria kekaisaran.',
      gradient: 'from-amber-500 to-red-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Kategori Nickname
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            10 Kategori Nama PUBG Mobile Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan tema nickname yang paling pas dengan gaya bertarung dan peran Anda di PUBG Mobile.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="group relative rounded-3xl p-5 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-amber-900/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 w-12 h-12 rounded-2xl bg-gradient-to-tr ${cat.gradient} text-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {cat.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
