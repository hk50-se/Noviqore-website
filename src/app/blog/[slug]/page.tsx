import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CalendarDays } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { buildArticleSchema, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return buildMetadata({
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
      path: '/blog'
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords
  });
}

export default async function BlogArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = buildArticleSchema({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    publishedAt: post.publishedAt
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` }
  ]);

  const isAiArticle = post.category.toLowerCase().includes('ai') || post.title.toLowerCase().includes('ai');

  return (
    <>
      <PageHero variant="blog" eyebrow={post.category} title={post.title} description={post.excerpt} />
      <section className="qore-article-meta">
        <div className="container-shell flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
            <CalendarDays className="h-4 w-4" />
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          {isAiArticle ? (
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-amber-200/25 bg-zinc-950/70 px-3 py-2">
              <Image
                src="/brand/qori-mascot.png"
                alt="Qori, Noviqore's AI assistant mascot"
                width={44}
                height={44}
                className="h-11 w-11 rounded-lg border border-amber-200/30 object-cover"
              />
              <p className="text-sm text-zinc-200">Qori insight: This article covers practical AI implementation guidance.</p>
            </div>
          ) : null}
        </div>
      </section>

      <article className="section-space">
        <div className="container-shell max-w-4xl space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
              <div className="space-y-4 text-base leading-7 text-zinc-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

