'use client';

import Image from 'next/image';
import { Bot, Sparkles } from 'lucide-react';
import { QoriQuickActions, type QoriQuickAction } from '@/components/chatbot/QoriQuickActions';

export type QoriMessage = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
};

type QoriChatPanelProps = {
  messages: QoriMessage[];
  actions: QoriQuickAction[];
  onActionSelect: (action: QoriQuickAction) => void;
};

export function QoriChatPanel({ messages, actions, onActionSelect }: QoriChatPanelProps) {
  return (
    <section
      aria-label="Qori chatbot panel"
      className="relative flex h-[min(36rem,calc(100vh-8.5rem))] w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-3xl border border-amber-200/25 bg-slate-950/90 shadow-[0_0_0_1px_rgba(251,191,36,0.15),0_28px_48px_rgba(12,10,9,0.65)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.2),transparent_42%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.18),transparent_36%)]" />
      <header className="relative flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <Image
          src="/brand/qori-mascot.png"
          alt="Qori, Noviqore's AI assistant mascot"
          width={42}
          height={42}
          className="h-10 w-10 rounded-full border border-amber-200/30 object-cover"
        />
        <div>
          <h3 className="font-display text-base font-semibold text-white">Ask Qori</h3>
          <p className="text-xs text-amber-100/90">Noviqore AI Assistant</p>
        </div>
      </header>

      <div className="relative flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
            <Image src="/brand/qori-mascot.png" alt="" width={56} height={56} className="h-14 w-14 rounded-lg object-cover opacity-85" />
            <p className="text-sm text-slate-300">No messages yet. Pick a quick prompt to start chatting with Qori.</p>
          </div>
        ) : (
          messages.map((message) => {
            const isAssistant = message.role === 'assistant';
            return (
              <div key={message.id} className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    isAssistant
                      ? 'border border-amber-200/25 bg-amber-200/10 text-amber-50'
                      : 'border border-white/10 bg-white/10 text-slate-50'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            );
          })
        )}
      </div>

      <footer className="relative border-t border-white/10 px-4 py-4">
        <div className="mb-2 inline-flex items-center gap-2 text-xs text-slate-300">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          <span>Quick prompts</span>
        </div>
        <QoriQuickActions actions={actions} onSelect={onActionSelect} />
        <p className="mt-3 inline-flex items-center gap-1 text-[11px] text-slate-400">
          <Bot className="h-3 w-3" />
          <span>Placeholder chatbot mode. Live AI integration can be added later.</span>
        </p>
      </footer>
    </section>
  );
}

