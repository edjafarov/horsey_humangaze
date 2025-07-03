export interface BilingualImageMetadata {
  src: string;
  de: {
    title: string;
    description: string;
    alt: string;
  };
  en: {
    title: string;
    description: string;
    alt: string;
  };
}

// Helper function to get metadata by locale
export function getLocalizedMetadata(
  metadata: BilingualImageMetadata[],
  locale: 'de' | 'en'
): { src: string; title: string; description: string; alt: string }[] {
  return metadata.map(item => ({
    src: item.src,
    title: item[locale].title,
    description: item[locale].description,
    alt: item[locale].alt,
  }));
}

// Convert first few images as example - full translation would be done later
export const bilingualImageMetadata: BilingualImageMetadata[] = [
  {
    src: "/images/slider2x3/1dovge.jpg",
    de: {
      title: "Braunes Pferd Portrait - Professionelle Pferdefotografie",
      description: "Eindrucksvolles Portrait eines braunen Pferdes mit schwarzem Zaumzeug vor dramatischem Himmel. Hochwertige Pferdefotografie für Reitbetriebe und Pferdebesitzer.",
      alt: "Braunes Pferd mit schwarzem Zaumzeug im Portrait vor bewölktem Himmel"
    },
    en: {
      title: "Brown Horse Portrait - Professional Horse Photography",
      description: "Impressive portrait of a brown horse with black bridle against dramatic sky. High-quality horse photography for riding stables and horse owners.",
      alt: "Brown horse with black bridle in portrait against cloudy sky"
    }
  },
  {
    src: "/images/slider2x3/2dovge.jpg",
    de: {
      title: "Elegantes Pferd im Sonnenlicht - Pferdefotografie Deutschland",
      description: "Professionelles Pferdeportrait eines braunen Pferdes mit Zaumzeug in natürlicher Umgebung. Kunstvolle Pferdefotografie bei goldenem Licht.",
      alt: "Braunes Pferd mit Zaumzeug in natürlicher Landschaft bei warmem Sonnenlicht"
    },
    en: {
      title: "Elegant Horse in Sunlight - Horse Photography Germany",
      description: "Professional horse portrait of a brown horse with bridle in natural surroundings. Artistic horse photography in golden light.",
      alt: "Brown horse with bridle in natural landscape in warm sunlight"
    }
  },
  {
    src: "/images/slider2x3/3dovge.jpg",
    de: {
      title: "Weißes Pferd Portrait - Kunstvolle Pferdefotografie",
      description: "Majestätisches Portrait eines weißen Pferdes mit aufmerksamen Ohren. Professionelle Tierfotografie für Reitställe und Pferdeliebhaber.",
      alt: "Weißes Pferd im Seitenprofil mit aufgestellten Ohren vor natürlichem Hintergrund"
    },
    en: {
      title: "White Horse Portrait - Artistic Horse Photography",
      description: "Majestic portrait of a white horse with attentive ears. Professional animal photography for riding stables and horse lovers.",
      alt: "White horse in side profile with pricked ears against natural background"
    }
  },
  {
    src: "/images/slider2x3/4dovge.jpg",
    de: {
      title: "Junges Fohlen Portrait - Emotionale Pferdefotografie",
      description: "Nahaufnahme eines jungen Fohlens im goldenen Abendlicht. Emotionale Tierfotografie die die Schönheit und Sanftmut der Pferde einfängt.",
      alt: "Junges braunes Fohlen im Profil mit goldenem Abendlicht"
    },
    en: {
      title: "Young Foal Portrait - Emotional Horse Photography",
      description: "Close-up of a young foal in golden evening light. Emotional animal photography capturing the beauty and gentleness of horses.",
      alt: "Young brown foal in profile with golden evening light"
    }
  },
  {
    src: "/images/slider2x3/5dovge.jpg",
    de: {
      title: "Weißes Pferd in Schwarz-Weiß - Künstlerische Pferdefotografie",
      description: "Künstlerisches Schwarz-Weiß Portrait eines weißen Pferdes mit Zaumzeug. Zeitlose Pferdefotografie für anspruchsvolle Pferdebesitzer.",
      alt: "Weißes Pferd mit Zaumzeug in künstlerischer Schwarz-Weiß Aufnahme"
    },
    en: {
      title: "White Horse in Black and White - Artistic Horse Photography",
      description: "Artistic black and white portrait of a white horse with bridle. Timeless horse photography for discerning horse owners.",
      alt: "White horse with bridle in artistic black and white shot"
    }
  }
];

