'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function BlogSection() {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      slug: 'font-instagram',
      title: 'Panduan Lengkap Font Unicode: Rahasia Bio Instagram Aesthetic',
      category: 'Tutorial IG',
      readTime: '4 min baca',
      date: '25 Agustus 2026',
      snippet: 'Pelajari cara kerja standar Unicode dan bagaimana Anda bisa mengubah teks biasa menjadi font aesthetic di Bio Instagram tanpa terpotong.',
      image: '✨',
    },
    {
      id: 2,
      slug: 'cara-membuat-nama-keren',
      title: 'Cara Membuat Gaming Nickname FF & MLBB Keren Anti Mainstream',
      category: 'Gaming Tips',
      readTime: '5 min baca',
      date: '25 Agustus 2026',
      snippet: 'Daftar rahasia kombinasi mahkota, sayap ꧁༺ ༻꧂, dan font tebal yang biasa dipakai oleh pro player esports dunia.',
      image: '⚔️',
    },
    {
      id: 3,
      slug: 'apa-itu-unicode',
      title: 'Kenapa Tulisan Aesthetic Kadang Jadi Kotak-Kotak? (Penjelasan Unicode)',
      category: 'Edukasi Tech',
      readTime: '6 min baca',
      date: '25 Agustus 2026',
      snippet: 'Sering melihat simbol ☒ atau ⍰ saat kirim pesan? Ketahui alasan kompatibilitas font Unicode di HP lama vs baru.',
      image: '📱',
    },
    {
      id: 4,
      slug: 'font-tiktok',
      title: 'Tips Memilih Font Aesthetic Terbaik untuk Caption TikTok FYP',
      category: 'TikTok Tips',
      readTime: '3 min baca',
      date: '25 Agustus 2026',
      snippet: 'Meningkatkan retention dan impresi video TikTok dengan kombinasi font Bubble, Small Caps, dan emoticon kaomoji.',
      image: '🎵',
    },
    {
      id: 5,
      slug: 'font-whatsapp',
      title: 'Font WhatsApp: Cara Membuat Tulisan Aesthetic untuk Nama, Bio & Status',
      category: 'WhatsApp Tips',
      readTime: '8 min baca',
      date: '25 Agustus 2026',
      snippet: 'Pelajari cara menggunakan Unicode untuk membuat tulisan keren di WhatsApp, mulai dari nama profil, bio, status, hingga pesan.',
      image: '💬',
    },
  ];

  return (
    <section id="blog" className="py-12 sm:py-16 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {t.blog.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            {t.blog.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={`/blog/${article.slug}`}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/50 dark:hover:border-purple-500/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between h-full block"
              >
                <div>
                  {/* Badge & Time */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-pink-400 font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {article.snippet}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {article.date}
                  </span>
                  <span className="text-xs font-bold text-purple-600 dark:text-pink-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {t.blog.readMore}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
