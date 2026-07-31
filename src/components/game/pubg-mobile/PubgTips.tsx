'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

export function PubgTips() {
  const tipsList = [
    {
      title: 'Batas Maksimal 14 Karakter',
      icon: ShieldCheck,
      desc: 'PUBG Mobile membatasi panjang nickname hingga 14 karakter. Pastikan kombinasi teks dan simbol pilihan Anda pas saat divalidasi di form Rename Card.',
    },
    {
      title: 'Font Kapital Mini (Small Caps)',
      icon: Eye,
      desc: 'Gunakan variasi huruf Small Caps atau Bold Sans-Serif agar nama klan & nickname Anda sangat mudah dibaca di layar kill feed dan papan peringkat saat siaran langsung.',
    },
    {
      title: 'Kompatibilitas Simbol Jepang & Mahkota',
      icon: Sparkles,
      desc: 'Simbol Jepang khas PUBG seperti 乂, 帝, 乡, 父, 亗, serta mahkota 👑 didukung 100% di game tanpa risiko berubah menjadi karakter kotak (tofu).',
    },
    {
      title: 'Spasi Transparan Khas PUBG',
      icon: CheckCircle2,
      desc: 'Karena spasi keyboard biasa ditolak oleh PUBG Mobile, gunakan karakter spasi transparan khusus dari generator kami untuk memberikan jarak antar kata.',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Panduan & Tips
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Tips Membuat Nickname PUBG Mobile Terbaik
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui panduan mengombinasikan simbol klan, spasi transparan, dan font unik agar nama Anda ikonik.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tipsList.map((tip, idx) => {
            const Icon = tip.icon;

            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-amber-900/20 hover:border-amber-500/50 transition flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-sm flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {tip.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {tip.desc}
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
