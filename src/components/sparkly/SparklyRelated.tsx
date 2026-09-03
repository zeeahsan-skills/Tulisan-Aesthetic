'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Type, Star, Heart, Flame } from 'lucide-react';

export function SparklyRelated() {
  const links = [
    {
      title: 'Font Berkilau Generator',
      path: '/font/berkilau',
      desc: 'Hiasi teks dengan bintang klasik ✨ dan kilau glitter.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Font Miring & Kursif',
      path: '/font/miring-kursif',
      desc: 'Konversi teks menjadi tulisan sambung dan kaligrafi miring.',
      icon: <Type className="w-5 h-5 text-pink-400" />,
    },
    {
      title: 'Tiny Text & Small Caps',
      path: '/font/tiny',
      desc: 'Huruf mini superscript dan tulisan kecil aesthetic.',
      icon: <Type className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: 'Huruf Keren Generator',
      path: '/font/huruf-keren',
      desc: '50 gaya abjad aesthetic terlengkap siap copy-paste.',
      icon: <Sparkles className="w-5 h-5 text-teal-400" />,
    },
    {
      title: 'Simbol Bintang (Stars)',
      path: '/simbol/bintang',
      desc: 'Koleksi 150+ simbol bintang Unicode ★ ☆ ✦ ✨ 🌟.',
      icon: <Star className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: 'Simbol Hati (Hearts)',
      path: '/simbol/hati',
      desc: 'Koleksi simbol hati estetik ♡ ♥ ❥ ❣ ʚ♡ɞ.',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
    },
    {
      title: 'Roblox Username Generator',
      path: '/roblox',
      desc: 'Buat nama Roblox imut dengan kaomoji dan simbol hati.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Valorant Nickname Generator',
      path: '/valorant',
      desc: 'Buat nama akun Valorant dan Riot ID keren & aesthetic.',
      icon: <Flame className="w-5 h-5 text-red-400" />,
    },
  ];

  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Gaya Font & Generator Terkait
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Temukan koleksi variasi generator font aesthetic dan simbol estetik lainnya.
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
                className="bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between group transition-all block h-full hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      {item.icon}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-teal-300 transition-colors mb-1.5">
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
