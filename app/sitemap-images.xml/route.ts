import { NextResponse } from 'next/server';
import {
  portfolioDramatischBilingual,
  portfolioIdyllischBilingual,
  portfolioNiedlichBilingual,
  portfolioHochzeitBilingual,
  allSliderImagesBilingual,
  BilingualImageMetadata
} from '../data/bilingualImageMetadata';
import { generateSeoImageUrl } from '../utils/seoUrlGenerator';

export async function GET() {
  const baseUrl = 'https://equine.humangaze-photography.com';
  
  // Combine all portfolio images
  const allImageCategories: { category: string; images: BilingualImageMetadata[] }[] = [
    { category: 'portfolio/dramatisch', images: portfolioDramatischBilingual },
    { category: 'portfolio/idyllisch', images: portfolioIdyllischBilingual },
    { category: 'portfolio/niedlich', images: portfolioNiedlichBilingual },
    { category: 'portfolio/hochzeit', images: portfolioHochzeitBilingual },
    { category: '', images: allSliderImagesBilingual }, // Home page slider
  ];

  const locales: ('de' | 'en')[] = ['de', 'en'];
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allImageCategories.map(({ category, images }) => 
  locales.map(locale => {
    const localePrefix = locale === 'de' ? '' : '/en';
    const pageUrl = category ? `${baseUrl}${localePrefix}/${category}` : `${baseUrl}${localePrefix}`;
    
    return images.map(img => {
      const localizedMeta = img[locale];
      const seoUrl = generateSeoImageUrl(img.src, localizedMeta.title, locale);
      const fullSeoUrl = `${baseUrl}${seoUrl}`;
      
      return `
  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${fullSeoUrl}</image:loc>
      <image:title>${escapeXml(localizedMeta.title)}</image:title>
      <image:caption>${escapeXml(localizedMeta.description)}</image:caption>
      <image:geo_location>Germany</image:geo_location>
      <image:license>${baseUrl}/impressum</image:license>
    </image:image>
  </url>`;
    }).join('');
  }).join('')
).join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}