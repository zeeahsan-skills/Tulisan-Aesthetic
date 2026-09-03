'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export function ValorantTips() {
  const tips = [
    {
      title: 'Perhatikan Batas Karakter (3-16)',
      desc: 'Nama Game Riot ID maksimal 16 karakter. Hindari nama yang terlalu panjang agar tidak terpotong saat ditampilkan di UI match Valorant.',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Pilih Tagline Unik (#TAG)',
      desc: 'Tagline alfanumerik 3-5 karakter di belakang nama Anda (misal #SEA, #VLR, #001) memungkinkan Anda menggunakan nama game yang sama dengan pro player.',
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: 'Ingat Cooldown 90 Hari',
      desc: 'Riot Games menerapkan jeda 90 hari setelah setiap kali ganti nama. Pastikan Anda benar-benar yakin dengan pilihan nama sebelum menyimpannya.',
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Gunakan Simbol yang Terbaca Jelas',
      desc: 'Simbol seperti //, ╳, ⚡, 亗, dan huruf katakana terbaca sangat tajam di killfeed dan papan skor tanpa bug karakter kotak-kotak.',
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mb-4">
            Tips Membuat Riot ID Valorant Keren
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Panduan penting agar nickname Valorant Anda terlihat profesional, mudah diingat, dan sesuai regulasi Riot Games.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((t, idx) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4">
                  {t.icon}
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-2">{t.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
