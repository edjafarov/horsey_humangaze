# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture

This is a Next.js 15 application using the App Router architecture with the following structure:

- **App Directory Structure**: Uses Next.js App Router (`app/` directory)
  - `app/layout.tsx` - Root layout with Header, Menu, Footer components and SEO metadata
  - `app/page.tsx` - Home page with image slider
  - `app/components/` - Reusable components (Header, Footer, Menu, ImageSlider, etc.)
  - `app/data/imageMetadata.ts` - SEO metadata for images
  - Individual page routes: portfolio, preis, reitbetriebe, kontakt, impressum, datenschutzerklaerung

- **TypeScript Configuration**: Strict TypeScript setup with path aliasing (`@/*` maps to root)

- **Styling**: 
  - styled-components v6 with TypeScript support
  - Next.js compiler configured for styled-components
  - Geist fonts (sans and mono) loaded via next/font

- **Linting**: ESLint with Next.js core web vitals and TypeScript rules

## SEO Workflow

When adding or updating images in the slider:

1. **Add images to**: `/public/images/` directory
2. **Update metadata**: Edit `app/data/imageMetadata.ts` with:
   - German SEO-optimized title
   - Descriptive German description (include keywords: Pferdefotografie, Pferde, Reitbetriebe, etc.)
   - Alt text in German describing the image content
3. **JSON-LD**: The structured data is automatically generated from imageMetadata.ts
4. **Image optimization**: Use descriptive filenames and ensure images are optimized for web

The project follows standard Next.js conventions with the modern App Router pattern and includes comprehensive SEO optimization for German-speaking audiences.