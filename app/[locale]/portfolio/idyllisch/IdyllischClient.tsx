"use client";

import styled from "styled-components";
import PageContent from "@/app/components/PageContent";
import PinImage from "@/app/components/PinImage";
import AlbumSelector from "@/app/components/AlbumSelector";
import { portfolioIdyllischBilingual, getLocalizedMetadata } from "@/app/data/bilingualImageMetadata";
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
  column-count: 4;
  column-gap: 1.5rem;

  @media (max-width: 1200px) {
    column-count: 3;
  }

  @media (max-width: 768px) {
    column-count: 2;
  }

  @media (max-width: 480px) {
    column-count: 1;
  }

  > div {
    break-inside: avoid;
    margin-bottom: 1.5rem;
  }
`;

export default function IdyllischClient() {
  const t = useTranslations("portfolio");
  const params = useParams();
  const locale = params.locale as 'de' | 'en';
  const localizedMetadata = getLocalizedMetadata(portfolioIdyllischBilingual, locale);

  return (
    <PageContent>
      <Title>{t("albums.idyllisch")}</Title>
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
            sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 22vw"
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
  );
}