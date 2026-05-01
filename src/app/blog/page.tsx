import Link from 'next/link';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';

export const metadata = buildMetadata({
  title: 'Blog',
  description:
    'Read Noviqore insights on AI automation, Next.js engineering, backend scalability, ERP systems, and modern software delivery practices.',
  path: '/blog',
  keywords: ['AI automation services', 'Next.js development company', 'custom ERP development']
});

export default function BlogPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' }
  ]);

  return (
    <>
      <PageHero
        eyebrow="Noviqore Blog"
        title="Practical insights on software engineering, AI implementation, and product scale"
        description="A technical and business-focused knowledge hub for startups, SMEs, and enterprise teams building modern digital products."
      />

      <section className="section-space">
        <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="h-full border-white/12 bg-zinc-950/60">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">{post.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-2 text-sm text-zinc-300">{post.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-400">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100"
              >
                Read article
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}





