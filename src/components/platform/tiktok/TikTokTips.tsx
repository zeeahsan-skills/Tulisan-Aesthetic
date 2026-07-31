'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldCheck, Zap, Sliders, Smartphone } from 'lucide-react';

export function TikTokTips() {
  const tips = [
    {
      title: 'Pilih Font Berkompatibilitas Tinggi',
      desc: 'Small Caps, Bold Sans, dan Circled Bubble memiliki tingkat kompatibilitas 99.9% di seluruh sistem iOS, Android, dan web TikTok.',
      icon: ShieldCheck,
      color: 'text-cyan-500 bg-cyan-500/10',
    },
    {
      title: 'Utamakan Keterbacaan (Readability)',
      desc: 'Hindari kombinasi font yang terlalu rumit atau dekorasi berlebihan pada nama tampilan agar calon followers mudah membaca nama akun Anda.',
      icon: Eye,
      color: 'text-pink-500 bg-pink-500/10',
    },
    {
      title: 'Perhatikan Batas Karakter TikTok',
      desc: 'Display Name terbatas pada 30 karakter dan Bio pada 80 karakter. Teks Unicode tertentu dihitung sebagai multiple bytes oleh TikTok.',
      icon: Sliders,
      color: 'text-purple-500 bg-purple-500/10',
    },
    {
      title: 'Optimasi Profil untuk FYP',
      desc: 'Gunakan kata kunci utama (misal: "Review Tech", "Resep Simpel") dengan font tebal pada baris pertama bio untuk meningkatkan SEO pencarian TikTok.',
      icon: Zap,
      color: 'text-amber-500 bg-amber-500/10',
    },
    {
      title: 'Kompatibilitas Lintas Perangkat',
      desc: 'Sistem Unicode Tulisan Aesthetic diuji secara berkala di iOS terbaru dan Android versi 8 hingga 16 untuk menjamin tampilan sempurna.',
      icon: Smartphone,
      color: 'text-emerald-500 bg-emerald-500/10',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Tips Optimasi Profil{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              TikTok
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Panduan praktis memilih dan menggunakan font Unicode estetik agar akun TikTok Anda terlihat estetik, profesional, dan makin berpotensi masuk FYP.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-950/80 border border-slate-200/80 dark:border-purple-900/20 shadow-md hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
