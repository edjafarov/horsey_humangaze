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
  - `app/layout.tsx` - Root layout with Geist font configuration
  - `app/page.tsx` - Home page component
  - `app/globals.css` - Global styles
  - `app/page.module.css` - Page-specific CSS modules

- **TypeScript Configuration**: Strict TypeScript setup with path aliasing (`@/*` maps to root)

- **Styling**: CSS Modules for component-specific styles, Geist fonts (sans and mono) loaded via next/font

- **Linting**: ESLint with Next.js core web vitals and TypeScript rules

- **Styling Libraries**: 
  - CSS Modules (existing)
  - styled-components v6 with TypeScript support
  - Next.js compiler configured for styled-components

The project follows standard Next.js conventions with the modern App Router pattern.