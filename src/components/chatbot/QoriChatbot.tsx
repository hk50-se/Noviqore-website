'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { QoriChatButton } from '@/components/chatbot/QoriChatButton';
import { QoriChatPanel, type QoriMessage } from '@/components/chatbot/QoriChatPanel';
import type { QoriQuickAction } from '@/components/chatbot/QoriQuickActions';

type QoriApiResponse = {
  ok?: boolean;
  reply?: string;
  references?: Array<{ title: string; path: string }>;
  message?: string;
};

const quickActions: QoriQuickAction[] = [
  { id: 'website', label: 'I need a website', prompt: 'I need a website' },
  { id: 'ai-solution', label: 'I need an AI solution', prompt: 'I need an AI solution' },
  { id: 'backend-api', label: 'I need a backend/API', prompt: 'I need a backend/API' },
  { id: 'cloud-deployment', label: 'I need cloud deployment', prompt: 'I need cloud deployment' },
  { id: 'discuss-project', label: 'I want to discuss a project', prompt: 'I want to discuss a project' }
];

const initialMessage: QoriMessage = {
  id: 'qori-initial',
  role: 'assistant',
  content:
    "Hi, I'm Qori \u{1F44B} I can help you explore Noviqore's services, AI solutions, project process, and how we can build your product."
};

function buildMessageId(role: QoriMessage['role']) {
  return `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function QoriChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<QoriMessage[]>([initialMessage]);
  const [draft, setDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const panelMotion = useMemo(
    () => ({
      initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 },
      animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 },
      exit: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }
    }),
    [shouldReduceMotion]
  );

  async function submitPrompt(prompt: string) {
    const query = prompt.trim();
    if (!query || isLoading) return;

    const userMessage: QoriMessage = {
      id: buildMessageId('user'),
      role: 'user',
      content: query
    };

    setDraft('');
    setMessages((current) => [...current, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/qori', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          history: messages.slice(-10).map((message) => ({
            role: message.role,
            content: message.content
          }))
        })
      });

      const data = (await response.json()) as QoriApiResponse;

      if (!response.ok || !data.reply) {
        throw new Error(data.message ?? 'Qori could not process your request right now.');
      }

      const assistantMessage: QoriMessage = {
        id: buildMessageId('assistant'),
        role: 'assistant',
        content: data.reply,
        references: data.references
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      const fallbackMessage: QoriMessage = {
        id: buildMessageId('assistant'),
        role: 'assistant',
        content:
          error instanceof Error
            ? `I hit a connection issue: ${error.message}`
            : 'I hit a connection issue. Please try again or use the contact page for immediate follow-up.'
      };
      setMessages((current) => [...current, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleQuickAction(action: QoriQuickAction) {
    void submitPrompt(action.prompt);
  }

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[70] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            {...panelMotion}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.28, ease: 'easeOut' }}
            className="pointer-events-auto"
          >
            <QoriChatPanel
              messages={messages}
              actions={quickActions}
              onActionSelect={handleQuickAction}
              draft={draft}
              onDraftChange={setDraft}
              onSubmit={(value) => void submitPrompt(value)}
              isLoading={isLoading}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-auto">
        <QoriChatButton isOpen={isOpen} onClick={() => setIsOpen((value) => !value)} />
      </div>
    </div>
  );
}
