'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Mail, Heart, MessageSquare, Video, Quote } from 'lucide-react';

export function TerhubungBestUses() {
  const useCases = [
    {
      title: 'Instagram Bio & Story',
      icon: Camera,
      desc: 'Buat profil Bio Instagram Anda tampak anggun dan estetik dengan teks tulisan tangan latin sambung.',
      gradient: 'from-amber-500 via-rose-500 to-purple-600',
    },
    {
      title: 'Undangan Pernikahan (Invitations)',
      icon: Mail,
      desc: 'Format nama pasangan pengantin dan teks undangan pernikahan online dengan gaya script indah.',
      gradient: 'from-fuchsia-600 to-pink-600',
    },
    {
      title: 'Kartu Ucapan (Greeting Cards)',
      icon: Heart,
      desc: 'Tuliskan ucapan selamat ulang tahun, anniversary, dan hari raya dengan tulisan kaligrafi manis.',
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      title: 'Discord Profile & Status',
      icon: MessageSquare,
      desc: 'Hiasi kolom About Me profil Discord Anda dengan teks gaya signature yang berkelas.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'TikTok Captions & POV',
      icon: Video,
      desc: 'Gunakan font sambung mengalir pada caption video TikTok bertema percintaan dan puisi harian.',
      gradient: 'from-teal-400 via-pink-500 to-purple-600',
    },
    {
      title: 'Stylish Quotes & Story',
      icon: Quote,
      desc: 'Perindah kutipan kata-kata bijak, cerita WhatsApp, dan postingan kata mutiara dengan font tulisan tangan.',
      gradient: 'from-purple-600 to-indigo-700',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-bold uppercase tracking-wider text-fuchsia-600 dark:text-fuchsia-400">
            Best Use Cases
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Penggunaan Terbaik Font Terhubung
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan cara kreatif menggunakan teks tulisan sambung Unicode di sosial media dan desain pesan.
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
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 hover:border-fuchsia-500/50 dark:hover:border-fuchsia-500/50 transition-all duration-300 flex flex-col justify-between"
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
