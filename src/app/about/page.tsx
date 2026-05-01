import { Lightbulb, Rocket, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';
import { buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';

const values = [
  { title: 'Clarity', description: 'Clear communication, clear scope, and clear technical direction.', icon: Target },
  { title: 'Reliability', description: 'Dependable systems and disciplined engineering decisions.', icon: ShieldCheck },
  { title: 'Speed', description: 'Fast iteration cycles without sacrificing quality standards.', icon: Rocket },
  { title: 'Scalability', description: 'Architecture choices that hold as product complexity grows.', icon: Sparkles },
  { title: 'Innovation', description: 'Practical application of modern technologies where they create value.', icon: Lightbulb },
  { title: 'Ownership', description: 'Strong accountability from planning to post-launch support.', icon: Users }
];

export const metadata = buildMetadata({
  title: 'About Noviqore',
  description:
    'Noviqore is an engineering-first software and AI solutions company focused on scalable products, clean architecture, and long-term technical reliability.',
  path: '/about',
  keywords: ['software company in Pakistan', 'software house in Lahore', 'custom software development']
});

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }
  ]);

  return (
    <>
      <PageHero
        eyebrow="About Noviqore"
        title="Engineering-first software and AI solutions built for long-term business value"
        description="Noviqore is a software and AI solutions company focused on building scalable products, clean backend systems, modern interfaces, and intelligent automation."
      />

      <section className="section-space">
        <div className="container-shell grid gap-4 lg:grid-cols-2">
          <Card className="border-white/12 bg-slate-950/60">
            <h2 className="text-2xl font-semibold text-white">How Noviqore works</h2>
            <p className="mt-3 text-sm text-slate-300">
              Noviqore was founded with a product-engineering mindset: strong architecture first, execution discipline second,
              and measurable business outcomes throughout delivery. Every engagement combines product thinking with practical
              implementation depth across frontend, backend, AI, and cloud infrastructure.
            </p>
            <p className="mt-3 text-sm text-slate-300">
              The focus is consistent: maintainable code, robust systems, and long-term support models that keep software useful
              as business priorities evolve.
            </p>
          </Card>
          <Card className="border-white/12 bg-slate-950/60">
            <h2 className="text-2xl font-semibold text-white">What clients can expect</h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-300">
              <li className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">Product-level technical planning before execution</li>
              <li className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">Clean architecture and modular implementation strategy</li>
              <li className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">Iterative delivery with transparent communication</li>
              <li className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">Post-launch support for scaling, optimization, and roadmap extension</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="border-white/12 bg-slate-950/60">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/12 text-emerald-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{value.description}</p>
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




