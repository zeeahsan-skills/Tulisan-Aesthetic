'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      value: t.stats.genCount,
      label: t.stats.genLabel,
      color: 'from-purple-600 to-pink-500',
    },
    {
      value: t.stats.stylesCount,
      label: t.stats.stylesLabel,
      color: 'from-pink-500 to-rose-500',
    },
    {
      value: t.stats.usersCount,
      label: t.stats.usersLabel,
      color: 'from-blue-500 to-purple-600',
    },
    {
      value: t.stats.compatCount,
      label: t.stats.compatLabel,
      color: 'from-emerald-400 to-teal-500',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-900/90 via-slate-900/90 to-pink-900/90 backdrop-blur-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden">
          
          {/* Glowing Background Circles */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-purple-500/20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center pt-6 lg:pt-0 first:pt-0"
              >
                <div className={`text-4xl sm:text-6xl font-black font-poppins tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-purple-200/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
