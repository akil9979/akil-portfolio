import { GraduationCap } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section className="about-section section-wrap" id="about">
      {/* Editorial Header */}
      <div className="section-header compact" data-reveal>
        <div className="section-label-group">
          <span className="section-number">01</span>
          <span className="section-dash" />
          <span className="section-category">ABOUT ME</span>
        </div>
        <div className="section-title-row">
          <h2 className="section-headline">
            Engineering with rigor, curiosity, and{' '}
            <span className="text-gradient">follow-through.</span>
          </h2>
          <p className="section-subtext">
            Computer Engineering student and full-stack developer building real-world products
            grounded in solid computer science fundamentals.
          </p>
        </div>
      </div>

      {/* Editorial Content Grid */}
      <div className="about-content-layout" data-reveal>
        <div className="about-narrative-card">
          <p className="editorial-lead">
            I am pursuing my <strong>B.E in Computer Engineering</strong> at GIDC Degree Engineering
            College, affiliated with Gujarat Technological University (GTU), maintaining a{' '}
            <strong className="text-highlight">CGPA of 8.4 / 10</strong>.
          </p>
          <p className="editorial-body">
            I enjoy taking features end-to-end: architecting responsive user interfaces with React
            and TypeScript, building reliable REST APIs and Socket.IO micro-services with Node.js
            and Express, and persisting data in relational and document databases like PostgreSQL
            and MongoDB.
          </p>
          <p className="editorial-body">
            Whether building low-latency real-time multiplayer gaming platforms, social networks
            with live feeds, or integrating Gemini AI models into kitchen management apps, my focus
            is always on clean architecture, defensive edge-case handling, and user-centric
            performance.
          </p>

          <div className="stat-cards-cluster">
            <div className="stat-card">
              <span className="stat-number">
                8.4<small className="stat-unit">/10</small>
              </span>
              <span className="stat-label">Engineering CGPA</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                8<small className="stat-unit"> PRs</small>
              </span>
              <span className="stat-label">Open Source Merged</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2027</span>
              <span className="stat-label">Graduation Year</span>
            </div>
          </div>
        </div>

        {/* Education Highlight Card */}
        <div className="about-education-card">
          <div className="card-top-row">
            <div className="card-icon-bubble icon-education">
              <GraduationCap size={20} />
            </div>
            <span className="card-period-tag">{EDUCATION_DATA.period}</span>
          </div>

          <div className="card-content-body">
            <span className="card-domain-label">FORMAL EDUCATION</span>
            <h3 className="card-main-title">{EDUCATION_DATA.degree}</h3>
            <p className="card-subtitle-lead">{EDUCATION_DATA.institution}</p>
            <p className="card-meta-note">{EDUCATION_DATA.affiliation}</p>

            <div className="card-grade-badge">
              <span className="grade-label">Academic Performance:</span>
              <strong className="grade-value">{EDUCATION_DATA.grade}</strong>
            </div>

            <ul className="bullet-highlights">
              {EDUCATION_DATA.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
