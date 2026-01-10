import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://llogaritkredi.al',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
  ]
}