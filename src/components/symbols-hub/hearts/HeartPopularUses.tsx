'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  MessageSquare,
  Sparkles,
  Heart,
  Type,
  Gift,
  Gamepad2,
  Bookmark,
} from 'lucide-react';

export const HeartPopularUses: React.FC = () => {
  const uses = [
    {
      title: 'Instagram Bio & Caption',
      desc: 'Tambahkan simbol hati outline (♡) atau pita hati (ʚ♡ɞ) pada bio profil dan caption foto IG agar tampil estetik & manis.',
      icon: <Camera className="w-5 h-5 text-pink-400" />,
      example: '♡ soft days & sunshine ʚ♡ɞ',
    },
    {
      title: 'TikTok Username & Bio',
      desc: 'Bikin display name TikTok aesthetic yang unik dengan aksen hati Korea (ᰔ) dan border hati imut.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      example: 'ᰔ softie_vibes ᰔ',
    },
    {
      title: 'WhatsApp Info & Status',
      desc: 'Pajang status WA dan pesan cinta manis dengan kombinasi garis detak jantung (ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ).',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      example: 'ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ Forever',
    },
    {
      title: 'Roblox & Game Nickname',
      desc: 'Kombinasikan nickname game dengan sayap hati malaikat untuk karakter aesthetic di Roblox, MLBB, dan FF.',
      icon: <Gamepad2 className="w-5 h-5 text-purple-400" />,
      example: 'ʚ♡ɞ Angelic_Player ʚ♡ɞ',
    },
    {
      title: 'Surat & Kartu Ucapan',
      desc: 'Hiasi teks ucapan ulang tahun, anniversary, dan hari kasih sayang dengan bunga hati klasik (❦ ❧ ♥).',
      icon: <Gift className="w-5 h-5 text-rose-400" />,
      example: '❦ Happy Anniversary My Love ❦',
    },
    {
      title: 'Aesthetic Text Dividers',
      desc: 'Gunakan garis pemisah estetik (♡ ─────── ♡) untuk merapikan catatan Notion, jurnal, atau caption panjang.',
      icon: <Type className="w-5 h-5 text-amber-400" />,
      example: '♡ ─────────────── ♡',
    },
    {
      title: 'Discord Role & Status',
      desc: 'Hias nama channel server, role VIP, dan custom status Discord dengan emoji hati berwarna & kaomoji.',
      icon: <Bookmark className="w-5 h-5 text-indigo-400" />,
      example: '🤍・Sweet Community・🤍',
    },
    {
      title: 'Couple Nickname / Pasangan',
      desc: 'Buat nama akun kembar romantis bersama pasangan dengan simbol hati solid (♥) dan panah asmara (💘).',
      icon: <Heart className="w-5 h-5 text-red-400" />,
      example: 'King ♥ Queen',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Inspirasi Penggunaan Simbol Hati
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Gunakan simbol hati Unicode untuk bio media sosial, nama game, kartu ucapan, dan dekorasi teks aesthetic.
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
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:border-pink-500/40 transition-all"
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
                <div className="text-xs font-mono text-pink-300 mt-1 truncate bg-slate-900 px-2 py-1 rounded border border-slate-800">
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
