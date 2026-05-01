import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';
import { buildMetadata, buildBreadcrumbSchema } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = buildMetadata({
  title: 'Services',
  description:
    'Custom web app development, SaaS engineering, backend systems, AI automation, data pipelines, ERP/CRM systems, and cloud delivery by Noviqore.',
  path: '/services',
  keywords: ['custom software development', 'SaaS development company', 'Node.js backend development']
});

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' }
  ]);

  return (
    <>
      <PageHero
        eyebrow="Noviqore Services"
        title="Software engineering and AI services designed for serious product outcomes"
        description="From early product architecture to scalable cloud systems, Noviqore delivers full-cycle engineering services with execution discipline and long-term maintainability."
      />
      <section className="section-space">
        <div className="container-shell grid gap-4">
          {services.map((service) => (
            <Card key={service.id} className="border-white/12 bg-slate-950/60 p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold text-white">{service.title}</h2>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100">
                  {service.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-3 text-sm text-slate-300">{service.summary}</p>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">What it is</p>
                    <p className="mt-2 text-sm text-slate-300">{service.whatItIs}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Who it is for</p>
                    <p className="mt-2 text-sm text-slate-300">{service.whoItsFor}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">What Noviqore delivers</p>
                    <ul className="mt-2 grid gap-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="inline-flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Suggested stack</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {service.stack.map((item) => (
                        <span key={item} className="rounded-md border border-white/12 bg-white/[0.02] px-2.5 py-1.5 text-xs text-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}




