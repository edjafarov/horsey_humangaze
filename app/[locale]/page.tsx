"use client";

import styled from "styled-components";

const ContentContainer = styled.div`
  padding: 3rem 10%;
  line-height: 1.7;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 2.5rem 0 1.5rem 0;
  color: #333;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 2rem 0 1rem 0;
  }
`;

const FeatureSection = styled.div`
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #333;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FeatureDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export default function Home() {
  return (
    <ContentContainer>
      <HeroTitle>Willkommen bei Humangaze Equine Photography</HeroTitle>
      
      <Subtitle>
        Pferd. Licht. Shot. So minimalistisch, klar und entspannt sehe ich Pferdefotografie. 
        Maximum Pferde-Charakter. Eine persönliche Geschichte in jedem Bild. Feine, unaufdringliche Retusche.
      </Subtitle>

      <SectionTitle>Also was erwartet euch bei Human Gaze Photography?</SectionTitle>

      <FeatureSection>
        <FeatureTitle>Individuelles Fine-Art-Konzept.</FeatureTitle>
        <FeatureDescription>
          Jedes Shooting ist ein maßgeschneidertes Erlebnis – abgestimmt auf Charakter, Rasse, 
          Bewegung und besondere Eigenheiten deines Pferdes.
        </FeatureDescription>
      </FeatureSection>

      <FeatureSection>
        <FeatureTitle>Emotionale Bildsprache.</FeatureTitle>
        <FeatureDescription>
          Fotos von Human Gaze wirken: Sie berühren, beruhigen, gehen ans Herz, erfüllen mit Stolz, 
          erfreuen das Auge, werben, schaffen bleibende Erinnerungen – perfekt für Wandbilder, 
          Kalender, exklusive Prints.
        </FeatureDescription>
      </FeatureSection>

      <FeatureSection>
        <FeatureTitle>Regional & mobil.</FeatureTitle>
        <FeatureDescription>
          Wenn du in Berlin oder Umgebung lebst, komme ich gerne zu dir – ob auf dem Reitplatz, 
          in der freien Natur oder direkt im Stall.
        </FeatureDescription>
      </FeatureSection>

      <FeatureSection>
        <FeatureTitle>Mensch.</FeatureTitle>
        <FeatureDescription>
          Ich achte sorgfältig darauf, dass die Fotos das Zusammenspiel eurer Persönlichkeit mit 
          dem Charakter eures Pferdes harmonisch zeigen. Meine Kamera stresst nicht. Und glaub mir: 
          Jeder Mensch ist fotogen, wenn er sich wohlfühlt.
        </FeatureDescription>
      </FeatureSection>
    </ContentContainer>
  );
}
