'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Swords, Zap, Award } from 'lucide-react';

export function GameImportanceSection() {
  const importanceItems = [
    {
      icon: Award,
      title: 'Esports Personal Branding',
      desc: 'Nama akun game adalah identitas utama Anda di papan peringkat (Leaderboard). Nickname pro player yang rapi dan estetis meningkatkan rasa percaya diri saat bertanding.',
    },
    {
      icon: Swords,
      title: 'Identitas Clan & Squad',
      desc: 'Kombinasi simbol mahkota atau tag clan khusus menyatukan penampilan seluruh anggota tim saat turnamen resmi maupun mabar harian.',
    },
    {
      icon: Shield,
      title: 'Dampak Kill Feed Interaktif',
      desc: 'Saat nama akun Anda muncul di pemberitahuan eliminasi (Kill Feed), nama yang unik dan gahar memberikan daya tarik visual bagi penonton dan lawan.',
    },
    {
      icon: Zap,
      title: 'Mudah Dikenali Fans & Content Creator',
      desc: 'Nickname yang estetis dan konsisten di TikTok Gaming, YouTube, maupun Instagram memudahkan pengikut mengenali akun game resmi Anda.',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Esports Gaming Identity
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Mengapa Nickname Game Begitu Penting?
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Dalam dunia permainan kompetitif, nickname bukan sekadar kumpulan huruf, melainkan identitas digital yang mencerminkan gaya bertarung, reputasi squad, dan karakter pro player.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {importanceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
