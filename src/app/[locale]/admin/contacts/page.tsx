import prisma from '@/lib/prisma';
import { format } from 'date-fns';

export default async function AdminContacts() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Inbox / Messages</h1>
          <p className="text-slate-500 mt-2">Manage contact inquiries from the website.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-4 font-semibold text-slate-700">Name & Details</th>
                <th className="p-4 font-semibold text-slate-700">Message</th>
                <th className="p-4 font-semibold text-slate-700 w-48">Date</th>
                <th className="p-4 font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {messages.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">
                    No contact messages found.
                  </td>
                </tr>
              ) : (
                messages.map(msg => (
                  <tr key={msg.id} className="hover:bg-slate-50/50">
                    <td className="p-4 align-top">
                      <div className="font-medium text-slate-900">{msg.name}</div>
                      <div className="text-sm text-slate-500">{msg.contactInfo}</div>
                    </td>
                    <td className="p-4 text-slate-700 align-top max-w-sm">
                      <p className="break-words text-sm">{msg.message}</p>
                    </td>
                    <td className="p-4 text-slate-500 text-sm align-top">
                      {format(new Date(msg.createdAt), 'PPP')} <br/>
                      {format(new Date(msg.createdAt), 'p')}
                    </td>
                    <td className="p-4 align-top">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        msg.status === 'Read' ? 'bg-slate-100 text-slate-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {msg.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
