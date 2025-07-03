"use client";

import styled from "styled-components";
import { useTranslations } from 'next-intl';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f3f5fd;
  margin-top: auto;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-size: 0.9rem;
  color: #666;

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 0.8rem;
  }
`;

const LegalLink = styled.a`
  color: #666;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  color: #999;
`;

export default function Footer() {
  const t = useTranslations('navigation');
  
  return (
    <FooterContainer>
      <LegalLinks>
        <LegalLink href="/impressum">
          {t('imprint')}
        </LegalLink>
        <Separator>|</Separator>
        <LegalLink href="/datenschutzerklaerung">
          {t('privacy')}
        </LegalLink>
      </LegalLinks>
    </FooterContainer>
  );
}
