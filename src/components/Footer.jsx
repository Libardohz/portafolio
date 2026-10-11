import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-brand font-mono">
            <Terminal size={14} className="footer-icon" />
            <span>{t.profile.name}</span>
          </div>
          <p className="footer-copy">
            {lang === 'es'
              ? 'Ingeniería de Sistemas & Automatización · Desarrollado con React + Vite bajo estándares Anti-AI.'
              : 'Engenharia de Sistemas & Automação · Desenvolvido com React + Vite sob padrões Anti-AI.'}
          </p>
        </div>

        <button type="button" className="footer-scroll-top btn btn-secondary" onClick={scrollToTop}>
          <ArrowUp size={14} />
          <span>{lang === 'es' ? 'Volver arriba' : 'Voltar ao topo'}</span>
        </button>
      </div>

      <style>{`
        .footer-root {
          padding: 2.5rem 0;
          background-color: #09090b;
          border-top: 1px solid var(--border-hairline);
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
        }

        .footer-icon {
          color: var(--accent-teal);
        }

        .footer-copy {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin: 0;
        }

        .footer-scroll-top {
          font-size: 0.78rem;
          padding: 0.4rem 0.75rem;
        }
      `}</style>
    </footer>
  );
}
