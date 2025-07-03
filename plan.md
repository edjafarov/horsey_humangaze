# SEO Optimization Plan for Human Gaze Photography (Multilingual)

## Overview
This plan outlines SEO improvements for the Human Gaze Photography website with multilingual support (DE/EN), prioritized by impact and implementation complexity. Current SEO score estimate: 65/100. Target: 90+/100.

**Important**: Implement i18n (see i18n-plan.md) BEFORE applying these SEO enhancements to ensure proper multilingual SEO from the start.

## High Priority (Critical for SEO) 🔴

### Technical SEO Essentials
- [ ] **Create multilingual sitemap.xml** - Essential for search engine crawling
  - Use next-sitemap package with i18n support
  - Include all static pages in both languages (de/en)
  - Add hreflang annotations in sitemap
  - Submit to Google Search Console for both language versions

- [ ] **Create robots.txt** - Guide search engine crawlers
  - Allow all crawlers
  - Reference sitemap location
  - Exclude any admin/private routes if applicable

- [ ] **Implement canonical URLs** - Prevent duplicate content issues
  - Add canonical URL to each page's metadata
  - Use absolute URLs
  - Consider www vs non-www preference

### Metadata Improvements
- [ ] **Add missing OpenGraph image**
  - Create a default OG image (1200x630px) showcasing best horse photography
  - Add og:image to layout metadata
  - Consider page-specific OG images for portfolio pages

- [ ] **Convert pages from client to server components**
  - Priority pages: kontakt, impressum, datenschutzerklaerung
  - Keep portfolio as client component due to interactivity
  - This enables page-specific metadata

- [ ] **Add page-specific metadata** for each route in both languages:
  - **Portfolio (DE)**: "Pferdefotografie Portfolio | Human Gaze Photography"
  - **Portfolio (EN)**: "Horse Photography Portfolio | Human Gaze Photography"
  - **Preis/Pricing (DE)**: "Preise für Pferdefotografie | Human Gaze Photography"
  - **Preis/Pricing (EN)**: "Horse Photography Pricing | Human Gaze Photography"
  - **Reitbetriebe (DE)**: "Fotografie für Reitbetriebe | Human Gaze Photography"
  - **Riding Stables (EN)**: "Photography for Riding Stables | Human Gaze Photography"
  - **Kontakt (DE)**: "Kontakt - Pferdefotograf | Human Gaze Photography"
  - **Contact (EN)**: "Contact - Horse Photographer | Human Gaze Photography"
  - Include unique descriptions for each page in both languages

## Medium Priority (Important for Rankings) 🟡

### Enhanced Metadata
- [ ] **Add Twitter Card metadata**
  - twitter:card = "summary_large_image"
  - twitter:title, twitter:description, twitter:image
  - Reuse OpenGraph data where applicable

- [ ] **Implement Organization schema** in layout
  - Business name, logo, contact information
  - Social media profiles
  - Service area (Germany/specific regions)

- [ ] **Add BreadcrumbList structured data**
  - Implement on all pages except home
  - Example: Home > Portfolio > [Category]

- [ ] **Add complete OpenGraph tags**
  - og:url (absolute URL for each page)
  - og:site_name = "Human Gaze Photography"
  - og:image:width and og:image:height

### Content Optimization
- [ ] **Create meta descriptions for each page** (150-160 characters)
  - Focus on unique value propositions
  - Include primary keywords naturally
  - Add call-to-action where appropriate

- [ ] **Optimize image filenames** for both languages
  - Use language-neutral descriptive names
  - Example: "warmblood-dressage-photography-01.jpg"
  - Include location when relevant
  - Rely on alt text and metadata for language-specific SEO

## Medium Priority (Multilingual Specific) 🟡

### Multilingual SEO Enhancements
- [ ] **Create language-specific OpenGraph images**
  - German version with German text overlay
  - English version with English text overlay
  - Proper og:locale tags for each language

