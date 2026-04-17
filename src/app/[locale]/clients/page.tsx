import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight, Star, User, Building2, Briefcase, Landmark, CheckCircle2, Factory, Monitor, Truck, Home as RealEstate, ShoppingCart, Globe, Rocket } from 'lucide-react';

export const metadata = {
  title: 'Our Clients | Abdul Basit & Co',
  description: 'Trusted by hundreds of businesses across Pakistan for legal compliance and registration.',
};

export default async function ClientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';

  return (
    <div className={`w-full ${isUrdu ? 'rtl font-urdu' : 'ltr font-sans'} bg-slate-50`} dir={isUrdu ? 'rtl' : 'ltr'}>
      
      {/* 1. Clients Hero Section (Dark / Premium) */}
      <section className="relative bg-[#0B1527] text-white pt-36 pb-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <AnimatedSection className="container mx-auto px-4 relative z-10 text-center" direction="up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full text-sm font-bold tracking-widest uppercase mb-6 border border-blue-500/20">
            Corporate Network
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Trusted by Businesses Across Pakistan
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            We have partnered with aggressive startups, rapid SMEs, and established enterprises to deliver impenetrable corporate legal solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </p>
              <p className="text-blue-200 uppercase tracking-widest text-sm font-bold">Total Clients</p>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </p>
              <p className="text-blue-200 uppercase tracking-widest text-sm font-bold">Industries Served</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </p>
              <p className="text-blue-200 uppercase tracking-widest text-sm font-bold">Client Satisfaction</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. Featured Clients Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B1527] mb-4">Featured Clients</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto">
            
            {/* Startups */}
            <div className="relative">
              <span className="absolute -top-4 left-6 bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest z-10">Startups</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                {[1, 2, 3, 4].map(i => (
                  <AnimatedSection key={`startup-${i}`} direction="up" delay={i * 0.05}>
                    <div className="bg-white border hover:border-blue-300 rounded-3xl h-36 flex items-center justify-center p-6 shadow-sm hover:shadow-xl transition-all cursor-default">
                      <div className="text-slate-300 font-black text-2xl uppercase tracking-widest">STARTUP {i}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Enterprises */}
            <div className="relative">
              <span className="absolute -top-4 left-6 bg-indigo-100 text-indigo-800 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest z-10">Enterprises</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                {[1, 2, 3, 4].map(i => (
                  <AnimatedSection key={`enterprise-${i}`} direction="up" delay={i * 0.05}>
                    <div className="bg-white border hover:border-indigo-300 rounded-3xl h-36 flex items-center justify-center p-6 shadow-sm hover:shadow-xl transition-all cursor-default">
                      <div className="text-slate-300 font-black text-2xl uppercase tracking-widest">ENTERPRISE {i}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* SMEs */}
            <div className="relative">
              <span className="absolute -top-4 left-6 bg-emerald-100 text-emerald-800 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest z-10">SMEs</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                {[1, 2, 3, 4].map(i => (
                  <AnimatedSection key={`sme-${i}`} direction="up" delay={i * 0.05}>
                     <div className="bg-white border hover:border-emerald-300 rounded-3xl h-36 flex items-center justify-center p-6 shadow-sm hover:shadow-xl transition-all cursor-default">
                      <div className="text-slate-300 font-black text-2xl uppercase tracking-widest">SME LTD {i}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 3. Industries We Serve Section */}
      <section className="py-24 bg-white border-y border-slate-200/60 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Market Penetration</span>
            <h2 className="text-4xl font-bold text-[#0B1527] mb-6">Industries We Serve</h2>
            <p className="text-lg text-slate-600">Cross-industry legal compliance and advanced corporate structuring.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
             {[
               { name: 'Technology', icon: Monitor },
               { name: 'Manufacturing', icon: Factory },
               { name: 'Logistics', icon: Truck },
               { name: 'Real Estate', icon: RealEstate },
               { name: 'E-commerce', icon: ShoppingCart },
               { name: 'Import Export', icon: Globe },
               { name: 'SMEs', icon: Building2 },
               { name: 'Startups', icon: Rocket }
             ].map((ind, i) => (
                <AnimatedSection key={i} delay={i * 0.05} direction="up" className="flex">
                  <div className="bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center p-8 rounded-3xl w-full hover:bg-blue-600 hover:text-white transition-colors group shadow-sm hover:shadow-xl">
                    <ind.icon className="w-10 h-10 mb-4 text-blue-600 group-hover:text-white transition-colors" />
                    <h3 className="font-bold text-lg text-[#0B1527] group-hover:text-white">{ind.name}</h3>
                  </div>
                </AnimatedSection>
             ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 4. Client Success Highlights Section */}
      <section className="py-24 bg-[#0B1527] text-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 text-center" direction="up">
           <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">Client Success Highlights</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto divide-x-0 md:divide-x divide-white/10">
             <div className="flex flex-col items-center">
               <p className="text-5xl md:text-6xl font-black text-blue-400 mb-4 tracking-tighter">
                 <AnimatedCounter end={500} suffix="+" />
               </p>
               <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">Companies Registered</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-5xl md:text-6xl font-black text-blue-400 mb-4 tracking-tighter">
                 <AnimatedCounter end={1200} suffix="+" />
               </p>
               <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">Tax Returns Filed</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-5xl md:text-6xl font-black text-blue-400 mb-4 tracking-tighter">
                 <AnimatedCounter end={200} suffix="+" />
               </p>
               <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">Banking Cases</p>
             </div>
             <div className="flex flex-col items-center">
               <p className="text-5xl md:text-6xl font-black text-blue-400 mb-4 tracking-tighter">
                 <AnimatedCounter end={100} suffix="+" />
               </p>
               <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">Compliance Projects</p>
             </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 5. Testimonials Section (White) */}
      <section className="py-24 bg-white overflow-hidden">
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1527] mb-6">What Our Clients Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Hear direct experiences from founders, directors, and corporate leaders who trusted us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              { 
                quote: "Advocate Basit simplified the SECP labyrinth for us. Our tech startup was incorporated in record time, allowing us to close our seed funding round without a hitch.", 
                author: "Basit Qureshi", 
                role: "CEO, FinTech Startup",
                industry: "Technology"
              },
              { 
                quote: "We were facing severe notices from FBR due to past negligence. The team stepped in, cleared out the backlog, and restored our active status smoothly.", 
                author: "Kashif Ijaz", 
                role: "Director, Logistics Firm",
                industry: "Logistics"
              },
              { 
                quote: "Their ongoing retainer services for EOBI and corporate compliance give us peace of mind. Highly recommended for any serious business owner.", 
                author: "Sonia Khan", 
                role: "Managing Partner, RealEstate",
                industry: "Real Estate"
              }
            ].map((t, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.1}>
                 <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 relative hover:shadow-xl transition-all flex flex-col h-full">
                    <div className="text-blue-400 mb-6 flex">
                      <Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg mb-8 italic flex-grow">"{t.quote}"</p>
                    <div className="flex items-center gap-4 mt-auto border-t border-slate-200 pt-6">
                       <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                         <User className="w-6 h-6" />
                       </div>
                       <div>
                         <div className="font-bold text-[#0B1527] text-lg">{t.author}</div>
                         <div className="text-sm font-medium text-slate-500">{t.role}</div>
                         <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">{t.industry}</div>
                       </div>
                    </div>
                 </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 6. Client Case Highlights Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
        <AnimatedSection className="container mx-auto px-4 max-w-6xl" direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B1527] mb-6">Client Case Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Startup SECP Registration', type: 'SECP', desc: 'Accelerated Private Limited incorporation for a global SaaS provider in 7 days.' },
              { title: 'Manufacturing Compliance', type: 'EOBI / FBR', desc: 'Resolved active taxpayer status and registered 150+ workers under EOBI.' },
              { title: 'Payment Gateway Dispute', type: 'Banking', desc: 'Facilitated Tier-1 corporate account opening for e-commerce integration.' }
            ].map((c, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                 <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group cursor-default">
                    <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">{c.type}</span>
                    <h3 className="text-2xl font-bold text-[#0B1527] mb-3 group-hover:text-blue-600 transition-colors">{c.title}</h3>
                    <p className="text-slate-600 mb-8">{c.desc}</p>
                    <Link href="/portfolio" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Full Details <ArrowRight className="w-5 h-5"/>
                    </Link>
                 </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 7. CTA Section */}
      <section className="py-32 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
        <AnimatedSection className="container mx-auto px-4 relative z-10 text-center max-w-4xl" direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Growing List of Clients
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light">
            Schedule a consultation today to start your reliable corporate legal journey.
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
