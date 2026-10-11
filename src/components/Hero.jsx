import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, MessageSquare, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenCv }) {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Columna Izquierda: Identidad & Propuesta de Valor */}
          <div className="hero-main-content">
            <div className="hero-location-badge">
              <MapPin size={12} className="hero-pin-icon" />
              <span>{t.profile.location}</span>
            </div>

            <h1 className="hero-name">{t.profile.name}</h1>
            <h2 className="hero-title">{t.profile.title}</h2>

            <p className="hero-summary">{t.profile.summary}</p>

            {/* Acciones directas para reclutadores */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenCv}
                title={lang === 'es' ? 'Ver y descargar Hoja de Vida' : 'Ver e baixar Currículo'}
              >
                <FileText size={16} />
                <span>{lang === 'es' ? 'Ver Hoja de Vida (CV)' : 'Ver Currículo (CV)'}</span>
              </button>

              <a
                href={`mailto:${t.profile.email}`}
                className="btn btn-teal"
                title={lang === 'es' ? 'Enviar correo electrónico directo' : 'Enviar e-mail direto'}
              >
                <MessageSquare size={16} />
                <span>{lang === 'es' ? 'Enviar Correo' : 'Enviar E-mail'}</span>
                <ArrowUpRight size={14} />
              </a>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCopyEmail}
                title={lang === 'es' ? 'Copiar correo electrónico' : 'Copiar e-mail'}
              >
                {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copied ? (lang === 'es' ? '¡Correo Copiado!' : 'E-mail Copiado!') : (lang === 'es' ? 'Copiar Correo' : 'Copiar E-mail')}</span>
              </button>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Diagnóstico Técnico / Terminal Spec */}
          <div className="hero-technical-aside">
            <div className="card tech-spec-card">
              <div className="tech-spec-header">
                <span className="tech-spec-dot red"></span>
                <span className="tech-spec-dot yellow"></span>
                <span className="tech-spec-dot green"></span>
                <span className="font-mono tech-spec-title">lh-sysinfo.json</span>
              </div>
              <div className="tech-spec-body font-mono">
                <div className="spec-row">
                  <span className="spec-key">"engineer"</span>: <span className="spec-string">"{t.profile.name}"</span>,
                </div>
                <div className="spec-row">
                  <span className="spec-key">"education"</span>: [
                  <div className="spec-nested">
                    <span className="spec-string">"Ingeniería de Sistemas (En curso)"</span>,
                    <span className="spec-string">"ADSO Tecnólogo - SENA (En curso)"</span>,
                    <span className="spec-string">"Técnico en Sistemas - SENA (Graduado)"</span>
                  </div>
                  ],
                </div>
                <div className="spec-row">
                  <span className="spec-key">"core_focus"</span>: [
                  <div className="spec-nested">
                    <span className="spec-string">"Backend Java & Spring Boot"</span>,
                    <span className="spec-string">"Web Scraping & Automatización"</span>,
                    <span className="spec-string">"React PWA Offline-First"</span>
                  </div>
                  ],
                </div>
                <div className="spec-row">
                  <span className="spec-key">"languages"</span>: &#123;
                  <div className="spec-nested">
                    <span className="spec-key">"es"</span>: <span className="spec-string">"Nativo"</span>,
                    <span className="spec-key">"pt"</span>: <span className="spec-string">"Intermedio"</span>
                  </div>
                  &#125;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 4.5rem 0 3rem;
          border-bottom: 1px solid var(--border-hairline);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 920px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3.5rem;
          }
        }

        .hero-location-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          background-color: var(--surface-raised);
          border: 1px solid var(--border-hairline);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          margin-bottom: 1rem;
        }

        .hero-pin-icon {
          color: var(--accent-teal);
        }

        .hero-name {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 0.35rem;
        }

        @media (min-width: 640px) {
          .hero-name {
            font-size: 3rem;
          }
        }

        .hero-title {
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--accent-teal);
          margin-bottom: 1.25rem;
        }

        .hero-summary {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2rem;
          max-width: 580px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
        }

        .text-emerald {
          color: var(--accent-emerald);
        }

        /* Technical spec terminal card */
        .tech-spec-card {
          background-color: #0d0d10;
          padding: 1.25rem;
          border-radius: 8px;
        }

        .tech-spec-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding-bottom: 0.75rem;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-hairline);
        }

        .tech-spec-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .tech-spec-dot.red { background-color: #ef4444; opacity: 0.8; }
        .tech-spec-dot.yellow { background-color: #f59e0b; opacity: 0.8; }
        .tech-spec-dot.green { background-color: #10b981; opacity: 0.8; }

        .tech-spec-title {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-left: 0.35rem;
        }

        .tech-spec-body {
          font-size: 0.78rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .spec-row {
          margin-bottom: 0.35rem;
        }

        .spec-nested {
          padding-left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .spec-key {
          color: #93c5fd;
        }

        .spec-string {
          color: #a7f3d0;
        }
      `}</style>
    </section>
  );
}
