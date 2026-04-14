import AppointmentForm from './AppointmentForm';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Book Appointment | Advocate Muhammad Basit',
  description: 'Schedule an appointment for SECP registration, FBR tax filing, or corporate legal consultation in Rawalpindi.',
};

export default async function AppointmentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <div className="min-h-screen bg-slate-50 py-20 relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-blue-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4 tracking-tight">
              {locale === 'ur' ? 'کنسلٹیشن بُک کریں' : 'Book a Consultation'}
            </h1>
            <p className="text-blue-100 font-sans text-lg">
              {locale === 'ur' 
                ? 'اپنا قیمتی وقت بچائیں اور آج ہی میٹنگ طے کریں۔' 
                : 'Take the first step towards seamless corporate compliance. Schedule a meeting today.'}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
            <AppointmentForm isUrdu={locale === 'ur'} />
          </div>
        </div>
      </div>
    </div>
  );
}
