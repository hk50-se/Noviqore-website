'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { QoriChatButton } from '@/components/chatbot/QoriChatButton';
import { QoriChatPanel, type QoriMessage } from '@/components/chatbot/QoriChatPanel';
import type { QoriQuickAction } from '@/components/chatbot/QoriQuickActions';

const quickActions: QoriQuickAction[] = [
  { id: 'website', label: 'I need a website', prompt: 'I need a website' },
  { id: 'ai-solution', label: 'I need an AI solution', prompt: 'I need an AI solution' },
  { id: 'backend-api', label: 'I need a backend/API', prompt: 'I need a backend/API' },
  { id: 'cloud-deployment', label: 'I need cloud deployment', prompt: 'I need cloud deployment' },
  { id: 'discuss-project', label: 'I want to discuss a project', prompt: 'I want to discuss a project' }
];

const assistantReplies: Record<string, string> = {
  website:
    'Great. Noviqore can plan, design, and build high-performance websites and web apps with strong SEO and conversion-focused UX.',
  'ai-solution':
    'Excellent direction. Noviqore builds AI assistants, LLM apps, automation workflows, and enterprise-ready AI systems with reliability controls.',
  'backend-api':
    'Noviqore can architect scalable backend systems, clean API layers, and integration pipelines for long-term product growth.',
  'cloud-deployment':
    'We can help deploy and scale your platform on AWS with secure CI/CD, observability, and cost-aware infrastructure planning.',
  'discuss-project':
    'Perfect. Share your goals in the contact form and Noviqore will follow up with scope recommendations and a delivery plan.'
};

const initialMessage: QoriMessage = {
  id: 'qori-initial',
  role: 'assistant',
  content:
    "Hi, I'm Qori 👋 I can help you explore Noviqore's services, AI solutions, project process, and how we can build your product."
};

export function QoriChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<QoriMessage[]>([initialMessage]);
  const shouldReduceMotion = useReducedMotion();

  const panelMotion = useMemo(
    () => ({
      initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 },
      animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 },
      exit: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }
    }),
    [shouldReduceMotion]
  );

  function handleQuickAction(action: QoriQuickAction) {
    const userMessage: QoriMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: action.prompt
    };

    const assistantMessage: QoriMessage = {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: assistantReplies[action.id] ?? 'Thanks. Tell us more about your project requirements.'
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);

    // TODO: Replace this placeholder logic with OpenAI/LLM API integration
    // and persist threaded conversation state with your backend.
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
            <QoriChatPanel messages={messages} actions={quickActions} onActionSelect={handleQuickAction} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-auto">
        <QoriChatButton isOpen={isOpen} onClick={() => setIsOpen((value) => !value)} />
      </div>
    </div>
  );
}


