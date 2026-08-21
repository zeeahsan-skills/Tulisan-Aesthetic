'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-slate-50/50 dark:bg-slate-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-16 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white text-center shadow-2xl shadow-purple-500/30 overflow-hidden">
          
          {/* Floating background glow shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
              <Sparkles className="w-4 h-4 text-pink-200" />
              Generator Tulisan Keren & Font Aesthetic
            </span>

            <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold font-poppins leading-tight">
              {t.cta.title}
            </h2>

            <p className="mt-4 text-base sm:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              {t.cta.subtitle}
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#hero"
                className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-purple-700 font-extrabold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-pink-500 animate-pulse" />
                <span>{t.cta.btnText}</span>
                <ArrowRight className="w-5 h-5 text-purple-600" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
