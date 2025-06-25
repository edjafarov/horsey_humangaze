'use client';

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
`;

const ContentSection = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <MenuSection>
          <Menu />
        </MenuSection>
        <ContentSection>
          {children}
        </ContentSection>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}