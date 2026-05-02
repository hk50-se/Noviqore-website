'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bot, Loader2, SendHorizontal, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import { QoriQuickActions, type QoriQuickAction } from '@/components/chatbot/QoriQuickActions';

export type QoriReference = {
  title: string;
  path: string;
};

export type QoriMessage = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  references?: QoriReference[];
};

type QoriChatPanelProps = {
  messages: QoriMessage[];
  actions: QoriQuickAction[];
  onActionSelect: (action: QoriQuickAction) => void;
  draft: string;
  isLoading: boolean;
  onDraftChange: (value: string) => void;
  onSubmit: (prompt: string) => void;
};

export function QoriChatPanel({
  messages,
  actions,
  onActionSelect,
  draft,
  isLoading,
  onDraftChange,
  onSubmit
}: QoriChatPanelProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const normalizedDraft = useMemo(() => draft.trim(), [draft]);

  useEffect(() => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
  }, [messages, isLoading]);

  function handleSend() {
    if (!normalizedDraft || isLoading) return;
    onSubmit(normalizedDraft);
  }

  return (
    <section
      aria-label="Qori chatbot panel"
      className="relative flex h-[min(36rem,calc(100vh-8.5rem))] w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-3xl border border-amber-200/25 bg-zinc-950/90 shadow-[0_0_0_1px_rgba(251,191,36,0.15),0_28px_48px_rgba(12,10,9,0.65)] backdrop-blur-xl"
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

      <div ref={scrollerRef} className="relative flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
            <Image src="/brand/qori-mascot.png" alt="" width={56} height={56} className="h-14 w-14 rounded-lg object-cover opacity-85" />
            <p className="text-sm text-zinc-300">No messages yet. Pick a quick prompt to start chatting with Qori.</p>
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
                      : 'border border-white/10 bg-white/10 text-zinc-50'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                  {isAssistant && message.references?.length ? (
                    <div className="mt-3 space-y-1 border-t border-white/10 pt-2">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-amber-100/90">Related Pages</p>
                      <ul className="space-y-1">
                        {message.references.map((reference) => (
                          <li key={`${message.id}-${reference.path}`} className="text-xs text-amber-100">
                            <Link href={reference.path} className="hover:text-amber-50 hover:underline">
                              {reference.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })
        )}
        {isLoading ? (
          <div className="flex justify-start">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-amber-200/25 bg-amber-200/10 px-3 py-2 text-xs text-amber-100">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              <span>Qori is thinking...</span>
            </div>
          </div>
        ) : null}
      </div>

      <footer className="relative border-t border-white/10 px-4 py-4">
        <div className="mb-2 inline-flex items-center gap-2 text-xs text-zinc-300">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          <span>Quick prompts</span>
        </div>
        <QoriQuickActions actions={actions} onSelect={onActionSelect} />
        <form
          className="mt-3"
          onSubmit={(event) => {
            event.preventDefault();
            handleSend();
          }}
        >
          <label htmlFor="qori-message" className="sr-only">
            Ask Qori a question
          </label>
          <div className="flex items-center gap-2">
            <input
              id="qori-message"
              type="text"
              value={draft}
              onChange={(event) => onDraftChange(event.target.value)}
              placeholder="Type your question..."
              maxLength={320}
              aria-label="Type your question for Qori"
              className="h-10 w-full rounded-xl border border-white/15 bg-black/30 px-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-amber-200/45 focus:outline-none focus:ring-2 focus:ring-amber-200/20"
            />
            <button
              type="submit"
              aria-label="Send message to Qori"
              disabled={!normalizedDraft || isLoading}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200/30 bg-amber-300/15 text-amber-100 transition hover:bg-amber-300/25 disabled:cursor-not-allowed disabled:opacity-55"
            >
              <SendHorizontal className="h-4 w-4" />
            </button>
          </div>
        </form>
        <p className="mt-3 inline-flex items-center gap-1 text-[11px] text-zinc-400">
          <Bot className="h-3 w-3" />
          <span>Website knowledge mode. AI model integration can be added for deeper reasoning.</span>
        </p>
      </footer>
    </section>
  );
}


