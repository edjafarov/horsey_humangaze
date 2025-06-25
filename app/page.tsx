"use client";

import styled from "styled-components";

const ContentContainer = styled.div`
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
    <ContentContainer>
      {/* Content area - ImageSlider is now in the Header */}
    </ContentContainer>
  );
}
