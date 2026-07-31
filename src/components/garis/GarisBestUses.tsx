'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MessageSquare, Camera, Video, Share2, Smile } from 'lucide-react';

export function GarisBestUses() {
  const useCases = [
    {
      title: 'WhatsApp Messages & Status',
      icon: MessageCircle,
      desc: 'Buat pesan pembatalan acara, koreksi harga jualan, atau teks humor di obrolan grup WhatsApp.',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Discord Chat & Announcement',
      icon: MessageSquare,
      desc: 'Tandai aturan server yang sudah tidak berlaku atau harga giveaway yang sudah habis di Discord.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Instagram Bio & Story',
      icon: Camera,
      desc: 'Hiasi bio profil IG dengan teks garis coret aesthetic untuk gaya minimalis dan misterius.',
      gradient: 'from-amber-500 via-rose-500 to-purple-600',
    },
    {
      title: 'TikTok Captions & Jokes',
      icon: Video,
      desc: 'Gunakan tulisan coret di caption video TikTok untuk efek sindiran halus (sarcasm) dan joke yang menarik.',
      gradient: 'from-teal-400 via-pink-500 to-purple-600',
    },
    {
      title: 'Facebook Posts & Promo',
      icon: Share2,
      desc: 'Tampilkan diskon harga coret produk jualan online di postingan grup dan Halaman Facebook.',
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'Funny & Sarcastic Text',
      icon: Smile,
      desc: 'Ekspresikan pikiran jujur yang pura-pura dicoret untuk humor obrolan dengan teman media sosial.',
      gradient: 'from-rose-500 to-pink-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Best Use Cases
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Penggunaan Terbaik Font Garis Coret
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan cara kreatif menggunakan teks strikethrough Unicode di berbagai platform sosial media.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;

            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 w-12 h-12 rounded-2xl bg-gradient-to-tr ${uc.gradient} text-white shadow-md flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {uc.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {uc.desc}
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
