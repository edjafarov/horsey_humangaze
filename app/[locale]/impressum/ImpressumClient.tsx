'use client';

import styled from 'styled-components';
import PageContent from '@/app/components/PageContent';

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  color: #0066cc;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default function ImpressumClient() {
  return (
    <PageContent>
      <Title>Impressum</Title>
      
      <Section>
        <SectionTitle>Angaben gemäß § 5 TMG:</SectionTitle>
        <Text>
          Human Gaze Photography<br />
          Inhaberin: Nataliya Kulykova<br />
          Parallelstraße 29A<br />
          12209 Berlin
        </Text>
      </Section>

      <Section>
        <SectionTitle>Kontakt:</SectionTitle>
        <Text>
          Telefon: +49 157 57876828<br />
          E-Mail: <Link href="mailto:nana@humangaze-photography.com">nana@humangaze-photography.com</Link><br />
          Website: <Link href="https://humangaze-photography.com/en">https://humangaze-photography.com</Link>
        </Text>
      </Section>

      <Section>
        <SectionTitle>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</SectionTitle>
        <Text>
          Frau Nataliya Kulykova<br />
          Parallelstraße 29A<br />
          12209 Berlin
        </Text>
      </Section>

      <Section>
        <SectionTitle>Streitschlichtung</SectionTitle>
        <Text>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          https://ec.europa.eu/consumers/odr.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
          Verbraucherschlichtungsstelle teilzunehmen.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Haftung für Inhalte</SectionTitle>
        <Text>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
          Tätigkeit hinweisen.
        </Text>
        <Text>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
          allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend 
          entfernen.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Haftung für Links</SectionTitle>
        <Text>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
          der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
          mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
          Verlinkung nicht erkennbar.
        </Text>
        <Text>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Urheberrecht</SectionTitle>
        <Text>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
          Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
          nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </Text>
        <Text>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
          Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
          gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
          bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
          werden wir derartige Inhalte umgehend entfernen.
        </Text>
      </Section>
    </PageContent>
  );
}