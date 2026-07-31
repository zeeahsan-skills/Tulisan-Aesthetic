'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  MessageSquare,
  Gamepad2,
  Crown,
  Sparkles,
  Users,
  Gem,
} from 'lucide-react';

export const CrownPopularUses: React.FC = () => {
  const uses = [
    {
      title: 'Instagram Bio',
      desc: 'Tambahkan mahkota emas & catur (♛ 👑) di bio Instagram agar profil Anda terlihat VIP & berkelas.',
      icon: <Camera className="w-5 h-5 text-pink-400" />,
      example: '👑 QUEEN OF MY WORLD ♛',
    },
    {
      title: 'TikTok Username',
      desc: 'Bikin Display Name TikTok tampil mencolok dengan mahkota raja & tiara di Feed VT.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      example: '♛ Royal Creator ♛',
    },
    {
      title: 'WhatsApp Status',
      desc: 'Pajang status WA & pesan grup berhiaskan simbol mahkota mewah yang kompatibel di Android & iPhone.',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      example: '👑 King Mindset Only 👑',
    },
    {
      title: 'Facebook Name & Page',
      desc: 'Ganti nama profil Facebook atau Fanspage dengan simbol mahkota untuk kesan profesional.',
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
      example: '♛ OFFICIAL STORE 👑',
    },
    {
      title: 'Discord Nickname & Roles',
      desc: 'Hiasi role VIP server, nama channel, dan nickname Discord dengan simbol mahkota raja & catur.',
      icon: <MessageSquare className="w-5 h-5 text-indigo-400" />,
      example: '👑 ║ SERVER OWNER ♛',
    },
    {
      title: 'Gaming Nicknames (FF, MLBB, PUBG)',
      icon: <Gamepad2 className="w-5 h-5 text-amber-400" />,
      desc: 'Apit nama akun game Anda dengan mahkota (꧁👑꧂ / 亗 👑 亗) ala Conqueror & Mythic Immortal.',
      example: '꧁👑༻NINJA༺👑꧂',
    },
    {
      title: 'Clan Names & Tags',
      desc: 'Buat tag clan esports (seperti 『👑TAG』) berhiaskan mahkota untuk tim turnamen profesional.',
      icon: <Users className="w-5 h-5 text-rose-400" />,
      example: '『👑』ESPORTS TEAM',
    },
    {
      title: 'Luxury Branding',
      desc: 'Gunakan simbol mahkota & fleur-de-lis (⚜️ 💎) untuk branding bisnis olshop & produk premium.',
      icon: <Gem className="w-5 h-5 text-purple-400" />,
      example: '⚜️ LUXURY BOUTIQUE 💎',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Penggunaan Populer Simbol Mahkota
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Inspirasi penggunaan simbol mahkota & kekaisaran Unicode untuk berbagai platform media sosial, game, dan kreasi branding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uses.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:border-amber-500/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60">
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Contoh:</span>
                <div className="text-xs font-mono text-amber-300 mt-1 truncate bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  {item.example}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
