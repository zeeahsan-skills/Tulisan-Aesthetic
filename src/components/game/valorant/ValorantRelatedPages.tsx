'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Target, Swords, Gamepad2, Zap, Sparkles, Heart } from 'lucide-react';

export function ValorantRelatedPages() {
  const links = [
    {
      title: 'Free Fire Nickname Generator',
      path: '/free-fire',
      desc: 'Buat nickname FF keren pro player dengan simbol sayap & mahkota.',
      icon: <Flame className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'PUBG Mobile Font Generator',
      path: '/pubg-mobile',
      desc: 'Generator nama PUBG Conqueror, clan tag & font military taktis.',
      icon: <Target className="w-5 h-5 text-yellow-500" />,
    },
    {
      title: 'Mobile Legends Nickname',
      path: '/mobile-legends',
      desc: 'Preset nama squad & nickname MLBB aesthetic rank Mythic.',
      icon: <Swords className="w-5 h-5 text-blue-500" />,
    },
    {
      title: 'COD Mobile Font Generator',
      path: '/cod-mobile',
      desc: 'Nama akun CODM agresif bertema operator perang & sniper.',
      icon: <Zap className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'Roblox Username Generator',
      path: '/roblox',
      desc: 'Username Roblox aesthetic dengan kaomoji & simbol imut.',
      icon: <Gamepad2 className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: 'Sparkly Font Generator',
      path: '/font/sparkly',
      desc: 'Gaya font berkilau stardust & glitter aesthetic siap copy-paste.',
      icon: <Sparkles className="w-5 h-5 text-teal-400" />,
    },
    {
      title: 'Simbol Hati Aesthetic',
      path: '/simbol/hati',
      desc: 'Koleksi 150+ simbol hati ♡ ♥ ʚ♡ɞ untuk profil & couple ID.',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
    },
    {
      title: 'Simbol Keren Hub',
      path: '/simbol',
      desc: 'Direktori ribuan simbol gaming, mahkota, panah & bintang.',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mb-4">
            Generator Game & Font Terkait
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Jelajahi pembuat nama game online dan koleksi simbol estetik lainnya di Tulisan Aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, idx) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
            >
              <Link
                href={item.path}
                className="bg-slate-950/80 border border-slate-800 hover:border-rose-500/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between group transition-all block h-full hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {item.icon}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-rose-300 transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
