import { generateSeoImageUrl } from "./seoUrlGenerator";
import type { BilingualImageMetadata } from "@/app/data/bilingualImageMetadata";

// Initialize maps
let seoToOriginalMap: Map<string, string> | null = null;
let originalToSeoMap: Map<string, { de: string; en: string }> | null = null;

function initializeMaps() {
  if (seoToOriginalMap && originalToSeoMap) return;

  // Import dynamically to avoid circular dependency
  /* eslint-disable @typescript-eslint/no-require-imports */
  const {
    bilingualImageMetadata,
    portfolioIdyllischBilingual,
    portfolioNiedlichBilingual,
    portfolioDramatischBilingual,
    portfolioHochzeitBilingual,
    IdyllischBilingualCover,
  } = require("@/app/data/bilingualImageMetadata");
  /* eslint-enable @typescript-eslint/no-require-imports */

  const allImages: BilingualImageMetadata[] = [
    ...bilingualImageMetadata,
    ...portfolioIdyllischBilingual,
    ...portfolioNiedlichBilingual,
    ...portfolioDramatischBilingual,
    ...portfolioHochzeitBilingual,
    IdyllischBilingualCover,
  ];

  seoToOriginalMap = new Map<string, string>();
  originalToSeoMap = new Map<string, { de: string; en: string }>();

  // Populate the maps
  allImages.forEach((image) => {
    // German URL
    const germanUrl = generateSeoImageUrl(image.src, image.de.title, "de");
    seoToOriginalMap!.set(germanUrl, image.src);

    // English URL
    const englishUrl = generateSeoImageUrl(image.src, image.en.title, "en");
    if (englishUrl !== germanUrl) {
      seoToOriginalMap!.set(englishUrl, image.src);
    }

    originalToSeoMap!.set(image.src, {
      de: germanUrl,
      en: englishUrl,
    });
  });
}

/**
 * Get original image path from SEO URL
 */
export function getOriginalImagePath(seoUrl: string): string | undefined {
  initializeMaps();
  return seoToOriginalMap!.get(seoUrl);
}

/**
 * Get SEO URL from original path
 */
export function getSeoUrlFromOriginal(
  originalPath: string,
  locale: "de" | "en"
): string {
  initializeMaps();
  const seoUrls = originalToSeoMap!.get(originalPath);
  return seoUrls ? seoUrls[locale] : originalPath;
}
