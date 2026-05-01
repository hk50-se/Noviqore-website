'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { technologyCategories } from '@/data/technologies';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';

const marqueeItems = technologyCategories.flatMap((category) => category.items);

export function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Technologies"
          title="Modern stack choices for long-term product reliability"
          description="Noviqore combines frontend performance, backend depth, AI capabilities, and cloud operations into a cohesive engineering system."
        />

        <div className="overflow-hidden rounded-2xl border border-white/12 bg-zinc-950/55 p-4">
          <motion.div
            className="flex w-max gap-3"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: ['0%', '-50%']
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 26,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear'
                  }
            }
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {technologyCategories.map((category, index) => (
            <Reveal key={category.category} delay={index * 0.04}>
              <Card className="h-full border-white/12 bg-zinc-950/55">
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                <p className="mt-2 text-sm text-zinc-300">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex rounded-md border border-white/12 bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}





