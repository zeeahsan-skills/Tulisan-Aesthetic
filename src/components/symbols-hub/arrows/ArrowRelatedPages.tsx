'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Star, Crown, Flower2, Smile, Type } from 'lucide-react';

export const ArrowRelatedPages: React.FC = () => {
  const links = [
    {
      title: 'Simbol Keren Hub',
      path: '/simbol',
      desc: 'Direktori utama ribuan simbol Unicode & kaomoji estetik.',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    },
    {
      title: 'Heart Symbols (Simbol Hati)',
      path: '/simbol/hati',
      desc: 'Koleksi simbol hati estetik ♡ ♥ ❥ ❣ untuk bio & pesan.',
      icon: <Heart className="w-5 h-5 text-pink-400" />,
    },
    {
      title: 'Star Symbols (Simbol Bintang)',
      path: '/simbol/bintang',
      desc: 'Koleksi simbol bintang ★ ☆ ✦ ✨ 🌟 150+ variasi.',
      icon: <Star className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Crown Symbols (Simbol Mahkota)',
      path: '/simbol/mahkota',
      desc: 'Koleksi simbol mahkota raja & ratu ♛ ♔ 👑 untuk nickname.',
      icon: <Crown className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: 'Flower Symbols (Simbol Bunga)',
      path: '/simbol/bunga',
      desc: 'Koleksi simbol bunga sakura & kelopak ✿ ❀ 🌸 estetik.',
      icon: <Flower2 className="w-5 h-5 text-rose-400" />,
    },
    {
      title: 'Emoji & Kaomoji Aesthetic',
      path: '/simbol',
      desc: 'Emotikon teks kaomoji & emoji estetik 1-klik copy.',
      icon: <Smile className="w-5 h-5 text-teal-400" />,
    },
    {
      title: 'Generator Huruf Keren',
      path: '/font/huruf-keren',
      desc: 'Konversi abjad & huruf latin menjadi gaya font unik.',
      icon: <Type className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Halaman Simbol & Generator Terkait
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Jelajahi koleksi simbol estetik dan generator nama keren lainnya di Tulisan Aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, idx) => (
            <motion.div
              key={item.path + idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
            >
              <Link
                href={item.path}
                className="bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between group transition-all block h-full hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {item.icon}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1.5">
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
};
