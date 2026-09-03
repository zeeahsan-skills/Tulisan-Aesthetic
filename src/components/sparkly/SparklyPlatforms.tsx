'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MessageSquare, Sparkles, Bookmark } from 'lucide-react';

const TwitterXIcon = () => (
  <svg className="w-5 h-5 fill-current text-blue-400" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function SparklyPlatforms() {
  const platforms = [
    {
      title: 'Instagram Bio & Story',
      desc: 'Tambahkan efek kilau bintang pada bio profil, nama display, dan caption Story IG untuk estetika visual yang manis dan feminin.',
      icon: <Camera className="w-5 h-5 text-pink-400" />,
      example: '✧･ﾟ:* angelic soul *:･ﾟ✧',
    },
    {
      title: 'TikTok Username & Caption',
      desc: 'Tingkatkan daya tarik profil TikTok Anda dengan nama pengguna bercorak glitter dan caption aesthetic yang gampang FYP.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      example: 'ੈ✩‧₊˚ starlight_vibes ˚₊‧✩ੈ',
    },
    {
      title: 'WhatsApp Status & Info',
      desc: 'Bikin pesan romantis, kutipan bijak, dan info profil WhatsApp tampil beda dengan hiasan stardust Unicode yang rapi.',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      example: '🪄₊˚⊹♡ magical moments ♡⊹˚₊🪄',
    },
    {
      title: 'Twitter / X Tweets & Bio',
      desc: 'Hiasi bio akun X dan tweet harian dengan simbol bulan sabit dan bintang estetik yang elegan.',
      icon: <TwitterXIcon />,
      example: '⋆⁺₊⋆ ☾ midnight dreamer ⋆⁺₊⋆',
    },
    {
      title: 'Discord Server & Roles',
      desc: 'Gunakan font sparkly untuk nama channel pengumuman, nama role VIP, dan custom status pengguna server Discord.',
      icon: <Bookmark className="w-5 h-5 text-indigo-400" />,
      example: '✨・stardust-lounge・✨',
    },
  ];

  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Gunakan Sparkly Font di Berbagai Platform
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Kompatibel 100% dengan aplikasi media sosial, perpesanan, dan komunitas favorit Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-teal-500/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{p.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{p.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/60">
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Contoh:</span>
                <div className="text-xs font-mono text-teal-300 mt-1 truncate bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
                  {p.example}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
