'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getTranslation, Translation } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [t, setT] = useState<Translation>(getTranslation('es'));

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && ['es', 'en', 'fr'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
      setT(getTranslation(savedLanguage));
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setT(getTranslation(lang));
    localStorage.setItem('portfolio-language', lang);
    
    // Update document language
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}