import config from './src/config';
import type { MetadataRoute } from 'next'

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