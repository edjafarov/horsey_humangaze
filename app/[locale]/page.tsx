"use client";

import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Tagline from "../components/Tagline";
import MasonryGallery from "../components/MasonryGallery";
import FooterSection from "../components/FooterSection";

const PageContainer = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <PageContainer>
      <HeroSection />
      <Tagline />
      <MasonryGallery />
      <FooterSection />
    </PageContainer>
  );
}
