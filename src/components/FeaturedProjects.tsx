import { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Radio,
  Server,
  Sparkles,
  Trophy,
  Users,
  Film,
  Layers,
  Shield,
  Eye,
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

export function FeaturedProjects() {
  const [activeRecipeImg, setActiveRecipeImg] = useState<number>(0);
  const [modalImage, setModalImage] = useState<{ src: string; title: string; alt: string } | null>(null);

  const playhub = FEATURED_PROJECTS[0];
  const connecthub = FEATURED_PROJECTS[1];
  const recipeGenerator = FEATURED_PROJECTS[2];
  const movieExplorer = FEATURED_PROJECTS[3];

  const recipeGallery = recipeGenerator.gallery || [recipeGenerator.image || ''];

  return (
    <section className="projects-section section-wrap" id="projects">
      {/* Section Header */}
      <div className="section-header compact" data-reveal>
        <div className="section-label-group">
          <span className="section-number">02</span>
          <span className="section-dash" />
          <span className="section-category">FEATURED PROJECTS</span>
        </div>
        <div className="section-title-row">
          <h2 className="section-headline">
            Featured <span className="text-gradient">Engineering Work.</span>
          </h2>
          <p className="section-subtext">
            Production-oriented applications focused on real-time synchronization, backend
            architecture, and practical AI integrations.
          </p>
        </div>
      </div>

      <div className="projects-showcase compact">
        {/* ============================================================== */}
        {/* PROJECT 01 — PLAYHUB: MULTIPLAYER ARENA (FLAGSHIP)            */}
        {/* ============================================================== */}
        <article className="project-card project-flagship accent-emerald compact" data-reveal>
          <div className="flagship-badge-bar">
            <span className="status-pill status-emerald">
              <Radio size={12} className="pulsing-icon" />
              <span>01 · FLAGSHIP PROJECT · REAL-TIME MULTIPLAYER ARENA</span>
            </span>
            <span className="project-rank">01 / 04</span>
          </div>

          <div className="card-body-layout">
            {/* Visual Screenshot Display */}
            <div className="project-media-column">
              <div
                className="media-frame interactive-frame"
                onClick={() =>
                  playhub.image &&
                  setModalImage({
                    src: playhub.image,
                    title: playhub.title,
                    alt: playhub.imageAlt || playhub.title,
                  })
                }
                title="Click to view full preview"
              >
                {playhub.image && (
                  <img
                    src={playhub.image}
                    alt={playhub.imageAlt}
                    width="1280"
                    height="720"
                    loading="eager"
                    decoding="async"
                    className="project-screenshot"
                  />
                )}
                <div className="media-overlay">
                  <div className="overlay-pill">
                    <Eye size={13} />
                    <span>View preview</span>
                  </div>
                </div>
                <div className="media-live-tag">
                  <span className="status-dot green mini" />
                  <span>Live Arena</span>
                </div>
              </div>

              {/* Architecture Stat Strip */}
              <div className="project-stat-strip">
                <div className="stat-item">
                  <Radio size={13} className="text-emerald" />
                  <span>Socket.IO Sync</span>
                </div>
                <div className="stat-item">
                  <Shield size={13} className="text-emerald" />
                  <span>Server Validation</span>
                </div>
                <div className="stat-item">
                  <Server size={13} className="text-emerald" />
                  <span>Neon PostgreSQL</span>
                </div>
                <div className="stat-item">
                  <Trophy size={13} className="text-emerald" />
                  <span>Leaderboard</span>
                </div>
              </div>
            </div>

            {/* Description & Technical Highlights */}
            <div className="project-info-column">
              <span className="project-category-tag">{playhub.category}</span>
              <h3 className="project-name">{playhub.title}</h3>
              <p className="project-summary">{playhub.description}</p>

              <div className="highlights-block">
                <ul className="highlights-list">
                  {playhub.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <CheckCircle2 size={14} className="highlight-icon text-emerald" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stack-wrap">
                <div className="tech-badge-cloud">
                  {playhub.stack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions-row">
                <a
                  href={playhub.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                  aria-label="View PlayHub GitHub repository"
                >
                  <Github size={15} />
                  <span>View GitHub</span>
                  <ArrowUpRight size={13} className="btn-arrow" />
                </a>
                {playhub.demo && (
                  <a
                    href={playhub.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-secondary"
                    aria-label="Launch PlayHub live demo"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                    <ArrowUpRight size={13} className="btn-arrow" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* ============================================================== */}
        {/* PROJECT 02 — CONNECTHUB: SOCIAL NETWORKING PLATFORM           */}
        {/* ============================================================== */}
        <article className="project-card project-standard accent-blue compact" data-reveal>
          <div className="project-topbar">
            <span className="status-pill status-blue">
              <Users size={12} />
              <span>02 · FULL-STACK SOCIAL NETWORKING PLATFORM</span>
            </span>
            <span className="project-rank">02 / 04</span>
          </div>

          <div className="card-body-layout">
            {/* Visual Screenshot Display — Combined in one */}
            <div className="project-media-column">
              <div
                className="media-frame interactive-frame"
                onClick={() =>
                  connecthub.image &&
                  setModalImage({
                    src: connecthub.image,
                    title: connecthub.title,
                    alt: connecthub.imageAlt || connecthub.title,
                  })
                }
                title="Click to view full preview"
              >
                {connecthub.image && (
                  <img
                    src={connecthub.image}
                    alt={connecthub.imageAlt}
                    width="1280"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    className="project-screenshot"
                  />
                )}
                <div className="media-overlay">
                  <div className="overlay-pill">
                    <Eye size={13} />
                    <span>View preview</span>
                  </div>
                </div>
                <div className="media-live-tag">
                  <span className="status-dot green mini" />
                  <span>Landing + Feed Combined</span>
                </div>
              </div>
            </div>

            {/* Description & Technical Highlights */}
            <div className="project-info-column">
              <span className="project-category-tag">{connecthub.category}</span>
              <h3 className="project-name">{connecthub.title}</h3>
              <p className="project-summary">{connecthub.description}</p>

              <div className="highlights-block">
                <ul className="highlights-list">
                  {connecthub.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <CheckCircle2 size={14} className="highlight-icon text-blue" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stack-wrap">
                <div className="tech-badge-cloud">
                  {connecthub.stack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions-row">
                <a
                  href={connecthub.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                  aria-label="View ConnectHub GitHub repository"
                >
                  <Github size={15} />
                  <span>View GitHub</span>
                  <ArrowUpRight size={13} className="btn-arrow" />
                </a>
                {connecthub.demo && (
                  <a
                    href={connecthub.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-secondary"
                    aria-label="Launch ConnectHub live demo"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                    <ArrowUpRight size={13} className="btn-arrow" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* ============================================================== */}
        {/* PROJECT 03 — AI RECIPE GENERATOR                              */}
        {/* ============================================================== */}
        <article className="project-card project-standard accent-green compact" data-reveal>
          <div className="project-topbar">
            <span className="status-pill status-green">
              <Sparkles size={12} />
              <span>03 · AI & DATA ENGINEERING PLATFORM</span>
            </span>
            <span className="project-rank">03 / 04</span>
          </div>

          <div className="card-body-layout">
            {/* Visual Screenshot Display & Gallery Switcher */}
            <div className="project-media-column">
              <div
                className="media-frame interactive-frame"
                onClick={() =>
                  setModalImage({
                    src: recipeGallery[activeRecipeImg],
                    title: `${recipeGenerator.title} — View ${activeRecipeImg + 1}`,
                    alt: recipeGenerator.imageAlt || recipeGenerator.title,
                  })
                }
                title="Click to view full preview"
              >
                <img
                  src={recipeGallery[activeRecipeImg]}
                  alt={`${recipeGenerator.imageAlt} (Screen ${activeRecipeImg + 1})`}
                  width="1280"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  className="project-screenshot"
                />
                <div className="media-overlay">
                  <div className="overlay-pill">
                    <Eye size={13} />
                    <span>View preview</span>
                  </div>
                </div>
              </div>

              <div className="gallery-thumbnail-row">
                {recipeGallery.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`thumbnail-pill ${activeRecipeImg === idx ? 'active' : ''}`}
                    onClick={() => setActiveRecipeImg(idx)}
                  >
                    <span>
                      {idx === 0
                        ? 'Dashboard'
                        : idx === 1
                        ? 'Meal Planner'
                        : 'Pantry'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Description & Technical Highlights */}
            <div className="project-info-column">
              <span className="project-category-tag">{recipeGenerator.category}</span>
              <h3 className="project-name">{recipeGenerator.title}</h3>
              <p className="project-summary">{recipeGenerator.description}</p>

              <div className="highlights-block">
                <ul className="highlights-list">
                  {recipeGenerator.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <CheckCircle2 size={14} className="highlight-icon text-green" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stack-wrap">
                <div className="tech-badge-cloud">
                  {recipeGenerator.stack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions-row">
                <a
                  href={recipeGenerator.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                  aria-label="View AI Recipe Generator GitHub repository"
                >
                  <Github size={15} />
                  <span>View GitHub</span>
                  <ArrowUpRight size={13} className="btn-arrow" />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* ============================================================== */}
        {/* PROJECT 04 — MOVIE EXPLORER                                   */}
        {/* ============================================================== */}
        <article className="project-card project-standard accent-amber compact" data-reveal>
          <div className="project-topbar">
            <span className="status-pill status-amber">
              <Film size={12} />
              <span>04 · FRONTEND & STATE ARCHITECTURE</span>
            </span>
            <span className="project-rank">04 / 04</span>
          </div>

          <div className="card-body-layout">
            {/* Technical Architecture & UI Flow Showcase */}
            <div className="project-media-column">
              <div className="architecture-preview-card compact" aria-label="Movie Explorer Technical Architecture Diagram">
                <div className="arch-header">
                  <div className="window-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span className="arch-title">architecture-state-flow.ts</span>
                  <span className="arch-badge">Redux Toolkit</span>
                </div>

                <div className="arch-body">
                  <div className="flow-step">
                    <div className="flow-icon-wrap">
                      <Film size={14} className="text-amber" />
                    </div>
                    <div className="flow-text">
                      <strong>Movie API Integration</strong>
                      <small>Asynchronous REST fetching with debounce & error handling</small>
                    </div>
                  </div>

                  <div className="flow-connector">
                    <span className="flow-arrow">↓</span>
                  </div>

                  <div className="flow-step">
                    <div className="flow-icon-wrap">
                      <Layers size={14} className="text-amber" />
                    </div>
                    <div className="flow-text">
                      <strong>Redux Toolkit Global Store</strong>
                      <small>Slices for search results, genre filters, and watchlists</small>
                    </div>
                  </div>

                  <div className="flow-connector">
                    <span className="flow-arrow">↓</span>
                  </div>

                  <div className="flow-step">
                    <div className="flow-icon-wrap">
                      <Sparkles size={14} className="text-amber" />
                    </div>
                    <div className="flow-text">
                      <strong>Responsive UI Components</strong>
                      <small>Responsive movie grids, details modals, and React Router routes</small>
                    </div>
                  </div>
                </div>

                <div className="arch-footer">
                  <span className="arch-status-pill">
                    <span className="status-dot amber mini" />
                    Clean Architecture Verified
                  </span>
                  <span className="arch-tech">Vite + Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Description & Technical Highlights */}
            <div className="project-info-column">
              <span className="project-category-tag">{movieExplorer.category}</span>
              <h3 className="project-name">{movieExplorer.title}</h3>
              <p className="project-summary">{movieExplorer.description}</p>

              <div className="highlights-block">
                <ul className="highlights-list">
                  {movieExplorer.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <CheckCircle2 size={14} className="highlight-icon text-amber" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stack-wrap">
                <div className="tech-badge-cloud">
                  {movieExplorer.stack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions-row">
                <a
                  href={movieExplorer.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                  aria-label="View Movie Explorer GitHub repository"
                >
                  <Github size={15} />
                  <span>View GitHub</span>
                  <ArrowUpRight size={13} className="btn-arrow" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Image Modal Lightbox */}
      {modalImage && (
        <div className="image-modal-backdrop" onClick={() => setModalImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4>{modalImage.title}</h4>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setModalImage(null)}
                aria-label="Close image preview"
              >
                ✕
              </button>
            </div>
            <div className="modal-img-wrap">
              <img src={modalImage.src} alt={modalImage.alt} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
