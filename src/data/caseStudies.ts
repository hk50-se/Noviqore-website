import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'erp-automation-platform',
    title: 'ERP Automation Platform',
    label: 'Representative solution',
    summary: 'Built a modular ERP system to unify finance, inventory, procurement, and approvals for a growing operations team.',
    problem:
      'The client managed core operations across disconnected tools, creating delays, duplicate entries, and weak reporting visibility.',
    solution:
      'Noviqore designed a custom ERP with workflow automation, role-based dashboards, and API integrations for accounting and logistics.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    results: [
      'Created a single operational source of truth across teams',
      'Reduced manual process overhead through automated approvals',
      'Enabled faster decision-making with real-time dashboards'
    ]
  },
  {
    slug: 'fintech-integration-platform',
    title: 'Fintech Integration Platform',
    label: 'Example project type',
    summary: 'Delivered an API-first platform connecting payment providers, reconciliation workflows, and risk checks.',
    problem:
      'A fintech team needed stable integrations with multiple third-party services while maintaining transaction traceability.',
    solution:
      'Noviqore implemented a microservice-oriented integration layer with audit logs, retry queues, and webhook normalization.',
    techStack: ['NestJS', 'PostgreSQL', 'Redis', 'AWS Lambda', 'GitHub Actions'],
    results: [
      'Improved integration reliability under variable third-party response behavior',
      'Strengthened compliance support through auditable transaction flows',
      'Accelerated partner onboarding with reusable integration modules'
    ]
  },
  {
    slug: 'ai-knowledge-assistant',
    title: 'AI Knowledge Assistant',
    label: 'Representative solution',
    summary: 'Developed a RAG-based assistant for internal operations, policy search, and support response drafting.',
    problem:
      'Teams lost time searching across fragmented documents and needed consistent, policy-aligned answers.',
    solution:
      'Noviqore built an AI assistant with source-grounded retrieval, role-aware context access, and confidence-aware responses.',
    techStack: ['Next.js', 'Python', 'Vector Store', 'OpenAI APIs', 'S3'],
    results: [
      'Shortened document lookup cycles for internal support teams',
      'Improved consistency of operational guidance across departments',
      'Introduced safer AI adoption with observability and review controls'
    ]
  },
  {
    slug: 'marketplace-admin-dashboard',
    title: 'Marketplace and Admin Dashboard',
    label: 'Example project type',
    summary: 'Engineered a marketplace backend and operational dashboard for vendor lifecycle and transaction monitoring.',
    problem:
      'The business lacked centralized visibility into vendor performance, order issues, and operational bottlenecks.',
    solution:
      'Noviqore delivered a dashboard ecosystem with role-specific views, analytics panels, and event-driven alerting.',
    techStack: ['React', 'Express', 'MongoDB', 'Nginx', 'Docker'],
    results: [
      'Enabled faster response to vendor and order exceptions',
      'Improved administrative control with configurable workflows',
      'Established measurable operational KPIs for leadership'
    ]
  },
  {
    slug: 'cloud-deployment-optimization',
    title: 'Cloud Deployment and Optimization',
    label: 'Representative solution',
    summary: 'Migrated workloads to AWS with better deployment reliability, resource scaling, and operational cost governance.',
    problem:
      'Frequent deployment friction and inconsistent runtime behavior slowed releases and affected system confidence.',
    solution:
      'Noviqore re-architected the infrastructure using containerized services, CI/CD pipelines, and environment hardening practices.',
    techStack: ['AWS ECS', 'RDS', 'S3', 'CI/CD', 'Docker'],
    results: [
      'Improved release consistency through automated deployment workflows',
      'Stabilized production performance with monitoring and scaling rules',
      'Improved cost visibility through structured infrastructure governance'
    ]
  }
];



