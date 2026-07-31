'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, FileText, Share2, MessageSquare, Send, Flag, Users } from 'lucide-react';

export function FacebookBestUses() {
  const useCases = [
    {
      title: 'Facebook Profile Name',
      icon: User,
      desc: 'Tampil menonjol di pencarian Facebook dengan nama profil berformat Bold, Small Caps, atau Gothic yang anggun.',
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'Bio Profil',
      icon: FileText,
      desc: 'Hiasi ringkasan Bio profil 101 karakter Anda agar terlihat profesional, aesthetic, dan memperkuat personal branding.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Timeline Posts',
      icon: Share2,
      desc: 'Buat kutipan status, pengumuman bisnis, atau berita di beranda Timeline lebih menarik perhatian pengikut Anda.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Komentar Facebook',
      icon: MessageSquare,
      desc: 'Raih tempat teratas di kolom komentar postingan viral dengan gaya tulisan tebal atau font bubble yang ramah interaksi.',
      gradient: 'from-teal-500 to-emerald-600',
    },
    {
      title: 'Pesan Messenger',
      icon: Send,
      desc: 'Kirimkan pesan obrolan pribadi dan grup obrolan Messenger berformat unik tanpa perlu menginstal aplikasi tambahan.',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Facebook Page Name',
      icon: Flag,
      desc: 'Ciptakan nama Halaman Fanspage toko online, kreator, atau komunitas yang estetik dan mudah diingat konsumen.',
      gradient: 'from-amber-500 to-rose-600',
    },
    {
      title: 'Facebook Group Name',
      icon: Users,
      desc: 'Perluas jangkauan grup Facebook Anda dengan judul grup yang terlihat menonjol dan berwibawa.',
      gradient: 'from-fuchsia-600 to-rose-500',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Penggunaan Terbaik
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Tempat Terbaik Menggunakan Font Facebook
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Maksimalkan tampilan teks Anda di seluruh fitur utama Facebook dari profil pribadi hingga grup komunitas.
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
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-blue-900/20 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
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
