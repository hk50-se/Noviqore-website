'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-sheen opacity-30" />
      <motion.div
        className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-lime-500/25 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 35, 20, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-8 h-72 w-72 rounded-full bg-rose-400/20 blur-3xl"
        animate={{ x: [0, -35, 18, 0], y: [0, 26, -20, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-lime-700/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      {[...Array(18)].map((_, idx) => (
        <motion.span
          key={idx}
          className="absolute h-1 w-1 rounded-full bg-lime-300/60"
          style={{
            top: `${(idx * 17) % 100}%`,
            left: `${(idx * 31) % 100}%`
          }}
          animate={{ opacity: [0.15, 0.8, 0.15], y: [0, -8, 0] }}
          transition={{ duration: 3 + (idx % 5), repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}



