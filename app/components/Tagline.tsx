"use client";

import styled from "styled-components";

const TaglineContainer = styled.div`
  padding: 3rem 2rem;
  text-align: center;
  background-color: #f3f5fd;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const TaglineText = styled.h1`
  font-family: Inter, "Inter Fallback", sans-serif;
  font-size: 3rem;
  font-weight: 300;
  color: #333;
  letter-spacing: 0.05em;
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Tagline = () => {
  return (
    <TaglineContainer>
      <TaglineText>More horses. More character. More emotion.</TaglineText>
    </TaglineContainer>
  );
};

export default Tagline;
