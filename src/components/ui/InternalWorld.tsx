'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import type { InternalWorldVariant } from './InternalWorldCanvas';

const InternalWorldCanvas = dynamic(() => import('./InternalWorldCanvas'), { ssr: false });

export function InternalWorld({ variant }: { variant: InternalWorldVariant }) {
  const [ready,setReady] = useState(false);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const show = () => setReady(true);
    const idleWindow = window as unknown as {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (idleWindow.requestIdleCallback) {
      const id = idleWindow.requestIdleCallback(show, { timeout: 700 });
      return () => idleWindow.cancelIdleCallback?.(id);
    }
    const id = setTimeout(show, 220);
    return () => clearTimeout(id);
  },[]);
  return ready ? <InternalWorldCanvas variant={variant}/> : <div className={`internal-world-fallback variant-${variant}`} aria-hidden="true"/>;
}
