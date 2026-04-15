import prisma from '@/lib/prisma';
import AppointmentsTable from '@/components/admin/AppointmentsTable';

export default async function AdminAppointments() {
  const rawAppointments = await prisma.appointment.findMany({
    orderBy: { createdAt: 'desc' }
  });

  // Serialize dates to strings so they can be passed to the client component
  const appointments = rawAppointments.map(app => ({
    ...app,
    createdAt: app.createdAt.toISOString(),
  }));

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Appointments Management</h1>
          <p className="text-slate-500 mt-2">View, approve, and manage client bookings.</p>
        </div>
      </div>
      
      <AppointmentsTable appointments={appointments} />
    </div>
  );
}

