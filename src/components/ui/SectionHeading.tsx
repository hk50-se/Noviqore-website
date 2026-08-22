import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  headingLevel?: 'h1' | 'h2';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  headingLevel = 'h2'
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  const Heading = headingLevel;

  return (
    <div className={cn('qore-section-heading max-w-3xl space-y-4', alignment, className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <Heading className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</Heading>
      {description ? <p className="text-base text-zinc-300 sm:text-lg">{description}</p> : null}
    </div>
  );
}



