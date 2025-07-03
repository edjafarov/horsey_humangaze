import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry";
import LayoutWrapper from "../components/LayoutWrapper";
import { getJsonLdData } from "../data/imageMetadata";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../i18n';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  const alternateLanguages = {
    de: 'https://equine.humangaze-photography.com',
    en: 'https://equine.humangaze-photography.com/en'
  };

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
    },
    alternates: {
      languages: alternateLanguages,
      canonical: locale === 'de' ? 'https://equine.humangaze-photography.com' : 'https://equine.humangaze-photography.com/en',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  // Ensure that the incoming locale is valid
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();
  const jsonLd = getJsonLdData(locale as 'de' | 'en');
  
  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
