import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { productSolutions } from '@/data/products';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function ProductSolutionsSection({ limit }: { limit?: number }) {
  const items = typeof limit === 'number' ? productSolutions.slice(0, limit) : productSolutions;

  return (
    <section className="qore-products-section section-space">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Products / Solutions"
          title="Solution architectures tailored to recurring business needs"
          description="These are representative capability blueprints that Noviqore can adapt to your industry, workflow complexity, and growth targets."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((product, index) => {
            const isAiProduct =
              product.id.includes('ai-') ||
              product.id.includes('assistant') ||
              product.id.includes('support');

            return (
              <Reveal key={product.id} delay={index * 0.04}>
                <Card className="h-full border-white/12 bg-zinc-950/60">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                    {isAiProduct ? (
                      <Image
                        src="/brand/qori-mascot.png"
                        alt="Qori, Noviqore's AI assistant mascot"
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-lg border border-amber-200/30 object-cover"
                      />
                    ) : null}
                  </div>
                <p className="mt-2 text-sm text-zinc-300">{product.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Key Features</p>
                <ul className="mt-3 grid gap-2 text-sm text-zinc-300">
                  {product.features.map((feature) => (
                    <li key={feature} className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-zinc-300">
                  <span className="font-semibold text-zinc-100">Ideal for:</span> {product.idealFor}
                </p>
                <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100">
                  {product.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}




