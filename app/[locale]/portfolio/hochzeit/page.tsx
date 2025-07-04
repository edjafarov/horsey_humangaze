import { Metadata } from "next";
import HochzeitClient from "./HochzeitClient";
import { getPortfolioJsonLdData } from "@/app/data/bilingualImageMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'de' 
    ? 'Hochzeits-Pferdefotografie | Human Gaze Photography'
    : 'Wedding Horse Photography | Human Gaze Photography';
    
  const description = locale === 'de'
    ? 'Romantische Hochzeitsfotografie mit Pferden. Unvergessliche Momente für Ihren besonderen Tag mit eleganten Pferden.'
    : 'Romantic wedding photography with horses. Unforgettable moments for your special day with elegant horses.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/portfolio/hochzeit' 
        : 'https://equine.humangaze-photography.com/en/portfolio/hochzeit',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/portfolio/hochzeit' 
        : 'https://equine.humangaze-photography.com/en/portfolio/hochzeit',
      languages: {
        'de': 'https://equine.humangaze-photography.com/portfolio/hochzeit',
        'en': 'https://equine.humangaze-photography.com/en/portfolio/hochzeit',
      },
    },
  };
}

export default async function HochzeitPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const jsonLd = getPortfolioJsonLdData('hochzeit', locale as 'de' | 'en');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HochzeitClient />
    </>
  );
}