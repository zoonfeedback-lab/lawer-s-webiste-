'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

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
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {CATEGORIES.map(cat => (
          <Button 
            key={cat} 
            variant={filter === cat ? 'default' : 'outline'}
            onClick={() => setFilter(cat)}
            className="rounded-full"
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCases.map(c => (
          <div 
            key={c.id} 
            className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            onClick={() => setSelectedCase(c)}
          >
            <div className="flex justify-between items-start mb-4">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">{c.type}</Badge>
              <span className="text-sm text-slate-500">{c.year}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{c.title}</h3>
            <p className="text-sm font-medium text-slate-500 mb-4">{c.industry}</p>
            <p className="text-slate-600 text-sm line-clamp-3 mb-4">{c.description}</p>
            <div className="text-blue-700 text-sm font-medium">Read full case study &rarr;</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button 
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">{selectedCase.type}</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedCase.title}</h2>
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-8 border-b pb-6">
              <span>Industry: <strong className="text-slate-900">{selectedCase.industry}</strong></span>
              <span>&bull;</span>
              <span>Year: <strong className="text-slate-900">{selectedCase.year}</strong></span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-slate-900">The Challenge & Solution</h3>
            <p className="text-slate-700 mb-8 leading-relaxed">{selectedCase.description}</p>
            
            <h3 className="text-xl font-bold mb-4 text-slate-900">Key Achievements</h3>
            <ul className="space-y-3 mb-8">
              {selectedCase.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-700 font-medium">{ach}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 border rounded-2xl p-6 text-sm text-slate-500">
              Disclaimer: This website offers legal facilitation and representation. Official filings are done through SECP eZfile and FBR IRIS portals.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
