import React, { useState } from 'react';
import Header from './components/Header';
import WelcomeHero from './components/WelcomeHero';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import FinancingBanner from './components/FinancingBanner';
import VehicleSlider from './components/VehicleSlider';
import BrandSlider from './components/BrandSlider';
import NewCarsSection from './components/NewCars/NewCarsSection';
import UsedCarsSection from './components/UsedCars/UsedCarsSection';
import GestoriaAutomotor from './components/GestoriaAutomotor';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
// import ConstructionPage from './components/ConstructionPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | '0km' | 'usados' | 'gestoria'>('home');

  const handleShowCatalog = (type: '0km' | 'usados' | 'gestoria') => {
    setCurrentView(type);
  };

  const handleGoHome = () => {
    setCurrentView('home');
  };

  // Temporalmente ocultamos la página de construcción
  // return <ConstructionPage />;

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onShowCatalog={handleShowCatalog} onGoHome={handleGoHome} />
      
      {currentView === 'home' && (
        <>
          <WelcomeHero onShowCatalog={handleShowCatalog} />
          <div id="hero-section" style={{marginTop: '0'}}>
            <Hero onShowCatalog={handleShowCatalog} />
          </div>
          <VehicleSlider onShowCatalog={handleShowCatalog} />
          <BrandSlider />
          <WhyChooseUs />
          <FinancingBanner />
        </>
      )}
      
      {currentView === '0km' && (
        <NewCarsSection />
      )}
      
      {currentView === 'usados' && (
        <UsedCarsSection />
      )}
      
      {currentView === 'gestoria' && (
        <GestoriaAutomotor />
      )}
      
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;