import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from './ProjectModal';
import { Terminal, Check, Layers } from 'lucide-react';

export default function ProjectShowcase() {
  const { lang, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="proyectos" className="section projects-section">
      <div className="container">
        {/* Encabezado de Sección */}
        <div className="section-header">
          <span className="section-label">
            {lang === 'es' ? '// Showcase Técnico' : '// Showcase Técnico'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'Proyectos & Sistemas Desarrollados' : 'Projetos & Sistemas Desenvolvidos'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Aplicaciones reales con arquitectura modular, automatizaciones desatendidas y sistemas orientados a resolver problemas de negocio sin cajas negras.'
              : 'Aplicações reais com arquitetura modular, automações autônomas e sistemas focados em resolver desafios práticos de negócio.'}
          </p>
        </div>

        {/* Rejilla Asimétrica de Proyectos */}
        <div className="projects-grid">
          {t.projects.map((project) => (
            <div key={project.id} className="card project-card">
              <div className="project-card-header">
                <span className="badge badge-live">{project.badge}</span>
                <span className="project-category font-mono">{project.category}</span>
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.shortDesc}</p>

              {/* Lista compacta de métricas y validaciones */}
              <div className="project-metrics-list">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="project-metric-item">
                    <Check size={13} className="project-metric-icon" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              {/* Stack Tecnológico */}
              <div className="project-stack-tags">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Disparador de Inspección Técnica */}
              <div className="project-card-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-inspect"
                  onClick={() => setSelectedProject(project)}
                >
                  <Terminal size={15} />
                  <span>{lang === 'es' ? 'Inspeccionar Arquitectura' : 'Inspecionar Arquitetura'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Interactivo de Inspección Técnica */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .projects-section {
          background-color: var(--bg);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 820px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .project-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 10px;
          padding: 1.5rem;
          background-color: var(--surface);
          border: 1px solid var(--border-hairline);
        }

        .project-card:hover {
          border-color: var(--border-subtle);
          background-color: #131317;
        }

        .project-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }

        .project-category {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .project-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .project-card-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.15rem;
        }

        .project-metrics-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
          padding-left: 0.15rem;
        }

        .project-metric-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .project-metric-icon {
          color: var(--accent-teal);
          flex-shrink: 0;
        }

        .project-stack-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.5rem;
        }

        .project-card-footer {
          border-top: 1px solid var(--border-hairline);
          padding-top: 1rem;
          margin-top: auto;
        }

        .btn-inspect {
          width: 100%;
          justify-content: center;
          font-size: 0.825rem;
        }
      `}</style>
    </section>
  );
}
