import type { TechnologyCategory } from '@/types';

export const technologyCategories: TechnologyCategory[] = [
  {
    category: 'Frontend',
    description: 'High-performance user interfaces focused on speed, accessibility, and conversion.',
    items: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    description: 'Scalable backend services built for reliability, integrations, and clear domain boundaries.',
    items: ['Node.js', 'Express.js', 'NestJS', 'Python', 'FastAPI', 'Flask']
  },
  {
    category: 'Databases',
    description: 'Data architecture optimized for transactional integrity and analytical flexibility.',
    items: ['MongoDB', 'MySQL', 'PostgreSQL']
  },
  {
    category: 'Cloud',
    description: 'Cloud-native infrastructure for secure deployment, scaling, and operational resilience.',
    items: ['AWS EC2', 'S3', 'RDS', 'Lambda', 'ECS']
  },
  {
    category: 'AI',
    description: 'Applied AI capabilities for automation, insight generation, and intelligent product features.',
    items: ['LLMs', 'AI Agents', 'RAG', 'Automation Pipelines', 'Model Integrations']
  },
  {
    category: 'DevOps',
    description: 'Delivery engineering focused on release confidence, observability, and uptime.',
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'Nginx']
  }
];





