"use client";

import styled from "styled-components";
import Link from "next/link";

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  min-width: 200px;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
    min-width: 150px;
  }
`;

const MenuItem = styled(Link)`
  font-size: 1.1rem;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #333;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ExternalLink = styled.a`
  font-size: 1.1rem;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #333;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Menu() {
  return (
    <MenuContainer>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/portfolio">Portfolio</MenuItem>
      <MenuItem href="/preis">Preis</MenuItem>
      <MenuItem href="/reitbetriebe">Reitbetriebe</MenuItem>
      <MenuItem href="/kontakt">Kontakt</MenuItem>
      <ExternalLink 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Instagram
      </ExternalLink>
    </MenuContainer>
  );
}