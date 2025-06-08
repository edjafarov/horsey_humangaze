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

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: #333;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Name>Nana Kulykova</Name>
    </HeaderContainer>
  );
}
