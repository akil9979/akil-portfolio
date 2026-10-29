import { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, Braces, Check, Code2, Database, Download,
  ExternalLink, Github, GraduationCap, Mail, Menu, Monitor, Send, Server,
  Sparkles, Trophy, X, Zap, BriefcaseBusiness, GitPullRequest,
  Phone, MapPin, FileText,
} from 'lucide-react';

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  status: string;
  accent: string;
  icon: string;
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'PlayHub',
    category: 'Real-time multiplayer gaming platform',
    description: 'A multiplayer platform with authenticated matchmaking, private rooms, player challenges, rematches, synchronized Tic-Tac-Toe, persistent game history, player statistics and a global leaderboard.',
    stack: ['React', 'TypeScript', 'Socket.IO', 'PostgreSQL', 'Redux Toolkit'],
    status: 'Featured', accent: 'violet', icon: '◈',
    github: 'https://github.com/akil9979/PlayHub-Multiplayer-Arena',
    demo: 'https://playhub-multiplayer-arena-1.onrender.com/',
  },
  {
    number: '02',
    title: 'ConnectHub',
    category: 'Full-stack social networking platform',
    description: 'A LinkedIn-inspired social platform with posts, comments, likes, profile management, connections, search, live notifications and media uploads.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Cloudinary'],
    status: 'Live', accent: 'blue', icon: '↗',
    github: 'https://github.com/akil9979/ConnectHub',
    demo: 'https://connecthub-frontend-00l6.onrender.com/',
  },
  {
    number: '03',
    title: 'Multiplayer Tic-Tac-Toe',
    category: 'Room-based real-time game',
    description: 'A real-time game with room matchmaking, JWT authentication, server-side move validation and persisted match results.',
    stack: ['React', 'TypeScript', 'Node.js', 'Socket.IO', 'PostgreSQL'],
    status: 'Completed', accent: 'pink', icon: '⌗',
    github: 'https://github.com/akil9979/Multiplayer-Tic-Tac-Toe',
  },
  {
    number: '04',
    title: 'Movie Explorer',
    category: 'Movie discovery web app',
    description: 'A responsive movie discovery experience with search, filtering and detailed movie information, built with reusable React components and global state.',
    stack: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'React Router'],
    status: 'Completed', accent: 'orange', icon: '▣',
    github: 'https://github.com/akil9979/Movie_explorer',
  },
];

