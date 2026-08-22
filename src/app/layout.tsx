import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { ConditionalFooter } from '@/components/layout/ConditionalFooter';
import { QoreLoader } from '@/components/home/QoreLoader';
import { QoriChatbot } from '@/components/chatbot/QoriChatbot';
import { siteConfig } from '@/lib/constants';
import {
  buildOrganizationSchema,
  buildProfessionalServiceSchema,
  buildWebsiteSchema
} from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} preview`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  alternates: {
    canonical: siteConfig.url
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = buildOrganizationSchema();
  const websiteSchema = buildWebsiteSchema();
  const professionalServiceSchema = buildProfessionalServiceSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <QoreLoader />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-emerald-400 focus:px-4 focus:py-2 focus:text-zinc-950"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen">
          <Header />
          <main id="main-content" className="pt-20 sm:pt-24">
            {children}
          </main>
          <ConditionalFooter />
          <QoriChatbot />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </body>
    </html>
  );
}



