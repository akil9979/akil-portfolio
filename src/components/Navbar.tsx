import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getResumeUrl, handleResumeDownload } from '../utils/downloadResume';

interface NavbarProps {
  activeSection: string;
  onNavigate?: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    closeMenu();

    if (onNavigate) {
      onNavigate(id);
    }

    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Header offset compensation
      const topbarHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      } else {
        window.location.hash = href;
      }
    }
  };

  return (
    <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
      <div className="topbar-inner">
        <a
          className="brand"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home', 'home')}
          aria-label="Akil Rizwani home"
        >
          akil<span className="brand-dot">.</span>
        </a>

        <div className="topbar-status-indicator" title="Open to opportunities">
          <span className="status-dot pulsing" />
          <span className="status-text">Available for roles</span>
        </div>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map(({ label, href, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href, id)}
                className={isActive ? 'nav-link active' : 'nav-link'}
              >
                {label}
                {isActive && <span className="nav-active-pill" />}
              </a>
            );
          })}
          <div className="mobile-nav-cta">
            <a
              className="button button-primary mobile-cta-btn"
              href={getResumeUrl()}
              download={PERSONAL_INFO.resumeFilename}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                closeMenu();
                handleResumeDownload(e);
              }}
            >
              <Download size={15} /> Download Resume
            </a>
          </div>
        </nav>

        <div className="topbar-actions">
          <a
            className="nav-cta"
            href={getResumeUrl()}
            download={PERSONAL_INFO.resumeFilename}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeDownload}
            aria-label="Download Akil Rizwani Resume PDF"
          >
            <Download size={14} className="cta-icon" />
            <span>Resume</span>
            <ArrowUpRight size={13} className="cta-arrow" />
          </a>

          <button
            className="mobile-menu-btn"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
