'use client';

import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f3f5fd;
`;

const Name = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  margin: 0;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Name>Your Name</Name>
    </HeaderContainer>
  );
}