export const metadata = {
  title: 'About | Advocate Muhammad Ahmed',
  description: 'Expert corporate lawyer based in Rawalpindi, Pakistan with extensive experience in business compliance.',
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';

  return (
    <div className={`py-20 ${isUrdu ? 'rtl font-urdu' : 'ltr font-sans'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-slate-200 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
              [Lawyer Photo here]
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Advocate Muhammad Ahmed</h1>
            <p className="text-xl text-blue-700 font-medium mb-6">High Court Advocate & Corporate Consultant</p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Bar Council No: P-12345</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">LL.B (Hons.), LL.M (Corporate Law)</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">10+ Years Experience</span>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Muhammad Ahmed is a highly sought-after corporate lawyer based in Rawalpindi. With over a decade of dedicated experience in company registrations, tax planning, and corporate compliance, he serves as the backbone for numerous startups and established enterprises across Pakistan.
              </p>
              <p>
                Recognized by the Punjab Bar Council, Advocate Ahmed specializes in navigating the complex regulatory environments of SECP and FBR. His proactive approach to EOBI and banking disputes has recovered millions and saved businesses from paralyzing penalties.
              </p>
              <p>
                Whether you are a solo entrepreneur registering a firm for the first time, or a growing company needing comprehensive structural reforms, Advocate Ahmed provides tailored, transparent, and swift legal facilitation.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900 text-white rounded-3xl p-10 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
            <div className="font-medium text-slate-300">Companies Registered</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">1,200+</div>
            <div className="font-medium text-slate-300">Tax Returns Filed</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">10</div>
            <div className="font-medium text-slate-300">Years of Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
