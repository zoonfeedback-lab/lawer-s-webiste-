import { Users, Calendar, Briefcase, FileCheck } from 'lucide-react';
import prisma from '@/lib/prisma';
import DashboardCharts from '@/components/admin/DashboardCharts';

export default async function AdminDashboard({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';

  // Fetch real counts from the database
  const [appointmentsCount, clientsCount, casesCount, servicesCount] = await Promise.all([
    prisma.appointment.count(),
    prisma.client.count(),
    prisma.portfolioCase.count(),
    prisma.service.count(),
  ]);

  // Fetch appointments for charts
  const appointments = await prisma.appointment.findMany({ select: { date: true, status: true } });

  // Process data for charts
  const statusMap = new Map<string, number>();
  const dateMap = new Map<string, number>();

  appointments.forEach(app => {
    const status = app.status || 'Pending';
    statusMap.set(status, (statusMap.get(status) || 0) + 1);
    
    // Fallback if date is missing
    const dateStr = app.date || 'Unknown';
    dateMap.set(dateStr, (dateMap.get(dateStr) || 0) + 1);
  });

  const statusData = Array.from(statusMap.entries()).map(([name, value]) => ({ name, value }));
  
  const activityData = Array.from(dateMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-10) // Show last 10 dates
    .map(([label, count]) => ({ label, count }));

  const stats = [
    { label: isUrdu ? 'کل اپوائنٹمنٹس' : 'Total Appointments', value: appointmentsCount.toString(), icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: isUrdu ? 'فعال کلائنٹس' : 'Total Clients', value: clientsCount.toString(), icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
    { label: isUrdu ? 'کامیاب کیسز' : 'Total Cases', value: casesCount.toString(), icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: isUrdu ? 'کل سروسز' : 'Total Services', value: servicesCount.toString(), icon: FileCheck, color: 'text-orange-600', bg: 'bg-orange-100' },
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
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${s.bg} ${s.color}`}>
              <s.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">{s.value}</div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <DashboardCharts activityData={activityData} statusData={statusData} />
    </div>
  );
}

