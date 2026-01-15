"use client";

import styled from "styled-components";
import MasonryGallery from "../components/MasonryGallery";
import FooterSection from "../components/FooterSection";

const PageContainer = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <PageContainer>
      <MasonryGallery />
      <FooterSection />
    </PageContainer>
  );
}
