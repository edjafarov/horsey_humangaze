'use client';

import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 3rem 10%;
  line-height: 1.7;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

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

const List = styled.ul`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
  padding-left: 2rem;
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const Link = styled.a`
  color: #0066cc;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default function DatenschutzerklaerungClient() {
  return (
    <PageWrapper>
      <Title>Datenschutzerklärung</Title>
      
      <Section>
        <SectionTitle>Einleitung und allgemeine Angaben</SectionTitle>
        <Text>
          Vielen Dank für Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen 
          Daten ist uns sehr wichtig. Nachfolgend finden Sie Informationen darüber, wie wir mit 
          den Daten umgehen, die durch Ihre Nutzung unserer Website erfasst werden. Die 
          Verarbeitung Ihrer Daten erfolgt in Übereinstimmung mit den gesetzlichen 
          Datenschutzvorschriften.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Verantwortliche Stelle im Sinne des Datenschutzrechts</SectionTitle>
        <Text>
          Human Gaze Photography<br />
          Nataliya Kulykova<br />
          <br />
          <Link href="mailto:nana@humangaze-photography.com">nana@humangaze-photography.com</Link><br />
          +49 157 57876828
        </Text>
      </Section>

      <Section>
        <SectionTitle>Begriffsbestimmungen</SectionTitle>
        <Text>
          Unsere Datenschutzerklärung soll für jedermann einfach und verständlich sein. In dieser 
          Datenschutzerklärung werden in der Regel die offiziellen Begriffe der 
          Datenschutzgrundverordnung (DSGVO) verwendet. Die offiziellen Begriffsbestimmungen 
          werden in Art. 4 DSGVO erläutert.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Datenverarbeitung durch den Besuch unserer Website</SectionTitle>
        <Text>
          Wenn Sie unsere Webseiten aufrufen, ist es technisch notwendig, dass über Ihren 
          Internetbrowser Daten an unseren Webserver übermittelt werden. Folgende Daten werden 
          während einer laufenden Verbindung zur Kommunikation zwischen Ihrem Internetbrowser 
          und unserem Webserver aufgezeichnet:
        </Text>
        <List>
          <li>Datum und Uhrzeit der Anforderung</li>
          <li>Name der angeforderten Datei</li>
          <li>Seite, von der aus die Datei angefordert wurde</li>
          <li>Zugriffsstatus</li>
          <li>Verwendeter Webbrowser und verwendetes Betriebssystem</li>
          <li>(Vollständige) IP-Adresse des anfordernden Rechners</li>
          <li>Übertragene Datenmenge</li>
        </List>
        <Text>
          Die aufgelisteten Daten erheben wir, um einen reibungslosen Verbindungsaufbau der 
          Website zu gewährleisten und eine komfortable Nutzung unserer Website durch die Nutzer 
          zu ermöglichen. Zudem dient die Logdatei der Auswertung der Systemsicherheit und 
          -stabilität sowie administrativen Zwecken. Rechtsgrundlage für die vorübergehende 
          Speicherung der Daten bzw. der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Kontaktformular und Kontaktaufnahme per E-Mail</SectionTitle>
        <Text>
          Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre 
          Angaben aus dem Anfrageformular bzw. Ihrer E-Mail inklusive der von Ihnen dort 
          angegebenen Vor- und Nachname, E-Mail-Adresse und Telefonnummer zwecks Bearbeitung 
          der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die Angabe von 
          Vor- und Nachname, E-Mail-Adresse sowie Ihrer Telefonnummer ist erforderlich, um Ihre 
          Anfrage bearbeiten zu können. Diese Daten geben wir in keinem Fall an Dritte weiter, 
          außer es handelt sich um technische Dienstleister (z. B. Webhosting oder 
          E-Mail-Versand), die uns beim Betrieb der Website unterstützen. Die Übermittlung 
          erfolgt dabei ausschließlich über eine SSL-verschlüsselte Verbindung. Rechtsgrundlage 
          für die Verarbeitung der Daten ist unser berechtigtes Interesse an der Beantwortung 
          Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Die von Ihnen bereitgestellten 
          Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet wurde und der 
          Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, etwa 
          handelsrechtliche oder steuerrechtliche Pflichten.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Einbindung von Vercel Analytics</SectionTitle>
        <Text>
          Wir verwenden auf unserer Website Vercel Analytics zur Analyse und Verbesserung unserer 
          Website-Performance. Vercel Analytics ist ein datenschutzfreundlicher Analysedienst, 
          der keine Cookies verwendet und keine persönlichen Daten sammelt. Es werden lediglich 
          aggregierte Daten über Seitenaufrufe und Performance-Metriken erfasst. Die 
          Rechtsgrundlage für die Nutzung ist unser berechtigtes Interesse an der statistischen 
          Analyse des Nutzerverhaltens zu Optimierungszwecken gemäß Art. 6 Abs. 1 lit. f DSGVO.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Rechte der betroffenen Person</SectionTitle>
        <Text>
          Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO 
          und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
        </Text>
        <List>
          <li>Auskunftsrecht (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (&quot;Recht auf Vergessenwerden&quot;) (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </List>
        <Text>
          Möchten Sie eines dieser Rechte in Anspruch nehmen, wenden Sie sich bitte an unsere 
          oben genannte Kontaktadresse.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Datenlöschung und Speicherdauer</SectionTitle>
        <Text>
          Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, 
          sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus dann 
          erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in 
          unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der 
          Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten 
          erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist 
          abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten 
          für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Änderung unserer Datenschutzbestimmungen</SectionTitle>
        <Text>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
          aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
          in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für 
          Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Fragen an den Datenschutzbeauftragten</SectionTitle>
        <Text>
          Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an die 
          oben genannte Adresse.
        </Text>
      </Section>
    </PageWrapper>
  );
}