'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Eye, Copy, CheckCircle2 } from 'lucide-react';

export function SparklyTutorial() {
  const steps = [
    {
      step: '01',
      title: 'Ketik Teks Anda',
      desc: 'Tulis nama, bio, kutipan, atau kalimat yang ingin Anda hiasi pada kotak input generator di atas.',
      icon: <Edit3 className="w-5 h-5 text-teal-400" />,
    },
    {
      step: '02',
      title: 'Pilih Gaya Sparkly',
      desc: 'Lihat 50 variasi gaya berkilau yang dihasilkan secara otomatis, mulai dari stardust shimmer hingga celestial moon.',
      icon: <Eye className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: '03',
      title: 'Salin dengan 1-Klik',
      desc: 'Tekan tombol "Copy" pada kartu font sparkly pilihan Anda. Teks akan langsung tersimpan di clipboard.',
      icon: <Copy className="w-5 h-5 text-amber-400" />,
    },
    {
      step: '04',
      title: 'Tempel di Aplikasi Tujuan',
      desc: 'Buka Instagram, TikTok, WhatsApp, Discord, atau game Anda lalu pilih "Paste" (Tempel). Teks langsung tampil estetik!',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Cara Membuat Font Sparkly & Berkilau
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Panduan 4 langkah mudah mengubah tulisan biasa menjadi font sparkly glitter aesthetic tanpa aplikasi tambahan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-teal-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-extrabold text-teal-400/30 font-mono">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
