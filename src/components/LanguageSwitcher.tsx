'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'ur' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button variant="ghost" size="sm" onClick={switchLocale} className="flex gap-2 text-slate-700 hover:text-blue-900 hover:bg-slate-100 font-medium border border-transparent hover:border-slate-200">
      <Globe className="h-4 w-4" />
      <span className="font-sans">{locale === 'en' ? 'اردو' : 'English'}</span>
    </Button>
  );
}
