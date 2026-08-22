'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function QoreLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(4);

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem('noviqore-qore-booted');
    const duration = reduced ? 160 : seen ? 520 : 1900;
    document.documentElement.classList.add('qore-booting');
    let current = seen ? 84 : 4;
    const interval = window.setInterval(() => {
      current = Math.min(94, current + Math.ceil(Math.random() * (seen ? 13 : 6)));
      setProgress(current);
    }, seen ? 42 : 82);
    const finish = window.setTimeout(() => {
      window.clearInterval(interval);
      setProgress(100);
      window.setTimeout(() => {
        setLeaving(true);
        window.setTimeout(() => {
          setVisible(false);
          document.documentElement.classList.remove('qore-booting');
          sessionStorage.setItem('noviqore-qore-booted', '1');
        }, reduced ? 60 : 680);
      }, reduced ? 20 : 180);
    }, duration);
    return () => { window.clearInterval(interval); window.clearTimeout(finish); document.documentElement.classList.remove('qore-booting'); };
  }, []);

  if (!visible) return null;
  return <div className={`qore-loader ${leaving ? 'is-leaving' : ''}`} role="status" aria-label="Loading the Noviqore experience">
    <div className="qore-loader-top"><span>NOVIQORE / QORE ENGINE</span><span>BOOT SEQUENCE 01</span></div>
    <div className="qore-loader-mark"><i /><i /><i /><Image src="/brand/logo-mark.svg" alt="" width={76} height={76} priority /></div>
    <div className="qore-loader-copy"><small>ASSEMBLING INTELLIGENCE</small><p>Idea enters.<br/><em>Systems emerge.</em></p></div>
    <div className="qore-loader-progress"><div><i style={{ transform: `scaleX(${progress / 100})` }} /></div><span>{String(progress).padStart(3, '0')}%</span></div>
  </div>;
}
