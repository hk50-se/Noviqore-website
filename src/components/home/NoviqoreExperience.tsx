'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { aiSolutions } from '@/data/aiSolutions';
import { caseStudies } from '@/data/caseStudies';
import { processSteps } from '@/data/process';
import { productSolutions } from '@/data/products';
import { services } from '@/data/services';
import { siteConfig } from '@/lib/constants';

const QoreWorldCanvas = dynamic(() => import('./QoreWorldCanvas'), { ssr: false, loading: () => <div className="qore-render-fallback"><i /><span>Rendering Qore Engine</span></div> });

const chapters = ['Signal', 'Intelligence', 'Architecture', 'Products', 'Delivery', 'Proof', 'Launch'];

export function NoviqoreExperience() {
  const root = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const [chapter, setChapter] = useState(0);
  const [touchPulse, setTouchPulse] = useState<{ x: number; y: number; id: number } | null>(null);

  useEffect(() => {
    document.documentElement.classList.add('noviqore-home');
    let frame = 0;
    let active = 0;
    const update = () => {
      frame = 0;
      if (!root.current) return;
      const rect = root.current.getBoundingClientRect();
      const distance = Math.max(1, root.current.offsetHeight - innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      progressRef.current = progress;
      const next = Math.min(chapters.length - 1, Math.floor(progress * (chapters.length + 0.02)));
      if (next !== active) { active = next; setChapter(next); }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => { document.documentElement.classList.remove('noviqore-home'); removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  const goTo = (index: number) => {
    if (!root.current) return;
    const distance = root.current.offsetHeight - innerHeight;
    scrollTo({ top: root.current.offsetTop + distance * (index / 6.25), behavior: 'smooth' });
  };

  const pulse = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'touch') return;
    setTouchPulse({ x: event.clientX, y: event.clientY, id: Date.now() });
    window.setTimeout(() => setTouchPulse(null), 620);
  };

  return (
    <section ref={root} className={`qore-experience qore-stage-${chapter}`} onPointerDown={pulse}>
      <div className="qore-sticky">
        <QoreWorldCanvas progressRef={progressRef} />
        <div className="qore-atmosphere" aria-hidden="true" />
        {touchPulse && <i key={touchPulse.id} className="qore-touch-pulse" style={{ left: touchPulse.x, top: touchPulse.y }} />}

        <div className="qore-status"><span><i /> Qore engine online</span><b>NQ / SYSTEM 01</b></div>
        <nav className="qore-chapters" aria-label="Homepage experience chapters">
          {chapters.map((label, index) => <button type="button" onClick={() => goTo(index)} className={chapter === index ? 'is-active' : ''} key={label}><small>0{index + 1}</small><span>{label}</span><i /></button>)}
        </nav>

        <article className={`qore-panel qore-signal ${chapter === 0 ? 'is-active' : ''}`}>
          <p className="qore-kicker">Noviqore / Software + Intelligence</p>
          <h1><span>Build the</span><em>next system.</em></h1>
          <div className="qore-signal-copy"><p>We turn ambitious ideas into intelligent products, resilient platforms, and software built to scale.</p><Link href="/contact">Start a build <span>↗</span></Link></div>
          <div className="qore-scroll-cue"><i /> Scroll to enter the engine <b>↓</b></div>
        </article>

        <article className={`qore-panel qore-intelligence ${chapter === 1 ? 'is-active' : ''}`}>
          <header><p className="qore-kicker">Intelligence layer / Useful AI, engineered safely</p><h2>Software that<br/><em>can think.</em></h2></header>
          <div className="qore-module-list">{aiSolutions.slice(0, 4).map((solution, index) => <Link href="/ai-solutions" key={solution.id}><small>0{index + 1}</small><div><b>{solution.title}</b><span>{solution.summary}</span></div><i>↗</i></Link>)}</div>
        </article>

        <article className={`qore-panel qore-architecture ${chapter === 2 ? 'is-active' : ''}`}>
          <p className="qore-kicker">Architecture layer / The machinery underneath</p><h2>Complex inside.<br/><em>Calm outside.</em></h2>
          <div className="qore-service-grid">{services.slice(0, 6).map((service, index) => <Link href={`/services#${service.id}`} key={service.id}><small>0{index + 1}</small><b>{service.title}</b><span>{service.stack.slice(0, 3).join(' / ')}</span></Link>)}</div>
        </article>

        <article className={`qore-panel qore-products ${chapter === 3 ? 'is-active' : ''}`}>
          <header><p className="qore-kicker">Product systems / Modular worlds for real operations</p><h2>Ideas become<br/><em>infrastructure.</em></h2></header>
          <div className="qore-product-stack">{productSolutions.slice(0, 5).map((product, index) => <Link href="/products" key={product.id}><small>/{String(index + 1).padStart(2, '0')}</small><b>{product.title}</b><span>{product.features[0]}</span><i>↗</i></Link>)}</div>
        </article>

        <article className={`qore-panel qore-delivery ${chapter === 4 ? 'is-active' : ''}`}>
          <p className="qore-kicker">Delivery protocol / From first signal to scale</p><h2>One disciplined<br/><em>flight path.</em></h2>
          <div className="qore-process-rail">{processSteps.map((step, index) => <div key={step.step} className={index < 5 ? 'is-primary' : ''}><small>{step.step}</small><b>{step.title}</b></div>)}</div>
          <Link className="qore-inline-link" href="/process">Inspect the complete process ↗</Link>
        </article>

        <article className={`qore-panel qore-proof ${chapter === 5 ? 'is-active' : ''}`}>
          <header><p className="qore-kicker">System logs / Representative work</p><h2>Built for<br/><em>the real world.</em></h2></header>
          <div className="qore-proof-list">{caseStudies.slice(0, 4).map((study, index) => <Link href="/case-studies" key={study.slug}><small>0{index + 1}</small><div><b>{study.title}</b><span>{study.techStack.slice(0, 3).join(' · ')}</span></div><i>↗</i></Link>)}</div>
        </article>

        <article className={`qore-panel qore-launch ${chapter === 6 ? 'is-active' : ''}`}>
          <div className="qore-guide"><Image src="/brand/qori-mascot.png" alt="Qori, Noviqore's AI guide" width={120} height={120} /><span>Qori says the launch window is open.</span></div>
          <p className="qore-kicker">Launch window / Lahore + worldwide</p><h2>Ready when<br/><em>you are.</em></h2><p className="qore-launch-copy">Bring us the problem, the rough idea, or the system that has outgrown itself. We’ll map the next move.</p>
          <Link href="/contact" className="qore-launch-link">Book a free consultation <span>↗</span></Link>
          <footer className="qore-home-footer"><span>Noviqore © {new Date().getFullYear()}</span><span>{siteConfig.location}</span><div><a href={`mailto:${siteConfig.email}`}>Email ↗</a><Link href="/services">Services ↗</Link><Link href="/case-studies">Work ↗</Link></div></footer>
        </article>

        <div className="qore-reticle" aria-hidden="true"><i /><i /><span>NQ</span></div>
        <div className="qore-telemetry"><span>31.5204° N / 74.3587° E</span><span>MOVE POINTER TO ALTER CAMERA</span><span>SECTOR 0{chapter + 1} / 07</span></div>
      </div>
    </section>
  );
}
