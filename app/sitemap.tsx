import config from "./src/config";
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const HOHS_HOME = config.site_home;
  return [
    {
      url: HOHS_HOME,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}