import Link from 'next/link';
import { ArrowUpRight, BrainCircuit } from 'lucide-react';
import { aiSolutions } from '@/data/aiSolutions';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';

export function AISolutionsSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? aiSolutions.slice(0, 4) : aiSolutions;

  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="AI Solutions"
          title="Practical AI systems designed for operations, productivity, and growth"
          description="From LLM applications and AI agents to retrieval pipelines and workflow automation, Noviqore delivers AI capabilities grounded in business logic and reliability standards."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <Card className="h-full border-white/12 bg-gradient-to-b from-zinc-900/90 to-zinc-950/70">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-200">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.summary}</p>
                <ul className="mt-4 space-y-2 text-xs text-zinc-300">
                  {item.capabilities.map((capability) => (
                    <li key={capability} className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
                      {capability}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
        {compact ? (
          <Link
            href="/ai-solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100"
          >
            Explore full AI capabilities
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}





