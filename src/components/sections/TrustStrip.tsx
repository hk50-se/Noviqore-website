import { CheckCircle2 } from 'lucide-react';
import { trustPoints } from '@/lib/constants';

export function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-slate-900/45 py-4">
      <div className="container-shell flex flex-wrap items-center justify-center gap-4">
        {trustPoints.map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.02] px-3 py-1 text-xs text-slate-200 sm:text-sm"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}




