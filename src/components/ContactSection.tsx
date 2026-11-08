import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getResumeUrl, handleResumeDownload } from '../utils/downloadResume';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <section className="contact-section section-wrap" id="contact" data-reveal>
      <div className="contact-panel-card">
        <div className="contact-glow-orb" aria-hidden="true" />
        <div className="contact-glow-orb-secondary" aria-hidden="true" />

        <div className="contact-grid">
          {/* Left: Message & Direct Invitation */}
          <div className="contact-intro-side">
            <div className="section-label-group">
              <span className="section-number">05</span>
              <span className="section-dash" />
              <span className="section-category">LET'S CONNECT</span>
            </div>

            <h2 className="contact-headline">
              Ready to build something <br />
              <span className="text-gradient">exceptional together?</span>
            </h2>

            <div className="invitation-box">
              <div className="invitation-header">
                <Sparkles size={16} className="text-emerald" />
                <span className="invitation-title">Open for Opportunities</span>
              </div>
              <p className="invitation-text">
                I am actively seeking <strong>software engineering internships</strong> and{' '}
                <strong>junior / full-stack developer roles</strong> starting immediately or in
                2026/2027. If your team values clean code, solid database foundations, and
                builders who take ownership from UI to API, let's talk.
              </p>
            </div>

            <div className="contact-cta-buttons">
              <a
                className="button button-primary"
                href={`mailto:${PERSONAL_INFO.email}?subject=Software%20Developer%20Opportunity%20-%20Akil%20Rizwani`}
              >
                <Send size={16} />
                <span>Send Email</span>
                <ArrowUpRight size={14} className="btn-arrow" />
              </a>

              <button
                type="button"
                className={`button button-secondary copy-btn ${copied ? 'copied-active' : ''}`}
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              <a
                className="button button-ghost resume-download-cta"
                href={getResumeUrl()}
                download={PERSONAL_INFO.resumeFilename}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeDownload}
                aria-label="Download Akil Rizwani Resume PDF"
              >
                <Download size={15} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Details and Channels */}
          <div className="contact-details-side">
            <h3 className="channels-title">Direct Contact Channels</h3>

            <div className="channels-stack">
              {/* Email item */}
              <div className="contact-channel-item" onClick={copyEmail} title="Click to copy email">
                <div className="channel-icon-bubble">
                  <Mail size={18} />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">EMAIL ADDRESS</span>
                  <span className="channel-value">{PERSONAL_INFO.email}</span>
                </div>
                <div className="channel-action-badge">
                  {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                </div>
              </div>

              {/* Phone item */}
              <a className="contact-channel-item" href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}>
                <div className="channel-icon-bubble">
                  <Phone size={18} />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">PHONE NUMBER</span>
                  <span className="channel-value">{PERSONAL_INFO.phone}</span>
                </div>
                <div className="channel-action-badge">
                  <ArrowUpRight size={14} />
                </div>
              </a>

              {/* LinkedIn item */}
              <a
                className="contact-channel-item"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <div className="channel-icon-bubble icon-linkedin">
                  <span className="linkedin-mark-glyph">in</span>
                </div>
                <div className="channel-meta">
                  <span className="channel-label">LINKEDIN</span>
                  <span className="channel-value">linkedin.com/in/akil-rizwani</span>
                </div>
                <div className="channel-action-badge">
                  <ArrowUpRight size={14} />
                </div>
              </a>

              {/* GitHub item */}
              <a
                className="contact-channel-item"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
              >
                <div className="channel-icon-bubble icon-github">
                  <Github size={18} />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">GITHUB PROFILE</span>
                  <span className="channel-value">github.com/akil9979</span>
                </div>
                <div className="channel-action-badge">
                  <ArrowUpRight size={14} />
                </div>
              </a>

              {/* Location item */}
              <div className="contact-channel-item location-item">
                <div className="channel-icon-bubble">
                  <MapPin size={18} />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">LOCATION</span>
                  <span className="channel-value">{PERSONAL_INFO.location}</span>
                </div>
                <span className="location-flag">IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

