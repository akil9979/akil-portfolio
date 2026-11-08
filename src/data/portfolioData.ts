export interface Project {
  id: string;
  number: string;
  title: string;
  badge: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  github: string;
  demo?: string;
  image?: string;
  gallery?: string[];
  imageAlt?: string;
  accent: 'emerald' | 'blue' | 'green' | 'amber';
  flagship?: boolean;
}

export interface SkillCategory {
  category: string;
  label: string;
  description: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliation: string;
  period: string;
  grade: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  points: string[];
}

export interface OpenSourceItem {
  title: string;
  program: string;
  period: string;
  metrics: string;
  profileUrl: string;
  contributions: string[];
}

export interface AchievementItem {
  title: string;
  event: string;
  period: string;
  role: string;
  projectUrl: string;
  description: string;
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  topics: string;
}

export const PERSONAL_INFO = {
  name: 'Akil Rizwani',
  role: 'Full-Stack Developer',
  tagline: 'Building real-time web applications, robust APIs, and intelligent full-stack systems.',
  bio: 'Computer Engineering student and full-stack developer experienced in building end-to-end web applications with React, Node.js, TypeScript, and PostgreSQL. Focused on real-time bidirectional communication, reliable database design, and practical AI integrations.',
  location: 'Valsad, Gujarat, India',
  email: 'akilrizwani627@gmail.com',
  phone: '7268904745',
  github: 'https://github.com/akil9979',
  linkedin: 'https://www.linkedin.com/in/akil-rizwani-7517a737a/',
  availability: 'Open for Internships & Junior Roles',
  resumePath: './resume.pdf',
  resumeFilename: 'Akil_Rizwani_Resume.pdf',
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'playhub',
    number: '01',
    title: 'PlayHub: Multiplayer Arena',
    badge: 'Flagship Project',
    flagship: true,
    category: 'Real-Time Multiplayer Gaming Platform',
    description:
      'A real-time multiplayer gaming platform featuring authenticated matchmaking, private rooms, player challenges, rematches, synchronized gameplay, game history, player profiles, statistics, and a global leaderboard.',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Socket.IO',
      'PostgreSQL',
      'Redux Toolkit',
      'JWT',
      'HttpOnly Cookies',
    ],
    highlights: [
      'Real-time multiplayer communication with low-latency event synchronization',
      'Authenticated room creation, private game invitations, and lobby matchmaking',
      'Server-side game state validation, turn timers, and disconnect recovery',
      'PostgreSQL persistence on Neon for player statistics and global leaderboard rankings',
      'Secure authentication workflows using signed JWTs stored in HttpOnly cookies',
    ],
    github: 'https://github.com/akil9979/PlayHub-Multiplayer-Arena',
    demo: 'https://playhub-multiplayer-arena-1.onrender.com/',
    image: './projects/playhub-preview.jpg',
    imageAlt: 'PlayHub Multiplayer Arena live interface showing real-time Tic-Tac-Toe Arena match preview',
    accent: 'emerald',
  },
  {
    id: 'connecthub',
    number: '02',
    title: 'ConnectHub: Professional Social Networking Platform',
    badge: 'Full-Stack Platform',
    category: 'Professional Social Networking Platform',
    description:
      'A full-stack social networking application for users to create posts, interact with other users, manage connections, and receive real-time notifications.',
    stack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'JWT',
      'Cloudinary',
      'Multer',
    ],
    highlights: [
      'Social networking and profile management with customizable developer profiles',
      'Posts, comments, and real-time likes',
      'Real-time notifications powered by Socket.IO for connections and engagements',
      'Connection requests management and member search with fuzzy query filtering',
      'Media uploads using Multer and Cloudinary storage CDN',
    ],
    github: 'https://github.com/akil9979/ConnectHub',
    demo: 'https://connecthub-frontend-00l6.onrender.com/',
    image: './projects/connecthub-combined.jpg',
    imageAlt: 'ConnectHub social platform composite showcase combining landing page and active community feed',
    accent: 'blue',
  },
  {
    id: 'ai-recipe-generator',
    number: '03',
    title: 'AI Recipe Generator',
    badge: 'AI & Data Engineering',
    category: 'AI-Powered Recipe & Kitchen Management',
    description:
      'An AI-powered recipe management application that generates personalized recipes using available ingredients and user preferences.',
    stack: [
      'PostgreSQL',
      'Express.js',
      'React',
      'Node.js',
      'Gemini AI',
      'Tailwind CSS',
      'JWT',
      'bcryptjs',
    ],
    highlights: [
      'Gemini AI-powered personalized recipe generation',
      'Pantry and ingredient stock tracking with expiration management',
      'Dietary restrictions and international cuisine preferences filtering',
      'Saved recipe catalog with fast full-text ingredient and title search',
      'Weekly meal planner synchronized with auto-generated shopping lists',
    ],
    github: 'https://github.com/akil9979/AI-Recipe-Generator',
    image: './projects/ai-recipe-1.webp',
    gallery: [
      './projects/ai-recipe-1.webp',
      './projects/ai-recipe-2.webp',
      './projects/ai-recipe-3.webp',
    ],
    imageAlt: 'AI Recipe Generator dashboard with recipe generation and pantry inventory manager',
    accent: 'green',
  },
  {
    id: 'movie-explorer',
    number: '04',
    title: 'Movie Explorer',
    badge: 'Frontend & State Architecture',
    category: 'Movie Discovery & Exploration Web App',
    description:
      'A movie discovery application that allows users to explore movies and access detailed movie information.',
    stack: [
      'React',
      'JavaScript',
      'Redux Toolkit',
      'Vite',
      'Tailwind CSS',
      'React Router',
    ],
    highlights: [
      'Movie discovery, trending titles catalog, and dynamic genre browsing',
      'Third-party movie API integration with robust error handling and debounce',
      'Global state management using Redux Toolkit slices for favorites and search cache',
      'Fluid responsive interface engineered with Vite and mobile-first Tailwind styling',
    ],
    github: 'https://github.com/akil9979/Movie_explorer',
    accent: 'amber',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend',
    label: 'Client-Side Engineering',
    description: 'Component architecture, responsive layouts, and state management.',
    skills: [
      { name: 'React', icon: 'Code2' },
      { name: 'JavaScript', icon: 'FileCode' },
      { name: 'TypeScript', icon: 'Code' },
      { name: 'HTML', icon: 'Layout' },
      { name: 'CSS', icon: 'Palette' },
      { name: 'Tailwind CSS', icon: 'Wind' },
      { name: 'Redux Toolkit', icon: 'Layers' },
    ],
  },
  {
    category: 'Backend',
    label: 'Server & APIs',
    description: 'Scalable services, RESTful APIs, and real-time Socket communication.',
    skills: [
      { name: 'Node.js', icon: 'Server' },
      { name: 'Express.js', icon: 'Cpu' },
      { name: 'REST APIs', icon: 'Network' },
      { name: 'Socket.IO', icon: 'Radio' },
      { name: 'JWT', icon: 'ShieldCheck' },
    ],
  },
  {
    category: 'Database',
    label: 'Data Persistence',
    description: 'Relational schemas, ACID guarantees, and document stores.',
    skills: [
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'HardDrive' },
    ],
  },
  {
    category: 'Tools',
    label: 'Developer Tooling',
    description: 'Version control, API testing, debugging, and IDE productivity.',
    skills: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'Postman', icon: 'Send' },
      { name: 'VS Code', icon: 'Terminal' },
    ],
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'B.E in Computer Engineering',
  institution: 'GIDC Degree Engineering College, Navsari',
  affiliation: 'Gujarat Technological University (GTU)',
  period: '2023 – 2027',
  grade: 'CGPA: 8.4 / 10',
  highlights: [
    'Core coursework in Data Structures & Algorithms, OOP, DBMS, and Computer Networks',
    'Consistent 8.4/10 cumulative GPA while actively shipping real-world web applications',
    'Led college hackathon teams and collaborated on open-source initiatives',
  ],
};

