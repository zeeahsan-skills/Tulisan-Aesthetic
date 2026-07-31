'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, User, Camera, MessageSquare, MessageCircle, ListOrdered } from 'lucide-react';

export function AngkaBestUses() {
  const useCases = [
    {
      title: 'Gaming IDs (FF, MLBB, PUBG)',
      icon: Gamepad2,
      desc: 'Hiasi nomor ID player atau clan tag game online Anda dengan angka lingkaran atau angka tebal estetik.',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Usernames & Handle Sosial Media',
      icon: User,
      desc: 'Tambahkan digit angka keren pada username Instagram, TikTok, dan Twitter untuk memberikan ciri khas unik.',
      gradient: 'from-teal-400 via-pink-500 to-purple-600',
    },
    {
      title: 'Instagram Bio & Highlight Numbers',
      icon: Camera,
      desc: 'Format tanggal lahir, jumlah pengikut, dan nomor urut Highlight Bio Instagram dengan angka cantik.',
      gradient: 'from-amber-500 via-rose-500 to-purple-600',
    },
    {
      title: 'Discord Profile & Channel Numbering',
      icon: MessageSquare,
      desc: 'Beri nomor urut channel server Discord dan status profil Anda dengan gaya angka monospace atau lingkaran.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'WhatsApp Status & Contact Numbers',
      icon: MessageCircle,
      desc: 'Gunakan digit angka cantik pada pesan status WA dan nama kontak obrolan Anda.',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Stylish Lists & Poin Penting',
      icon: ListOrdered,
      desc: 'Format daftar urutan 1, 2, 3 di caption postingan atau artikel dengan angka lingkaran yang rapi.',
      gradient: 'from-purple-600 to-indigo-700',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Best Use Cases
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Penggunaan Terbaik Angka Keren
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan cara kreatif menggunakan simbol digit Unicode di berbagai platform game dan sosial media.
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
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
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
