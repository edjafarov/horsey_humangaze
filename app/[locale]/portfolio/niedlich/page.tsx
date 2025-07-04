import { Metadata } from "next";
import NiedlichClient from "./NiedlichClient";
import { getPortfolioJsonLdData } from "@/app/data/bilingualImageMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'de' 
    ? 'Niedliche Pferdefotografie - Fohlen | Human Gaze Photography'
    : 'Cute Horse Photography - Foals | Human Gaze Photography';
    
  const description = locale === 'de'
    ? 'Bezaubernde Fotografie von Fohlen und jungen Pferden. Niedliche Momente zeigen die Unschuld und natürliche Schönheit der Jungtiere.'
    : 'Charming photography of foals and young horses. Cute moments show the innocence and natural beauty of young animals.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/portfolio/niedlich' 
        : 'https://equine.humangaze-photography.com/en/portfolio/niedlich',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/portfolio/niedlich' 
        : 'https://equine.humangaze-photography.com/en/portfolio/niedlich',
      languages: {
        'de': 'https://equine.humangaze-photography.com/portfolio/niedlich',
        'en': 'https://equine.humangaze-photography.com/en/portfolio/niedlich',
      },
    },
  };
}

export default async function NiedlichPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const jsonLd = getPortfolioJsonLdData('niedlich', locale as 'de' | 'en');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NiedlichClient />
    </>
  );
}