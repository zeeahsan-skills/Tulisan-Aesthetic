'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

interface BlogNewsletterCTAProps {
  onCopy: (msg: string) => void;
}

export const BlogNewsletterCTA: React.FC<BlogNewsletterCTAProps> = ({ onCopy }) => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onCopy('Masukkan alamat email yang valid.');
      return;
    }
    onCopy('Terima kasih telah berlangganan Newsletter Tulisan Aesthetic! 🎉');
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-purple-950/60 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-slate-950/80 border border-purple-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md"
        >
          <div className="p-3.5 rounded-full bg-purple-500/10 border border-purple-500/30 inline-block mb-4 text-purple-400">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Subscribe to Tulisan Aesthetic Newsletter
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Dapatkan update tutorial font terpopuler, trik Unicode terbaru, dan inspirasi nama gaming estetik langsung ke email Anda setiap minggu.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda..."
              className="flex-1 bg-slate-900 border border-slate-700 focus:border-purple-400 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-400 hover:to-pink-400 text-white font-extrabold text-sm shadow-xl shadow-purple-500/20 transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
