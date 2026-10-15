import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from '../i18n/ui';

const PreferencesContext = createContext(null);

const read = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable — ignore */
  }
};

const initialLang = () => {
  const saved = read('lang');
  if (saved === 'ar' || saved === 'en') return saved;
  return navigator.language?.startsWith('ar') ? 'ar' : 'en';
};

const initialTheme = () => {
  const saved = read('theme');
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export function PreferencesProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    write('lang', lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    write('theme', theme);
  }, [theme]);

  const toggleLang = useCallback(() => setLang((l) => (l === 'ar' ? 'en' : 'ar')), []);
  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  // `t` picks the current language from any { en, ar } object.
  const t = useCallback((value) => {
    if (value && typeof value === 'object' && !Array.isArray(value) && ('en' in value || 'ar' in value)) {
      return value[lang] ?? value.en;
    }
    return value;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, theme, toggleLang, toggleTheme, t, strings: ui[lang] }),
    [lang, theme, toggleLang, toggleTheme, t]
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error('usePreferences must be used inside <PreferencesProvider>');
  return ctx;
}
