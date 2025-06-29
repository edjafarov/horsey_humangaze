'use client';

import styled from 'styled-components';
import PageContent from '../components/PageContent';


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

export default function Kontakt() {
  return (
    <PageContent>
      <Title>Kontakt</Title>
      <Text>Coming soon...</Text>
    </PageContent>
  );
}