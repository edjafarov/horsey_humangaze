"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  portfolioIdyllischBilingual,
  portfolioNiedlichBilingual,
  portfolioDramatischBilingual,
  portfolioHochzeitBilingual,
  getLocalizedMetadata,
} from "@/app/data/bilingualImageMetadata";
import { useSeoImageUrl } from "@/app/hooks/useSeoImageUrl";

const AlbumsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    gap: 1em;
    justify-content: center;
  }
`;

const AlbumCover = styled(Link)<{ $isActive: boolean }>`
  position: relative;
  flex: 1;
  max-width: calc(25% - 1.5em);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 3px solid ${(props) => (props.$isActive ? "#333" : "transparent")};
  display: block;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    max-width: calc(50% - 0.5em);
    flex: 0 0 calc(50% - 0.5em);
  }
`;

const AlbumImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const AlbumImage = styled(Image)`
  width: 100% !important;
  height: auto !important;
  display: block;
`;

const AlbumTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: capitalize;
`;

// Separate component to use the hook properly
function AlbumSelectorImage({ cover }: { cover: { src: string; alt: string; title: string } }) {
  const seoUrl = useSeoImageUrl(cover.src);
  return (
    <AlbumImage
      src={seoUrl}
      alt={cover.alt}
      width={0}
      height={0}
      quality={90}
      sizes="(max-width: 768px) 50vw, 25vw"
      style={{
        width: "100%",
        height: "auto",
      }}
      title={cover.title}
    />
  );
}

export default function AlbumSelector() {
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as 'de' | 'en';
  const t = useTranslations("portfolio");
  
  const currentAlbum = pathname.split("/").pop();

  const albums = [
    {
      name: "dramatisch",
      cover: getLocalizedMetadata(portfolioDramatischBilingual, locale)[0],
    },
    {
      name: "idyllisch",
      cover: getLocalizedMetadata(portfolioIdyllischBilingual, locale)[0],
    },
    {
      name: "niedlich",
      cover: getLocalizedMetadata(portfolioNiedlichBilingual, locale)[0],
    },
    {
      name: "hochzeit",
      cover: getLocalizedMetadata(portfolioHochzeitBilingual, locale)[0],
    },
  ];

  return (
    <AlbumsContainer>
      {albums.map((album) => (
        <AlbumCover
          key={album.name}
          href={`/${locale === "de" ? "" : `${locale}/`}portfolio/${album.name}`}
          $isActive={currentAlbum === album.name}
        >
          <AlbumImageWrapper>
            <AlbumSelectorImage cover={album.cover} />
            <AlbumTitle>{t(`albums.${album.name}`)}</AlbumTitle>
          </AlbumImageWrapper>
        </AlbumCover>
      ))}
    </AlbumsContainer>
  );
}