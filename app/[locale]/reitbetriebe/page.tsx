import { Metadata } from "next";
import ReitbetriebeClient from "./ReitbetriebeClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'de' 
    ? 'Fotografie für Reitbetriebe | Human Gaze Photography'
    : 'Photography for Riding Stables | Human Gaze Photography';
    
  const description = locale === 'de'
    ? 'Professionelle Fotografie für Reitbetriebe und Reitschulen. Hochwertige Bilder für Marketing, Website und Social Media. Steigern Sie Ihre Sichtbarkeit!'
    : 'Professional photography for riding stables and equestrian schools. High-quality images for marketing, website and social media. Boost your visibility!';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/reitbetriebe' 
        : 'https://equine.humangaze-photography.com/en/reitbetriebe',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/reitbetriebe' 
        : 'https://equine.humangaze-photography.com/en/reitbetriebe',
      languages: {
        'de': 'https://equine.humangaze-photography.com/reitbetriebe',
        'en': 'https://equine.humangaze-photography.com/en/reitbetriebe',
      },
    },
  };
}

export default function ReitbetriebePage() {
  return <ReitbetriebeClient />;
}