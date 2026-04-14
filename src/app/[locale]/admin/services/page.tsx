export default function AdminServices() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Services Configuration</h1>
          <p className="text-slate-500 mt-2">Add or update specific service offerings, required documents, and timelines.</p>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-slate-800 transition">
          New Service
        </button>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden text-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-4 font-semibold text-slate-700">Service Title</th>
              <th className="p-4 font-semibold text-slate-700">Timeline</th>
              <th className="p-4 font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium">Company Registration</td>
              <td className="p-4 text-slate-600">7 - 10 Days</td>
              <td className="p-4 space-x-3">
                 <button className="text-blue-600 font-medium">Edit</button>
                 <button className="text-red-600 font-medium">Archive</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
