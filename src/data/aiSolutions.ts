import type { AISolution } from '@/types';

export const aiSolutions: AISolution[] = [
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    summary: 'Context-aware chat experiences for support, onboarding, and internal help desks.',
    capabilities: ['Multi-channel deployment', 'Escalation rules', 'Conversation analytics']
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    summary: 'Task-oriented agents that reason across tools, APIs, and business logic.',
    capabilities: ['Tool calling', 'Workflow orchestration', 'Human review checkpoints']
  },
  {
    id: 'rag-assistants',
    title: 'RAG Knowledge Assistants',
    summary: 'Accurate assistants grounded in your internal documentation and structured data.',
    capabilities: ['Vector retrieval', 'Knowledge governance', 'Source-backed responses']
  },
  {
    id: 'document-ai',
    title: 'Document Intelligence',
    summary: 'Automated extraction, classification, and routing of business documents.',
    capabilities: ['OCR workflows', 'Field extraction', 'Compliance pipelines']
  },
  {
    id: 'automation',
    title: 'AI Workflow Automation',
    summary: 'Intelligent process automation for approvals, operations, and follow-up tasks.',
    capabilities: ['Rule engine integration', 'Queue-based jobs', 'Exception handling']
  },
  {
    id: 'custom-model-integration',
    title: 'Custom Model Integration',
    summary: 'Integrate OpenAI and other model providers into product-ready architectures.',
    capabilities: ['Model routing', 'Cost controls', 'Reliability and fallback patterns']
  }
];