- [ ] **Implement language-specific structured data**
  - Translate JSON-LD content for each language
  - Add inLanguage property to all structured data
  - Create bilingual ImageGallery schemas

- [ ] **Add language switcher with SEO considerations**
  - Visible language switcher in header
  - Preserve current page when switching languages
  - Use proper hreflang links in switcher

- [ ] **Configure Google Search Console for multilingual**
  - Set up separate properties for each language subdirectory
  - Configure international targeting
  - Monitor search performance by language

## Low Priority (Nice to Have) 🟢

### Advanced SEO Features
- [ ] **Add FAQ schema** for common questions
  - "Wie lange dauert ein Fotoshooting?"
  - "Welche Locations sind möglich?"
  - "Was kostet Pferdefotografie?"

- [ ] **Implement LocalBusiness schema**
  - Service areas in Germany
  - Business hours/availability
  - Payment methods accepted

- [ ] **Implement hreflang tags** for multilingual SEO (CRITICAL)
  - Add to all pages: `<link rel="alternate" hreflang="de" href="/de/page" />`
  - Add to all pages: `<link rel="alternate" hreflang="en" href="/en/page" />`
  - Add x-default: `<link rel="alternate" hreflang="x-default" href="/" />`
  - Implement bidirectional hreflang (each language points to all variants)

- [ ] **Create XML image sitemap**
  - Separate sitemap for portfolio images
  - Include image metadata (title, caption, geo_location)

### Performance & UX Improvements
- [ ] **Add loading="lazy" to non-critical images**
  - Already using Next/Image but verify implementation
  - Ensure priority images load immediately

- [ ] **Implement 404 error page** with SEO-friendly content
  - Custom design matching site theme
  - Include navigation options
  - Add helpful links

- [ ] **Add search functionality** with SEO-friendly URLs
  - /suche?q=warmblut for search results
  - Implement proper metadata for search pages

## Technical Implementation Notes

### Multilingual Sitemap Generation
```bash
npm install next-sitemap
```
Create `next-sitemap.config.js` with i18n support:
```javascript
module.exports = {
  siteUrl: 'https://humangaze.com',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://humangaze.com',
      hreflang: 'de',
    },
    {
      href: 'https://humangaze.com/en',
      hreflang: 'en',
    },
  ],
}
```

### Metadata Conversion Example
Convert from:
```tsx
'use client'
export default function KontaktPage() {...}
```

To:
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt - Pferdefotograf | Human Gaze Photography',
  description: 'Kontaktieren Sie Human Gaze Photography...',
}

export default function KontaktPage() {...}
```

### Monitoring & Validation
- [ ] Set up Google Search Console
- [ ] Validate structured data with Google's Rich Results Test
- [ ] Monitor Core Web Vitals
- [ ] Check mobile-friendliness
- [ ] Validate HTML/CSS with W3C validators

## Expected Impact (with Multilingual)
- **Search Visibility**: +60% within 3 months (both languages)
- **Organic Traffic**: +40% within 6 months (25% DE, 15% EN)
- **Local Rankings**: 
  - German: Top 3 for "Pferdefotografie [Stadt]"
  - English: Top 5 for "horse photography Germany"
- **Image Search**: Significant improvement in both Google.de and Google.com
- **International Reach**: Access to English-speaking market in EU

## Resources Needed
- 30-40 hours development time (including i18n)
- SEO tools access (Search Console, Schema validator)
- Professional OG images for both languages (2-4 hours)
- Translation services for image metadata (10-15 hours)
- Ongoing monitoring for both language versions

## Implementation Order
1. **First**: Complete i18n implementation (see i18n-plan.md)
2. **Second**: Apply SEO enhancements to both language versions
3. **Third**: Monitor and optimize based on language-specific performance

---
*Priority: High 🔴 = Implement within 1 week | Medium 🟡 = Within 1 month | Low 🟢 = Within 3 months*