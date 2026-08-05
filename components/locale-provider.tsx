'use client';

import { LOCALE_COOKIE, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import type { Dictionary } from '@/i18n/dictionaries/en';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
  type ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
  document.documentElement.lang = locale;
}

export function LocaleProvider({
  children,
  initialLocale,
  initialDictionary,
}: {
  children: ReactNode;
  initialLocale: Locale;
  initialDictionary: Dictionary;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState(initialLocale);
  const [dictionary, setDictionary] = useState(initialDictionary);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setLocaleState(initialLocale);
    setDictionary(initialDictionary);
    document.documentElement.lang = initialLocale;
  }, [initialLocale, initialDictionary]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      persistLocale(next);
      setLocaleState(next);
      setDictionary(getDictionary(next));
      startTransition(() => {
        router.refresh();
      });
    },
    [locale, router],
  );

  const value = useMemo(
    () => ({ locale, dictionary, setLocale, isPending }),
    [locale, dictionary, setLocale, isPending],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}

export function useDictionary() {
  return useLocale().dictionary;
}
