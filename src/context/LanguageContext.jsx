import React, { createContext, useContext, useState, useEffect } from 'react';
import dataEs from '../content/data-es.json';
import dataPt from '../content/data-pt.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('libardo_lang');
      return saved === 'pt' ? 'pt' : 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('libardo_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore localStorage exceptions in restricted modes
    }
  }, [lang]);

  const t = lang === 'pt' ? dataPt : dataEs;

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'pt' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de LanguageProvider');
  }
  return context;
};
