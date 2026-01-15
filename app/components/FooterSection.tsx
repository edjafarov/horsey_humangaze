"use client";

import styled from "styled-components";
import Link from "next/link";
import { useParams } from "next/navigation";

const FooterContainer = styled.footer`
  padding: 3rem 2rem;
  text-align: center;
  background-color: #f3f5fd;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const LocationText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const FooterLink = styled(Link)`
  color: #333;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: 1.1rem;
  font-weight: 400;
  transition: all 0.2s ease;

  &:hover {
    color: #000;
    text-decoration-thickness: 2px;
  }
`;

const ExternalLink = styled.a`
  color: #333;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: 1.1rem;
  font-weight: 400;
  transition: all 0.2s ease;

  &:hover {
    color: #000;
    text-decoration-thickness: 2px;
  }
`;

const FooterSection = () => {
  const params = useParams();
  const locale = params.locale as string;
  const basePath = locale === "en" ? "/en" : "";

  return (
    <FooterContainer>
      <LocationText>Capturing characters in Berlin &amp; Germany</LocationText>
      <LinksContainer>
        <FooterLink href={`${basePath}/kontakt`}>Contact</FooterLink>
        <ExternalLink
          href="https://www.instagram.com/equine_humangazephotography/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </ExternalLink>
        <FooterLink href={`${basePath}/impressum`}>Legal Notice</FooterLink>
        <FooterLink href={`${basePath}/datenschutzerklaerung`}>Privacy Policy</FooterLink>
      </LinksContainer>
    </FooterContainer>
  );
};

export default FooterSection;
