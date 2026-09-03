'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Type, Flame, Crosshair, Swords, MessageSquare, Sparkles } from 'lucide-react';

export const RobloxRelatedPages: React.FC = () => {
  const links = [
    {
      title: 'Generator Huruf Keren',
      path: '/font/huruf-keren',
      desc: 'Konversi abjad & huruf latin menjadi gaya font unik.',
      icon: <Type className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Generator Nama Keren',
      path: '/font/nama-keren',
      desc: 'Pembuat nickname estetik umum untuk seluruh platform.',
      icon: <Sparkles className="w-5 h-5 text-teal-400" />,
    },
    {
      title: 'Discord Font Generator',
      path: '/platform/discord',
      desc: 'Font keren untuk server Discord, role & chat room.',
      icon: <MessageSquare className="w-5 h-5 text-blue-400" />,
    },
    {
      title: 'Free Fire Name Generator',
      path: '/free-fire',
      desc: 'Nickname FF keren berornamen payung & mahkota.',
      icon: <Flame className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'PUBG Mobile Name Generator',
      path: '/pubg-mobile',
      desc: 'Nickname PUBG Conqueror & Tag Clan Esports.',
      icon: <Crosshair className="w-5 h-5 text-rose-400" />,
    },
    {
      title: 'Mobile Legends Name Generator',
      path: '/mobile-legends',
      desc: 'Nickname MLBB Mythic Immortal & Squad VIP.',
      icon: <Swords className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Halaman Generator & Font Terkait
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Eksplorasi alat generator nama & gaya font estetik lainnya di Tulisan Aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between group transition-all block h-full hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      {item.icon}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors mb-1.5">
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
