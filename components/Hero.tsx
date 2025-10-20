import React from 'react';
import Button from './ui/Button';
import Text from './ui/Text';

interface HeroProps {
  onShowCatalog: (type: '0km' | 'usados') => void;
}

const Hero: React.FC<HeroProps> = ({ onShowCatalog }) => {
  return (
    <section className="h-screen flex flex-col md:flex-row">
      <div 
        className="relative w-full h-1/2 md:h-full group overflow-hidden"
        style={{backgroundImage: "url('/images/hero-0km-cars.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-start items-center text-center p-6 pt-16">
          <div className="transform transition-transform duration-300 group-hover:scale-105">
            <Text variant="heading1" as="h2" className="text-5xl md:text-7xl lg:text-8xl">AUTOS 0KM</Text>
            <Text variant="bodyMedium" className="mt-6 text-white text-lg md:text-xl lg:text-2xl max-w-md">
              La última tecnología y el confort que buscás, directo de fábrica.
            </Text>
            <Button 
              variant="primary"
              onClick={() => onShowCatalog('0km')} 
              className="mt-10 text-lg px-10 py-4"
            >
              Ver 0km
            </Button>
          </div>
        </div>
      </div>
      <div 
        className="relative w-full h-1/2 md:h-full group overflow-hidden"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1964&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-start items-center text-center p-6 pt-16">
          <div className="transform transition-transform duration-300 group-hover:scale-105">
            <Text variant="heading1" as="h2" className="text-5xl md:text-7xl lg:text-8xl">AUTOS USADOS</Text>
            <Text variant="bodyMedium" className="mt-6 text-white text-lg md:text-xl lg:text-2xl max-w-md">
              Selección premium de vehículos usados con garantía y confianza.
            </Text>
            <Button 
              variant="primary"
              onClick={() => onShowCatalog('usados')} 
              className="mt-10 text-lg px-10 py-4"
            >
              Ver Usados
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;