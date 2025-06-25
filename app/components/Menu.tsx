"use client";

import styled from "styled-components";
import Link from "next/link";

interface MenuProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const MenuContainer = styled.nav<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  min-width: 300px;
  align-items: flex-end;

  @media (max-width: 1024px) {
    min-width: 200px;
    padding: 1.5rem;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 250px;
    background-color: #f3f5fd;
    z-index: 1000;
    transition: right 0.3s ease;
    padding: 6rem 2rem 2rem;
    box-shadow: ${props => props.$isOpen ? '-2px 0 10px rgba(0,0,0,0.1)' : 'none'};
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuItem = styled(Link)`
  font-size: 1.6rem;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #333;
  }
  
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ExternalLink = styled.a`
  font-size: 1.6rem;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #333;
  }
  
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function Menu({ isOpen = false, onClose }: MenuProps) {
  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={handleClose} />
      
      <MenuContainer $isOpen={isOpen}>
        <MenuItem href="/" onClick={handleClose}>Home</MenuItem>
        <MenuItem href="/portfolio" onClick={handleClose}>Portfolio</MenuItem>
        <MenuItem href="/preis" onClick={handleClose}>Preis</MenuItem>
        <MenuItem href="/reitbetriebe" onClick={handleClose}>Reitbetriebe</MenuItem>
        <MenuItem href="/kontakt" onClick={handleClose}>Kontakt</MenuItem>
        <ExternalLink 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleClose}
        >
          Instagram
        </ExternalLink>
      </MenuContainer>
    </>
  );
}