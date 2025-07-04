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