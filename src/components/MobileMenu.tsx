'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <div className="md:hidden ml-1">
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-slate-600 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center border border-slate-200"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-50 bg-white p-6 ${isUrdu ? 'rtl' : 'ltr'}`}
            dir={isUrdu ? 'rtl' : 'ltr'}
          >
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <span className="font-bold text-2xl text-blue-900 tracking-tight">Basit Legal</span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-slate-500 bg-slate-100 hover:bg-slate-200 hover:text-slate-800 rounded-xl transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-xl font-bold text-slate-700">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600 hover:bg-slate-50 p-2 rounded-lg -mx-2">{t.home}</Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-blue-600 hover:bg-slate-50 p-2 rounded-lg -mx-2">{t.services}</Link>
              <Link href="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-blue-600 hover:bg-slate-50 p-2 rounded-lg -mx-2">{t.portfolio}</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600 hover:bg-slate-50 p-2 rounded-lg -mx-2">{t.about}</Link>
              <Link href="/clients" onClick={() => setIsOpen(false)} className="hover:text-blue-600 hover:bg-slate-50 p-2 rounded-lg -mx-2">{t.clients}</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600 hover:bg-slate-50 p-2 rounded-lg -mx-2">{t.contact}</Link>
              
              <div className="mt-8 pt-8 border-t border-slate-100">
                 <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg shadow-xl shadow-blue-600/20 rounded-xl">
                   <Link href="/appointment" onClick={() => setIsOpen(false)}>{t.appointment}</Link>
                 </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
