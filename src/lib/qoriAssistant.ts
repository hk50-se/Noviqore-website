import { qoriKnowledgeBase, type QoriKnowledgeEntry } from '@/lib/qoriKnowledge';

type QoriAnswer = {
  reply: string;
  references: Array<{ title: string; path: string }>;
};

const stopWords = new Set([
  'the',
  'a',
  'an',
  'to',
  'for',
  'of',
  'and',
  'or',
  'in',
  'on',
  'is',
  'are',
  'can',
  'i',
  'we',
  'you',
  'with',
  'about',
  'me',
  'my',
  'your'
]);

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function tokenize(text: string) {
  return Array.from(
    new Set(
      normalize(text)
        .split(' ')
        .filter((token) => token.length > 2 && !stopWords.has(token))
    )
  );
}

function scoreEntry(entry: QoriKnowledgeEntry, tokens: string[], query: string) {
  const haystack = normalize(`${entry.title} ${entry.tags.join(' ')} ${entry.body}`);
  let score = 0;

  for (const token of tokens) {
    if (entry.title.toLowerCase().includes(token)) score += 4;
    if (entry.tags.some((tag) => tag.toLowerCase().includes(token))) score += 3;
    if (haystack.includes(token)) score += 1;
  }

  if (haystack.includes(normalize(query))) {
    score += 6;
  }

  return score;
}

function summarize(entry: QoriKnowledgeEntry) {
  const sentence = entry.body.split('. ')[0] ?? entry.body;
  return sentence.length > 170 ? `${sentence.slice(0, 167)}...` : sentence;
}

function cannedResponse(query: string): QoriAnswer | null {
  const q = normalize(query);

  if (/(hello|hi|hey)/.test(q)) {
    return {
      reply:
        'Hi. I can help with services, AI solutions, process, technologies, case studies, and project planning. Ask anything specific and I will guide you.',
      references: [
        { title: 'Services', path: '/services' },
        { title: 'AI Solutions', path: '/ai-solutions' },
        { title: 'Process', path: '/process' }
      ]
    };
  }

  if (/(price|pricing|budget|cost)/.test(q)) {
    return {
      reply:
        'Noviqore provides scoped custom builds, so pricing depends on requirements. You can choose a budget range on the contact form and get a tailored roadmap after consultation.',
      references: [
        { title: 'Contact', path: '/contact' },
        { title: 'Services', path: '/services' }
      ]
    };
  }

  if (/(timeline|how long|duration|process|steps)/.test(q)) {
    return {
      reply:
        'Typical flow: discovery call, requirement analysis, technical planning, UI/UX design, sprint development, QA, deployment, monitoring, and scaling.',
      references: [{ title: 'Process', path: '/process' }]
    };
  }

  if (/(contact|email|location|call)/.test(q)) {
    return {
      reply:
        'You can reach Noviqore through the contact page. Email is hello@noviqore.com and services are available from Lahore, Pakistan with remote delivery worldwide.',
      references: [{ title: 'Contact', path: '/contact' }]
    };
  }

  return null;
}

export function answerWithWebsiteKnowledge(query: string): QoriAnswer {
  const canned = cannedResponse(query);
  if (canned) {
    return canned;
  }

  const tokens = tokenize(query);

  if (tokens.length === 0) {
    return {
      reply:
        'I can help if you share a specific question, such as website development, AI assistants, backend APIs, cloud deployment, or project process.',
      references: [{ title: 'Services', path: '/services' }]
    };
  }

  const ranked = qoriKnowledgeBase
    .map((entry) => ({ entry, score: scoreEntry(entry, tokens, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (ranked.length === 0) {
    return {
      reply:
        "I couldn't find a precise match in the current site content, but I can still help you scope the project. Tell me your goal and I will suggest a practical build path.",
      references: [{ title: 'Contact', path: '/contact' }]
    };
  }

  const references = ranked.map(({ entry }) => ({ title: entry.title, path: entry.path }));
  const bullets = ranked.map(({ entry }, index) => `${index + 1}. ${entry.title}: ${summarize(entry)}`);

  const reply = `Here is what I found on Noviqore:\n${bullets.join('\n')}\n\nIf you want, I can narrow this into a recommended stack and delivery plan for your use case.`;

  return {
    reply,
    references
  };
}
