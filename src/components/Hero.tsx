import React from 'react';
import { ArrowDownRight, ArrowUpRight, Code2, Download, Github, Mail, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getResumeUrl, handleResumeDownload } from '../utils/downloadResume';

interface HeroProps {
  onNavigate?: (sectionId: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId);
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topbarHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topbarHeight;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
      if (window.history.pushState) {
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-glow-sphere" aria-hidden="true" />
      <div className="hero-glow-secondary" aria-hidden="true" />

      {/* Left Column: Introduction & Primary Actions */}
      <div className="hero-copy">
        <div className="availability-badge" data-reveal>
          <span className="status-dot pulsing" />
          <span className="badge-text">{PERSONAL_INFO.availability.toUpperCase()}</span>
        </div>

        <p className="hero-salutation" data-reveal>Hi, I'm</p>

        <h1 className="hero-name" data-reveal>
          Akil <span className="text-gradient">Rizwani</span>
          <span className="period-accent">.</span>
        </h1>

        <div className="hero-role-wrapper" data-reveal>
          <h2 className="hero-role">{PERSONAL_INFO.role}</h2>
          <span className="role-divider">/</span>
          <span className="hero-subrole">Real-Time Systems & APIs</span>
        </div>

        <p className="hero-description" data-reveal>
          Computer Engineering student and full-stack developer building real-time applications,
          high-performance REST APIs, and intelligent data-driven platforms using{' '}
          <strong className="text-highlight">React</strong>,{' '}
          <strong className="text-highlight">Node.js</strong>,{' '}
          <strong className="text-highlight">TypeScript</strong>,{' '}
          <strong className="text-highlight">PostgreSQL</strong>, and{' '}
          <strong className="text-highlight">Socket.IO</strong>.
        </p>

        <div className="hero-actions" data-reveal>
          <a
            className="button button-primary"
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
          >
            <span>View Featured Projects</span>
            <ArrowDownRight size={17} className="btn-icon-right" />
          </a>
          <a
            className="button button-secondary"
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </a>
          <a
            className="button button-ghost resume-button"
            href={getResumeUrl()}
            download={PERSONAL_INFO.resumeFilename}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeDownload}
            aria-label="Download Akil Rizwani Resume PDF"
          >
            <Download size={15} />
            <span>Resume</span>
            <ArrowUpRight size={13} className="text-muted" />
          </a>
        </div>

        <div className="hero-social-row" data-reveal>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="social-icon-btn"
          >
            <Github size={18} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="social-icon-btn"
          >
            <span className="linkedin-glyph">in</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send direct email"
            className="social-icon-btn"
          >
            <Mail size={18} />
          </a>
          <div className="hero-location-pill">
            <MapPin size={13} className="location-icon" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>

      {/* Right Column: Premium Portrait Composition & Floating Code Window */}
      <div className="hero-visual" aria-label="Akil Rizwani portrait and developer code showcase">
        <div className="portrait-ambient-glow" aria-hidden="true" />

        <div className="portrait-composition">
          <div className="portrait-image-wrapper">
            <img
              src="./akil-portrait.webp"
              alt="Portrait of Akil Rizwani — Full-Stack Developer"
              width="1000"
              height="1000"
              fetchPriority="high"
              decoding="async"
              className="portrait-img"
            />
            <div className="portrait-vignette" />
            <div className="portrait-status-banner">
              <span className="status-dot green" />
              <span>BUILDING RELIABLE FULL-STACK PRODUCTS</span>
            </div>
          </div>
        </div>

        {/* Floating chip: top-right */}
        <div className="floating-chip chip-upper" aria-hidden="true">
          <Sparkles size={14} className="chip-icon-sparkle" />
          <span>Real-Time · Full-Stack · AI</span>
        </div>

        {/* Interactive Floating Code Window */}
        <div className="floating-code-editor" aria-label="Interactive developer profile code card">
          <div className="code-editor-header">
            <div className="window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="editor-tab-title">developer.ts</span>
            <span className="editor-lang-badge">TypeScript</span>
          </div>
          <pre className="code-snippet">
            <code>
              <span className="tok-keyword">const</span> <span className="tok-def">developer</span> = {'{'}{'\n'}
              {'  '}name: <span className="tok-string">'Akil Rizwani'</span>,{'\n'}
              {'  '}role: <span className="tok-string">'Full-Stack Developer'</span>,{'\n'}
              {'  '}stack: [<span className="tok-string">'React'</span>, <span className="tok-string">'Node.js'</span>, <span className="tok-string">'PostgreSQL'</span>],{'\n'}
              {'  '}realtime: <span className="tok-string">'Socket.IO'</span>,{'\n'}
              {'  '}openForRoles: <span className="tok-bool">true</span>{'\n'}
              {'}'};
            </code>
          </pre>
          <div className="code-editor-footer">
            <div className="footer-status">
              <span className="status-dot green mini" />
              <span>learning by shipping</span>
            </div>
            <span className="footer-badge">v2026.1</span>
          </div>
        </div>

        {/* Floating chip: bottom-right */}
        <div className="floating-chip chip-lower" aria-hidden="true">
          <Code2 size={14} className="chip-icon-code" />
          <span>PostgreSQL · Socket.IO · React</span>
        </div>
      </div>

      <a
        className="hero-scroll-indicator"
        href="#about"
        onClick={(e) => handleScrollTo(e, 'about')}
        aria-label="Scroll to About section"
      >
        <span className="scroll-tick" />
        <span>SCROLL TO EXPLORE</span>
        <ArrowDownRight size={13} />
      </a>
    </section>
  );
}
