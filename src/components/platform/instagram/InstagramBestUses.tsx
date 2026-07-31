'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, AtSign, Tag, MessageSquare, Image, Sparkles } from 'lucide-react';

export function InstagramBestUses() {
  const useCases = [
    {
      icon: User,
      title: 'Instagram Bio',
      desc: 'Tambahkan font aesthetic di bio profil agar bio terlihat lebih menonjol, rapi, profesional, dan unik bagi setiap pengunjung profil Anda.',
      fontRecommendation: 'Small Caps, Cursive, & Bold Sans',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: AtSign,
      title: 'Instagram Username',
      desc: 'Kombinasikan karakter Unicode halus pada username atau sebutan handle agar mudah diingat oleh followers Anda.',
      fontRecommendation: 'Monospace & Small Caps',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Tag,
      title: 'Display Name',
      desc: 'Ubah nama tampilan (display name) Instagram menjadi gaya kaligrafi atau bold aesthetic tanpa mempengaruhi pencarian akun.',
      fontRecommendation: 'Bold Script & Cursive',
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      icon: Image,
      title: 'Caption Postingan',
      desc: 'Hias judul awal atau kata kunci penting di caption feed & Reels agar lebih menarik perhatian pembaca dalam sekali lihat.',
      fontRecommendation: 'Bold Sans & Circled Bubble',
      gradient: 'from-rose-500 to-amber-500',
    },
    {
      icon: MessageSquare,
      title: 'Komentar Feed & Reels',
      desc: 'Tulis pesan komentar bernuansa aesthetic atau dukungan dengan font tebal dan unik agar komentar Anda tampil paling atas.',
      fontRecommendation: 'Gothic & Double Struck',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Story Text & Highlight',
      desc: 'Percantik stiker teks di Story Instagram dan nama sampul Highlight (Sorotan) dengan deretan huruf bermodel estetik.',
      fontRecommendation: 'Sparkle Decor & Wings',
      gradient: 'from-pink-600 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Tempat Penggunaan{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Font Instagram
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Optimal untuk seluruh fitur utama Instagram agar akun Anda tampil estetik, menarik, dan berkelas.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => {
            const IconComponent = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-purple-900/20 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${useCase.gradient} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                    {useCase.title}
                  </h3>

                  <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {useCase.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Rekomendasi Font:
                  </span>
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    {useCase.fontRecommendation}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