// Portfolio Idyllisch - Example translations
export const portfolioIdyllischBilingual: BilingualImageMetadata[] = [
  {
    src: "/images/portfolio/idyllisch/idyllisch1.jpg",
    de: {
      title: "Idyllische Pferdefotografie - Fuchs Pferd Portrait im goldenen Sonnenuntergang",
      description: "Professionelle Pferdefotografie zeigt einen wunderschönen Fuchs im warmen Sonnenuntergang. Atmosphärische Aufnahme mit perfektem Licht für emotionale Pferdeportraits in idyllischer Stimmung.",
      alt: "Fuchs Pferd Kopf im Profil mit Trense bei goldenem Sonnenuntergang"
    },
    en: {
      title: "Idyllic Horse Photography - Chestnut Horse Portrait in Golden Sunset",
      description: "Professional horse photography showcasing a beautiful chestnut in warm sunset. Atmospheric shot with perfect light for emotional horse portraits in idyllic mood.",
      alt: "Chestnut horse head in profile with bridle at golden sunset"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9116-Edit.jpg",
    de: {
      title: "Schimmel Pferd Portrait - Neugieriger Blick über Stalltür Pferdefotografie",
      description: "Bezauberndes Portrait eines Schimmel Pferdes mit neugierigem Blick über die Stalltür. Professionelle Pferdefotografie mit warmem Licht und natürlicher Atmosphäre.",
      alt: "Weißes Schimmel Pferd schaut neugierig über Stalltür"
    },
    en: {
      title: "Grey Horse Portrait - Curious Look Over Stable Door Horse Photography",
      description: "Charming portrait of a grey horse with curious look over the stable door. Professional horse photography with warm light and natural atmosphere.",
      alt: "White grey horse looking curiously over stable door"
    }
  }
  // ... Additional translations would continue for all images
];

// Complete bilingual metadata for all slider images
export const allSliderImagesBilingual: BilingualImageMetadata[] = [
  {
    src: "/images/slider2x3/1dovge.jpg",
    de: {
      title: "Braunes Pferd Portrait - Professionelle Pferdefotografie",
      description: "Eindrucksvolles Portrait eines braunen Pferdes mit schwarzem Zaumzeug vor dramatischem Himmel. Hochwertige Pferdefotografie für Reitbetriebe und Pferdebesitzer.",
      alt: "Braunes Pferd mit schwarzem Zaumzeug im Portrait vor bewölktem Himmel"
    },
    en: {
      title: "Brown Horse Portrait - Professional Horse Photography",
      description: "Impressive portrait of a brown horse with black bridle against dramatic sky. High-quality horse photography for equestrian facilities and horse owners.",
      alt: "Brown horse with black bridle in portrait against cloudy sky"
    }
  },
  {
    src: "/images/slider2x3/2dovge.jpg",
    de: {
      title: "Elegantes Pferd im Sonnenlicht - Pferdefotografie Deutschland",
      description: "Professionelles Pferdeportrait eines braunen Pferdes mit Zaumzeug in natürlicher Umgebung. Kunstvolle Pferdefotografie bei goldenem Licht.",
      alt: "Braunes Pferd mit Zaumzeug in natürlicher Landschaft bei warmem Sonnenlicht"
    },
    en: {
      title: "Elegant Horse in Sunlight - Horse Photography Germany",
      description: "Professional horse portrait of a brown horse with bridle in natural environment. Artistic horse photography in golden light.",
      alt: "Brown horse with bridle in natural landscape with warm sunlight"
    }
  },
  {
    src: "/images/slider2x3/3dovge.jpg",
    de: {
      title: "Weißes Pferd Portrait - Kunstvolle Pferdefotografie",
      description: "Majestätisches Portrait eines weißen Pferdes mit aufmerksamen Ohren. Professionelle Tierfotografie für Reitställe und Pferdeliebhaber.",
      alt: "Weißes Pferd im Seitenprofil mit aufgestellten Ohren vor natürlichem Hintergrund"
    },
    en: {
      title: "White Horse Portrait - Artistic Horse Photography",
      description: "Majestic portrait of a white horse with alert ears. Professional equine photography for riding stables and horse enthusiasts.",
      alt: "White horse in side profile with erect ears against natural background"
    }
  },
  {
    src: "/images/slider2x3/4dovge.jpg",
    de: {
      title: "Junges Fohlen Portrait - Emotionale Pferdefotografie",
      description: "Nahaufnahme eines jungen Fohlens im goldenen Abendlicht. Emotionale Tierfotografie die die Schönheit und Sanftmut der Pferde einfängt.",
      alt: "Junges braunes Fohlen im Profil mit goldenem Abendlicht"
    },
    en: {
      title: "Young Foal Portrait - Emotional Horse Photography",
      description: "Close-up of a young foal in golden evening light. Emotional equine photography capturing the beauty and gentleness of horses.",
      alt: "Young brown foal in profile with golden evening light"
    }
  },
  {
    src: "/images/slider2x3/5dovge.jpg",
    de: {
      title: "Weißes Pferd in Schwarz-Weiß - Künstlerische Pferdefotografie",
      description: "Künstlerisches Schwarz-Weiß Portrait eines weißen Pferdes mit Zaumzeug. Zeitlose Pferdefotografie für anspruchsvolle Pferdebesitzer.",
      alt: "Weißes Pferd mit Zaumzeug in künstlerischer Schwarz-Weiß Aufnahme"
    },
    en: {
      title: "White Horse in Black and White - Artistic Horse Photography",
      description: "Artistic black and white portrait of a white horse with bridle. Timeless horse photography for discerning horse owners.",
      alt: "White horse with bridle in artistic black and white photograph"
    }
  }
];

// Complete bilingual metadata for cute portfolio
export const portfolioNiedlichBilingual: BilingualImageMetadata[] = [
  {
    src: "/images/portfolio/niedlich/niedlichKategorie.jpg",
    de: {
      title: "Niedliches Fohlen Portrait - Süße Pferdefotografie junger Pferde",
      description: "Bezauberndes Portrait eines jungen Fuchs Fohlens mit flauschigem Fell. Niedliche Pferdefotografie zeigt die Unschuld und natürliche Schönheit junger Pferde in warmer Atmosphäre.",
      alt: "Süßes Fuchs Fohlen mit flauschigem Fell im Portrait"
    },
    en: {
      title: "Cute Foal Portrait - Sweet Horse Photography of Young Horses",
      description: "Charming portrait of a young chestnut foal with fluffy coat. Cute horse photography showcases the innocence and natural beauty of young horses in warm atmosphere.",
      alt: "Sweet chestnut foal with fluffy coat in portrait"
    }
  },
  {
    src: "/images/portfolio/niedlich/_V4A9583.jpg",
    de: {
      title: "Schecke Fohlen in der Weide - Niedliche Pferdefotografie",
      description: "Entzückendes Schecke Fohlen mit charakteristischer Fuchs-Weiß Färbung steht in natürlicher Weide. Niedliche Pferdefotografie dokumentiert die ersten Schritte junger Pferde.",
      alt: "Fuchs-weißes Schecke Fohlen steht in der Weide"
    },
    en: {
      title: "Pinto Foal in Pasture - Cute Horse Photography",
      description: "Adorable pinto foal with characteristic chestnut-white coloring standing in natural pasture. Cute horse photography documents the first steps of young horses.",
      alt: "Chestnut-white pinto foal standing in pasture"
    }
  },
  {
    src: "/images/portfolio/niedlich/_V4A9586.jpg",
    de: {
      title: "Neugieriges Fohlen - Süße Momente in der Pferdefotografie",
      description: "Neugieriges Fuchs-Schecke Fohlen blickt aufmerksam in die Kamera. Süße Pferdefotografie zeigt die natürliche Neugier und den Charme junger Pferde in ihrer Entwicklung.",
      alt: "Neugieriges Schecke Fohlen blickt aufmerksam zur Kamera"
    },
    en: {
      title: "Curious Foal - Sweet Moments in Horse Photography",
      description: "Curious chestnut-pinto foal looking attentively at the camera. Sweet horse photography shows the natural curiosity and charm of young horses in their development.",
      alt: "Curious pinto foal looking attentively at camera"
    }
  },
  {
    src: "/images/portfolio/niedlich/_V4A9594-Edit.jpg",
    de: {
      title: "Grasendes Fohlen - Natürliche Momente in der Pferdefotografie",
      description: "Natürliche Aufnahme eines jungen Fohlens beim Grasen im warmen Licht. Authentische Pferdefotografie zeigt alltägliche Momente und natürliches Verhalten junger Pferde.",
      alt: "Junges Fohlen grast friedlich auf der Weide"
    },
    en: {
      title: "Grazing Foal - Natural Moments in Horse Photography",
      description: "Natural capture of a young foal grazing in warm light. Authentic horse photography shows everyday moments and natural behavior of young horses.",
      alt: "Young foal grazing peacefully in pasture"
    }
  }
];

// Example function to migrate existing metadata
export function migrateToBlingual(existingMetadata: { src: string; title: string; description: string; alt: string }[]): BilingualImageMetadata[] {
  return existingMetadata.map(item => ({
    src: item.src,
    de: {
      title: item.title,
      description: item.description,
      alt: item.alt
    },
    en: {
      // These would need proper translation
      title: item.title, // Placeholder - needs translation
      description: item.description, // Placeholder - needs translation
      alt: item.alt // Placeholder - needs translation
    }
  }));
}