export interface ProfileIdentity {
  name: string;
  brandHandle: string;
  availabilityLabel: string;
  roles: string[];
  heroSummary: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  university: string;
  degree: string;
  cgpa: string;
  cgpaScaleNote: string;
  graduationYear: string;
  graduationLabel: string;
  location: string;
}

export interface HeroMetric {
  label: string;
  value: string;
  sublabel: string;
}

export interface AboutCapability {
  id: string;
  title: string;
  description: string;
  iconKey: 'layers' | 'shield' | 'database' | 'sparkles' | 'cloud' | 'puzzle';
}

export interface ExperienceItem {
  id: string;
  role: string;
  badge: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectHighlight {
  index: string;
  text: string;
}

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  challenges: string[];
}

export interface ProjectItem {
  id: string;
  index: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: ProjectHighlight[];
  technologies: string[];
  visibleTechCount: number;
  liveDemoUrl?: string;
  githubUrl: string;
  caseStudy: ProjectCaseStudy;
}

export interface SkillDomain {
  id: string;
  index: string;
  title: string;
  iconKey: 'code' | 'layout' | 'server' | 'database' | 'sparkles' | 'wrench' | 'cpu';
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  index: string;
  title: string;
  issuer: string;
  status: string;
}

export const DEFAULT_IDENTITY: ProfileIdentity = {
  name: 'Alex Morgan',
  brandHandle: 'alex.dev',
  availabilityLabel: 'Open to software engineering opportunities',
  roles: ['Software Engineer', 'Full Stack Developer', 'AI / GenAI'],
  heroSummary:
    'I build secure, scalable full-stack applications and AI-powered products using React, TypeScript, Python, FastAPI, PostgreSQL, and modern AI tooling.',
  email: 'alex.morgan@example.com',
  phone: '+1 (555) 014-8920',
  githubUrl: 'https://github.com/alexmorgan-dev',
  linkedinUrl: 'https://www.linkedin.com/in/alex-morgan-dev/',
  university: 'State Institute of Technology',
  degree: 'B.Tech — Computer Science and Engineering',
  cgpa: '9.25',
  cgpaScaleNote: 'CGPA 9.25 / 10 (through 6th semester)',
  graduationYear: '2027',
  graduationLabel: 'Expected May 2027',
  location: 'San Francisco, CA',
};

export const CODE_CARD_LINES = [
  { key: 'frontend', value: '["React", "TypeScript"]' },
  { key: 'backend', value: '["Python", "FastAPI"]' },
  { key: 'database', value: '["PostgreSQL"]' },
  { key: 'auth', value: '["JWT", "RBAC"]' },
  { key: 'ai', value: '["Gemini", "AI Agents"]' },
];

export const ABOUT_PARAGRAPHS = [
  "I'm a Computer Science undergraduate with hands-on experience building full-stack web applications end to end — from database design and backend APIs to interfaces that users interact with.",
  'My recent work includes a CRM developed during my internship at Veloce Cloud Systems and MediCore, a hospital management platform that I designed and built independently.',
  'I work comfortably across the stack with React and TypeScript on the frontend, Python and FastAPI on the backend, PostgreSQL for data, and JWT-based authentication for secure access control.',
  "I'm also exploring AI-powered product development, integrating the Gemini API into assistants and automation workflows to make applications more capable and useful.",
];

