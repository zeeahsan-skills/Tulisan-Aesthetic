'use client';

import React, { useState, useEffect } from 'react';
import { COOL_NAMES_ARTICLE_TOC } from '@/lib/cool-names-article';
import { List } from 'lucide-react';

export const CoolNamesTOC: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0% -70% 0%' }
    );

    COOL_NAMES_ARTICLE_TOC.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl sticky top-24">
      <div className="flex items-center gap-2 text-sm font-bold text-slate-100 mb-4 pb-2 border-b border-slate-800">
        <List className="w-4 h-4 text-purple-400" />
        <span>Daftar Isi Artikel</span>
      </div>

      <ul className="space-y-2 text-xs">
        {COOL_NAMES_ARTICLE_TOC.map((item) => {
          const isActive = activeId === item.id;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block transition-all hover:translate-x-1 ${
                  isActive
                    ? 'text-purple-400 font-bold'
                    : 'text-slate-400 hover:text-slate-200 font-medium'
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
