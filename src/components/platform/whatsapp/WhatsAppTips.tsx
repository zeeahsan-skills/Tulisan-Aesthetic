'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, UserCheck, Smartphone, Sliders } from 'lucide-react';

export function WhatsAppTips() {
  const tips = [
    {
      title: 'Kompatibilitas Lintas Perangkat & Sistem',
      desc: 'Standar Unicode internasional menjamin teks estetik yang Anda kirimkan dapat dibaca 100% di HP Android, iPhone, WhatsApp Web, dan WhatsApp Desktop.',
      icon: ShieldCheck,
      color: 'text-emerald-500 bg-emerald-500/10',
    },
    {
      title: 'Pilih Font Ber-Keterbacaan Tinggi',
      desc: 'Gunakan gaya Small Caps, Bold Sans, dan Circled Bubble pada obrolan obrolan penting agar teman bicara tidak kesulitan membaca pesan Anda.',
      icon: Eye,
      color: 'text-teal-500 bg-teal-500/10',
    },
    {
      title: 'Tips Nama Profil WhatsApp',
      desc: 'Nama profil terbatas pada 25 karakter. Pilih variasi huruf yang padat seperti Small Caps atau Bold Sans agar nama Anda tidak terpotong oleh sistem WhatsApp.',
      icon: UserCheck,
      color: 'text-green-500 bg-green-500/10',
    },
    {
      title: 'Tips WhatsApp Status Teks',
      desc: 'Tambahkan emoji dan baris baru saat membuat WA Status. Penggunaan font sambung atau huruf dilingkari di baris pertama dapat meningkatkan pembaca status harian.',
      icon: Smartphone,
      color: 'text-cyan-500 bg-cyan-500/10',
    },
    {
      title: 'Perhatikan Batas Karakter Info (About)',
      desc: 'Kolom Info / About WhatsApp memiliki batas 139 karakter. Pastikan teks kutipan atau status ketersediaan bisnis Anda pas dan terlihat rapi.',
      icon: Sliders,
      color: 'text-amber-500 bg-amber-500/10',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Tips Optimasi Profil & Chat{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
              WhatsApp
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Panduan praktis menggunakan font Unicode estetik di WhatsApp agar profil dan obrolan obrolan Anda makin profesional, rapi, dan estetik.
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
                className="p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-950/80 border border-slate-200/80 dark:border-emerald-900/20 shadow-md hover:shadow-xl transition-all"
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
