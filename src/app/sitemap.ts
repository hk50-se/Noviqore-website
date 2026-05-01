import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/lib/constants';

const staticRoutes = [
  '',
  '/services',
  '/ai-solutions',
  '/products',
  '/case-studies',
  '/about',
  '/process',
  '/technologies',
  '/blog',
  '/contact'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8
  })) as MetadataRoute.Sitemap;

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7
  })) as MetadataRoute.Sitemap;

  return [...staticEntries, ...blogEntries];
}





