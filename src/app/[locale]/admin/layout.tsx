import { AdminSidebar } from '@/components/admin/AdminSidebar';

export default async function AdminLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';

  return (
    <div className={`min-h-screen bg-slate-50 flex ${isUrdu ? 'rtl flex-row-reverse' : 'ltr'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      <AdminSidebar isUrdu={isUrdu} locale={locale} />
      <div className="flex-1 flex flex-col pt-16 lg:pt-0">
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
