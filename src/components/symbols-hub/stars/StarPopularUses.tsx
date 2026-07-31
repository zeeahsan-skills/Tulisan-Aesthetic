'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  MessageSquare,
  Gamepad2,
  Star,
  Type,
  Sparkles,
} from 'lucide-react';

export const StarPopularUses: React.FC = () => {
  const uses = [
    {
      title: 'Instagram Bio',
      desc: 'Hiasi bio Instagram & caption Story Anda dengan bintang aesthetic (★ ✦ ✨) agar terlihat aesthetic & creator pro.',
      icon: <Camera className="w-5 h-5 text-pink-400" />,
      example: '✨ Creator | Aesthetic Vibes ★',
    },
    {
      title: 'TikTok Profile & Captions',
      desc: 'Bikin profil TikTok & deskripsi VT menarik perhatian penonton dengan aksen bintang berkilau.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      example: '✦ Daily Content ✦ ✨',
    },
    {
      title: 'WhatsApp Status & About',
      desc: 'Pajang status WA & pesan grup berhiaskan bintang Unicode yang rapi di semua HP Android & iPhone.',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      example: '★ Busy Work Mode ★',
    },
    {
      title: 'Facebook Posts & Pages',
      desc: 'Penegas judul postingan & deskripsi Fanspage FB agar lebih menonjol di Feed pengguna.',
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
      example: '★ OFFICIAL ANNOUNCEMENT ★',
    },
    {
      title: 'Discord Server Roles & Names',
      desc: 'Dekorasi nama channel, role VIP server, dan nickname Discord dengan simbol bintang pro.',
      icon: <MessageSquare className="w-5 h-5 text-indigo-400" />,
      example: '★ ║ VIP MEMBER ✦',
    },
    {
      title: 'Gaming Nicknames (FF, MLBB, PUBG)',
      icon: <Gamepad2 className="w-5 h-5 text-amber-400" />,
      desc: 'Apit nama akun game Anda dengan bintang petir & bintang solid ala pro player turnamen.',
      example: '★ ꧁༺NINJA༻꧂ ★',
    },
    {
      title: 'Product & Testimonial Ratings',
      desc: 'Salin 5 bintang rating (★★★★★ atau ★★★★☆) untuk postingan review olshop & jualan.',
      icon: <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />,
      example: 'Rating: ★★★★★ (5.0)',
    },
    {
      title: 'Decorative Text & Dividers',
      desc: 'Gunakan bintang pembatas garis (★─☆ atau ✧───✧) untuk mempercantik paragraf artikel.',
      icon: <Type className="w-5 h-5 text-purple-400" />,
      example: '★──────────★',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Penggunaan Populer Simbol Bintang
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Inspirasi penggunaan simbol bintang Unicode untuk berbagai platform media sosial, game, dan kreasi konten.
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
