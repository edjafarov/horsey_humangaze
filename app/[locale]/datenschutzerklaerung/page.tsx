import { Metadata } from "next";
import DatenschutzerklaerungClient from "./DatenschutzerklaerungClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'de' 
    ? 'Datenschutzerklärung | Human Gaze Photography'
    : 'Privacy Policy | Human Gaze Photography';
    
  const description = locale === 'de'
    ? 'Datenschutzerklärung von Human Gaze Photography. Informationen zum Umgang mit personenbezogenen Daten gemäß DSGVO.'
    : 'Privacy policy of Human Gaze Photography. Information on the handling of personal data in accordance with GDPR.';

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
        ? 'https://equine.humangaze-photography.com/datenschutzerklaerung' 
        : 'https://equine.humangaze-photography.com/en/datenschutzerklaerung',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'de' 
        ? 'https://equine.humangaze-photography.com/datenschutzerklaerung' 
        : 'https://equine.humangaze-photography.com/en/datenschutzerklaerung',
      languages: {
        'de': 'https://equine.humangaze-photography.com/datenschutzerklaerung',
        'en': 'https://equine.humangaze-photography.com/en/datenschutzerklaerung',
      },
    },
  };
}

export default function DatenschutzerklaerungPage() {
  return <DatenschutzerklaerungClient />;
}