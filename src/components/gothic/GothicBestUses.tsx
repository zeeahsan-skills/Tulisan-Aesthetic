'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, MessageSquare, Camera, BookOpen, ShieldAlert, Radio } from 'lucide-react';

export function GothicBestUses() {
  const useCases = [
    {
      title: 'Gaming Nicknames',
      icon: Gamepad2,
      desc: 'Buat nama akun Free Fire, PUBG Mobile, MLBB, dan Valorant terlihat tangguh & tak terkalahkan dengan tulisan Gothic.',
      gradient: 'from-amber-500 to-red-600',
    },
    {
      title: 'Discord Roles & Channels',
      icon: MessageSquare,
      desc: 'Hiasi nama server, role member VIP, dan nama channel Discord dengan font Fraktur bergaya kerajaan abad pertengahan.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Instagram Bio & Highlights',
      icon: Camera,
      desc: 'Ubah teks Bio Instagram dan judul Story Highlight menjadi estetik, elegan, dan menonjol dibanding akun biasa.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Fantasy Stories & Novel',
      icon: BookOpen,
      desc: 'Sangat cocok untuk penulis cerita fiksi fantasi di Wattpad / Webtoon untuk judul bab, nama karakter, dan mantra rahasia.',
      gradient: 'from-purple-600 to-indigo-700',
    },
    {
      title: 'Medieval Clan Logos',
      icon: ShieldAlert,
      desc: 'Desain teks watermark logo guild, simbol clan esports, dan kaos distro bertema vintage Blackletter.',
      gradient: 'from-slate-700 to-slate-900',
    },
    {
      title: 'Streaming Profiles',
      icon: Radio,
      desc: 'Percantik tampilan banner overlay Twitch, YouTube Gaming, dan TikTok Live dengan identitas visual Gothic unik.',
      gradient: 'from-fuchsia-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
            Best Use Cases
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Penggunaan Terbaik Font Gothic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan tempat terbaik untuk menggunakan huruf Gothic dan Fraktur Unicode.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;

            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 w-12 h-12 rounded-2xl bg-gradient-to-tr ${uc.gradient} text-white shadow-md flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {uc.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {uc.desc}
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
