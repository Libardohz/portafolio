import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Cpu, Layers, Code, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('arch');

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Cabecera del Modal */}
        <div className="modal-header">
          <div>
            <div className="badge badge-live mb-1">
              <span>{project.badge}</span>
            </div>
            <h3 className="modal-title">{project.title}</h3>
            <span className="modal-category">{project.category}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Pestañas de Navegación Técnica */}
        <div className="modal-tabs">
          <button
            type="button"
            className={`modal-tab ${activeTab === 'arch' ? 'active' : ''}`}
            onClick={() => setActiveTab('arch')}
          >
            <Layers size={14} />
            <span>{lang === 'es' ? 'Arquitectura & Flujo' : 'Arquitetura & Fluxo'}</span>
          </button>
          <button
            type="button"
            className={`modal-tab ${activeTab === 'solution' ? 'active' : ''}`}
            onClick={() => setActiveTab('solution')}
          >
            <Cpu size={14} />
            <span>{lang === 'es' ? 'Problema & Solución' : 'Problema & Solução'}</span>
          </button>
          <button
            type="button"
            className={`modal-tab ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            <Code size={14} />
            <span>{lang === 'es' ? 'Código Destacado' : 'Código em Destaque'}</span>
          </button>
        </div>

        {/* Contenido de la Pestaña Activa */}
        <div className="modal-body">
          {activeTab === 'arch' && (
            <div className="tab-pane">
              <h4 className="pane-subtitle">{lang === 'es' ? 'Diagrama de Flujo del Sistema' : 'Diagrama de Fluxo do Sistema'}</h4>
              <div className="flow-diagram-box font-mono">
                {project.architecture.split(' -> ').map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="flow-node">
                      <span className="flow-node-index">[{idx + 1}]</span>
                      <span className="flow-node-text">{step}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="flow-connector">
                        <ArrowRight size={14} className="flow-arrow" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <h4 className="pane-subtitle mt-4">{lang === 'es' ? 'Métricas de Validación Técnica' : 'Métricas de Validação'}</h4>
              <div className="metrics-list">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-item">
                    <CheckCircle size={15} className="metric-icon" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'solution' && (
            <div className="tab-pane">
              <div className="card challenge-card mb-3">
                <span className="section-label">{lang === 'es' ? 'Desafío Técnico' : 'Desafio Técnico'}</span>
                <p className="challenge-text">{project.problem}</p>
              </div>

              <div className="card solution-card">
                <span className="section-label text-teal">{lang === 'es' ? 'Solución Implementada' : 'Solução Implementada'}</span>
                <p className="solution-text">{project.solution}</p>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="tab-pane">
              <span className="section-label">{lang === 'es' ? 'Implementación Representativa' : 'Implementação Representativa'}</span>
              <pre className="code-viewer font-mono">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer del Modal con Stack Completo */}
        <div className="modal-footer">
          <div className="modal-stack-pills">
            {project.stack.map((item, idx) => (
              <span key={idx} className="badge">
                {item}
              </span>
            ))}
          </div>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
            {lang === 'es' ? 'Cerrar' : 'Fechar'}
          </button>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal-container {
          background-color: #121216;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          width: 100%;
          max-width: 680px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-modal);
          overflow: hidden;
          animation: modalEnter 150ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalEnter {
          from { opacity: 0; transform: scale(0.97) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-hairline);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          background-color: #15151a;
        }

        .modal-title {
          font-size: 1.25rem;
          color: #ffffff;
          margin: 0.25rem 0;
        }

        .modal-category {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .modal-close-btn {
          background: transparent;
          border: 1px solid var(--border-hairline);
          color: var(--text-secondary);
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: #ffffff;
          background-color: var(--surface-hover);
        }

        .modal-tabs {
          display: flex;
          background-color: #0d0d10;
          border-bottom: 1px solid var(--border-hairline);
          padding: 0 1rem;
          gap: 0.5rem;
        }

        .modal-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          color: var(--text-muted);
          font-family: var(--font-sans);
          font-size: 0.825rem;
          font-weight: 500;
          padding: 0.75rem 0.6rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-tab:hover {
          color: var(--text-primary);
        }

        .modal-tab.active {
          color: var(--accent-teal);
          border-bottom-color: var(--accent-teal);
        }

        .modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          flex: 1;
        }

        .pane-subtitle {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .flow-diagram-box {
          background-color: #0a0a0d;
          border: 1px solid var(--border-hairline);
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .flow-node {
          background-color: var(--surface-raised);
          border: 1px solid var(--border-hairline);
          border-radius: 6px;
          padding: 0.6rem 0.85rem;
          font-size: 0.8rem;
          color: #fafafa;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .flow-node-index {
          color: var(--accent-teal);
          font-weight: 600;
        }

        .flow-connector {
          display: flex;
          justify-content: center;
          color: var(--text-muted);
        }

        .flow-arrow {
          transform: rotate(90deg);
        }

        .metrics-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .metric-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .metric-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }

        .challenge-card {
          background-color: rgba(239, 68, 68, 0.05);
          border-color: rgba(239, 68, 68, 0.2);
        }

        .solution-card {
          background-color: rgba(20, 184, 166, 0.05);
          border-color: rgba(20, 184, 166, 0.2);
        }

        .text-teal {
          color: var(--accent-teal);
        }

        .code-viewer {
          background-color: #09090c;
          border: 1px solid var(--border-hairline);
          border-radius: 8px;
          padding: 1rem;
          font-size: 0.8rem;
          line-height: 1.5;
          color: #a7f3d0;
          overflow-x: auto;
          margin-top: 0.5rem;
        }

        .modal-footer {
          padding: 1rem 1.5rem;
          background-color: #15151a;
          border-top: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .modal-stack-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .btn-sm {
          padding: 0.35rem 0.8rem;
          font-size: 0.8rem;
        }

        .mb-1 { margin-bottom: 0.25rem; }
        .mb-3 { margin-bottom: 1rem; }
        .mt-4 { margin-top: 1.25rem; }
      `}</style>
    </div>
  );
}
