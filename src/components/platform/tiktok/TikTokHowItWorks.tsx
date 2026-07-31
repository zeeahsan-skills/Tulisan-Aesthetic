'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Type, Copy, CheckCircle2 } from 'lucide-react';

export function TikTokHowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Ketik Teks TikTok Anda',
      desc: 'Tulis atau tempel teks nama tampilan, bio, atau caption video yang ingin diubah pada kolom input generator di atas.',
      icon: Type,
    },
    {
      step: '02',
      title: 'Pilih & Salin Gaya Font',
      desc: 'Pilih gaya Unicode pilihan Anda dari hasil pratinjau langsung, lalu klik tombol "Salin Font".',
      icon: Copy,
    },
    {
      step: '03',
      title: 'Tempel di Aplikasi TikTok',
      desc: 'Buka aplikasi TikTok > Edit Profil > Tempel teks estetik tersebut pada kolom Nama atau Bio dan simpan!',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Cara Menggunakan{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Generator Font TikTok
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Hanya butuh 3 langkah sederhana dan cepat tanpa perlu aplikasi tambahan.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-cyan-500 font-poppins">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
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
