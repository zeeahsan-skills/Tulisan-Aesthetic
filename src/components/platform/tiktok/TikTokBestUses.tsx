'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, FileText, Sparkles, Video, MessageSquare, User } from 'lucide-react';

export function TikTokBestUses() {
  const uses = [
    {
      title: 'TikTok Username',
      description: 'Gunakan font estetik untuk nama tampilan (display name) akun agar langsung terlihat menonjol & catchy di pencarian TikTok.',
      icon: UserCheck,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'TikTok Bio',
      description: 'Hias deskripsi bio TikTok Anda dengan simbol unik dan font sambung untuk menunjukkan persona brand atau profil pribadi.',
      icon: FileText,
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Display Name',
      description: 'Buat nama tampilan unik yang berkesan premium tanpa harus mengubah nama pengguna alfanumerik asli Anda.',
      icon: Sparkles,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Video Caption',
      description: 'Gunakan font tebal atau cetak miring pada baris pertama caption video agar lebih menarik perhatian penonton saat scrolling FYP.',
      icon: Video,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Comments',
      description: 'Tulis komentar estetik di video viral agar komentar Anda berada di posisi teratas dan disukai (liked) oleh banyak pengguna.',
      icon: MessageSquare,
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Profile Description',
      description: 'Susun daftar tautan, jadwal tayang livestreaming, dan kontak bisnis dengan struktur font mini yang rapi & profesional.',
      icon: User,
      color: 'from-violet-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Penggunaan Terbaik{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Font TikTok
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Tempat-tempat strategis pada akun TikTok di mana teks Unicode estetik memberikan dampak visual dan keterlibatan (engagement) maksimal.
          </p>
        </div>

        {/* Use Case Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uses.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-950/80 border border-slate-200/80 dark:border-purple-900/20 hover:border-cyan-500/40 transition-all hover:shadow-xl group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
