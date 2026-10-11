import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Cpu, Server, Layout, Languages } from 'lucide-react';

export default function SkillsMatrix() {
  const { lang, t } = useLanguage();

  return (
    <section id="habilidades" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            {lang === 'es' ? '// Stack & Capacidades' : '// Stack & Capacidades'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'Matriz de Competencias Técnicas' : 'Matriz de Competências Técnicas'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Conjunto de tecnologías y herramientas dominadas con enfoque en rendimiento, arquitectura y resolución de tareas complejas.'
              : 'Tecnologias dominadas com foco em desempenho, boas práticas e resolução prática de demandas.'}
          </p>
        </div>

        <div className="skills-grid">
          {/* Tarjeta 1: Automatización */}
          <div className="card skill-group-card">
            <div className="skill-group-header">
              <Cpu size={18} className="skill-group-icon teal" />
              <h3 className="skill-group-title">
                {lang === 'es' ? 'Automatización & Web Scraping' : 'Automação & Web Scraping'}
              </h3>
            </div>
            <div className="skill-items-list">
              {t.skills.automation.map((item, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-name font-mono">{item.name}</div>
                  <div className="skill-detail">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta 2: Backend */}
          <div className="card skill-group-card">
            <div className="skill-group-header">
              <Server size={18} className="skill-group-icon blue" />
              <h3 className="skill-group-title">
                {lang === 'es' ? 'Backend & Arquitectura' : 'Backend & Arquitetura'}
              </h3>
            </div>
            <div className="skill-items-list">
              {t.skills.backend.map((item, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-name font-mono">{item.name}</div>
                  <div className="skill-detail">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta 3: Frontend & PWA */}
          <div className="card skill-group-card">
            <div className="skill-group-header">
              <Layout size={18} className="skill-group-icon amber" />
              <h3 className="skill-group-title">
                {lang === 'es' ? 'Frontend & Integraciones PWA' : 'Frontend & PWA'}
              </h3>
            </div>
            <div className="skill-items-list">
              {t.skills.frontend.map((item, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-name font-mono">{item.name}</div>
                  <div className="skill-detail">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta 4: Idiomas */}
          <div className="card skill-group-card">
            <div className="skill-group-header">
              <Languages size={18} className="skill-group-icon green" />
              <h3 className="skill-group-title">
                {lang === 'es' ? 'Idiomas & Comunicación' : 'Idiomas & Comunicação'}
              </h3>
            </div>
            <div className="skill-items-list">
              {t.skills.languages.map((item, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-name-row">
                    <span className="skill-name font-mono">{item.name}</span>
                    <span className="badge badge-live">{item.level}</span>
                  </div>
                  <div className="skill-detail">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .skill-group-card {
          padding: 1.5rem;
          background-color: var(--surface);
        }

        .skill-group-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding-bottom: 0.85rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-hairline);
        }

        .skill-group-icon.teal { color: var(--accent-teal); }
        .skill-group-icon.blue { color: var(--accent-blue); }
        .skill-group-icon.amber { color: var(--accent-amber); }
        .skill-group-icon.green { color: var(--accent-emerald); }

        .skill-group-title {
          font-size: 1.05rem;
          color: #ffffff;
          font-weight: 600;
        }

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .skill-item {
          padding: 0.6rem 0.75rem;
          background-color: var(--surface-raised);
          border: 1px solid var(--border-hairline);
          border-radius: 6px;
        }

        .skill-name-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.2rem;
        }

        .skill-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.15rem;
        }

        .skill-detail {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
}
