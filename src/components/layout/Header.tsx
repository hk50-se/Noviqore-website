'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { navItems } from '@/data/nav';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { MobileNav } from '@/components/layout/MobileNav';

function LogoMark() {
  return (
    <span className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
      <Image src="/brand/noviqore-icon.png" alt="Noviqore brand icon" width={28} height={28} className="h-7 w-7 rounded-lg shadow-glow" />
      <span className="font-display">Noviqore</span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6">
      <div
        className={cn(
          'container-shell flex items-center justify-between rounded-2xl border px-4 py-3 transition-all sm:px-6',
          isScrolled
            ? 'border-white/20 bg-zinc-950/80 shadow-panel backdrop-blur-xl'
            : 'border-white/10 bg-zinc-900/45 backdrop-blur-sm'
        )}
      >
        <Link href="/" aria-label="Noviqore home">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:text-white',
                  isActive && 'bg-white/10 text-white'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/case-studies" className="text-sm text-zinc-300 hover:text-white">
            View Our Work
          </Link>
          <Link href="/contact">
            <Button size="sm">Book a Free Consultation</Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-zinc-200 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsMobileNavOpen((value) => !value)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
}





