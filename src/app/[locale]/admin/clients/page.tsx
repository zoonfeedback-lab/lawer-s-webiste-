export default function AdminClients() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Client Roster</h1>
          <p className="text-slate-500 mt-2">Manage clients, testimonials, and brand logos.</p>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-slate-800 transition">
          Add New Client
        </button>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
        <p className="text-slate-500 mb-4">No clients added to roster yet.</p>
        <button className="text-blue-600 font-medium hover:underline">Create first client</button>
      </div>
    </div>
  );
}
