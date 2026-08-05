'use client';

import { useLocale } from '@/components/locale-provider';
import { type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

const OPTIONS: { value: Locale; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, isPending } = useLocale();

  return (
    <div
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-neutral-200/80 bg-white/50 p-0.5 text-xs font-medium dark:border-neutral-800 dark:bg-neutral-950/40',
        isPending && 'opacity-70',
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLocale(option.value)}
          aria-pressed={locale === option.value}
          className={cn(
            'rounded-full px-2.5 py-1 transition-colors',
            locale === option.value
              ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
              : 'text-neutral-500 hover:text-foreground',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
