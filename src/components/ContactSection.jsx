import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Mail, FileText, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function ContactSection({ onOpenCv }) {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">
            {lang === 'es' ? '// Vinculación & Empleo' : '// Recrutamento & Contratação'}
          </span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-desc mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="contact-cards-grid">
          {/* Tarjeta Correo Electrónico */}
          <div className="card contact-action-card">
            <div className="contact-icon-wrapper teal">
              <Mail size={22} />
            </div>
            <h3 className="contact-card-title">{t.contact.channels[0].title}</h3>
            <p className="contact-card-note font-mono text-sm">{t.profile.email}</p>
            <div className="contact-btn-group">
              <a
                href={`mailto:${t.profile.email}`}
                className="btn btn-teal w-full"
              >
                <span>{lang === 'es' ? 'Redactar Correo' : 'Escrever E-mail'}</span>
                <ArrowUpRight size={14} />
              </a>
              <button
                type="button"
                className="btn btn-secondary w-full"
                onClick={handleCopyEmail}
              >
                {copied ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
                <span>{copied ? (lang === 'es' ? '¡Copiado!' : 'Copiado!') : (lang === 'es' ? 'Copiar Dirección' : 'Copiar E-mail')}</span>
              </button>
            </div>
          </div>

          {/* Tarjeta Hoja de Vida */}
          <div className="card contact-action-card">
            <div className="contact-icon-wrapper amber">
              <FileText size={22} />
            </div>
            <h3 className="contact-card-title">{t.contact.channels[1].title}</h3>
            <p className="contact-card-note">{t.contact.channels[1].note}</p>
            <button
              type="button"
              className="btn btn-primary w-full mt-auto"
              onClick={onOpenCv}
            >
              <FileText size={15} />
              <span>{t.contact.channels[1].value}</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: #0d0d11;
        }

        .text-center {
          text-align: center;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 760px;
          margin: 0 auto;
        }

        @media (min-width: 720px) {
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .contact-btn-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }

        .contact-action-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1.5rem;
          background-color: var(--surface);
        }

        .contact-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          border: 1px solid var(--border-hairline);
        }

        .contact-icon-wrapper.teal {
          background-color: var(--accent-teal-subtle);
          color: var(--accent-teal);
          border-color: rgba(20, 184, 166, 0.25);
        }

        .contact-icon-wrapper.blue {
          background-color: var(--accent-blue-subtle);
          color: var(--accent-blue);
          border-color: rgba(59, 130, 246, 0.25);
        }

        .contact-icon-wrapper.amber {
          background-color: var(--accent-amber-subtle);
          color: var(--accent-amber);
          border-color: rgba(245, 158, 11, 0.25);
        }

        .contact-card-title {
          font-size: 1.05rem;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 0.35rem;
        }

        .contact-card-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .text-sm {
          font-size: 0.75rem;
        }

        .w-full {
          width: 100%;
        }

        .text-emerald {
          color: var(--accent-emerald);
        }
      `}</style>
    </section>
  );
}
