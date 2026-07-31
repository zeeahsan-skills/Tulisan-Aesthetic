'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, MessageSquare, MessageCircle, Share2, Gamepad2, Flame, Shield } from 'lucide-react';

export function NamaKerenBestUses() {
  const useCases = [
    {
      title: 'Free Fire (FF Nickname)',
      icon: Flame,
      desc: 'Buat nama akun Free Fire aesthetic bertema sayap, mahkota, dan simbol klan untuk tampil garang di Lobby.',
      gradient: 'from-orange-500 to-rose-600',
    },
    {
      title: 'Mobile Legends (MLBB Nickname)',
      icon: Gamepad2,
      desc: 'Format nama akun Mobile Legends dengan font Small Caps, Gothic, atau tulisan sambung bergaya Mythic.',
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'PUBG Mobile Clan Tag',
      icon: Shield,
      desc: 'Tambahkan simbol bendera, bintang, dan font tebal pada nama akun dan tag squad PUBG Mobile Anda.',
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      title: 'Instagram Bio & Name',
      icon: Camera,
      desc: 'Perindah tampilan Bio Instagram dan nama profil utama agar memikat perhatian pengunjung baru.',
      gradient: 'from-amber-500 via-rose-500 to-purple-600',
    },
    {
      title: 'TikTok Username & Bio',
      icon: Video,
      desc: 'Tingkatkan jumlah pengikut TikTok dengan mengonversi nama akun biasa menjadi tulisan cantik estetik.',
      gradient: 'from-teal-400 via-pink-500 to-purple-600',
    },
    {
      title: 'Discord Profile & Role Server',
      icon: MessageSquare,
      desc: 'Beri karakter khas pada nama pengguna Discord, status About Me, dan nama role server komunitas Anda.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'WhatsApp Status & Contact Info',
      icon: MessageCircle,
      desc: 'Hiasi pesan status WA dan nama kontak obrolan Anda agar tampil unik di aplikasi obrolan.',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Facebook Name & Page',
      icon: Share2,
      desc: 'Percantik nama Halaman Facebook jualan atau akun pribadi dengan gaya huruf berkelas.',
      gradient: 'from-blue-600 to-indigo-700',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            Best Use Cases
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Dukungan Lintas Platform Game & Sosial Media
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Gunakan nama keren buatan Anda tanpa kendala di aplikasi dan game terpopuler.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;

            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 w-12 h-12 rounded-2xl bg-gradient-to-tr ${uc.gradient} text-white shadow-md flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {uc.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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
