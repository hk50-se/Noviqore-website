import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-panel backdrop-blur-sm transition-all',
        className
      )}
      {...props}
    />
  );
}




