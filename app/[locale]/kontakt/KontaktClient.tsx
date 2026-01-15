"use client";

import styled from "styled-components";
import { useParams } from "next/navigation";
import FooterSection from "@/app/components/FooterSection";

const PageWrapper = styled.div`
  padding: 2rem;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Inter, "Inter Fallback", sans-serif;
  font-size: 2.5rem;
  font-weight: 300;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ContactItem = styled.div`
  text-align: center;
`;

const ContactLabel = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  font-size: 1.4rem;
  color: #333;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: #000;
    text-decoration-thickness: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default function KontaktClient() {
  const params = useParams();
  const locale = params.locale as string;
  const isGerman = locale === "de";

  return (
    <>
      <PageWrapper>
        <Title>Contact</Title>

        <ContactContainer>
          <ContactItem>
            <ContactLabel>{isGerman ? "E-Mail" : "Email"}</ContactLabel>
            <ContactLink href="mailto:nana@humangaze-photography.com">
              nana@humangaze-photography.com
            </ContactLink>
          </ContactItem>

          <ContactItem>
            <ContactLabel>{isGerman ? "Telefon" : "Phone"}</ContactLabel>
            <ContactLink href="tel:+4915757876828">
              +49 157 57876828
            </ContactLink>
          </ContactItem>
        </ContactContainer>
      </PageWrapper>
      <FooterSection />
    </>
  );
}
