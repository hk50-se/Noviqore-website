import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function CaseStudiesSection({ limit, showCta = false }: { limit?: number; showCta?: boolean }) {
  const items = typeof limit === 'number' ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Case Studies"
          title="Representative engineering outcomes across AI, backend, and cloud systems"
          description="Anonymized examples that reflect the type of business and technical challenges Noviqore solves."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {items.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.05}>
              <Card className="h-full border-white/12 bg-slate-950/60">
                <p className="text-xs uppercase tracking-[0.18em] text-lime-200">{study.label}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{study.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{study.summary}</p>
                <div className="mt-4 grid gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-slate-100">Problem</p>
                    <p className="text-slate-300">{study.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">Solution</p>
                    <p className="text-slate-300">{study.solution}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">Tech Stack</p>
                    <p className="text-slate-300">{study.techStack.join(' • ')}</p>
                  </div>
                </div>
                <Link
                  href="/case-studies"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime-200 hover:text-lime-100"
                >
                  View Case Studies
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>

        {showCta ? (
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-lime-200 hover:text-lime-100">
            View all case studies
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}



