import { Metadata } from "next";
import DramatischClient from "./DramatischClient";
import { getPortfolioJsonLdData } from "@/app/data/bilingualImageMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'de' 
    ? 'Dramatische Pferdefotografie | Human Gaze Photography'
    : 'Dramatic Horse Photography | Human Gaze Photography';
    
  const description = locale === 'de'
    ? 'Kraftvolle und dramatische Pferdeportraits mit beeindruckender Lichtstimmung. Entdecken Sie die majestätische Seite der Pferde in unserer Galerie.'
    : 'Powerful and dramatic horse portraits with impressive lighting. Discover the majestic side of horses in our gallery.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      url: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/portfolio/dramatisch' 
        : 'https://equine.humangaze-photography.com/en/portfolio/dramatisch',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/portfolio/dramatisch' 
        : 'https://equine.humangaze-photography.com/en/portfolio/dramatisch',
      languages: {
        'de': 'https://equine.humangaze-photography.com/portfolio/dramatisch',
        'en': 'https://equine.humangaze-photography.com/en/portfolio/dramatisch',
      },
    },
  };
}

export default async function DramatischPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const jsonLd = getPortfolioJsonLdData('dramatisch', locale as 'de' | 'en');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DramatischClient />
    </>
  );
}