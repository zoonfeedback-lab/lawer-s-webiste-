import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { 
  ArrowRight, Building2, FileText, Landmark, ShieldCheck, 
  MapPin, Phone, Mail, CheckCircle2, ChevronDown, MessageSquare, 
  Briefcase, Scale, Star, Users, Calculator, FileCheck, GraduationCap, User, Check
} from 'lucide-react';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Index');
  const isUrdu = locale === 'ur';

  return (
    <div className={`w-full ${isUrdu ? 'rtl' : 'ltr'} bg-slate-50`} dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* 1. Hero Section */}
      <section className="relative bg-[#0B1527] text-white py-24 lg:py-32 overflow-hidden mx-auto">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <AnimatedSection className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center" direction="up">
          <Badge variant="outline" className="mb-8 py-1.5 px-4 bg-white/5 border-white/10 text-blue-300 gap-2 text-sm tracking-wide">
            <Scale className="w-4 h-4" />
            {t('title')}
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-5xl leading-[1.1] font-sans">
            {isUrdu ? 'راولپنڈی میں سرکردہ کارپوریٹ اور ٹیکس وکیل' : 'Premium Corporate & Tax Legal Services'}
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mb-12 leading-relaxed font-sans font-light">
            {t('subheadline')} {isUrdu ? '' : 'We help businesses focus on growth while we handle their legal, corporate, and tax compliance efficiently.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-sans">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white text-base h-14 px-8 rounded-full shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5">
              <Link href="/appointment">
                {t('bookAppointment')} <ArrowRight className={`w-5 h-5 ${isUrdu ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-white text-base h-14 px-8 rounded-full transition-all backdrop-blur-sm">
              <Link href="/services">
                {isUrdu ? 'ہماری خدمات' : 'Explore Services'}
              </Link>
            </Button>
          </div>
          
          {/* Trust Badges under Hero */}
          <div className="mt-20 pt-8 border-t border-white/10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className={isUrdu ? 'text-right' : 'text-left'}>
                <p className="text-2xl font-bold font-sans">
                  <AnimatedCounter end={10} suffix="+" />
                </p>
                <p className="text-sm text-blue-200/70">{isUrdu ? 'سال کا تجربہ' : 'Years Experience'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-center border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                <Users className="w-6 h-6" />
              </div>
              <div className={isUrdu ? 'text-right' : 'text-left'}>
                <p className="text-2xl font-bold font-sans">
                  <AnimatedCounter end={500} suffix="+" />
                </p>
                <p className="text-sm text-blue-200/70">{isUrdu ? 'مطمئن کلائنٹس' : 'Happy Clients'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                <FileCheck className="w-6 h-6" />
              </div>
              <div className={isUrdu ? 'text-right' : 'text-left'}>
                <p className="text-2xl font-bold font-sans">
                  <AnimatedCounter end={100} suffix="%" />
                </p>
                <p className="text-sm text-blue-200/70">{isUrdu ? 'ایس ای سی پی اور ایف بی آر کے ماہر' : 'SECP & FBR Expert'}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 relative border border-slate-200">
                {/* Placeholder for Lawyer Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                  <User className="w-32 h-32 opacity-20" />
                  <span className="absolute bottom-8 font-medium">Lawyer Portrait Placeholder</span>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-[#0B1527] text-white p-6 rounded-2xl flex items-center gap-4 shadow-xl">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Scale className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-xl">Top Rated</p>
                  <p className="text-blue-200 text-sm">Legal Counsel</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 mt-12 lg:mt-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" />
                {isUrdu ? 'ہمارے بارے میں' : 'About Basit Legal'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1527] mb-6 leading-tight">
                {isUrdu ? 'آپ کا قابل اعتماد قانونی شراکت دار' : 'Your Trusted Partner for Corporate Law.'}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {isUrdu ? 'ہم کاروباری رجسٹریشن، ٹیکس فائلنگ، اور کارپوریٹ تعمیل میں مہارت رکھتے ہیں۔ ایک دہائی کے تجربے کے ساتھ، ہم پیچیدہ قانونی معاملات کو آسان بناتے ہیں تاکہ آپ اپنے کاروبار کو بڑھانے پر توجہ دے سکیں۔' : 'Specializing in business registration, tax filing, and corporate compliance in Pakistan. With over a decade of hands-on legal experience, we simplify complex regulatory frameworks so you can focus on scaling your business seamlessly.'}
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  isUrdu ? 'کارپوریٹ قانونی ماہر' : 'Corporate Legal Expert',
                  isUrdu ? 'ایس ای سی پی رجسٹریشن' : 'Expedited SECP Registrations',
                  isUrdu ? 'جامع ٹیکس کے حل' : 'Comprehensive Tax & FBR Solutions'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-slate-800 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild size="lg" className="bg-[#0B1527] text-white hover:bg-slate-800 rounded-full h-14 px-8 text-base">
                <Link href="/about">{isUrdu ? 'مزید پڑھیں' : 'More About Us'}</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 3. Services Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
              {isUrdu ? 'ہماری خدمات' : 'Practice Areas'}
            </span>
            <h2 className="text-4xl font-bold text-[#0B1527] mb-6">
              {isUrdu ? 'جامع قانونی خدمات' : 'Comprehensive Legal Services'}
            </h2>
            <p className="text-lg text-slate-600">
              {isUrdu ? 'آپ کے کاروبار کو قانونی تحفظ فراہم کرنے کے لیے پیشہ ورانہ خدمات۔' : 'We provide end-to-end legal solutions to ensure your business remains fully compliant and structurally sound.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: 'Private Limited Company', desc: 'Complete registration process for Pvt Ltd companies with SECP.' },
              { icon: Briefcase, title: 'Partnership Registration', desc: 'Secure and legally binding partnership deeds and registrations.' },
              { icon: FileCheck, title: 'SECP Compliance', desc: 'Annual returns, Form 29, changes in directors and paid-up capital.' },
              { icon: FileText, title: 'FBR Tax Filing', desc: 'Income tax returns, sales tax (STRN) registration and filing.' },
              { icon: Calculator, title: 'NTN Registration', desc: 'Individual and business National Tax Number registration.' },
              { icon: ShieldCheck, title: 'Trademark Registration', desc: 'Protect your brand identity, logo, and intellectual property.' },
              { icon: Landmark, title: 'Chamber of Commerce', desc: 'Membership registration for local Chambers of Commerce.' },
              { icon: Users, title: 'NGO / NPO Registration', desc: 'Legal structuring and establishment for non-profits & trusts.' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col">
                <div className="w-14 h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1527] mb-3">{s.title}</h3>
                <p className="text-slate-600 text-base flex-grow mb-6 leading-relaxed">{s.desc}</p>
                <Link href="/services" className="text-blue-600 font-bold text-sm flex items-center gap-2 group/link mt-auto uppercase tracking-wide">
                  {isUrdu ? 'مزید تفصیلات' : 'View Details'} 
                  <ArrowRight className={`w-4 h-4 transition-transform ${isUrdu ? 'group-hover/link:-translate-x-1 rotate-180' : 'group-hover/link:translate-x-1'}`} />
                </Link>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-[#0B1527] text-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {isUrdu ? 'ہمیں کیوں منتخب کریں' : 'Why Choose Basit Legal'}
            </h2>
            <p className="text-lg text-blue-200/80">
              {isUrdu ? 'بہترین قانونی رہنمائی اور کلائنٹ کی مکمل اطمینان۔' : 'We stand out by delivering rapid, transparent, and expert-driven results.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { title: 'Fast Processing', desc: 'We prioritize speed without compromising accuracy in your regulatory filings and drafts.' },
              { title: 'Transparent Pricing', desc: 'No hidden fees or surprise charges. You know exactly what you pay for from day one.' },
              { title: 'Expert Legal Advice', desc: 'Deep regulatory knowledge to keep you compliant and protected under the law.' },
              { title: '24/7 Support', desc: 'Dedicated communication channels and rapid response times for our premium clients.' },
              { title: 'Trusted by Businesses', desc: 'A proven track record with hundreds of successful corporate and tax registrations.' },
              { title: 'Secure & Confidential', desc: 'Your business documentation and strategies are handled with maximum privacy.' }
            ].map((f, i) => (
              <div key={i} className="flex gap-5">
                <div className="mt-1 w-12 h-12 shrink-0 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-blue-100/70 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 5. Process Section */}
      <section className="py-24 bg-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1527] mb-6">
              {isUrdu ? 'ہمارا کام کرنے کا طریقہ کار' : 'Our Simple Process'}
            </h2>
            <p className="text-lg text-slate-600">
              {isUrdu ? 'آسان اور تیز ترین رجسٹریشن کا طریقہ' : 'We have streamlined complex legal procedures into a highly efficient 4-step framework.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
            <div className="hidden md:block absolute top-[45px] left-[12%] right-[12%] h-0.5 bg-blue-100 z-0"></div>
            
            {[
              { step: '01', title: 'Consultation', desc: 'Contact us and discuss your legal requirements.' },
              { step: '02', title: 'Strategy', desc: 'We formulate the best approach and timeline.' },
              { step: '03', title: 'Documentation', desc: 'We handle all paperwork and complex draftings.' },
              { step: '04', title: 'Completion', desc: 'Registrations are completed and handed over.' }
            ].map((p, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-blue-50 shadow-xl rounded-full flex items-center justify-center text-3xl font-black text-blue-600 mb-6 bg-clip-padding transition-transform hover:scale-110">
                  {p.step}
                </div>
                <h3 className="text-xl font-bold text-[#0B1527] mb-3">{p.title}</h3>
                <p className="text-slate-600 max-w-[200px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/60 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 text-center" direction="up">
          <h2 className="text-4xl font-bold text-[#0B1527] mb-6">
             {isUrdu ? 'صنعتیں جن کی ہم خدمت کرتے ہیں' : 'Industries We Serve'}
          </h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            {isUrdu ? 'ہر صنعت کی ضروریات کے مطابق ۔' : 'Our legal solutions are tailored to meet the specific regulatory demands of various rapidly growing industries.'}
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Startups', 'Small Businesses', 'E-commerce', 'Freelancers', 'IT & Software', 'Real Estate', 'Manufacturing', 'Retail & Trade', 'Healthcare'].map((industry, idx) => (
              <div key={idx} className="bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm text-[#0B1527] font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default">
                {industry}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-[#0B1527] text-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{isUrdu ? 'کلائنٹ کے جائزے' : 'Client Testimonials'}</h2>
            <p className="text-blue-200/80 text-lg">Don&apos;t just take our word for it—listen to our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Very professional and incredibly fast SECP registration. They handled everything perfectly with zero hassle for my team.", author: "Ali Raza", comp: "Tech Solutions Pvt Ltd" },
              { quote: "Highly recommended for tax filing. I was struggling with FBR notices until Basit Legal took over and resolved the issue.", author: "Sana Mahmood", comp: "E-Commerce Founder" },
              { quote: "The best corporate lawyer in Rawalpindi. Transparent pricing and exceptional 24/7 support throughout our incorporation phase.", author: "Usman Khan", comp: "Real Estate Developer" }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl relative hover:bg-white/10 transition-colors cursor-default">
                 <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                 </div>
                 <p className="text-lg text-blue-50 mb-8 leading-relaxed italic">&quot;{t.quote}&quot;</p>
                 <div className="flex items-center gap-4">
                   <div className="w-14 h-14 bg-blue-500/30 rounded-full flex items-center justify-center font-bold text-xl text-blue-200">
                     {t.author.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-bold text-lg">{t.author}</h4>
                     <p className="text-sm text-blue-300">{t.comp}</p>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 8. Trusted By Section */}
      <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 text-center" direction="up">
          <h3 className="text-2xl font-bold text-slate-800 mb-12">{isUrdu ? 'ان کمپنیوں کا اعتماد' : 'Trusted by Top Regional Businesses'}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto border-b border-slate-100 pb-16">
             <div>
               <p className="text-5xl font-black text-blue-600 mb-3 tracking-tight">
                 <AnimatedCounter end={500} suffix="+" />
               </p>
               <p className="text-slate-600 font-medium text-lg">Businesses Registered</p>
             </div>
             <div>
               <p className="text-5xl font-black text-blue-600 mb-3 tracking-tight">
                 <AnimatedCounter end={1000} suffix="+" />
               </p>
               <p className="text-slate-600 font-medium text-lg">Tax Filings</p>
             </div>
             <div>
               <p className="text-5xl font-black text-blue-600 mb-3 tracking-tight">
                 <AnimatedCounter end={50} suffix="+" />
               </p>
               <p className="text-slate-600 font-medium text-lg">Corporate Clients</p>
             </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-3xl font-black tracking-tighter text-slate-400">TECHCORP</div>
            <div className="text-3xl font-black tracking-tighter text-slate-400">BuildReal</div>
            <div className="text-3xl font-black tracking-tighter text-slate-400">E-COMMERCE PK</div>
            <div className="text-3xl font-black tracking-tighter text-slate-400">GLOBAL <span className="font-light">LLC</span></div>
            <div className="text-3xl font-black tracking-tighter text-slate-400">Nova<span className="text-blue-500">Soft</span></div>
          </div>
        </AnimatedSection>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 max-w-4xl" direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1527] mb-6">{isUrdu ? 'اکثر پوچھے گئے سوالات' : 'Frequently Asked Questions'}</h2>
            <p className="text-lg text-slate-600">Quick answers to common corporate and taxation inquiries.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How long does company registration take?", a: "With SECP, a standard Private Limited Company registration typically takes 3 to 5 business days after name availability and document submission are fully approved." },
              { q: "What documents are required for SECP?", a: "Generally, you need CNIC copies of all directors, a registered office address, mobile numbers registered on those CNICs, and brief details about your proposed business activities." },
              { q: "What is the SECP fee?", a: "The fee depends on the authorized capital of the company. A standard 100,000 PKR authorized capital company has starting SECP challan fees around normal minimal corporate rates." },
              { q: "Do you offer online consultation?", a: "Yes! You can book an appointment directly through our website and we will arrange a comprehensive Google Meet or WhatsApp consultation tailored to your schedule." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg md:text-xl text-[#0B1527] select-none">
                  {faq.q}
                  <ChevronDown className="w-6 h-6 text-blue-600 transition-transform duration-300 group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 text-lg">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 10. Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
        <AnimatedSection className="container mx-auto px-4 relative z-10 text-center" direction="up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            {isUrdu ? 'آج ہی اپنا کاروبار شروع کریں' : 'Start Your Business Today'}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            {isUrdu ? 'پیشہ ورانہ قانونی مدد کے لیے ابھی رابطہ کریں اور اپنے کاروبار کو محفوظ بنائیں۔' : 'Get expert legal facilitation to quickly establish your corporate presence. Book a free initial consultation with our team now.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg md:text-xl h-16 px-10 rounded-full shadow-xl transition-all hover:scale-105">
              <Link href="/appointment">
                {t('bookAppointment')} <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BE5A] text-white text-lg md:text-xl h-16 px-10 rounded-full shadow-xl shadow-[#25D366]/20 transition-all hover:scale-105">
              <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer">
                <MessageSquare className="w-6 h-6 mr-3" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* 11. Contact Section */}
      <section className="py-24 bg-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 max-w-6xl" direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                {isUrdu ? 'رابطہ کریں' : 'Contact Us'}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1527] mb-6">{isUrdu ? 'ہم سے رابطہ کریں' : 'Get In Touch'}</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">We are conveniently located in Rawalpindi. Reach out to schedule a visit or discuss your case online with our experts.</p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0B1527] mb-2">Phone & WhatsApp</h4>
                    <p className="text-slate-600 text-lg">+92 300 1234567</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0B1527] mb-2">Email Address</h4>
                    <p className="text-slate-600 text-lg">info@basitlegal.com</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0B1527] mb-2">Office Location</h4>
                    <p className="text-slate-600 text-lg">Suite 405, Legal Center Building,<br/>Rawalpindi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-slate-100 rounded-3xl h-full min-h-[500px] w-full flex flex-col items-center justify-center border-2 border-slate-200 text-slate-400 p-8 text-center relative overflow-hidden group hover:border-blue-300 transition-colors">
               <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
               <MapPin className="w-20 h-20 opacity-20 mb-6 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-500" />
               <h3 className="text-xl font-bold text-slate-500 mb-2 z-10">Interactive Map</h3>
               <p className="max-w-xs z-10">Google Maps embed code goes here to show the exact location of the rawalpindi office.</p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
