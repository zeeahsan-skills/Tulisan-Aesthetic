'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavItem } from '@/lib/navigation';
import { Language } from '@/lib/content';

interface NavDropdownProps {
  item: NavItem;
  pathname: string;
  lang: Language;
}

export function NavDropdown({ item, pathname, lang }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const label = lang === 'en' ? item.labelEn : item.labelId;

  // Active state check: either main route matches or any child route matches
  const isMainActive =
    item.href === '/'
      ? pathname === '/'
      : pathname === item.href || pathname.startsWith(`${item.href}/`);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  // Keyboard navigation & ESC handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
          isMainActive
            ? 'text-purple-600 dark:text-pink-400 bg-purple-50 dark:bg-purple-900/30 font-semibold shadow-sm'
            : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-purple-900/20'
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group inline-block"
    >
      <div className="flex items-center">
        {/* Main Item Link */}
        <Link
          href={item.href}
          className={`pl-3.5 pr-1.5 py-2 rounded-l-xl text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
            isMainActive
              ? 'text-purple-600 dark:text-pink-400 bg-purple-50 dark:bg-purple-900/30 font-semibold shadow-sm'
              : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-purple-900/20'
          }`}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {label}
        </Link>

        {/* Dropdown Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
          aria-label={`Toggle ${label} menu`}
          aria-expanded={isOpen}
          aria-haspopup="true"
          className={`pr-2.5 py-2 rounded-r-xl text-sm transition-all duration-200 flex items-center ${
            isMainActive
              ? 'text-purple-600 dark:text-pink-400 bg-purple-50 dark:bg-purple-900/30'
              : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-purple-900/20'
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-purple-600 dark:text-pink-400' : ''
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 mt-1.5 w-64 rounded-2xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/80 dark:border-purple-900/40 shadow-2xl shadow-purple-500/10 p-2 z-50 overflow-hidden"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="space-y-1">
              {item.children.map((child) => {
                const childLabel = lang === 'en' ? child.labelEn : child.labelId;
                const childDesc =
                  lang === 'en' ? child.descriptionEn || child.descriptionId : child.descriptionId;
                const isChildActive = pathname === child.href;

                return (
                  <Link
                    key={child.id}
                    href={child.href}
                    onClick={() => setIsOpen(false)}
                    className={`group/item flex flex-col p-2.5 rounded-xl transition-all duration-150 ${
                      isChildActive
                        ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-pink-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-pink-400'
                    }`}
                    role="menuitem"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium flex items-center gap-1.5">
                        {childLabel}
                      </span>
                      {child.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                          {child.badge}
                        </span>
                      )}
                    </div>
                    {childDesc && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 font-normal">
                        {childDesc}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
