import { caseStudies } from '@/data/caseStudies';
import { buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = buildMetadata({
  title: 'Case Studies',
  description:
    'Review anonymized representative Noviqore case studies covering ERP automation, fintech integrations, AI knowledge assistants, marketplace dashboards, and cloud optimization.',
  path: '/case-studies',
  keywords: ['custom ERP development', 'AI solutions company', 'cloud software development']
});

export default function CaseStudiesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' }
  ]);

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Anonymized project patterns that demonstrate Noviqore execution depth"
        description="The examples below are representative solution types and reflect typical problems, technical approaches, and outcomes delivered by Noviqore."
      />

      <section className="section-space">
        <div className="container-shell grid gap-4">
          {caseStudies.map((study, index) => (
            <Card key={study.slug} className="border-white/12 bg-slate-950/60 p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-2xl font-semibold text-white">{index + 1}. {study.title}</h2>
                <span className="rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-lime-200">
                  {study.label}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{study.summary}</p>

              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">Problem</p>
                  <p className="mt-2 text-sm text-slate-300">{study.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">Solution</p>
                  <p className="mt-2 text-sm text-slate-300">{study.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">Result</p>
                  <ul className="mt-2 grid gap-2 text-sm text-slate-300">
                    {study.results.map((result) => (
                      <li key={result} className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-300">
                <span className="font-semibold text-slate-100">Tech stack:</span> {study.techStack.join(' • ')}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}



