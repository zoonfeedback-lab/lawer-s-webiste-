import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ChevronRight, Home, ArrowRight, Clock, FileText, CheckCircle2, Scale, Check, Phone } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Advocate Muhammad Basit',
  description: 'Detailed breakdown of our corporate legal services including SECP incorporation, FBR tax filings, EOBI compliance, and banking facilitation.',
};

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';

  // KEEP EXISTING SERVICES
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
    <div className={`min-h-screen bg-slate-50 ${isUrdu ? 'rtl font-urdu' : 'ltr font-sans'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      
      {/* 1. Page Header Section */}
      <section className="relative bg-[#0B1527] text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <AnimatedSection className="container mx-auto px-4 relative z-10 text-center" direction="up">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-blue-300 font-medium mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" /> Home
            </Link>
            <ChevronRight className={`w-4 h-4 ${isUrdu ? 'rotate-180' : ''}`} />
            <span className="text-white">Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {isUrdu ? 'کارپوریٹ قانونی خدمات' : 'Corporate Legal Services'}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            {isUrdu 
              ? 'ہم آپ کے کاروبار کو قانونی طور پر محفوظ رکھنے کے لیے وسیع خدمات فراہم کرتے ہیں۔' 
              : 'End-to-end legal facilitation to ensure your business starts strong and remains fully compliant in Pakistan.'}
          </p>
        </AnimatedSection>
      </section>

      {/* 2. Centered Services Section (Existing Content) */}
      <section className="py-24 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1527]">
              Our Corporate Legal Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-12 lg:gap-16 hover:shadow-xl hover:border-blue-100 transition-all group">
                  <div className="flex-1">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1527] mb-6 leading-tight group-hover:text-blue-700 transition-colors">{service.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">{service.description}</p>
                    
                    <div className="bg-blue-50/80 text-blue-800 px-6 py-4 rounded-xl inline-flex items-center gap-3 font-semibold text-lg border border-blue-100">
                      <Clock className="w-6 h-6 text-blue-600" />
                      Estimated Timeline: {service.duration}
                    </div>
                  </div>

                  <div className="flex-1 bg-slate-50/80 rounded-[1.5rem] p-8 lg:p-10 border border-slate-100">
                    <h3 className="text-xl font-bold text-[#0B1527] mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
                      <FileText className="w-6 h-6 text-blue-600" />
                      Required Documents
                    </h3>
                    <ul className="space-y-4 mb-10 text-slate-700">
                      {service.documents.map((doc, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-[1.05rem] pt-0.5">{doc}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-[#0B1527] mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      Our Process
                    </h3>
                    <ol className="space-y-5 text-slate-700 relative">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-5">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold shrink-0 text-sm mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-[1.05rem] pt-1 leading-snug">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 3. Add "How We Work" Section */}
      <section className="py-24 bg-white border-y border-slate-200/60 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Workflow</span>
            <h2 className="text-4xl font-bold text-[#0B1527] mb-6">How We Work</h2>
            <p className="text-lg text-slate-600">A seamless four-step process designed for maximum efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-0.5 bg-blue-100 z-0"></div>
            
            {[
              { step: '01', title: 'Consultation', desc: 'Initial review of your business needs', icon: Phone },
              { step: '02', title: 'Document Collection', desc: 'Gathering required legal documentation', icon: FileText },
              { step: '03', title: 'Legal Processing', desc: 'Filing applications and processing', icon: Scale },
              { step: '04', title: 'Completion', desc: 'Delivery of official certificates', icon: CheckCircle2 }
            ].map((p, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.15} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-28 h-28 bg-white border-[6px] border-slate-50 shadow-xl rounded-full flex items-center justify-center text-blue-600 mb-6 bg-clip-padding transition-transform group-hover:scale-110 group-hover:border-blue-50">
                  <p.icon className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-blue-500 mb-2 uppercase tracking-widest">Step {p.step}</div>
                <h3 className="text-2xl font-bold text-[#0B1527] mb-3">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed w-[80%]">{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 4. Add "Why Choose Us" Section */}
      <section className="py-24 bg-[#0B1527] text-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 max-w-6xl" direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-xl text-blue-200 md:leading-relaxed font-light">
              We provide unmatched dedication to your corporate success. Here is why businesses trust Basit Legal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {[
              { title: 'Experienced Corporate Lawyer', desc: 'Over a decade of handling complex litigation and corporate tasks.' },
              { title: 'Fast Processing', desc: 'We skip the red tape to get your filings done quickly.' },
              { title: 'Transparent Fees', desc: 'No hidden costs. Everything is clearly outlined upfront.' },
              { title: 'Trusted Legal Services', desc: 'A proven track record with immense positive client feedback.' },
              { title: 'Dedicated Support', desc: 'We are always available via call, email, or WhatsApp.' },
              { title: 'Professional Consultation', desc: 'Expert insights into Pakistani law and corporate strategy.' }
            ].map((feature, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.1} className="flex items-start gap-5">
                <div className="mt-1 w-12 h-12 shrink-0 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/30">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-blue-200/70 leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 5. Add Statistics Section */}
      <section className="py-20 bg-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto text-center divide-x-0 md:divide-x divide-slate-100">
             <div className="flex flex-col items-center">
               <p className="text-5xl font-black text-blue-600 mb-3 tracking-tighter">
                 <AnimatedCounter end={500} suffix="+" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-wide text-sm">Clients Served</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-5xl font-black text-blue-600 mb-3 tracking-tighter">
                 <AnimatedCounter end={300} suffix="+" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-wide text-sm">Companies Reg.</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-5xl font-black text-blue-600 mb-3 tracking-tighter">
                 <AnimatedCounter end={10} suffix="+" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-wide text-sm">Years Exp.</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-5xl font-black text-blue-600 mb-3 tracking-tighter">
                 <AnimatedCounter end={98} suffix="%" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-wide text-sm">Client Satisfaction</p>
             </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 6. CTA Section */}
      <section className="py-28 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
        <AnimatedSection className="container mx-auto px-4 relative z-10 text-center max-w-3xl" direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light">
            Schedule a consultation today and let us handle your legal compliance.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100 text-xl h-16 px-10 rounded-full shadow-2xl hover:scale-105 transition-all">
            <Link href="/appointment">
              Book Appointment <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
}
