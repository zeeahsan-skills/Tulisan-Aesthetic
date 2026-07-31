'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Wand2, Copy, CheckCircle2 } from 'lucide-react';

export function FreeFireHowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Masukkan Nama FF',
      icon: Edit3,
      desc: 'Ketik nama akun atau kata-kata yang ingin Anda jadikan nickname Free Fire di kolom generator di atas.',
    },
    {
      num: '02',
      title: 'Pilih Simbol & Font',
      icon: Wand2,
      desc: 'Sistem generator kami secara otomatis (<10ms) akan mengombinasikan teks Anda dengan simbol sayap dan font Unicode.',
    },
    {
      num: '03',
      title: 'Salin Hasil Nickname',
      icon: Copy,
      desc: 'Klik tombol "Salin Nama" pada hasil gaya font aesthetic yang Anda sukai untuk menyimpan ke clipboard.',
    },
    {
      num: '04',
      title: 'Tempelkan di Free Fire',
      icon: CheckCircle2,
      desc: 'Buka game Free Fire, masuk ke Profil > Change Name, lalu paste teks tersebut dan konfirmasi.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Cara Kerja Simple
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            4 Langkah Membuat Nama Free Fire Keren
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Proses kilat tanpa aplikasi tambahan, 100% aman, dan gratis selamanya.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;

            return (
              <motion.div
                key={st.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-amber-900/20 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-amber-600 dark:text-amber-400 font-poppins opacity-40">
                      {st.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Icon className="w-5 h-5" />
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
