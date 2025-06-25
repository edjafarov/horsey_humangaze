'use client';

import styled from 'styled-components';

const ContentSection = styled.div`
  padding: 3rem;
  height: 100%;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
`;

export default function Datenschutzerklaerung() {
  return (
    <ContentSection>
      <Title>Datenschutzerklärung</Title>
      <Text>Coming soon...</Text>
    </ContentSection>
  );
}