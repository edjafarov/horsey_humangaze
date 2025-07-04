import { Metadata } from "next";
import IdyllischClient from "./IdyllischClient";
import { getPortfolioJsonLdData } from "@/app/data/bilingualImageMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'de' 
    ? 'Idyllische Pferdefotografie | Human Gaze Photography'
    : 'Idyllic Horse Photography | Human Gaze Photography';
    
  const description = locale === 'de'
    ? 'Idyllische und harmonische Pferdefotografie in natürlicher Umgebung. Emotionale Portraits zeigen die friedliche Seite der Pferde.'
    : 'Idyllic and harmonious horse photography in natural surroundings. Emotional portraits show the peaceful side of horses.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/portfolio/idyllisch' 
        : 'https://equine.humangaze-photography.com/en/portfolio/idyllisch',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/portfolio/idyllisch' 
        : 'https://equine.humangaze-photography.com/en/portfolio/idyllisch',
      languages: {
        'de': 'https://equine.humangaze-photography.com/portfolio/idyllisch',
        'en': 'https://equine.humangaze-photography.com/en/portfolio/idyllisch',
      },
    },
  };
}

export default async function IdyllischPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const jsonLd = getPortfolioJsonLdData('idyllisch', locale as 'de' | 'en');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IdyllischClient />
    </>
  );
}