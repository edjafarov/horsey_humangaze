import type { Metadata } from "next";
import "../globals.css";
import LayoutWrapper from "../components/LayoutWrapper";
import {
  getJsonLdData,
  bilingualImageMetadata,
} from "../data/bilingualImageMetadata";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../i18n";
import { generateSeoImageUrl } from "../utils/seoUrlGenerator";
import { Analytics } from "@vercel/analytics/next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const alternateLanguages = {
    de: "https://equine.humangaze-photography.com",
    en: "https://equine.humangaze-photography.com/en",
  };

  // Get the first image for Open Graph and Twitter cards
  const firstImage = bilingualImageMetadata[0];
  const firstImageMeta = firstImage[locale as "de" | "en"];
  const seoImageUrl = generateSeoImageUrl(
    firstImage.src,
    firstImageMeta.title,
    locale as "de" | "en"
  );
  const fullSeoImageUrl = `https://equine.humangaze-photography.com${seoImageUrl}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      url:
        locale === "de"
          ? "https://equine.humangaze-photography.com"
          : "https://equine.humangaze-photography.com/en",
      siteName: "Human Gaze Photography",
      images: [
        {
          url: fullSeoImageUrl,
          width: 1200,
          height: 630,
          alt: firstImageMeta.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [fullSeoImageUrl],
    },
    alternates: {
      languages: alternateLanguages,
      canonical:
        locale === "de"
          ? "https://equine.humangaze-photography.com"
          : "https://equine.humangaze-photography.com/en",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming locale is valid
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();
  const jsonLd = getJsonLdData(locale as "de" | "en");

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Human Gaze Photography",
    url:
      locale === "de"
        ? "https://equine.humangaze-photography.com"
        : "https://equine.humangaze-photography.com/en",
    logo: "https://equine.humangaze-photography.com/images/slider2x3/1dovge.jpg",
    description:
      locale === "de"
        ? "Professionelle Pferdefotografie mit Leidenschaft und künstlerischem Blick"
        : "Professional horse photography with passion and artistic vision",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
    sameAs: ["https://instagram.com/humangaze_photography"],
  };

  // LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://equine.humangaze-photography.com/#business",
    name: "Human Gaze Photography",
    image:
      "https://equine.humangaze-photography.com/images/slider2x3/1dovge.jpg",
    description:
      locale === "de"
        ? "Professionelle Pferdefotografie für Reitbetriebe und Pferdebesitzer in Deutschland"
        : "Professional horse photography for riding stables and horse owners in Germany",
    url:
      locale === "de"
        ? "https://equine.humangaze-photography.com"
        : "https://equine.humangaze-photography.com/en",
    telephone: "",
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
      addressRegion: locale === "de" ? "Deutschland" : "Germany",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.1657,
      longitude: 10.4515,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "Country",
      name: locale === "de" ? "Deutschland" : "Germany",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <NextIntlClientProvider messages={messages}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
      </NextIntlClientProvider>
    </>
  );
}
