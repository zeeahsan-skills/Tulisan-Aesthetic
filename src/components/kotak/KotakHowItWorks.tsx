'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Sparkles, CopyCheck } from 'lucide-react';

export function KotakHowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Ketik Teks Anda',
      desc: 'Masukkan nama gamer, username, atau kata pilihan Anda pada kolom generator di atas.',
      icon: Edit3,
    },
    {
      step: '02',
      title: 'Pilih Gaya Kotak',
      desc: 'Sistem generator secara otomatis membingkai setiap huruf dengan simbol kotak persegi Enclosed Alphanumeric.',
      icon: Sparkles,
    },
    {
      step: '03',
      title: 'Salin & Tempel (Paste)',
      desc: 'Klik tombol "Salin Teks", lalu tempelkan langsung ke Free Fire, Mobile Legends, Discord, TikTok, atau Bio Instagram.',
      icon: CopyCheck,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Cara Kerja Generator
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            3 Langkah Mudah Membuat Font Kotak
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Proses instan tanpa install font aplikasi, 100% gratis selamanya.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;

            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-poppins text-cyan-600/40 dark:text-cyan-400/40">
                      {st.step}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 text-white shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {st.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {st.desc}
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
