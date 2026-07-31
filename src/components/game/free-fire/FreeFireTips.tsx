'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

export function FreeFireTips() {
  const tipsList = [
    {
      title: 'Batas Maksimal 12 Karakter',
      icon: ShieldCheck,
      desc: 'Garena Free Fire membatasi nickname hingga maksimal 12 karakter. Pastikan teks dan simbol pilihan Anda tidak melebihi batas agar dapat dikonfirmasi di dalam game.',
    },
    {
      title: 'Gaya Unicode Khas Esports',
      icon: Eye,
      desc: 'Pilih kombinasi huruf kapital mini (Small Caps) atau Bold Sans-Serif. Gaya ini sangat mudah dibaca oleh anggota tim di layar lobby dan grafik pembunuhan (kill feed).',
    },
    {
      title: 'Dukungan Simbol & Sayap FF',
      icon: Sparkles,
      desc: 'Simbol sayap ꧁༺ ༻꧂, mahkota 👑, bintang ✨, dan pedang ⚔️ didukung penuh di Free Fire. Gunakan 1–2 simbol hiasan sebagai pembuka dan penutup nama Anda.',
    },
    {
      title: 'Gunakan Spasi Transparan FF',
      icon: CheckCircle2,
      desc: 'Game Free Fire tidak mengizinkan spasi keyboard biasa. Manfaatkan karakter spasi transparan khusus dari generator kami untuk memisahkan kata pada nickname FF Anda.',
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
            Tips Membuat Nickname Free Fire Terbaik
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pelajari trik mengombinasikan simbol dan huruf agar nama akun FF Anda terlihat seperti pro player.
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
