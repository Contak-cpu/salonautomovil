import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import FinancingBanner from './components/FinancingBanner';
import VehicleSlider from './components/VehicleSlider';
import BrandSlider from './components/BrandSlider';
import NewCarsSection from './components/NewCars/NewCarsSection';
import UsedCarsSection from './components/UsedCars/UsedCarsSection';
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
          <Hero onShowCatalog={handleShowCatalog} />
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
        <div className="pt-32">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Gestoría Automotor
              </h1>
              <p className="text-gray-300 mb-8">
                Próximamente disponible - Estamos trabajando en esta sección
              </p>
              <button 
                onClick={handleGoHome}
                className="bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;