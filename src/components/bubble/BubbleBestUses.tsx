'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, MessageCircle, MessageSquare, Share2, Gamepad2 } from 'lucide-react';

export function BubbleBestUses() {
  const useCases = [
    {
      title: 'Instagram Bio & Story',
      icon: Camera,
      desc: 'Tingkatkan estetika profil IG Anda dengan huruf melingkar yang menonjol di Bio dan Story Highlight.',
      gradient: 'from-amber-500 via-rose-500 to-purple-600',
    },
    {
      title: 'TikTok Captions & Comments',
      icon: Video,
      desc: 'Raih lebih banyak interaksi komentar dan jadikan caption video TikTok Anda imut serta ramah FYP.',
      gradient: 'from-teal-400 via-pink-500 to-purple-600',
    },
    {
      title: 'WhatsApp Info & Group Chat',
      icon: MessageCircle,
      desc: 'Hiasi teks Info profil WA dan obrolan grup dengan format gelembung lingkar yang aman di Android & iOS.',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Discord Server Roles',
      icon: MessageSquare,
      desc: 'Gunakan font Bubble untuk mempercantik nama channel server dan role member VIP Discord.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Facebook Status & Posts',
      icon: Share2,
      desc: 'Buat postingan Facebook dan pengumuman grup lebih menarik perhatian netizen dengan gaya font gelembung.',
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'Gaming Nicknames',
      icon: Gamepad2,
      desc: 'Custom nickname Free Fire, PUBG Mobile, Roblox, dan MLBB dengan variasi gelembung imut & aesthetic.',
      gradient: 'from-pink-500 to-rose-600',
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
            Penggunaan Terbaik Font Gelembung (Bubble)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan platform sosial media dan game terbaik untuk memamerkan teks Bubble Anda.
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
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between"
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
