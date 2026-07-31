'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Eye, ShieldCheck, AlignLeft, Award } from 'lucide-react';

export function InstagramTips() {
  const tips = [
    {
      icon: Lightbulb,
      title: '1. Pilih Font Terbaik untuk Engagement High-Converting',
      desc: 'Penggunaan font aesthetic pada 1-2 baris pertama bio atau caption meningkatkan perhatian (dwell time) pengunjung hingga 35%. Kombinasikan jenis font Small Caps atau Cursive dengan simbol emoji sederhana.',
    },
    {
      icon: Eye,
      title: '2. Utamakan Keterbacaan (Readability)',
      desc: 'Meskipun font estetik terlihat indah, pastikan kata-kata penting seperti niche akun, domisili, atau tawaran bisnis tetap mudah dibaca dalam sekali pandang oleh calon follower Anda.',
    },
    {
      icon: ShieldCheck,
      title: '3. Kompatibilitas Unicode Antar Perangkat',
      desc: 'Generator kami menggunakan standar Unicode resmi yang kompatibel 100% pada semua perangkat Android, iPhone, iPad, Mac, dan PC tanpa memicu kotak kosong (tanda kotak silang atau pembaca layar bermasalah).',
    },
    {
      icon: AlignLeft,
      title: '4. Perhatikan Batas Karakter Bio (Max 150 Karakter)',
      desc: 'Bio Instagram memiliki batasan maksimal 150 karakter. Karena beberapa simbol Unicode menggabungkan penanda khusus, selalu periksa jumlah karakter agar teks bio Anda tidak terpotong.',
    },
    {
      icon: Award,
      title: '5. Optimasi Profil Bisnis & Personal Branding',
      desc: 'Gunakan font Bold Sans untuk menekankan profesi Anda (contoh: 𝗗ɪɢɪᴛᴀʟ ᴍᴀʀᴋᴇᴛᴇʀ) dan cantumkan call-to-action (CTA) yang mengarahkan pengunjung ke link bio.',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Tips Optimasi Font{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Instagram Bio & Profil
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Panduan teknis untuk memaksimalkan daya tarik profil Instagram Anda dengan gaya tulisan estetis.
          </p>
        </div>

        {/* Tips List */}
        <div className="mt-14 max-w-4xl mx-auto space-y-6">
          {tips.map((tip, idx) => {
            const IconComp = tip.icon;
            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-purple-900/20 shadow-md flex flex-col sm:flex-row items-start gap-5 hover:border-pink-500/30 transition-all"
              >
                <div className="p-3.5 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
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
