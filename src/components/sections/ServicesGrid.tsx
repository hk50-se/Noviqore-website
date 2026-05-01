import Link from 'next/link';
import {
  AppWindow,
  Bot,
  CloudCog,
  Database,
  Handshake,
  Network,
  PanelsTopLeft,
  Workflow
} from 'lucide-react';
import { services } from '@/data/services';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const iconMap = [AppWindow, Bot, PanelsTopLeft, Network, CloudCog, Database, Workflow, Handshake];

type ServicesGridProps = {
  limit?: number;
  showCta?: boolean;
};

export function ServicesGrid({ limit, showCta = true }: ServicesGridProps) {
  const items = typeof limit === 'number' ? services.slice(0, limit) : services;

  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="Product engineering and AI services built for measurable outcomes"
          description="Noviqore builds custom digital systems across the full lifecycle: strategy, architecture, development, deployment, and ongoing scale support."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((service, index) => {
            const Icon = iconMap[index % iconMap.length];

            return (
              <Reveal key={service.id} delay={index * 0.05}>
                <Card className="group h-full border-white/12 bg-slate-950/50 p-5 hover:-translate-y-1 hover:border-emerald-300/40">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/12 text-emerald-200 transition group-hover:bg-emerald-300/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{service.summary}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
        {showCta ? (
          <div className="flex justify-start">
            <Link
              href="/services"
              className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-white/10"
            >
              View Full Services
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}




