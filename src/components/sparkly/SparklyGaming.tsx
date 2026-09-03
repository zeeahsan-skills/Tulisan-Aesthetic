'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Flame, Shield } from 'lucide-react';

export function SparklyGaming() {
  const games = [
    {
      title: 'Roblox Username & Display Name',
      desc: 'Bikin display name Roblox aesthetic dengan ornamen bintang kecil dan pita yang viral di kalangan pemain Bloxburg dan Royale High.',
      icon: <Gamepad2 className="w-5 h-5 text-pink-400" />,
      example: '୨୧ ₊˚. 𝓈𝓉𝒶𝓇𝓁𝒾𝑔𝒽𝓉 .˚₊ ୨୧',
    },
    {
      title: 'Free Fire (FF) Nickname',
      desc: 'Kombinasikan simbol sayap kilau dan font bold untuk nickname pemain pro yang tetap stylish di match dan leaderboard.',
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      example: '*ੈ✩‧₊˚ ꧁༺SPARKLE༻꧂ ˚₊‧✩*',
    },
    {
      title: 'Mobile Legends (MLBB)',
      desc: 'Hiasi nama akun dan nama squad MLBB dengan kilau diamond dan bracket mewah agar terlihat eksklusif.',
      icon: <Trophy className="w-5 h-5 text-blue-400" />,
      example: '💎✨ ＭＹＴＨＩＣ ✨💎',
    },
    {
      title: 'Valorant & Steam Gamer Tag',
      desc: 'Tambahkan nuansa celestial minimalis pada display tag gaming PC untuk karakter Jett, Sage, atau Reyna.',
      icon: <Shield className="w-5 h-5 text-rose-400" />,
      example: '⋆｡°✩ ʀᴀᴅɪᴀɴᴛ ✩°｡⋆',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Sparkly Font untuk Nickname Game
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bikin akun game online Anda tampil beda dan menarik perhatian lawan main dengan nickname berkilau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-teal-500/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {g.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{g.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{g.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/60">
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Contoh IGN:</span>
                <div className="text-xs font-mono text-teal-300 mt-1 truncate bg-slate-900 px-3 py-1.5 rounded border border-slate-800">
                  {g.example}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
