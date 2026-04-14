import { notFound } from 'next/navigation';
import { ShieldCheck, FileText, Clock, Building2, User, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

// This would typically come from your DB/CMS
const getServiceData = (slug: string, isUrdu: boolean) => {
  const data = {
    'company-registration': {
      title: isUrdu ? 'کمپنی رجسٹریشن' : 'SECP Company Registration',
      description: 'Comprehensive incorporation services for Private Limited, SMC, and NGOs in Pakistan.',
      duration: '7 - 10 Days',
      icon: Building2,
      documents: ['CNIC Copies of Directors', 'Registered Office Address', 'Company Name Options (3 choices)'],
      steps: [
        { title: 'Name Reservation', desc: 'Apply for name availability via eServices.' },
        { title: 'Drafting Docs', desc: 'Preparation of Memorandum & Articles of Association.' },
        { title: 'SECP Filing', desc: 'Submission of forms (Form 1, 21, 29) along with challan.' },
        { title: 'Incorporation', desc: 'Issuance of digitally signed Certificate of Incorporation.' }
      ],
    },
    'fbr-registration': {
      title: isUrdu ? 'ایف بی آر رجسٹریشن' : 'FBR & Tax Filings',
      description: 'Hassle-free NTN, STRN registration, and annual returns filing.',
      duration: '2 - 3 Days',
      icon: FileText,
      documents: ['Business Letterhead', 'Utility Bill', 'Bank Account Maintenance Certificate'],
      steps: [
        { title: 'NTN Generation', desc: 'Registration on FBR IRIS portal.' },
        { title: 'Biometrics', desc: 'Biometric verification at e-Sahulat center.' },
        { title: 'ATL Inclusion', desc: 'Filing of return to appear on Active Taxpayer List.' }
      ]
    }
  };
  return (data as any)[slug] || null;
};

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ locale: string, slug: string }>
}) {
  const { locale, slug } = await params;
  const isUrdu = locale === 'ur';
  
  const service = getServiceData(slug, isUrdu);
  if (!service) return notFound();

  const Icon = service.icon;

  return (
    <div className={`min-h-screen bg-white ${isUrdu ? 'rtl' : 'ltr'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-2xl mb-6 text-blue-400">
            <Icon className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl">{service.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-12">
            {/* Process */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <ShieldCheck className="text-blue-600 w-6 h-6" /> 
                {isUrdu ? 'طریقہ کار' : 'Our Process'}
              </h2>
              <div className="space-y-6">
                {service.steps.map((step: any, i: number) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      <p className="text-slate-600 mt-2">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            {/* Sidebar Details */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-6 border-b border-slate-200 pb-4">Key Details</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Timeline
                  </div>
                  <div className="font-bold text-slate-900">{service.duration}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Required Documents
                  </div>
                  <ul className="space-y-2">
                    {service.documents.map((doc: string, i: number) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
              <h3 className="font-bold text-xl mb-4">Start Your Proceeding</h3>
              <p className="text-blue-100 mb-6 text-sm">Book a free consultation call.</p>
              <Link href="/appointment" className="block w-full py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-slate-50">
                Book Appointment
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
