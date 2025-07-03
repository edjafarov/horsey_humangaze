# Internationalization (i18n) Implementation Plan

## Overview
This plan outlines the implementation of multilingual support (German/English) for Human Gaze Photography website using Next.js 15 App Router. German (de) will be the default language, with automatic detection for English preference.

## Architecture Decision

### Recommended Approach: next-intl with App Router
- **Why**: Best integration with Next.js 15 App Router, server components support, built-in routing
- **Features**: Automatic locale detection, SEO-friendly URLs, server/client component support
- **URL Structure**: 
  - German (default): `humangaze.com/portfolio`
  - English: `humangaze.com/en/portfolio`

## Implementation Steps

### Phase 1: Core i18n Setup 🔴

- [ ] **Install next-intl**
  ```bash
  npm install next-intl
  ```

- [ ] **Create i18n configuration structure**
  ```
  /messages/
    de.json
    en.json
  /app/
    [locale]/
      layout.tsx
      page.tsx
      portfolio/
      preis/
      (... other pages)
    i18n.ts
  middleware.ts
  ```

- [ ] **Configure middleware for locale detection**
  - Detect browser language preference
  - Check for saved language preference (cookie)
  - Default to German (de)
  - Redirect to appropriate locale

- [ ] **Update next.config.ts** for i18n support

### Phase 2: Translation Files 🔴

- [ ] **Create translation JSON files**

#### `/messages/de.json`:
```json
{
  "metadata": {
    "title": "Human Gaze Photography - Professionelle Pferdefotografie",
    "description": "Kunstvolle Pferdefotografie in Deutschland...",
    "keywords": "Pferdefotografie, Pferde Portrait..."
  },
  "navigation": {
    "portfolio": "Portfolio",
    "price": "Preis",
    "ridingStables": "Reitbetriebe",
    "contact": "Kontakt",
    "imprint": "Impressum",
    "privacy": "Datenschutzerklärung"
  },
  "header": {
    "subtitle": "Horses",
    "toggleMenu": "Menü umschalten",
    "loading": "Laden..."
  },
  "imageSlider": {
    "loading": "Laden...",
    "noImages": "Keine Bilder gefunden...",
    "previousImage": "Vorheriges Bild",
    "nextImage": "Nächstes Bild",
    "imageGallery": "Bildergalerie"
  },
  "portfolio": {
    "albums": {
      "dramatic": "dramatisch",
      "idyllic": "idyllisch",
      "cute": "niedlich",
      "wedding": "hochzeit"
    }
  },
  "pages": {
    "price": {
      "title": "Preis",
      "content": "Demnächst..."
    },
    "ridingStables": {
      "title": "Reitbetriebe",
      "content": "Demnächst..."
    },
    "contact": {
      "title": "Kontakt",
      "content": "Demnächst..."
    },
    "imprint": {
      "title": "Impressum",
      "content": "Demnächst..."
    },
    "privacy": {
      "title": "Datenschutzerklärung",
      "content": "Demnächst..."
    }
  }
}
```

#### `/messages/en.json`:
```json
{
  "metadata": {
    "title": "Human Gaze Photography - Professional Horse Photography",
    "description": "Artistic horse photography in Germany...",
    "keywords": "horse photography, horse portraits..."
  },
  "navigation": {
    "portfolio": "Portfolio",
    "price": "Pricing",
    "ridingStables": "Riding Stables",
    "contact": "Contact",
    "imprint": "Imprint",
    "privacy": "Privacy Policy"
  },
  "header": {
    "subtitle": "Horses",
    "toggleMenu": "Toggle menu",
    "loading": "Loading..."
  },
  "imageSlider": {
    "loading": "Loading...",
    "noImages": "No images found...",
    "previousImage": "Previous image",
    "nextImage": "Next image",
    "imageGallery": "Image gallery"
  },
  "portfolio": {
    "albums": {
      "dramatic": "dramatic",
      "idyllic": "idyllic",
      "cute": "cute",
      "wedding": "wedding"
    }
  },
  "pages": {
    "price": {
      "title": "Pricing",
      "content": "Coming soon..."
    },
    "ridingStables": {
      "title": "Riding Stables",
      "content": "Coming soon..."
    },
    "contact": {
      "title": "Contact",
      "content": "Coming soon..."
    },
    "imprint": {
      "title": "Imprint",
      "content": "Coming soon..."
    },
    "privacy": {
      "title": "Privacy Policy",
      "content": "Coming soon..."
    }
  }
}
```

