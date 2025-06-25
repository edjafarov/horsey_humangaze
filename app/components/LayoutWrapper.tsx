"use client";

import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f3f5fd;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const MenuSection = styled.aside`
  display: flex;
  align-items: center;
  background-color: #f3f5fd;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 0;
`;

const HeaderSection = styled.div`
  background-color: #f3f5fd;
  flex-shrink: 0;
`;

const ContentSection = styled.div`
  flex: 1;
  min-height: 100vh;
`;

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <MainContent>
        <MenuSection>
          <Menu />
        </MenuSection>
        <RightSection>
          <HeaderSection>
            <Header />
          </HeaderSection>
          <ContentSection>{children}</ContentSection>
        </RightSection>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}
