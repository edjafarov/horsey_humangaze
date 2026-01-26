import fs from 'fs';
import path from 'path';

export interface Gallery {
  name: string;
  slug: string;
}

/**
 * Convert folder name to URL-safe slug
 */
export function slugify(folderName: string): string {
  return folderName
    .toLowerCase()
    .replace(/[:.]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Convert slug back to folder name by finding matching gallery
 */
export function getGalleryBySlug(slug: string): Gallery | undefined {
  const galleries = getGalleries();
  return galleries.find(g => g.slug === slug);
}

/**
 * List all gallery folders with name/slug pairs
 */
export function getGalleries(): Gallery[] {
  const galleriesPath = path.join(process.cwd(), 'public', 'galleries');

  try {
    const entries = fs.readdirSync(galleriesPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => ({
        name: entry.name,
        slug: slugify(entry.name),
      }));
  } catch {
    console.error('Failed to read galleries directory');
    return [];
  }
}

/**
 * Get list of image paths from a gallery folder
 */
export function getGalleryImages(folderName: string): string[] {
  const galleryPath = path.join(process.cwd(), 'public', 'galleries', folderName);

  try {
    const files = fs.readdirSync(galleryPath);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

    return files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map(file => `/galleries/${folderName}/${file}`);
  } catch {
    console.error(`Failed to read gallery: ${folderName}`);
    return [];
  }
}
