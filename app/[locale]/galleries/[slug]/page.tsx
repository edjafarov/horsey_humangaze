import { notFound } from 'next/navigation';
import { locales } from '@/app/i18n';
import { getGalleries, getGalleryBySlug, getGalleryImages } from '@/lib/gallery-utils';
import GalleryGrid from '@/app/components/GalleryGrid';

interface GalleryPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const galleries = getGalleries();
  return locales.flatMap(locale =>
    galleries.map(g => ({ locale, slug: g.slug }))
  );
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const gallery = getGalleryBySlug(slug);
  if (!gallery) {
    notFound();
  }

  const images = getGalleryImages(gallery.name);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <GalleryGrid
          images={images}
          galleryName={gallery.name}
          locale={locale}
        />
      </div>
    </main>
  );
}
