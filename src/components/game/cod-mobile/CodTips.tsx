'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, AlignLeft, Users, Lightbulb } from 'lucide-react';

export const CodTips: React.FC = () => {
  const tips = [
    {
      title: 'Batas Karakter Nickname CODM (Maksimal 14 Karakter)',
      icon: <AlignLeft className="w-5 h-5 text-orange-400" />,
      desc: 'Call of Duty: Mobile menetapkan batas panjang nama maksimal 14 karakter. Perhatikan bahwa beberapa simbol Unicode berukuran ganda dapat memakan 2 slot karakter.',
    },
    {
      title: 'Ide Format Tag Clan & Squad Esports',
      icon: <Users className="w-5 h-5 text-amber-400" />,
      desc: 'Gunakan kurung khusus seperti 『TAG』, ⦇TAG⦈, atau pembatas titik tengah (•) untuk membuat nama clan terlihat rapi seperti pro player kejuaraan dunia.',
    },
    {
      title: 'Kompatibilitas Unicode & Activision Client',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      desc: 'Seluruh simbol dan gaya font pada generator kami diuji secara langsung di Android & iOS client agar tidak memicu kotak putih (?) atau crash.',
    },
    {
      title: 'Keterbacaan Nama di Kill Feed & Scoreboard',
      icon: <CheckCircle2 className="w-5 h-5 text-cyan-400" />,
      desc: 'Pilih kombinasi font Unicode seperti Small Caps atau Bold Gothic yang tetap tegas terbaca saat mencetak eliminasi (Kill Feed) di dalam pertandingan MP & BR.',
    },
    {
      title: 'Tips Ide Username Unik Bebas Pasaran',
      icon: <Lightbulb className="w-5 h-5 text-yellow-400" />,
      desc: 'Tambahkan simbol militer seperti tengkorak (💀), petir (⚡), atau kanji Jepang di awal/akhir nama agar akun Anda terlihat berbeda.',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Tips Membuat Nickname COD Mobile Keren
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Panduan lengkap agar nickname CODM Anda terlihat taktis, profesional, unik, dan memenuhi standar game Activision.
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
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-orange-500/40 transition-all"
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
