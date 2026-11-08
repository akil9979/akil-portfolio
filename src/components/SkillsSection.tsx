import {
  Code2,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Github,
  HardDrive,
  Layers,
  Layout,
  Monitor,
  Network,
  Palette,
  Radio,
  Send,
  Server,
  ShieldCheck,
  Terminal,
  Wind,
  Wrench,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={16} />;
      case 'FileCode':
        return <FileCode size={16} />;
      case 'Code':
        return <Code2 size={16} />;
      case 'Layout':
        return <Layout size={16} />;
      case 'Palette':
        return <Palette size={16} />;
      case 'Wind':
        return <Wind size={16} />;
      case 'Layers':
        return <Layers size={16} />;
      case 'Server':
        return <Server size={16} />;
      case 'Cpu':
        return <Cpu size={16} />;
      case 'Network':
        return <Network size={16} />;
      case 'Radio':
        return <Radio size={16} />;
      case 'ShieldCheck':
        return <ShieldCheck size={16} />;
      case 'Database':
        return <Database size={16} />;
      case 'HardDrive':
        return <HardDrive size={16} />;
      case 'GitBranch':
        return <GitBranch size={16} />;
      case 'Github':
        return <Github size={16} />;
      case 'Send':
        return <Send size={16} />;
      case 'Terminal':
        return <Terminal size={16} />;
      default:
        return <Code2 size={16} />;
    }
  };

  const getCategoryHeaderIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Monitor size={20} className="cat-icon-frontend" />;
      case 'Backend':
        return <Server size={20} className="cat-icon-backend" />;
      case 'Database':
        return <Database size={20} className="cat-icon-database" />;
      case 'Tools':
        return <Wrench size={20} className="cat-icon-tools" />;
      default:
        return <Code2 size={20} />;
    }
  };

  return (
    <section className="skills-section section-wrap" id="skills">
      <div className="section-header compact" data-reveal>
        <div className="section-label-group">
          <span className="section-number">03</span>
          <span className="section-dash" />
          <span className="section-category">TECHNICAL TOOLKIT</span>
        </div>
        <div className="section-title-row">
          <h2 className="section-headline">
            Skills & <span className="text-gradient">Technologies.</span>
          </h2>
          <p className="section-subtext">
            Grouped cleanly by engineering domain. Practical competencies proven through shipping
            real projects—no arbitrary percentage meters.
          </p>
        </div>
      </div>

      <div className="skills-category-grid">
        {SKILL_CATEGORIES.map((cat) => (
          <article className="skill-category-card" key={cat.category} data-reveal>
            <div className="skill-card-top">
              <div className="cat-icon-container">{getCategoryHeaderIcon(cat.category)}</div>
              <div className="cat-meta">
                <h3 className="cat-title">{cat.category}</h3>
                <span className="cat-label">{cat.label}</span>
              </div>
              <span className="cat-count-badge">{cat.skills.length} tools</span>
            </div>

            <p className="cat-desc">{cat.description}</p>

            <div className="skill-badges-container">
              {cat.skills.map((skill) => (
                <div className="skill-chip" key={skill.name}>
                  <span className="skill-chip-icon">{getIcon(skill.icon)}</span>
                  <span className="skill-chip-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
