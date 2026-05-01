import { Braces, Cloud, Database, ServerCog, Sparkles, Workflow } from 'lucide-react';
import { technologyCategories } from '@/data/technologies';
import { buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { TechStack } from '@/components/sections/TechStack';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';

const iconMap = {
  Frontend: Braces,
  Backend: ServerCog,
  Databases: Database,
  Cloud: Cloud,
  AI: Sparkles,
  DevOps: Workflow
} as const;

export const metadata = buildMetadata({
  title: 'Technologies',
  description:
    'Noviqore technology stack includes Next.js, React, TypeScript, Node.js, Python, FastAPI, MongoDB, PostgreSQL, AWS, Docker, CI/CD, and modern AI tooling.',
  path: '/technologies',
  keywords: ['Next.js development company', 'Node.js backend development', 'cloud software development']
});

export default function TechnologiesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Technologies', path: '/technologies' }
  ]);

  return (
    <>
      <PageHero
        eyebrow="Technology Stack"
        title="Modern technologies selected for speed, scalability, and maintainability"
        description="Noviqore chooses stack decisions based on product context, integration needs, and growth constraints to deliver stable long-term systems."
      />
      <TechStack />
      <section className="pb-8">
        <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {technologyCategories.map((group) => {
            const Icon = iconMap[group.category as keyof typeof iconMap];
            return (
              <Card key={group.category} className="border-white/12 bg-slate-950/60">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300/12 text-lime-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-white">{group.category}</h2>
                <p className="mt-2 text-sm text-slate-300">{group.description}</p>
                <p className="mt-4 text-sm text-slate-200">{group.items.join(' • ')}</p>
              </Card>
            );
          })}
        </div>
      </section>
      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}



