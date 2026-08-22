import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

type CTASectionProps = {
  variant?: 'default' | 'qori';
};

export function CTASection({ variant = 'default' }: CTASectionProps) {
  const isQoriVariant = variant === 'qori';

  return (
    <section className="section-space pt-4">
      <div className="container-shell">
        <div className="qore-cta-panel relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-zinc-900/95 via-emerald-950/25 to-amber-950/20 p-8 shadow-panel sm:p-10 lg:p-14">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-300/18 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className={`relative ${isQoriVariant ? 'grid items-center gap-6 md:grid-cols-[1fr_auto]' : 'max-w-3xl'} space-y-4`}>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">Start Your Project</p>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {isQoriVariant
                  ? 'Have an idea for an AI assistant like Qori?'
                  : 'Have an idea for a software or AI product?'}
              </h2>
              <p className="text-base text-zinc-200 sm:text-lg">
                {isQoriVariant
                  ? "Let's build your AI product with production-ready architecture."
                  : "Let's turn it into a scalable product."}
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg">{isQoriVariant ? 'Build Your AI Product' : 'Start Your Project'}</Button>
                </Link>
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-100 hover:text-white">
                  View Our Work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {isQoriVariant ? (
              <div className="mx-auto hidden md:block">
                <Image
                  src="/brand/qori-mascot.png"
                  alt="Qori, Noviqore's AI assistant mascot"
                  width={180}
                  height={180}
                  className="h-36 w-36 rounded-2xl border border-amber-200/30 object-cover shadow-[0_0_0_1px_rgba(166,128,89,0.22),0_22px_42px_rgba(15,23,42,0.55)]"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
