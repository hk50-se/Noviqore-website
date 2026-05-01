import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { navItems } from '@/data/nav';
import { siteConfig } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-zinc-950/65">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-lg font-semibold text-white">
            <Image src="/brand/noviqore-icon.png" alt="Noviqore brand icon" width={24} height={24} className="h-6 w-6 rounded-md" />
            <span className="font-display">Noviqore</span>
          </div>
          <p className="max-w-sm text-sm text-zinc-300">{siteConfig.tagline}</p>
          <p className="max-w-sm text-sm text-zinc-400">
            Engineering-first software and AI solutions for startups, SMEs, and enterprise teams.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">Navigation</p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">Contact</p>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-300" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-300" />
              <span>{siteConfig.location}</span>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10"
              >
                Start Your Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="container-shell flex flex-col gap-1 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>� {new Date().getFullYear()} Noviqore. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and performance-first engineering.</p>
        </div>
      </div>
    </footer>
  );
}


