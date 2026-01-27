import galleryData from './gallery-data.json';

export interface Gallery {
  name: string;
  slug: string;
}

interface GalleryWithImages extends Gallery {
  images: string[];
}

const galleries: GalleryWithImages[] = galleryData;

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
  return galleries.find(g => g.slug === slug);
}

/**
 * List all gallery folders with name/slug pairs
 */
export function getGalleries(): Gallery[] {
  return galleries.map(({ name, slug }) => ({ name, slug }));
}

/**
 * Get list of image paths from a gallery folder
 */
export function getGalleryImages(folderName: string): string[] {
  const gallery = galleries.find(g => g.name === folderName);
  return gallery?.images ?? [];
}
