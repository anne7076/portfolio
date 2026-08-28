import React, { useEffect } from 'react';
import './i18n';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { 
  BentoGrid, 
  AboutBento, 
  SkillsBento, 
  ProjectsBento, 
  ExpertiseBento,
  ContactBento 
} from './components/BentoGrid';
import ProjectsPage from './components/ProjectsPage';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.scss';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <BentoGrid>
        <AboutBento />
        <SkillsBento />
        <ProjectsBento />
        <ExpertiseBento />
        <ContactBento />
      </BentoGrid>
    </>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
