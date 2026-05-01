import { productSolutions } from '@/data/products';
import { buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { ProductSolutionsSection } from '@/components/sections/ProductSolutions';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = buildMetadata({
  title: 'Products and Solutions',
  description:
    'Explore Noviqore solution capabilities across AI business assistants, support platforms, ERP systems, CRM automation, dashboards, and marketplace software.',
  path: '/products',
  keywords: ['custom software development', 'business automation software', 'SaaS development company']
});

export default function ProductsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' }
  ]);

  return (
    <>
      <PageHero
        eyebrow="Products / Solutions"
        title="Capability-driven product blueprints for modern digital businesses"
        description="Noviqore translates recurring business challenges into scalable software and AI solution architectures tailored to your operations."
      />
      <ProductSolutionsSection />
      <section className="pb-8">
        <div className="container-shell rounded-2xl border border-white/10 bg-zinc-950/55 p-6 text-sm text-zinc-300 sm:p-8">
          <p>
            These offerings are representative solution categories, not pre-built off-the-shelf products. Each implementation is
            scoped around your processes, integrations, compliance requirements, and growth strategy.
          </p>
          <p className="mt-4 text-zinc-200">
            Available solution categories include AI Business Assistant, AI Customer Support Platform, Smart Admin Dashboard,
            ERP / Operations System, CRM & Sales Automation, Marketplace Platform, Booking / Scheduling System, and Analytics &
            Reporting System.
          </p>
          <p className="mt-4 text-zinc-400">Total representative solution tracks: {productSolutions.length}</p>
        </div>
      </section>
      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}





