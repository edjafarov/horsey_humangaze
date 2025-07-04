import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'de' 
    ? 'Pferdefotografie Portfolio | Human Gaze Photography'
    : 'Horse Photography Portfolio | Human Gaze Photography';
    
  const description = locale === 'de'
    ? 'Bewundern Sie unser Portfolio professioneller Pferdefotografie: Dramatische, idyllische und emotionale Aufnahmen. Lassen Sie sich für Ihr eigenes Shooting inspirieren.'
    : 'Explore our portfolio of professional horse photography: Dramatic, idyllic and emotional captures. Get inspired for your own photoshoot.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/portfolio' 
        : 'https://equine.humangaze-photography.com/en/portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/portfolio' 
        : 'https://equine.humangaze-photography.com/en/portfolio',
      languages: {
        'de': 'https://equine.humangaze-photography.com/portfolio',
        'en': 'https://equine.humangaze-photography.com/en/portfolio',
      },
    },
  };
}

export default function PortfolioPage() {
  return <PortfolioClient />;
}