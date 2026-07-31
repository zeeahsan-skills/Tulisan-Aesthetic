'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers } from 'lucide-react';

export const RobloxUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Mengapa Font Unicode Bekerja di Roblox Display Name?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Penjelasan teknis perbedaan sistem Username dan Display Name serta dukungan render teks Unicode di Roblox client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-emerald-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Beda Username vs Display Name
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Username (@username) adalah ID unik akun yang dipakai untuk login & pembayaran Robux. Sedangkan Display Name adalah nama publik di atas kepala avatar yang bebas menggunakan karakter Unicode khusus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-teal-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Dukungan UTF-8 & Sensor Chat
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Roblox menggunakan standar render UTF-8 yang memproses ribuan karakter Unicode internasional. Generator kami dikurasi khusus agar terbebas dari sistem sensor kata otomatis (#).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-cyan-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Kompatibilitas Multi-Platform
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Display Name Unicode dapat tampil rapi di seluruh platform tempat Anda bermain Roblox: PC Windows/Mac, HP Android/iOS, iPad, hingga konsol PlayStation & Xbox.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
