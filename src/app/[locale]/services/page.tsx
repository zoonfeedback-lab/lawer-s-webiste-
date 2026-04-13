export const metadata = {
  title: 'Our Services | Advocate Muhammad Ahmed',
  description: 'Detailed breakdown of our corporate legal services including SECP incorporation, FBR tax filings, EOBI compliance, and banking facilitation.',
};

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';

  const services = [
    {
      title: 'SECP Company Registration',
      duration: '7 - 10 Days',
      documents: ['CNIC Copies of Directors', 'Registered Office Address', 'Company Name Options'],
      process: ['Name Availability Check', 'Drafting of MOA & AOA', 'Filing with SECP', 'Issuance of Incorporation Certificate'],
      description: 'Complete start-to-finish facilitation for Private Limited, SMC, Association of Persons (AOP), and Sole Proprietorships.'
    },
    {
      title: 'FBR Registration & Tax Filings',
      duration: '2 - 3 Days',
      documents: ['Business Letterhead', 'Utility Bill', 'Bank Account Maintenance Certificate'],
      process: ['NTN/STRN Generation', 'IRIS Portal Setup', 'Biometric Verification', 'Active Taxpayer List (ATL) Inclusion'],
      description: 'Navigate the complex tax landscape with ease. We handle your annual income tax returns, sales tax, and digital invoicing requirements.'
    },
    {
      title: 'Banking Facilitation',
      duration: '5 - 7 Days',
      documents: ['SECP Certificate', 'Board Resolution', 'NTN Certificate'],
      process: ['Bank Selection Advice', 'Preparation of Board Resolutions', 'Liaising with Branch Manager', 'Account Activation'],
      description: 'Opening a business current account can be tricky. We provide the necessary documentation and legal backing to speed up the process with Tier-1 banks.'
    },
    {
      title: 'EOBI & Social Welfare Compliance',
      duration: '14 Days',
      documents: ['Employee List', 'Company Registration Proof'],
      process: ['Employer Registration', 'Employee Data Entry', 'Challan Generation', 'Issuance of EOBI Cards'],
      description: 'Ensure compliance with Pakistani labor laws by registering your employees with the Employees Old-Age Benefits Institution (EOBI) and PESSI.'
    }
  ];

  return (
    <div className={`min-h-screen bg-slate-50 py-20 ${isUrdu ? 'rtl font-urdu' : 'ltr font-sans'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {isUrdu ? 'ہماری کارپوریٹ خدمات' : 'Corporate Legal Services'}
          </h1>
          <p className="text-lg text-slate-600">
            {isUrdu 
              ? 'ہم آپ کے کاروبار کو قانونی طور پر محفوظ رکھنے کے لیے وسیع خدمات فراہم کرتے ہیں۔' 
              : 'End-to-end legal facilitation to ensure your business starts strong and remains fully compliant in Pakistan.'}
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 hover:shadow-md transition-shadow">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">{service.title}</h2>
                <p className="text-slate-700 leading-relaxed mb-6">{service.description}</p>
                
                <div className="bg-blue-50 text-blue-900 px-4 py-3 rounded-lg inline-flex items-center gap-2 mb-8 font-medium">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Estimated Timeline: {service.duration}
                </div>
              </div>

              <div className="flex-1 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Required Documents
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-8 ml-2">
                  {service.documents.map((doc, i) => <li key={i}>{doc}</li>)}
                </ul>

                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Our Process
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-2">
                  {service.process.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
