import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Printer, Download, Copy, Check, FileText } from 'lucide-react';

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
Montería, Colombia | (+57) libardohernandez078@gmail.com | github.com/Libardohz | libardo-hernandez.netlify.app
Disponibilidad: Inmediata (Modalidad 100% Remoto)

==================================================
PERFIL PROFESIONAL
==================================================
Estudiante de Ingeniería de Sistemas (Universidad de Córdoba), Tecnólogo en Análisis y Desarrollo de Software (ADSO - SENA) y Técnico en Sistemas egresado del SENA. Especializado en resolución de cuellos de botella operativos mediante automatización de tareas (web scraping, bots autónomos, scripts programados), desarrollo de microaplicaciones web útiles y soporte técnico de software y hardware. Sólidas bases en desarrollo orientado a objetos (Java 17, Spring Boot), JavaScript moderno, gestión de bases de datos relacionales y herramientas ofimáticas avanzadas (Excel).

==================================================
EDUCACIÓN
==================================================
UNIVERSIDAD DE CÓRDOBA | Montería, Colombia
Pregrado en Ingeniería de Sistemas | En curso (Estado: Activo)
• Énfasis: Algoritmos y estructuras de datos, arquitectura de software, bases de datos relacionales, cálculo y gestión de proyectos tecnológicos.

SERVICIO NACIONAL DE APRENDIZAJE (SENA) | Colombia
Tecnología en Análisis y Desarrollo de Software (ADSO) | En curso (Estado: Activo)
• Énfasis: Ciclo de vida del software (SDLC), metodologías ágiles (Scrum), desarrollo backend con Java y Spring Boot, interfaces web con React y modelado UML.

SERVICIO NACIONAL DE APRENDIZAJE (SENA) | Colombia
Técnico en Sistemas | Certificado (Graduado)
• Énfasis: Diagnóstico, mantenimiento preventivo y correctivo de cómputo, infraestructura de redes de datos, cableado estructurado, seguridad básica y soporte a usuarios.

==================================================
PROYECTOS DE INGENIERÍA & AUTOMATIZACIÓN
==================================================
Task Manager & Gestor PWA | React 18, Vite, Supabase, Groq AI, Web Workers, Tesseract.js
• Diseñó e implementó una aplicación web progresiva (PWA) offline-first con sincronización condicional reactiva a base de datos PostgreSQL vía Supabase.
• Integró motor de reconocimiento óptico de caracteres (OCR) ejecutado en segundo plano con Web Workers, procesando documentos en cliente con 0ms de latencia en red.
• Incorporó exportación automatizada de reportes en PDF y asistencia de inferencia con modelos LLM ultrarrápidos vía Groq SDK.

OfertasTracker: Crawler Autónomo & Bot Telegram | Node.js, Cheerio, Axios, SQLite, Telegram API
• Diseñó un web scraper desatendido programado con cron jobs para rastreo periódico de catálogos comerciales de grandes superficies.
• Estructuró motor de persistencia y análisis en SQLite para contrastar precios contra promedios históricos y filtrar falsas promociones de retail.
• Automatizó el despacho de alertas push en tiempo real a través de Telegram Bot API en menos de 2 segundos tras detectar anomalías de precio.

Sistema de Control y Registro Vehicular | Java 17, Spring Boot 3, Spring MVC, Thymeleaf, JPA
• Arquitectó backend empresarial multicapa (Controlador, Servicio, Repositorio) para la trazabilidad y auditoría de accesos vehiculares en campus.
• Implementó validaciones transaccionales estrictas a nivel de dominio para impedir registros simultáneos sin salida y garantizar consistencia de datos.

Catálogo de Dispositivos & Patrones POO | Java 17, Patrones de Diseño GoF, Maven
• Implementó patrón Singleton thread-safe con double-checked locking y ConcurrentHashMap para gestión centralizada de inventario.
• Aplicó principios SOLID y polimorfismo dinámico garantizando desacoplamiento estructural y facilidad de extensión de componentes.

==================================================
EXPERIENCIA PRÁCTICA & SOPORTE TÉCNICO
==================================================
Desarrollador Independiente & Soporte de Sistemas | Colombia (2023 - Presente)
• Diagnóstico, mantenimiento preventivo y correctivo de equipos de cómputo, configuración de periféricos y solución de fallas operativas de software.
• Automatización de flujos repetitivos mediante scripts en Node.js, optimizando tiempos de recolección de datos y reportes operativos.
• Asistencia en gestión y depuración de bases de datos relacionales (SQLite / PostgreSQL) y elaboración de reportes en Microsoft Excel.

