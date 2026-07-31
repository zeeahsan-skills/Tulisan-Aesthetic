'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { DICTIONARY, Language } from '@/lib/content';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof DICTIONARY['id'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('id');

  useEffect(() => {
    const savedLang = localStorage.getItem('ta_lang') as Language | null;
    if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
      queueMicrotask(() => setLangState(savedLang));
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('ta_lang', newLang);
  };

  const t = DICTIONARY[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
