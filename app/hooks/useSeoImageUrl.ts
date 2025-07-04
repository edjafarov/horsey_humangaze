import { useLocale } from 'next-intl';
import { getSeoUrlFromOriginal } from '@/app/utils/imageRewriteMap';

/**
 * Hook to get SEO-friendly image URL based on current locale
 */
export function useSeoImageUrl(originalPath: string): string {
  const locale = useLocale() as 'de' | 'en';
  return getSeoUrlFromOriginal(originalPath, locale);
}

/**
 * Get SEO-friendly image URL for a specific locale (non-hook version)
 */
export function getSeoImageUrl(originalPath: string, locale: 'de' | 'en'): string {
  return getSeoUrlFromOriginal(originalPath, locale);
}