==================================================
COMPETENCIAS TÉCNICAS E IDIOMAS
==================================================
• Lenguajes de Programación: Java 17, JavaScript (ES6+), SQL, HTML5, CSS3.
• Frameworks & Librerías: Spring Boot 3, React 18, Vite, Express, Cheerio, Axios, Tesseract.js.
• Bases de Datos & Cloud: PostgreSQL, SQLite, Supabase, Git, GitHub, RESTful APIs, Netlify.
• Soporte & Sistemas: Diagnóstico de hardware y redes (SENA), soporte técnico a usuarios, Excel avanzado (tablas dinámicas, fórmulas, reportes).
• Idiomas: Español (Nativo) | Portugués (Intermedio B1/B2 - lectura técnica y conversación).`;

  const plainTextHarvardPt = `LIBARDO HERNÁNDEZ
Montería, Colômbia | (+57) libardohernandez078@gmail.com | github.com/Libardohz | libardo-hernandez.netlify.app
Disponibilidade: Imediata (Modalidade 100% Remoto)

==================================================
PERFIL PROFISSIONAL
==================================================
Estudante de Engenharia de Sistemas (Universidade de Córdoba), Tecnólogo em Análise e Desenvolvimento de Software (ADSO - SENA) e Técnico em Sistemas formado pelo SENA. Especializado na resolução de gargalos operacionais por meio de automação de processos (web scraping, bots autônomos, scripts agendados), desenvolvimento ágil de microaplicações web e suporte técnico a sistemas e hardware. Sólida fundamentação em desenvolvimento orientado a objetos (Java 17, Spring Boot), JavaScript moderno, bancos de dados relacionais e ferramentas de escritório avançadas (Excel).

==================================================
FORMAÇÃO ACADÊMICA
==================================================
UNIVERSIDADE DE CÓRDOBA | Montería, Colômbia
Graduação em Engenharia de Sistemas | Em andamento (Status: Ativo)
• Ênfase: Algoritmos e estruturas de dados, arquitetura de software, bancos de dados relacionais, cálculo e gestão de projetos tecnológicos.

SERVIÇO NACIONAL DE APRENDIZAGEM (SENA) | Colômbia
Tecnólogo em Análise e Desenvolvimento de Software (ADSO) | Em andamento (Status: Ativo)
• Ênfase: Ciclo de vida de software (SDLC), metodologias ágeis (Scrum), desenvolvimento backend com Java e Spring Boot, interfaces com React e modelagem UML.

SERVIÇO NACIONAL DE APRENDIZAGEM (SENA) | Colômbia
Técnico em Sistemas | Certificado (Graduado)
• Ênfase: Diagnóstico e manutenção preventiva/corretiva de computadores, redes de dados, cabeamento estruturado, segurança básica e suporte técnico a usuários.

==================================================
PROJETOS DE ENGENHARIA & AUTOMAÇÃO
==================================================
Task Manager & Gestor PWA | React 18, Vite, Supabase, Groq AI, Web Workers, Tesseract.js
• Projetou e desenvolveu Progressive Web App (PWA) offline-first com sincronização condicional a banco PostgreSQL via Supabase.
• Integrou motor de reconhecimento óptico de caracteres (OCR) em Web Workers, processando documentos no cliente com 0ms de latência de rede.
• Incorporou geração client-side de relatórios em PDF e inferência com modelos LLM ultrarrápidos via Groq SDK.

OfertasTracker: Crawler Autônomo & Bot Telegram | Node.js, Cheerio, Axios, SQLite, Telegram API
• Desenvolveu web scraper autônomo agendado com cron jobs para monitoramento contínuo de catálogos do grande varejo.
• Estruturou rotina de persistência e análise em SQLite para contrastar preços com históricos médios e filtrar falsas promoções.
• Automatizou o envio de alertas push em tempo real via Telegram Bot API em menos de 2 segundos após detecção de anomalias.

Sistema de Controle e Registro Veicular | Java 17, Spring Boot 3, Spring MVC, Thymeleaf, JPA
• Arquitetou backend corporativo em camadas (Controller, Service, Repository) para rastreabilidade de acessos veiculares em campus.
• Implementou validações transacionais rigorosas no domínio para impedir entradas duplicadas e garantir integridade na auditoria.

