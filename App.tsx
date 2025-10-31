import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleShowCatalog = (type: '0km' | 'usados' | 'gestoria') => {
    navigate(`/${type}`);
  };

  const handleGoHome = () => {
    navigate('/home');
  };

  // Al cambiar de sección, regresar al inicio de la página
  useEffect(() => {
    // Para gestoría, considerar altura del header fixed
    if (location.pathname === '/gestoria') {
      const scrollToGestoria = () => {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 128; // Altura del header con logo
        window.scrollTo({ top: headerHeight, behavior: 'auto' });
      };
      scrollToGestoria();
      // Múltiples intentos para asegurar el scroll
      const timers = [
        setTimeout(scrollToGestoria, 10),
        setTimeout(scrollToGestoria, 50),
        setTimeout(scrollToGestoria, 100),
        setTimeout(scrollToGestoria, 200),
      ];
      return () => timers.forEach(timer => clearTimeout(timer));
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  // Redirigir / a /home
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home', { replace: true });
    }
  }, [location.pathname, navigate]);

  const currentView = location.pathname === '/home' ? 'home' : 
                      location.pathname === '/0km' ? '0km' :
                      location.pathname === '/usados' ? 'usados' :
                      location.pathname === '/gestoria' ? 'gestoria' : 'home';

  // Temporalmente ocultamos la página de construcción
  // return <ConstructionPage />;

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      <Header onShowCatalog={handleShowCatalog} onGoHome={handleGoHome} currentView={currentView} />
      
      <Routes>
        <Route path="/home" element={
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
        } />
        <Route path="/0km" element={<NewCarsSection />} />
        <Route path="/usados" element={<UsedCarsSection />} />
        <Route path="/gestoria" element={<GestoriaAutomotor />} />
        <Route path="*" element={
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
        } />
      </Routes>
      
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

const App: React.FC = () => {
  return <AppContent />;
};

export default App;