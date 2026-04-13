import PortfolioClient from './PortfolioClient';

export const metadata = {
  title: 'Portfolio & Case Studies | Advocate Muhammad Ahmed',
  description: 'View our past success stories in SECP company registration, FBR tax compliance, EOBI, and corporate banking.',
};

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-slate-900 mb-6 tracking-tight">
            Our Track Record
          </h1>
          <p className="text-lg text-slate-600 font-sans">
            Explore our successfully executed corporate legal projects, showcasing our expertise across SECP, FBR, and banking integrations.
          </p>
        </div>
        
        <PortfolioClient isUrdu={locale === 'ur'} />
      </div>
    </div>
  );
}
