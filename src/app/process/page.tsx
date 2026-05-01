import { processSteps } from '@/data/process';
import { buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = buildMetadata({
  title: 'Process',
  description:
    'Noviqore follows a structured process from discovery call and requirement analysis to technical planning, development, QA, deployment, and scaling.',
  path: '/process',
  keywords: ['custom software development', 'SaaS development company', 'cloud software development']
});

export default function ProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Process', path: '/process' }
  ]);

  return (
    <>
      <PageHero
        eyebrow="Delivery Process"
        title="A rigorous nine-step process to turn ideas into reliable software"
        description="Noviqore applies a transparent development process that balances speed, architectural quality, and long-term product maintainability."
      />
      <ProcessTimeline />
      <section className="pb-8">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          {processSteps.slice(0, 3).map((item) => (
            <Card key={item.step} className="border-white/12 bg-slate-950/60">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">Step {item.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}




