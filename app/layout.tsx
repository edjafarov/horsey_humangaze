import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./components/StyledComponentsRegistry";
import LayoutWrapper from "./components/LayoutWrapper";
import { getJsonLdData } from "./data/imageMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Human Gaze Photography - Professionelle Pferdefotografie",
  description: "Kunstvolle Pferdefotografie in Deutschland. Emotionale Portraits von Pferden für Reitbetriebe und Pferdebesitzer. Hochwertige Tierfotografie mit Leidenschaft.",
  keywords: "Pferdefotografie, Pferde Portrait, Tierfotografie, Reitbetriebe, Pferdefotograf, Deutschland",
  openGraph: {
    title: "Human Gaze Photography - Professionelle Pferdefotografie",
    description: "Kunstvolle Pferdefotografie in Deutschland. Emotionale Portraits von Pferden.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getJsonLdData();
  
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
