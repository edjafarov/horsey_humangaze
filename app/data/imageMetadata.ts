export interface ImageMetadata {
  src: string;
  title: string;
  description: string;
  alt: string;
}

export const imageMetadata: ImageMetadata[] = [
  {
    src: "/images/slider2x3/1dovge.jpg",
    title: "Braunes Pferd Portrait - Professionelle Pferdefotografie",
    description: "Eindrucksvolles Portrait eines braunen Pferdes mit schwarzem Zaumzeug vor dramatischem Himmel. Hochwertige Pferdefotografie für Reitbetriebe und Pferdebesitzer.",
    alt: "Braunes Pferd mit schwarzem Zaumzeug im Portrait vor bewölktem Himmel"
  },
  {
    src: "/images/slider2x3/2dovge.jpg",
    title: "Elegantes Pferd im Sonnenlicht - Pferdefotografie Deutschland",
    description: "Professionelles Pferdeportrait eines braunen Pferdes mit Zaumzeug in natürlicher Umgebung. Kunstvolle Pferdefotografie bei goldenem Licht.",
    alt: "Braunes Pferd mit Zaumzeug in natürlicher Landschaft bei warmem Sonnenlicht"
  },
  {
    src: "/images/slider2x3/3dovge.jpg",
    title: "Weißes Pferd Portrait - Kunstvolle Pferdefotografie",
    description: "Majestätisches Portrait eines weißen Pferdes mit aufmerksamen Ohren. Professionelle Tierfotografie für Reitställe und Pferdeliebhaber.",
    alt: "Weißes Pferd im Seitenprofil mit aufgestellten Ohren vor natürlichem Hintergrund"
  },
  {
    src: "/images/slider2x3/4dovge.jpg",
    title: "Junges Fohlen Portrait - Emotionale Pferdefotografie",
    description: "Nahaufnahme eines jungen Fohlens im goldenen Abendlicht. Emotionale Tierfotografie die die Schönheit und Sanftmut der Pferde einfängt.",
    alt: "Junges braunes Fohlen im Profil mit goldenem Abendlicht"
  },
  {
    src: "/images/slider2x3/5dovge.jpg",
    title: "Weißes Pferd in Schwarz-Weiß - Künstlerische Pferdefotografie",
    description: "Künstlerisches Schwarz-Weiß Portrait eines weißen Pferdes mit Zaumzeug. Zeitlose Pferdefotografie für anspruchsvolle Pferdebesitzer.",
    alt: "Weißes Pferd mit Zaumzeug in künstlerischer Schwarz-Weiß Aufnahme"
  }
];

export function getImageByIndex(index: number): ImageMetadata | undefined {
  return imageMetadata[index];
}

export function getJsonLdData() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Human Gaze Photography - Pferdefotografie Portfolio",
    "description": "Professionelle Pferdefotografie in Deutschland. Kunstvolle Portraits von Pferden für Reitbetriebe und Pferdebesitzer.",
    "url": "https://humangaze-photography.de",
    "image": imageMetadata.map((img, index) => ({
      "@type": "ImageObject",
      "name": img.title,
      "caption": img.description,
      "contentUrl": `https://humangaze-photography.de${img.src}`,
      "thumbnailUrl": `https://humangaze-photography.de${img.src}`,
      "description": img.description,
      "position": index + 1
    })),
    "numberOfItems": imageMetadata.length,
    "author": {
      "@type": "Person",
      "name": "Human Gaze Photography",
      "url": "https://humangaze-photography.de"
    }
  };
}