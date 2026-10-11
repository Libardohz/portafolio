import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Database, Layout, Bell, Wrench, CheckCircle2, AlertCircle } from 'lucide-react';

const iconsMap = {
  scraping: Database,
  microapps: Layout,
  bots: Bell,
  support: Wrench,
};

export default function SolutionsSection() {
  const { lang, t } = useLanguage();
  const solutions = t.solutions;

  if (!solutions) return null;

  return (
    <section id="soluciones" className="section solutions-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{solutions.label}</span>
          <h2 className="section-title">{solutions.title}</h2>
          <p className="section-desc">{solutions.subtitle}</p>
        </div>

        <div className="solutions-grid">
          {solutions.items.map((item) => {
            const Icon = iconsMap[item.id] || Database;
            return (
              <div key={item.id} className="card solution-card">
                <div className="solution-card-header">
                  <div className="solution-icon-wrapper">
                    <Icon size={18} />
                  </div>
                  <h3 className="solution-title">{item.title}</h3>
                </div>

                <div className="solution-card-body">
                  {/* Desafío o cuello de botella */}
                  <div className="solution-block pain-block">
                    <div className="block-label">
                      <AlertCircle size={13} className="block-icon pain" />
                      <span>{lang === 'es' ? 'Cuello de botella habitual:' : 'Gargalo habitual:'}</span>
                    </div>
                    <p className="block-text">{item.pain}</p>
                  </div>

                  {/* Solución técnica entregada */}
                  <div className="solution-block deliverable-block">
                    <div className="block-label">
                      <CheckCircle2 size={13} className="block-icon deliverable" />
                      <span>{lang === 'es' ? 'Cómo lo resuelvo:' : 'Como resolvo:'}</span>
                    </div>
                    <p className="block-text">{item.deliverable}</p>
                  </div>
                </div>

                {/* Tags de herramientas */}
                <div className="solution-card-footer">
                  <div className="solution-tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .solutions-section {
          background-color: #0b0b0e;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 820px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .solution-card {
          display: flex;
          flex-direction: column;
          background-color: var(--surface);
          border: 1px solid var(--border-hairline);
          padding: 1.5rem;
          border-radius: 10px;
        }

        .solution-card:hover {
          border-color: var(--border-subtle);
          background-color: #141418;
        }

        .solution-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-hairline);
        }

        .solution-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--surface-raised);
          border: 1px solid var(--border-hairline);
          color: var(--accent-teal);
          flex-shrink: 0;
        }

        .solution-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.3;
        }

        .solution-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
          flex: 1;
          margin-bottom: 1.25rem;
        }

        .solution-block {
          padding: 0.75rem 0.85rem;
          border-radius: 6px;
          border: 1px solid transparent;
        }

        .pain-block {
          background-color: rgba(245, 158, 11, 0.04);
          border-color: rgba(245, 158, 11, 0.15);
        }

        .deliverable-block {
          background-color: rgba(20, 184, 166, 0.04);
          border-color: rgba(20, 184, 166, 0.2);
        }

        .block-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 0.25rem;
        }

        .block-icon.pain {
          color: var(--accent-amber);
        }

        .block-icon.deliverable {
          color: var(--accent-teal);
        }

        .block-text {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .solution-card-footer {
          border-top: 1px solid var(--border-hairline);
          padding-top: 0.85rem;
          margin-top: auto;
        }

        .solution-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
      `}</style>
    </section>
  );
}