Catálogo de Dispositivos & Padrões POO | Java 17, Padrões de Projeto GoF, Maven
• Implementou padrão Singleton thread-safe com double-checked locking e ConcurrentHashMap para gerenciamento centralizado de inventário.
• Aplicou princípios SOLID e polimorfismo dinâmico, assegurando baixo acoplamento e extensibilidade limpa do código.

==================================================
EXPERIÊNCIA PRÁTICA & SUPORTE TÉCNICO
==================================================
Desenvolvedor Independente & Suporte de Sistemas | Colômbia (2023 - Presente)
• Diagnóstico e manutenção de equipamentos de informática, configuração de periféricos e resolução de falhas operacionais.
• Automação de rotinas repetitivas com scripts em Node.js, otimizando o tempo de coleta de dados e relatórios operacionais.
• Suporte na gestão de bancos relacionais (SQLite / PostgreSQL) e confecção de relatórios avançados em Microsoft Excel.

==================================================
COMPETÊNCIAS TÉCNICAS E IDIOMAS
==================================================
• Linguagens de Programação: Java 17, JavaScript (ES6+), SQL, HTML5, CSS3.
• Frameworks & Bibliotecas: Spring Boot 3, React 18, Vite, Express, Cheerio, Axios, Tesseract.js.
• Bancos de Dados & Cloud: PostgreSQL, SQLite, Supabase, Git, GitHub, RESTful APIs, Netlify.
• Suporte & Sistemas: Diagnóstico de hardware e redes (SENA), suporte técnico a usuários, Excel avançado (tabelas dinâmicas, fórmulas).
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
            <span>CV_HARVARD_FORMAT_{t.profile.name.replace(/\s+/g, '_').toUpperCase()}.PDF</span>
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
              <span>{copiedText ? (lang === 'es' ? '¡Copiado ATS!' : 'Copiado ATS!') : (lang === 'es' ? 'Copiar Texto ATS' : 'Copiar Texto ATS')}</span>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handlePrint}
              title="Imprimir directamente o guardar como archivo PDF perfecto"
            >
              <Printer size={15} />
              <span>{lang === 'es' ? 'Guardar PDF / Imprimir' : 'Salvar PDF / Imprimir'}</span>
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

        {/* Hoja Harvard Oficial Renderizada */}
        <div className={`cv-paper ${fontStyle === 'serif' ? 'font-harvard-serif' : 'font-harvard-sans'}`}>
          {/* ENCABEZADO HARVARD (Nombre centrado, barra de contacto unificada) */}
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
                ? 'Estudiante de Ingeniería de Sistemas (Universidad de Córdoba), Tecnólogo en Análisis y Desarrollo de Software (ADSO - SENA) y Técnico en Sistemas egresado del SENA. Especializado en la resolución de cuellos de botella operativos mediante automatización de tareas (web scraping, bots autónomos, scripts programados), desarrollo de microaplicaciones web útiles y soporte técnico de software y hardware. Sólidas bases en desarrollo orientado a objetos (Java 17, Spring Boot), JavaScript moderno, gestión de bases de datos relacionales y herramientas ofimáticas avanzadas (Excel).'
                : 'Estudante de Engenharia de Sistemas (Universidade de Córdoba), Tecnólogo em Análise e Desenvolvimento de Software (ADSO - SENA) e Técnico em Sistemas formado pelo SENA. Especializado na resolução de gargalos operacionais por meio de automação de processos (web scraping, bots autônomos, scripts agendados), desenvolvimento ágil de microaplicações web e suporte técnico a sistemas e hardware. Sólida fundamentação em desenvolvimento orientado a objetos (Java 17, Spring Boot), JavaScript moderno, bancos de dados relacionais e ferramentas de escritório avançadas (Excel).'}
            </p>
          </section>

          {/* 2. EDUCACIÓN (Formato Harvard FAS: Institución a la izq, Ciudad a la der; Título cursiva a la izq, Fechas a la der) */}
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
                    <em>{lang === 'es' ? 'En curso (Estado: Activo)' : 'Em andamento (Status: Ativo)'}</em>
                  </span>
                </div>
                <ul className="harvard-bullets">
                  <li>
                    {lang === 'es'
                      ? 'Formación universitaria en algoritmos y estructuras de datos, arquitectura de software, bases de datos relacionales, cálculo y gestión de proyectos tecnológicos.'
                      : 'Formação universitária em algoritmos e estruturas de dados, arquitetura de software, bancos de dados relacionais, cálculo e governança de tecnologia.'}
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
                    <em>{lang === 'es' ? 'En curso (Estado: Activo)' : 'Em andamento (Status: Ativo)'}</em>
                  </span>
                </div>
                <ul className="harvard-bullets">
                  <li>
                    {lang === 'es'
                      ? 'Ciclo de vida del software (SDLC), metodologías ágiles (Scrum), desarrollo backend con Java y Spring Boot 3, interfaces con React y modelado UML.'
                      : 'Ciclo de vida de software (SDLC), metodologias ágeis (Scrum), desenvolvimento backend com Java e Spring Boot 3, interfaces com React e modelagem UML.'}
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
                      ? 'Diagnóstico, mantenimiento preventivo y correctivo de hardware, configuración de redes de datos, cableado estructurado, soporte de sistemas y seguridad lógica.'
                      : 'Diagnóstico e manutenção preventiva e corretiva de hardware, infraestrutura de redes, cabeamento estruturado, suporte técnico e segurança básica.'}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. PROYECTOS DE INGENIERÍA & AUTOMATIZACIÓN (STAR Framework: Verbo de acción + reto técnico + resultado) */}
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
                      ? 'Diseñó e implementó una Progressive Web App (PWA) offline-first con persistencia local y sincronización reactiva a base de datos PostgreSQL mediante Supabase.'
                      : 'Projetou e desenvolveu uma Progressive Web App (PWA) offline-first com persistência local e sincronização reativa a banco PostgreSQL via Supabase.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Integró motor de reconocimiento óptico de caracteres (OCR) ejecutado en segundo plano con Web Workers, procesando documentos en cliente con 0ms de latencia en red y sin comprometer datos en servidores externos.'
                      : 'Integrou motor de reconhecimento óptico de caracteres (OCR) em Web Workers, processando documentos no cliente com 0ms de latência de rede sem expor dados a servidores externos.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Incorporó exportación automatizada de reportes en PDF y asistencia de inferencia con modelos LLM ultrarrápidos vía Groq SDK.'
                      : 'Incorporou exportação de relatórios em PDF e inferência assistida por modelos LLM ultrarrápidos via Groq SDK.'}
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
                      ? 'Desarrolló un crawler desatendido programado con cron jobs para extracción periódica de catálogos comerciales en sitios de gran volumen (Almacenes Éxito).'
                      : 'Desenvolveu um crawler autônomo agendado com rotinas cron para extração periódica de catálogos de e-commerce de grande porte.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Estructuró motor de persistencia y análisis en SQLite para contrastar precios contra promedios históricos, descartando falsas rebajas y filtrando promociones anómalas.'
                      : 'Estruturou rotina de persistência e análise em SQLite para contrastar preços contra médias históricas, descartando falsos descontos publicitários.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Automatizó el despacho de alertas push en tiempo real a través de Telegram Bot API en menos de 2 segundos tras detectar anomalías de precio.'
                      : 'Automatizou o disparo de alertas push em tempo real via Telegram Bot API em menos de 2 segundos após detectar quedas reais de preço.'}
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
                      ? 'Arquitectó backend empresarial desacoplado en capas (Controller, Service, Repository) para la trazabilidad y auditoría de ingresos/egresos vehiculares en campus.'
                      : 'Arquitetou backend corporativo em camadas (Controller, Service, Repository) para rastreabilidade e auditoria de entradas e saídas de veículos em campus.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Implementó validaciones transaccionales estrictas en la capa de servicio para prevenir registros simultáneos sin salida previa y asegurar la consistencia del inventario activo.'
                      : 'Implementou validações transacionais rigorosas na camada de serviço para evitar duplicidades de entrada e assegurar a consistência do inventário ativo.'}
                  </li>
                </ul>
              </div>

              {/* Patrones POO */}
              <div className="harvard-entry">
                <div className="harvard-entry-row1">
                  <span className="harvard-project-title">
                    <strong>Catálogo de Dispositivos & Patrones POO</strong> | <em>Java 17, Patrones GoF, Maven</em>
                  </span>
                  <span className="harvard-date"><em>2024</em></span>
                </div>
                <ul className="harvard-bullets">
                  <li>
                    {lang === 'es'
                      ? 'Implementó patrón Singleton thread-safe con Double-Checked Locking y ConcurrentHashMap para gestión centralizada de stock sin bloqueos de rendimiento.'
                      : 'Implementou padrão Singleton thread-safe com Double-Checked Locking e ConcurrentHashMap para gerenciamento centralizado de estoque sem gargalos de desempenho.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Aplicó principios SOLID y polimorfismo dinámico garantizando desacoplamiento estructural y facilidad de extensión ante nuevas familias de productos.'
                      : 'Aplicou princípios SOLID e polimorfismo dinâmico, assegurando baixo acoplamento e extensibilidade limpa diante de novos produtos.'}
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
                      ? 'Diagnóstico, mantenimiento preventivo y correctivo de hardware y software, configuración de periféricos y solución ágil de incidencias técnicas.'
                      : 'Diagnóstico e manutenção de equipamentos de informática, configuração de redes locais e resolução de falhas operacionais.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Automatización de tareas repetitivas de recolección y análisis de información mediante scripts en Node.js, reduciendo horas operativas manuales.'
                      : 'Automação de rotinas repetitivas de coleta de dados com scripts em Node.js, otimizando o tempo operacional.'}
                  </li>
                  <li>
                    {lang === 'es'
                      ? 'Gestión de reportes técnicos y análisis de datos en Microsoft Excel avanzado (tablas dinámicas, fórmulas lógicas y validación de datos).'
                      : 'Gestão de relatórios técnicos e análise de dados em Microsoft Excel avançado (tabelas dinâmicas, fórmulas e validações).'}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. COMPETENCIAS TÉCNICAS E IDIOMAS (Formato en línea categorizado Harvard) */}
          <section className="harvard-section">
            <h2 className="harvard-section-title">
              {lang === 'es' ? 'COMPETENCIAS TÉCNICAS E IDIOMAS' : 'COMPETÊNCIAS TÉCNICAS E IDIOMAS'}
            </h2>
            <div className="harvard-skills-block">
              <p>
                <strong>{lang === 'es' ? 'Lenguajes de Programación:' : 'Linguagens de Programação:'}</strong>{' '}
                Java 17, JavaScript (ES6+), SQL, HTML5, CSS3.
              </p>
              <p>
                <strong>{lang === 'es' ? 'Frameworks & Librerías:' : 'Frameworks & Bibliotecas:'}</strong>{' '}
                Spring Boot 3, Spring MVC, React 18, Vite, Express, Cheerio, Axios, Tesseract.js OCR, jspdf.
              </p>
              <p>
                <strong>{lang === 'es' ? 'Bases de Datos & Cloud:' : 'Bancos de Dados & Cloud:'}</strong>{' '}
                PostgreSQL, SQLite, Supabase, Git, GitHub, RESTful APIs, Netlify, Cron Jobs.
              </p>
              <p>
                <strong>{lang === 'es' ? 'Sistemas & Soporte Técnico:' : 'Sistemas & Suporte Técnico:'}</strong>{' '}
                {lang === 'es'
                  ? 'Diagnóstico de hardware y redes de datos (SENA), soporte técnico a usuarios, resolución de incidencias, Microsoft Excel avanzado (tablas dinámicas, fórmulas, reportes).'
                  : 'Diagnóstico de hardware e redes de dados (SENA), suporte técnico a usuários, resolução de chamados, Microsoft Excel avançado (tabelas dinâmicas, fórmulas).'}
              </p>
              <p>
                <strong>{lang === 'es' ? 'Idiomas:' : 'Idiomas:'}</strong>{' '}
                {lang === 'es'
                  ? 'Español (Nativo) | Portugués (Intermedio B1/B2 - lectura técnica, escritura y conversación aplicada).'
                  : 'Espanhol (Nativo) | Português (Intermediário B1/B2 - leitura técnica, escrita e conversação aplicada).'}
              </p>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        /* Estilos del Modal */
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
          padding: 1.25rem;
          overflow-y: auto;
        }

        .cv-modal-container {
          background-color: #121216;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          width: 100%;
          max-width: 890px;
          max-height: 95vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          overflow: hidden;
        }

        /* Barra de herramientas */
        .cv-modal-toolbar {
          padding: 0.75rem 1.25rem;
          background-color: #18181f;
          border-bottom: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .cv-modal-toolbar-title {
          font-size: 0.76rem;
          color: var(--accent-teal);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cv-modal-toolbar-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
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
          font-size: 0.72rem;
          padding: 3px 8px;
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
          width: 32px;
          height: 32px;
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
           HOJA HARVARD STANDARD (ESTÁNDAR OFICIAL HARVARD RESUME)
           ======================================================== */
        .cv-paper {
          background-color: #ffffff;
          color: #111111;
          padding: 3rem 3.5rem;
          overflow-y: auto;
          line-height: 1.35;
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
          margin-bottom: 1.25rem;
        }

        .harvard-name {
          font-size: 1.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #000000;
          margin-bottom: 0.35rem;
          line-height: 1.1;
        }

        .harvard-contact-line {
          font-size: 0.88rem;
          color: #222222;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.45rem;
          line-height: 1.4;
        }

        .harvard-subline {
          font-size: 0.8rem;
          color: #444444;
          margin-top: 0.25rem;
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

        /* Secciones Harvard */
        .harvard-section {
          margin-bottom: 1.15rem;
        }

        .harvard-section-title {
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #000000;
          border-bottom: 1px solid #000000;
          padding-bottom: 0.15rem;
          margin-bottom: 0.55rem;
        }

        .harvard-summary-text {
          font-size: 0.86rem;
          text-align: justify;
          color: #222222;
          line-height: 1.45;
          margin: 0;
        }

        /* Entradas (Educación, Proyectos, Experiencia) */
        .harvard-entries {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .harvard-entry {
          page-break-inside: avoid;
        }

        .harvard-entry-row1,
        .harvard-entry-row2 {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          font-size: 0.88rem;
          line-height: 1.35;
        }

        .harvard-institution,
        .harvard-project-title strong {
          font-weight: 700;
          color: #000000;
        }

        .harvard-location,
        .harvard-date {
          font-size: 0.84rem;
          color: #222222;
          white-space: nowrap;
          text-align: right;
        }

        .harvard-degree {
          font-size: 0.86rem;
          color: #222222;
        }

        .harvard-project-title {
          font-size: 0.87rem;
          color: #111111;
        }

        /* Viñetas Harvard */
        .harvard-bullets {
          margin: 0.25rem 0 0.35rem 0;
          padding-left: 1.25rem;
          list-style-type: disc;
        }

        .harvard-bullets li {
          font-size: 0.84rem;
          color: #222222;
          line-height: 1.38;
          margin-bottom: 0.15rem;
          text-align: justify;
        }

        /* Bloque de Habilidades */
        .harvard-skills-block {
          font-size: 0.85rem;
          color: #222222;
          line-height: 1.5;
        }

        .harvard-skills-block p {
          margin: 0.18rem 0;
        }

        .harvard-skills-block strong {
          color: #000000;
          font-weight: 700;
        }

        /* ========================================================
           IMPRESIÓN / EXPORTACIÓN PERFECTA A PDF (HARVARD STANDARDS)
           ======================================================== */
        @media print {
          body * {
            visibility: hidden !important;
          }

          .cv-modal-backdrop {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            background: none !important;
            padding: 0 !important;
            overflow: visible !important;
          }

          .cv-modal-container {
            border: none !important;
            box-shadow: none !important;
            max-width: 100% !important;
            max-height: none !important;
            overflow: visible !important;
            background: #ffffff !important;
          }

          .no-print {
            display: none !important;
          }

          .cv-paper {
            visibility: visible !important;
            display: block !important;
            padding: 0 !important;
            margin: 0.5in 0.6in !important;
            color: #000000 !important;
            background: #ffffff !important;
            overflow: visible !important;
          }

          .cv-paper * {
            visibility: visible !important;
          }

          .harvard-section-title {
            border-bottom: 1px solid #000000 !important;
          }

          @page {
            size: letter;
            margin: 0.4in 0.5in;
          }
        }

        @media (max-width: 768px) {
          .cv-paper {
            padding: 1.75rem 1.25rem;
          }

          .harvard-entry-row1,
          .harvard-entry-row2 {
            flex-direction: column;
            align-items: flex-start;
          }

          .harvard-location,
          .harvard-date {
            text-align: left;
            margin-top: 0.1rem;
          }
        }
      `}</style>
    </div>
  );
}

