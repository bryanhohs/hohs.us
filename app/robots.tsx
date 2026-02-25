import config from "./src/config";
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const HOHS_HOME = config.site_home;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${HOHS_HOME}/sitemap.xml`,
  }
}