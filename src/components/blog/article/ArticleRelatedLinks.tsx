'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Type, Sparkles, MessageCircle } from 'lucide-react';

export const ArticleRelatedLinks: React.FC = () => {
  const relatedLinks = [
    {
      title: 'Cara Membuat Nama Keren & Aesthetic',
      path: '/blog/cara-membuat-nama-keren',
      desc: 'Panduan merancang nickname estetik untuk game dan akun sosial media.',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    },
    {
      title: 'Font Aesthetic Bio Instagram',
      path: '/platform/instagram',
      desc: 'Generator font aesthetic khusus bio & caption profil Instagram.',
      icon: <BookOpen className="w-5 h-5 text-pink-400" />,
    },
    {
      title: 'Font Aesthetic TikTok',
      path: '/platform/tiktok',
      desc: 'Ubah teks postingan & bio TikTok agar masuk ke FYP.',
      icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Format Teks WhatsApp',
      path: '/platform/whatsapp',
      desc: 'Trik memformat pesan tebal, miring & font gelembung WA.',
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Direktori Font Generator',
      path: '/font',
      desc: 'Pusat 18+ gaya font aesthetic Unicode terlengkap di Indonesia.',
      icon: <Type className="w-5 h-5 text-purple-400" />,
    },
    {
      title: 'Generator Huruf Keren',
      path: '/font/huruf-keren',
      desc: 'Ubah abjad latin biasa menjadi font estetik 100+ gaya.',
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <section className="py-12 bg-slate-900/60 text-white border-t border-slate-800 my-12 rounded-3xl p-6 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-extrabold mb-2 text-slate-100">
          Artikel & Generator Terkait
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-8">
          Baca panduan gaya tulisan estetik dan tutorial media sosial lainnya.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedLinks.map((item, idx) => (
            <motion.div
              key={item.path + idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.04 }}
            >
              <Link
                href={item.path}
                className="bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 rounded-2xl p-4 flex flex-col justify-between group transition-all block h-full hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {item.icon}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-purple-300 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