export const EXPERIENCE_DATA: ExperienceItem = {
  role: 'Full Stack Development Intern',
  company: 'UpSkill Campus',
  period: '2025',
  type: 'Full-Stack Development Training Program',
  description:
    'Developed responsive web interfaces and RESTful APIs through project-based full-stack engineering.',
  points: [
    'Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js',
    'Built and consumed RESTful APIs with Node.js and Express.js for server-side logic',
    'Implemented authentication, CRUD operations, database integration, and client-server sync',
    'Used Git/GitHub for version control and followed collaborative development practices',
  ],
};

export const OPEN_SOURCE_DATA: OpenSourceItem = {
  title: 'Open Source Contributor',
  program: 'GirlScript Summer of Code (GSSoC\'26)',
  period: '2026',
  metrics: '8 merged pull requests across 3 repositories',
  profileUrl: 'https://gssoc.girlscript.org/profile/21a619ef-cecb-42a2-91b5-ebceffef988a',
  contributions: [
    'Enhanced dark-mode readability, contrast accessibility, and cross-browser layouts',
    'Implemented reservation validation and dynamic menu preview logic',
    'Resolved admin inventory stock-out handling and graceful error states',
    'Engineered drag-and-drop resume upload functionality with file validation',
  ],
};

export const ACHIEVEMENT_DATA: AchievementItem = {
  title: 'Hackathon Finalist & Team Leader',
  event: 'Odoo × LDCE Ahmedabad Hackathon 2026',
  period: 'Aug 2026',
  role: 'Team Leader',
  projectUrl: 'https://github.com/akil9979/GlobeTrotter',
  description:
    'Selected for the final round and led the team to build GlobeTrotter, a collaborative travel platform.',
  tags: ['Team Leader', 'Finalist', 'GlobeTrotter', 'React & Node.js'],
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Emerging Technologies (AI, ML, Deep Learning, SAP BTP)',
    issuer: 'SAP',
    topics: 'Enterprise AI & Machine Learning Foundations',
  },
  {
    title: 'Python, AI & Data Analysis',
    issuer: 'Edunet Foundation',
    topics: 'Python Data Workflows & Applied AI Models',
  },
];
