'use client';

import { usePathname } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';

export function ConditionalFooter() {
  return usePathname() === '/' ? null : <Footer />;
}
