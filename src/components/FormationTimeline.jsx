import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function FormationTimeline() {
  const { lang, t } = useLanguage();

  return (
    <section id="trayectoria" className="section timeline-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            {lang === 'es' ? '// Formación Profesional' : '// Formação Profissional'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'Trayectoria Académica & Certificaciones' : 'Trajetória Acadêmica & Certificações'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Formación dual combinando la rigurosidad analítica universitaria con la práctica técnica aplicada del SENA.'
              : 'Formação combinando o rigor analítico da Engenharia de Sistemas com a prática técnica aplicada do SENA.'}
          </p>
        </div>

        <div className="timeline-wrapper">
          {t.education.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                {idx === 0 ? (
                  <BookOpen size={16} className="marker-icon active" />
                ) : idx === 1 ? (
                  <GraduationCap size={16} className="marker-icon active" />
                ) : (
                  <Award size={16} className="marker-icon certified" />
                )}
                {idx < t.education.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content card">
                <div className="timeline-content-header">
                  <div>
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <div className="timeline-institution font-mono">{item.institution}</div>
                  </div>
                  <div className="timeline-badges">
                    <span className={`badge ${item.status === 'Graduado' ? 'badge-certified' : 'badge-live'}`}>
                      {item.status}
                    </span>
                    <span className="badge font-mono">{item.period}</span>
                  </div>
                </div>

                <p className="timeline-focus">{item.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-section {
          background-color: #0b0b0e;
        }

        .timeline-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 860px;
          margin: 0 auto;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 36px 1fr;
          gap: 1.25rem;
          position: relative;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .marker-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--surface-raised);
          border: 1px solid var(--border-hairline);
          padding: 6px;
        }

        .marker-icon.active {
          color: var(--accent-teal);
          border-color: rgba(20, 184, 166, 0.4);
        }

        .marker-icon.certified {
          color: var(--accent-blue);
          border-color: rgba(59, 130, 246, 0.4);
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          background-color: var(--border-hairline);
          margin-top: 0.5rem;
        }

        .timeline-content {
          padding: 1.35rem;
        }

        .timeline-content-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .timeline-degree {
          font-size: 1.15rem;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .timeline-institution {
          font-size: 0.8rem;
          color: var(--accent-teal);
        }

        .timeline-badges {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .badge-certified {
          background-color: var(--accent-blue-subtle);
          color: var(--accent-blue);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .timeline-focus {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
