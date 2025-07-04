export interface PageMetadata {
  title: {
    de: string;
    en: string;
  };
  description: {
    de: string;
    en: string;
  };
  keywords?: {
    de: string;
    en: string;
  };
}

export const pageMetadata: Record<string, PageMetadata> = {
  '/': {
    title: {
      de: 'Human Gaze Photography - Professionelle Pferdefotografie',
      en: 'Human Gaze Photography - Professional Horse Photography'
    },
    description: {
      de: 'Entdecken Sie kunstvolle Pferdefotografie mit Leidenschaft. Spezialisiert auf emotionale Portraits von Pferden und Reitern in ganz Deutschland. Jetzt Fotoshooting buchen!',
      en: 'Discover artistic horse photography with passion. Specialized in emotional portraits of horses and riders throughout Germany. Book your photoshoot now!'
    }
  },
  '/portfolio': {
    title: {
      de: 'Pferdefotografie Portfolio | Human Gaze Photography',
      en: 'Horse Photography Portfolio | Human Gaze Photography'
    },
    description: {
      de: 'Bewundern Sie unser Portfolio professioneller Pferdefotografie: Dramatische, idyllische und emotionale Aufnahmen. Lassen Sie sich für Ihr eigenes Shooting inspirieren.',
      en: 'Explore our portfolio of professional horse photography: Dramatic, idyllic and emotional captures. Get inspired for your own photoshoot.'
    }
  },
  '/portfolio/dramatisch': {
    title: {
      de: 'Dramatische Pferdefotografie | Human Gaze Photography',
      en: 'Dramatic Horse Photography | Human Gaze Photography'
    },
    description: {
      de: 'Kraftvolle und dramatische Pferdeportraits mit beeindruckender Lichtstimmung. Entdecken Sie die majestätische Seite der Pferde in unserer Galerie.',
      en: 'Powerful and dramatic horse portraits with impressive lighting. Discover the majestic side of horses in our gallery.'
    }
  },
  '/portfolio/idyllisch': {
    title: {
      de: 'Idyllische Pferdefotografie | Human Gaze Photography',
      en: 'Idyllic Horse Photography | Human Gaze Photography'
    },
    description: {
      de: 'Friedliche und harmonische Pferdeaufnahmen in natürlicher Umgebung. Erleben Sie die ruhige Schönheit der Pferde in idyllischen Landschaften.',
      en: 'Peaceful and harmonious horse photography in natural settings. Experience the serene beauty of horses in idyllic landscapes.'
    }
  },
  '/portfolio/niedlich': {
    title: {
      de: 'Niedliche Pferdefotografie | Human Gaze Photography',
      en: 'Cute Horse Photography | Human Gaze Photography'
    },
    description: {
      de: 'Herzerwärmende Momente mit Pferden und Ponys eingefangen. Entdecken Sie die verspielte und liebevolle Seite unserer vierbeinigen Freunde.',
      en: 'Heartwarming moments with horses and ponies captured. Discover the playful and loving side of our four-legged friends.'
    }
  },
  '/portfolio/hochzeit': {
    title: {
      de: 'Hochzeit mit Pferden Fotografie | Human Gaze Photography',
      en: 'Wedding Horse Photography | Human Gaze Photography'
    },
    description: {
      de: 'Romantische Hochzeitsfotografie mit Pferden. Verewigen Sie Ihren besonderen Tag mit eleganten Pferdeaufnahmen für unvergessliche Erinnerungen.',
      en: 'Romantic wedding photography with horses. Capture your special day with elegant equine photography for unforgettable memories.'
    }
  },
  '/preis': {
    title: {
      de: 'Preise für Pferdefotografie | Human Gaze Photography',
      en: 'Horse Photography Pricing | Human Gaze Photography'
    },
    description: {
      de: 'Transparente Preise für professionelle Pferdefotografie. Individuelle Pakete für Privatpersonen und Reitbetriebe. Jetzt unverbindlich anfragen!',
      en: 'Transparent pricing for professional horse photography. Individual packages for private clients and riding stables. Request a free quote now!'
    }
  },
  '/reitbetriebe': {
    title: {
      de: 'Fotografie für Reitbetriebe | Human Gaze Photography',
      en: 'Photography for Riding Stables | Human Gaze Photography'
    },
    description: {
      de: 'Professionelle Fotografie für Reitbetriebe und Reitschulen. Hochwertige Bilder für Marketing, Website und Social Media. Steigern Sie Ihre Sichtbarkeit!',
      en: 'Professional photography for riding stables and equestrian schools. High-quality images for marketing, website and social media. Boost your visibility!'
    }
  },
  '/kontakt': {
    title: {
      de: 'Kontakt - Pferdefotograf | Human Gaze Photography',
      en: 'Contact - Horse Photographer | Human Gaze Photography'
    },
    description: {
      de: 'Kontaktieren Sie uns für Ihr individuelles Pferdefotoshooting. Professionelle Beratung und maßgeschneiderte Fotografie-Lösungen in ganz Deutschland.',
      en: 'Contact us for your individual horse photoshoot. Professional consultation and tailored photography solutions throughout Germany.'
    }
  },
  '/impressum': {
    title: {
      de: 'Impressum | Human Gaze Photography',
      en: 'Imprint | Human Gaze Photography'
    },
    description: {
      de: 'Impressum von Human Gaze Photography - Professionelle Pferdefotografie. Rechtliche Informationen und Kontaktdaten.',
      en: 'Imprint of Human Gaze Photography - Professional horse photography. Legal information and contact details.'
    }
  },
  '/datenschutzerklaerung': {
    title: {
      de: 'Datenschutzerklärung | Human Gaze Photography',
      en: 'Privacy Policy | Human Gaze Photography'
    },
    description: {
      de: 'Datenschutzerklärung von Human Gaze Photography. Informationen zum Umgang mit Ihren personenbezogenen Daten.',
      en: 'Privacy policy of Human Gaze Photography. Information about the handling of your personal data.'
    }
  }
};