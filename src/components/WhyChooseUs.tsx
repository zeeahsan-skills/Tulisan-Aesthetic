'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone, Palette, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.whyUs.f1Title,
      desc: t.whyUs.f1Desc,
      icon: Zap,
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      title: t.whyUs.f2Title,
      desc: t.whyUs.f2Desc,
      icon: Smartphone,
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      title: t.whyUs.f3Title,
      desc: t.whyUs.f3Desc,
      icon: Palette,
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: t.whyUs.f4Title,
      desc: t.whyUs.f4Desc,
      icon: ShieldCheck,
      gradient: 'from-emerald-400 to-teal-600',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {t.whyUs.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            {t.whyUs.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/50 dark:hover:border-purple-500/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.gradient} text-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
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
