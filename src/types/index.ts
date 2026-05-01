export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  whatItIs: string;
  whoItsFor: string;
  deliverables: string[];
  stack: string[];
  cta: string;
};

export type AISolution = {
  id: string;
  title: string;
  summary: string;
  capabilities: string[];
};

export type ProductSolution = {
  id: string;
  title: string;
  description: string;
  features: string[];
  idealFor: string;
  cta: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TechnologyCategory = {
  category: string;
  description: string;
  items: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  results: string[];
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  keywords: string[];
  sections: BlogSection[];
};




