import React from 'react';
import Button from './ui/Button';
import Text from './ui/Text';

interface WelcomeHeroProps {
  onShowCatalog: (type: '0km' | 'usados') => void;
}

const WelcomeHero: React.FC<WelcomeHeroProps> = ({ onShowCatalog }) => {
  const handleDiscoverClick = () => {
    // Scroll to the next section (Hero section)
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800" style={{height: '100vh', minHeight: '100vh', maxHeight: '100vh'}}>
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-0km-cars.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto" style={{paddingTop: '1.5rem'}}>
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/images/logo/logo.png" 
            alt="Salón del Automóvil" 
            className="h-48 md:h-64 lg:h-80 xl:h-96 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Main Title */}
        <Text 
          variant="heading1" 
          as="h1" 
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 text-white font-bold leading-tight fade-in-up"
        >
          ¡Bienvenidos al Salón del Automóvil!
        </Text>
        
        {/* Persuasive Copy */}
        <div className="mb-8 max-w-3xl mx-auto">
          <Text 
            variant="bodyLarge" 
            className="text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed font-light"
          >
            <span className="text-accent font-semibold">46 años moviendo tus sueños.</span> Hemos entregado miles de historias y seguimos siendo tu mejor ruta para conseguir ese 0km o usado certificado. Con la experiencia y la solidez de un líder, te garantizamos la mejor operación, financiación y respaldo postventa.
          </Text>
        </div>
        
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary"
            onClick={handleDiscoverClick}
            className="text-lg px-10 py-4 rounded-2xl shadow-2xl hover:shadow-accent/30 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide"
          >
            🚗 Descubrí nuestra historia y stock
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;
