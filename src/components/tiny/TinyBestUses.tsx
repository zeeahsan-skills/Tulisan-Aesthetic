'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, MessageSquare, MessageCircle, Share2, Gamepad2 } from 'lucide-react';

export function TinyBestUses() {
  const useCases = [
    {
      title: 'Instagram Bio & Captions',
      icon: Camera,
      desc: 'Tambahkan teks superscript kecil di bio atau keterangan postingan Instagram untuk kesan aesthetic yang rapi.',
      gradient: 'from-amber-500 via-rose-500 to-purple-600',
    },
    {
      title: 'TikTok Username & Comments',
      icon: Video,
      desc: 'Buat nama pengguna TikTok dan balasan komentar terlihat imut, unik, dan menonjol di mata followers.',
      gradient: 'from-teal-400 via-pink-500 to-purple-600',
    },
    {
      title: 'Discord Nickname & Roles',
      icon: MessageSquare,
      desc: 'Custom nama pengguna Discord dan role member server dengan font Small Caps atau superscript mini.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'WhatsApp Status & About',
      icon: MessageCircle,
      desc: 'Percantik Info profil WhatsApp dan status teks harian tanpa risiko teks terpotong atau rusak.',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Facebook Display Name',
      icon: Share2,
      desc: 'Ubah nama tampilan Facebook dan postingan grup agar terlihat menarik perhatian teman.',
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'Gaming Nicknames',
      icon: Gamepad2,
      desc: 'Buat nama akun Free Fire, PUBG Mobile, Roblox, dan MLBB dengan huruf kecil di atas nama utama.',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Best Use Cases
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Penggunaan Terbaik Font Kecil (Tiny Font)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan tempat terbaik untuk menggunakan huruf kecil Unicode di media sosial dan game.
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
