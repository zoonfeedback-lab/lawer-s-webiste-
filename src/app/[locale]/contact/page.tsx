import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | Abdul Basit & Co',
  description: 'Get in touch for corporate legal, financial and tax consultation in Abbottabad, Pakistan.',
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isUrdu = locale === 'ur';

  return (
    <div className={`py-20 bg-slate-50 min-h-[70vh] ${isUrdu ? 'rtl font-urdu' : 'ltr font-sans'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Let&apos;s Discuss Your Business Needs</h1>
            <p className="text-lg text-slate-600 mb-10">We operate from Abbottabad and serve businesses all over Pakistan through our digital facilitation centers.</p>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Office Address</h3>
                  <p className="text-slate-600">1st Floor, Office # 108,<br/>Iqbal Shopping Complex,<br/>Abbottabad, Pakistan</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Phone & WhatsApp</h3>
                  <p className="text-slate-600">0311-5111444</p>
                  <p className="text-slate-600">0315-5056133</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Email</h3>
                  <p className="text-slate-600">basit2k9@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
