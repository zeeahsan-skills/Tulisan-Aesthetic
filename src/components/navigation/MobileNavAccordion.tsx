'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavItem } from '@/lib/navigation';
import { Language } from '@/lib/content';

interface MobileNavAccordionProps {
  item: NavItem;
  pathname: string;
  lang: Language;
  onCloseMobileMenu: () => void;
}

export function MobileNavAccordion({
  item,
  pathname,
  lang,
  onCloseMobileMenu,
}: MobileNavAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const label = lang === 'en' ? item.labelEn : item.labelId;

  const isMainActive =
    item.href === '/'
      ? pathname === '/'
      : pathname === item.href || pathname.startsWith(`${item.href}/`);

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        onClick={onCloseMobileMenu}
        className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 block ${
          isMainActive
            ? 'text-purple-600 dark:text-pink-400 bg-purple-500/10 font-semibold'
            : 'text-slate-800 dark:text-slate-200 hover:bg-purple-500/10 hover:text-purple-600'
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-slate-100/50 dark:border-slate-800/40">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onCloseMobileMenu}
          className={`flex-1 px-4 py-2.5 rounded-l-xl text-base font-medium transition-all duration-200 ${
            isMainActive
              ? 'text-purple-600 dark:text-pink-400 font-semibold'
              : 'text-slate-800 dark:text-slate-200 hover:text-purple-600'
          }`}
        >
          {label}
        </Link>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={`Toggle ${label} sub-items`}
          aria-expanded={isExpanded}
          className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-pink-400 transition"
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${
              isExpanded ? 'rotate-180 text-purple-600 dark:text-pink-400' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-4 pr-2 pb-2 space-y-1 bg-slate-50/50 dark:bg-slate-900/40 rounded-b-xl"
          >
            {item.children.map((child) => {
              const childLabel = lang === 'en' ? child.labelEn : child.labelId;
              const isChildActive = pathname === child.href;

              return (
                <Link
                  key={child.id}
                  href={child.href}
                  onClick={onCloseMobileMenu}
                  className={`block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                    isChildActive
                      ? 'text-purple-600 dark:text-pink-400 font-semibold bg-purple-500/10'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-purple-500/10 hover:text-purple-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{childLabel}</span>
                    {child.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                        {child.badge}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
