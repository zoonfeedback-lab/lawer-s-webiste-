import prisma from '@/lib/prisma';

export default async function AdminPortfolio() {
  const cases = await prisma.portfolioCase.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Portfolio Cases</h1>
          <p className="text-slate-500 mt-2">Manage your success stories and client cases.</p>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-slate-800 transition">
          Add New Case
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.length === 0 ? (
          <div className="col-span-full p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-100">
            No portfolio cases found.
          </div>
        ) : (
          cases.map((c) => (
            <div key={c.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
              <div className="h-40 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                Image Preview
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">{c.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 mt-1">{c.result}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {c.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
                <button className="text-sm font-medium text-blue-600">Edit</button>
                <button className="text-sm font-medium text-red-600">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

