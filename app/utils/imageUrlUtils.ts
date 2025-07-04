import { BilingualImageMetadata } from '@/app/data/bilingualImageMetadata';

/**
 * Generate a SEO-friendly slug from a string
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[äöüß]/g, (match) => {
      const replacements: { [key: string]: string } = {
        'ä': 'ae',
        'ö': 'oe',
        'ü': 'ue',
        'ß': 'ss'
      };
      return replacements[match] || match;
    })
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

/**
 * Extract filename without extension
 */
export function getFilenameWithoutExtension(path: string): string {
  const filename = path.split('/').pop() || '';
  return filename.split('.')[0];
}

/**
 * Get file extension
 */
export function getFileExtension(path: string): string {
  const parts = path.split('.');
  return parts.length > 1 ? `.${parts.pop()}` : '';
}

/**
 * Generate SEO-friendly URL for an image
 */
export function generateSeoImageUrl(
  originalPath: string,
  title: string,
  locale: 'de' | 'en'
): string {
  const slug = createSlug(title);
  const extension = getFileExtension(originalPath);
  const prefix = locale === 'de' ? '/bilder' : '/images';
  
  return `${prefix}/${slug}${extension}`;
}

/**
 * Generate rewrite rules for all images
 */
export function generateImageRewrites(
  imageMetadata: BilingualImageMetadata[]
): Array<{ source: string; destination: string }> {
  const rewrites: Array<{ source: string; destination: string }> = [];
  
  imageMetadata.forEach((image) => {
    // German rewrite
    const germanUrl = generateSeoImageUrl(image.src, image.de.title, 'de');
    rewrites.push({
      source: germanUrl,
      destination: image.src
    });
    
    // English rewrite
    const englishUrl = generateSeoImageUrl(image.src, image.en.title, 'en');
    if (englishUrl !== germanUrl) { // Avoid duplicates
      rewrites.push({
        source: englishUrl,
        destination: image.src
      });
    }
  });
  
  return rewrites;
}

/**
 * Get SEO URL for an image based on current locale
 */
export function getSeoImageUrl(
  image: BilingualImageMetadata,
  locale: 'de' | 'en'
): string {
  const title = locale === 'de' ? image.de.title : image.en.title;
  return generateSeoImageUrl(image.src, title, locale);
}