const skillGroups = [
  { title: 'Frontend', icon: Monitor, skills: ['React.js', 'TypeScript', 'JavaScript ES6+', 'HTML', 'CSS', 'Tailwind CSS', 'Redux Toolkit', 'React Router'] },
  { title: 'Backend', icon: Server, skills: ['Node.js', 'Express.js', 'Socket.IO', 'REST APIs', 'JWT Authentication', 'CRUD workflows'] },
  { title: 'Databases', icon: Database, skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Data modelling'] },
  { title: 'Languages & tools', icon: Braces, skills: ['Java', 'Python', 'C', 'Git', 'GitHub', 'Postman', 'VS Code'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [copied, setCopied] = useState(false);
  const email = 'akilrizwani627@gmail.com';
  const phone = '7268904745';
  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.status === filter);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }
    targets.forEach((target) => target.classList.add('reveal'));
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Akil Rizwani home">akil<span>.</span></a>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {[['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Experience', '#journey'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="/resume.pdf" download="Akil_Rizwani_Resume.pdf"><Download size={15} /> Resume</a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO INTERNSHIPS & JUNIOR ROLES</div>
            <p className="hero-kicker">Hey there, I'm</p>
            <h1>Akil <span>Rizwani</span><i>.</i></h1>
            <h2>Full-stack developer <span className="muted-slash">/</span> problem solver</h2>
            <p className="hero-description">Computer Engineering student and full-stack developer building responsive web applications, secure APIs and real-time multiplayer experiences with React, Node.js, TypeScript and PostgreSQL.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href="#contact"><Mail size={16} /> Get in touch</a>
            </div>
            <div className="hero-actions hero-resume-action">
              <a className="resume-inline" href="/resume.pdf" download="Akil_Rizwani_Resume.pdf"><FileText size={15} /> Download my resume <ArrowUpRight size={14} /></a>
            </div>
            <div className="social-row">
              <a href="https://github.com/akil9979" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/akil-rizwani-7517a737a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="linkedin-mark">in</span></a>
              <a href={`mailto:${email}`} aria-label="Email"><Mail size={18} /></a>
              <span className="social-note"><MapPin size={12} /> Valsad, Gujarat, India</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Portrait and developer code card">
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img src="/akil-portrait.webp" alt="Portrait of Akil Rizwani" width="1000" height="1000" fetchPriority="high" decoding="async" />
              <div className="portrait-gradient" />
              <div className="portrait-caption"><span className="status-dot" /> BUILDING REAL-WORLD PRODUCTS</div>
            </div>
            <div className="floating-chip chip-top"><Sparkles size={14} /> Build · Test · Improve</div>
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>developer.ts</small></div>
              <pre><code><span className="code-purple">const</span> developer = {'{'}{'\n'}  name: <span className="code-green">'Akil Rizwani'</span>,{'\n'}  focus: <span className="code-orange">'Full-stack'</span>,{'\n'}  stack: [<span className="code-green">'React'</span>,{'\n'}          <span className="code-green">'Node.js'</span>, <span className="code-green">'PostgreSQL'</span>],{'\n'}  mode: <span className="code-orange">'Always building'</span>{'\n'}{'}'};</code></pre>
              <div className="code-footer"><span><span className="status-dot" /> learning by shipping</span><span>TypeScript</span></div>
            </div>
            <div className="floating-chip chip-bottom"><Code2 size={15} /> APIs · Realtime · Data</div>
            <div className="art-index">01 <span /> 04</div>
          </div>
          <a className="scroll-hint" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDownRight size={13} /></a>
        </section>

        <section className="intro-strip section-wrap" id="about" data-reveal>
          <div className="strip-label"><span>01 / ABOUT</span><div className="tiny-line" /></div>
          <div className="intro-content">
            <h2>I build for the <span>real world—not just the happy path.</span></h2>
            <div className="intro-bottom">
              <p>I'm studying Computer Engineering at GIDC Degree Engineering College under GTU. I enjoy taking features end to end: designing responsive interfaces, building REST APIs, handling authentication and data, and thinking through the failure cases that make applications reliable.</p>
              <div className="quick-facts">
                <div><strong>8.4<span>/10</span></strong><small>CGPA</small></div>
                <div><strong>2027</strong><small>Graduation</small></div>
                <div><strong>8 PRs</strong><small>Open-source merged</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading" data-reveal>
            <div><div className="section-label">02 / SELECTED WORK</div><h2>Projects with a <span>purpose.</span></h2><p>Real features, real trade-offs, and lessons learned by building end-to-end.</p></div>
            <div className="project-filters" aria-label="Filter projects">{['All', 'Featured', 'Live', 'Completed'].map((item) => <button className={filter === item ? 'filter active' : 'filter'} key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div>
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => <article className={`project-card accent-${project.accent}`} key={project.title} data-reveal>
              <div className="project-card-top"><span className="project-number">{project.number} / 04</span><span className="project-status"><i />{project.status}</span></div>
              <div className="project-symbol" aria-hidden="true">{project.icon}</div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> Source code <ArrowUpRight size={14} /></a>
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>}
              </div>
            </article>)}
          </div>
          <div className="project-note"><Sparkles size={16} /><span>PlayHub includes JWT authentication with HttpOnly cookies, PostgreSQL persistence, server-side game validation, disconnect handling and production deployment configuration.</span></div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading skills-heading" data-reveal><div><div className="section-label">03 / TOOLKIT</div><h2>The tools behind <span>the work.</span></h2><p>Grouped by how I use them to ship complete applications.</p></div><div className="skills-aside"><Zap size={17} /><span>Practical skills over buzzwords.</span></div></div>
          <div className="skills-grid">{skillGroups.map(({ title, icon: Icon, skills }) => <article className="skill-card" key={title} data-reveal><div className="skill-card-heading"><span><Icon size={18} /></span><h3>{title}</h3><small>{String(skills.length).padStart(2, '0')} skills</small></div><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
        </section>

        <section className="journey-section section-wrap" id="journey">
          <div className="section-label">04 / EXPERIENCE & COMMUNITY</div><h2 data-reveal>Work, learning and <span>follow-through.</span></h2>
          <div className="journey-grid journey-grid-four">
            <article className="journey-card" data-reveal><div className="journey-icon"><GraduationCap size={20} /></div><div className="journey-meta">EDUCATION <span>2023 — 2027</span></div><h3>B.Tech Computer Engineering</h3><p>GIDC Degree Engineering College, Navsari</p><p className="journey-sub">Gujarat Technological University</p><div className="journey-foot">CGPA <strong>8.4 / 10</strong></div></article>
            <article className="journey-card" data-reveal><div className="journey-icon work"><BriefcaseBusiness size={20} /></div><div className="journey-meta">EXPERIENCE <span>2025</span></div><h3>Full Stack Development Intern</h3><p>UpSkill Campus · Training program</p><ul className="achievement-list"><li>Built responsive interfaces with HTML, CSS, JavaScript and React.</li><li>Developed and consumed REST APIs using Node.js and Express.</li><li>Practised auth, CRUD, database integration and Git workflows.</li></ul></article>
            <article className="journey-card" data-reveal><div className="journey-icon open-source"><GitPullRequest size={20} /></div><div className="journey-meta">OPEN SOURCE <span>GSSoC '26</span></div><h3>8 merged pull requests</h3><p>Contributed across 3 repositories, including usability fixes and feature improvements.</p><ul className="achievement-list"><li>Dark-mode readability and reservation validation.</li><li>Admin stock-out handling and drag-and-drop resume upload.</li></ul><div className="journey-actions"><a href="https://gssoc.girlscript.org/profile/21a619ef-cecb-42a2-91b5-ebceffef988a" target="_blank" rel="noreferrer">GSSoC profile <ArrowUpRight size={14} /></a></div></article>
            <article className="journey-card" data-reveal><div className="journey-icon trophy"><Trophy size={20} /></div><div className="journey-meta">HACKATHON <span>AUG 2026</span></div><h3>Odoo × LDCE Ahmedabad</h3><p>Finalist and team leader. Built <strong>GlobeTrotter</strong> with a collaborative team.</p><div className="journey-actions"><a href="https://github.com/akil9979/GlobeTrotter" target="_blank" rel="noreferrer">View GlobeTrotter <ArrowUpRight size={14} /></a></div><div className="journey-foot">Certifications <strong>SAP · Edunet</strong></div></article>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" data-reveal>
          <div className="contact-panel"><div className="contact-orb" /><div className="contact-left"><div className="section-label">05 / LET'S CONNECT</div><h2>Have a good problem?<br /><span>Let's build the solution.</span></h2><p>Open to software development internships and junior opportunities where I can contribute to real products, learn from strong teams and ship reliable features.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${email}?subject=Developer%20Opportunity`}>Start a conversation <Send size={16} /></a><button className="button button-secondary copy-button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Mail size={16} />}{copied ? 'Email copied' : 'Copy email'}</button></div><a className="resume-inline contact-resume" href="/resume.pdf" download="Akil_Rizwani_Resume.pdf"><Download size={15} /> Download resume PDF</a></div><div className="contact-right"><div className="contact-detail"><span className="detail-icon"><Mail size={17} /></span><div><small>EMAIL</small><a href={`mailto:${email}`}>{email}</a></div><ArrowUpRight size={15} /></div><a className="contact-detail" href="tel:+917268904745"><span className="detail-icon"><Phone size={17} /></span><div><small>PHONE</small><span>+91 {phone}</span></div><ArrowUpRight size={15} /></a><a className="contact-detail" href="https://www.linkedin.com/in/akil-rizwani-7517a737a/" target="_blank" rel="noreferrer"><span className="detail-icon linkedin-mark">in</span><div><small>LINKEDIN</small><span>Connect professionally</span></div><ArrowUpRight size={15} /></a><a className="contact-detail" href="https://github.com/akil9979" target="_blank" rel="noreferrer"><span className="detail-icon"><Github size={17} /></span><div><small>GITHUB</small><span>github.com/akil9979</span></div><ArrowUpRight size={15} /></a></div></div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home">akil<span>.</span></a><p>Designed with intent. Built with code.</p><span>© {new Date().getFullYear()} Akil Rizwani</span><a className="back-top" href="#home">Back to top <ArrowUpRight size={14} /></a></footer>
    </>
  );
}

export default App;
