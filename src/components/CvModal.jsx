import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Printer, Download, MapPin, Mail, MessageSquare } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cv-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Barra superior de controles (no se imprime) */}
        <div className="cv-modal-toolbar no-print">
          <div className="cv-modal-toolbar-title font-mono">
            <span>CV_{t.profile.name.replace(/\s+/g, '_')}.pdf</span>
          </div>
          <div className="cv-modal-toolbar-actions">
            <button type="button" className="btn btn-primary btn-sm" onClick={handlePrint}>
              <Printer size={15} />
              <span>{lang === 'es' ? 'Imprimir / Guardar PDF' : 'Imprimir / Salvar PDF'}</span>
            </button>
            <button
              type="button"
              className="cv-close-btn"
              onClick={onClose}
              aria-label="Cerrar vista de CV"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Hoja de Vida Renderizada (Estilo Ejecutivo Limpio) */}
        <div className="cv-paper">
          <header className="cv-header">
            <h1 className="cv-name">{t.profile.name}</h1>
            <div className="cv-headline">{t.profile.title}</div>
            <div className="cv-contact-row font-mono">
              <span>
                <MapPin size={12} className="inline-icon" /> {t.profile.location}
              </span>
              <span>•</span>
              <span>
                <Mail size={12} className="inline-icon" /> {t.profile.email}
              </span>
            </div>
          </header>

          <hr className="cv-divider" />

          {/* Resumen */}
          <section className="cv-section">
            <h2 className="cv-section-title font-mono">
              {lang === 'es' ? '1. PERFIL PROFESIONAL' : '1. PERFIL PROFISSIONAL'}
            </h2>
            <p className="cv-text">{t.profile.summary}</p>
          </section>

          {/* Educación */}
          <section className="cv-section">
            <h2 className="cv-section-title font-mono">
              {lang === 'es' ? '2. FORMACIÓN ACADÉMICA' : '2. FORMAÇÃO ACADÊMICA'}
            </h2>
            <div className="cv-list">
              {t.education.map((edu, idx) => (
                <div key={idx} className="cv-item">
                  <div className="cv-item-header">
                    <span className="cv-item-title">{edu.degree}</span>
                    <span className="cv-item-period font-mono">{edu.period} ({edu.status})</span>
                  </div>
                  <div className="cv-item-subtitle">{edu.institution}</div>
                  <p className="cv-item-desc">{edu.focus}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Proyectos Reales */}
          <section className="cv-section">
            <h2 className="cv-section-title font-mono">
              {lang === 'es' ? '3. PROYECTOS & SISTEMAS CONSTRUIDOS' : '3. PROJETOS & SISTEMAS DESENVOLVIDOS'}
            </h2>
            <div className="cv-list">
              {t.projects.map((proj) => (
                <div key={proj.id} className="cv-item">
                  <div className="cv-item-header">
                    <span className="cv-item-title">{proj.title}</span>
                    <span className="cv-item-period font-mono">{proj.badge}</span>
                  </div>
                  <div className="cv-item-subtitle">{proj.category}</div>
                  <p className="cv-item-desc">{proj.shortDesc}</p>
                  <div className="cv-item-tech font-mono">
                    <strong>Stack:</strong> {proj.stack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Habilidades e Idiomas */}
          <section className="cv-section">
            <h2 className="cv-section-title font-mono">
              {lang === 'es' ? '4. COMPETENCIAS TÉCNICAS E IDIOMAS' : '4. COMPETÊNCIAS TÉCNICAS E IDIOMAS'}
            </h2>
            <div className="cv-skills-grid">
              <div className="cv-skill-col">
                <strong>{lang === 'es' ? 'Automatización:' : 'Automação:'}</strong>
                <p>Web Scraping (Cheerio/Axios), Bots de Telegram, Cron Jobs, Scripts Node.js.</p>
              </div>
              <div className="cv-skill-col">
                <strong>Backend & Datos:</strong>
                <p>Java 17, Spring Boot 3, REST APIs, POO Avanzada, SQLite, PostgreSQL (Supabase).</p>
              </div>
              <div className="cv-skill-col">
                <strong>Frontend:</strong>
                <p>React 18/19, Vite, PWAs Offline-First, OCR (Tesseract.js), Exportación PDF.</p>
              </div>
              <div className="cv-skill-col">
                <strong>{lang === 'es' ? 'Idiomas:' : 'Idiomas:'}</strong>
                <p>Español (Nativo) · Portugués (Intermedio - Comunicación y lectura técnica).</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .cv-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          overflow-y: auto;
        }

        .cv-modal-container {
          background-color: #111115;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          width: 100%;
          max-width: 840px;
          max-height: 94vh;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-modal);
          overflow: hidden;
        }

        .cv-modal-toolbar {
          padding: 0.85rem 1.25rem;
          background-color: #17171d;
          border-bottom: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cv-modal-toolbar-title {
          font-size: 0.8rem;
          color: var(--accent-teal);
        }

        .cv-modal-toolbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cv-close-btn {
          background: transparent;
          border: 1px solid var(--border-hairline);
          color: var(--text-secondary);
          width: 30px;
          height: 30px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .cv-close-btn:hover {
          color: #ffffff;
          background-color: var(--surface-hover);
        }

        /* Papel del CV */
        .cv-paper {
          padding: 2.5rem;
          background-color: #ffffff;
          color: #1f2937;
          overflow-y: auto;
          font-family: var(--font-sans);
          line-height: 1.5;
        }

        .cv-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .cv-name {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.25rem;
          letter-spacing: -0.02em;
        }

        .cv-headline {
          font-size: 1rem;
          color: #0f766e;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }

        .cv-contact-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          font-size: 0.78rem;
          color: #4b5563;
        }

        .inline-icon {
          vertical-align: -1px;
        }

        .cv-divider {
          border: 0;
          border-top: 1px solid #e5e7eb;
          margin-bottom: 1.5rem;
        }

        .cv-section {
          margin-bottom: 1.5rem;
        }

        .cv-section-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #111827;
          border-bottom: 1px solid #111827;
          padding-bottom: 0.25rem;
          margin-bottom: 0.75rem;
          letter-spacing: 0.04em;
        }

        .cv-text {
          font-size: 0.85rem;
          color: #374151;
          line-height: 1.6;
        }

        .cv-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cv-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cv-item-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #111827;
        }

        .cv-item-period {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .cv-item-subtitle {
          font-size: 0.8rem;
          font-weight: 600;
          color: #0d9488;
          margin-bottom: 0.2rem;
        }

        .cv-item-desc {
          font-size: 0.82rem;
          color: #4b5563;
          margin-bottom: 0.25rem;
          line-height: 1.5;
        }

        .cv-item-tech {
          font-size: 0.75rem;
          color: #374151;
        }

        .cv-skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          font-size: 0.82rem;
        }

        .cv-skill-col strong {
          color: #111827;
        }

        .cv-skill-col p {
          color: #4b5563;
          margin-top: 0.15rem;
        }

        /* Estilos de Impresión */
        @media print {
          body * {
            visibility: hidden;
          }
          .cv-paper, .cv-paper * {
            visibility: visible;
          }
          .cv-modal-backdrop {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            background: none;
            padding: 0;
          }
          .cv-modal-container {
            border: none;
            box-shadow: none;
            max-width: 100%;
            max-height: none;
          }
          .no-print {
            display: none !important;
          }
          .cv-paper {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
