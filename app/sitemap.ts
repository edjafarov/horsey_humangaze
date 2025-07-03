import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://equine.humangaze-photography.com'
  
  // Define all routes
  const routes = [
    '',
    '/portfolio',
    '/preis',
    '/reitbetriebe',
    '/kontakt',
    '/impressum',
    '/datenschutzerklaerung'
  ]

  // Generate entries for each route in each locale
  const sitemapEntries: MetadataRoute.Sitemap = []

  routes.forEach(route => {
    // German version (default, no prefix)
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : route === '/portfolio' ? 0.9 : 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}${route}`,
          en: `${baseUrl}/en${route}`
        }
      }
    })

    // English version
    sitemapEntries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : route === '/portfolio' ? 0.9 : 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}${route}`,
          en: `${baseUrl}/en${route}`
        }
      }
    })
  })

  return sitemapEntries
}