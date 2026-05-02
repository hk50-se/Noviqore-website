import { blogPosts } from '@/data/blog';
import { caseStudies } from '@/data/caseStudies';
import { processSteps } from '@/data/process';
import { productSolutions } from '@/data/products';
import { services } from '@/data/services';
import { technologyCategories } from '@/data/technologies';
import { aiSolutions } from '@/data/aiSolutions';
import { siteConfig, contactBudgetRanges } from '@/lib/constants';

export type QoriKnowledgeEntry = {
  id: string;
  title: string;
  path: string;
  body: string;
  tags: string[];
};

const serviceKnowledge: QoriKnowledgeEntry[] = services.map((service) => ({
  id: `service-${service.id}`,
  title: service.title,
  path: '/services',
  body: [
    service.summary,
    service.whatItIs,
    service.whoItsFor,
    ...service.deliverables,
    ...service.stack
  ].join(' '),
  tags: [service.title, ...service.stack, 'service', 'development', 'engineering']
}));

const aiKnowledge: QoriKnowledgeEntry[] = aiSolutions.map((item) => ({
  id: `ai-${item.id}`,
  title: item.title,
  path: '/ai-solutions',
  body: [item.summary, ...item.capabilities].join(' '),
  tags: [item.title, ...item.capabilities, 'ai', 'llm', 'automation']
}));

const productKnowledge: QoriKnowledgeEntry[] = productSolutions.map((item) => ({
  id: `product-${item.id}`,
  title: item.title,
  path: '/products',
  body: [item.description, ...item.features, item.idealFor].join(' '),
  tags: [item.title, ...item.features, 'product', 'solution']
}));

const caseStudyKnowledge: QoriKnowledgeEntry[] = caseStudies.map((item) => ({
  id: `case-${item.slug}`,
  title: item.title,
  path: '/case-studies',
  body: [item.summary, item.problem, item.solution, ...item.results, ...item.techStack].join(' '),
  tags: [item.title, ...item.techStack, 'case study']
}));

const technologyKnowledge: QoriKnowledgeEntry[] = technologyCategories.map((item) => ({
  id: `tech-${item.category.toLowerCase()}`,
  title: `${item.category} Stack`,
  path: '/technologies',
  body: [item.description, ...item.items].join(' '),
  tags: [item.category, ...item.items, 'stack', 'technology']
}));

const processKnowledge: QoriKnowledgeEntry = {
  id: 'process-overview',
  title: 'Noviqore Delivery Process',
  path: '/process',
  body: processSteps.map((step) => `${step.step}. ${step.title}: ${step.description}`).join(' '),
  tags: ['process', 'timeline', 'delivery', 'qa', 'deployment']
};

const blogKnowledge: QoriKnowledgeEntry[] = blogPosts.map((post) => ({
  id: `blog-${post.slug}`,
  title: post.title,
  path: `/blog/${post.slug}`,
  body: [post.excerpt, post.description, ...post.keywords, ...post.sections.flatMap((section) => section.paragraphs)].join(' '),
  tags: [post.category, ...post.keywords, 'blog', 'article']
}));

const companyKnowledge: QoriKnowledgeEntry[] = [
  {
    id: 'company-overview',
    title: `${siteConfig.name} Overview`,
    path: '/about',
    body:
      `${siteConfig.name} is a software and AI solutions company focused on scalable products, clean backend systems, modern interfaces, and intelligent automation. ` +
      `Key offerings include custom software development, AI automation, backend/API systems, cloud architecture, ERP/CRM solutions, and SaaS platforms.`,
    tags: ['noviqore', 'company', 'about', 'software', 'ai']
  },
  {
    id: 'contact-overview',
    title: 'Contact and Consultation',
    path: '/contact',
    body:
      `Book a free consultation through the contact form. Email: ${siteConfig.email}. Location: ${siteConfig.location}. ` +
      `Representative budget ranges include ${contactBudgetRanges.join(', ')}.`,
    tags: ['contact', 'consultation', 'budget', 'email', 'location']
  }
];

export const qoriKnowledgeBase: QoriKnowledgeEntry[] = [
  ...companyKnowledge,
  processKnowledge,
  ...serviceKnowledge,
  ...aiKnowledge,
  ...productKnowledge,
  ...caseStudyKnowledge,
  ...technologyKnowledge,
  ...blogKnowledge
];
