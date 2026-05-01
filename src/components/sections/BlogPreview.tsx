import Link from 'next/link';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function BlogPreview({ limit = 3 }: { limit?: number }) {
  const items = blogPosts.slice(0, limit);

  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Insights"
          title="Engineering and AI perspectives for product-focused teams"
          description="Actionable articles on software architecture, AI implementation, and scalable delivery practices."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((post) => (
            <Card key={post.slug} className="h-full border-white/12 bg-zinc-950/55">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">{post.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
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
      </div>
    </section>
  );
}





