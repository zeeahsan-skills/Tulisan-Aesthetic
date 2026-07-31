'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-purple-900/90 to-pink-900/90 backdrop-blur-xl border border-purple-500/30 text-white shadow-2xl shadow-purple-500/20"
        >
          <div className="p-2 rounded-xl bg-purple-500/20 text-pink-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{message}</p>
            <p className="text-xs text-purple-200/70">Siap ditempel ke IG, TikTok & WA!</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
