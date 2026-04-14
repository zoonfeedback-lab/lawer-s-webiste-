import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from './ui/button';
import MobileMenu from './MobileMenu';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('Navigation');
  const isUrdu = locale === 'ur';

  const navTranslations = {
    home: t('home'),
    services: t('services'),
    portfolio: t('portfolio'),
    about: t('about'),
    clients: t('clients'),
    contact: t('contact'),
    appointment: t('appointment')
  };

  return (
    <header className={`border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 ${isUrdu ? 'rtl' : 'ltr'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-blue-900 tracking-tight flex-shrink-0">
          Basit Legal
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-blue-900 transition-colors">{t('home')}</Link>
          <Link href="/services" className="hover:text-blue-900 transition-colors">{t('services')}</Link>
          <Link href="/portfolio" className="hover:text-blue-900 transition-colors">{t('portfolio')}</Link>
          <Link href="/about" className="hover:text-blue-900 transition-colors">{t('about')}</Link>
          <Link href="/clients" className="hover:text-blue-900 transition-colors">{t('clients')}</Link>
          <Link href="/contact" className="hover:text-blue-900 transition-colors">{t('contact')}</Link>
        </nav>

        <div className="flex items-center gap-2 flex-shrink-0">
          <LanguageSwitcher />
          <Button asChild className="hidden sm:inline-flex bg-blue-900 hover:bg-blue-800">
            <Link href="/appointment">{t('appointment')}</Link>
          </Button>
          <MobileMenu isUrdu={isUrdu} translations={navTranslations} />
        </div>
      </div>
    </header>
  );
}
