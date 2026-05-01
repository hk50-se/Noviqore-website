'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Cloud, Cpu, Database, LayoutDashboard, Network } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';

const floatingCards = [
  {
    icon: Network,
    title: 'API Orchestration',
    detail: 'Secure service connectivity and integration workflows'
  },
  {
    icon: Cpu,
    title: 'AI Model Layer',
    detail: 'LLM pipelines with guardrails, retrieval, and monitoring'
  },
  {
    icon: LayoutDashboard,
    title: 'Product Dashboards',
    detail: 'Real-time operational intelligence for teams'
  },
  {
    icon: Cloud,
    title: 'Cloud Native Delivery',
    detail: 'Scalable release pipelines on AWS infrastructure'
  },
  {
    icon: Database,
    title: 'Data Systems',
    detail: 'Reliable data architecture for products and analytics'
  }
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="container-shell relative section-space">
        <div className="mx-auto grid max-w-5xl gap-10 text-center">
          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-200"
          >
            Intelligent software. Built from idea to scale.
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Build smarter software with Noviqore.
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg"
          >
            We design and develop scalable web platforms, backend systems, AI-powered products, automation tools,
            and cloud-native software for modern businesses.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Link href="/contact">
              <Button size="lg">Book a Free Consultation</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="secondary">
                Explore Services
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto hidden max-w-md items-center gap-4 rounded-2xl border border-amber-200/25 bg-slate-950/65 p-3 text-left shadow-panel backdrop-blur md:flex"
          >
            <Image
              src="/brand/qori-mascot.png"
              alt="Qori, Noviqore's AI assistant mascot"
              width={72}
              height={72}
              priority
              className="h-16 w-16 rounded-xl border border-amber-200/25 object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-100">Meet Qori</p>
              <p className="mt-1 text-sm text-slate-200">
                AI assistant concept for customer support, internal copilots, and process automation.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none mt-14 hidden grid-cols-5 gap-4 xl:grid">
          {floatingCards.map((item, index) => {
            const Icon = item.icon;
            const offsetClass = index % 2 === 0 ? 'translate-y-0' : 'translate-y-6';
            return (
              <motion.div
                key={item.title}
                className={`w-full rounded-2xl border border-white/15 bg-slate-950/70 p-4 shadow-panel backdrop-blur ${offsetClass}`}
                initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95, y: 15 }}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        scale: 1,
                        y: [0, -8, 0]
                      }
                }
                transition={{
                  duration: 0.9,
                  delay: 0.32 + index * 0.08,
                  y: {
                    duration: 5 + (index % 3),
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut'
                  }
                }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/15 text-emerald-200">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-slate-300">{item.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




