'use client';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f3f5fd;
  margin-top: auto;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: 0.8rem;
  color: #666;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const ContactItem = styled.a`
  color: #666;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const Separator = styled.span`
  color: #ccc;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <ContactInfo>
        <ContactItem href="mailto:your.email@example.com">
          your.email@example.com
        </ContactItem>
        <Separator>•</Separator>
        <ContactItem href="tel:+1234567890">
          +1 (234) 567-890
        </ContactItem>
        <Separator>•</Separator>
        <ContactItem href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          Instagram
        </ContactItem>
      </ContactInfo>
    </FooterContainer>
  );
}