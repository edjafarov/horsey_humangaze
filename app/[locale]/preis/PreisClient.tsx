"use client";

import styled from "styled-components";
import PageContent from "@/app/components/PageContent";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PackageCard = styled.div`
  background: #fff;
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: #333;
  }

  &:active {
    transform: translateY(-2px);
  }
`;

const PackageTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const PackagePrice = styled.div`
  font-size: 2rem;
  color: #2c5530;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const PackageFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

const PackageFeature = styled.li`
  padding: 0.5rem 0;
  color: #666;
  font-size: 0.95rem;
  border-bottom: 1px solid #f5f5f5;

  &:last-child {
    border-bottom: none;
  }
`;

const PackageNote = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 1rem;
  font-style: italic;
`;

const TravelCost = styled.div`
  background: #f8f9fa;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
`;

const AdditionalSection = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`;

const AdditionalTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const AdditionalList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AdditionalItem = styled.li`
  padding: 0.75rem 0;
  color: #666;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const AdditionalPrice = styled.span`
  color: #2c5530;
  font-weight: 600;
`;

export default function PreisClient() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const handlePlanSelect = (
    planName: string,
    planPrice: string,
    planFeatures: string[]
  ) => {
    const planDetails = `Hallo! Ich interessiere mich für das "${planName}" Paket (${planPrice}).

Paket-Details:
${planFeatures.map((feature) => `• ${feature}`).join("\n")}

