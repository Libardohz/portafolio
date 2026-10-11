import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ProjectShowcase from './components/ProjectShowcase';
import SolutionsSection from './components/SolutionsSection';
import FormationTimeline from './components/FormationTimeline';
import SkillsMatrix from './components/SkillsMatrix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

function PortfolioApp() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="portfolio-app-root">
      <Navbar onOpenCv={() => setIsCvOpen(true)} />
      <main>
        <Hero onOpenCv={() => setIsCvOpen(true)} />
        <StatsBar />
        <ProjectShowcase />
        <SolutionsSection />
        <FormationTimeline />
        <SkillsMatrix />
        <ContactSection onOpenCv={() => setIsCvOpen(true)} />
      </main>
      <Footer />

      {/* Modal Interactivo e Imprimible de Hoja de Vida */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />

      <style>{`
        .portfolio-app-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
