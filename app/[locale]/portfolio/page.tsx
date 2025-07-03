"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import PageContent from "@/app/components/PageContent";
import PinImage from "@/app/components/PinImage";
import {
  portfolioIdyllischMetadata,
  portfolioNiedlichMetadata,
  portfolioDramatischMetadata,
  portfolioHochzeitMetadata,
} from "@/app/data/imageMetadata";
import { useTranslations } from 'next-intl';

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

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

const AlbumCover = styled.div<{ $isActive: boolean }>`
  position: relative;
  flex: 1;
  max-width: calc(25% - 1.5em);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 3px solid ${(props) => (props.$isActive ? "#333" : "transparent")};

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

const albums = [
  {
    name: "dramatisch",
    cover: portfolioDramatischMetadata[0],
    images: portfolioDramatischMetadata.slice(1),
  },
  {
    name: "idyllisch",
    cover: portfolioIdyllischMetadata[0],
    images: portfolioIdyllischMetadata.slice(1),
  },
  {
    name: "niedlich",
    cover: portfolioNiedlichMetadata[0],
    images: portfolioNiedlichMetadata.slice(1),
  },

  {
    name: "hochzeit",
    cover: portfolioHochzeitMetadata[0],
    images: portfolioHochzeitMetadata.slice(1),
  },
];

export default function Portfolio() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const t = useTranslations('portfolio');

  return (
    <PageContent>
      <Title id="top">{t('title')}</Title>

      <AlbumsContainer>
        {albums.map((album) => (
          <AlbumCover
            key={album.name}
            $isActive={selectedAlbum === album.name}
            onClick={() =>
              setSelectedAlbum(selectedAlbum === album.name ? null : album.name)
            }
          >
            <AlbumImageWrapper>
              <AlbumImage
                src={album.cover.src}
                alt={album.cover.alt}
                width={0}
                height={0}
                quality={90}
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                title={album.cover.title}
              />
              <AlbumTitle>{t(`albums.${album.name}`)}</AlbumTitle>
            </AlbumImageWrapper>
          </AlbumCover>
        ))}
      </AlbumsContainer>

      {selectedAlbum && (
        <Gallery>
          {albums
            .find((album) => album.name === selectedAlbum)
            ?.images.map((imageMetadata, index) => (
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
      )}
    </PageContent>
  );
}