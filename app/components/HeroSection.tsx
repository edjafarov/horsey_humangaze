"use client";

import styled from "styled-components";
import Image from "next/image";

const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 3 / 2;
  max-height: 70vh;

  @media (max-width: 768px) {
    aspect-ratio: 4 / 3;
    max-height: 50vh;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Image
        src="/images/hero.jpg"
        alt="Woman kissing white horse in snowy landscape - Human Gaze Equine Photography"
        fill
        style={{ objectFit: "cover" }}
        priority
        sizes="100vw"
      />
    </HeroContainer>
  );
};

export default HeroSection;
