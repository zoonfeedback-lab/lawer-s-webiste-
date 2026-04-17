import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { 
  ArrowRight, ShieldCheck, Scale, CheckCircle2, Award, 
  BookOpen, Building2, Landmark, FileText, FileSignature, Users, User, Phone, Check, GraduationCap, Calculator
} from 'lucide-react';

export const metadata = {
  title: 'About | Abdul Basit & Co',
  description: 'Certified Financial & Management Advisors based in Abbottabad, Pakistan. Auditing, Tax, and Corporate Legal Advisory.',
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';

  return (
    <div className={`w-full ${isUrdu ? 'rtl font-urdu' : 'ltr font-sans'} bg-slate-50`} dir={isUrdu ? 'rtl' : 'ltr'}>
      
      {/* 1. About Hero Section (Light / Premium) */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 pt-32 pb-20 overflow-hidden border-b border-slate-100">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-between">
            <div className="flex-1 order-2 md:order-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-widest uppercase mb-6 border border-blue-100">
                <ShieldCheck className="w-4 h-4" /> CEO & Principal Advisor
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0B1527] mb-4 tracking-tight leading-tight">
                Abdul Basit
              </h1>
              <p className="text-2xl text-blue-600 font-medium mb-2">
                CEO — Abdul Basit & Co
              </p>
              <p className="text-base text-slate-500 font-medium mb-6">
                MS (A&F), CFMA, CFE, CTP (USA) | Auditor, Tax Practitioner, Corporate Legal Advisor
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
                A highly sought-after certified financial and management advisor based in Abbottabad, serving as the financial backbone for numerous startups and established enterprises across Pakistan.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white border border-slate-200 px-5 py-3 rounded-xl flex items-center gap-3 shadow-sm">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-800">10+ Years Experience</span>
                </div>
                <div className="bg-white border border-slate-200 px-5 py-3 rounded-xl flex items-center gap-3 shadow-sm">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-800">500+ Corporate Clients</span>
                </div>
                <div className="bg-white border border-slate-200 px-5 py-3 rounded-xl flex items-center gap-3 shadow-sm">
                  <Scale className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-800">SECP & FBR Specialist</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-10"></div>
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] -rotate-3 opacity-10"></div>
              <div className="w-64 h-64 md:w-80 md:h-96 bg-slate-200 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative z-10 flex items-center justify-center text-slate-400">
                 <User className="w-24 h-24 opacity-20" />
                 <span className="absolute bottom-8 font-medium">Headshot Placeholder</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. Professional Biography Section */}
      <section className="py-24 bg-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 max-w-4xl" direction="up">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-[#0B1527] mb-6">Professional Biography</h2>
             <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
           </div>
           
           <div className="space-y-8 text-lg text-slate-700 leading-relaxed columns-1 md:columns-2 gap-12">
              <p>
                Abdul Basit brings over a decade of dedicated expertise in auditing, aggressive tax planning, and seamless corporate compliance. His proactive approach to financial structuring bridges the gap between regulatory requirements and entrepreneurial vision.
              </p>
              <p>
                Recognized by the Punjab Bar Council, he specializes in exclusively navigating the complex environments of the Securities and Exchange Commission of Pakistan (SECP) and the Federal Board of Revenue (FBR). 
              </p>
              <p>
                Whether you are a solo entrepreneur registering a firm for the first time, or a growing enterprise needing massive structural reforms, Advocate Basit provides tailored, transparent, and swift legal facilitation.
              </p>
              <p>
                His interventions in EOBI and banking tier disputes have accurately recovered millions of rupees and shielded countless businesses from paralyzing penalties and regulatory roadblocks.
              </p>
           </div>
        </AnimatedSection>
      </section>

      {/* 3. Expertise / Practice Areas Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/60 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Core Competencies</span>
            <h2 className="text-4xl font-bold text-[#0B1527] mb-6">Practice Areas & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Company Registration', icon: Building2, desc: 'Pvt Ltd, SMC, AOP, and Sole Proprietorships via SECP.' },
              { title: 'Tax Compliance', icon: Calculator, desc: 'FBR tax auditing, STRN generation, and active taxpayer status recovery.' },
              { title: 'Banking Facilitation', icon: Landmark, desc: 'Tier-1 corporate account opening and banking dispute resolution.' },
              { title: 'Corporate Advisory', icon: Users, desc: 'Long-term legal structuring and directorship consultation.' },
              { title: 'Legal Documentation', icon: FileSignature, desc: 'Partnership deeds, MOA/AOA drafting, and formal agreements.' },
              { title: 'Compliance Services', icon: ShieldCheck, desc: 'EOBI, PESSI, and Chamber of Commerce complete integrations.' }
            ].map((area, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-blue-200 group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <area.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1527] mb-3">{area.title}</h3>
                  <p className="text-slate-600">{area.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 4. Experience Timeline Section */}
      <section className="py-24 bg-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 max-w-5xl" direction="up">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#0B1527] mb-6">Career Trajectory</h2>
            <p className="text-lg text-slate-600">A timeline of professional milestones and achievements.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-slate-100">
            {[
              { year: '2014', title: 'Started Legal Practice', desc: 'Commenced legal journey bridging the gap between law and local businesses.' },
              { year: '2017', title: 'Corporate Legal Specialization', desc: 'Transitioned focus exclusively into corporate SECP & FBR law domains.' },
              { year: '2020', title: 'Expanded Corporate Services', desc: 'Introduced EOBI, Trademark, and banking facilitation to the portfolio.' },
              { year: '2024', title: '500+ Corporate Clients', desc: 'Achieved a massive milestone of continuously active corporate clients.' }
            ].map((item, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.1}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125">
                     <span className="w-3 h-3 bg-white rounded-full"></span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                    <span className="font-black text-blue-600 text-3xl mb-2 block tracking-tighter">{item.year}</span>
                    <h3 className="font-bold text-[#0B1527] text-xl mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 5. Credentials & Certifications Section */}
      <section className="py-20 bg-[#0B1527] text-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
             <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
               <Scale className="w-10 h-10 mx-auto text-blue-400 mb-4" />
               <h4 className="font-bold text-lg mb-2">High Court Advocate</h4>
               <p className="text-blue-200/60 text-sm">Recognized by the Punjab Bar Council.</p>
             </div>
             <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
               <GraduationCap className="w-10 h-10 mx-auto text-blue-400 mb-4" />
               <h4 className="font-bold text-lg mb-2">Corporate Consultant</h4>
               <p className="text-blue-200/60 text-sm">LL.M Spec. in Corporate Law.</p>
             </div>
             <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
               <FileSignature className="w-10 h-10 mx-auto text-blue-400 mb-4" />
               <h4 className="font-bold text-lg mb-2">SECP Expert</h4>
               <p className="text-blue-200/60 text-sm">Pvt Ltd & AOP structuring authority.</p>
             </div>
             <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
               <BookOpen className="w-10 h-10 mx-auto text-blue-400 mb-4" />
               <h4 className="font-bold text-lg mb-2">FBR Tax Specialist</h4>
               <p className="text-blue-200/60 text-sm">Advanced taxation litigation expert.</p>
             </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 6. Why Choose Section */}
      <section className="py-24 bg-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 max-w-5xl" direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B1527] mb-6">Why Work With Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {[
              { title: 'Experienced Corporate Lawyer', desc: 'A decade of niche experience strictly within Pakistani corporate parameters.' },
              { title: 'Fast Processing', desc: 'Incorporate your startup instantly without traditional bureaucratic delays.' },
              { title: 'Professional Consultation', desc: 'Clear, actionable, and 100% legal advice tailored to your distinct business model.' },
              { title: 'Transparent Fees', desc: 'No hidden agency charges. Everything is billed transparently upfront.' },
              { title: 'Trusted by Businesses', desc: 'A proven 98% satisfaction rate across hundreds of verified corporate firms.' }
            ].map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 w-10 h-10 shrink-0 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1527] mb-2">{f.title}</h3>
                  <p className="text-slate-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 7. Statistics Section (Expanded) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 border-b overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto text-center divide-x-0 md:divide-x divide-slate-200">
             <div className="flex flex-col items-center">
               <p className="text-4xl md:text-5xl font-black text-blue-600 mb-3 tracking-tighter">
                 <AnimatedCounter end={500} suffix="+" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Companies Registered</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-4xl md:text-5xl font-black text-blue-600 mb-3 tracking-tighter">
                 <AnimatedCounter end={1200} suffix="+" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Tax Returns</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-4xl md:text-5xl font-black text-blue-600 mb-3 tracking-tighter">
                 <AnimatedCounter end={10} suffix="+" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Years Active</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-4xl md:text-5xl font-black text-blue-600 mb-3 tracking-tighter">
                 <AnimatedCounter end={98} suffix="%" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Satisfaction</p>
             </div>
             <div className="flex flex-col items-center md:col-span-1 col-span-2">
               <p className="text-4xl md:text-5xl font-black text-blue-600 mb-3 tracking-tighter">
                 <AnimatedCounter end={300} suffix="+" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Corporate Clients</p>
             </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 8. CTA Section */}
      <section className="py-28 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
        <AnimatedSection className="container mx-auto px-4 relative z-10 text-center max-w-3xl" direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Corporate Legal Assistance?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light">
            Schedule a consultation today and safeguard your company's future.
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
