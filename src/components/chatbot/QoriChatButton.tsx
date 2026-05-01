'use client';

import Image from 'next/image';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type QoriChatButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function QoriChatButton({ isOpen, onClick }: QoriChatButtonProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? 'Close Qori chatbot' : 'Open Qori chatbot'}
      onClick={onClick}
      className={cn(
        'relative inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-amber-200/35',
        'bg-slate-950/95 shadow-[0_0_0_1px_rgba(251,191,36,0.2),0_18px_38px_rgba(251,146,60,0.35)] backdrop-blur'
      )}
    >
      <Image
        src="/brand/qori-mascot.png"
        alt="Qori, Noviqore's AI assistant mascot"
        width={56}
        height={56}
        className="h-14 w-14 rounded-full object-cover"
      />
      <span className="absolute -right-1 -top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-amber-200/35 bg-slate-900/95 text-amber-100">
        {isOpen ? <X className="h-3.5 w-3.5" /> : <MessageCircle className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
