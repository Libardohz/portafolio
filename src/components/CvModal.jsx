import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Printer, Copy, Check } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  const { lang, t } = useLanguage();
  const [copiedText, setCopiedText] = useState(false);
  const [fontStyle, setFontStyle] = useState('serif'); // 'serif' (Harvard clásico) o 'sans' (Moderno)

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

  const plainTextHarvardEs = `LIBARDO HERNÁNDEZ
Montería, Colombia | libardohernandez078@gmail.com | github.com/Libardohz | libardo-hernandez.netlify.app
Disponibilidad: Inmediata (Modalidad 100% Remoto)

==================================================
PERFIL PROFESIONAL
==================================================
Estudiante de Ingeniería de Sistemas (Universidad de Córdoba), Tecnólogo en Análisis y Desarrollo de Software (ADSO - SENA) y Técnico en Sistemas egresado del SENA. Especializado en resolución de cuellos de botella mediante automatización de tareas (web scraping, bots, scripts programados), desarrollo de microaplicaciones web y soporte técnico de software y hardware. Sólidas bases en desarrollo orientado a objetos (Java 17, Spring Boot), JavaScript moderno, bases de datos relacionales y Excel avanzado.

==================================================
EDUCACIÓN
==================================================
UNIVERSIDAD DE CÓRDOBA | Montería, Colombia
Pregrado en Ingeniería de Sistemas | En curso (Estado: Activo)
• Algoritmos, estructuras de datos, arquitectura de software, bases de datos relacionales y gestión de proyectos tecnológicos.

SERVICIO NACIONAL DE APRENDIZAJE (SENA) | Colombia
Tecnología en Análisis y Desarrollo de Software (ADSO) | En curso (Estado: Activo)
• Ciclo de vida del software (SDLC), Scrum, desarrollo backend con Java y Spring Boot 3, interfaces web con React y modelado UML.

SERVICIO NACIONAL DE APRENDIZAJE (SENA) | Colombia
Técnico en Sistemas | Certificado (Graduado)
• Mantenimiento preventivo/correctivo de hardware, configuración de redes de datos, cableado estructurado y soporte técnico.

==================================================
PROYECTOS TÉCNICOS & DE INGENIERÍA
==================================================
Task Manager & Gestor PWA | React 18, Vite, Supabase, Groq AI, Web Workers, Tesseract.js
• Diseñó Progressive Web App (PWA) offline-first con persistencia local y sincronización reactiva en PostgreSQL vía Supabase.
• Integró motor OCR en Web Workers procesando documentos en cliente con 0ms de latencia, exportación PDF y modelos LLM con Groq SDK.

OfertasTracker: Crawler Autónomo & Bot Telegram | Node.js, Cheerio, Axios, SQLite, Telegram API
• Crawler desatendido con cron jobs para rastreo periódico de catálogos y almacenamiento histórico en SQLite para filtrar falsas rebajas.
• Automatizó despacho de alertas push en tiempo real a través de Telegram Bot API en menos de 2 segundos tras detectar caídas de precio.

Sistema de Control y Registro Vehicular | Java 17, Spring Boot 3, Spring MVC, JPA, Thymeleaf
• Arquitectó backend empresarial desacoplado en capas (Controller, Service, Repository) para trazabilidad de accesos en campus.
• Implementó validaciones transaccionales estrictas en la capa de servicio para prevenir registros simultáneos sin salida.

==================================================
EXPERIENCIA PRÁCTICA & SOPORTE TÉCNICO
==================================================
Desarrollo Independiente & Soporte de Sistemas | Colombia (2023 – Presente)
• Diagnóstico y mantenimiento preventivo/correctivo de hardware y software, configuración de periféricos y solución ágil de incidencias.
• Automatización de tareas repetitivas de recolección de datos mediante scripts en Node.js y reportes avanzados en Microsoft Excel.

==================================================
COMPETENCIAS TÉCNICAS E IDIOMAS
==================================================
• Lenguajes: Java 17, JavaScript (ES6+), SQL, HTML5, CSS3.
• Frameworks & Librerías: Spring Boot 3, React 18, Vite, Express, Cheerio, Axios, Tesseract.js, jspdf.
• Bases de Datos & Cloud: PostgreSQL, SQLite, Supabase, Git, GitHub, RESTful APIs, Netlify.
• Soporte & Herramientas: Diagnóstico de hardware y redes (SENA), soporte técnico a usuarios, Excel avanzado (tablas dinámicas, fórmulas).
• Idiomas: Español (Nativo) | Portugués (Intermedio B1/B2 - lectura técnica y conversación).`;

  const plainTextHarvardPt = `LIBARDO HERNÁNDEZ
Montería, Colômbia | libardohernandez078@gmail.com | github.com/Libardohz | libardo-hernandez.netlify.app
Disponibilidade: Imediata (Modalidade 100% Remoto)

==================================================
PERFIL PROFISSIONAL
==================================================
Estudante de Engenharia de Sistemas (Universidade de Córdoba), Tecnólogo em Análise e Desenvolvimento de Software (ADSO - SENA) e Técnico em Sistemas formado pelo SENA. Especializado na automação de processos (web scraping, bots, scripts agendados), desenvolvimento ágil de microaplicações web e suporte técnico a sistemas e hardware. Sólida fundamentação em POO (Java 17, Spring Boot), JavaScript moderno, bancos de dados relacionais e Excel avançado.

==================================================
FORMAÇÃO ACADÊMICA
==================================================
UNIVERSIDADE DE CÓRDOBA | Montería, Colômbia
Graduação em Engenharia de Sistemas | Em andamento (Status: Ativo)
• Algoritmos, estruturas de dados, arquitetura de software, bancos de dados relacionais e governança tecnológica.

SERVIÇO NACIONAL DE APRENDIZAGEM (SENA) | Colômbia
Tecnólogo em Análise e Desenvolvimento de Software (ADSO) | Em andamento (Status: Ativo)
• Ciclo de vida de software (SDLC), Scrum, backend com Java e Spring Boot 3, interfaces com React e modelagem UML.

SERVIÇO NACIONAL DE APRENDIZAGEM (SENA) | Colômbia
Técnico em Sistemas | Certificado (Graduado)
• Manutenção preventiva e corretiva de hardware, infraestrutura de redes, cabeamento estruturado e suporte técnico.

==================================================
PROJETOS TÉCNICOS & ENGENHARIA
==================================================
Task Manager & Gestor PWA | React 18, Vite, Supabase, Groq AI, Web Workers, Tesseract.js
• Desenvolveu PWA offline-first com persistência local e sincronização reativa em PostgreSQL via Supabase.
• Integrou OCR em Web Workers no cliente com 0ms de latência, geração de relatórios em PDF e inferência LLM via Groq SDK.

OfertasTracker: Crawler Autônomo & Bot Telegram | Node.js, Cheerio, Axios, SQLite, Telegram API
• Crawler autônomo com cron jobs para coleta periódica de catálogos e análise em SQLite para filtrar falsas promoções.
• Automatizou alertas push em tempo real via Telegram Bot API em menos de 2 segundos após detectar quedas de preço.

Sistema de Controle e Registro Veicular | Java 17, Spring Boot 3, Spring MVC, JPA, Thymeleaf
• Arquitetou backend corporativo em camadas (Controller, Service, Repository) para rastreabilidade de acessos em campus.
• Implementou validações transacionais rigorosas na camada de serviço para impedir duplicidades de entrada.

==================================================
EXPERIÊNCIA PRÁTICA & SUPORTE TÉCNICO
==================================================
Desenvolvimento Independente & Suporte de Sistemas | Colômbia (2023 – Presente)
• Diagnóstico e manutenção de equipamentos de informática, configuração de redes locais e resolução de falhas operacionais.
• Automação de rotinas repetitivas de coleta de dados com scripts Node.js e confecção de relatórios avançados em Excel.

==================================================
COMPETÊNCIAS TÉCNICAS E IDIOMAS
==================================================
• Linguagens: Java 17, JavaScript (ES6+), SQL, HTML5, CSS3.
• Frameworks & Bibliotecas: Spring Boot 3, React 18, Vite, Express, Cheerio, Axios, Tesseract.js, jspdf.
• Bancos de Dados & Cloud: PostgreSQL, SQLite, Supabase, Git, GitHub, RESTful APIs, Netlify.
• Suporte & Ferramentas: Diagnóstico de hardware e redes (SENA), suporte técnico a usuários, Excel avançado (tabelas dinâmicas, fórmulas).
• Idiomas: Espanhol (Nativo) | Português (Intermediário B1/B2 - leitura técnica e conversação).`;

  const copyPlainText = () => {
    const textToCopy = lang === 'es' ? plainTextHarvardEs : plainTextHarvardPt;
    navigator.clipboard.writeText(textToCopy);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="cv-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cv-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Barra superior de controles ejecutivos (No se imprime) */}
        <div className="cv-modal-toolbar no-print">
          <div className="cv-modal-toolbar-title font-mono">
            <span>CV_HARVARD_1_PAGINA_{t.profile.name.replace(/\s+/g, '_').toUpperCase()}.PDF</span>
          </div>

          <div className="cv-modal-toolbar-actions">
            {/* Selector de tipografía Harvard */}
            <div className="cv-font-toggle">
              <button
                type="button"
                className={`cv-font-btn ${fontStyle === 'serif' ? 'active' : ''}`}
                onClick={() => setFontStyle('serif')}
                title="Tipografía Clásica Harvard (Serif)"
              >
                Serif (Harvard)
              </button>
              <button
                type="button"
                className={`cv-font-btn ${fontStyle === 'sans' ? 'active' : ''}`}
                onClick={() => setFontStyle('sans')}
                title="Tipografía Moderna (Sans-Serif)"
              >
                Sans
              </button>
            </div>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={copyPlainText}
              title="Copiar texto plano estructurado para pegar en bolsas de empleo (ATS)"
            >
              {copiedText ? <Check size={14} className="text-teal" /> : <Copy size={14} />}
              <span>{copiedText ? (lang === 'es' ? '¡Copiado!' : 'Copiado!') : (lang === 'es' ? 'Copiar ATS' : 'Copiar ATS')}</span>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handlePrint}
              title="Guardar PDF en 1 sola página exacta sin hojas en blanco"
            >
              <Printer size={15} />
              <span>{lang === 'es' ? 'Guardar PDF (1 Página)' : 'Salvar PDF (1 Página)'}</span>
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

        {/* Hoja Harvard Oficial Renderizada (Calibrada a 1 Sola Página) */}
        <div className={`cv-paper ${fontStyle === 'serif' ? 'font-harvard-serif' : 'font-harvard-sans'}`}>
          {/* ENCABEZADO HARVARD */}
          <header className="harvard-header">
            <h1 className="harvard-name">{t.profile.name.toUpperCase()}</h1>
            <div className="harvard-contact-line">
              <span>Montería, Colombia</span>
              <span className="sep">|</span>
              <a href="mailto:libardohernandez078@gmail.com" className="harvard-link">libardohernandez078@gmail.com</a>
              <span className="sep">|</span>
              <a href="https://github.com/Libardohz" target="_blank" rel="noreferrer" className="harvard-link">github.com/Libardohz</a>
              <span className="sep">|</span>
              <a href="https://libardo-hernandez.netlify.app" target="_blank" rel="noreferrer" className="harvard-link">libardo-hernandez.netlify.app</a>
            </div>
            <div className="harvard-subline">
              <em>{lang === 'es' ? 'Disponibilidad Inmediata · Modalidad 100% Remoto' : 'Disponibilidade Imediata · Modalidade 100% Remoto'}</em>
            </div>
          </header>

          {/* 1. PERFIL PROFESIONAL */}
          <section className="harvard-section">
            <h2 className="harvard-section-title">
              {lang === 'es' ? 'PERFIL PROFESIONAL' : 'PERFIL PROFISSIONAL'}
            </h2>
            <p className="harvard-summary-text">
              {lang === 'es'
                ? 'Estudiante de Ingeniería de Sistemas (Universidad de Córdoba), Tecnólogo en Análisis y Desarrollo de Software (ADSO - SENA) y Técnico en Sistemas egresado del SENA. Especializado en la resolución de cuellos de botella mediante automatización de tareas (web scraping, bots, scripts programados), desarrollo de microaplicaciones web y soporte técnico de software y hardware. Sólidas bases en desarrollo orientado a objetos (Java 17, Spring Boot), JavaScript moderno, gestión de bases de datos relacionales y herramientas ofimáticas avanzadas (Excel).'
                : 'Estudante de Engenharia de Sistemas (Universidade de Córdoba), Tecnólogo em Análise e Desenvolvimento de Software (ADSO - SENA) e Técnico em Sistemas formado pelo SENA. Especializado na automação de processos (web scraping, bots, scripts agendados), desenvolvimento ágil de microaplicações web e suporte técnico a sistemas e hardware. Sólida fundamentação em POO (Java 17, Spring Boot), JavaScript moderno, bancos de dados relacionais e ferramentas de escritório avançadas (Excel).'}
            </p>
          </section>

          {/* 2. EDUCACIÓN */}
          <section className="harvard-section">
            <h2 className="harvard-section-title">
              {lang === 'es' ? 'EDUCACIÓN' : 'FORMAÇÃO ACADÊMICA'}
            </h2>
            <div className="harvard-entries">
              {/* Universidad de Córdoba */}
              <div className="harvard-entry">
                <div className="harvard-entry-row1">
                  <span className="harvard-institution">UNIVERSIDAD DE CÓRDOBA</span>
                  <span className="harvard-location">Montería, Colombia</span>
                </div>
                <div className="harvard-entry-row2">
                  <span className="harvard-degree">
                    <em>{lang === 'es' ? 'Pregrado en Ingeniería de Sistemas' : 'Graduação em Engenharia de Sistemas'}</em>
                  </span>
                  <span className="harvard-date">
                    <em>{lang === 'es' ? 'En curso (Activo)' : 'Em andamento (Ativo)'}</em>
                  </span>
                </div>
                <ul className="harvard-bullets">
                  <li>
                    {lang === 'es'
                      ? 'Algoritmos, estructuras de datos, arquitectura de software, bases de datos relacionales y gestión de proyectos tecnológicos.'
                      : 'Algoritmos, estruturas de dados, arquitetura de software, bancos de dados relacionais e governança tecnológica.'}
                  </li>
                </ul>
              </div>

              {/* SENA ADSO */}
              <div className="harvard-entry">
                <div className="harvard-entry-row1">
                  <span className="harvard-institution">SERVICIO NACIONAL DE APRENDIZAJE (SENA)</span>
                  <span className="harvard-location">Colombia</span>
                </div>
                <div className="harvard-entry-row2">
                  <span className="harvard-degree">
                    <em>{lang === 'es' ? 'Tecnología en Análisis y Desarrollo de Software (ADSO)' : 'Tecnólogo em Análise e Desenvolvimento de Software (ADSO)'}</em>
                  </span>
                  <span className="harvard-date">
                    <em>{lang === 'es' ? 'En curso (Activo)' : 'Em andamento (Ativo)'}</em>
                  </span>
                </div>
                <ul className="harvard-bullets">
                  <li>
                    {lang === 'es'
                      ? 'Ciclo de vida del software (SDLC), Scrum, desarrollo backend con Java y Spring Boot 3, interfaces web con React y modelado UML.'
                      : 'Ciclo de vida de software (SDLC), Scrum, backend com Java e Spring Boot 3, interfaces com React e modelagem UML.'}
                  </li>
                </ul>
              </div>

              {/* SENA Técnico en Sistemas */}
              <div className="harvard-entry">
                <div className="harvard-entry-row1">
                  <span className="harvard-institution">SERVICIO NACIONAL DE APRENDIZAJE (SENA)</span>
                  <span className="harvard-location">Colombia</span>
                </div>
                <div className="harvard-entry-row2">
                  <span className="harvard-degree">
                    <em>{lang === 'es' ? 'Técnico en Sistemas' : 'Técnico em Sistemas'}</em>
                  </span>
                  <span className="harvard-date">
                    <em>{lang === 'es' ? 'Certificado (Graduado)' : 'Certificado (Graduado)'}</em>
                  </span>
                </div>
                <ul className="harvard-bullets">
                  <li>
                    {lang === 'es'
                      ? 'Mantenimiento preventivo y correctivo de hardware, configuración de redes de datos, cableado estructurado y soporte técnico.'
                      : 'Manutenção preventiva e corretiva de hardware, infraestrutura de redes, cabeamento estruturado e suporte técnico.'}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. PROYECTOS TÉCNICOS & DE INGENIERÍA */}
          <section className="harvard-section">
            <h2 className="harvard-section-title">
              {lang === 'es' ? 'PROYECTOS TÉCNICOS & DE INGENIERÍA' : 'PROJETOS TÉCNICOS & ENGENHARIA'}
            </h2>
            <div className="harvard-entries">
              {/* Task Manager PWA */}
              <div className="harvard-entry">
                <div className="harvard-entry-row1">
                  <span className="harvard-project-title">
                    <strong>Task Manager & Gestor PWA</strong> | <em>React 18, Vite, Supabase, Groq AI, Web Workers, Tesseract.js</em>
                  </span>
                  <span className="harvard-date"><em>2024</em></span>
                </div>
                <ul className="harvard-bullets">
                  <li>
                    {lang === 'es'
                      ? 'Diseñó PWA offline-first con persistencia local y sincronización reactiva en base de datos PostgreSQL mediante Supabase.'
                      : 'Desenvolveu PWA offline-first com persistência local e sincronização reativa em banco PostgreSQL via Supabase.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Integró motor OCR en Web Workers procesando documentos en cliente con 0ms de latencia, exportación en PDF e inferencia LLM con Groq SDK.'
                      : 'Integrou motor OCR em Web Workers no cliente com 0ms de latência, exportação em PDF e inferência LLM via Groq SDK.'}
                  </li>
                </ul>
              </div>

              {/* OfertasTracker */}
              <div className="harvard-entry">
                <div className="harvard-entry-row1">
                  <span className="harvard-project-title">
                    <strong>OfertasTracker: Crawler Autónomo & Bot Telegram</strong> | <em>Node.js, Cheerio, Axios, SQLite, Telegram API</em>
                  </span>
                  <span className="harvard-date"><em>2024</em></span>
                </div>
                <ul className="harvard-bullets">
                  <li>
                    {lang === 'es'
                      ? 'Crawler desatendido con cron jobs para rastreo periódico de catálogos y análisis en SQLite contrastando contra históricos.'
                      : 'Crawler autônomo com cron jobs para coleta periódica de catálogos e análise em SQLite para filtrar falsas promoções.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Automatizó despacho de alertas push en tiempo real vía Telegram Bot API en menos de 2 segundos tras detectar caídas de precio.'
                      : 'Automatizou alertas push em tempo real via Telegram Bot API em menos de 2 segundos após detectar quedas reais de preço.'}
                  </li>
                </ul>
              </div>

              {/* Sistema Registro Vehicular */}
              <div className="harvard-entry">
                <div className="harvard-entry-row1">
                  <span className="harvard-project-title">
                    <strong>Sistema de Control y Registro Vehicular</strong> | <em>Java 17, Spring Boot 3, Spring MVC, JPA, Thymeleaf</em>
                  </span>
                  <span className="harvard-date"><em>2024</em></span>
                </div>
                <ul className="harvard-bullets">
                  <li>
                    {lang === 'es'
                      ? 'Arquitectó backend empresarial desacoplado en capas (Controller, Service, Repository) para trazabilidad y auditoría de accesos.'
                      : 'Arquitetou backend corporativo em camadas (Controller, Service, Repository) para rastreabilidade de acessos em campus.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Implementó validaciones transaccionales estrictas en la capa de servicio para prevenir duplicidades y asegurar consistencia de inventario.'
                      : 'Implementou validações transacionais rigorosas na camada de serviço para impedir duplicidades de entrada.'}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. EXPERIENCIA PRÁCTICA & SOPORTE TÉCNICO */}
          <section className="harvard-section">
            <h2 className="harvard-section-title">
              {lang === 'es' ? 'EXPERIENCIA PRÁCTICA & SOPORTE TÉCNICO' : 'EXPERIÊNCIA PRÁTICA & SUPORTE TÉCNICO'}
            </h2>
            <div className="harvard-entries">
              <div className="harvard-entry">
                <div className="harvard-entry-row1">
                  <span className="harvard-institution">
                    {lang === 'es' ? 'Desarrollo Independiente & Soporte de Sistemas' : 'Desenvolvimento Independente & Suporte de Sistemas'}
                  </span>
                  <span className="harvard-location">Colombia</span>
                </div>
                <div className="harvard-entry-row2">
                  <span className="harvard-degree">
                    <em>{lang === 'es' ? 'Desarrollador de Software & Técnico de Soporte' : 'Desenvolvedor de Software & Técnico de Suporte'}</em>
                  </span>
                  <span className="harvard-date">
                    <em>2023 – {lang === 'es' ? 'Presente' : 'Presente'}</em>
                  </span>
                </div>
                <ul className="harvard-bullets">
                  <li>
                    {lang === 'es'
                      ? 'Diagnóstico y mantenimiento preventivo/correctivo de equipos, configuración de periféricos y solución ágil de incidencias técnicas.'
                      : 'Diagnóstico e manutenção de equipamentos de informática, configuração de redes locais e resolução de falhas operacionais.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Automatización de tareas repetitivas de recolección de datos mediante scripts en Node.js y reportes avanzados en Microsoft Excel.'
                      : 'Automação de rotinas repetitivas de coleta de dados com scripts Node.js e confecção de relatórios avançados em Excel.'}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. COMPETENCIAS TÉCNICAS E IDIOMAS */}
          <section className="harvard-section" style={{ marginBottom: 0 }}>
            <h2 className="harvard-section-title">
              {lang === 'es' ? 'COMPETENCIAS TÉCNICAS E IDIOMAS' : 'COMPETÊNCIAS TÉCNICAS E IDIOMAS'}
            </h2>
            <div className="harvard-skills-block">
              <p>
                <strong>{lang === 'es' ? 'Lenguajes:' : 'Linguagens:'}</strong>{' '}
                Java 17, JavaScript (ES6+), SQL, HTML5, CSS3.
              </p>
              <p>
                <strong>{lang === 'es' ? 'Frameworks & Herramientas:' : 'Frameworks & Ferramentas:'}</strong>{' '}
                Spring Boot 3, React 18, Vite, Express, Cheerio, Axios, Tesseract.js, jspdf, PostgreSQL, SQLite, Supabase, Git, GitHub.
              </p>
              <p>
                <strong>{lang === 'es' ? 'Soporte & Sistemas:' : 'Suporte & Sistemas:'}</strong>{' '}
                {lang === 'es'
                  ? 'Diagnóstico de hardware y redes (SENA), soporte a usuarios, resolución de incidencias, Excel avanzado (tablas dinámicas, fórmulas).'
                  : 'Diagnóstico de hardware e redes (SENA), suporte a usuários, resolução de chamados, Excel avançado (tabelas dinâmicas, fórmulas).'}
              </p>
              <p>
                <strong>{lang === 'es' ? 'Idiomas:' : 'Idiomas:'}</strong>{' '}
                {lang === 'es'
                  ? 'Español (Nativo) | Portugués (Intermedio B1/B2 - lectura técnica y conversación).'
                  : 'Espanhol (Nativo) | Português (Intermediário B1/B2 - leitura técnica e conversação).'}
              </p>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        /* ========================================================
           MODAL INTERACTIVO EN PANTALLA
           ======================================================== */
        .cv-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          overflow-y: auto;
        }

        .cv-modal-container {
          background-color: #121216;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          width: 100%;
          max-width: 860px;
          max-height: 96vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          overflow: hidden;
        }

        .cv-modal-toolbar {
          padding: 0.65rem 1.15rem;
          background-color: #18181f;
          border-bottom: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          flex-shrink: 0;
        }

        .cv-modal-toolbar-title {
          font-size: 0.75rem;
          color: var(--accent-teal);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cv-modal-toolbar-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cv-font-toggle {
          display: flex;
          background: #111115;
          border: 1px solid var(--border-hairline);
          border-radius: 6px;
          padding: 2px;
        }

        .cv-font-btn {
          background: transparent;
          border: none;
          color: var(--text-tertiary);
          font-size: 0.7rem;
          padding: 3px 7px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .cv-font-btn.active {
          background: var(--surface-hover);
          color: #ffffff;
          font-weight: 600;
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

        /* ========================================================
           HOJA HARVARD (ONE-PAGE COMPACT RESUME)
           ======================================================== */
        .cv-paper {
          background-color: #ffffff;
          color: #111111;
          padding: 2rem 2.5rem;
          overflow-y: auto;
          line-height: 1.25;
          font-size: 0.82rem;
        }

        .font-harvard-serif {
          font-family: 'Times New Roman', Times, Georgia, 'Cambria', serif;
        }

        .font-harvard-sans {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        /* Encabezado */
        .harvard-header {
          text-align: center;
          margin-bottom: 0.65rem;
        }

        .harvard-name {
          font-size: 1.45rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #000000;
          margin-bottom: 0.2rem;
          line-height: 1.1;
        }

        .harvard-contact-line {
          font-size: 0.78rem;
          color: #222222;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.35rem;
          line-height: 1.3;
        }

        .harvard-subline {
          font-size: 0.74rem;
          color: #444444;
          margin-top: 0.15rem;
        }

        .harvard-contact-line .sep {
          color: #777777;
          user-select: none;
        }

        .harvard-link {
          color: #111111;
          text-decoration: none;
        }

        .harvard-link:hover {
          text-decoration: underline;
        }

        /* Secciones */
        .harvard-section {
          margin-bottom: 0.55rem;
        }

        .harvard-section-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #000000;
          border-bottom: 1px solid #000000;
          padding-bottom: 0.1rem;
          margin-bottom: 0.3rem;
        }

        .harvard-summary-text {
          font-size: 0.77rem;
          text-align: justify;
          color: #222222;
          line-height: 1.3;
          margin: 0;
        }

        /* Entradas */
        .harvard-entries {
          display: flex;
          flex-direction: column;
          gap: 0.32rem;
        }

        .harvard-entry {
          page-break-inside: avoid;
        }

        .harvard-entry-row1,
        .harvard-entry-row2 {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          font-size: 0.79rem;
          line-height: 1.25;
        }

        .harvard-institution,
        .harvard-project-title strong {
          font-weight: 700;
          color: #000000;
        }

        .harvard-location,
        .harvard-date {
          font-size: 0.75rem;
          color: #222222;
          white-space: nowrap;
          text-align: right;
        }

        .harvard-degree {
          font-size: 0.77rem;
          color: #222222;
        }

        .harvard-project-title {
          font-size: 0.78rem;
          color: #111111;
        }

        /* Viñetas */
        .harvard-bullets {
          margin: 0.12rem 0 0.18rem 0;
          padding-left: 1.15rem;
          list-style-type: disc;
        }

        .harvard-bullets li {
          font-size: 0.76rem;
          color: #222222;
          line-height: 1.28;
          margin-bottom: 0.08rem;
          text-align: justify;
        }

        /* Bloque de Competencias */
        .harvard-skills-block {
          font-size: 0.76rem;
          color: #222222;
          line-height: 1.35;
        }

        .harvard-skills-block p {
          margin: 0.08rem 0;
        }

        .harvard-skills-block strong {
          color: #000000;
          font-weight: 700;
        }

        /* ========================================================
           IMPRESIÓN / EXPORTACIÓN EXACTA A 1 SOLA HOJA (PAGE-BREAK FREE)
           ======================================================== */
        @media print {
          /* 1. Ocultar el resto del sitio y evitar páginas fantasmas */
          nav,
          main,
          footer,
          .portfolio-app-root > nav,
          .portfolio-app-root > main,
          .portfolio-app-root > footer,
          .no-print {
            display: none !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }

          html, body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #000000 !important;
            overflow: hidden !important;
          }

          @page {
            size: letter portrait;
            margin: 0.32in 0.42in;
          }

          .cv-modal-backdrop {
            position: static !important;
            display: block !important;
            width: 100% !important;
            height: auto !important;
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow: visible !important;
          }

          .cv-modal-container {
            border: none !important;
            box-shadow: none !important;
            background: #ffffff !important;
            width: 100% !important;
            max-width: 100% !important;
            max-height: none !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
          }

          .cv-paper {
            display: block !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            color: #000000 !important;
            background: #ffffff !important;
            font-size: 8.5pt !important;
            line-height: 1.22 !important;
            overflow: visible !important;
          }

          .harvard-header {
            margin-bottom: 0.35rem !important;
          }

          .harvard-name {
            font-size: 14pt !important;
            margin-bottom: 0.15rem !important;
          }

          .harvard-contact-line {
            font-size: 8pt !important;
          }

          .harvard-subline {
            font-size: 7.5pt !important;
            margin-top: 0.1rem !important;
          }

          .harvard-section {
            margin-bottom: 0.38rem !important;
          }

          .harvard-section-title {
            font-size: 8.5pt !important;
            padding-bottom: 0.05rem !important;
            margin-bottom: 0.2rem !important;
            border-bottom: 1px solid #000000 !important;
          }

          .harvard-summary-text {
            font-size: 8pt !important;
            line-height: 1.22 !important;
          }

          .harvard-entries {
            gap: 0.22rem !important;
          }

          .harvard-entry-row1,
          .harvard-entry-row2 {
            font-size: 8.2pt !important;
            line-height: 1.2 !important;
          }

          .harvard-location,
          .harvard-date {
            font-size: 7.8pt !important;
          }

          .harvard-bullets {
            margin: 0.08rem 0 0.12rem 0 !important;
            padding-left: 1rem !important;
          }

          .harvard-bullets li {
            font-size: 7.8pt !important;
            line-height: 1.2 !important;
            margin-bottom: 0.04rem !important;
          }

          .harvard-skills-block {
            font-size: 7.8pt !important;
            line-height: 1.24 !important;
          }

          .harvard-skills-block p {
            margin: 0.05rem 0 !important;
          }
        }

        @media (max-width: 768px) {
          .cv-paper {
            padding: 1.5rem 1rem;
          }

          .harvard-entry-row1,
          .harvard-entry-row2 {
            flex-direction: column;
            align-items: flex-start;
          }

          .harvard-location,
          .harvard-date {
            text-align: left;
            margin-top: 0.08rem;
          }
        }
      `}</style>
    </div>
  );
}


