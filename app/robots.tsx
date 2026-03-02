import config from './src/config';
import type { MetadataRoute } from 'next'

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${config.site_home}/sitemap.xml`,
  }
}