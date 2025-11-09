import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { FeaturesPage } from './components/FeaturesPage';
import { DemoRequestPage } from './components/DemoRequestPage';
import { OnboardingSuccessPage } from './components/OnboardingSuccessPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'features' && <FeaturesPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'demo' && <DemoRequestPage onNavigate={handleNavigate} />}
        {currentPage === 'success' && <OnboardingSuccessPage onNavigate={handleNavigate} />}
      </main>

      {currentPage !== 'success' && <Footer />}
    </div>
  );
}