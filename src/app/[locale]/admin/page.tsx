import { Users, Calendar, Briefcase, FileCheck } from 'lucide-react';

export default async function AdminDashboard({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';

  const stats = [
    { label: isUrdu ? 'کل اپوائنٹمنٹس' : 'Total Appointments', value: '1,248', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: isUrdu ? 'فعال کلائنٹس' : 'Total Clients', value: '450+', icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
    { label: isUrdu ? 'کامیاب کیسز' : 'Total Cases', value: '380', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: isUrdu ? 'مسودات' : 'Docs Processed', value: '2,100', icon: FileCheck, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{isUrdu ? 'ڈیش بورڈ کا جائزہ' : 'Dashboard Overview'}</h1>
        <p className="text-slate-500 mt-2">Welcome to your secure admin portal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center {s.bg} {s.color}`}>
              <s.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">{s.value}</div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-96 flex items-center justify-center">
        <p className="text-slate-400">Activity Chart Placeholder</p>
      </div>
    </div>
  );
}
