import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { aiSolutions } from '@/data/aiSolutions';
import { buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';

const implementationPillars = [
  {
    title: 'AI Strategy and Implementation',
    description:
      'Define high-value use cases, data dependencies, and delivery boundaries before writing model logic.',
    icon: Sparkles
  },
  {
    title: 'AI Safety, Reliability, and Monitoring',
    description:
      'Integrate guardrails, human checkpoints, and observability to keep AI outputs aligned with business standards.',
    icon: ShieldCheck
  },
  {
    title: 'Workflow Automation and Orchestration',
    description:
      'Connect AI to operational systems so outputs can trigger meaningful action across departments.',
    icon: Workflow
  }
];

const capabilityGroups = [
  {
    title: 'LLM Apps and AI Agents',
    items: ['Task-focused AI copilots', 'Multi-step AI agents', 'Tool-enabled workflows', 'Model fallback logic']
  },
  {
    title: 'RAG Systems and AI Chatbots',
    items: ['Context-grounded responses', 'Knowledge indexing pipelines', 'Enterprise chatbot workflows', 'Conversation analytics']
  },
  {
    title: 'Document AI and Model Integrations',
    items: ['Document extraction and routing', 'Classification and enrichment', 'OpenAI / LLM integrations', 'Voice, image, and text workflows']
  },
  {
    title: 'AI Dashboards and Data Pipelines',
    items: ['AI usage and quality dashboards', 'Prompt and outcome telemetry', 'Pipeline quality checks', 'Model cost tracking']
  }
];

export const metadata = buildMetadata({
  title: 'AI Solutions',
  description:
    'Noviqore builds AI chatbots, AI agents, RAG assistants, document intelligence systems, workflow automation, model integrations, and AI dashboards.',
  path: '/ai-solutions',
  keywords: ['AI solutions company', 'LLM integration services', 'AI chatbot development', 'AI automation services']
});

export default function AISolutionsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'AI Solutions', path: '/ai-solutions' }
  ]);

  return (
    <>
      <PageHero
        eyebrow="AI Solutions"
        title="Futuristic AI capabilities implemented with practical business discipline"
        description="Noviqore engineers production-grade AI systems across strategy, architecture, model integration, retrieval, automation, and reliability operations."
      />

      <section className="section-space pb-6">
        <div className="container-shell">
          <Card className="overflow-hidden border-amber-200/20 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-950/90 p-6 sm:p-8">
            <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
              <Image
                src="/brand/qori-mascot.png"
                alt="Qori, Noviqore's AI assistant mascot"
                width={180}
                height={180}
                className="h-32 w-32 rounded-2xl border border-amber-200/30 object-cover sm:h-40 sm:w-40"
              />
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-100">Meet Qori</p>
                <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  Your AI assistant concept, built for real business workflows
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  Noviqore can build assistants like Qori for customer support, internal copilots, operations routing,
                  and task automation. From retrieval and tool-calling to monitoring and guardrails, we design AI
                  systems that are useful in production, not just demos.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-4 lg:grid-cols-3">
          {implementationPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="border-white/12 bg-slate-950/60">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/12 text-emerald-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-white">{pillar.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{pillar.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="pb-8">
        <div className="container-shell grid gap-4 md:grid-cols-2">
          {capabilityGroups.map((group) => (
            <Card key={group.title} className="border-white/12 bg-slate-950/60">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-space pt-10">
        <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aiSolutions.map((item) => (
            <Card key={item.id} className="border-white/12 bg-gradient-to-b from-slate-900/90 to-slate-950/70">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                {item.capabilities.map((capability) => (
                  <li key={capability} className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
                    {capability}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100">
                Discuss this use case
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}




