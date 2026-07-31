'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, AlignLeft, Sparkles, Lightbulb } from 'lucide-react';

export const RobloxTips: React.FC = () => {
  const tips = [
    {
      title: 'Batas Karakter Roblox (3 hingga 20 Karakter)',
      icon: <AlignLeft className="w-5 h-5 text-emerald-400" />,
      desc: 'Roblox menetapkan panjang Display Name minimal 3 karakter dan maksimal 20 karakter. Pastikan jumlah simbol tidak melebihi batas sistem.',
    },
    {
      title: 'Perbedaan Username (@username) & Display Name',
      icon: <Sparkles className="w-5 h-5 text-teal-400" />,
      desc: 'Username akun bersifat permanen & unik untuk login. Sedangkan Display Name adalah nama publik yang mendukung font Unicode estetik dan bisa diganti gratis setiap 7 hari.',
    },
    {
      title: 'Kompatibilitas Font Unicode di Game Engine',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      desc: 'Gunakan variasi font Unicode standar (seperti Small Caps & Gothic) agar nama Anda tampil sempurna di seluruh game Roblox tanpa memicu tanda sensor (###).',
    },
    {
      title: 'Keterbacaan Nama di Leaderboard & Chat Window',
      icon: <CheckCircle2 className="w-5 h-5 text-blue-400" />,
      desc: 'Pilih kombinasi simbol yang seimbang agar nama Anda tetap mudah dibaca oleh teman satu tim di layar papan skor Blox Fruits, Adopt Me, & Brookhaven.',
    },
    {
      title: 'Tips Ide Nama Unik Bebas Pasaran',
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      desc: 'Kombinasikan kata favorit dengan kanji Jepang (乂, 帝) atau mahkota kecil di awal & akhir nama agar tampilan akun Anda lebih berkelas.',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Tips Membuat Roblox Display Name Keren
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Panduan lengkap agar Roblox Display Name Anda terlihat unik, tidak kena sensor filter, dan mudah diingat oleh pemain lain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, idx) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-emerald-500/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {tip.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{tip.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
