import type { MetadataRoute } from 'next'
import config from './src/config'

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.site_home,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
