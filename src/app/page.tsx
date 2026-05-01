import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { AISolutionsSection } from '@/components/sections/AISolutions';
import { ProductSolutionsSection } from '@/components/sections/ProductSolutions';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { TechStack } from '@/components/sections/TechStack';
import { CaseStudiesSection } from '@/components/sections/CaseStudies';
import { CTASection } from '@/components/sections/CTASection';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Build Smarter Software with Noviqore',
  description:
    'Noviqore is a premium software and AI solutions company delivering custom software development, backend engineering, AI automation, and cloud-native systems.',
  path: '/'
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid limit={8} />
      <AISolutionsSection compact />
      <ProductSolutionsSection limit={6} />
      <ProcessTimeline compact />
      <TechStack />
      <CaseStudiesSection limit={4} showCta />
      <BlogPreview />
      <CTASection variant="qori" />
    </>
  );
}




