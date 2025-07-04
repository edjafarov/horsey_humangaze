import { Metadata } from "next";
import KontaktClient from "./KontaktClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'de' 
    ? 'Kontakt - Pferdefotograf | Human Gaze Photography'
    : 'Contact - Horse Photographer | Human Gaze Photography';
    
  const description = locale === 'de'
    ? 'Kontaktieren Sie uns für Ihr individuelles Pferdefotoshooting. Professionelle Beratung und maßgeschneiderte Fotografie-Lösungen in ganz Deutschland.'
    : 'Contact us for your individual horse photoshoot. Professional consultation and tailored photography solutions throughout Germany.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/kontakt' 
        : 'https://equine.humangaze-photography.com/en/kontakt',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/kontakt' 
        : 'https://equine.humangaze-photography.com/en/kontakt',
      languages: {
        'de': 'https://equine.humangaze-photography.com/kontakt',
        'en': 'https://equine.humangaze-photography.com/en/kontakt',
      },
    },
  };
}

export default function KontaktPage() {
  return <KontaktClient />;
}