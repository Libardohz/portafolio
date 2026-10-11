import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function StatsBar() {
  const { t } = useLanguage();

  return (
    <div className="stats-bar-root">
      <div className="container">
        <div className="stats-grid">
          {t.stats.map((stat, idx) => (
            <div key={idx} className="stat-card card">
              <div className="stat-value font-mono">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-bar-root {
          padding: 2.5rem 0;
          background-color: #0c0c0f;
          border-bottom: 1px solid var(--border-hairline);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
          }
        }

        .stat-card {
          padding: 1.15rem;
          background-color: var(--surface);
          border: 1px solid var(--border-hairline);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 1.85rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .stat-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}
