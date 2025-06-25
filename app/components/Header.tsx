"use client";

import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 0;
  background-color: #f3f5fd;
  flex-shrink: 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  color: #333;
  margin: 0;
  text-align: center;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>
        Human Gaze Photography
        <Subtitle>Horses</Subtitle>
      </Title>
    </HeaderContainer>
  );
}
