'use client';

import { Link } from '@/i18n/routing';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Calendar, Briefcase, Users, FileText, Settings, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { logoutAdmin } from '@/actions/auth';

export function AdminSidebar({ isUrdu, locale }: { isUrdu: boolean, locale: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: isUrdu ? 'ڈیش بورڈ' : 'Dashboard', href: '/admin' },
    { icon: Calendar, label: isUrdu ? 'اپوائنٹمنٹس' : 'Appointments', href: '/admin/appointments' },
    { icon: Briefcase, label: isUrdu ? 'پورٹ فولیو' : 'Portfolio', href: '/admin/portfolio' },
    { icon: Users, label: isUrdu ? 'کلائنٹس' : 'Clients', href: '/admin/clients' },
    { icon: FileText, label: isUrdu ? 'سروسز' : 'Services', href: '/admin/services' },
    { icon: FileText, label: isUrdu ? 'پیغامات' : 'Messages', href: '/admin/contacts' },
  ];

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-4">
        <span className="font-bold text-slate-900 text-lg">Admin Panel</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`fixed inset-y-0 ${isUrdu ? 'right-0' : 'left-0'} z-40 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block ${isOpen ? 'translate-x-0' : (isUrdu ? 'translate-x-full' : '-translate-x-full')}`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">Lawyer Admin</h2>
          <p className="text-slate-400 text-sm">Secure Dashboard</p>
        </div>
        <nav className="mt-6 px-4 space-y-2">
          {navItems.map((item, i) => {
            const isActive = pathname === `/${locale}${item.href}` || (item.href !== '/admin' && pathname.startsWith(`/${locale}${item.href}`));
            return (
              <Link
                key={i}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-8 mt-8 border-t border-slate-800 space-y-1">
            <Link href="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
              <span>{isUrdu ? 'ویب سائٹ پر جائیں' : 'Back to Website'}</span>
            </Link>
            <button
              onClick={async () => { await logoutAdmin(); window.location.reload(); }}
              className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 transition-colors w-full"
            >
              <LogOut className="w-5 h-5" />
              <span>{isUrdu ? 'لاگ آؤٹ' : 'Logout'}</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
