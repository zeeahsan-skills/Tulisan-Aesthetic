'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Copy, CheckCircle } from 'lucide-react';

export const SymbolsHowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Cari & Filter Simbol',
      desc: 'Gunakan kolom pencarian atau pilih salah satu dari 12 kategori simbol estetik yang tersedia.',
      icon: <Search className="w-6 h-6 text-purple-400" />,
    },
    {
      step: '02',
      title: 'Pilih Simbol Favorit',
      desc: 'Ketuk pada simbol individual atau kumpulkan beberapa simbol sekaligus pada baris penyalinan.',
      icon: <Sparkles className="w-6 h-6 text-pink-400" />,
    },
    {
      step: '03',
      title: 'Salin 1-Klik (Copy)',
      desc: 'Simbol akan secara otomatis tersimpan di clipboard HP/komputer Anda dengan pemberitahuan toast.',
      icon: <Copy className="w-6 h-6 text-cyan-400" />,
    },
    {
      step: '04',
      title: 'Tempel di Aplikasi & Game',
      desc: 'Tempelkan (Paste) simbol di bio Instagram, TikTok, WhatsApp, Discord, atau nickname game Anda.',
      icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Cara Menggunakan Simbol Keren Hub
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            4 langkah praktis menyalin dan menggunakan simbol Unicode estetik di seluruh platform media sosial dan game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-3 -right-3 text-5xl font-black text-slate-800/40 select-none font-mono">
                {s.step}
              </div>

              <div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
