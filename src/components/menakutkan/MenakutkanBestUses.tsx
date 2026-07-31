'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, MessageSquare, Skull, Video, PlayCircle, BookOpen } from 'lucide-react';

export function MenakutkanBestUses() {
  const useCases = [
    {
      title: 'Gaming Nicknames (Free Fire & MLBB)',
      icon: Gamepad2,
      desc: 'Buat nama akun game Free Fire, PUBG Mobile, Roblox, dan MLBB terlihat ditakuti musuh dengan gaya Zalgo.',
      gradient: 'from-rose-600 to-red-700',
    },
    {
      title: 'Discord Profiles & Role Names',
      icon: MessageSquare,
      desc: 'Hiasi nama profil Discord dan nama channel server bertema horor atau gaming guild dengan teks glitch.',
      gradient: 'from-indigo-600 to-purple-800',
    },
    {
      title: 'Halloween & Horror Posts',
      icon: Skull,
      desc: 'Tingkatkan atmosfer serem pada postingan perayaan Halloween, acara rumah hantu, dan konten mistis.',
      gradient: 'from-amber-600 via-rose-600 to-purple-900',
    },
    {
      title: 'TikTok Captions & POV Horor',
      icon: Video,
      desc: 'Tambahkan teks glitch di caption video cerpen horor TikTok untuk memicu rasa penasaran dan interaksi penonton.',
      gradient: 'from-teal-500 via-rose-600 to-purple-700',
    },
    {
      title: 'YouTube Titles & Thumbnails',
      icon: PlayCircle,
      desc: 'Percantik judul video narasi horor, penelusuran tempat angker, atau livestream gaming malam Jumat.',
      gradient: 'from-red-600 to-rose-700',
    },
    {
      title: 'Fantasy Stories & RPG Lore',
      icon: BookOpen,
      desc: 'Tuliskan mantra sihir jahat, nama monster, dan narasi novel cerita fantasi dengan teks distorted.',
      gradient: 'from-purple-700 to-slate-900',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Best Use Cases
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Penggunaan Terbaik Font Menakutkan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan tempat terbaik untuk menggunakan teks Zalgo & Glitch Unicode di media sosial dan game.
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
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 hover:border-rose-500/50 dark:hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between"
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
