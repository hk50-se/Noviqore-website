'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '@/data/nav';
import { Button } from '@/components/ui/Button';

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="container-shell mt-2 rounded-2xl border border-white/15 bg-slate-950/95 p-4 shadow-panel backdrop-blur"
        >
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-2">
            <Link href="/contact" onClick={onClose}>
              <Button className="w-full">Book a Free Consultation</Button>
            </Link>
            <Link href="/case-studies" onClick={onClose}>
              <Button variant="secondary" className="w-full">
                View Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}




