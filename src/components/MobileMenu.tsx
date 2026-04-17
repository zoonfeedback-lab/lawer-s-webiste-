'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';

type MobileMenuProps = {
  isUrdu: boolean;
  translations: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    clients: string;
    contact: string;
    appointment: string;
  };
};

export default function MobileMenu({ isUrdu, translations: t }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const canUsePortal = typeof document !== 'undefined';

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  return (
    <div className="md:hidden ml-1">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label="Open navigation menu"
        className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-900"
      >
        <Menu className="w-5 h-5" />
      </button>

      {canUsePortal && isOpen && createPortal(
        <div
          className={`fixed inset-0 z-[200] overflow-y-auto bg-white ${isUrdu ? 'rtl' : 'ltr'}`}
          dir={isUrdu ? 'rtl' : 'ltr'}
        >
          <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="font-bold text-2xl text-blue-900 tracking-tight">Abdul Basit & Co</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="rounded-xl bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="px-6 py-6">
            <nav id="mobile-navigation" className="flex flex-col gap-3 text-lg font-bold text-slate-700">
              <Link href="/" onClick={() => setIsOpen(false)} className="rounded-xl border border-slate-200 px-4 py-4 transition-colors hover:bg-slate-50 hover:text-blue-600">{t.home}</Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="rounded-xl border border-slate-200 px-4 py-4 transition-colors hover:bg-slate-50 hover:text-blue-600">{t.services}</Link>
              <Link href="/portfolio" onClick={() => setIsOpen(false)} className="rounded-xl border border-slate-200 px-4 py-4 transition-colors hover:bg-slate-50 hover:text-blue-600">{t.portfolio}</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="rounded-xl border border-slate-200 px-4 py-4 transition-colors hover:bg-slate-50 hover:text-blue-600">{t.about}</Link>
              <Link href="/clients" onClick={() => setIsOpen(false)} className="rounded-xl border border-slate-200 px-4 py-4 transition-colors hover:bg-slate-50 hover:text-blue-600">{t.clients}</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="rounded-xl border border-slate-200 px-4 py-4 transition-colors hover:bg-slate-50 hover:text-blue-600">{t.contact}</Link>

              <div className="mt-4 border-t border-slate-100 pt-6">
                <Button asChild size="lg" className="h-14 w-full rounded-xl bg-blue-600 text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700">
                  <Link href="/appointment" onClick={() => setIsOpen(false)}>{t.appointment}</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
