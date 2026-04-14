import PortfolioClient from './PortfolioClient';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { 
  ArrowRight, Briefcase, Building2, CheckCircle2, ChevronRight, 
  Home, Star, Users, MessageSquare, Scale, MapPin
} from 'lucide-react';

export const metadata = {
  title: 'Portfolio & Case Studies | Advocate Muhammad Basit',
  description: 'View our past success stories in SECP company registration, FBR tax compliance, EOBI, and corporate banking.',
};

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';
  
  return (
    <div className={`w-full ${isUrdu ? 'rtl' : 'ltr'} bg-slate-50 font-sans`} dir={isUrdu ? 'rtl' : 'ltr'}>
      
      {/* 1. Large Premium Hero Section */}
      <section className="relative bg-[#0B1527] text-white pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <AnimatedSection className="container mx-auto px-4 relative z-10 text-center" direction="up">
          <div className="flex items-center justify-center gap-2 text-sm text-blue-300 font-medium mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" /> Home
            </Link>
            <ChevronRight className={`w-4 h-4 ${isUrdu ? 'rotate-180' : ''}`} />
            <span className="text-white">Our Track Record</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            {isUrdu ? 'ہمارا ٹریک ریکارڈ' : 'Our Track Record'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            {isUrdu 
              ? 'مختلف صنعتوں میں کامیاب کارپوریٹ قانونی حل کی نمائش' 
              : 'Showcasing successful corporate legal solutions, registrations, and complex compliance resolutions across diverse industries.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </p>
              <p className="text-blue-200 uppercase tracking-widest text-sm font-bold">Total Projects</p>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </p>
              <p className="text-blue-200 uppercase tracking-widest text-sm font-bold">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </p>
              <p className="text-blue-200 uppercase tracking-widest text-sm font-bold">Industries Served</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2 & 3 & 4. Filters, Featured Case, Portfolio Grid inside Client Component */}
      <section className="py-24 relative -mt-10 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 z-20 relative" direction="up">
           <PortfolioClient isUrdu={isUrdu} />
        </AnimatedSection>
      </section>

      {/* 5. Industries We Served Section */}
      <section className="py-24 bg-[#0B1527] text-white border-y border-slate-800 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 text-center" direction="up">
          <div className="max-w-3xl mx-auto mb-16">
             <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Market Coverage</span>
             <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Industries We Serve
             </h2>
             <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Technology & IT', icon: '💻' },
              { name: 'Manufacturing', icon: '🏭' },
              { name: 'Logistics', icon: '🚚' },
              { name: 'E-commerce', icon: '🛒' },
              { name: 'Startups', icon: '🚀' },
              { name: 'SMEs', icon: '🏢' },
              { name: 'Real Estate', icon: '🏗️' },
              { name: 'Import / Export', icon: '🌍' }
            ].map((ind, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05} direction="up">
                <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl shadow-lg flex items-center gap-3 hover:bg-white/10 hover:border-blue-400 hover:-translate-y-1 transition-all cursor-default">
                  <span className="text-2xl">{ind.icon}</span>
                  <span className="font-semibold text-lg tracking-wide">{ind.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 6. Client Results Section */}
      <section className="py-24 bg-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 text-center" direction="up">
           <h2 className="text-4xl font-bold text-[#0B1527] mb-16 tracking-tight">Quantifiable Success</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto divide-x-0 md:divide-x divide-slate-100">
             <div className="flex flex-col items-center">
               <p className="text-6xl font-black text-blue-600 mb-4 tracking-tighter">
                 <AnimatedCounter end={500} suffix="+" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">Companies Registered</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-6xl font-black text-blue-600 mb-4 tracking-tighter">
                 <AnimatedCounter end={200} suffix="+" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">Tax Filings</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-6xl font-black text-blue-600 mb-4 tracking-tighter">
                 <AnimatedCounter end={100} suffix="+" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">Banking Cases</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-6xl font-black text-blue-600 mb-4 tracking-tighter">
                 <AnimatedCounter end={98} suffix="%" />
               </p>
               <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">Client Satisfaction</p>
             </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 7. Timeline Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 max-w-5xl" direction="up">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#0B1527] mb-4">A Decade of Excellence</h2>
            <p className="text-lg text-slate-600">Our journey of delivering enterprise-level compliance over the years.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-blue-200">
            {[
              { year: '2024', title: 'Banking Corporate Cases', desc: 'Resolved complex international gateway disputes for e-commerce.' },
              { year: '2023', title: 'Mass SECP Registrations', desc: 'Facilitated over 150 private limited registrations for startups.' },
              { year: '2022', title: 'FBR Tax Compliance Push', desc: 'Recovered ATL status for numerous manufacturing units.' },
              { year: '2020', title: 'Established the Firm', desc: 'Started with a commitment to transparent and clear legal frameworks.' }
            ].map((item, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.1}>
                <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125">
                     <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="font-bold text-slate-900 text-xl">{item.title}</h3>
                       <span className="font-black text-blue-600 text-xl opacity-50">{item.year}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-24 bg-[#0B1527] text-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Endorsements</h2>
            <p className="text-lg text-blue-200">Reputation built on uncompromised quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { review: "Their SECP expertise is unparalleled. Registered our holding company flawlessly.", comp: "Global Trading LLC", author: "Basit Qureshi" },
              { review: "Fixed our massive multi-year FBR backlog in weeks. Unbelievable precision.", comp: "Alpha Manufacturers", author: "Kashif Ijaz" },
              { review: "Consultation was extremely professional. They understand exactly what modern businesses need.", comp: "NextGen Software", author: "Sonia Khan" }
            ].map((t, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative hover:bg-white/10 transition-colors h-full flex flex-col">
                  <div className="flex text-yellow-400 mb-6">
                    <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-lg text-blue-50 mb-8 font-light italic flex-grow">"{t.review}"</p>
                  <div>
                    <h4 className="font-bold text-lg">{t.author}</h4>
                    <p className="text-blue-300 font-medium">{t.comp}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 9. CTA Section */}
      <section className="py-32 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
        <AnimatedSection className="container mx-auto px-4 relative z-10 text-center max-w-4xl" direction="up">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Have a Corporate Legal Requirement?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 font-light">
            Schedule a consultation today and allow our highly experienced team to guide your business to safety.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100 text-xl h-16 px-12 rounded-full shadow-2xl hover:scale-105 transition-transform">
            <Link href="/appointment">
              Book Appointment <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
}
