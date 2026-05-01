import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/utils';
import { siteConfig } from '@/lib/constants';

type SeoArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({ title, description, path, keywords = [] }: SeoArgs): Metadata {
  const url = absoluteUrl(path, siteConfig.url);
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: Array.from(new Set([...siteConfig.keywords, ...keywords])),
    alternates: {
      canonical: url
    },
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage, siteConfig.url),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [absoluteUrl(siteConfig.ogImage, siteConfig.url)]
    }
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl('/brand/noviqore-icon.png', siteConfig.url),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: siteConfig.email,
        areaServed: 'Worldwide',
        availableLanguage: ['English']
      }
    ],
    sameAs: []
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function buildProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    areaServed: 'Worldwide',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK'
    },
    url: siteConfig.url,
    email: siteConfig.email,
    serviceType: [
      'Custom software development',
      'AI solutions',
      'Cloud software development',
      'ERP and SaaS engineering'
    ]
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, siteConfig.url)
    }))
  };
}

export function buildArticleSchema(args: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: args.title,
    description: args.description,
    datePublished: args.publishedAt,
    dateModified: args.publishedAt,
    mainEntityOfPage: absoluteUrl(args.path, siteConfig.url),
    author: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/brand/noviqore-icon.png', siteConfig.url)
      }
    },
    image: absoluteUrl(siteConfig.ogImage, siteConfig.url)
  };
}





