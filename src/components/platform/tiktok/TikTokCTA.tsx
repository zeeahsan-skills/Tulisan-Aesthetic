'use client';

import React from 'react';
import { Sparkles, Video } from 'lucide-react';

export function TikTokCTA() {
  const scrollToHero = () => {
    const heroElem = document.getElementById('hero');
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 p-8 sm:p-14 text-center text-white shadow-2xl overflow-hidden">
          {/* Background Overlay Effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-6">
              <Video className="w-4 h-4" />
              Generator Font TikTok Gratis 100%
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins leading-tight">
              Create Stylish TikTok Fonts Now
            </h2>

            <p className="mt-4 text-base sm:text-xl text-white/90 leading-relaxed">
              Ubah teks bio, nama akun, caption video, dan komentar TikTok Anda menjadi font Unicode estetik impian dalam hitungan detik.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={scrollToHero}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold text-base shadow-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all"
              >
                <Sparkles className="w-5 h-5 text-pink-500" />
                <span>Generate TikTok Fonts</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