### Phase 3: Route Structure Migration 🟡

- [ ] **Move all pages under [locale] folder**
  - Create `/app/[locale]/` directory
  - Move all existing pages into locale folder
  - Update imports and paths

- [ ] **Create locale-aware routing**
  - German routes: `/portfolio`, `/preis`, `/kontakt`
  - English routes: `/en/portfolio`, `/en/pricing`, `/en/contact`
  - Implement redirects for English route names

- [ ] **Update internal links** to use locale-aware navigation

### Phase 4: Component Updates 🟡

- [ ] **Convert components to use translations**
  - Use `useTranslations` hook in client components
  - Use `getTranslations` in server components
  - Replace all hardcoded text with translation keys

- [ ] **Create language switcher component**
  - Flag icons or text-based switcher
  - Save preference in cookie
  - Smooth transition between languages

- [ ] **Update image metadata structure**
  - Create separate metadata files for each language
  - Or extend existing structure with language variants

### Phase 5: SEO Enhancements for Multilingual 🟡

- [ ] **Implement hreflang tags**
  ```tsx
  <link rel="alternate" hreflang="de" href="https://humangaze.com/" />
  <link rel="alternate" hreflang="en" href="https://humangaze.com/en/" />
  <link rel="alternate" hreflang="x-default" href="https://humangaze.com/" />
  ```

- [ ] **Update sitemap.xml generation**
  - Include all language variants
  - Use hreflang annotations in sitemap

- [ ] **Locale-specific metadata**
  - Different OG images for each language
  - Translated meta descriptions
  - Language-specific keywords

- [ ] **Update structured data**
  - Add language property to JSON-LD
  - Translate content in structured data

### Phase 6: Image Metadata Translation 🟢

- [ ] **Create bilingual image metadata structure**
  ```typescript
  export const imageMetadata = {
    'image1.jpg': {
      de: {
        title: "Braunes Pferd Portrait...",
        description: "Professionelle Aufnahme...",
        alt: "Braunes Pferd..."
      },
      en: {
        title: "Brown Horse Portrait...",
        description: "Professional capture...",
        alt: "Brown horse..."
      }
    }
  }
  ```

- [ ] **Translate all 300+ image metadata entries**
  - Maintain SEO optimization in both languages
  - Keep keyword density appropriate for each language

### Phase 7: Testing & Optimization 🟢

- [ ] **Test language detection**
  - Browser language preferences
  - Manual language switching
  - Cookie persistence

- [ ] **Validate SEO implementation**
  - Check hreflang implementation
  - Verify locale-specific URLs
  - Test structured data in both languages

- [ ] **Performance testing**
  - Bundle size impact
  - Loading performance
  - Translation file optimization

## Technical Implementation Details

### Middleware Configuration
```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localeDetection: true
});

export const config = {
  matcher: ['/', '/(de|en)/:path*']
};
```

### Updated Folder Structure
```
/app/
  [locale]/
    layout.tsx (with locale-specific metadata)
    page.tsx
    portfolio/
      page.tsx
    pricing/ (English)
    preis/ (German redirect)
    riding-stables/ (English)
    reitbetriebe/ (German redirect)
    contact/ (English)
    kontakt/ (German redirect)
    imprint/ (English)
    impressum/ (German redirect)
    privacy-policy/ (English)
    datenschutzerklaerung/ (German redirect)
  components/
    LanguageSwitcher.tsx
    (other components)
```

### Route Redirect Strategy
- Keep German URLs unchanged for SEO
- Add English-friendly URLs for English version
- Implement redirects to handle route variations

## Expected Benefits

1. **Market Expansion**: Access to English-speaking horse owners in Germany
2. **International Reach**: Potential for EU-wide clientele
3. **SEO Benefits**: 
   - Doubled content for search engines
   - Language-specific keywords
   - Better user experience = better rankings
4. **User Experience**: Native language preference

## Resource Requirements

- **Development Time**: 40-50 hours
- **Translation**: Professional translation service recommended (5-10 hours)
- **Testing**: 5-10 hours across browsers/devices
- **Ongoing**: Maintain translations for new content

## Success Metrics

- Language switch usage (>20% English usage expected)
- Bounce rate reduction for English visitors
- International traffic increase (+30% within 6 months)
- Contact form submissions from English speakers

---

*Note: This plan integrates with the SEO optimization plan. Implement i18n first, then apply SEO enhancements to both language versions.*