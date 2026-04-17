import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Abdul Basit & Co.</h3>
            <p className="text-sm">{t('address')}</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/appointment" className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <p className="text-sm opacity-80">{t('disclaimer')}</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Scan QR</h4>
            <div className="bg-white p-2 inline-block rounded-xl shadow-md">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.facebook.com/profile.php?id=61553545920690%26mibextid=2JQ9oc" 
                alt="QR Code" 
                className="w-24 h-24"
              />
            </div>
            <p className="text-xs text-slate-500 mt-3">Scan it</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Abdul Basit & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
