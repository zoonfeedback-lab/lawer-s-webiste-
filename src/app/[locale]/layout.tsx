import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ClientVisibilityWrapper from '@/components/ClientVisibilityWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Basit & Co - Certified Financial & Management Advisors",
  description: "Certified Financial & Management Advisors in Abbottabad specializing in Auditing, Tax, SECP & Corporate Legal Advisory.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Abdul Basit & Co',
    image: 'https://example.com/lawyer-logo.png',
    '@id': '',
    url: 'https://basitlegal.pk',
    telephone: '+923115111444',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1st Floor, Office # 108, Iqbal Shopping Complex',
      addressLocality: 'Abbottabad',
      addressRegion: 'KPK',
      postalCode: '22010',
      addressCountry: 'PK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.1688,
      longitude: 73.2215
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '18:00'
    }
  };

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <ClientVisibilityWrapper>
            <Header locale={locale} />
          </ClientVisibilityWrapper>
          <main className="flex-1">
            {children}
          </main>
          <ClientVisibilityWrapper>
            <Footer />
            <WhatsAppButton />
          </ClientVisibilityWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
