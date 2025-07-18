import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      'https://equine.humangaze-photography.com/sitemap.xml',
      'https://equine.humangaze-photography.com/sitemap-images.xml'
    ],
  }
}