Ich würde gerne weitere Informationen erhalten und einen Termin vereinbaren.`;

    const encodedMessage = encodeURIComponent(planDetails);
    router.push(
      `/${locale}/kontakt?plan=${encodeURIComponent(planName)}&message=${encodedMessage}`
    );
  };

  return (
    <PageContent>
      <Title>Preise und Pakete</Title>

      <PackagesGrid>
        <PackageCard
          onClick={() =>
            handlePlanSelect("Minimalistisch", "100 €", [
              "30 Minuten Fotoshooting",
              "5 Fotos mit Farbkorrektur (digital)",
              "Bei mind. 2 Kund:innen zur gleichen Zeit und am gleichen Ort möglich",
              "zzgl. Fahrtkosten (0,30 €/km ab 12209)",
            ])
          }
        >
          <PackageTitle>Minimalistisch</PackageTitle>
          <PackagePrice>100 €</PackagePrice>
          <PackageFeatures>
            <PackageFeature>30 Minuten Fotoshooting</PackageFeature>
            <PackageFeature>5 Fotos mit Farbkorrektur (digital)</PackageFeature>
          </PackageFeatures>
          <PackageNote>
            Bei mind. 2 Kund:innen zur gleichen Zeit und am gleichen Ort möglich
          </PackageNote>
          <TravelCost>📍 zzgl. Fahrtkosten (0,30 €/km ab 12209)</TravelCost>
        </PackageCard>

        <PackageCard
          onClick={() =>
            handlePlanSelect("Entspannt", "250 €", [
              "1 Stunde Fotoshooting",
              "10 Bilder mit Farbkorrektur (digital)",
              "1 Bild nach Wahl mit vollständiger Retusche",

              "zzgl. Fahrtkosten (0,30 €/km ab 12209)",
            ])
          }
        >
          <PackageTitle>Entspannt</PackageTitle>
          <PackagePrice>250 €</PackagePrice>
          <PackageFeatures>
            <PackageFeature>1 Stunde Fotoshooting</PackageFeature>
            <PackageFeature>
              10 Bilder mit Farbkorrektur (digital)
            </PackageFeature>
            <PackageFeature>
              1 Bild nach Wahl mit vollständiger Retusche
            </PackageFeature>
          </PackageFeatures>
          <TravelCost>📍 zzgl. Fahrtkosten (0,30 €/km ab 12209)</TravelCost>
        </PackageCard>

        <PackageCard
          onClick={() =>
            handlePlanSelect("Intensiv", "350 €", [
              "2 Stunden Fotowalk",
              "2–3 verschiedene Motive (z. B. auf der Weide, im Wald, am Stall)",
              "2–3 Outfits pro Person möglich",
              "15 Bilder mit Farbkorrektur (digital)",
              "1 Foto nach Wahl mit vollständiger Retusche",
              "Professioneller Druck auf hochwertigem Fotopapier (20×30 cm)",
              "zzgl. Fahrtkosten (0,30 €/km ab 12209)",
            ])
          }
        >
          <PackageTitle>Intensiv</PackageTitle>
          <PackagePrice>350 €</PackagePrice>
          <PackageFeatures>
            <PackageFeature>2 Stunden Fotowalk</PackageFeature>
            <PackageFeature>
              2–3 verschiedene Motive (z. B. auf der Weide, im Wald, am Stall)
            </PackageFeature>
            <PackageFeature>2–3 Outfits pro Person möglich</PackageFeature>
            <PackageFeature>
              15 Bilder mit Farbkorrektur (digital)
            </PackageFeature>
            <PackageFeature>
              1 Foto nach Wahl mit vollständiger Retusche
            </PackageFeature>
            <PackageFeature>
              Professioneller Druck auf hochwertigem Fotopapier (20×30 cm)
            </PackageFeature>
          </PackageFeatures>
          <TravelCost>📍 zzgl. Fahrtkosten (0,30 €/km ab 12209)</TravelCost>
        </PackageCard>

        <PackageCard
          onClick={() =>
            handlePlanSelect("Fine Art Print", "350 €", [
              "45 Minuten stilvolles Porträtshooting",
              "10 Fotos zur Auswahl",
              "1 Foto mit vollständiger Retusche",
              "Professioneller Großformatdruck (60×40 cm)",
              "zzgl. Fahrtkosten (0,30 €/km ab 12209)",
            ])
          }
        >
          <PackageTitle>Fine Art Print</PackageTitle>
          <PackagePrice>350 €</PackagePrice>
          <PackageFeatures>
            <PackageFeature>
              45 Minuten stilvolles Porträtshooting
            </PackageFeature>
            <PackageFeature>10 Fotos zur Auswahl</PackageFeature>
            <PackageFeature>1 Foto mit vollständiger Retusche</PackageFeature>
            <PackageFeature>
              Professioneller Großformatdruck (60×40 cm)
            </PackageFeature>
          </PackageFeatures>
          <TravelCost>📍 zzgl. Fahrtkosten (0,30 €/km ab 12209)</TravelCost>
        </PackageCard>

        <PackageCard
          onClick={() =>
            handlePlanSelect("Album", "Ab 550 €", [
              "Ab 2 Stunden Shooting",
              "Ab 40 fertigen Bildern",
              "Professionelle Gestaltung und Druck eines hochwertigen Fotobuchs ab 28 Seiten",
              "zzgl. Fahrtkosten (0,30 €/km ab 12209)",
            ])
          }
        >
          <PackageTitle>Album</PackageTitle>
          <PackagePrice>Ab 550 €</PackagePrice>
          <PackageFeatures>
            <PackageFeature>Ab 2 Stunden Shooting</PackageFeature>
            <PackageFeature>Ab 40 fertigen Bildern</PackageFeature>
            <PackageFeature>
              Professionelle Gestaltung und Druck eines hochwertigen Fotobuchs
              ab 28 Seiten
            </PackageFeature>
          </PackageFeatures>
          <TravelCost>📍 zzgl. Fahrtkosten (0,30 €/km ab 12209)</TravelCost>
        </PackageCard>
      </PackagesGrid>

      <AdditionalSection>
        <AdditionalTitle>Zusatzoptionen</AdditionalTitle>
        <AdditionalList>
          <AdditionalItem>
            <span>Jedes weitere retuschierte Bild inkl. Druck (20×30 cm)</span>
            <AdditionalPrice>+40 €</AdditionalPrice>
          </AdditionalItem>
          <AdditionalItem>
            <span>Jedes weitere digitale Bild (Farbkorrektur)</span>
            <AdditionalPrice>+15 €</AdditionalPrice>
          </AdditionalItem>
          <AdditionalItem>
            <span>Weitere Personen oder Pferde</span>
            <AdditionalPrice>+50 € pro Tier/Mensch</AdditionalPrice>
          </AdditionalItem>
          <AdditionalItem>
            <span>Sonnenaufgangs- oder Sonnenuntergangsshooting</span>
            <AdditionalPrice>+40 €</AdditionalPrice>
          </AdditionalItem>
        </AdditionalList>
        <PackageNote
          style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "1rem" }}
        >
          Gruppenrabatt möglich. Bringt gern Freund:innen aus eurem Stall.
        </PackageNote>
      </AdditionalSection>
    </PageContent>
  );
}
