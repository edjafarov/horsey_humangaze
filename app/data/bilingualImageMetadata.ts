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
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9154.jpg",
    de: {
      title: "Dunkles Pferd mit weißer Blesse - Ausdrucksstarke Pferdefotografie",
      description: "Beeindruckendes Portrait eines dunklen Pferdes mit markanter weißer Blesse. Kunstvolle Pferdefotografie zeigt Charakterköpfe mit natürlichem Licht und perfekter Schärfe für ausdrucksstarke Tierportraits.",
      alt: "Dunkles Pferd mit weißer Blesse im Portrait"
    },
    en: {
      title: "Dark Horse with White Blaze - Expressive Horse Photography",
      description: "Impressive portrait of a dark horse with distinctive white blaze. Artistic horse photography showcases character heads with natural light and perfect sharpness for expressive animal portraits.",
      alt: "Dark horse with white blaze in portrait"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9140.jpg",
    de: {
      title: "Braunes Pferd im warmen Licht - Natürliche Pferdefotografie",
      description: "Natürliches Portrait eines braunen Pferdes in warmem Nachmittagslicht. Professionelle Tierfotografie nutzt goldene Stunde für atmosphärische und emotionale Pferdebilder.",
      alt: "Braunes Pferd im warmen Nachmittagslicht"
    },
    en: {
      title: "Brown Horse in Warm Light - Natural Horse Photography",
      description: "Natural portrait of a brown horse in warm afternoon light. Professional animal photography uses golden hour for atmospheric and emotional horse images.",
      alt: "Brown horse in warm afternoon light"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9143.jpg",
    de: {
      title: "Pferdeportrait in Seitenansicht - Klassische Pferdefotografie",
      description: "Klassisches Pferdeportrait in perfekter Seitenansicht. Professionelle Pferdefotografie zeigt edle Proportionen und natürliche Schönheit der Pferde in zeitloser Darstellung.",
      alt: "Pferd in klassischer Seitenansicht"
    },
    en: {
      title: "Horse Portrait in Side View - Classic Horse Photography",
      description: "Classic horse portrait in perfect side view. Professional horse photography shows noble proportions and natural beauty of horses in timeless representation.",
      alt: "Horse in classic side view"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9169-Edit.jpg",
    de: {
      title: "Verträumtes Pferdeportrait - Emotionale Tierfotografie",
      description: "Verträumtes und emotionales Pferdeportrait mit sanftem Ausdruck. Einfühlsame Pferdefotografie zeigt die sensible Seite der Pferde in harmonischer Bildkomposition.",
      alt: "Pferd mit verträumtem sanften Ausdruck"
    },
    en: {
      title: "Dreamy Horse Portrait - Emotional Animal Photography",
      description: "Dreamy and emotional horse portrait with gentle expression. Sensitive horse photography shows the sensitive side of horses in harmonious composition.",
      alt: "Horse with dreamy gentle expression"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9182.jpg",
    de: {
      title: "Pferd im Gegenlicht - Atmosphärische Pferdefotografie",
      description: "Stimmungsvolles Pferdeportrait im magischen Gegenlicht. Kreative Pferdefotografie nutzt natürliche Lichteffekte für besonders atmosphärische und künstlerische Aufnahmen.",
      alt: "Pferd im stimmungsvollen Gegenlicht"
    },
    en: {
      title: "Horse in Backlight - Atmospheric Horse Photography",
      description: "Atmospheric horse portrait in magical backlight. Creative horse photography uses natural light effects for particularly atmospheric and artistic shots.",
      alt: "Horse in atmospheric backlight"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9190.jpg",
    de: {
      title: "Aufmerksames Pferd - Lebendige Pferdefotografie",
      description: "Lebendiges Portrait eines aufmerksamen Pferdes mit gespitzten Ohren. Dynamische Pferdefotografie fängt wache Momente und natürliche Neugier der Tiere ein.",
      alt: "Aufmerksames Pferd mit gespitzten Ohren"
    },
    en: {
      title: "Alert Horse - Vivid Horse Photography",
      description: "Vivid portrait of an alert horse with pricked ears. Dynamic horse photography captures awake moments and natural curiosity of the animals.",
      alt: "Alert horse with pricked ears"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9196-Edit.jpg",
    de: {
      title: "Pferd in weicher Beleuchtung - Sanfte Pferdefotografie",
      description: "Sanftes Pferdeportrait in weicher, natürlicher Beleuchtung. Harmonische Pferdefotografie betont die friedliche und ruhige Ausstrahlung der Tiere.",
      alt: "Pferd in weicher natürlicher Beleuchtung"
    },
    en: {
      title: "Horse in Soft Lighting - Gentle Horse Photography",
      description: "Gentle horse portrait in soft, natural lighting. Harmonious horse photography emphasizes the peaceful and calm charisma of the animals.",
      alt: "Horse in soft natural lighting"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9220.jpg",
    de: {
      title: "Pferd auf der Weide - Natürliche Umgebung Pferdefotografie",
      description: "Idyllische Aufnahme eines Pferdes in seiner natürlichen Weideumgebung. Authentische Pferdefotografie zeigt Tiere in ihrem gewohnten Lebensraum.",
      alt: "Pferd in natürlicher Weideumgebung"
    },
    en: {
      title: "Horse in Pasture - Natural Environment Horse Photography",
      description: "Idyllic capture of a horse in its natural pasture environment. Authentic horse photography shows animals in their familiar habitat.",
      alt: "Horse in natural pasture environment"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9256.jpg",
    de: {
      title: "Entspanntes Pferd - Ruhige Momente in der Pferdefotografie",
      description: "Friedliches Portrait eines entspannten Pferdes in ruhiger Atmosphäre. Meditative Pferdefotografie zeigt die gelassene Seite der majestätischen Tiere.",
      alt: "Entspanntes Pferd in ruhiger Atmosphäre"
    },
    en: {
      title: "Relaxed Horse - Calm Moments in Horse Photography",
      description: "Peaceful portrait of a relaxed horse in calm atmosphere. Meditative horse photography shows the serene side of the majestic animals.",
      alt: "Relaxed horse in calm atmosphere"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9283-Edit.jpg",
    de: {
      title: "Pferd im Abendlicht - Goldene Stunde Pferdefotografie",
      description: "Romantisches Pferdeportrait im warmen Abendlicht der goldenen Stunde. Stimmungsvolle Pferdefotografie nutzt das besondere Licht für emotionale Aufnahmen.",
      alt: "Pferd im warmen goldenen Abendlicht"
    },
    en: {
      title: "Horse in Evening Light - Golden Hour Horse Photography",
      description: "Romantic horse portrait in warm evening light of golden hour. Atmospheric horse photography uses the special light for emotional captures.",
      alt: "Horse in warm golden evening light"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9290.jpg",
    de: {
      title: "Nahaufnahme Pferdekopf - Detailreiche Pferdefotografie",
      description: "Eindrucksvolle Nahaufnahme eines Pferdekopfes mit feinen Details. Präzise Pferdefotografie zeigt Ausdruck und Charakter in beeindruckender Schärfe.",
      alt: "Detailreiche Nahaufnahme eines Pferdekopfes"
    },
    en: {
      title: "Horse Head Close-up - Detailed Horse Photography",
      description: "Impressive close-up of a horse head with fine details. Precise horse photography shows expression and character in impressive sharpness.",
      alt: "Detailed close-up of a horse head"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9305.jpg",
    de: {
      title: "Pferd mit Halfter - Klassisches Pferdeportrait",
      description: "Klassisches Portrait eines Pferdes mit elegantem Halfter. Traditionelle Pferdefotografie in zeitgemäßer Umsetzung für anspruchsvolle Pferdebesitzer.",
      alt: "Pferd mit elegantem Halfter im Portrait"
    },
    en: {
      title: "Horse with Halter - Classic Horse Portrait",
      description: "Classic portrait of a horse with elegant halter. Traditional horse photography in contemporary implementation for discerning horse owners.",
      alt: "Horse with elegant halter in portrait"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9526.jpg",
    de: {
      title: "Pferd in Bewegung - Dynamische Pferdefotografie",
      description: "Dynamische Aufnahme eines Pferdes in natürlicher Bewegung. Lebendige Pferdefotografie fängt Eleganz und Kraft der Tiere in Aktion ein.",
      alt: "Pferd in eleganter natürlicher Bewegung"
    },
    en: {
      title: "Horse in Motion - Dynamic Horse Photography",
      description: "Dynamic capture of a horse in natural movement. Vivid horse photography captures elegance and power of the animals in action.",
      alt: "Horse in elegant natural movement"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9552.jpg",
    de: {
      title: "Pferd und Natur - Harmonische Landschaftsfotografie",
      description: "Harmonische Verbindung von Pferd und Naturlandschaft. Ganzheitliche Pferdefotografie zeigt Tiere als Teil ihrer natürlichen Umgebung.",
      alt: "Pferd harmonisch in Naturlandschaft integriert"
    },
    en: {
      title: "Horse and Nature - Harmonious Landscape Photography",
      description: "Harmonious connection of horse and natural landscape. Holistic horse photography shows animals as part of their natural environment.",
      alt: "Horse harmoniously integrated in natural landscape"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9614-Edit.jpg",
    de: {
      title: "Vertrautes Pferdeportrait - Intime Tierfotografie",
      description: "Intimes und vertrautes Pferdeportrait mit sanftem Blick. Einfühlsame Pferdefotografie zeigt die emotionale Verbindung zwischen Mensch und Tier.",
      alt: "Pferd mit vertrautem sanften Blick"
    },
    en: {
      title: "Intimate Horse Portrait - Close Animal Photography",
      description: "Intimate and familiar horse portrait with gentle gaze. Sensitive horse photography shows the emotional connection between human and animal.",
      alt: "Horse with trusting gentle gaze"
    }
  },
  {
    src: "/images/portfolio/idyllisch/_V4A9627.jpg",
    de: {
      title: "Pferd im Morgentau - Frische Naturfotografie",
      description: "Frische Morgenaufnahme eines Pferdes im taufrischen Gras. Natürliche Pferdefotografie nutzt die besondere Atmosphäre der frühen Stunden.",
      alt: "Pferd im morgendlichen Tau auf der Weide"
    },
    en: {
      title: "Horse in Morning Dew - Fresh Nature Photography",
      description: "Fresh morning capture of a horse in dew-fresh grass. Natural horse photography uses the special atmosphere of early hours.",
      alt: "Horse in morning dew on pasture"
    }
  }
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

// Complete bilingual metadata for wedding portfolio
export const portfolioHochzeitBilingual: BilingualImageMetadata[] = [
  {
    src: "/images/portfolio/hochzeit/Hochzeit1.jpg",
    de: {
      title: "Braut mit Pferd - Romantische Hochzeits-Pferdefotografie",
      description: "Romantische Hochzeitsaufnahme einer Braut im weißen Kleid mit elegantem dunklen Pferd. Hochzeits-Pferdefotografie schafft unvergessliche Momente für besondere Anlässe.",
      alt: "Braut im weißen Hochzeitskleid mit dunklem Pferd"
    },
    en: {
      title: "Bride with Horse - Romantic Wedding Horse Photography",
      description: "Romantic wedding shot of a bride in white dress with elegant dark horse. Wedding horse photography creates unforgettable moments for special occasions.",
      alt: "Bride in white wedding dress with dark horse"
    }
  },
  {
    src: "/images/portfolio/hochzeit/_V4A0026-Edit.jpg",
    de: {
      title: "Braut Portrait mit Pferd - Elegante Hochzeits-Pferdefotografie",
      description: "Elegantes Brautportrait mit prachtvollem dunklen Pferd vor dramatischem Himmel. Professionelle Hochzeits-Pferdefotografie für unvergessliche Erinnerungen an den besonderen Tag.",
      alt: "Junge Braut in weißem Kleid posiert mit dunklem Pferd"
    },
    en: {
      title: "Bride Portrait with Horse - Elegant Wedding Horse Photography",
      description: "Elegant bridal portrait with magnificent dark horse against dramatic sky. Professional wedding horse photography for unforgettable memories of the special day.",
      alt: "Young bride in white dress posing with dark horse"
    }
  },
  {
    src: "/images/portfolio/hochzeit/_V4A9805.jpg",
    de: {
      title: "Künstlerische Hochzeitskomposition unter Pferd - Kreative Pferdefotografie",
      description: "Kreative und künstlerische Hochzeitskomposition mit Brautpaar unter dem majestätischen Pferd. Einzigartige Hochzeits-Pferdefotografie mit innovativer Bildgestaltung.",
      alt: "Brautpaar in kreativer Pose unter dem Bauch des Pferdes"
    },
    en: {
      title: "Artistic Wedding Composition Under Horse - Creative Horse Photography",
      description: "Creative and artistic wedding composition with couple under the majestic horse. Unique wedding horse photography with innovative image composition.",
      alt: "Wedding couple in creative pose under horse's belly"
    }
  },
  {
    src: "/images/portfolio/hochzeit/_V4A9778-Edit.jpg",
    de: {
      title: "Inniger Moment Brautpaar mit Pferd - Emotionale Hochzeitsfotografie",
      description: "Innige Hochzeitsszene mit Brautpaar in romantischem Moment, während ein majestätisches Pferd Wache hält. Emotionale Hochzeits-Pferdefotografie dokumentiert besondere Augenblicke.",
      alt: "Brautpaar in innigem Moment mit Pferd im Hintergrund"
    },
    en: {
      title: "Intimate Moment Wedding Couple with Horse - Emotional Wedding Photography",
      description: "Intimate wedding scene with couple in romantic moment while a majestic horse stands watch. Emotional wedding horse photography documents special moments.",
      alt: "Wedding couple in intimate moment with horse in background"
    }
  },
  {
    src: "/images/portfolio/hochzeit/_V4A9782.jpg",
    de: {
      title: "Brautpaar Picknick mit Pferd - Natürliche Hochzeitsfotografie",
      description: "Natürliche Hochzeitsszene mit entspanntem Brautpaar und Pferd in ländlicher Idylle. Authentische Hochzeits-Pferdefotografie zeigt ungezwungene Momente der Liebe.",
      alt: "Brautpaar sitzt entspannt mit Pferd auf der Wiese"
    },
    en: {
      title: "Wedding Couple Picnic with Horse - Natural Wedding Photography",
      description: "Natural wedding scene with relaxed couple and horse in rural idyll. Authentic wedding horse photography shows casual moments of love.",
      alt: "Wedding couple sitting relaxed with horse on meadow"
    }
  },
  {
    src: "/images/portfolio/hochzeit/_V4A9785.jpg",
    de: {
      title: "Romantische Umarmung mit Pferd - Intime Hochzeitsfotografie",
      description: "Romantische Hochzeitsaufnahme mit eng umschlungenem Brautpaar und neugierigem Pferd. Intime Hochzeits-Pferdefotografie schafft emotionale und unvergessliche Bilder.",
      alt: "Brautpaar umarmt sich innig mit neugierigem Pferd"
    },
    en: {
      title: "Romantic Embrace with Horse - Intimate Wedding Photography",
      description: "Romantic wedding capture with closely embraced couple and curious horse. Intimate wedding horse photography creates emotional and unforgettable images.",
      alt: "Wedding couple embracing intimately with curious horse"
    }
  },
  {
    src: "/images/portfolio/hochzeit/_V4A9776-Edit-Edit.jpg",
    de: {
      title: "Brautpaar mit Pferd im Grünen - Romantische Hochzeitsfotografie",
      description: "Romantische Hochzeitsszene mit Brautpaar und elegantem Pferd in natürlicher Umgebung. Einzigartige Hochzeits-Pferdefotografie für unvergessliche Erinnerungen an den Hochzeitstag.",
      alt: "Brautpaar sitzt romantisch mit dunklem Pferd auf Wiese"
    },
    en: {
      title: "Wedding Couple with Horse in Greenery - Romantic Wedding Photography",
      description: "Romantic wedding scene with couple and elegant horse in natural surroundings. Unique wedding horse photography for unforgettable memories of the wedding day.",
      alt: "Wedding couple sitting romantically with dark horse on meadow"
    }
  },
  {
    src: "/images/portfolio/hochzeit/_V4A9830-Edit.jpg",
    de: {
      title: "Braut mit wehendem Schleier und Pferd - Romantische Hochzeitsfotografie",
      description: "Romantische Hochzeitsaufnahme einer Braut mit wehendem Schleier beim zärtlichen Moment mit dunklem Pferd. Poetische Hochzeits-Pferdefotografie voller Emotion und Eleganz.",
      alt: "Braut mit wehendem Schleier umarmt dunkles Pferd"
    },
    en: {
      title: "Bride with Flowing Veil and Horse - Romantic Wedding Photography",
      description: "Romantic wedding capture of a bride with flowing veil in tender moment with dark horse. Poetic wedding horse photography full of emotion and elegance.",
      alt: "Bride with flowing veil embracing dark horse"
    }
  },
  {
    src: "/images/portfolio/hochzeit/_V4A9842-Edit.jpg",
    de: {
      title: "Zärtliche Berührung Braut und Pferd - Elegante Hochzeitsfotografie",
      description: "Elegante Hochzeitsaufnahme zeigt zärtliche Berührung zwischen Braut und majestätischem Pferd. Emotionale Hochzeits-Pferdefotografie für besondere Erinnerungen.",
      alt: "Braut in weißem Kleid berührt sanft das dunkle Pferd"
    },
    en: {
      title: "Gentle Touch Bride and Horse - Elegant Wedding Photography",
      description: "Elegant wedding capture shows gentle touch between bride and majestic horse. Emotional wedding horse photography for special memories.",
      alt: "Bride in white dress gently touching dark horse"
    }
  },
  {
    src: "/images/portfolio/hochzeit/_V4A9868-Edit.jpg",
    de: {
      title: "Magischer Hochzeitsmoment - Träumerische Pferdefotografie",
      description: "Träumerische Hochzeitsszene mit Brautpaar und Pferd in magischer Lichtstimmung. Romantische Hochzeits-Pferdefotografie kreiert unvergessliche Märchenmomente.",
      alt: "Brautpaar mit Pferd in märchenhafter Lichtstimmung"
    },
    en: {
      title: "Magical Wedding Moment - Dreamy Horse Photography",
      description: "Dreamy wedding scene with couple and horse in magical lighting. Romantic wedding horse photography creates unforgettable fairytale moments.",
      alt: "Wedding couple with horse in fairytale lighting"
    }
  }
];

// Complete bilingual metadata for dramatic portfolio
export const portfolioDramatischBilingual: BilingualImageMetadata[] = [
  {
    src: "/images/portfolio/dramatisch/drama1.jpg",
    de: {
      title: "Intensives Pferdeportrait - Kraftvolle Pferdefotografie in schwarz-weiß",
      description: "Kraftvolles schwarz-weiß Portrait eines majestätischen Pferdes mit intensivem Blick. Dramatische Pferdefotografie zeigt Stärke und Anmut in eindrucksvoller Bildsprache.",
      alt: "Majestätisches Pferd in dramatischem schwarz-weiß Portrait"
    },
    en: {
      title: "Intense Horse Portrait - Powerful Horse Photography in Black and White",
      description: "Powerful black and white portrait of a majestic horse with intense gaze. Dramatic horse photography shows strength and grace in impressive visual language.",
      alt: "Majestic horse in dramatic black and white portrait"
    }
  },
  {
    src: "/images/portfolio/dramatisch/_V4A9556-Edit-2.jpg",
    de: {
      title: "Pferd im Nebel mit Trense - Mystische Pferdefotografie",
      description: "Mystische Aufnahme eines Fuchs Pferdes mit Trense in nebligen Bedingungen. Dramatische Pferdefotografie schafft geheimnisvolle Atmosphäre durch natürliche Wetterbedingungen.",
      alt: "Fuchs Pferd mit Trense in mystischem Nebel"
    },
    en: {
      title: "Horse in Fog with Bridle - Mystical Horse Photography",
      description: "Mystical capture of a chestnut horse with bridle in foggy conditions. Dramatic horse photography creates mysterious atmosphere through natural weather conditions.",
      alt: "Chestnut horse with bridle in mystical fog"
    }
  },
  {
    src: "/images/portfolio/dramatisch/_V4A9610.jpg",
    de: {
      title: "Mensch-Pferd Bindung Schwarz-Weiß - Emotionale Pferdefotografie",
      description: "Berührende Schwarz-Weiß Aufnahme der emotionalen Verbindung zwischen Mensch und Pferd. Dramatische Pferdefotografie dokumentiert intime Momente des Vertrauens.",
      alt: "Schwarz-weiß Bild inniger Verbindung zwischen Frau und Pferd"
    },
    en: {
      title: "Human-Horse Bond Black and White - Emotional Horse Photography",
      description: "Touching black and white capture of the emotional connection between human and horse. Dramatic horse photography documents intimate moments of trust.",
      alt: "Black and white image of intimate connection between woman and horse"
    }
  },
  {
    src: "/images/portfolio/dramatisch/confina.sky-Editcopy-2.jpg",
    de: {
      title: "Fuchs unter dramatischem Himmel - Landschafts Pferdefotografie",
      description: "Majestätische Aufnahme eines Fuchs Pferdes unter dramatischem Himmel in weiter Landschaft. Beeindruckende Pferdefotografie verbindet Pferd und Natur zu einem Gesamtkunstwerk.",
      alt: "Fuchs Pferd steht unter dramatischem Himmel in Landschaft"
    },
    en: {
      title: "Chestnut Under Dramatic Sky - Landscape Horse Photography",
      description: "Majestic capture of a chestnut horse under dramatic sky in vast landscape. Impressive horse photography combines horse and nature into a complete work of art.",
      alt: "Chestnut horse standing under dramatic sky in landscape"
    }
  },
  {
    src: "/images/portfolio/dramatisch/_V4A9180.jpg",
    de: {
      title: "Fuchs Portrait in dramatischem Licht - Ausdrucksstarke Pferdefotografie",
      description: "Ausdrucksstarkes Portrait eines Fuchs Pferdes mit dramatischer Beleuchtung. Professionelle Pferdefotografie nutzt Licht und Schatten für intensive und emotionale Aufnahmen.",
      alt: "Fuchs Pferd Portrait mit dramatischem Licht und Schatten"
    },
    en: {
      title: "Chestnut Portrait in Dramatic Light - Expressive Horse Photography",
      description: "Expressive portrait of a chestnut horse with dramatic lighting. Professional horse photography uses light and shadow for intense and emotional captures.",
      alt: "Chestnut horse portrait with dramatic light and shadow"
    }
  }
];

// Combine all portfolio metadata
export const allPortfolioMetadataBilingual: BilingualImageMetadata[] = [
  ...portfolioIdyllischBilingual,
  ...portfolioNiedlichBilingual,
  ...portfolioDramatischBilingual,
  ...portfolioHochzeitBilingual,
];

// Generate JSON-LD structured data for SEO
export function getJsonLdData(locale: "de" | "en" = "de") {
  // Import dynamically to avoid circular dependency
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { generateSeoImageUrl } = require('@/app/utils/seoUrlGenerator');
  
  const allImages = [...allSliderImagesBilingual, ...allPortfolioMetadataBilingual];
  const localizedImages = getLocalizedMetadata(allImages, locale);

  const baseUrl = "https://equine.humangaze-photography.com";
  const localizedUrl = locale === "de" ? baseUrl : `${baseUrl}/en`;

  const localizedData = {
    de: {
      name: "Human Gaze Photography - Pferdefotografie Portfolio",
      description:
        "Professionelle Pferdefotografie in Deutschland. Kunstvolle Portraits von Pferden für Reitbetriebe und Pferdebesitzer. Spezialisiert auf idyllische, niedliche, dramatische und Hochzeitsfotografie mit Pferden.",
    },
    en: {
      name: "Human Gaze Photography - Horse Photography Portfolio",
      description:
        "Professional horse photography in Germany. Artistic portraits of horses for riding stables and horse owners. Specializing in idyllic, cute, dramatic and wedding photography with horses.",
    },
  };

  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: localizedData[locale].name,
    description: localizedData[locale].description,
    url: localizedUrl,
    inLanguage: locale,
    image: localizedImages.map((img, index) => {
      const seoUrl = generateSeoImageUrl(img.src, img.title, locale);
      return {
        "@type": "ImageObject",
        name: img.title,
        caption: img.description,
        contentUrl: `${baseUrl}${seoUrl}`,
        thumbnailUrl: `${baseUrl}${seoUrl}`,
        description: img.description,
        position: index + 1,
        inLanguage: locale,
      };
    }),
    numberOfItems: localizedImages.length,
    author: {
      "@type": "Person",
      name: "Human Gaze Photography",
      url: baseUrl,
    },
  };
}

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