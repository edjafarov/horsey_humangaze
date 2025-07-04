import { Metadata } from "next";
import ImpressumClient from "./ImpressumClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'de' 
    ? 'Impressum | Human Gaze Photography'
    : 'Legal Notice | Human Gaze Photography';
    
  const description = locale === 'de'
    ? 'Impressum und rechtliche Informationen von Human Gaze Photography. Inhaberin: Nataliya Kulykova, Berlin.'
    : 'Legal notice and information of Human Gaze Photography. Owner: Nataliya Kulykova, Berlin.';

  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/impressum' 
        : 'https://equine.humangaze-photography.com/en/impressum',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/impressum' 
        : 'https://equine.humangaze-photography.com/en/impressum',
      languages: {
        'de': 'https://equine.humangaze-photography.com/impressum',
        'en': 'https://equine.humangaze-photography.com/en/impressum',
      },
    },
  };
}

export default function ImpressumPage() {
  return <ImpressumClient />;
}