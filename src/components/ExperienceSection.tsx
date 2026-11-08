import {
  ArrowUpRight,
  Award,
  Briefcase,
  GitPullRequest,
  Sparkles,
  Trophy,
} from 'lucide-react';
import {
  ACHIEVEMENT_DATA,
  CERTIFICATIONS_DATA,
  EXPERIENCE_DATA,
  OPEN_SOURCE_DATA,
} from '../data/portfolioData';

export function ExperienceSection() {
  return (
    <section className="experience-section section-wrap" id="experience">
      {/* Section Header */}
      <div className="section-header compact" data-reveal>
        <div className="section-label-group">
          <span className="section-number">04</span>
          <span className="section-dash" />
          <span className="section-category">EXPERIENCE & COMMUNITY</span>
        </div>
        <div className="section-title-row">
          <h2 className="section-headline">
            Work, Learning & <span className="text-gradient">Accomplishments.</span>
          </h2>
          <p className="section-subtext">
            Hands-on experience through full-stack software development training, open-source code
            contributions, and collaborative hackathons.
          </p>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="experience-cards-grid">
        {/* Card 1: Internship Experience */}
        <article className="experience-card work-card" data-reveal>
          <div className="card-top-row">
            <div className="card-icon-bubble icon-experience">
              <Briefcase size={20} />
            </div>
            <span className="card-period-tag">{EXPERIENCE_DATA.period}</span>
          </div>

          <div className="card-content-body">
            <span className="card-domain-label">DEVELOPER INTERNSHIP</span>
            <h3 className="card-main-title">{EXPERIENCE_DATA.role}</h3>
            <p className="card-subtitle-lead">{EXPERIENCE_DATA.company}</p>
            <p className="card-meta-note">{EXPERIENCE_DATA.type}</p>

            <p className="card-description-lead">{EXPERIENCE_DATA.description}</p>

            <ul className="bullet-highlights">
              {EXPERIENCE_DATA.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </article>

        {/* Card 2: Open Source Contributions */}
        <article className="experience-card opensource-card" data-reveal>
          <div className="card-top-row">
            <div className="card-icon-bubble icon-opensource">
              <GitPullRequest size={20} />
            </div>
            <span className="card-period-tag">{OPEN_SOURCE_DATA.period}</span>
          </div>

          <div className="card-content-body">
            <span className="card-domain-label">OPEN SOURCE CONTRIBUTION</span>
            <h3 className="card-main-title">{OPEN_SOURCE_DATA.program}</h3>
            <div className="card-metrics-pill">
              <Sparkles size={13} className="text-blue" />
              <span>{OPEN_SOURCE_DATA.metrics}</span>
            </div>

            <ul className="bullet-highlights">
              {OPEN_SOURCE_DATA.contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            <div className="card-action-footer">
              <a
                href={OPEN_SOURCE_DATA.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="card-link-action"
              >
                <span>View GSSoC Contributor Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </article>

        {/* Card 3: Hackathon Finalist */}
        <article className="experience-card hackathon-card" data-reveal>
          <div className="card-top-row">
            <div className="card-icon-bubble icon-hackathon">
              <Trophy size={20} />
            </div>
            <span className="card-period-tag">{ACHIEVEMENT_DATA.period}</span>
          </div>

          <div className="card-content-body">
            <span className="card-domain-label">HACKATHON COMPETITION</span>
            <h3 className="card-main-title">{ACHIEVEMENT_DATA.title}</h3>
            <p className="card-subtitle-lead">{ACHIEVEMENT_DATA.event}</p>
            <p className="card-meta-note">Role: {ACHIEVEMENT_DATA.role}</p>

            <p className="card-description-lead">{ACHIEVEMENT_DATA.description}</p>

            <div className="hackathon-tags-cluster">
              {ACHIEVEMENT_DATA.tags.map((tag) => (
                <span key={tag} className="hackathon-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="card-action-footer">
              <a
                href={ACHIEVEMENT_DATA.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="card-link-action"
              >
                <span>View GlobeTrotter Repository</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </article>

        {/* Card 4: Technical Certifications */}
        <article className="experience-card cert-card" data-reveal>
          <div className="card-top-row">
            <div className="card-icon-bubble icon-cert">
              <Award size={20} />
            </div>
            <span className="card-period-tag">VERIFIED</span>
          </div>

          <div className="card-content-body">
            <span className="card-domain-label">TECHNICAL CERTIFICATIONS</span>
            <h3 className="card-main-title">Professional Training & Credentials</h3>
            <p className="card-subtitle-lead">Specialized technical coursework & evaluations</p>

            <div className="cert-list">
              {CERTIFICATIONS_DATA.map((cert, i) => (
                <div key={i} className="cert-item">
                  <strong className="cert-title">{cert.title}</strong>
                  <span className="cert-issuer">Issued by {cert.issuer}</span>
                  <small className="cert-topic">{cert.topics}</small>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

