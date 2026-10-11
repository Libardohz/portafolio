import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Globe } from 'lucide-react';

export default function Navbar({ onOpenCv }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="navbar-root">
      <div className="container navbar-container">
        {/* Marca / Monograma Técnico */}
        <a href="#" className="navbar-brand">
          <div className="navbar-logo-badge">
            <Terminal size={15} className="navbar-terminal-icon" />
            <span className="font-mono navbar-logo-text">LH.dev</span>
          </div>
          <span className="navbar-author-name">{t.profile.name}</span>
        </a>

        {/* Estatus Laboral (badge visible en desktop) */}
        <div className="navbar-status-wrapper">
          <div className="badge badge-live">
            <span className="badge-live-dot"></span>
            <span>{t.profile.status}</span>
          </div>
        </div>

        {/* Acciones y Selector de Idioma */}
        <div className="navbar-actions">
          <nav className="navbar-nav-links">
            <a href="#proyectos" className="navbar-nav-link">
              {lang === 'es' ? 'Proyectos' : 'Projetos'}
            </a>
            <a href="#soluciones" className="navbar-nav-link">
              {lang === 'es' ? 'Soluciones' : 'Soluções'}
            </a>
            <a href="#trayectoria" className="navbar-nav-link">
              {lang === 'es' ? 'Trayectoria' : 'Trajetória'}
            </a>
            <a href="#habilidades" className="navbar-nav-link">
              {lang === 'es' ? 'Habilidades' : 'Habilidades'}
            </a>
            <a href="#contacto" className="navbar-nav-link">
              {lang === 'es' ? 'Contacto' : 'Contato'}
            </a>
          </nav>

          {/* Toggle de Idioma Segmentado ES / PT */}
          <div className="lang-switcher" role="group" aria-label="Selector de idioma">
            <Globe size={13} className="lang-globe-icon" />
            <button
              type="button"
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <span className="lang-divider">/</span>
            <button
              type="button"
              className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
              onClick={() => setLang('pt')}
              aria-pressed={lang === 'pt'}
            >
              PT
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-root {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: rgba(9, 9, 11, 0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-hairline);
          height: 60px;
          display: flex;
          align-items: center;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .navbar-logo-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background-color: var(--surface-raised);
          border: 1px solid var(--border-hairline);
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
        }

        .navbar-terminal-icon {
          color: var(--accent-teal);
        }

        .navbar-logo-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .navbar-author-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .navbar-status-wrapper {
          display: none;
        }

        @media (min-width: 840px) {
          .navbar-status-wrapper {
            display: block;
          }
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .navbar-nav-links {
          display: none;
          align-items: center;
          gap: 1rem;
        }

        @media (min-width: 680px) {
          .navbar-nav-links {
            display: flex;
          }
        }

        .navbar-nav-link {
          font-size: 0.825rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .navbar-nav-link:hover {
          color: #ffffff;
        }

        .lang-switcher {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background-color: var(--surface-raised);
          border: 1px solid var(--border-hairline);
          padding: 0.2rem 0.45rem;
          border-radius: 6px;
        }

        .lang-globe-icon {
          color: var(--text-muted);
          margin-right: 0.15rem;
        }

        .lang-divider {
          color: var(--border-subtle);
          font-size: 0.75rem;
        }

        .lang-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.15rem 0.35rem;
          border-radius: 3px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .lang-btn:hover {
          color: var(--text-primary);
        }

        .lang-btn.active {
          color: var(--text-primary);
          background-color: var(--surface-hover);
          font-weight: 600;
        }
      `}</style>
    </header>
  );
}
