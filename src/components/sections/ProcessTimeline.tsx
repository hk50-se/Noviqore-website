import { processSteps } from '@/data/process';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  const items = compact ? processSteps.slice(0, 7) : processSteps;

  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Process"
          title="A structured delivery model from discovery to scale"
          description="Every engagement follows a clear execution system to reduce risk and keep product momentum high across planning, build, and growth phases."
        />

        <div className="relative grid gap-4">
          <div className="pointer-events-none absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-emerald-300/40 via-amber-300/20 to-transparent md:block" />
          {items.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.04}>
              <Card className="relative border-white/12 bg-slate-950/60 md:ml-10">
                <span className="absolute -left-10 top-6 hidden h-4 w-4 rounded-full border border-emerald-300/40 bg-emerald-300/20 md:block" />
                <div className="flex flex-wrap items-center gap-4">
                  <span className="rounded-md border border-emerald-300/30 bg-emerald-300/10 px-2 py-1 text-xs font-semibold text-emerald-100">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">{step.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}




