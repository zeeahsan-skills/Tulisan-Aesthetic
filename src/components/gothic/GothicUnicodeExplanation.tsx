'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Info, Cpu } from 'lucide-react';

export function GothicUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Font Gothic & Fraktur Unicode
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pelajari teknologi di balik tulisan Gothic dan mengapa karakter ini bisa ditempel di mana saja.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: What is Blackletter? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Blackletter?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Blackletter</strong> (juga dikenal sebagai <em>Gothic script</em> atau <em>Old English</em>) adalah gaya penulisan naskah yang digunakan di seluruh Eropa dari sekitar tahun 1150 hingga abad ke-17. Ciri khasnya adalah garis-garis tebal vertikal dengan sudut patah yang tegas, memberikan tampilan megah, sejarah, dan misterius.
            </p>
          </motion.div>

          {/* Card 2: What is Fraktur? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Fraktur?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Fraktur</strong> adalah salah satu sub-subspesies paling terkenal dari keluarga huruf Blackletter yang berasal dari Jerman abad ke-16. Kata <em>Fraktur</em> berasal dari bahasa Latin <em>fractura</em> yang berarti &quot;patah&quot;, merujuk pada bentuk hurufnya yang patah-patah melengkung indah. Di dunia digital modern, huruf Fraktur direpresentasikan dalam Unicode sebagai Matematika Fraktur (<em>Mathematical Fraktur</em>).
            </p>
          </motion.div>

          {/* Card 3: Difference between Unicode Fonts and Installed Fonts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Perbedaan Font Unicode Gothic vs Font Install (.TTF / .OTF)
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Banyak orang bingung antara file font yang diinstall di komputer dengan <strong>Font Unicode</strong> yang dihasilkan oleh generator kami:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Font Terinstall (.ttf / .otf)</strong>: Hanya mengubah tampilan visual huruf pada software desain lokal (seperti Photoshop atau Word). Jika Anda mengopi teksnya ke Instagram atau Free Fire, bentuk font akan kembali biasa karena sistem platform tidak memiliki file font tersebut.
                </li>
                <li>
                  <strong>Font Unicode (Generator Kami)</strong>: Tidak mengubah font aplikasi, melainkan mengganti karakter huruf ASCII biasa menjadi karakter simbol Unicode resmi internasional (seperti <code className="font-mono bg-purple-500/10 px-2 py-0.5 rounded text-purple-600 dark:text-pink-400">𝕬, 𝕭, 𝕮</code>). Oleh karena itu, teks ini <strong>bisa disalin-tempel ke mana saja</strong> dan akan tetap terbaca di iOS, Android, Windows, Mac, dan Game!
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
