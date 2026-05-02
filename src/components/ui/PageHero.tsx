import { SectionHeading } from '@/components/ui/SectionHeading';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-10 pt-4 sm:pb-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(86,125,104,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(191,145,92,0.1),transparent_34%)]" />
      <div className="container-shell">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}





