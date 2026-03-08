import type { MetadataRoute } from 'next'
import config from './src/config'

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${config.site_home}/sitemap.xml`,
  }
}
