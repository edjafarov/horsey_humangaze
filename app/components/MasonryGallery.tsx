"use client";

import styled from "styled-components";
import Image from "next/image";

const GalleryContainer = styled.div`
  padding: 1rem 4rem 3rem;
  background-color: #f3f5fd;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem 2rem 2rem;
  }
`;

const MasonryGrid = styled.div`
  column-count: 4;
  column-gap: 3rem;

  @media (max-width: 1024px) {
    column-count: 3;
  }

  @media (max-width: 768px) {
    column-count: 2;
    column-gap: 1.5rem;
  }

  @media (max-width: 480px) {
    column-count: 1;
  }
`;

const ImageWrapper = styled.div`
  break-inside: avoid;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  &:hover {
    transform: scale(1.01);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

// public/images/gallery/_V4A0062-Edit.jpg
// public/images/gallery/_V4A0136.jpg
// public/images/gallery/_V4A0281-Edit-2.jpg
// public/images/gallery/_V4A0299-2.jpg
// public/images/gallery/_V4A0299.jpg
// public/images/gallery/_V4A0370-Edit.Liquify.ColorCorrected-3.jpg
// public/images/gallery/_V4A2642.jpg
// public/images/gallery/_V4A2712.jpg
// public/images/gallery/_V4A2773-Edit.jpg
// public/images/gallery/_V4A2780.jpg
// public/images/gallery/_V4A2837.jpg
// public/images/gallery/_V4A2842.jpg
// public/images/gallery/_V4A2850-Edit.jpg
// public/images/gallery/_V4A3052-Edit.jpg
// public/images/gallery/_V4A3207-Edit-2.jpg
// public/images/gallery/_V4A3461.jpg
// public/images/gallery/_V4A9180.jpg
// public/images/gallery/_V4A9627.jpg
// public/images/gallery/_V4A9703-Edit.jpg
// public/images/gallery/wellidrama-3.jpg

// Gallery images in order matching the layout reference
const galleryImages = [
  { src: "_V4A2712.jpg", alt: "Woman with cowboy hat portrait" },
  { src: "_V4A2780.jpg", alt: "Woman with cowboy hat and two horses" },
  { src: "_V4A0062-Edit.jpg", alt: "Two women with horse" },
  { src: "wellidrama-3.jpg", alt: "Black horse dramatic silhouette" },
  { src: "_V4A3052-Edit.jpg", alt: "Woman leaning against white horse" },
  { src: "_V4A2850-Edit.jpg", alt: "Woman sitting under white horse" },

  { src: "_V4A0299-2.jpg", alt: "Woman running with horse in field" },
  { src: "_V4A2642.jpg", alt: "Woman with cowboy hat sitting with horse" },
  {
    src: "_V4A0370-Edit.Liquify.ColorCorrected-3.jpg",
    alt: "Woman running with horse in field",
  },
  { src: "_V4A9703-Edit.jpg", alt: "Black horse portrait dramatic" },
  { src: "_V4A2773-Edit.jpg", alt: "Woman with cowboy hat and two horses" },
  { src: "_V4A0136.jpg", alt: "Young woman laughing with horse" },

  { src: "_V4A3207-Edit-2.jpg", alt: "Woman with white horse in field" },

  // { src: "_V4A0281-Edit-2.jpg", alt: "Woman running with horse in field" },
  // { src: "_V4A3461.jpg", alt: "Woman walking with white horse" },
  // { src: "_V4A2842.jpg", alt: "Woman sitting with white horse in field" },
  // { src: "_V4A9180.jpg", alt: "Bay horse portrait" },
  // { src: "_V4A9627.jpg", alt: "Woman hugging dark horse" },
];

const MasonryGallery = () => {
  return (
    <GalleryContainer>
      <MasonryGrid>
        {galleryImages.map((image, index) => (
          <ImageWrapper key={index}>
            <StyledImage
              src={`/images/gallery/${image.src}`}
              alt={image.alt}
              width={800}
              height={600}
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </ImageWrapper>
        ))}
      </MasonryGrid>
    </GalleryContainer>
  );
};

export default MasonryGallery;
