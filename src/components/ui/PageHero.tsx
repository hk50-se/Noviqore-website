import { SectionHeading } from '@/components/ui/SectionHeading';
import { InternalWorld } from '@/components/ui/InternalWorld';
import type { InternalWorldVariant } from '@/components/ui/InternalWorldCanvas';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  variant?: InternalWorldVariant;
};

function inferVariant(eyebrow = ''): InternalWorldVariant {
  const value = eyebrow.toLowerCase();
  if (value.includes('about')) return 'profile';
  if (value.includes('ai')) return 'ai';
  if (value.includes('product')) return 'products';
  if (value.includes('process') || value.includes('delivery')) return 'process';
  if (value.includes('case')) return 'proof';
  if (value.includes('technolog')) return 'tech';
  if (value.includes('contact')) return 'contact';
  if (value.includes('blog')) return 'blog';
  return 'services';
}

export function PageHero({ eyebrow, title, description, variant }: PageHeroProps) {
  const sceneVariant = variant ?? inferVariant(eyebrow);
  return (
    <section className={`qore-page-hero qore-page-${sceneVariant}`}>
      <InternalWorld variant={sceneVariant} />
      <div className="qore-page-grid" aria-hidden="true"/>
      <div className="container-shell qore-page-copy">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} headingLevel="h1" className="qore-page-heading" />
      </div>
      <div className="qore-page-meta"><span>NQ / {sceneVariant}</span><span>Interactive system view</span></div>
    </section>
  );
}



