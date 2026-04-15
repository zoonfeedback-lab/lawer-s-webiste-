'use client';

import { useState, useTransition } from 'react';
import { updateAppointmentStatus } from '@/actions/appointmentAdmin';
import { X, CheckCircle, Clock, Eye } from 'lucide-react';

interface Appointment {
  id: string;
  fullName: string;
  cnic: string;
  phone: string;
  email: string;
  serviceType: string;
  date: string;
  time: string;
  description: string;
  documentUrl: string | null;
  status: string;
  createdAt: string;
}

export default function AppointmentsTable({ appointments }: { appointments: Appointment[] }) {
  const [viewingApp, setViewingApp] = useState<Appointment | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleApprove(id: string) {
    startTransition(async () => {
      await updateAppointmentStatus(id, 'Approved');
    });
  }

  function handleComplete(id: string) {
    startTransition(async () => {
      await updateAppointmentStatus(id, 'Completed');
    });
  }

  return (
    <>
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
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    No appointments found.
                  </td>
                </tr>
              ) : (
                appointments.map(app => (
                  <tr key={app.id} className="hover:bg-slate-50/50">
                    <td className="p-4">
                      <div className="font-medium text-slate-900">{app.fullName}</div>
                      <div className="text-sm text-slate-500">{app.phone}</div>
                    </td>
                    <td className="p-4 text-slate-700">{app.serviceType}</td>
                    <td className="p-4 text-slate-700">
                      {app.date} <br/><span className="text-sm text-slate-500">{app.time || 'TBD'}</span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        app.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        app.status === 'Approved' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {app.status || 'Pending'}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setViewingApp(app)}
                          className="text-sm text-blue-600 font-medium hover:underline flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" /> View
                        </button>
                        {app.status === 'Pending' && (
                          <button 
                            onClick={() => handleApprove(app.id)}
                            disabled={isPending}
                            className="text-sm text-green-600 font-medium hover:underline flex items-center gap-1 disabled:opacity-50"
                          >
                            <CheckCircle className="w-3.5 h-3.5" /> Approve
                          </button>
                        )}
                        {app.status === 'Approved' && (
                          <button 
                            onClick={() => handleComplete(app.id)}
                            disabled={isPending}
                            className="text-sm text-purple-600 font-medium hover:underline flex items-center gap-1 disabled:opacity-50"
                          >
                            <Clock className="w-3.5 h-3.5" /> Complete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {viewingApp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setViewingApp(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">Appointment Details</h2>
              <button onClick={() => setViewingApp(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Full Name</p>
                  <p className="text-slate-900 font-medium mt-1">{viewingApp.fullName}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">CNIC</p>
                  <p className="text-slate-900 font-medium mt-1">{viewingApp.cnic}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Phone</p>
                  <p className="text-slate-900 font-medium mt-1">{viewingApp.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email</p>
                  <p className="text-slate-900 font-medium mt-1">{viewingApp.email || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Service</p>
                  <p className="text-slate-900 font-medium mt-1">{viewingApp.serviceType}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Date</p>
                  <p className="text-slate-900 font-medium mt-1">{viewingApp.date}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Status</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${
                    viewingApp.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    viewingApp.status === 'Approved' ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {viewingApp.status}
                  </span>
                </div>
              </div>
              {viewingApp.description && (
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Description</p>
                  <p className="text-slate-700 mt-1 text-sm leading-relaxed bg-slate-50 rounded-lg p-3">{viewingApp.description}</p>
                </div>
              )}
              {viewingApp.documentUrl && (
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Document</p>
                  <a href={viewingApp.documentUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
                    View Uploaded Document →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