export const ABOUT_CAPABILITIES: AboutCapability[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description: 'Building applications end-to-end',
    iconKey: 'layers',
  },
  {
    id: 'auth',
    title: 'Authentication & Security',
    description: 'JWT, RBAC & protected routes',
    iconKey: 'shield',
  },
  {
    id: 'database',
    title: 'Database Engineering',
    description: 'PostgreSQL & data modeling',
    iconKey: 'database',
  },
  {
    id: 'ai',
    title: 'AI / GenAI',
    description: 'Gemini-powered product features',
    iconKey: 'sparkles',
  },
  {
    id: 'cloud',
    title: 'Cloud Deployment',
    description: 'Vercel & Render deployments',
    iconKey: 'cloud',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Breaking complex problems down',
    iconKey: 'puzzle',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'veloce-intern',
    role: 'Full Stack Developer Intern',
    badge: 'Recent',
    company: 'Veloce Cloud Systems',
    period: 'March 2026 — June 2026',
    responsibilities: [
      'Developed CRM modules for Accounts, Contacts, Leads, and Opportunities using React, TypeScript, FastAPI, and PostgreSQL.',
      'Implemented JWT-based authentication and role-based access control across Login, Signup, OTP Verification, Password Reset, and protected workflows.',
      'Built responsive interfaces using React, Tailwind CSS, shadcn/ui, and React Router, with dynamic forms and validation.',
      'Integrated React frontend applications with FastAPI REST APIs, resolving routing, CORS, payload, and state-sync issues.',
      'Engineered email-based OTP verification and password recovery using SMTP integration and token-based resets.',
      'Collaborated using Git/GitHub for branching, merging, debugging, and production issue resolution.',
    ],
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT', 'Tailwind CSS', 'shadcn/ui'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'medicore',
    index: '01',
    kicker: 'Featured Project',
    title: 'MediCore',
    subtitle: 'Hospital Management System',
    description:
      'A full-stack hospital management platform supporting Admin, Doctor, Receptionist, and Patient workflows, with role-based access and an AI assistant built on Gemini.',
    highlights: [
      { index: '01', text: 'Patient management, doctor and department administration' },
      { index: '02', text: 'Appointment scheduling with diagnosis and prescription records' },
      { index: '03', text: 'JWT authentication with refresh tokens and protected, role-based routes' },
    ],
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'SQLAlchemy',
      'Pydantic',
      'JWT',
      'Axios',
      'Gemini API',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'React Hook Form',
      'Recharts',
      'Alembic',
      'Vercel',
      'Render',
    ],
    visibleTechCount: 7,
    liveDemoUrl: 'https://example.com/medicore-demo',
    githubUrl: 'https://github.com/alexmorgan-dev/medicore-hms',
    caseStudy: {
      problem:
        'Hospitals need a single system where different roles — admins, doctors, receptionists, and patients — can securely manage scheduling, records, and prescriptions without stepping on each other’s data.',
      solution:
        'Built a role-aware full-stack application with a React + TypeScript frontend and a FastAPI backend, using JWT access and refresh tokens to scope every route and API call to the signed-in role.',
      architecture:
        'React (Vite) frontend communicating over REST with a FastAPI backend backed by PostgreSQL via SQLAlchemy and Alembic migrations. Axios handles centralized request/response interception and automatic token refresh.',
      keyFeatures: [
        'Patient management, doctor and department administration',
        'Appointment scheduling with diagnosis and prescription records',
        'JWT authentication with refresh tokens and protected, role-based routes',
        'Role-specific analytics dashboards',
        'Google Gemini-powered AI assistant with conversation history, suggested queries, safety flagging, and prescription explanations',
      ],
      challenges: [
        'Keeping access tokens fresh across long sessions without interrupting the user, solved with centralized Axios interceptors and silent refresh',
        'Scoping the same UI shell to four distinct roles without duplicating logic',
      ],
    },
  },
  {
    id: 'feedback-agent',
    index: '02',
    kicker: 'Project',
    title: 'AI-Powered Customer Feedback & Response Agent',
    subtitle: 'Automated feedback pipeline',
    description:
      'An automated feedback-processing pipeline using n8n and Google Gemini for sentiment analysis, issue categorization, and actionable response generation.',
    highlights: [
      { index: '01', text: 'AI-powered sentiment analysis and issue categorization' },
      { index: '02', text: 'Personalized response generation' },
    ],
    technologies: [
      'n8n',
      'Google Gemini',
      'Slack',
      'Gmail',
      'Airtable',
      'AI Agents',
      'Workflow Automation',
    ],
    visibleTechCount: 5,
    githubUrl: 'https://github.com/alexmorgan-dev/customer-feedback-ai-agent',
    caseStudy: {
      problem:
        'Incoming customer feedback across channels is time-consuming to read, tag, and route to the right team manually.',
      solution:
        'Orchestrated a multi-agent n8n workflow that classifies sentiment and issue type, drafts a personalized response, and routes the item to the right destination automatically.',
      architecture:
        'n8n workflow calling the Google Gemini API for classification and generation, with Slack and Gmail nodes for notifications and Airtable as structured storage for processed feedback.',
      keyFeatures: [
        'AI-powered sentiment analysis and issue categorization',
        'Personalized response generation',
        'Multi-agent workflow for classification, response, and routing',
        'Slack and Gmail integration for notifications',
        'Structured feedback storage in Airtable',
      ],
      challenges: [
        'Chaining multiple AI steps reliably inside a visual workflow tool while keeping outputs structured enough to route automatically',
      ],
    },
  },
];

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'languages',
    index: '01',
    title: 'Languages',
    iconKey: 'code',
    technologies: ['Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 'frontend',
    index: '02',
    title: 'Frontend',
    iconKey: 'layout',
    technologies: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router', 'React Hook Form', 'Vite'],
  },
  {
    id: 'backend',
    index: '03',
    title: 'Backend',
    iconKey: 'server',
    technologies: ['FastAPI', 'REST APIs', 'Pydantic', 'SQLAlchemy', 'JWT Authentication'],
  },
  {
    id: 'databases',
    index: '04',
    title: 'Databases',
    iconKey: 'database',
    technologies: ['PostgreSQL', 'MySQL'],
  },
  {
    id: 'ai',
    index: '05',
    title: 'AI / GenAI',
    iconKey: 'sparkles',
    technologies: ['Google Gemini API', 'Generative AI', 'AI Agents', 'Machine Learning'],
  },
  {
    id: 'tools',
    index: '06',
    title: 'Tools / Cloud',
    iconKey: 'wrench',
    technologies: ['Git', 'GitHub', 'Axios', 'TanStack Query', 'Recharts', 'Alembic', 'Swagger/OpenAPI', 'Vercel', 'Render'],
  },
  {
    id: 'core-cs',
    index: '07',
    title: 'Core CS',
    iconKey: 'cpu',
    technologies: ['Data Structures', 'Algorithms', 'OOP', 'Problem Solving', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

export const CORE_STACK_STRIP = [
  'React',
  'TypeScript',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Git',
  'AI / GenAI',
];

export const CERTIFICATIONS: CertificationItem[] = [
  { id: 'c1', index: '01', title: 'Programming with Generative AI', issuer: 'NPTEL', status: 'Completed' },
  { id: 'c2', index: '02', title: 'Python & C Programming', issuer: 'Infosys Springboard', status: 'Completed' },
  { id: 'c3', index: '03', title: 'Applied Python Project', issuer: 'Coursera', status: 'Completed' },
  { id: 'c4', index: '04', title: 'Machine Learning Foundation Certification', issuer: 'Infosys Springboard', status: 'Completed' },
  { id: 'c5', index: '05', title: 'Explore Machine Learning using Python', issuer: 'Infosys Springboard', status: 'Completed' },
  { id: 'c6', index: '06', title: 'Reinforcement Learning', issuer: 'Infosys Springboard', status: 'Completed' },
];

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;
