import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './app/i18n';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false, // Disable automatic browser-based locale detection
  localePrefix: 'as-needed' // German URLs without prefix, English with /en/
});

export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/', '/(de|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};