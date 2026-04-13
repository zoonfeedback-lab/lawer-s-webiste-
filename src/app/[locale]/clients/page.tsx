export const metadata = {
  title: 'Our Clients | Advocate Muhammad Ahmed',
  description: 'Trusted by hundreds of businesses across Pakistan for legal compliance and registration.',
};

export default async function ClientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';

  return (
    <div className={`py-20 ${isUrdu ? 'rtl font-urdu' : 'ltr font-sans'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Trusted by Forward-Thinking Businesses</h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-16">
          From promising tech startups to established manufacturing juggernauts, we have facilitated sustainable growth through solid legal foundations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 opacity-60 grayscale filter hover:grayscale-0 transition-all duration-500">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} className="bg-white border rounded-2xl h-32 flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-slate-400 font-bold text-xl uppercase tracking-widest">
                CLIENT {i}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-12">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: "Advocate Ahmed simplified the SECP labyrinth for us. Our tech startup was incorporated in record time, allowing us to close our seed funding round without a hitch.", author: "CEO, FinTech Startup" },
            { quote: "We were facing severe notices from FBR due to past negligence. The team stepped in, cleared out the backlog, and restored our active status smoothly.", author: "Director, Logistics Firm" },
            { quote: "Their ongoing retainer services for EOBI and corporate compliance give us peace of mind. Highly recommended for any serious business owner.", author: "Managing Partner, Real Estate Agency" }
          ].map((t, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 text-left border">
              <div className="text-blue-200 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="font-bold text-slate-900">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
