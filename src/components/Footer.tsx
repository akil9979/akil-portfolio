import { ArrowUp, Github, Heart, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="footer-inner section-wrap">
        <div className="footer-branding-side">
          <a className="brand footer-brand" href="#home" aria-label="Akil Rizwani home">
            akil<span className="brand-dot">.</span>
          </a>
          <p className="footer-tagline">
            Engineered with React, TypeScript & performant CSS. Built with clean architecture and
            user-first interaction design.
          </p>
        </div>

        <div className="footer-links-side">
          <div className="footer-socials">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="footer-icon-link"
            >
              <Github size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-icon-link"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="footer-icon-link"
            >
              <Mail size={16} />
            </a>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="footer-bottom-bar section-wrap">
        <span className="footer-copyright">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </span>
        <span className="footer-signature">
          Designed with intent <span className="signature-dot">·</span> Shipped with passion
        </span>
      </div>
    </footer>
  );
}

