import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={cn('max-w-3xl space-y-4', alignment, className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-slate-300 sm:text-lg">{description}</p> : null}
    </div>
  );
}



