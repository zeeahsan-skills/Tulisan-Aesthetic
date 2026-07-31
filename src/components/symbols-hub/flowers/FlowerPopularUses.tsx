'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  MessageSquare,
  Sparkles,
  Heart,
  Type,
  FileText,
  Gift,
} from 'lucide-react';

export const FlowerPopularUses: React.FC = () => {
  const uses = [
    {
      title: 'Instagram Bio',
      desc: 'Hiasi bio Instagram & caption Story Anda dengan kelopak bunga estetik (✿ ❀ 🌸) agar terlihat anggun & menarik.',
      icon: <Camera className="w-5 h-5 text-pink-400" />,
      example: '🌸 Bloom with grace ✿',
    },
    {
      title: 'TikTok Username',
      desc: 'Bikin Display Name TikTok manis & feminim dengan aksen bunga sakura & bunga mawar.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      example: '✿ Sakura Girl 🌸',
    },
    {
      title: 'WhatsApp Status',
      desc: 'Pajang status WA & pesan grup berhiaskan simbol bunga Unicode yang rapi di Android & iPhone.',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      example: '🌹 Life is Beautiful 🌿',
    },
    {
      title: 'Facebook Posts & Pages',
      desc: 'Pemanis judul postingan & deskripsi Fanspage FB olshop kecantikan & fashion.',
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
      example: '✿ NEW SPRING COLLECTION ✿',
    },
    {
      title: 'Discord Nicknames',
      desc: 'Dekorasi nama channel, role server, dan nickname Discord dengan simbol bunga sakura & lotus.',
      icon: <MessageSquare className="w-5 h-5 text-indigo-400" />,
      example: '🌸 ║ BOTANICAL GARDEN 🪷',
    },
    {
      title: 'Wedding Invitations',
      desc: 'Hiasi teks pembuka & nama pengantin pada undangan pernikahan digital (seperti ❦, ❧, 🌸 ─── 🌸).',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      example: '❦ Romeo & Juliet ❦',
    },
    {
      title: 'Greeting Cards',
      desc: 'Tambahkan ornamen floral cantik pada ucapan selamat ulang tahun, kelulusan, dan hari raya.',
      icon: <Gift className="w-5 h-5 text-amber-400" />,
      example: '🌸 Happy Birthday ✿',
    },
    {
      title: 'Decorative Text & Dividers',
      desc: 'Gunakan bunga pembatas garis (✿ ─── ✿ atau 🌸 ─── 🌸) untuk merapikan artikel & catatan.',
      icon: <Type className="w-5 h-5 text-purple-400" />,
      example: '🌸──────────🌸',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Penggunaan Populer Simbol Bunga
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Inspirasi penggunaan simbol bunga & flora Unicode untuk berbagai platform media sosial, undangan, dan dekorasi teks.
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
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:border-rose-500/40 transition-all"
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
                <div className="text-xs font-mono text-rose-300 mt-1 truncate bg-slate-900 px-2 py-1 rounded border border-slate-800">
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
