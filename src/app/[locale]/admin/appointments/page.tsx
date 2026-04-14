export default function AdminAppointments() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Appointments Management</h1>
          <p className="text-slate-500 mt-2">View, approve, and manage client bookings.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-4 font-semibold text-slate-700">Client Name</th>
                <th className="p-4 font-semibold text-slate-700">Service</th>
                <th className="p-4 font-semibold text-slate-700">Date & Time</th>
                <th className="p-4 font-semibold text-slate-700">Status</th>
                <th className="p-4 font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[1,2,3].map((i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="p-4">
                    <div className="font-medium text-slate-900">John Doe {i}</div>
                    <div className="text-sm text-slate-500">0300-1234567</div>
                  </td>
                  <td className="p-4 text-slate-700">Company Registration</td>
                  <td className="p-4 text-slate-700">Oct 24, 2023 <br/><span className="text-sm text-slate-500">10:00 AM</span></td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">Pending</span>
                  </td>
                  <td className="p-4 space-x-2">
                    <button className="text-sm text-blue-600 font-medium hover:underline">View</button>
                    <button className="text-sm text-green-600 font-medium hover:underline">Approve</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
