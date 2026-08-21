'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function TwitterXCTA() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-center shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-poppins">
              Buat Teks Bio Twitter / X Aesthetic Sekarang!
            </h2>
            <p className="mt-3 text-sm sm:text-base text-purple-100 leading-relaxed">
              Ketik teks pilihan Anda di generator top untuk mendapatkan 50 variasi gaya font Unicode aesthetic secara instan & 100% gratis.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#hero"
                className="px-6 py-3 rounded-2xl bg-white text-purple-700 font-bold text-sm shadow-xl hover:bg-slate-100 transition flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-pink-500" />
                <span>Mulai Konversi Teks</span>
                <ArrowRight className="w-4 h-4 text-purple-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
