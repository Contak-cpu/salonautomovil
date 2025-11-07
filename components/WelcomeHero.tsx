import React from 'react';
import Button from './ui/Button';
import Text from './ui/Text';

interface WelcomeHeroProps {
  onShowCatalog: (type: '0km' | 'usados') => void;
}

const WelcomeHero: React.FC<WelcomeHeroProps> = ({ onShowCatalog }) => {
  const handleDiscoverClick = () => {
    onShowCatalog('0km');
  };

  return (
    <section className="relative flex items-start justify-start overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-12 md:pt-16 lg:pt-20" style={{height: '100vh', minHeight: '100vh', maxHeight: '100vh'}}>
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
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            src="/images/logo/logo.png" 
            alt="Salón del Automóvil" 
            className="h-56 md:h-[20rem] lg:h-[26rem] xl:h-[30rem] w-auto drop-shadow-[0_35px_45px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Main Title */}
        <Text 
          variant="heading1" 
          as="h1" 
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 text-white font-bold leading-tight fade-in-up"
        >
          Bienvenido a tu próximo auto
        </Text>
        
        {/* Persuasive Copy */}
        <div className="mb-6 max-w-3xl mx-auto">
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
            🚗 Adquirí tu nuevo auto
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default WelcomeHero;
