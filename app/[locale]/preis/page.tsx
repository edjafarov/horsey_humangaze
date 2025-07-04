import { Metadata } from "next";
import PreisClient from "./PreisClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'de' 
    ? 'Preise für Pferdefotografie | Human Gaze Photography'
    : 'Horse Photography Pricing | Human Gaze Photography';
    
  const description = locale === 'de'
    ? 'Transparente Preise für professionelle Pferdefotografie. Individuelle Pakete für Privatpersonen und Reitbetriebe. Jetzt unverbindlich anfragen!'
    : 'Transparent pricing for professional horse photography. Individual packages for private clients and riding stables. Request a free quote now!';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/preis' 
        : 'https://equine.humangaze-photography.com/en/preis',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/preis' 
        : 'https://equine.humangaze-photography.com/en/preis',
      languages: {
        'de': 'https://equine.humangaze-photography.com/preis',
        'en': 'https://equine.humangaze-photography.com/en/preis',
      },
    },
  };
}

export default function PreisPage() {
  return <PreisClient />;
}