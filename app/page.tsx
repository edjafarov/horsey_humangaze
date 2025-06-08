'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

const ImageSlider = dynamic(() => import('./components/ImageSlider'), {
  ssr: false,
  loading: () => <LoadingContainer>Loading...</LoadingContainer>
});

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: #666;
`;

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f3f5fd;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 100vh;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <ImageSlider />
      </MainContent>
      <Footer />
    </PageContainer>
  );
}
