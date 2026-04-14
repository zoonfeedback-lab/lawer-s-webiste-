'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ArrowRight, TrendingUp, ShieldCheck, Landmark, CheckCircle2, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  year: string;
  description: string;
  achievements: string[];
  type: string;
};

const CASES: CaseStudy[] = [
  {
    id: '1',
    title: 'Rapid Tech Startup SECP Registration',
    industry: 'Technology / IT',
    year: '2023',
    type: 'SECP',
    description: 'A tech startup needed immediate company incorporation (Pvt Ltd) to secure foreign funding. We navigated the SECP processes rapidly.',
    achievements: ['Company registered in 8 days', 'Facilitated immediate banking compliance']
  },
  {
    id: '2',
    title: 'FBR Tax Compliance for Logistics Firm',
    industry: 'Logistics',
    year: '2023',
    type: 'FBR',
    description: 'A medium-sized logistics firm was facing heavy penalties due to missed IRIS returns. We streamlined their tax history and brought them back to Active Taxpayer status.',
    achievements: ['Penalty waivers negotiated', 'Active Taxpayer List (ATL) restored in 2 weeks']
  },
  {
    id: '3',
    title: 'EOBI Registration for Manufacturing Unit',
    industry: 'Manufacturing',
    year: '2024',
    type: 'EOBI',
    description: 'A new manufacturing unit needed to comply with labor laws and register 150+ employees with EOBI and PESSI.',
    achievements: ['100% compliance achieved', 'Zero disputes from labor department']
  },
  {
    id: '4',
    title: 'Corporate Bank Account Dispute Resolution',
    industry: 'E-commerce',
    year: '2024',
    type: 'Banking',
    description: 'An e-commerce business was struggling to open a merchant account due to complex ownership structure. We provided the necessary legal drafting and facilitation.',
    achievements: ['Successful account opening with Tier-1 Bank', 'Payment gateway integration facilitated']
  }
];

const CATEGORIES = ['All', 'SECP', 'FBR', 'EOBI', 'Banking'];

export default function PortfolioClient({ isUrdu }: { isUrdu: boolean }) {
  const [filter, setFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredCases = filter === 'All' ? CASES : CASES.filter(c => c.type === filter);

  return (
    <div className={`w-full ${isUrdu ? 'rtl font-urdu' : 'ltr font-sans'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      
      {/* 3. Featured Case Study Section (Premium Top Section) */}
      {filter === 'All' && (
        <div className="mb-20">
           <div className="border border-slate-200 bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full opacity-50 -z-0"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                 <div className="flex-1 w-full">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                      ★ Featured Case Study
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0B1527] mb-6 leading-tight">
                      Enterprise SECP & Tax Registration for Series-A Tech Startup
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                       <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                         <p className="text-slate-500 text-sm font-semibold uppercase mb-1">Industry</p>
                         <p className="text-slate-900 font-bold">Technology / FinTech</p>
                       </div>
                       <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                         <p className="text-slate-500 text-sm font-semibold uppercase mb-1">Timeline</p>
                         <p className="text-slate-900 font-bold">14 Days Record Time</p>
                       </div>
                    </div>
                    
                 </div>
                 
                 <div className="flex-1 w-full space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-600"/> The Challenge</h4>
                      <p className="text-slate-600 leading-relaxed">The client required immediate incorporation and complex tax scheduling to secure a $2M funding round before the fiscal quarter closed.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600"/> The Execution</h4>
                      <p className="text-slate-600 leading-relaxed">We deployed our premium fast-track SECP registration wing and handled NTN/STRN generation simultaneously alongside automated banking facilitation.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* 2. Portfolio Categories Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-16">
        {CATEGORIES.map(cat => (
          <Button 
            key={cat} 
            variant={filter === cat ? 'default' : 'outline'}
            onClick={() => setFilter(cat)}
            className={`rounded-full h-14 px-8 text-lg font-semibold transition-all ${
              filter === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:scale-105' 
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-blue-600'
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* 4. Portfolio Grid (Existing Cards Styled More Premium) */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <AnimatePresence>
          {filteredCases.map(c => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={c.id} 
              className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all cursor-pointer group flex flex-col"
              onClick={() => setSelectedCase(c)}
            >
              <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-6">
                <Badge className="bg-slate-100 text-blue-700 hover:bg-blue-600 hover:text-white px-4 py-1.5 text-sm uppercase tracking-widest border-0 transition-colors">
                  {c.type}
                </Badge>
                <span className="text-sm font-bold bg-slate-50 px-3 py-1 rounded-lg text-slate-500">{c.year}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {c.title}
              </h3>
              <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-6 flex items-center gap-2">
                 <Briefcase className="w-4 h-4" /> {c.industry}
              </p>
              <p className="text-slate-600 text-lg line-clamp-3 mb-8 leading-relaxed flex-grow">
                {c.description}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                 <span className="text-slate-400 font-medium group-hover:text-slate-800 transition-colors">Client Solution</span>
                 <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Report <ArrowRight className="w-5 h-5"/>
                 </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
          >
            <button 
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 p-3 bg-slate-100 rounded-full hover:bg-red-50 hover:text-red-500 text-slate-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-0 px-4 py-1.5 uppercase font-bold tracking-widest">{selectedCase.type}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1527] mb-6 leading-tight">{selectedCase.title}</h2>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-10 border-b border-slate-100 pb-8">
              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4"/> Industry: <strong className="text-slate-900 text-base">{selectedCase.industry}</strong></span>
              <span className="flex items-center gap-2">Year: <strong className="text-slate-900 text-base">{selectedCase.year}</strong></span>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-10">
              <h3 className="text-xl font-bold mb-4 text-[#0B1527]">The Challenge & Solution</h3>
              <p className="text-slate-700 leading-relaxed text-lg">{selectedCase.description}</p>
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-[#0B1527]">Key Achievements</h3>
            <ul className="space-y-4 mb-10 bg-white border border-slate-200 p-8 rounded-2xl">
              {selectedCase.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-700 font-medium text-lg pt-0.5">{ach}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-sm text-slate-500 flex gap-3">
              <ShieldCheck className="w-6 h-6 text-slate-400 shrink-0"/>
              Disclaimer: This website offers legal facilitation and representation. Official filings are done through SECP eZfile and FBR IRIS portals.
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
