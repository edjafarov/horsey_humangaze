"use client";

import styled from "styled-components";
import PageContent from "@/app/components/PageContent";
import PinImage from "@/app/components/PinImage";
import AlbumSelector from "@/app/components/AlbumSelector";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import { portfolioDramatischBilingual, getLocalizedMetadata } from "@/app/data/bilingualImageMetadata";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Gallery = styled.div`
  column-count: 3;
  column-gap: 1.5rem;

  @media (max-width: 768px) {
    column-count: 1;
  }

  > div {
    break-inside: avoid;
    margin-bottom: 1.5rem;
  }
`;

export default function DramatischClient() {
  const t = useTranslations("portfolio");
  const params = useParams();
  const locale = params.locale as 'de' | 'en';
  const localizedMetadata = getLocalizedMetadata(portfolioDramatischBilingual, locale);
  
  const breadcrumbItems = [
    {
      name: locale === 'de' ? 'Startseite' : 'Home',
      url: locale === 'de' ? 'https://equine.humangaze-photography.com' : 'https://equine.humangaze-photography.com/en'
    },
    {
      name: t('title'),
      url: locale === 'de' ? 'https://equine.humangaze-photography.com/portfolio' : 'https://equine.humangaze-photography.com/en/portfolio'
    },
    {
      name: t('albums.dramatisch'),
      url: locale === 'de' ? 'https://equine.humangaze-photography.com/portfolio/dramatisch' : 'https://equine.humangaze-photography.com/en/portfolio/dramatisch'
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <PageContent>
      <Title>{t("albums.dramatisch")}</Title>
      <AlbumSelector />
      <Gallery>
        {localizedMetadata.map((imageMetadata, index) => (
          <PinImage
            key={index}
            src={imageMetadata.src}
            alt={imageMetadata.alt}
            description={imageMetadata.description}
            width={0}
            height={0}
            sizes="(max-width: 768px) 90vw, 30vw"
            quality={90}
            style={{
              width: "100%",
              height: "auto",
            }}
            title={imageMetadata.title}
          />
        ))}
      </Gallery>
    </PageContent>
    </>
  );
}