import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'custom-web-app-development',
    title: 'Custom Web App Development',
    summary: 'Purpose-built digital products with clean UX, scalable architecture, and measurable business impact.',
    whatItIs:
      'Noviqore designs and develops tailored web applications that align with your workflows, user journeys, and commercial objectives.',
    whoItsFor: 'Startups validating products, SMEs modernizing operations, and enterprise teams replacing legacy tools.',
    deliverables: [
      'Product discovery workshops and technical scope',
      'Responsive frontend applications with modern UI systems',
      'Secure backend foundations and API architecture',
      'Deployment-ready codebase with maintainability guidelines'
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    cta: 'Plan Your Web Product'
  },
  {
    id: 'saas-product-development',
    title: 'SaaS Product Development',
    summary: 'Multi-tenant SaaS platforms engineered for performance, feature velocity, and long-term maintainability.',
    whatItIs:
      'From MVP to mature product, Noviqore builds subscription-ready SaaS systems with role management, analytics, and extensible modules.',
    whoItsFor: 'Founders launching software products and teams scaling existing SaaS offerings.',
    deliverables: [
      'SaaS-ready architecture and domain modeling',
      'Tenant isolation, billing hooks, and permissions',
      'Admin consoles, dashboards, and event tracking',
      'Roadmap-aligned release planning and iteration support'
    ],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    cta: 'Build Your SaaS Platform'
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    summary: 'Reliable backend systems designed for scale, observability, and integration-heavy environments.',
    whatItIs:
      'We architect and implement backend services that handle core business logic, data integrity, and high-volume transactions.',
    whoItsFor: 'Companies needing robust APIs, service layers, and dependable data pipelines.',
    deliverables: [
      'Modular service architecture and domain-driven patterns',
      'Authentication, authorization, and audit trails',
      'Caching, queues, and background workers',
      'Monitoring, logging, and resilience controls'
    ],
    stack: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI'],
    cta: 'Strengthen Your Backend'
  },
  {
    id: 'api-development-integrations',
    title: 'API Development & Integrations',
    summary: 'API ecosystems that unify products, partners, and internal systems without operational bottlenecks.',
    whatItIs:
      'Noviqore creates REST APIs and integration layers for payment gateways, CRMs, ERPs, marketplaces, and internal tooling.',
    whoItsFor: 'Businesses that rely on multiple platforms and require seamless data exchange.',
    deliverables: [
      'RESTful API design and documentation',
      'Webhook and event-driven integration workflows',
      'Versioning strategy and backward compatibility',
      'Integration testing and failure recovery patterns'
    ],
    stack: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'OpenAPI'],
    cta: 'Connect Your Systems'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    summary: 'Automation systems that reduce repetitive work and increase decision speed across teams.',
    whatItIs:
      'We map business operations and apply AI-driven automation to approvals, reporting, support, document handling, and workflows.',
    whoItsFor: 'Operations-heavy businesses looking to reduce manual overhead and process delays.',
    deliverables: [
      'Workflow analysis and automation blueprint',
      'Trigger-based task orchestration',
      'Human-in-the-loop safety checkpoints',
      'Performance monitoring dashboards'
    ],
    stack: ['LLMs', 'Python', 'Node.js', 'Queue Workers', 'Cloud Functions'],
    cta: 'Automate Core Operations'
  },
  {
    id: 'ai-agents-llm-apps',
    title: 'AI Agents & LLM Apps',
    summary: 'Practical LLM-powered products that solve real business workflows, not demo-only prototypes.',
    whatItIs:
      'Noviqore builds production-grade AI assistants, copilots, and multi-step agents with reliability controls and business context.',
    whoItsFor: 'Teams shipping AI features, internal copilots, and knowledge assistants.',
    deliverables: [
      'Agent architecture with tool-calling pipelines',
      'RAG integration and context management',
      'Prompt strategy, guardrails, and evaluation loops',
      'Usage analytics and model cost visibility'
    ],
    stack: ['OpenAI APIs', 'Vector Search', 'TypeScript', 'Python', 'RAG Pipelines'],
    cta: 'Launch AI-Powered Experiences'
  },
  {
    id: 'data-pipelines',
    title: 'Data Pipelines',
    summary: 'Structured pipelines that transform fragmented data into usable insights and automations.',
    whatItIs:
      'We build ingestion, transformation, and reporting pipelines to support BI, forecasting, and AI workflows.',
    whoItsFor: 'Businesses with disconnected data sources and reporting delays.',
    deliverables: [
      'Data source mapping and pipeline architecture',
      'Scheduled ETL/ELT flows and validation rules',
      'Warehouse-ready schemas and governance checks',
      'Analytics integration for operational visibility'
    ],
    stack: ['Python', 'PostgreSQL', 'AWS Lambda', 'S3', 'Workflow Orchestration'],
    cta: 'Operationalize Your Data'
  },
  {
    id: 'erp-crm-systems',
    title: 'ERP / CRM Systems',
    summary: 'Business systems tailored to your processes, teams, and reporting needs.',
    whatItIs:
      'Noviqore creates custom ERP and CRM platforms that centralize operations, sales, finance, and service workflows.',
    whoItsFor: 'SMEs and enterprise teams replacing spreadsheet-heavy or inflexible legacy systems.',
    deliverables: [
      'Module planning for operations, sales, and finance',
      'Role-based workflows and approval chains',
      'Real-time dashboarding and reporting',
      'Integration with payment, logistics, and communication tools'
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'],
    cta: 'Build a Custom ERP/CRM'
  },
  {
    id: 'cloud-deployment',
    title: 'Cloud Deployment',
    summary: 'Cloud infrastructure setups that balance performance, security, and cost control.',
    whatItIs:
      'We deploy applications on AWS with production-ready architecture, environment strategy, and scaling policies.',
    whoItsFor: 'Teams launching new products or migrating systems to the cloud.',
    deliverables: [
      'Infrastructure design and environment segregation',
      'Deployment pipelines and release automation',
      'Security groups, secrets handling, and backups',
      'Scaling configuration and cost optimization'
    ],
    stack: ['AWS EC2', 'S3', 'RDS', 'Lambda', 'ECS'],
    cta: 'Deploy with Confidence'
  },
  {
    id: 'devops-infrastructure',
    title: 'DevOps & Infrastructure',
    summary: 'Engineering workflows that improve release quality, team velocity, and system reliability.',
    whatItIs:
      'Noviqore implements CI/CD, containerization, observability, and infrastructure standards for dependable software delivery.',
    whoItsFor: 'Product teams scaling deployments and reducing operational risk.',
    deliverables: [
      'CI/CD pipeline setup and branch strategy',
      'Containerized deployment architecture',
      'System observability and alerting',
      'Operational runbooks and reliability practices'
    ],
    stack: ['Docker', 'GitHub Actions', 'Nginx', 'AWS', 'Monitoring Tooling'],
    cta: 'Scale Your Delivery Pipeline'
  }
];




