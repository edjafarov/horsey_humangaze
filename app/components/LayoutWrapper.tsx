"use client";

import styled from "styled-components";
import HeroSection from "./HeroSection";
import Tagline from "./Tagline";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f3f5fd;
`;

const MainContent = styled.main`
  width: 100%;
`;

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <HeroSection />
      <Tagline />
      <MainContent>{children}</MainContent>
    </PageContainer>
  );
}
