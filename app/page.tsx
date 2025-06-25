'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';

const ImageSlider = dynamic(() => import('./components/ImageSlider'), {
  ssr: false,
  loading: () => <LoadingContainer>Loading...</LoadingContainer>
});

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #666;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export default function Home() {
  return (
    <SliderContainer>
      <ImageSlider />
    </SliderContainer>
  );
}
