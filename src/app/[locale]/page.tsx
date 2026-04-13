import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, FileText, Landmark, ShieldCheck } from 'lucide-react';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Index');
  const isUrdu = locale === 'ur';

  // We could also move Services/Testimonials text to JSON, but hardcoding some for demonstration
  return (
    <div className={`w-full ${isUrdu ? 'rtl' : 'ltr'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-start">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
            {t('title')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans tracking-tight mb-6 max-w-4xl leading-tight">
            {t('headline')}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-10 opacity-90 leading-relaxed font-sans">
            {t('subheadline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-sans">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-base h-12 px-8">
              <Link href="/appointment">
                {t('bookAppointment')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 hover:bg-white/10 text-white text-base h-12 px-8">
              <Link href="/portfolio">
                {t('viewPortfolio')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{isUrdu ? 'ہماری خدمات' : 'Our Services'}</h2>
            <p className="text-slate-600">{isUrdu ? 'آپ کے کاروبار کو قانونی تحفظ اور تعمیل فراہم کرنے کے لیے جامع خدمات۔' : 'Comprehensive corporate services to ensure your business remains compliant and legally protected.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: 'SECP Registration', desc: 'Pvt Ltd, SMC, AOP, & Sole Proprietorship' },
              { icon: FileText, title: 'FBR & Tax Filings', desc: 'NTN, STRN, IRIS returns & digital invoicing' },
              { icon: Landmark, title: 'Banking & Financing', desc: 'Facilitation for business current accounts' },
              { icon: ShieldCheck, title: 'EOBI & Compliance', desc: 'EOBI registration, PESSI & annual returns' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm flex-grow mb-6">{s.desc}</p>
                <Link href="/services" className="text-blue-700 font-medium text-sm flex items-center gap-1 group/link">
                  {isUrdu ? 'مزید جانیں' : 'Learn more'} 
                  <ArrowRight className={`w-4 h-4 transition-transform ${isUrdu ? 'group-hover/link:-translate-x-1 rotate-180' : 'group-hover/link:translate-x-1'}`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Trust Signals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{isUrdu ? 'ہمارے کلائنٹس کا اعتماد' : 'Trusted by Businesses'}</h2>
          <p className="text-slate-600 mb-12">Successful compliance and registration for hundreds of local start-ups and enterprises.</p>
          {/* Quick placeholder for testimonials */}
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale">
            {/* Logos placeholder */}
            <div className="h-12 w-32 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-12 w-32 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-12 w-32 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-12 w-32 bg-slate-200 rounded animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
