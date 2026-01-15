import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './app/i18n';
import { NextRequest, NextResponse } from 'next/server';
import { getOriginalImagePath } from './app/utils/imageRewriteMap';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false, // Disable automatic browser-based locale detection
  localePrefix: 'as-needed' // German URLs without prefix, English with /en/
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Allow direct access to static image paths (gallery, hero)
  if (pathname.startsWith('/images/gallery/') || pathname === '/images/hero.jpg') {
    return NextResponse.next();
  }

  // Check if it's a SEO-friendly image URL
  if (pathname.startsWith('/bilder/') || (pathname.startsWith('/images/') && !pathname.startsWith('/images/slider') && !pathname.startsWith('/images/portfolio'))) {
    const originalPath = getOriginalImagePath(pathname);
    
    if (originalPath) {
      // Rewrite to the original image path
      const url = request.nextUrl.clone();
      url.pathname = originalPath;
      return NextResponse.rewrite(url);
    }
  }
  
  // Otherwise, use the intl middleware
  return intlMiddleware(request);
}

export const config = {
  // Include image paths and internationalization paths
  matcher: ['/', '/(de|en)/:path*', '/bilder/:path*', '/images/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};