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
  title: "Advocate Muhammad Basit - Corporate Lawyer",
  description: "Expert Corporate Lawyer in Rawalpindi specializing in SECP, FBR & Business Compliance Services.",
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
    name: 'Advocate Muhammad Basit',
    image: 'https://example.com/lawyer-logo.png',
    '@id': '',
    url: 'https://basitlegal.pk',
    telephone: '+923000000000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Legal Complex, Murree Road',
      addressLocality: 'Rawalpindi',
      addressRegion: 'Punjab',
      postalCode: '46000',
      addressCountry: 'PK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.6007,
      longitude: 73.0679
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
