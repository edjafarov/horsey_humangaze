"use client";

import styled from "styled-components";
import Link from "next/link";
import { useParams } from "next/navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #666;
  margin: 1rem 0 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 3rem;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid #333;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #333;
    color: white;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;

export default function NotFound() {
  const params = useParams();
  const locale = (params?.locale as string) || 'de';
  const isGerman = locale === 'de';

  return (
    <Container>
      <Title>404</Title>
      <Subtitle>
        {isGerman ? 'Seite nicht gefunden' : 'Page Not Found'}
      </Subtitle>
      <Description>
        {isGerman 
          ? 'Die von Ihnen gesuchte Seite existiert leider nicht. Vielleicht finden Sie hier, was Sie suchen:'
          : 'Sorry, the page you are looking for does not exist. You might find what you are looking for here:'}
      </Description>
      <LinksContainer>
        <StyledLink href={isGerman ? "/" : "/en/"}>
          {isGerman ? 'Startseite' : 'Home'}
        </StyledLink>
        <StyledLink href={isGerman ? "/portfolio" : "/en/portfolio"}>
          Portfolio
        </StyledLink>
        <StyledLink href={isGerman ? "/kontakt" : "/en/kontakt"}>
          {isGerman ? 'Kontakt' : 'Contact'}
        </StyledLink>
      </LinksContainer>
    </Container>
  );
}