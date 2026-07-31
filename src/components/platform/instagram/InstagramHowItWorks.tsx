'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Sparkles, Copy, CheckCircle2 } from 'lucide-react';

export function InstagramHowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Edit3,
      title: 'Ketik Bio / Caption Instagram',
      desc: 'Masukkan kalimat bio, username, atau caption yang ingin Anda ubah pada kolom generator di atas.',
    },
    {
      number: '02',
      icon: Sparkles,
      title: 'Pilih Variasi Font Aesthetic',
      desc: 'Sistem Unicode engine secara instan mengubah teks Anda ke puluhan gaya font Instagram estetik (Small Caps, Cursive, Gothic, Bubble, dll).',
    },
    {
      number: '03',
      icon: Copy,
      title: 'Klik Tombol Salin Teks',
      desc: 'Tekan tombol "Salin Teks" pada variasi font pilihan Anda. Teks estetik akan langsung tersalin ke clipboard HP atau laptop.',
    },
    {
      number: '04',
      icon: CheckCircle2,
      title: 'Tempel (Paste) di Instagram',
      desc: 'Buka aplikasi Instagram, masuk ke Edit Profil > Bio / Nama, lalu tempelkan teks tersebut dan simpan perubahan!',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Cara Menggunakan{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Instagram Font Generator
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            4 langkah praktis membuat tulisan aesthetic untuk profil Instagram dalam waktu kurang dari 5 detik.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/20 shadow-lg flex flex-col justify-between group hover:border-pink-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-poppins">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {step.desc}
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
